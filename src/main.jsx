import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Search,
  BookOpen,
  FileText,
  Wrench,
  ExternalLink,
  Menu,
  X,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  AlertTriangle,
  Gauge,
  Layers,
  Image as ImageIcon,
  Save,
  Download,
  Copy
} from 'lucide-react';
import { manualPages as baseManualPages } from './manualPages.js';
import { mk3ManualPages } from './data/mk3ManualPages.js';
import './styles.css';

const topicalSections = [
  { title: 'Dashboard & Controls', pages: [4], tags: 'dashboard instruments controls switches gauges warning lights' },
  { title: 'Specifications & Capacities', pages: [5, 6], tags: 'specifications capacity timing plug gap compression oil dimensions' },
  { title: 'Motor, Starting & Running', pages: [7, 8, 9], tags: 'engine motor starting running gearbox transmission overdrive towing' },
  { title: 'Lubrication & Maintenance', pages: [10, 11, 25, 26, 27, 28], tags: 'lubrication maintenance grease oil service miles' },
  { title: 'Electrical, Battery & Fuses', pages: [12, 13], tags: 'electrical lucas autolite battery positive earth fuse fuses bulbs lamps wiper' },
  { title: 'Brakes & Servo', pages: [13], tags: 'brakes servo dunlop brake fluid handbrake vacuum' },
  { title: 'Fuel System & Carburetter', pages: [15, 16], tags: 'fuel carburetter carter idle fast idle choke throttle linkage' },
  { title: 'Tyres, Wheels & Alignment', pages: [17, 18, 19], tags: 'tyres tires wheels alignment bearings toe-in castor camber' },
  { title: 'Cooling, Heating & Rear Axle', pages: [20, 21], tags: 'cooling fan radiator heater ventilation antifreeze coolant rear axle powr-lok drive belt' },
  { title: 'Interior & Owner Information', pages: [2, 3, 22, 23, 31, 32], tags: 'owner warranty seats upholstery vehicle particulars chassis engine key' }
];

const modelLabels = {
  all: 'All Models',
  mk1: 'Mk I',
  mk2: 'Mk II',
  mk3: 'Mk III'
};

const BASE_PDF = '/manuals/jensen_cv8_owners_manual.pdf';
const MK3_PDF = '/manuals/jensen-cv8-mk3-instruction-manual.pdf';

function getPageType(p) {
  const title = String(p.title || '').toLowerCase();
  const text = String(p.text ?? p.ocrText ?? '').trim();

  if (p.hidden || p.type === 'blank' || title === 'blank page') return 'blank';
  if (p.type) return p.type;
  if (!text) return 'diagram';

  return 'text';
}

function normaliseManualPages(pages, fallbackModel, fallbackModelLabel, fallbackPdf) {
  return pages.map((p) => {
    const text = p.text ?? p.ocrText ?? '';
    const type = getPageType({ ...p, text });
    const isBlank = type === 'blank';
    const isImageOnly = type === 'diagram' || p.isImageOnly === true;

    return {
      ...p,
      type,
      hidden: isBlank || p.hidden === true,
      isImageOnly,
      model: p.model || fallbackModel,
      modelLabel: p.modelLabel || fallbackModelLabel,
      sourcePdf: p.sourcePdf || fallbackPdf,
      sourcePage: p.sourcePage || p.page,
      text,
      summary: p.summary ?? p.plainEnglish ?? (isImageOnly ? 'Image-only reference page. Use the original scan for this page.' : ''),
      title: p.title || `Page ${p.page}`
    };
  });
}

function getVisiblePages(pages) {
  return pages.filter(p => !p.hidden);
}

function getNearestVisiblePage(pages, targetPage, direction = 1) {
  const visible = getVisiblePages(pages);
  if (!visible.length) return null;

  const exact = visible.find(p => p.page === targetPage);
  if (exact) return exact;

  const sorted = [...visible].sort((a, b) => a.page - b.page);

  if (direction >= 0) {
    return sorted.find(p => p.page >= targetPage) || sorted[sorted.length - 1];
  }

  return [...sorted].reverse().find(p => p.page <= targetPage) || sorted[0];
}

