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

// ─── Section groupings ───────────────────────────────────────────────────────
// Explicit page → section mapping for each manual. Pages not listed fall back
// to their raw title. isContinuation = true for all pages after the first in
// a section — used to show "Section Name (cont.)" in the sidebar + page header.

const baseSectionDefs = [
  { title: 'Cover',                          pages: [1],           category: 'overview',     tags: [] },
  { title: 'Introduction',                   pages: [2, 3],        category: 'overview',     tags: ['owner', 'handbook', 'warranty'] },
  { title: 'Dashboard & Controls',           pages: [4],           category: 'overview',     tags: ['dashboard', 'instruments', 'controls', 'gauges', 'switches', 'warning lights'] },
  { title: 'Specifications & Dimensions',    pages: [5, 6],        category: 'specs',        tags: ['specifications', 'dimensions', 'capacity', 'timing', 'compression', 'spark plug', 'ignition'] },
  { title: 'Starting, Gearbox & Towing',     pages: [7, 8, 9],     category: 'mechanical',   tags: ['starting', 'engine', 'gearbox', 'overdrive', 'towing', 'transmission', 'running-in'] },
  { title: 'Lubrication & Maintenance',      pages: [10, 11],      category: 'lubrication',  tags: ['lubrication', 'oil', 'grease', 'maintenance', 'filter', 'dipstick'] },
  { title: 'Electrical Equipment',           pages: [12, 13],      category: 'electrical',   tags: ['electrical', 'battery', 'fuses', 'bulbs', 'wiring', 'lucas', 'autolite', 'wiper'] },
  { title: 'Brakes & Servo',                 pages: [14],          category: 'brakes',       tags: ['brakes', 'servo', 'brake fluid', 'handbrake', 'vacuum', 'dunlop'] },
  { title: 'Fuel System & Carburettor',      pages: [15, 16, 17],  category: 'fuel',         tags: ['fuel', 'carburettor', 'choke', 'throttle', 'idle', 'accelerator', 'carter'] },
  { title: 'Tyres, Wheels & Alignment',      pages: [18, 19],      category: 'wheels',       tags: ['tyres', 'wheels', 'alignment', 'toe-in', 'camber', 'bearings', 'tyre pressure'] },
  { title: 'Cooling, Heating & Rear Axle',   pages: [20, 21],      category: 'cooling',      tags: ['cooling', 'radiator', 'antifreeze', 'heater', 'rear axle', 'fan belt', 'powr-lok'] },
  { title: 'Interior & Owner Information',   pages: [22, 23, 24],  category: 'interior',     tags: ['seats', 'upholstery', 'interior', 'owner', 'chassis number'] },
  { title: 'Service Lubrication',            pages: [25, 26, 27, 28], category: 'service',   tags: ['service', 'lubrication', 'grease points', 'intervals', 'capacities', 'oil change'] },
  { title: 'Index',                          pages: [29],          category: 'overview',     tags: ['index'] },
  { title: 'Vehicle Particulars',            pages: [31, 32],      category: 'overview',     tags: ['chassis number', 'engine number', 'registration', 'delivery'] },
];

