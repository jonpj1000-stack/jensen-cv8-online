import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Search, BookOpen, FileText, Wrench, ExternalLink, Menu, X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, ClipboardList, AlertTriangle } from 'lucide-react';
import { manualPages } from './manualPages.js';
import './styles.css';

const topicalSections = [
  { title:'Dashboard & Controls', pages:[4], tags:'dashboard instruments controls switches gauges warning lights' },
  { title:'Specifications & Capacities', pages:[5,6], tags:'specifications capacity timing plug gap compression oil dimensions' },
  { title:'Motor, Starting & Running', pages:[7,8,9], tags:'engine motor starting running gearbox transmission overdrive towing' },
  { title:'Lubrication & Maintenance', pages:[10,11,25,26,27,28], tags:'lubrication maintenance grease oil service miles' },
  { title:'Electrical, Battery & Fuses', pages:[12,13], tags:'electrical lucas autolite battery positive earth fuse fuses bulbs lamps wiper' },
  { title:'Brakes & Servo', pages:[13], tags:'brakes servo dunlop brake fluid handbrake vacuum' },
  { title:'Fuel System & Carburetter', pages:[15,16], tags:'fuel carburetter carter idle fast idle choke throttle linkage' },
  { title:'Tyres, Wheels & Alignment', pages:[17,18,19], tags:'tyres tires wheels alignment bearings toe-in castor camber' },
  { title:'Cooling, Heating & Rear Axle', pages:[20,21], tags:'cooling fan radiator heater ventilation antifreeze coolant rear axle powr-lok drive belt' },
  { title:'Interior & Owner Information', pages:[2,3,22,23,31,32], tags:'owner warranty seats upholstery vehicle particulars chassis engine key' }
];

function highlight(text, q) {
  if (!q.trim()) return text;
  const parts = text.split(new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'ig'));
  return parts.map((part, i) => part.toLowerCase() === q.toLowerCase() ? <mark key={i}>{part}</mark> : part);
}

function App() {
  const [query, setQuery] = useState('');
  const [pageNo, setPageNo] = useState(4);
  const [zoom, setZoom] = useState(100);
  const [drawer, setDrawer] = useState(false);
  const [mode, setMode] = useState('page');

  const page = manualPages.find(p => p.page === pageNo) || manualPages[0];
  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return manualPages
      .map(p => {
        const hay = `${p.title} ${p.text} ${p.summary}`.toLowerCase();
        const score = (hay.match(new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
        return { ...p, score };
      })
      .filter(p => p.score > 0)
      .sort((a,b) => b.score - a.score);
  }, [query]);

  const openPdf = (p = pageNo) => window.open(`/manuals/jensen_cv8_owners_manual.pdf#page=${p}`, '_blank');
  const goPage = (p) => { setPageNo(Math.max(1, Math.min(manualPages.length, p))); setDrawer(false); };

  const pageList = <aside className={drawer ? 'sidebar open' : 'sidebar'}>
    <div className="mobileClose"><strong>Manual Pages</strong><button onClick={() => setDrawer(false)}><X size={20}/></button></div>
    <div className="searchBox">
      <label><Search size={16}/> Search OCR text</label>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Try brake fluid, 35 amp, tyre pressure..." />
    </div>
    {query && <div className="resultsBox">
      <strong>{searchResults.length} OCR result{searchResults.length === 1 ? '' : 's'}</strong>
      {searchResults.slice(0,8).map(r => <button key={r.page} onClick={() => goPage(r.page)}>p{r.page}: {r.title}<small>{r.score} hit{r.score === 1 ? '' : 's'}</small></button>)}
    </div>}
    <h3>Topics</h3>
    <nav className="topics">
      {topicalSections.map(s => <button key={s.title} onClick={() => goPage(s.pages[0])}><BookOpen size={16}/><span>{s.title}</span><small>p{s.pages.join(',')}</small></button>)}
    </nav>
    <h3>All pages</h3>
    <nav>
      {manualPages.map(p => <button key={p.page} className={p.page === pageNo ? 'selected' : ''} onClick={() => goPage(p.page)}><FileText size={16}/><span>Page {p.page}</span><small>{p.title}</small></button>)}
    </nav>
  </aside>;

  return <div className="app">
    <header>
      <button className="hamburger" onClick={() => setDrawer(true)}><Menu /></button>
      <div className="badge">J</div>
      <div className="headText"><p>Jensen Model C-V8</p><h1>Searchable Manual Archive</h1></div>
      <button className="openPdf" onClick={() => openPdf()}>Open PDF</button>
    </header>

    <div className="layout">
      {pageList}
      <main>
        <div className="tabs">
          <button className={mode==='page'?'active':''} onClick={() => setMode('page')}><FileText size={16}/> Page Text</button>
          <button className={mode==='scan'?'active':''} onClick={() => setMode('scan')}><BookOpen size={16}/> Scan Viewer</button>
          <button className={mode==='checklist'?'active':''} onClick={() => setMode('checklist')}><ClipboardList size={16}/> Checklist</button>
        </div>

        <section className="card pageHeader">
          <div className="kicker">Instruction Book - Page {page.page}</div>
          <h2>{page.title}</h2>
          <p>{page.summary}</p>
          <div className="warn"><AlertTriangle size={18}/><span>OCR is a working transcription. Always verify specifications, wiring, torque values and safety procedures against the original scanned page.</span></div>
          <div className="buttons">
            <button onClick={() => goPage(pageNo - 1)}><ChevronLeft size={16}/> Previous page</button>
            <button onClick={() => goPage(pageNo + 1)}>Next page <ChevronRight size={16}/></button>
            <button onClick={() => openPdf(page.page)}>Open original scan <ExternalLink size={16}/></button>
          </div>
        </section>

        {mode === 'page' && <section className="card">
          <h3 className="sectionTitle">OCR Text Version</h3>
          <pre className="ocrText">{highlight(page.text || 'No readable OCR text was extracted from this page. It may be a blank page, diagram-heavy page, or poor scan.', query)}</pre>
        </section>}

        {mode === 'scan' && <section className="card viewer">
          <div className="viewerTop">
            <h3>Original Scanned Page {page.page}</h3>
            <div>
              <button onClick={() => setZoom(Math.max(60, zoom-20))}><ZoomOut size={16}/></button>
              <button onClick={() => setZoom(Math.min(180, zoom+20))}><ZoomIn size={16}/></button>
            </div>
          </div>
          <iframe title="manual pdf" src={`/manuals/jensen_cv8_owners_manual.pdf#page=${page.page}&zoom=${zoom}`} />
        </section>}

        {mode === 'checklist' && <section className="card">
          <h3 className="sectionTitle">Plain-English Checklist / Notes from This Page</h3>
          {page.checklist && page.checklist.length ? (
            <ol className="checklist">{page.checklist.map((item, i) => <li key={item}><span>{i+1}</span><p>{item}</p></li>)}</ol>
          ) : (
            <div className="emptyChecklist">
              <Wrench size={24}/>
              <p>No specific repair checklist has been generated for this page yet. Use the OCR text and scan for reference, or add a page-specific checklist as more manuals are loaded.</p>
            </div>
          )}
        </section>}

        {query && <section className="card">
          <h3 className="sectionTitle">Search Results from OCR Text</h3>
          <div className="searchResults">
            {searchResults.map(r => <button key={r.page} onClick={() => goPage(r.page)}>
              <strong>Page {r.page}: {r.title}</strong>
              <span>{r.text.slice(0, 260)}...</span>
            </button>)}
          </div>
        </section>}
      </main>
    </div>
  </div>
}

createRoot(document.getElementById('root')).render(<App />);