const basePages = normaliseManualPages(
  baseManualPages,
  'base',
  'Jensen C-V8',
  BASE_PDF
);

const mk3Pages = normaliseManualPages(
  mk3ManualPages,
  'mk3',
  'Jensen C-V8 Mk III',
  MK3_PDF
);

const GENERIC_SUMMARY = 'OCR text extracted from this scanned manual page';

const INFORMATIONAL_TITLES = [
  'foreword', 'introduction', 'handbook of instructions', 'vehicle particulars',
  'warranty', 'index', 'contents', 'cover', 'title page', 'jensen'
];

function classifyPage(page) {
  if (page.isImageOnly || page.type === 'diagram') return 'diagram';
  if (!page.text?.trim()) return 'diagram';

  const titleLower = (page.title || '').toLowerCase();
  if (INFORMATIONAL_TITLES.some(kw => titleLower.includes(kw))) return 'informational';

  // A checklist is only meaningful if items are real instructions (not short OCR fragments)
  const hasRealChecklist = Array.isArray(page.checklist) &&
    page.checklist.length > 0 &&
    page.checklist.some(item => item.length > 35);

  if (hasRealChecklist) return 'repair';

  return 'reference';
}

function highlight(text, q) {
  if (!q.trim()) return text;

  const safeQuery = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${safeQuery})`, 'ig'));

  return parts.map((part, i) =>
    part.toLowerCase() === q.toLowerCase() ? <mark key={i}>{part}</mark> : part
  );
}

function App() {
  const [query, setQuery] = useState('');
  const [pageNo, setPageNo] = useState(4);
  const [zoom, setZoom] = useState(100);
  const [selectedModel, setSelectedModel] = useState(() => {
    return localStorage.getItem('jensen-model') || 'all';
  });
  const [drawer, setDrawer] = useState(false);
  const [mode, setMode] = useState('cards');
  const [copied, setCopied] = useState(false);

  const [ocrEdits, setOcrEdits] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('jensen-ocr-edits') || '{}');
    } catch {
      return {};
    }
  });

  // On first load, fetch the committed corrections file and merge it under
  // any localStorage edits (localStorage wins so in-progress work is kept).
  useEffect(() => {
    fetch('/ocr-corrections.json')
      .then(r => r.ok ? r.json() : {})
      .then(committed => {
        if (!committed || !Object.keys(committed).length) return;
        setOcrEdits(prev => ({ ...committed, ...prev }));
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    localStorage.setItem('jensen-model', selectedModel);
  }, [selectedModel]);

  useEffect(() => {
    localStorage.setItem('jensen-ocr-edits', JSON.stringify(ocrEdits));
  }, [ocrEdits]);

  const selectedModelLabel = modelLabels[selectedModel] || modelLabels.all;

  const activeManualPages = useMemo(() => {
    if (selectedModel === 'mk3') return mk3Pages;
    return basePages;
  }, [selectedModel]);

  const visibleManualPages = useMemo(() => {
    return getVisiblePages(activeManualPages);
  }, [activeManualPages]);

  const activeTopicalSections = useMemo(() => {
    const visiblePageNumbers = new Set(visibleManualPages.map(p => p.page));

    return topicalSections
      .map(section => ({
        ...section,
        pages: section.pages.filter(page => visiblePageNumbers.has(page))
      }))
      .filter(section => section.pages.length);
  }, [visibleManualPages]);

  useEffect(() => {
    const nearest = getNearestVisiblePage(activeManualPages, pageNo, 1);
    if (nearest && nearest.page !== pageNo) {
      setPageNo(nearest.page);
    }
  }, [activeManualPages, pageNo]);

  const page = visibleManualPages.find(p => p.page === pageNo) || visibleManualPages[0] || activeManualPages[0];
  const pageCategory = classifyPage(page);
  const editKey = `${selectedModel}:${page?.page || 1}`;
  const currentText = ocrEdits[editKey] ?? page.text ?? '';
  const hasLocalEdit = Object.prototype.hasOwnProperty.call(ocrEdits, editKey);
  const editedPageCount = Object.keys(ocrEdits).filter(key => key.startsWith(`${selectedModel}:`)).length;
  const pagesWithChecklists = visibleManualPages.filter(p => p.checklist && p.checklist.length).length;

  const enhancedPages = useMemo(() => {
    return visibleManualPages.map(p => {
      const key = `${selectedModel}:${p.page}`;
      return {
        ...p,
        text: ocrEdits[key] ?? p.text ?? ''
      };
    });
}, [ocrEdits, visibleManualPages, selectedModel]);

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const safeQuery = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    return enhancedPages
      .map(p => {
        const hay = `${p.title} ${p.text} ${p.summary}`.toLowerCase();
        const score = (hay.match(new RegExp(safeQuery, 'g')) || []).length;
        return { ...p, score };
      })
      .filter(p => p.score > 0)
      .sort((a, b) => b.score - a.score);
  }, [query, enhancedPages]);

  const openPdf = (p = pageNo) => {
    const targetPage = activeManualPages.find(item => item.page === p) || page;
    const pdfPath = targetPage?.sourcePdf || (selectedModel === 'mk3' ? MK3_PDF : BASE_PDF);
    const sourcePage = targetPage?.sourcePage || targetPage?.page || p;
    window.open(`${pdfPath}#page=${sourcePage}`, '_blank');
  };

  const goPage = (p, direction = 1) => {
    const targetPage = getNearestVisiblePage(activeManualPages, p, direction);

    if (targetPage) {
      setPageNo(targetPage.page);
      // Auto-switch to the most appropriate tab for the new page
      const cat = classifyPage(targetPage);
      if (cat === 'diagram') setMode('scan');
      else if (cat === 'repair') setMode('cards');
      else if (cat === 'informational') setMode('page');
      // reference pages: stay on current tab, or default to 'page'
      else if (mode === 'cards') setMode('page');
    }

    setDrawer(false);
    setCopied(false);
  };

  const goPreviousPage = () => goPage(pageNo - 1, -1);
  const goNextPage = () => goPage(pageNo + 1, 1);

  const updateCurrentOcr = (value) => {
    setOcrEdits({
      ...ocrEdits,
      [editKey]: value
    });
  };

  const resetCurrentOcr = () => {
    const next = { ...ocrEdits };
    delete next[editKey];
    setOcrEdits(next);
  };

  const copyCurrentText = async () => {
    await navigator.clipboard.writeText(currentText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const exportOcrEdits = () => {
    const blob = new Blob(
      [JSON.stringify(ocrEdits, null, 2)],
      { type: 'application/json' }
    );

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'jensen-ocr-edits.json';
    a.click();

    URL.revokeObjectURL(url);
  };

  const importOcrEdits = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json,.json';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const imported = JSON.parse(ev.target.result);
          if (typeof imported === 'object' && imported !== null) {
            setOcrEdits(prev => ({ ...prev, ...imported }));
          }
        } catch {
          alert('Could not read the file — make sure it is a valid jensen-ocr-edits.json export.');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  const pageList = (
    <aside className={drawer ? 'sidebar open' : 'sidebar'}>
      <div className="mobileClose">
        <strong>Manual Library</strong>
        <button onClick={() => setDrawer(false)}><X size={20} /></button>
      </div>

      <div className="searchBox">
        <label><Search size={16} /> Search manual</label>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Try: ballast resistor, brake fluid, tyre pressure..."
        />
      </div>

      {query && (
        <div className="resultsBox">
          <strong>{searchResults.length} result{searchResults.length === 1 ? '' : 's'}</strong>
          {searchResults.slice(0, 8).map(r => (
            <button key={r.page} onClick={() => goPage(r.page)}>
              p{r.page}: {r.title}
              <small>{r.score} hit{r.score === 1 ? '' : 's'}</small>
            </button>
          ))}
        </div>
      )}

      <h3>Manual Sections</h3>
      <nav className="topics">
        {activeTopicalSections.map(s => (
          <button key={s.title} onClick={() => goPage(s.pages[0])}>
            <BookOpen size={16} />
            <span>{s.title}</span>
            <small>p{s.pages.join(', ')}</small>
          </button>
        ))}
      </nav>

      <h3>All Pages</h3>
      <nav>
        {visibleManualPages.map(p => (
          <button
            key={p.page}
            className={p.page === pageNo ? 'selected' : ''}
            onClick={() => goPage(p.page)}
          >
            <FileText size={16} />
            <span>Page {p.page}</span>
            <small>
              {p.title}
              {ocrEdits[`${selectedModel}:${p.page}`] ? ' · edited' : ''}
            </small>
          </button>
        ))}
      </nav>
    </aside>
  );

  return (
    <div className="app">
      <header className="topBar">
        <button className="hamburger" onClick={() => setDrawer(true)}>
          <Menu />
        </button>

        <div className="brand">
          <img src="/jensen-logo.png" alt="Jensen logo" />
          <div>
            <p>Jensen C-V8</p>
            <h1>Online Manual</h1>
            <small>{selectedModelLabel}</small>
          </div>
        </div>

        <button className="openPdf" onClick={() => openPdf()}>
          Open PDF
        </button>
      </header>

      <div className="layout">
        {pageList}

        <main>
          <section className="hero">
            <div>
              <p className="eyebrow">Garage-friendly manual app</p>
              <h2>Search the Jensen C-V8 manual like it was built for the driveway.</h2>
              <p>
                Plain-English summaries, repair checklists, editable OCR text,
                source-page buttons, and the original scanned manual in one place.
              </p>
            </div>

            <div className="card" style={{ marginTop: '1rem' }}>
              <p className="eyebrow">Your Car</p>

              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  marginTop: '8px'
                }}
              >
                <option value="all">All Jensen C-V8 Models</option>
                <option value="mk1">Jensen C-V8 Mk I</option>
                <option value="mk2">Jensen C-V8 Mk II</option>
                <option value="mk3">Jensen C-V8 Mk III</option>
              </select>

              <p style={{ marginTop: '10px', opacity: 0.8 }}>
                Current selection: <strong>{selectedModelLabel}</strong>
              </p>
            </div>

            <div className="heroStats">
              <div><strong>{visibleManualPages.length}</strong><span>manual pages</span></div>
              <div><strong>{activeTopicalSections.length}</strong><span>sections</span></div>
              <div><strong>{pagesWithChecklists}</strong><span>checklists</span></div>
              <div><strong>{editedPageCount}</strong><span>OCR edits</span></div>
            </div>

            <div className="heroSearch">
              <Search size={18} />
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Try: no start, brake servo, 35 amp fuse, tyre pressure..."
              />
              {query && <button onClick={() => setQuery('')}>Clear</button>}
            </div>
          </section>

          <div className="tabs">
            <button className={mode === 'cards' ? 'active' : ''} onClick={() => setMode('cards')}>
              <Layers size={16} /> {pageCategory === 'repair' ? 'Repair Card' : 'Overview'}
            </button>
            <button className={mode === 'edit' ? 'active' : ''} onClick={() => setMode('edit')}>
              <Save size={16} /> Edit OCR
            </button>
            <button className={mode === 'page' ? 'active' : ''} onClick={() => setMode('page')}>
              <FileText size={16} /> OCR Text
            </button>
            <button className={mode === 'scan' ? 'active' : ''} onClick={() => setMode('scan')}>
              <ImageIcon size={16} /> Scan Viewer
            </button>
            <button className={mode === 'checklist' ? 'active' : ''} onClick={() => setMode('checklist')}>
              <ClipboardList size={16} /> Checklist
            </button>
          </div>

          <section className="card pageHeader">
            <div className="kicker">Instruction Book · Page {page.page}</div>
            <h2>{page.title}</h2>
            <p>{page.summary}</p>

            <div className="tagRow">
              <span><Gauge size={14} /> Jensen C-V8</span>
              <span>{selectedModelLabel}</span>
              <span>Manual p. {page.page}</span>
              <span>{page.checklist?.length || 0} checklist items</span>
              {hasLocalEdit && <span>OCR edited locally</span>}
            </div>

            {page.isImageOnly ? (
              <div className="warn">
                <ImageIcon size={18} />
                <span>
                  This is an image-only reference page. It stays in the app and opens in the scan viewer,
                  but it is not treated as editable OCR text.
                </span>
              </div>
            ) : (
              <div className="warn">
                <AlertTriangle size={18} />
                <span>
                  OCR edits are saved locally and loaded from the committed corrections file.
                  Export your edits, save the file as <code>public/ocr-corrections.json</code>, and commit to make them permanent for all devices.
                </span>
              </div>
            )}

            <div className="buttons">
              <button onClick={goPreviousPage}><ChevronLeft size={16} /> Previous</button>
              <button onClick={goNextPage}>Next <ChevronRight size={16} /></button>
              <button onClick={() => openPdf(page.page)}>Open original scan <ExternalLink size={16} /></button>
            </div>
          </section>

          {mode === 'cards' && (
            <section className="card repairCard">
              <div className="repairCardTop">
                <div>
                  <p className="eyebrow">
                    {pageCategory === 'repair' && 'Repair summary'}
                    {pageCategory === 'reference' && 'Reference data'}
                    {pageCategory === 'informational' && 'Informational page'}
                    {pageCategory === 'diagram' && 'Diagram / image page'}
                  </p>
                  <h3>{page.title}</h3>
                </div>
                <button onClick={() => setMode('scan')}>View scan</button>
              </div>

              {pageCategory === 'repair' && (
                <>
                  <p>{page.summary}</p>
                  {page.checklist && page.checklist.length ? (
                    <ol className="checklist compact">
                      {page.checklist.slice(0, 5).map((item, i) => (
                        <li key={item}>
                          <span>{i + 1}</span>
                          <p>{item}</p>
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <div className="emptyChecklist">
                      <Wrench size={24} />
                      <p>No repair checklist has been generated for this page yet.</p>
                    </div>
                  )}
                </>
              )}

              {pageCategory === 'reference' && (
                <>
                  {page.summary && !page.summary.startsWith(GENERIC_SUMMARY) && (
                    <p>{page.summary}</p>
                  )}
                  <div className="emptyChecklist">
                    <FileText size={24} />
                    <p>
                      This is a reference data page — specifications, capacities or tables.
                      {' '}
                      <button className="inlineLink" onClick={() => setMode('page')}>View OCR text</button>
                      {' '}or{' '}
                      <button className="inlineLink" onClick={() => setMode('scan')}>open the original scan</button>.
                    </p>
                  </div>
                </>
              )}

              {pageCategory === 'informational' && (
                <>
                  {page.summary && !page.summary.startsWith(GENERIC_SUMMARY) && (
                    <p>{page.summary}</p>
                  )}
                  <div className="emptyChecklist">
                    <BookOpen size={24} />
                    <p>
                      This is an informational page — no repair steps apply.
                      {' '}
                      <button className="inlineLink" onClick={() => setMode('page')}>Read the OCR text</button>
                      {' '}or{' '}
                      <button className="inlineLink" onClick={() => setMode('scan')}>view the original scan</button>.
                    </p>
                  </div>
                </>
              )}

              {pageCategory === 'diagram' && (
                <div className="emptyChecklist">
                  <ImageIcon size={24} />
                  <p>
                    This is a diagram or image-only page. Use the{' '}
                    <button className="inlineLink" onClick={() => setMode('scan')}>scan viewer</button>
                    {' '}to see the original page.
                  </p>
                </div>
              )}
            </section>
          )}

          {mode === 'edit' && (
            <section className="card">
              <div className="editorHeader">
                <div>
                  <h3 className="sectionTitle">Edit OCR Text - Page {page.page}</h3>
                  <p className="helperText">
                    Correct the OCR errors here. Changes autosave locally and are used by search immediately.
                  </p>
                </div>

                <div className="editorStatus">
                  {hasLocalEdit ? 'Edited locally' : 'Using original OCR'}
                </div>
              </div>

              {page.isImageOnly ? (
                <div className="emptyChecklist">
                  <ImageIcon size={24} />
                  <p>This page is image-only, so there is no OCR text to edit. Use the scan viewer for the original page image.</p>
                </div>
              ) : (
                <textarea
                  className="ocrEditor"
                  value={currentText}
                  onChange={(e) => updateCurrentOcr(e.target.value)}
                  spellCheck="false"
                />
              )}

              <div className="buttons">
                <button onClick={copyCurrentText}>
                  <Copy size={16} /> {copied ? 'Copied' : 'Copy text'}
                </button>

                <button onClick={exportOcrEdits}>
                  <Download size={16} /> Export OCR fixes
                </button>

                <button onClick={importOcrEdits}>
                  <Save size={16} /> Import OCR fixes
                </button>

                {hasLocalEdit && (
                  <button onClick={resetCurrentOcr}>
                    Reset this page
                  </button>
                )}

                <button onClick={() => setMode('scan')}>
                  View scan <ImageIcon size={16} />
                </button>
              </div>
            </section>
          )}

          {mode === 'page' && (
            <section className="card">
              <h3 className="sectionTitle">OCR text from this page</h3>
              <p className="helperText">
                This view uses your corrected OCR text if you have edited this page.
              </p>
              <pre className="ocrText">
                {highlight(
                  currentText || (page.isImageOnly ? 'This is an image-only reference page. Open the scan viewer to see the original page.' : 'No readable OCR text was extracted from this page.'),
                  query
                )}
              </pre>
            </section>
          )}

          {mode === 'scan' && (
            <section className="card viewer">
              <div className="viewerTop">
                <h3>Original scanned page {page.page}</h3>
                <div>
                  <button onClick={() => setZoom(Math.max(60, zoom - 20))}><ZoomOut size={16} /></button>
                  <button onClick={() => setZoom(Math.min(180, zoom + 20))}><ZoomIn size={16} /></button>
                </div>
              </div>
              <iframe
                title="manual pdf"
                src={`${page.sourcePdf || (selectedModel === 'mk3' ? MK3_PDF : BASE_PDF)}#page=${page.sourcePage || page.page}&zoom=${zoom}`}
              />
            </section>
          )}

          {mode === 'checklist' && (
            <section className="card">
              <h3 className="sectionTitle">Plain-English checklist</h3>
              {page.checklist && page.checklist.length ? (
                <ol className="checklist">
                  {page.checklist.map((item, i) => (
                    <li key={item}>
                      <span>{i + 1}</span>
                      <p>{item}</p>
                    </li>
                  ))}
                </ol>
              ) : (
                <div className="emptyChecklist">
                  <Wrench size={24} />
                  <p>{page.isImageOnly ? 'This is a diagram/image page. Use the original scan rather than an OCR checklist.' : 'No specific repair checklist has been generated for this page yet.'}</p>
                </div>
              )}
            </section>
          )}

          {query && (
            <section className="card">
              <h3 className="sectionTitle">Search results from OCR text</h3>
              <div className="searchResults">
                {searchResults.map(r => (
                  <button key={r.page} onClick={() => goPage(r.page)}>
                    <strong>Page {r.page}: {r.title}</strong>
                    <span>{r.text.slice(0, 260)}...</span>
                  </button>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