const mk3SectionDefs = [
  { title: 'Handbook Cover',                     pages: [1],           category: 'overview',    tags: [] },
  { title: 'Vehicle Particulars',                pages: [3],           category: 'overview',    tags: ['chassis number', 'key number', 'registration', 'delivery'] },
  { title: 'Foreword',                           pages: [5],           category: 'overview',    tags: ['handbook', 'owner', 'jensen motors'] },
  { title: 'General Dimensions & Data',          pages: [7, 8],        category: 'specs',       tags: ['dimensions', 'specifications', 'weight', 'wheelbase', 'turning circle', 'gear ratios'] },
  { title: 'Instruments & Controls Diagram',     pages: [9],           category: 'overview',    tags: ['dashboard', 'instruments', 'controls', 'diagram', 'layout'] },
  { title: 'Controls & Instruments',             pages: [11, 12, 13],  category: 'overview',    tags: ['controls', 'instruments', 'gauges', 'switches', 'headlights', 'horn', 'heater fan', 'selectaride', 'speedometer', 'ammeter', 'oil pressure'] },
  { title: 'Starting Up & Running',              pages: [15, 16, 17, 18], category: 'mechanical', tags: ['starting', 'running-in', 'gearbox', 'overdrive', 'towing', 'push starting', 'choke', 'transmission'] },
  { title: 'Engine Lubrication System',          pages: [19],          category: 'lubrication', tags: ['engine oil', 'oil filter', 'sump', 'oil change', 'dipstick', 'oil pressure', '4000 miles'] },
  { title: 'Lubrication Diagram',                pages: [20],          category: 'lubrication', tags: ['lubrication', 'diagram', 'grease points'] },
  { title: 'Maintenance Schedule',               pages: [21, 22],      category: 'service',     tags: ['maintenance', 'service intervals', '1000 miles', '4000 miles', '20000 miles', 'king pin', 'spark plugs'] },
  { title: 'Fuel System & Carburettor',          pages: [23, 24, 25, 26, 27], category: 'fuel', tags: ['fuel', 'carburettor', 'choke', 'throttle', 'idle', 'accelerator', 'air cleaner', 'crankcase vent'] },
  { title: 'Ignition',                           pages: [29, 30],      category: 'electrical',  tags: ['ignition', 'contact breaker', 'timing', 'distributor', 'coil', 'ballast resistor'] },
  { title: 'Cooling System',                     pages: [31, 32],      category: 'cooling',     tags: ['cooling', 'radiator', 'coolant', 'fan', 'thermostat', 'antifreeze', 'electric fans'] },
  { title: 'Transmission & Propeller Shaft',     pages: [33, 34],      category: 'mechanical',  tags: ['transmission', 'gearbox', 'propeller shaft', 'universal joint', 'transmission fluid'] },
  { title: 'Steering & Suspension',              pages: [35, 36, 37],  category: 'mechanical',  tags: ['steering', 'suspension', 'rack and pinion', 'wishbone', 'front hubs', 'wheel alignment', 'dampers'] },
  { title: 'Brake Servo Unit',                   pages: [38],          category: 'brakes',      tags: ['brakes', 'servo', 'brake fluid', 'disc brakes', 'handbrake'] },
  { title: 'Wheels & Tyres',                     pages: [39, 40],      category: 'wheels',      tags: ['wheels', 'tyres', 'tyre pressure', 'wheel changing', 'jack', 'spare wheel'] },
  { title: 'Bodywork & Seats',                   pages: [41, 42],      category: 'interior',    tags: ['bodywork', 'doors', 'seats', 'upholstery', 'adjustment'] },
  { title: 'Spare Wheel',                        pages: [43],          category: 'wheels',      tags: ['spare wheel', 'boot', 'jack'] },
  { title: 'Cabin Heating & Ventilation',        pages: [45, 46],      category: 'interior',    tags: ['heating', 'ventilation', 'heater', 'fresh air', 'fan', 'demist'] },
  { title: 'Electrical System',                  pages: [47, 48],      category: 'electrical',  tags: ['electrical', 'battery', 'fuses', 'wiring', 'earth', 'alternator', 'interior light'] },
  { title: 'Lights',                             pages: [49, 50],      category: 'electrical',  tags: ['lights', 'headlamps', 'sidelights', 'bulbs', 'reversing light', 'number plate light', 'flasher'] },
  { title: 'Tool Kit & Equipment',               pages: [51, 52, 53],  category: 'overview',    tags: ['tools', 'toolkit', 'equipment', 'accessories'] },
  { title: 'Service Lubrication',                pages: [55, 56, 57, 58], category: 'service',  tags: ['service', 'lubrication', 'oil change', 'grease', 'intervals', 'capacities', 'transmission fluid'] },
  { title: 'Index',                              pages: [59, 60],      category: 'overview',    tags: ['index'] },
];

function buildSectionLookup(defs) {
  const map = new Map();
  for (const section of defs) {
    section.pages.forEach((page, idx) => {
      map.set(page, {
        sectionTitle: section.title,
        isContinuation: idx > 0,
        category: section.category || 'general',
        tags: section.tags || [],
      });
    });
  }
  return map;
}

const baseSectionLookup = buildSectionLookup(baseSectionDefs);
const mk3SectionLookup  = buildSectionLookup(mk3SectionDefs);

