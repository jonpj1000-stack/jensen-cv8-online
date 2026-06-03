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
  Copy,
  Zap,
  Settings
} from 'lucide-react';
import { manualPages as baseManualPages } from './manualPages.js';
import { mk3ManualPages } from './data/mk3ManualPages.js';
import { wiringDiagrams, getDiagramForModel, ALL_CIRCUITS } from './data/wiringDiagrams.js';
import { getSelectarideForModel } from './data/selectaride.js';
import { repairCards, repairCategories } from './data/repairCards.js';
import { restorationArticles, restorationCategories } from './data/restorationArticles.js';
import { alternativeParts, partsCategories, partsSourceCredit } from './data/alternativeParts.js';
import { specialists, specialistTypes, specialistCountries } from './data/specialists.js';
import { lucasParts, lucasSystems, lucasDocumentInfo } from './data/lucasParts.js';
import { showroomModels, bodyColours, trimColours, wheelOptions, specifications } from './data/showroom.js';
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
  { title: 'Service Lubrication',            pages: [25, 26, 27, 28], category: 'service',   tags: ['service', 'lubrication', 'grease points', 'capacities', 'oil change'] },
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
  { title: 'Maintenance Schedule',               pages: [20, 21, 22],  category: 'service',     tags: ['maintenance', 'service intervals', 'king pin', 'spark plugs', 'lubrication diagram', 'grease points'] },
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

  // Only try this for mileage-style tags e.g. "4000 miles", "4,000 miles"
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

// Extract mileage-interval tags directly from OCR text (e.g. "4,000 MILES" → "4000 miles").
// Returns a numerically-sorted array so pills appear in chronological order.
function extractMileageTags(text) {
  if (!text) return [];
  const matches = [...text.matchAll(/([\d,]+)\s*miles/gi)];
  const nums = new Set();
  for (const m of matches) {
    const n = parseInt(m[1].replace(/,/g, ''), 10);
    if (n >= 500 && n <= 150000) nums.add(n); // ignore OCR garbage outside plausible range
  }
  return [...nums]
    .sort((a, b) => a - b)
    .map(n => `${n.toLocaleString()} miles`); // "4,000 miles" — consistent with OCR text
}

// Build the tag list for a page:
// • Non-mileage section tags come from the section definition (stable, curated)
// • Mileage tags are extracted live from the page's OCR text (accurate per-page)
function buildPageTags(pageNum, model, ocrText) {
  const sectionTags = getSectionInfo(pageNum, model)?.tags || [];
  const nonMileage  = sectionTags.filter(t => !/\d.*miles/i.test(t));
  const mileage     = extractMileageTags(ocrText);
  return [...nonMileage, ...mileage];
}