function getSectionInfo(pageNum, model) {
  const lookup = model === 'mk3' ? mk3SectionLookup : baseSectionLookup;
  return lookup.get(pageNum) || null;
}

function getDisplayTitle(pageNum, model, fallbackTitle) {
  const info = getSectionInfo(pageNum, model);
  if (!info) return fallbackTitle;
  return info.isContinuation ? `${info.sectionTitle} (cont.)` : info.sectionTitle;
}

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

// Checklist items that start with an action verb are real repair steps.
// Items that are sentence fragments, titles, or continuations are not.
const IMPERATIVE_VERBS = /^(check|inspect|change|replace|drain|fill|remove|install|adjust|clean|tighten|loosen|ensure|apply|add|use|do not|never|always|confirm|photograph|identify|select|engage|depress|set|verify|refit|recheck|run|start|allow|push|pull|turn|disconnect|connect|torque|grease|lubricate|bleed|test|reset|secure|re-?tighten|re-?fit|re-?check)/i;

function hasQualityChecklist(checklist) {
  if (!Array.isArray(checklist) || checklist.length < 2) return false;
  const qualityItems = checklist.filter(item =>
    item.length > 35 && IMPERATIVE_VERBS.test(item)
  );
  return qualityItems.length >= 2;
}

// Extract genuinely useful sentences from OCR text:
// service intervals, specifications, and clear action instructions.
function extractKeyFacts(text) {
  if (!text || text.length < 40) return [];

  // Split into sentences on full stops followed by whitespace or newline
  const sentences = text
    .replace(/\n+/g, ' ')
    .split(/(?<=[.!?])\s+/)
    .map(s => s.trim())
    .filter(s => s.length > 25 && s.length < 300);

  const seen = new Set();
  const results = [];

  for (const s of sentences) {
    const key = s.slice(0, 40).toLowerCase();
    if (seen.has(key)) continue;

    const isUseful =
      // Service intervals: "every 4,000 miles", "every 3 months"
      /every\s+[\d,]+\s*(miles?|km|months?|years?|hours?)/i.test(s) ||
      // Specific pressures, temperatures, tolerances
      /\d+[\s-]*(p\.?s\.?i\.?|psi|rpm|r\.p\.m|°|degrees?|mm|ins?\.)\b/i.test(s) ||
      // "should be changed/checked/drained/replaced/inspected"
      /should\s+be\s+(changed|checked|drained|replaced|inspected|cleaned|adjusted|refilled|topped|removed|fitted)/i.test(s) ||
      // "must be" / "must not"
      /must\s+(be|not)\s+/i.test(s) ||
      // "do not" warnings
      /\bdo not\b|\bnever\b/i.test(s) ||
      // Imperative action sentences
      IMPERATIVE_VERBS.test(s);

    if (isUseful) {
      seen.add(key);
      results.push(s);
    }
  }

  return results.slice(0, 8); // cap at 8 key facts
}

function classifyPage(page) {
  if (page.isImageOnly || page.type === 'diagram') return 'diagram';
  if (!page.text?.trim()) return 'diagram';

  const titleLower = (page.title || '').toLowerCase();
  if (INFORMATIONAL_TITLES.some(kw => titleLower.includes(kw))) return 'informational';

  if (hasQualityChecklist(page.checklist)) return 'repair';

  // Even without a quality checklist, if there are extractable key facts it's repair/reference
  const facts = extractKeyFacts(page.text);
  if (facts.length > 0) return 'repair';

  return 'reference';
}

// Normalise a tag or text for matching — strip commas from numbers so
// "4000 miles" matches "4,000 miles" in OCR text, and vice-versa.
function normaliseForMatch(str) {
  return str.toLowerCase().replace(/(\d),(\d)/g, '$1$2').replace(/\s+/g, ' ').trim();
}

function tagMatchesText(tag, text) {
  return normaliseForMatch(text).includes(normaliseForMatch(tag));
}

// For maintenance-schedule pages the OCR text is structured as:
//   C-4,000 MILES (6,437 KMs)
//   C1 — Steering Rack — Grease Gun (1 nipple).
//   C2 — Brake Balance Lever — Grease Gun (1 nipple).
//   ...
//   G—20,000 MILES
//   G1 — Sparking Plugs — Replace.
//   ...
//
// This function finds the section whose header contains the target mileage
// and returns the items listed beneath it.
function extractSectionItems(ocrText, tag) {
  if (!ocrText) return [];

  // Only try this for mileage-style tags e.g. "4000 miles", "1000 miles"
  const tagNum = tag.replace(/[^\d]/g, '');
  if (!tagNum || tagNum.length < 3) return [];

  const lines = ocrText.split('\n').map(l => l.trim()).filter(Boolean);
  let collecting = false;
  const items = [];

  for (const line of lines) {
    // Detect a mileage section header: line contains a 4+ digit number followed by miles/km
    const headerMatch = line.match(/([\d,]{4,})\s*(miles?|km)/i);

    if (headerMatch) {
      const lineNum = headerMatch[1].replace(/,/g, '');
      if (lineNum === tagNum) {
        collecting = true;   // this is our section
        continue;
      } else if (collecting) {
        break;               // different mileage section — stop
      }
      continue;
    }

    if (collecting && line.length > 3) {
      // Strip item-code prefixes like "C1 —", "G10 —", "A1 —"
      const cleaned = line.replace(/^[A-Z]\d+\.?\s*[—–\-]+\s*/, '').trim();
      if (cleaned.length > 4) items.push(cleaned);
    }
  }

  return items;
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
  const [checkedItems, setCheckedItems] = useState({});  // key: `${model}:${page}:${idx}`
  const [sectionFilter, setSectionFilter] = useState('all');
  const [activePageTag, setActivePageTag] = useState(null);

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
    setActivePageTag(null);
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
    // Fetch the committed corrections file and merge it with current edits
    // so the export always contains everything — committed + any newer browser edits.
    // Current browser edits (ocrEdits) win over the file on conflicts.
    fetch('/ocr-corrections.json')
      .then(r => r.ok ? r.json() : {})
      .catch(() => ({}))
      .then(committed => {
        const merged = { ...committed, ...ocrEdits };
        const blob = new Blob(
          [JSON.stringify(merged, null, 2)],
          { type: 'application/json' }
        );
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'jensen-ocr-edits.json';
        a.click();
        URL.revokeObjectURL(url);
      });
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
        {visibleManualPages.map(p => {
          const displayTitle = getDisplayTitle(p.page, selectedModel, p.title);
          const sInfo = getSectionInfo(p.page, selectedModel);
          return (
            <button
              key={p.page}
              className={[
                p.page === pageNo ? 'selected' : '',
                sInfo?.isContinuation ? 'continuation' : ''
              ].join(' ').trim()}
              onClick={() => goPage(p.page)}
            >
              <FileText size={16} />
              <span>Page {p.page}</span>
              <small>
                {displayTitle}
                {ocrEdits[`${selectedModel}:${p.page}`] ? ' · edited' : ''}
              </small>
            </button>
          );
        })}
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
            <div className="heroTop">
              <div>
                <p className="eyebrow">Garage-friendly manual app</p>
                <h2>Jensen C-V8 Online Manual</h2>
              </div>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="modelSelect"
              >
                <option value="all">All Jensen C-V8 Models</option>
                <option value="mk1">Jensen C-V8 Mk I</option>
                <option value="mk2">Jensen C-V8 Mk II</option>
                <option value="mk3">Jensen C-V8 Mk III</option>
              </select>
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

          {/* Organised repair card grid */}
          {!query && (() => {
            const activeDefs = selectedModel === 'mk3' ? mk3SectionDefs : baseSectionDefs;
            const categories = ['all', ...Array.from(new Set(activeDefs.map(s => s.category).filter(Boolean)))];
            const filtered = sectionFilter === 'all'
              ? activeDefs
              : activeDefs.filter(s => s.category === sectionFilter);
            const visiblePageSet = new Set(visibleManualPages.map(p => p.page));
            const displayable = filtered.filter(s => s.pages.some(p => visiblePageSet.has(p)));
            const categoryLabels = {
              all: 'All', overview: 'Overview', specs: 'Specs',
              mechanical: 'Mechanical', lubrication: 'Lubrication',
              electrical: 'Electrical', fuel: 'Fuel', brakes: 'Brakes',
              wheels: 'Wheels & Tyres', cooling: 'Cooling',
              interior: 'Interior', service: 'Service',
            };
            return (
              <section className="repairGrid">
                <div className="repairGridHeader">
                  <p className="eyebrow">Manual Sections</p>
                  <h3>Organised repair cards</h3>
                  <p className="helperText">These summaries stay inside what the manual says. Use source scans for verification.</p>
                </div>
                <div className="categoryFilters">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      className={sectionFilter === cat ? 'active' : ''}
                      onClick={() => setSectionFilter(cat)}
                    >
                      {categoryLabels[cat] || cat}
                    </button>
                  ))}
                </div>
                <div className="sectionCardGrid">
                  {displayable.map(section => {
                    const firstVisiblePage = section.pages.find(p => visiblePageSet.has(p));
                    return (
                      <button
                        key={section.title}
                        className="sectionCard"
                        onClick={() => goPage(firstVisiblePage)}
                      >
                        <div className="sectionCardTop">
                          <span className="sectionCardCat">{categoryLabels[section.category] || section.category}</span>
                          <span className="sectionCardPages">p. {section.pages.filter(p => visiblePageSet.has(p)).join('–')}</span>
                        </div>
                        <h4>{section.title}</h4>
                        {section.tags.length > 0 && (
                          <div className="sectionCardTags">
                            {section.tags.slice(0, 4).map(tag => (
                              <span key={tag} className="sectionCardTag">{tag}</span>
                            ))}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </section>
            );
          })()}

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
            <h2>{getDisplayTitle(page.page, selectedModel, page.title)}</h2>
            {getSectionInfo(page.page, selectedModel)?.isContinuation && (
              <p className="continuationNote">
                ↩ Continued from <strong>{getSectionInfo(page.page, selectedModel).sectionTitle}</strong>
              </p>
            )}

            {/* Tag pills */}
            {(() => {
              const tags = getSectionInfo(page.page, selectedModel)?.tags || [];
              return tags.length > 0 ? (
                <div className="tagPills">
                  {tags.map(tag => (
                    <button
                      key={tag}
                      className={`tagPill${activePageTag === tag ? ' active' : ''}`}
                      onClick={() => setActivePageTag(activePageTag === tag ? null : tag)}
                    >
                      {tag}
                    </button>
                  ))}
                  {activePageTag && (
                    <button className="tagPillClear" onClick={() => setActivePageTag(null)}>
                      ✕ Clear filter
                    </button>
                  )}
                </div>
              ) : null;
            })()}

            {/* Manual page reference badge */}
            <div className="manualRef">
              <BookOpen size={14} />
              <span>Manual p. {page.page}{getSectionInfo(page.page, selectedModel)?.isContinuation ? ` · Part of ${getSectionInfo(page.page, selectedModel).sectionTitle}` : ''}</span>
              <button className="refLink" onClick={() => openPdf(page.page)}>
                Open scan <ExternalLink size={12} />
              </button>
            </div>

            {/* Bullet summary — use key facts if summary is generic */}
            {(() => {
              const hasRealSummary = page.summary && !page.summary.startsWith(GENERIC_SUMMARY);
              const facts = extractKeyFacts(currentText).slice(0, 3);
              return (
                <div className="summarySection">
                  {hasRealSummary && <p className="summaryLead">{page.summary}</p>}
                  {facts.length > 0 && (
                    <ul className="summaryBullets">
                      {facts.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  )}
                </div>
              );
            })()}

            {hasLocalEdit && (
              <div className="editedBadge"><Save size={12} /> OCR edited</div>
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
                  <h3>{getDisplayTitle(page.page, selectedModel, page.title)}</h3>
                </div>
                <button onClick={() => setMode('scan')}>View scan</button>
              </div>

              {pageCategory === 'repair' && (() => {
                const qualityChecklist = hasQualityChecklist(page.checklist);
                const allItems = qualityChecklist
                  ? page.checklist.filter(item => IMPERATIVE_VERBS.test(item))
                  : extractKeyFacts(currentText);

                // Apply tag filter if one is active.
                // 1. Try structured section extraction first (handles maintenance schedule format).
                // 2. Fall back to plain text-match filtering on existing items.
                let filteredItems = allItems;
                if (activePageTag) {
                  const sectionItems = extractSectionItems(currentText, activePageTag);
                  filteredItems = sectionItems.length > 0
                    ? sectionItems
                    : allItems.filter(item => tagMatchesText(activePageTag, item));
                }

                const isFiltered = !!activePageTag;

                return (
                  <>
                    {page.summary && !page.summary.startsWith(GENERIC_SUMMARY) && (
                      <p>{page.summary}</p>
                    )}

                    {isFiltered && (
                      <div className="filterNotice">
                        <span>Showing steps for: <strong>{activePageTag}</strong></span>
                        <button className="inlineLink" onClick={() => setActivePageTag(null)}>Show all</button>
                      </div>
                    )}

                    {filteredItems.length > 0 ? (
                      <>
                        <p className="helperText">
                          {qualityChecklist ? 'Repair steps for this page:' : 'Key service facts extracted from this page:'}
                          {isFiltered && ` (${filteredItems.length} of ${allItems.length})`}
                        </p>
                        <ol className="checklist compact">
                          {filteredItems.slice(0, 8).map((item, i) => (
                            <li key={item}>
                              <span>{i + 1}</span>
                              <p>{item}</p>
                            </li>
                          ))}
                        </ol>
                        {!qualityChecklist && (
                          <p className="helperText dimText">
                            Extracted from OCR text. Fix errors in the <button className="inlineLink" onClick={() => setMode('edit')}>Edit OCR tab</button>.
                          </p>
                        )}
                      </>
                    ) : isFiltered ? (
                      <div className="emptyChecklist">
                        <Wrench size={24} />
                        <p>
                          No steps found specifically for <strong>{activePageTag}</strong> on this page.{' '}
                          <button className="inlineLink" onClick={() => setActivePageTag(null)}>Show all steps</button>
                        </p>
                      </div>
                    ) : (
                      <div className="emptyChecklist">
                        <Wrench size={24} />
                        <p>No repair checklist has been generated for this page yet. <button className="inlineLink" onClick={() => setMode('page')}>View the OCR text</button> for the full content.</p>
                      </div>
                    )}
                  </>
                );
              })()}

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

          {mode === 'checklist' && (() => {
            const qualityItems = hasQualityChecklist(page.checklist)
              ? page.checklist.filter(item => IMPERATIVE_VERBS.test(item))
              : [];
            const allItems = qualityItems.length > 0 ? qualityItems : extractKeyFacts(currentText);
            const checkedCount = allItems.filter((_, i) => checkedItems[`${selectedModel}:${page.page}:${i}`]).length;
            const clearChecks = () => {
              const next = { ...checkedItems };
              allItems.forEach((_, i) => delete next[`${selectedModel}:${page.page}:${i}`]);
              setCheckedItems(next);
            };
            return (
              <section className="card">
                <div className="checklistHeader">
                  <div>
                    <h3 className="sectionTitle">
                      {qualityItems.length > 0 ? 'Troubleshooting checklist' : 'Key service facts — checklist'}
                    </h3>
                    <p className="helperText">{checkedCount} of {allItems.length} checked</p>
                  </div>
                  {checkedCount > 0 && (
                    <button className="clearBtn" onClick={clearChecks}>Clear all</button>
                  )}
                </div>
                {allItems.length > 0 ? (
                  <ul className="interactiveChecklist">
                    {allItems.map((item, i) => {
                      const key = `${selectedModel}:${page.page}:${i}`;
                      const checked = !!checkedItems[key];
                      return (
                        <li
                          key={i}
                          className={checked ? 'checked' : ''}
                          onClick={() => setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }))}
                        >
                          <span className="checkbox">{checked ? '✓' : ''}</span>
                          <p>{item}</p>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <div className="emptyChecklist">
                    <Wrench size={24} />
                    <p>{page.isImageOnly ? 'This is a diagram/image page. Use the original scan.' : 'No checklist available for this page yet.'}</p>
                  </div>
                )}
                {qualityItems.length === 0 && allItems.length > 0 && (
                  <p className="helperText dimText">
                    Extracted from OCR text. Fix errors in the <button className="inlineLink" onClick={() => setMode('edit')}>Edit OCR tab</button>.
                  </p>
                )}
              </section>
            );
          })()}

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