// Detect if a page's OCR text references lubrication point codes (A1, B1, C2 etc.)
// These codes refer to the lubrication diagram on Mk III page 20.
const LUB_CODE_RE = /\b[A-J]\d+\s*[—–\-]/;
function referencesLubDiagram(text) {
  return LUB_CODE_RE.test(text || '');
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
  const [showWiring, setShowWiring] = useState(false);
  // Static fallback numbers — always show, updated live when token available
  const [registryStats, setRegistryStats] = useState({
    recorded: 91, undiscovered: 163, snapped: 395, missing: 37, live: false
  });

  useEffect(() => {
    const token = import.meta.env.VITE_AIRTABLE_TOKEN;
    if (!token) return;
    const fetchStats = async () => {
      try {
        let all = [], offset = null;
        do {
          const url = `https://api.airtable.com/v0/appqtFw9HrvLwGDRV/C-V8s?pageSize=100&fields[]=Status&fields[]=Last%20Seen&fields[]=Photographs${offset ? '&offset=' + offset : ''}`;
          const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
          const data = await res.json();
          all = [...all, ...(data.records || [])];
          offset = data.offset;
        } while (offset);
        const cutoff = new Date(); cutoff.setFullYear(cutoff.getFullYear() - 1);
        const cutoffStr = cutoff.toISOString().split('T')[0];
        setRegistryStats({
          recorded:     all.filter(r => r.fields['Last Seen'] >= cutoffStr).length,
          undiscovered: all.filter(r => !r.fields['Last Seen']).length,
          snapped:      all.filter(r => r.fields['Photographs']?.length > 0).length,
          missing:      all.filter(r => r.fields['Status'] === 'Missing').length,
          live: true,
        });
      } catch (e) { /* keep fallback numbers */ }
    };
    fetchStats();
  }, []);
  const [showSelectaride, setShowSelectaride] = useState(false);
  const [selectarideSection, setSelectarideSection] = useState(null); // active section id
  const [selectarideZoom, setSelectarideZoom] = useState(100);
  const [wiringQuery, setWiringQuery] = useState('');
  const [wiringCircuit, setWiringCircuit] = useState('all');
  const [wiringZoom, setWiringZoom] = useState(100);

  const [appMode, setAppMode] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.__SHOWROOM_MODE__ || window.location.search.includes('showroom') || window.location.pathname.includes('/showroom')) return 'showroom';
    }
    return 'home';
  }); // 'home' | 'workshop' | 'manual' | 'restoration' | 'showroom'
  const [showroomMark, setShowroomMark] = useState('mk3');
  const [nightMode, setNightMode] = useState(false);
  const [configBodyColour, setConfigBodyColour] = useState(bodyColours[0]);
  const [configTrimColour, setConfigTrimColour] = useState(() => trimColours.find(t => t.name === 'Bright Red') || trimColours[0]);
  const [configWheels, setConfigWheels] = useState(wheelOptions[0]);
  const [configTab, setConfigTab] = useState('exterior'); // 'exterior' | 'interior' | 'wheels'
  const [showroomSection, setShowroomSection] = useState('models'); // 'models' | 'configure' | 'specs'
  const [activeArticleId, setActiveArticleId] = useState(null);
  const [restorationCategory, setRestorationCategory] = useState('all');
  const [restorationTab, setRestorationTab] = useState('articles'); // 'articles' | 'parts' | 'lucas' | 'specialists'
  const [specialistType, setSpecialistType] = useState('all');
  const [specialistCountry, setSpecialistCountry] = useState('all');
  const [lucasSystem, setLucasSystem] = useState('all');
  const [lucasQuery, setLucasQuery] = useState('');
  const [restorationModelFilter, setRestorationModelFilter] = useState('all');
  const [partsCategory, setPartsCategory] = useState('all');
  const [partsModelFilter, setPartsModelFilter] = useState('all');
  const [partsQuery, setPartsQuery] = useState('');
  const [workshopCategory, setWorkshopCategory] = useState('all');
  const [activeCardId, setActiveCardId] = useState(null);
  const [workshopQuery, setWorkshopQuery] = useState('');

  const shareConfig = () => {
    const url = `${window.location.origin}${window.location.pathname}?showroom&mark=${showroomMark}&body=${encodeURIComponent(configBodyColour.name)}&trim=${encodeURIComponent(configTrimColour.name)}&wheels=${configWheels.id}`;
    navigator.clipboard.writeText(url).then(() => alert('Configuration URL copied to clipboard'));
  };

  const [ocrEdits, setOcrEdits] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('jensen-ocr-edits') || '{}');
    } catch {
      return {};
    }
  });

  useEffect(() => {
    if (appMode !== 'showroom') return;
    const params = new URLSearchParams(window.location.search);
    if (params.get('mark')) setShowroomMark(params.get('mark'));
    if (params.get('body')) {
      const c = bodyColours.find(c => c.name === params.get('body'));
      if (c) setConfigBodyColour(c);
    }
    if (params.get('trim')) {
      const t = trimColours.find(t => t.name === params.get('trim'));
      if (t) setConfigTrimColour(t);
    }
    if (params.get('wheels')) {
      const w = wheelOptions.find(w => w.id === params.get('wheels'));
      if (w) setConfigWheels(w);
    }
  }, [appMode]);

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
    setSelectarideSection(null); // reset when model changes
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

      <button className="sidebarHomeBtn" onClick={() => { setAppMode('home'); setDrawer(false); }}>← Home</button>

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

      <button
        className={`wiringNavBtn${showWiring ? ' active' : ''}`}
        onClick={() => { setShowWiring(true); setShowSelectaride(false); setDrawer(false); }}
      >
        <Zap size={16} /> Wiring Diagrams
        <small>{selectedModel === 'mk3' ? 'Mk III' : 'Mk I & II'} · colourised</small>
      </button>

      <button
        className={`wiringNavBtn selectarideNavBtn${showSelectaride ? ' active' : ''}`}
        onClick={() => { setShowSelectaride(true); setShowWiring(false); setDrawer(false); }}
      >
        <Settings size={16} /> Selectaride
        <small>{selectedModel === 'mk3' ? 'Mk III' : 'Mk I & II'} · shock absorbers</small>
      </button>

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
        {appMode === 'manual' && (
          <button className="hamburger" onClick={() => setDrawer(true)}>
            <Menu />
          </button>
        )}

        <div className="brand">
          <img src="/jensen-logo.png" alt="Jensen logo" />
          <div>
            <p>Jensen C-V8</p>
            <h1>Workshop Companion</h1>
            <small>{selectedModelLabel}</small>
          </div>
        </div>

        <nav className="appNav">
          <button className={appMode === 'home' ? 'active' : ''} onClick={() => { setAppMode('home'); setActiveCardId(null); setActiveArticleId(null); }}>Home</button>
          <button className={appMode === 'workshop' ? 'active' : ''} onClick={() => { setAppMode('workshop'); setActiveCardId(null); }}>Workshop</button>
          <button className={appMode === 'restoration' ? 'active' : ''} onClick={() => { setAppMode('restoration'); setActiveArticleId(null); }}>Restoration</button>
          <button className={appMode === 'manual' ? 'active' : ''} onClick={() => setAppMode('manual')}>Manuals</button>
        </nav>

        <div className="headerRight">
          {appMode === 'manual' && (
            <button className="openPdf" onClick={() => openPdf()}>Open PDF</button>
          )}
          <a
            href="https://jensencv8-org.webflow.io"
            target="_blank"
            rel="noopener noreferrer"
            className="parentSiteLink"
            title="jensencv8.org"
          >
            <ExternalLink size={14} />
            <span>jensencv8.org</span>
          </a>
        </div>
      </header>

      <div className={appMode === 'manual' ? 'layout' : appMode === 'showroom' ? 'showroomWrapper' : 'layoutFull'}>

        {/* ── Home Mode ─────────────────────────────────── */}
        {appMode === 'home' && (
          <main className="homePage">
            <div className="homeHero">
              <p className="eyebrow">Jensen C-V8</p>
              <h2>Workshop Companion</h2>
              <p>Repair guides, maintenance schedules, wiring diagrams and original manuals — everything you need in the driveway.</p>
              <p className="modelSelectLabel">Select your model of Jensen C-V8 to get started</p>
              <select value={selectedModel} onChange={e => setSelectedModel(e.target.value)} className="modelSelect homeModelSelect">
                <option value="all">All Jensen C-V8 Models</option>
                <option value="mk1">Jensen C-V8 Mk I</option>
                <option value="mk2">Jensen C-V8 Mk II</option>
                <option value="mk3">Jensen C-V8 Mk III</option>
              </select>
            </div>
            <div className="workInProgressBanner">
              <span className="wipIcon">🔧</span>
              <div>
                <strong>This site is a work in progress.</strong>
                <p>Repair guides, parts information and known issues are being added continuously. Some manual text extracted from the original scans may contain errors — if you spot one, the Edit OCR function in the Manuals section lets you correct it directly. When in doubt, always verify against the original scanned page.</p>
              </div>
            </div>

            <div className="homeSections">
              <button className="homeSection primary" onClick={() => setAppMode('workshop')}>
                <span className="homeSectionIcon">🔧</span>
                <h3>Repair &amp; Maintenance</h3>
                <p>Task-oriented repair cards, troubleshooting guides and maintenance schedules.</p>
                <span className="homeSectionArrow">→</span>
              </button>
              <button className="homeSection" onClick={() => setAppMode('manual')}>
                <span className="homeSectionIcon">📖</span>
                <h3>Manuals &amp; Diagrams</h3>
                <p>Easily search the original manuals, wiring diagrams and scanned pages.</p>
                <span className="homeSectionArrow">→</span>
              </button>
              <a href="https://airtable.com/appqtFw9HrvLwGDRV/shrc1eGBCmNryrv0M" target="_blank" rel="noopener noreferrer" className="homeSection registrySection">
                <div className="registryBadge">500 built · 1962–1966</div>
                <img src="/jensen-badge.png" alt="Jensen Motors Ltd." className="homeSectionIcon registryBadgeIcon" />
                <h3>Registry</h3>
                <p className="registryTagline">Tracking Every Jensen C-V8</p>
                <p>A global community effort to locate every surviving car — restored, mid-project or barn find. Every detail helps tell the story.</p>
                <div className="registryLiveStats">
                    <div><strong>{registryStats.recorded}</strong><span>Recorded in last 12 months</span></div>
                    <div><strong>{registryStats.undiscovered}</strong><span>Yet to be found</span></div>
                    <div><strong>{registryStats.snapped}</strong><span>Photos recorded</span></div>
                    <div><strong>{registryStats.missing}</strong><span>Not been seen since</span></div>
                  </div>
                  {registryStats.live && <span className="registryLiveIndicator">● live</span>}
                <p className="registryCta">Update your car · Explore survivors ↗</p>
              </a>
              <button className="homeSection" onClick={() => { setAppMode('restoration'); setActiveArticleId(null); }}>
                <span className="homeSectionIcon">🔩</span>
                <h3>Restoration Knowledge</h3>
                <p>Upgrade guides, parts advice, paint codes and restoration know-how from the C-V8 community.</p>
                <span className="homeSectionArrow">→</span>
              </button>

              {/* Showroom tile — full-width feature */}
              <a href="/showroom" className="homeSection showroomFeatureTile">
                <div className="showroomFeatureBadge">New</div>
                <div className="showroomFeatureContent">
                  <p className="showroomFeatureEyebrow">Parallel Universe</p>
                  <h3 className="showroomFeatureTitle">What if you could order a Jensen C-V8 today?</h3>
                  <p className="showroomFeatureCopy">How much would it cost? What colour would you choose? Every option, every surcharge — exactly as Jensen Motors offered them in 1962. Configure yours in this what-if experience and find out what your car would have cost then, and what that means in today's money.</p>
                  <span className="showroomFeatureCta">Enter the showroom →</span>
                </div>
                <div className="showroomFeatureImages">
                  <img src="/showroom/cv8-mk3-hero.jpg" alt="Jensen C-V8 Mk III" className="showroomFeatureImg showroomFeatureImgMain" />
                  <img src="/showroom/cv8-mk2-hero.jpg" alt="Jensen C-V8 Mk II" className="showroomFeatureImg showroomFeatureImgSub" />
                </div>
              </a>

              {/* Community tile — full-width, links to forums, social & chat */}
              <div className="homeSection communitySection">
                <div className="communitySectionHeader">
                  <span className="homeSectionIcon">💬</span>
                  <div>
                    <h3>Community</h3>
                    <p>Forums, social groups and owner networks.</p>
                  </div>
                </div>
                <div className="communityLinks">
                  <a href="https://joc.org.uk/joc-forum/?w3=dmlld2ZvcnVtLnBocD9mPTY=" target="_blank" rel="noopener noreferrer" className="communityLink">
                    <div className="communityLinkIconWrap" style={{ background: '#1a1a2e' }}>
                      <img src="/joc-logo.png" alt="JOC" className="communityLogo" style={{ width: 28, height: 28 }} />
                    </div>
                    <div>
                      <strong>JOC C-V8 Tech Forum</strong>
                      <span>Jensen Owners Club technical forum</span>
                    </div>
                    <ExternalLink size={14} className="communityArrow" />
                  </a>

                  <a href="https://www.facebook.com/share/g/1BbPfYdm2v/" target="_blank" rel="noopener noreferrer" className="communityLink">
                    <div className="communityLinkIconWrap" style={{ background: '#1877F2' }}>
                      {/* Facebook logo SVG */}
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                      </svg>
                    </div>
                    <div>
                      <strong>Jensen C-V8 Facebook Group</strong>
                      <span>Owners group — news, photos and discussion</span>
                    </div>
                    <ExternalLink size={14} className="communityArrow" />
                  </a>

                  <a href="https://www.facebook.com/share/g/18rxSoRBHz/" target="_blank" rel="noopener noreferrer" className="communityLink">
                    <div className="communityLinkIconWrap" style={{ background: '#1877F2' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                      </svg>
                    </div>
                    <div>
                      <strong>C-V8 Parts for Sale</strong>
                      <span>Facebook group — parts buying and selling</span>
                    </div>
                    <ExternalLink size={14} className="communityArrow" />
                  </a>

                  <a href="https://chat.whatsapp.com/DoyaYf5DEUuFgXuHS8qVZ3?s=cl&p=i&ilr=4" target="_blank" rel="noopener noreferrer" className="communityLink">
                    <div className="communityLinkIconWrap" style={{ background: '#25D366' }}>
                      {/* WhatsApp logo SVG */}
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <strong>C-V8 Owners WhatsApp Group</strong>
                      <span>Direct chat with fellow owners</span>
                    </div>
                    <ExternalLink size={14} className="communityArrow" />
                  </a>
                </div>
              </div>
            </div>
          </main>
        )}

        {/* ── Workshop Mode ─────────────────────────────── */}
        {appMode === 'workshop' && !activeCardId && (() => {
          const filteredCards = repairCards.filter(card => {
            const modelMatch = selectedModel === 'all' || card.models.includes('all') || card.models.includes(selectedModel);
            const catMatch = workshopCategory === 'all' || card.category === workshopCategory;
            const q = workshopQuery.trim().toLowerCase();
            const textMatch = !q || card.title.toLowerCase().includes(q) || card.subtitle.toLowerCase().includes(q) || card.overview.toLowerCase().includes(q) || card.symptoms.some(s => s.toLowerCase().includes(q));
            return modelMatch && catMatch && textMatch;
          });

          const difficultyColour = { easy: 'diffEasy', moderate: 'diffModerate', advanced: 'diffAdvanced' };

          return (
            <main className="workshopView">
              <div className="workshopHeader">
                <div>
                  <p className="eyebrow">Workshop Companion</p>
                  <h2>Repair &amp; Maintenance</h2>
                </div>
                <div className="workshopHeaderControls">
                  <div className="workshopSearch">
                    <Search size={16} />
                    <input
                      value={workshopQuery}
                      onChange={e => setWorkshopQuery(e.target.value)}
                      placeholder="Search: overheating, brake servo, idle..."
                    />
                    {workshopQuery && <button onClick={() => setWorkshopQuery('')}>Clear</button>}
                  </div>
                  <select value={selectedModel} onChange={e => setSelectedModel(e.target.value)} className="modelSelect">
                    <option value="all">All Models</option>
                    <option value="mk1">Mk I</option>
                    <option value="mk2">Mk II</option>
                    <option value="mk3">Mk III</option>
                  </select>
                </div>
              </div>

              <div className="workshopCategoryFilters">
                <button className={workshopCategory === 'all' ? 'active' : ''} onClick={() => setWorkshopCategory('all')}>All</button>
                {repairCategories.map(cat => (
                  <button key={cat.id} className={workshopCategory === cat.id ? 'active' : ''} onClick={() => setWorkshopCategory(cat.id)}>
                    {cat.emoji} {cat.label}
                  </button>
                ))}
              </div>

              {filteredCards.length === 0 ? (
                <div className="workshopEmpty">
                  <Wrench size={32} />
                  <p>No repair cards match your search. Try different keywords or clear the filter.</p>
                </div>
              ) : (
                <div className="workshopCardGrid">
                  {filteredCards.map(card => {
                    const cat = repairCategories.find(c => c.id === card.category);
                    return (
                      <button key={card.id} className="workshopCard" onClick={() => setActiveCardId(card.id)}>
                        <div className="workshopCardTop">
                          <span className="workshopCardCat">{cat?.emoji} {cat?.label}</span>
                          <span className={`workshopCardDiff ${difficultyColour[card.difficulty]}`}>{card.difficulty}</span>
                        </div>
                        <h3>{card.title}</h3>
                        <p className="workshopCardSubtitle">{card.subtitle}</p>
                        <p className="workshopCardOverview">{card.overview.slice(0, 120)}…</p>
                        {card.symptoms.length > 0 && (
                          <div className="workshopCardSymptoms">
                            <AlertTriangle size={12} />
                            <span>{card.symptoms.slice(0, 2).join(' · ')}</span>
                          </div>
                        )}
                        <span className="workshopCardArrow">View card →</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </main>
          );
        })()}

        {/* ── Workshop Card Detail ───────────────────────── */}
        {appMode === 'workshop' && activeCardId && (() => {
          const card = repairCards.find(c => c.id === activeCardId);
          if (!card) return null;
          const cat = repairCategories.find(c => c.id === card.category);
          const difficultyColour = { easy: 'diffEasy', moderate: 'diffModerate', advanced: 'diffAdvanced' };

          return (
            <main className="repairCardDetail">
              <button className="backBtn workshopBackBtn" onClick={() => setActiveCardId(null)}>← Back to Workshop</button>

              <div className="cardDetailHeader">
                <div className="cardDetailHeaderLeft">
                  <div className="cardDetailBadges">
                    <span className="workshopCardCat">{cat?.emoji} {cat?.label}</span>
                    <span className={`workshopCardDiff ${difficultyColour[card.difficulty]}`}>{card.difficulty}</span>
                    {card.models[0] !== 'all' && (
                      <span className="workshopCardModel">{card.models.map(m => m.toUpperCase()).join(' · ')}</span>
                    )}
                  </div>
                  <h2>{card.title}</h2>
                  <p className="cardDetailSubtitle">{card.subtitle}</p>
                </div>
              </div>

              <div className="cardDetailSection">
                <p className="cardDetailOverview">{card.overview}</p>
              </div>

              {card.symptoms.length > 0 && (
                <div className="cardDetailSection">
                  <h3 className="cardDetailSectionTitle"><AlertTriangle size={18} /> Symptoms</h3>
                  <ul className="cardDetailList symptomList">
                    {card.symptoms.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </div>
              )}

              <div className="toolsPartsGrid">
                <div className="cardDetailSection">
                  <h3 className="cardDetailSectionTitle"><Wrench size={18} /> Tools Required</h3>
                  <ul className="cardDetailList">
                    {card.tools.length > 0 ? card.tools.map((t, i) => <li key={i}>{t}</li>) : <li>Standard hand tools</li>}
                  </ul>
                </div>
                <div className="cardDetailSection">
                  <h3 className="cardDetailSectionTitle"><Settings size={18} /> Parts &amp; Materials</h3>
                  <ul className="cardDetailList">
                    {card.parts.length > 0 ? card.parts.map((p, i) => <li key={i}>{p}</li>) : <li>No replacement parts required</li>}
                  </ul>
                </div>
              </div>

              <div className="cardDetailSection">
                <h3 className="cardDetailSectionTitle"><ClipboardList size={18} /> Procedure</h3>
                <ol className="procedureList">
                  {card.procedure.map((step, i) => (
                    <li key={i}>
                      <span className="procedureStep">{i + 1}</span>
                      <p>{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {card.checklist.length > 0 && (() => {
                const checkedCount = card.checklist.filter((_, i) => checkedItems[`card:${card.id}:${i}`]).length;
                const clearCardChecks = () => {
                  const next = { ...checkedItems };
                  card.checklist.forEach((_, i) => delete next[`card:${card.id}:${i}`]);
                  setCheckedItems(next);
                };
                return (
                  <div className="cardDetailSection">
                    <div className="checklistHeader">
                      <div>
                        <h3 className="cardDetailSectionTitle" style={{ margin: 0 }}><ClipboardList size={18} /> Checklist</h3>
                        <p className="helperText">{checkedCount} of {card.checklist.length} checked</p>
                      </div>
                      {checkedCount > 0 && <button className="clearBtn" onClick={clearCardChecks}>Clear</button>}
                    </div>
                    <ul className="interactiveChecklist">
                      {card.checklist.map((item, i) => {
                        const key = `card:${card.id}:${i}`;
                        const checked = !!checkedItems[key];
                        return (
                          <li key={i} className={checked ? 'checked' : ''} onClick={() => setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }))}>
                            <span className="checkbox">{checked ? '✓' : ''}</span>
                            <p>{item}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })()}

              {card.manualRefs.length > 0 && (
                <div className="cardDetailSection">
                  <h3 className="cardDetailSectionTitle"><BookOpen size={18} /> Manual References</h3>
                  <div className="manualRefButtons">
                    {card.manualRefs.map((ref, i) => {
                      const isAvailable = ref.model === 'base' ? selectedModel !== 'mk3' : selectedModel === 'mk3' || selectedModel === 'all';
                      return (
                        <button
                          key={i}
                          className={`manualRefBtn${!isAvailable ? ' muted' : ''}`}
                          onClick={() => {
                            if (ref.model !== selectedModel && ref.model !== 'base') {
                              setSelectedModel('mk3');
                            } else if (ref.model === 'base' && selectedModel === 'mk3') {
                              setSelectedModel('all');
                            }
                            goPage(ref.pages[0]);
                            setAppMode('manual');
                          }}
                        >
                          <BookOpen size={14} />
                          <span>{ref.label}</span>
                          <small>p. {ref.pages.join(', ')} · {ref.model === 'mk3' ? 'Mk III manual' : 'Base manual'}</small>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </main>
          );
        })()}

        {/* ── Restoration Knowledge ─────────────────────── */}
        {appMode === 'restoration' && (() => {
          const activeArticle = activeArticleId
            ? restorationArticles.find(a => a.id === activeArticleId)
            : null;

          const filteredArticles = restorationArticles.filter(a => {
            const catMatch = restorationCategory === 'all' || a.category === restorationCategory;
            const modelMatch = restorationModelFilter === 'all' ||
              a.models.includes('all') ||
              a.models.includes(restorationModelFilter);
            return catMatch && modelMatch;
          });

          // Render a content section
          const renderSection = (section, idx) => {
            switch (section.type) {
              case 'heading':
                return <h4 key={idx} className="articleH4">{section.content}</h4>;
              case 'paragraph':
                return <p key={idx} className="articleParagraph">{section.content}</p>;
              case 'warning':
                return <div key={idx} className="articleCallout warning"><AlertTriangle size={18} /><p>{section.content}</p></div>;
              case 'tip':
                return <div key={idx} className="articleCallout tip"><Wrench size={18} /><p>{section.content}</p></div>;
              case 'list':
                return <ul key={idx} className="articleList">{section.content.map((item, i) => <li key={i}>{item}</li>)}</ul>;
              case 'steps':
                return (
                  <ol key={idx} className="articleSteps">
                    {section.content.map((step, i) => (
                      <li key={i}><span>{i + 1}</span><p>{step}</p></li>
                    ))}
                  </ol>
                );
              case 'parts':
                return (
                  <div key={idx} className="articlePartsTable">
                    {section.content.map((part, i) => (
                      <div key={i} className="articlePart">
                        <div className="articlePartTop">
                          <strong>{part.name}</strong>
                          {part.partNumber && <code className="partNumber">{part.partNumber}</code>}
                        </div>
                        {part.notes && <p>{part.notes}</p>}
                      </div>
                    ))}
                  </div>
                );
              case 'costTable':
                return (
                  <div key={idx} className="articleCostTable">
                    <div className="costTableHeader">
                      <span>Item</span><span>USD</span><span>GBP</span><span>EUR</span>
                    </div>
                    {section.content.map((row, i) => (
                      <div key={i} className={`costTableRow${row.item.toLowerCase().includes('total') ? ' total' : ''}`}>
                        <span>{row.item}</span><span>{row.usd}</span><span>{row.gbp}</span><span>{row.eur}</span>
                      </div>
                    ))}
                  </div>
                );
              case 'images':
                return (
                  <div key={idx} className="articleImageGrid">
                    {section.content.map((img, i) => (
                      <div key={i} className="articleImageWrap">
                        <img src={img.src} alt={img.caption} className="articleImage" />
                        {img.caption && <p className="articleImageCaption">{img.caption}</p>}
                      </div>
                    ))}
                  </div>
                );
              case 'suspensionParts': {
                const availLabel = { available: 'MGB/BMC', healey: 'Austin-Healey', unavailable: 'Not available', possible: 'Possible alt.', check: 'Verify' };
                const availClass = { available: 'availGreen', healey: 'availYellow', unavailable: 'availRed', possible: 'availBlue', check: 'availGrey' };
                return (
                  <div key={idx}>
                    {section.availabilityKey && (
                      <div className="suspAvailKey">
                        <strong>Availability key:</strong>
                        {Object.entries(availLabel).map(([k,v]) => (
                          <span key={k} className={`suspAvailBadge ${availClass[k]}`}>{v}</span>
                        ))}
                      </div>
                    )}
                    <div className="suspPartsTable">
                      <div className="suspPartsHeader">
                        <span>Ref</span><span>Description</span><span>Part No.</span><span>Qty</span><span>Applications</span><span>Notes</span>
                      </div>
                      {section.content.map((row, i) => (
                        <div key={i} className={`suspPartsRow ${availClass[row.availability] || ''}`}>
                          <span className="suspRef">{row.ref || ''}</span>
                          <span className="suspDesc">{row.description}</span>
                          <span className="suspPart">{row.partNumber ? <code>{row.partNumber}</code> : <em className="paintUnknown">TBC</em>}</span>
                          <span className="suspQty">{row.qty || ''}</span>
                          <span className="suspApps">{row.applications || '—'}</span>
                          <span className="suspNote">{row.notes || ''}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
              case 'paintTable':
                return (
                  <div key={idx} className="paintTable">
                    <div className="paintTableHeader">
                      <span>Colour</span>
                      <span>ICI Code</span>
                      <span>Modern Alternative</span>
                      <span>Notes</span>
                    </div>
                    {section.content.map((row, i) => (
                      <div key={i} className="paintTableRow">
                        <span className="paintColourCell">
                          <span className="paintSwatch" style={{ background: row.css }} />
                          <strong>{row.colour}</strong>
                        </span>
                        <span className="paintCode">{row.iciCode || <em className="paintUnknown">Unknown</em>}</span>
                        <span>{row.alternative || '—'}</span>
                        <span className="paintNoteCell">{row.notes || '—'}</span>
                      </div>
                    ))}
                  </div>
                );
              default:
                return null;
            }
          };

          return (
            <main className="restorationMain">
              {activeArticle ? (
                /* ── Article detail ── */
                <div className="articleDetail">
                  <div className="articleDetailHeader">
                    <button className="backBtn" onClick={() => setActiveArticleId(null)}>← Back to Restoration</button>
                    <div className="articleMeta">
                      <span className="articleCategory">{restorationCategories.find(c => c.id === activeArticle.category)?.emoji} {restorationCategories.find(c => c.id === activeArticle.category)?.label}</span>
                      {activeArticle.severity === 'critical' && <span className="severityBadge">⚠️ Safety Critical</span>}
                      <span className="articleDifficulty">{activeArticle.difficulty}</span>
                      <span className="articleReadTime">📖 {activeArticle.readTime}</span>
                    </div>
                    <h2>{activeArticle.title}</h2>
                    <p className="articleSubtitle">{activeArticle.subtitle}</p>
                  </div>

                  <div className="card articleBody">
                    <p className="articleIntro">{activeArticle.intro}</p>
                    {activeArticle.sections.map((s, i) => renderSection(s, i))}

                    {activeArticle.contributors?.length > 0 && (
                      <div className="articleCredits">
                        <strong>Contributors:</strong> {activeArticle.contributors.join(', ')}
                        {activeArticle.sourceUrl && (
                          <> · <a href={activeArticle.sourceUrl} target="_blank" rel="noopener noreferrer" className="articleSourceLink">
                            View original discussion <ExternalLink size={12} />
                          </a></>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Manual cross-references */}
                  {activeArticle.sections.some(s => s.type === 'list' && s.content.some(i => i.includes('manual'))) && (
                    <div className="card">
                      <h3 className="sectionTitle">Manual References</h3>
                      <div className="manualRefButtons">
                        <button className="manualRefBtn" onClick={() => { setAppMode('manual'); goPage(29); }}>
                          <BookOpen size={14} /> Mk III — Ignition p. 29–30
                        </button>
                        <button className="manualRefBtn" onClick={() => { setAppMode('manual'); goPage(5); }}>
                          <BookOpen size={14} /> Base Manual — Specs p. 5–6
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* ── Article list + Parts sub-tab ── */
                <>
                  <div className="restorationHeader">
                    <h2>Restoration Knowledge</h2>
                    <p>Community guides, upgrade how-tos and restoration know-how for the Jensen C-V8.</p>
                  </div>

                  {/* Sub-navigation tabs */}
                  <div className="restorationTabs">
                    <button className={restorationTab === 'articles' ? 'active' : ''} onClick={() => setRestorationTab('articles')}>
                      <BookOpen size={15} /> Articles &amp; Guides
                    </button>
                    <button className={restorationTab === 'parts' ? 'active' : ''} onClick={() => setRestorationTab('parts')}>
                      <Wrench size={15} /> Alternative Parts
                    </button>
                    <button className={restorationTab === 'lucas' ? 'active' : ''} onClick={() => setRestorationTab('lucas')}>
                      <Gauge size={15} /> Lucas Parts Reference
                    </button>
                    <button className={restorationTab === 'specialists' ? 'active' : ''} onClick={() => setRestorationTab('specialists')}>
                      <Wrench size={15} /> Find a Specialist
                    </button>
                  </div>

                  {restorationTab === 'parts' && (
                    /* ── Parts List ── */
                    <div className="partsListView">
                      <div className="partsListHeader">
                        <p className="partsCredit">📋 {partsSourceCredit}</p>
                      </div>

                      {/* Search */}
                      <div className="partsSearch">
                        <Search size={16} />
                        <input
                          value={partsQuery}
                          onChange={e => setPartsQuery(e.target.value)}
                          placeholder="Search by part, alternative, supplier or part number…"
                        />
                        {partsQuery && <button onClick={() => setPartsQuery('')}>Clear</button>}
                      </div>

                      {/* Model filter */}
                      <div className="modelFilterRow">
                        <span className="modelFilterLabel">Model:</span>
                        {[['all','All'],['mk1','Mk I'],['mk2','Mk II'],['mk3','Mk III']].map(([val, label]) => (
                          <button key={val} className={partsModelFilter === val ? 'active' : ''} onClick={() => setPartsModelFilter(val)}>{label}</button>
                        ))}
                      </div>

                      {/* Category filter pills */}
                      <div className="categoryFilters">
                        <button className={partsCategory === 'all' ? 'active' : ''} onClick={() => setPartsCategory('all')}>All</button>
                        {partsCategories.map(c => (
                          <button key={c.id} className={partsCategory === c.id ? 'active' : ''} onClick={() => setPartsCategory(c.id)}>
                            {c.emoji} {c.label}
                          </button>
                        ))}
                      </div>

                      {/* Parts table */}
                      {(() => {
                        const q = partsQuery.trim().toLowerCase();
                        const filtered = alternativeParts.filter(p => {
                          const catMatch = partsCategory === 'all' || p.category === partsCategory;
                          if (!catMatch) return false;
                          const modelMatch = partsModelFilter === 'all' ||
                            p.models.includes('all') ||
                            p.models.includes(partsModelFilter);
                          if (!modelMatch) return false;
                          if (!q) return true;
                          return (
                            p.part.toLowerCase().includes(q) ||
                            (p.alternative || '').toLowerCase().includes(q) ||
                            (p.partNumber || '').toLowerCase().includes(q) ||
                            (p.supplier || '').toLowerCase().includes(q) ||
                            (p.notes || '').toLowerCase().includes(q)
                          );
                        });

                        // Group by category for display
                        const grouped = {};
                        filtered.forEach(p => {
                          if (!grouped[p.category]) grouped[p.category] = [];
                          grouped[p.category].push(p);
                        });

                        if (filtered.length === 0) return (
                          <div className="emptyChecklist" style={{ marginTop: 16 }}>
                            <Wrench size={24} />
                            <p>No parts match your search. Try a different term or clear the filter.</p>
                          </div>
                        );

                        return Object.entries(grouped).map(([catId, parts]) => {
                          const cat = partsCategories.find(c => c.id === catId);
                          return (
                            <div key={catId} className="partsGroup">
                              <h3 className="partsGroupTitle">{cat?.emoji} {cat?.label}</h3>
                              <div className="partsTable">
                                {parts.map(part => (
                                  <div key={part.id} className="partRow">
                                    <div className="partMain">
                                      <strong className="partName">{part.part}</strong>
                                      {part.models && !part.models.includes('all') && (
                                        <span className="partModels">{part.models.map(m => m.toUpperCase()).join(' · ')}</span>
                                      )}
                                    </div>
                                    {part.alternative && (
                                      <div className="partAlt">
                                        <span className="partAltLabel">Alternative</span>
                                        <span>{part.alternative}</span>
                                      </div>
                                    )}
                                    {part.partNumber && (
                                      <div className="partAlt">
                                        <span className="partAltLabel">Part no.</span>
                                        <code className="partNumber">{part.partNumber}</code>
                                      </div>
                                    )}
                                    {part.supplier && (
                                      <div className="partAlt">
                                        <span className="partAltLabel">Supplier</span>
                                        <span className="partSupplier">{part.supplier}</span>
                                      </div>
                                    )}
                                    {part.notes && (
                                      <p className="partNotes">{part.notes}</p>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        });
                      })()}
                    </div>
                  )}

                  {/* ── Article list ── */}
                  {restorationTab === 'articles' && <>
                  {/* Model filter */}
                  <div className="modelFilterRow">
                    <span className="modelFilterLabel">Model:</span>
                    {[['all','All'],['mk1','Mk I'],['mk2','Mk II'],['mk3','Mk III']].map(([val, label]) => (
                      <button key={val} className={restorationModelFilter === val ? 'active' : ''} onClick={() => setRestorationModelFilter(val)}>{label}</button>
                    ))}
                  </div>

                  {/* Category filter */}
                  <div className="categoryFilters">
                    <button className={restorationCategory === 'all' ? 'active' : ''} onClick={() => setRestorationCategory('all')}>All</button>
                    {restorationCategories.map(c => (
                      <button key={c.id} className={restorationCategory === c.id ? 'active' : ''} onClick={() => setRestorationCategory(c.id)}>
                        {c.emoji} {c.label}
                      </button>
                    ))}
                  </div>

                  <div className="articleGrid">
                    {filteredArticles.map(article => (
                      <button key={article.id} className="articleCard" onClick={() => setActiveArticleId(article.id)}>
                        <div className="articleCardTop">
                          <span className="articleCategory">{restorationCategories.find(c => c.id === article.category)?.emoji} {restorationCategories.find(c => c.id === article.category)?.label}</span>
                          <div style={{display:'flex',gap:6,alignItems:'center'}}>
                            {!article.models.includes('all') && (
                              <span className="articleModelBadge">{article.models.map(m => m.toUpperCase()).join(' · ')}</span>
                            )}
                            {article.severity === 'critical'
                              ? <span className="severityBadge severityBadgeCard">⚠️ Safety Critical</span>
                              : <span className="articleDifficulty">{article.difficulty}</span>
                            }
                          </div>
                        </div>
                        <h3>{article.title}</h3>
                        <p>{article.subtitle}</p>
                        <div className="articleCardFooter">
                          <span>{article.readTime}</span>
                          <span className="articleCardTags">{article.tags.slice(0, 3).map(t => <span key={t} className="sectionCardTag">{t}</span>)}</span>
                        </div>
                      </button>
                    ))}

                    {filteredArticles.length === 0 && (
                      <div className="emptyChecklist" style={{ gridColumn: '1/-1' }}>
                        <Wrench size={24} />
                        <p>No articles in this category yet. More guides will be added as the community contributes them.</p>
                      </div>
                    )}
                  </div>
                  </>}

                  {/* ── Lucas Parts Reference ── */}
                  {restorationTab === 'lucas' && (
                    <div className="partsListView">
                      <div className="partsListHeader">
                        <p className="partsCredit">📋 {lucasDocumentInfo.title} · {lucasDocumentInfo.reference} · Issued {lucasDocumentInfo.issued} · {lucasDocumentInfo.publisher}</p>
                        <p className="partsCredit" style={{marginTop:4,opacity:.7}}>{lucasDocumentInfo.notes}</p>
                      </div>

                      <div className="partsSearch">
                        <Search size={16} />
                        <input
                          value={lucasQuery}
                          onChange={e => setLucasQuery(e.target.value)}
                          placeholder="Search by part description or part number…"
                        />
                        {lucasQuery && <button onClick={() => setLucasQuery('')}>Clear</button>}
                      </div>

                      <div className="categoryFilters">
                        <button className={lucasSystem === 'all' ? 'active' : ''} onClick={() => setLucasSystem('all')}>All</button>
                        {lucasSystems.map(s => (
                          <button key={s.id} className={lucasSystem === s.id ? 'active' : ''} onClick={() => setLucasSystem(s.id)}>
                            {s.emoji} {s.label}
                          </button>
                        ))}
                      </div>

                      {(() => {
                        const q = lucasQuery.trim().toLowerCase();
                        const filtered = lucasParts.filter(p => {
                          const sysMatch = lucasSystem === 'all' || p.system === lucasSystem;
                          if (!sysMatch) return false;
                          if (!q) return true;
                          return (
                            p.component.toLowerCase().includes(q) ||
                            (p.partNumber || '').toLowerCase().includes(q) ||
                            (p.lucasModel || '').toLowerCase().includes(q) ||
                            p.parts.some(sp => sp.description.toLowerCase().includes(q) || sp.partNumber.toLowerCase().includes(q))
                          );
                        });

                        if (filtered.length === 0) return (
                          <div className="emptyChecklist" style={{marginTop:16}}>
                            <Wrench size={24} />
                            <p>No parts match your search.</p>
                          </div>
                        );

                        const grouped = {};
                        filtered.forEach(p => {
                          if (!grouped[p.system]) grouped[p.system] = [];
                          grouped[p.system].push(p);
                        });

                        return Object.entries(grouped).map(([sysId, components]) => {
                          const sys = lucasSystems.find(s => s.id === sysId);
                          return (
                            <div key={sysId} className="partsGroup">
                              <h3 className="partsGroupTitle">{sys?.emoji} {sys?.label}</h3>
                              <div className="lucasTable">
                                {components.map(comp => (
                                  <div key={comp.id} className="lucasComponent">
                                    <div className="lucasComponentHeader">
                                      <div>
                                        <strong className="lucasComponentName">{comp.component}</strong>
                                        {comp.lucasModel && <span className="lucasModel">Model: {comp.lucasModel}</span>}
                                      </div>
                                      {comp.partNumber && <code className="lucasPartNo">{comp.partNumber}</code>}
                                    </div>
                                    {comp.notes && <p className="partNotes">{comp.notes}</p>}
                                    {comp.parts.length > 0 && (
                                      <table className="lucasSubParts">
                                        <tbody>
                                          {comp.parts.map((sp, i) => (
                                            <tr key={i} className={sp.recommended ? 'recommended' : ''}>
                                              <td>{sp.description}{sp.recommended && <span className="lucasRecommended">§</span>}</td>
                                              <td><code>{sp.partNumber}</code></td>
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        });
                      })()}

                      <div className="lucasKey">
                        <strong>Key:</strong>
                        <span>§ Recommended spare for stock</span>
                        <span>* New item (at time of issue, Oct 1962)</span>
                        <span>† Quote bracketed part number when ordering</span>
                        <span>‡ Order separately</span>
                        <span>‖ Serviced by Vehicle Manufacturer</span>
                      </div>
                    </div>
                  )}

                  {/* ── Find a Specialist ── */}
                  {restorationTab === 'specialists' && (
                    <div className="partsListView">
                      <div className="partsListHeader">
                        <p className="partsCredit">🔧 Restoration specialists, Jensen dealers and parts suppliers. <strong>Know of a specialist not listed? Get in touch.</strong></p>
                      </div>

                      {/* Filters */}
                      <div className="specialistFilters">
                        <div className="modelFilterRow">
                          <span className="modelFilterLabel">Type:</span>
                          {specialistTypes.map(t => (
                            <button key={t.id} className={specialistType === t.id ? 'active' : ''} onClick={() => setSpecialistType(t.id)}>
                              {t.emoji} {t.label}
                            </button>
                          ))}
                        </div>
                        <div className="modelFilterRow">
                          <span className="modelFilterLabel">Country:</span>
                          {specialistCountries.map(c => (
                            <button key={c.code} className={specialistCountry === c.code ? 'active' : ''} onClick={() => setSpecialistCountry(c.code)}>
                              {c.name}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Specialist cards */}
                      {(() => {
                        const filtered = specialists.filter(s =>
                          (specialistType === 'all' || (s.types || [s.type]).includes(specialistType)) &&
                          (specialistCountry === 'all' || s.countryCode === specialistCountry)
                        );
                        if (filtered.length === 0) return (
                          <div className="emptyChecklist" style={{marginTop:16}}>
                            <Wrench size={24} />
                            <p>No specialists listed for this filter yet. More will be added as the community contributes them.</p>
                          </div>
                        );
                        return (
                          <div className="specialistGrid">
                            {filtered.map(s => (
                              <div key={s.id} className={`specialistCard${s.featured ? ' featured' : ''}`}>
                                {s.logo && (
                                  <div className="specialistLogoWrap">
                                    <img src={s.logo} alt={`${s.name} logo`} className="specialistLogo" style={s.logoScale ? { transform: `scale(${s.logoScale})`, transformOrigin: 'left center' } : {}} />
                                  </div>
                                )}
                                <div className="specialistCardTop">
                                  <div>
                                    <div className="specialistCardMeta">
                                      {(s.types || [s.type]).map(typeId => {
                                        const t = specialistTypes.find(t => t.id === typeId);
                                        return t ? <span key={typeId} className="specialistType">{t.emoji} {t.label}</span> : null;
                                      })}
                                      <span className="specialistLocation">📍 {s.city}, {s.region}, {s.country}</span>
                                    </div>
                                    <h3 className="specialistName">{s.name}</h3>
                                    {s.tagline && <p className="specialistTagline">"{s.tagline}"</p>}
                                  </div>
                                  {s.featured && <span className="specialistFeatured">Featured</span>}
                                </div>
                                <p className="specialistDesc">{s.description}</p>
                                <div className="specialistServices">
                                  {s.services.map(sv => <span key={sv} className="sectionCardTag">{sv}</span>)}
                                </div>
                                <div className="specialistContacts">
                                  {s.website && <a href={s.website} target="_blank" rel="noopener noreferrer" className="specialistLink"><ExternalLink size={13} /> {s.website.replace('https://','').replace('http://','')}</a>}
                                  {s.phone && <span className="specialistLink">📞 {s.phone}</span>}
                                  {s.email && <a href={`mailto:${s.email}`} className="specialistLink">✉ {s.email}</a>}
                                </div>
                              </div>
                            ))}
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </>
              )}
            </main>
          );
        })()}

        {/* ── Virtual Showroom ─────────────────────────────────────── */}
        {appMode === 'showroom' && (() => {
          const model = showroomModels.find(m => m.id === showroomMark);
          const formatPrice = (n) => '£' + n.toLocaleString('en-GB');

          return (
            <main className="showroomMain">
              {/* Header */}
              <div className="showroomHeader">
                <div className="showroomHeaderLeft">
                  <img src="/jensen-badge.png" alt="Jensen" className="showroomBadge" />
                  <div className="showroomHeaderText">
                    <p className="showroomEyebrow">Jensen Motors Ltd · West Bromwich</p>
                    <h1 className="showroomTitle">C-V8 Virtual Showroom</h1>
                  </div>
                </div>
                <button className="showroomExitBtn" onClick={() => setAppMode('home')}>← Workshop Companion</button>
              </div>

              {/* Hero image */}
              <div className="showroomHero">
                <img src={model.heroImage} alt={model.name} className="showroomHeroImg" />
                <div className="showroomHeroOverlay">
                  <p className="showroomHeroEyebrow">{model.years} · {model.produced} built</p>
                  <h2 className="showroomHeroTitle">{model.name}</h2>
                  <p className="showroomHeroTagline">{model.tagline}</p>
                </div>
              </div>

              {/* Model selector */}
              <div className="showroomModelTabs">
                {showroomModels.map(m => (
                  <button
                    key={m.id}
                    className={`showroomModelTab${showroomMark === m.id ? ' active' : ''}`}
                    onClick={() => { setShowroomMark(m.id); setShowroomSection('models'); }}
                  >
                    <span className="showroomTabName">{m.name}</span>
                    <span className="showroomTabYears">{m.years}</span>
                  </button>
                ))}
              </div>

              {/* Section nav */}
              <div className="showroomSectionNav">
                <button className={showroomSection === 'models' ? 'active' : ''} onClick={() => setShowroomSection('models')}>Overview</button>
                <button className={showroomSection === 'specs' ? 'active' : ''} onClick={() => setShowroomSection('specs')}>Specifications</button>
                <button className={showroomSection === 'configure' ? 'active' : ''} onClick={() => setShowroomSection('configure')}>Configure</button>
              </div>

              {/* ── Overview ── */}
              {showroomSection === 'models' && (
                <div className="showroomContent">
                  <div className="showroomOverviewGrid">
                    <div className="showroomOverviewText">
                      <p className="showroomDescription">{model.description}</p>
                      <ul className="showroomHighlights">
                        {model.highlights.map((h, i) => <li key={i}>{h}</li>)}
                      </ul>
                      <div className="showroomPricing">
                        <div className="showroomPrice original">
                          <span className="priceLabel">
                            {model.originalPriceManualGBP ? 'Original price — automatic' : `Original list price (${model.originalPriceNote})`}
                          </span>
                          <span className="priceValue">{formatPrice(model.originalPriceGBP)}</span>
                        </div>
                        <div className="showroomPrice today">
                          <span className="priceLabel">Equivalent today (CPI adjusted)</span>
                          <span className="priceValue">{formatPrice(model.todayEquivalentGBP)}</span>
                        </div>
                        {model.originalPriceManualGBP && <>
                          <div className="showroomPrice original">
                            <span className="priceLabel">Original price — manual transmission</span>
                            <span className="priceValue">{formatPrice(model.originalPriceManualGBP)}</span>
                          </div>
                          <div className="showroomPrice today">
                            <span className="priceLabel">Equivalent today (CPI adjusted)</span>
                            <span className="priceValue">{formatPrice(model.todayEquivalentManualGBP)}</span>
                          </div>
                        </>}
                      </div>
                      <p className="showroomPriceNote">
                        {model.originalPriceSource
                          ? <>Source: {model.originalPriceSource}. Prices include Purchase Tax. Today's equivalent uses Bank of England CPI data.</>
                          : <>Pricing is approximate. Today's equivalent uses Bank of England CPI data.</>
                        }
                      </p>

                      {/* Price list image */}
                      {model.priceListImage && (
                        <div className="priceListImageWrap">
                          <p className="priceListLabel">Original factory price list</p>
                          <img src={model.priceListImage} alt="Original Jensen C-V8 Mk III Price List" className="priceListImg" />
                        </div>
                      )}

                      {/* Standard colours note */}
                      {model.standardColours && (
                        <div className="standardColoursNote">
                          <p className="priceListLabel">Standard colours included in list price</p>
                          <p className="standardColoursList">{model.standardColours.join(' · ')}</p>
                          <p className="showroomPriceNote">Special exterior colours: +{model.specialColourSurcharge}. Special interior colours: +{model.specialTrimSurcharge}.</p>
                        </div>
                      )}
                      <button className="showroomCta" onClick={() => setShowroomSection('configure')}>
                        Configure your C-V8 →
                      </button>
                    </div>
                    <div className="showroomOverviewImages">
                      {model.overviewImages
                        ? model.overviewImages.map((img, i) => (
                            <img key={i} src={img.src} alt={img.alt} className="showroomOverviewImg" />
                          ))
                        : <>
                            <img src={model.frontImage || '/showroom/cv8-front.jpg'} alt={`${model.name} front`} className="showroomOverviewImg" />
                            <img src="/showroom/cv8-engine.jpg" alt="Chrysler 383 V8 engine" className="showroomOverviewImg" />
                          </>
                      }
                    </div>
                    {/* Original period advertisements */}
                    {model.adImages && model.adImages.length > 0 && (
                      <div className="showroomAdImages">
                        <p className="showroomAdLabel">Original factory advertisements</p>
                        <div className="showroomAdGrid">
                          {model.adImages.map((ad, i) => (
                            <div key={i} className="showroomAdWrap">
                              <img src={ad.src} alt={ad.caption} className="showroomAdImg" />
                              <p className="showroomAdCaption">{ad.caption}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ── Specifications ── */}
              {showroomSection === 'specs' && (
                <div className="showroomContent">
                  <h3 className="showroomSpecsTitle">Technical Specifications</h3>
                  <p className="showroomSpecsSub">Jensen C-V8 — all marks share the same Chrysler V8 powertrain. {model.differences}</p>
                  <div className="showroomSpecsGrid">
                    {Object.values(specifications).map(spec => (
                      <div key={spec.label} className="showroomSpec">
                        <span className="specLabel">{spec.label}</span>
                        <span className="specValue">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="showroomSpecsProduction">
                    <h4>Production Record — {model.name}</h4>
                    <div className="showroomProductionGrid">
                      <div><span>Years produced</span><strong>{model.years}</strong></div>
                      <div><span>Total built</span><strong>{model.produced}</strong></div>
                      <div><span>Of 500 total C-V8s</span><strong>{Math.round(model.produced/500*100)}%</strong></div>
                      <div><span>Original list price</span><strong>{formatPrice(model.originalPriceGBP)}</strong></div>
                    </div>
                  </div>
                </div>
              )}

              {/* ── Configurator ── */}
              {showroomSection === 'configure' && (
                <div className="showroomContent">
                  <div className="configuratorLayout">
                    {/* Left: Car preview */}
                    <div className="configuratorPreview">
                      <div className={`configuratorCarWrap${nightMode && configTab !== 'interior' ? ' nightModeWrap' : ''}`}>
                        <img
                          src={(() => {
                            if (configTab === 'interior') {
                              if (nightMode) {
                                return model.trimNightImages?.[configTrimColour.name]
                                  || model.defaultInteriorNightImage
                                  || model.defaultInteriorImage
                                  || model.heroImage;
                              }
                              return model.trimImages?.[configTrimColour.name]
                                || model.defaultInteriorImage
                                || model.heroImage;
                            }
                            return nightMode
                              ? (model.colourNightImages?.[configBodyColour.name] || model.heroNightImage || model.heroImage)
                              : (model.colourImages?.[configBodyColour.name] || model.heroImage);
                          })()}
                          alt={configTab === 'interior'
                            ? `${configTrimColour.name} Connolly Hide interior`
                            : `${model.name} in ${configBodyColour.name}`}
                          className="configuratorCarImg"
                          key={`${configTab}-${configBodyColour.name}-${configTrimColour.name}-${nightMode}`}
                        />
                      </div>
                      <div className="configuratorColourPreview">
                        <div className="colourPreviewBlock" style={{ background: configBodyColour.css }}>
                          <span className="colourPreviewLabel" style={{ color: ['#fafafa','#f5f2ec','#f0ebe0','#f0aab8','#c8b898','#d4c4b0','#d4ae7a','#b8b0a4'].includes(configBodyColour.css) ? '#333' : 'white' }}>
                            {configBodyColour.name}
                          </span>
                        </div>
                        <div className="trimPreviewBlock" style={{ background: configTrimColour.css }}>
                          <span className="trimPreviewLabel" style={{ color: ['#c8b898','#d4c4b0','#d4ae7a','#b8935a','#8a8a85','#8a9bb0'].includes(configTrimColour.css) ? '#333' : 'white' }}>
                            {configTrimColour.name} Connolly Hide
                          </span>
                        </div>
                      </div>
                      {/* Summary */}
                      {(() => {
                        const extSpecial = model.standardColours && !model.standardColours.includes(configBodyColour.name);
                        const trimSpecial = model.standardTrim && !model.standardTrim.includes(configTrimColour.name);
                        const extSurcharge = extSpecial ? (model.specialExteriorSurcharge?.todayGBP || 0) : 0;
                        const trimSurcharge = trimSpecial ? (model.specialInteriorSurcharge?.todayGBP || 0) : 0;
                        const totalToday = model.todayEquivalentGBP + extSurcharge + trimSurcharge;
                        return (
                      <div className="configuratorSummary">
                        <h4>Your Configuration</h4>
                        <div className="summaryRow"><span>Model</span><strong>{model.name}</strong></div>
                        <div className="summaryRow">
                          <span>Exterior</span>
                          <strong>{configBodyColour.name}{extSpecial ? <span className="surchargeTag"> + special</span> : ''}</strong>
                        </div>
                        <div className="summaryRow">
                          <span>Interior</span>
                          <strong>{configTrimColour.name} Connolly Hide{trimSpecial ? <span className="surchargeTag"> + special</span> : ''}</strong>
                        </div>
                        <div className="summaryRow"><span>Wheels</span><strong>{configWheels.name}</strong></div>
                        {(extSpecial || trimSpecial) && (
                          <div className="summaryRow surchargeRow">
                            <span>Surcharges</span>
                            <div className="surchargeList">
                              {extSpecial && <span>+{formatPrice(extSurcharge)} special exterior</span>}
                              {trimSpecial && <span>+{formatPrice(trimSurcharge)} special interior</span>}
                            </div>
                          </div>
                        )}
                        <div className="summaryRow price"><span>Total today</span><strong>{formatPrice(totalToday)}</strong></div>
                        <div className="configuratorActions">
                          <button className="configActionBtn primary" onClick={shareConfig}>Share configuration</button>
                          <button className="configActionBtn" onClick={() => window.print()}>Print summary</button>
                        </div>
                      </div>
                        );
                      })()}
                    </div>

                    {/* Right: Selectors */}
                    <div className="configuratorSelectors">
                      {/* Day / Night toggle */}
                      <div className="dayNightToggle">
                        <button
                          className={`dayNightBtn${!nightMode ? ' active' : ''}`}
                          onClick={() => setNightMode(false)}
                        >
                          ☀ Day
                        </button>
                        <button
                          className={`dayNightBtn${nightMode ? ' active' : ''}`}
                          onClick={() => setNightMode(true)}
                        >
                          ☾ Night
                        </button>
                      </div>
                      <div className="configTabs">
                        <button className={configTab === 'exterior' ? 'active' : ''} onClick={() => setConfigTab('exterior')}>Exterior</button>
                        <button className={configTab === 'interior' ? 'active' : ''} onClick={() => setConfigTab('interior')}>Interior</button>
                        <button className={configTab === 'wheels' ? 'active' : ''} onClick={() => setConfigTab('wheels')}>Wheels</button>
                      </div>

                      {configTab === 'exterior' && (() => {
                        const stdColours = model.standardColours
                          ? bodyColours.filter(c => model.standardColours.includes(c.name))
                          : bodyColours;
                        const splColours = model.standardColours
                          ? bodyColours.filter(c => !model.standardColours.includes(c.name))
                          : [];
                        const isSpecial = model.standardColours && !model.standardColours.includes(configBodyColour.name);
                        const renderSwatch = colour => (
                          <button
                            key={colour.name}
                            className={`colourSwatch${configBodyColour.name === colour.name ? ' selected' : ''}`}
                            style={{ background: colour.css }}
                            onClick={() => setConfigBodyColour(colour)}
                            title={`${colour.name} — ${colour.made} made`}
                          >
                            {['#fafafa','#f5f2ec','#f0ebe0'].includes(colour.css) ? <span className="swatchBorder" /> : null}
                          </button>
                        );
                        return (
                          <div className="configSection">
                            <p className="configSectionLabel">Standard body colours — included in list price</p>
                            <div className="colourGrid">{stdColours.map(renderSwatch)}</div>
                            {splColours.length > 0 && <>
                              <p className="configSectionLabel specialColourLabel">
                                Special exterior colours — +{formatPrice(model.specialExteriorSurcharge?.todayGBP)} today
                                <span className="originalPrice"> (original: {model.specialExteriorSurcharge?.label})</span>
                              </p>
                              <div className="colourGrid">{splColours.map(renderSwatch)}</div>
                            </>}
                            <div className="selectedColourInfo">
                              <strong>{configBodyColour.name}</strong>
                              <span>{configBodyColour.made} of 500 cars built in this colour ({Math.round(configBodyColour.made/500*100)}%)</span>
                              {configBodyColour.iciCode
                                ? <span className="colourIci">Paint code <code>{configBodyColour.iciCode}</code></span>
                                : <span className="colourIci colourIciUnknown">Paint code unknown</span>
                              }
                              {isSpecial
                                ? <span className="colourSpecial">Special order — +{formatPrice(model.specialExteriorSurcharge?.todayGBP)} · original {model.specialExteriorSurcharge?.label}</span>
                                : <span className="colourStandard">✓ Standard colour — included in list price</span>
                              }
                            </div>
                          </div>
                        );
                      })()}

                      {configTab === 'interior' && (() => {
                        const stdTrim = model.standardTrim
                          ? trimColours.filter(c => model.standardTrim.includes(c.name))
                          : trimColours;
                        const splTrim = model.standardTrim
                          ? trimColours.filter(c => !model.standardTrim.includes(c.name))
                          : [];
                        const isSpecial = model.standardTrim && !model.standardTrim.includes(configTrimColour.name);
                        const renderTrimSwatch = colour => (
                          <button
                            key={colour.name}
                            className={`colourSwatch${configTrimColour.name === colour.name ? ' selected' : ''}`}
                            style={{ background: colour.css }}
                            onClick={() => setConfigTrimColour(colour)}
                            title={`${colour.name} — ${colour.made} made`}
                          />
                        );
                        return (
                          <div className="configSection">
                            <p className="configSectionLabel">Standard interior trim — Connolly hide, included in list price</p>
                            <div className="colourGrid">{stdTrim.map(renderTrimSwatch)}</div>
                            {splTrim.length > 0 && <>
                              <p className="configSectionLabel specialColourLabel">
                                Special interior colours — +{formatPrice(model.specialInteriorSurcharge?.todayGBP)} today
                                <span className="originalPrice"> (original: {model.specialInteriorSurcharge?.label})</span>
                              </p>
                              <div className="colourGrid">{splTrim.map(renderTrimSwatch)}</div>
                            </>}
                            <div className="selectedColourInfo">
                              <strong>{configTrimColour.name}</strong>
                              <span>{configTrimColour.made} of 500 cars trimmed in this colour</span>
                              {isSpecial
                                ? <span className="colourSpecial">Special order — +{formatPrice(model.specialInteriorSurcharge?.todayGBP)} · original {model.specialInteriorSurcharge?.label}</span>
                                : <span className="colourStandard">✓ Standard trim — included in list price</span>
                              }
                            </div>
                          </div>
                        );
                      })()}

                      {configTab === 'wheels' && (
                        <div className="configSection">
                          <p className="configSectionLabel">Wheel specification</p>
                          <div className="wheelOptions">
                            {wheelOptions.map(w => (
                              <button
                                key={w.id}
                                className={`wheelOption${configWheels.id === w.id ? ' selected' : ''}`}
                                onClick={() => setConfigWheels(w)}
                              >
                                <div className="wheelOptionIcon">{w.id === 'wire' ? '◎' : '●'}</div>
                                <div>
                                  <strong>{w.name}</strong>
                                  <p>{w.description}</p>
                                  <span className="wheelPeriod">{w.period}</span>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Lifestyle / closing image */}
              <div className="showroomLifestyle">
                <img
                  src={model.lifestyleImage || '/showroom/cv8-lifestyle.jpg'}
                  alt={model.lifestyleCaption || 'Jensen C-V8 — Deep Carriage Green'}
                />
                <div className="showroomLifestyleCaption">
                  <p>{model.lifestyleCaption || 'Jensen C-V8 in Deep Carriage Green with Beige Connolly Hide interior.'}</p>
                  {!model.lifestyleCaption && <p>54 of the 500 cars built were finished in Deep Carriage Green.</p>}
                </div>
              </div>

              <footer className="showroomFooter">
                <img src="/jensen-badge.png" alt="Jensen" className="showroomFooterBadge" />
                <p>Jensen Motors Ltd · Kelvin Way, West Bromwich, England</p>
                <p className="showroomFooterNote">This virtual showroom is a community tribute. Pricing and specifications are approximate, based on period documentation and the Jensen C-V8 Registry.</p>
                <button className="showroomExitBtn" onClick={() => setAppMode('home')}>← Return to Workshop Companion</button>
              </footer>
            </main>
          );
        })()}

        {/* ── Manual Mode ───────────────────────────────── */}
        {appMode === 'manual' && pageList}

        {/* ── Manual Mode Content ──────────────────────────────── */}
        {appMode === 'manual' && <>

        {/* ── Selectaride View ──────────────────────────────────── */}
        {showSelectaride && (() => {
          const info  = getSelectarideForModel(selectedModel);
          const active = selectarideSection
            ? info.sections.find(s => s.id === selectarideSection)
            : null;

          return (
            <main className="wiringMain">
              <div className="wiringHeader">
                <div>
                  <button className="backBtn" onClick={() => setShowSelectaride(false)}>← Back to manual</button>
                  <h2>{info.title}</h2>
                  <p className="wiringSubtitle">{info.subtitle}</p>
                  <p className="wiringSubtitle" style={{ marginTop: 4 }}>
                    Documentation contributed by:{' '}
                    {info.contributors.map((c, i) => (
                      <span key={c.name}><strong>{c.name}</strong>{i < info.contributors.length - 1 ? ' & ' : ''}</span>
                    ))}
                  </p>
                </div>
                <div className="wiringHeaderActions">
                  <a href={info.pdf} download className="dlBtn"><Download size={15} /> Download PDF</a>
                  <a href={info.pdf} target="_blank" rel="noopener noreferrer" className="dlBtn"><ExternalLink size={15} /> Open full screen</a>
                </div>
              </div>

              {/* Overview */}
              <div className="card selectarideOverview">
                <h3 className="sectionTitle">What is the Selectaride?</h3>
                {info.overview.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Section navigator */}
              <div className="card">
                <h3 className="sectionTitle">Diagrams & documentation</h3>
                <p className="helperText">Select a section to view the diagram and technical notes.</p>

                <div className="selectarideSections">
                  {info.sections.map(s => (
                    <button
                      key={s.id}
                      className={`selectarideSection${selectarideSection === s.id ? ' active' : ''}`}
                      onClick={() => setSelectarideSection(selectarideSection === s.id ? null : s.id)}
                    >
                      <div className="selectarideSectionTop">
                        <strong>{s.title}</strong>
                        <span className="sectionCardPages">PDF p. {s.page}</span>
                      </div>
                      <p>{s.subtitle}</p>
                      <div className="sectionCardTags">
                        {s.tags.slice(0, 5).map(t => <span key={t} className="sectionCardTag">{t}</span>)}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Diagram viewer for selected section */}
                {active && (
                  <div className="selectarideViewer">
                    <div className="viewerTop">
                      <h3>{active.title}</h3>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <button onClick={() => setSelectarideZoom(z => Math.max(60, z - 20))}><ZoomOut size={16} /></button>
                        <button onClick={() => setSelectarideZoom(z => Math.min(200, z + 20))}><ZoomIn size={16} /></button>
                        <a href={`${info.pdf}#page=${active.page}`} target="_blank" rel="noopener noreferrer" className="iconBtn"><ExternalLink size={16} /></a>
                      </div>
                    </div>

                    {active.image ? (
                      <div className="selectarideImgWrap">
                        <img
                          src={active.image}
                          alt={active.title}
                          className="selectarideImg"
                          style={{ transform: `scale(${selectarideZoom / 100})`, transformOrigin: 'top left' }}
                        />
                      </div>
                    ) : (
                      <>
                        <div className="pdfPageHint">
                          <span>📄 PDF page <strong>{active.page}</strong></span>
                          <span className="pdfPageHintNote">If the wrong page shows, tap ↗ to open and navigate manually.</span>
                        </div>
                        <iframe
                          key={`selectaride-${info.pdf}-${active.id}`}
                          title={active.title}
                          src={`${info.pdf}#page=${active.page}&zoom=${selectarideZoom}`}
                          className="wiringIframe"
                        />
                      </>
                    )}

                    <div className="selectarideNotes">
                      <h4>Technical notes</h4>
                      <p>{active.notes}</p>
                    </div>
                  </div>
                )}
              </div>
            </main>
          );
        })()}

        {/* ── Wiring Diagram View ───────────────────────────────── */}
        {showWiring && (() => {
          const diagram = getDiagramForModel(selectedModel);
          const wq = wiringQuery.trim().toLowerCase();
          const filtered = diagram.components.filter(c => {
            const circuitMatch = wiringCircuit === 'all' || c.circuit === wiringCircuit;
            const textMatch = !wq ||
              c.name.toLowerCase().includes(wq) ||
              c.notes.toLowerCase().includes(wq) ||
              c.wires.some(w => w.toLowerCase().includes(wq)) ||
              c.circuit.toLowerCase().includes(wq);
            return circuitMatch && textMatch;
          });

          return (
            <main className="wiringMain">
              <div className="wiringHeader">
                <div>
                  <button className="backBtn" onClick={() => setShowWiring(false)}>
                    ← Back to manual
                  </button>
                  <h2>{diagram.title}</h2>
                  <p className="wiringSubtitle">{diagram.subtitle} · <em>{diagram.credit}</em></p>
                  {selectedModel === 'all' && (
                    <p className="wiringNote">
                      Showing Mk I &amp; II diagram. Select Mk III in the model selector for the Mk III diagram.
                    </p>
                  )}
                </div>
                <div className="wiringHeaderActions">
                  <a href={diagram.pdf} download className="dlBtn">
                    <Download size={15} /> Download PDF
                  </a>
                  <a href={diagram.pdf} target="_blank" rel="noopener noreferrer" className="dlBtn">
                    <ExternalLink size={15} /> Open full screen
                  </a>
                </div>
              </div>

              {/* PDF viewer */}
              <div className="card wiringViewer">
                <div className="viewerTop">
                  <h3>Wiring diagram — {diagram.title}</h3>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button onClick={() => setWiringZoom(z => Math.max(60, z - 20))}><ZoomOut size={16} /></button>
                    <button onClick={() => setWiringZoom(z => Math.min(200, z + 20))}><ZoomIn size={16} /></button>
                  </div>
                </div>
                <iframe
                  key={`wiring-${diagram.id}`}
                  title={diagram.title}
                  src={`${diagram.pdf}#zoom=${wiringZoom}`}
                  className="wiringIframe"
                />
              </div>

              {/* Component guide */}
              <div className="card">
                <h3 className="sectionTitle">Component & wire colour guide</h3>
                <p className="helperText">Search by component name, wire colour or circuit. Tap a row to see wiring details.</p>

                <div className="wiringSearch">
                  <Search size={16} />
                  <input
                    value={wiringQuery}
                    onChange={e => setWiringQuery(e.target.value)}
                    placeholder="Search: alternator, Blue/White, ignition, horn…"
                  />
                  {wiringQuery && <button onClick={() => setWiringQuery('')}>Clear</button>}
                </div>

                <div className="wiringCircuitFilters">
                  <button className={wiringCircuit === 'all' ? 'active' : ''} onClick={() => setWiringCircuit('all')}>All circuits</button>
                  {ALL_CIRCUITS.map(c => (
                    <button key={c} className={wiringCircuit === c ? 'active' : ''} onClick={() => setWiringCircuit(c)}>{c}</button>
                  ))}
                </div>

                {filtered.length === 0 ? (
                  <div className="emptyChecklist">
                    <Zap size={24} />
                    <p>No components match your search. Try a wire colour or circuit name.</p>
                  </div>
                ) : (
                  <div className="wiringComponents">
                    {filtered.map(c => (
                      <div key={c.name} className="wiringComponent">
                        <div className="wiringComponentTop">
                          <strong>{c.name}</strong>
                          <span className="wiringCircuitBadge">{c.circuit}</span>
                        </div>
                        <div className="wiringWires">
                          {c.wires.map(w => {
                            const colour = w.split('(')[0].trim().split('/')[0].trim().toLowerCase();
                            return (
                              <span key={w} className={`wirePill wire-${colour.replace(/\s/g,'-')}`}>{w}</span>
                            );
                          })}
                        </div>
                        <p className="wiringNotes">{c.notes}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </main>
          );
        })()}

        <main style={(showWiring || showSelectaride) ? { display: 'none' } : {}}>
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

            {/* Tag pills — non-mileage from section def, mileage extracted live from OCR */}
            {(() => {
              const tags = buildPageTags(page.page, selectedModel, currentText);
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

            {/* Manual page reference badge — no scan link here, button row has it */}
            <div className="manualRef">
              <BookOpen size={14} />
              <span>Manual p. {page.page}{getSectionInfo(page.page, selectedModel)?.isContinuation ? ` · Part of ${getSectionInfo(page.page, selectedModel).sectionTitle}` : ''}</span>
            </div>

            {/* Summary — real summary paragraph when available, bullets only as fallback */}
            {(() => {
              const hasRealSummary = page.summary && !page.summary.startsWith(GENERIC_SUMMARY);

              // Only show extracted bullets when there is NO real summary.
              // Also filter out fragments: a bullet must start with a capital letter
              // and be a proper complete sentence (no leading parentheses, numbers etc.)
              const FRAGMENT_RE = /^[a-z()\d.]/;
              const facts = hasRealSummary
                ? []
                : extractKeyFacts(currentText)
                    .filter(f => !FRAGMENT_RE.test(f))
                    .slice(0, 3);

              return (hasRealSummary || facts.length > 0) ? (
                <div className="summarySection">
                  {hasRealSummary && <p className="summaryLead">{page.summary}</p>}
                  {facts.length > 0 && (
                    <ul className="summaryBullets">
                      {facts.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  )}
                </div>
              ) : null;
            })()}

            {hasLocalEdit && (
              <div className="editedBadge"><Save size={12} /> OCR edited</div>
            )}

            {/* Lubrication diagram cross-reference — shown on Mk III maintenance pages */}
            {selectedModel === 'mk3' && referencesLubDiagram(currentText) && page.page !== 20 && (
              <div className="lubRefBanner">
                <span>📍 This page references lubrication point codes (A1, C2 etc.)</span>
                <button onClick={() => goPage(20)}>
                  View lubrication diagram — p. 20
                </button>
              </div>
            )}

            {/* On the diagram page itself, link forward to the schedule */}
            {selectedModel === 'mk3' && page.page === 20 && (
              <div className="lubRefBanner">
                <span>📋 The codes on this diagram are referenced in the maintenance schedule</span>
                <button onClick={() => goPage(21)}>
                  View maintenance schedule — p. 21
                </button>
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
              {selectedModel === 'mk3' && referencesLubDiagram(currentText) && page.page !== 20 && (
                <div className="lubRefBanner lubRefBannerCard">
                  <span>📍 References lubrication codes — see the diagram for locations</span>
                  <button onClick={() => goPage(20)}>View diagram p. 20</button>
                </div>
              )}

              <div className="repairCardTop">
                <div>
                  <p className="eyebrow">
                    {pageCategory === 'repair' && (() => {
                      const cat = getSectionInfo(page.page, selectedModel)?.category;
                      if (cat === 'specs') return 'Quick reference';
                      return 'Repair summary';
                    })()}
                    {pageCategory === 'reference' && 'Reference data'}
                    {pageCategory === 'informational' && 'Informational page'}
                    {pageCategory === 'diagram' && 'Diagram / image page'}
                  </p>
                  <h3>{getDisplayTitle(page.page, selectedModel, page.title)}</h3>
                </div>
                <button onClick={() => setMode('scan')}>View scan</button>
              </div>

              {pageCategory === 'repair' && (() => {
                const sectionCategory = getSectionInfo(page.page, selectedModel)?.category;
                const isSpecsPage = sectionCategory === 'specs';

                // Label set based on whether this is a specs/reference page or a true repair page
                const cardLabel = isSpecsPage ? 'Key specifications' : 'Repair steps for this page:';
                const emptyLabel = isSpecsPage
                  ? 'No specifications have been extracted for this page yet.'
                  : 'No repair checklist has been generated for this page yet.';

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
                          {qualityChecklist ? cardLabel : 'Key service facts extracted from this page:'}
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
                        <p>{emptyLabel} <button className="inlineLink" onClick={() => setMode('page')}>View the OCR text</button> for the full content.</p>
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
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <button onClick={() => setZoom(Math.max(60, zoom - 20))}><ZoomOut size={16} /></button>
                  <button onClick={() => setZoom(Math.min(180, zoom + 20))}><ZoomIn size={16} /></button>
                  <button onClick={() => openPdf(page.page)} title="Open in new tab">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>

              {/* iOS Safari ignores #page= in iframes — show a manual page hint */}
              <div className="pdfPageHint">
                <span>📄 PDF page <strong>{page.sourcePage || page.page}</strong></span>
                <span className="pdfPageHintNote">If the wrong page shows, tap the ↗ button to open in your browser and navigate manually.</span>
              </div>

              {/* key forces a full iframe remount on every page change so #page= takes effect */}
              <iframe
                key={`scan-${page.sourcePdf}-${page.sourcePage || page.page}`}
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

        </> /* end appMode === 'manual' */}

      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
