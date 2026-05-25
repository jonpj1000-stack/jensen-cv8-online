import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Search, Menu, X, ExternalLink, Wrench, Zap, Gauge, Battery, Disc3, Car, Settings, Fan, BookOpen, Image as ImageIcon, FileText, ChevronRight, Moon, Sun } from 'lucide-react';
import './style.css';

const manualPath = '/manuals/jensen_cv8_owners_manual.pdf';

const sections = [
  {
    id: 'dashboard', title: 'Dashboard & Controls', icon: Gauge, pages: [4],
    tags: ['dashboard','instruments','controls','switches','gauges','warning lights','fascia'],
    plain: 'The C-V8 dashboard groups the instruments, warning lights, heater controls, lighting switches, ignition, gear selector and auxiliary controls around the driver. Use the factory diagram first so you identify the correct component before removing trim or disturbing original wiring.',
    refs: 'Instruction Book page 4, Fig. 1: Instruments and Controls, items 1–29.',
    checklist: ['Identify the item by number on the dashboard diagram.', 'Check bulb/holder first for warning light faults.', 'Confirm whether the fault is switch, wiring, sender or gauge.', 'Preserve the factory layout for originality.']
  },
  {
    id: 'specs', title: 'Specifications & Capacities', icon: Settings, pages: [5,6],
    tags: ['specifications','capacity','timing','plug gap','compression','weight','dimensions','oil','firing order'],
    plain: 'The quick-reference pages contain the core service data: engine data, firing order, capacities, tyre size and pressure, alignment figures, ignition timing, plug gap and sump capacity notes.',
    refs: 'Instruction Book pages 5–6: General Dimensions and Data for Quick Reference.',
    facts: ['Firing order: 1-8-4-3-6-5-7-2.', 'Sparking plug point gap: .035 in.', 'Ignition timing: 10° before T.D.C. at 500 r.p.m.', 'Tyres: Dunlop 670 x 15 Road Speed.', 'Tyre pressure: 24 p.s.i. all round.', 'Sump capacity: 7 pints Imperial / 8 pints U.S. / 3.6 litres.']
  },
  {
    id: 'motor', title: 'Motor, Starting & Running', icon: Car, pages: [6,7,8,9],
    tags: ['engine','motor','starting','running in','gearbox','transmission','overdrive','towing','push starting'],
    plain: 'The running-in guidance is conservative and period-correct: avoid prolonged high speed, avoid harsh acceleration and watch oil pressure and temperature. The starting instructions cover automatic transmission starting sequence, accelerator position and clearing excess fuel.',
    refs: 'Instruction Book pages 6–9: Starting Up and General Running Hints, Starting Car Engine, Gearbox Operation, Towing, Push Starting, Optional Manual Transmission and Overdrive.',
    checklist: ['Put the automatic selector in Neutral before starting.', 'Apply the handbrake; the automatic carburetter control can cause fast idle when cold.', 'Depress the accelerator slowly to one-third travel before starting.', 'Release the key immediately once the engine fires.', 'If it will not start, press the accelerator fully to clear excess fuel, then crank briefly.']
  },
  {
    id: 'maintenance', title: 'Lubrication & Maintenance', icon: Wrench, pages: [10,11],
    tags: ['lubrication','maintenance','service','grease','oil','miles','schedule'],
    plain: 'The manual gives a mileage-based service plan: first 1,000-mile service, then recurring 1,000, 2,000, 4,000 and 8,000 mile checks. The chart identifies grease nipples and service points.',
    refs: 'Instruction Book pages 10–11: Lubrication and Maintenance schedule and Fig. 3 lubrication chart.',
    checklist: ['First 1,000 miles: drain/refill axle and check controls, fluids, belt, electrics, tyres, lights and brakes.', 'Every 1,000 miles: grease king pins, propeller shaft, steering idler and listed points.', 'Every 2,000 miles: check brake fluid level.', 'Every 4,000 miles: grease steering rack and check steering damper, transmission and rear axle oil.', 'Every 8,000 miles: service air cleaner, distributor points, plugs and crankcase ventilation items.']
  },
  {
    id: 'electrical', title: 'Electrical Equipment', icon: Zap, pages: [12,13],
    tags: ['electrical','Lucas','Autolite','lamps','headlamps','wiper','screenwiper','washer','map light','gear quadrant'],
    plain: 'Most equipment is Lucas, while the ignition, charging and starter systems are Autolite. The section covers bulbs, battery, fuses, lamps, wipers, screen washer, map light and gear quadrant light.',
    refs: 'Instruction Book pages 12–13: Electrical Equipment.',
    facts: ['Headlamp flasher is operated by pulling the trafficator control lever backwards.', 'The screenwiper is a two-speed heavy-duty type.', 'Map light bulb access is by removing the central instrument panel.', 'Gear quadrant light access is from the left-hand side of the panel.']
  },
  {
    id: 'battery', title: 'Battery & Charging', icon: Battery, pages: [12],
    tags: ['battery','charging','earth','Autolite','Lucas','positive earth','terminals'],
    plain: 'The manual specifies a 12-volt Lucas battery and states the vehicle is positive earth. Secure mounting, clean terminals and correct electrolyte level are stressed.',
    refs: 'Instruction Book page 12: Battery, Positive Earth.',
    checklist: ['Confirm polarity before connecting accessories: the manual states positive earth.', 'Keep the battery firmly secured.', 'Check electrolyte level about every four weeks.', 'Top up with distilled water where applicable.', 'Keep terminals clean and tight.']
  },
  {
    id: 'fuses', title: 'Fuses', icon: Fan, pages: [12],
    tags: ['fuse','fuses','fuse box','35 amp','electrical fault'],
    plain: 'The fuse section is brief but important. Both main and auxiliary fuses are 35 amp. The fuse box is forward and below the right-hand side of the fascia panel.',
    refs: 'Instruction Book page 12: Fuses.',
    checklist: ['Locate the fuse box forward and below the right-hand side of the fascia.', 'Inspect the 35 amp main and auxiliary fuses.', 'Do not fit a higher-rated fuse to mask a fault.', 'If a fuse repeatedly blows, find the short or overloaded circuit.']
  },
  {
    id: 'brakes', title: 'Brakes & Brake Servo', icon: Disc3, pages: [13],
    tags: ['brakes','servo','Dunlop','brake fluid','handbrake','vacuum','frame tubes'],
    plain: 'The C-V8 uses Dunlop hydraulic disc brakes on all wheels with vacuum servo assistance. The handbrake is separate from the hydraulic system. The manual warns not to drill the main frame tubes because they act as vacuum reservoirs.',
    refs: 'Instruction Book page 13: Brakes and Brake Servo.',
    checklist: ['Check brake fluid level about every 2,000 miles.', 'Use Dunlop Disc Brake Fluid or compatible specialist-recommended equivalent.', 'Lubricate the brake servo every 12,000 miles as instructed.', 'Do not drill the main frame tubes.', 'Poor servo operation may require specialist servo overhaul.']
  },
  {
    id: 'fuel', title: 'Fuel System & Carburetter', icon: Gauge, pages: [14,15,16],
    tags: ['fuel','carburetter','carburetor','Carter','idle','fast idle','choke','fuel tank','filters','throttle'],
    plain: 'The fuel section covers the tank, lines, filters, mechanical pump and Carter carburetter. It gives procedures for idle speed and fast idle adjustment with diagrams for screws, choke valve and throttle linkage.',
    refs: 'Instruction Book pages 14–16, Figs. 4–7: Fuel System, Idle Speed Adjustment, Fast Idle Speed Adjustment and Throttle Linkage.',
    checklist: ['Warm the engine thoroughly before idle adjustment.', 'Ensure choke valve is fully open and fast-idle screw is clear of the cam for normal idle.', 'Set idle speed screw to approximately 500 r.p.m. as described.', 'Adjust mixture screws carefully for highest r.p.m., then re-check idle.', 'Use Fig. 6 for fast-idle screw and cam/index relationship.']
  },
  {
    id: 'tyres', title: 'Tyres, Wheels & Alignment', icon: Disc3, pages: [17,18,19],
    tags: ['tyres','tires','wheels','alignment','bearings','front suspension','castor','camber','toe-in','spare wheel'],
    plain: 'The manual specifies Dunlop 670 x 15 RS tyres at 24 psi all round, checked cold. It also explains tyre wear, balancing, spare wheel removal, independent front suspension, wheel alignment and front wheel bearing adjustment.',
    refs: 'Instruction Book pages 17–19: Care of Tyres, Tyre and Wheel Balance, Factors Affecting Tyre Life, Spare Wheel, Front Suspension, Alignment of Front Wheels and Adjusting Front Wheel Bearings.',
    facts: ['Standard tyre: Dunlop 670 x 15 RS.', 'Correct pressure: 24 p.s.i. all round.', 'Town use only: rear pressures may be dropped to 22 p.s.i.', 'Sustained speeds above 90 m.p.h.: increase pressure to 30 p.s.i.', 'Toe-in: 1/8 inch measured at wheel height.']
  },
  {
    id: 'cooling', title: 'Cooling, Electric Fans & Heater', icon: Fan, pages: [20],
    tags: ['cooling','fan','radiator','heater','anti-freeze','topping up','temperature','pressure cap'],
    plain: 'The cooling section covers automatic electric radiator fans, heater and ventilation controls, coolant circulation and topping up. The manual warns not to remove the header tank cap when the engine is hot.',
    refs: 'Instruction Book page 20: Electric Cooling Fans, Heating and Ventilation, Cooling System, Topping Up.',
    checklist: ['Do not remove the header tank filler cap when hot.', 'Check coolant level weekly when cold.', 'Top up to about 1 inch below the top of the header tank.', 'Confirm electric fans operate automatically when temperature rises above normal.', 'Use the marked heater and fascia air intake controls for airflow.']
  },
  {
    id: 'rearaxle', title: 'Rear Axle & Drive Belt', icon: Settings, pages: [20],
    tags: ['rear axle','Power-Lok','limited slip','drive belt','alternator','water pump'],
    plain: 'The rear axle uses a Power-Lok limited-slip differential. The manual advises against dismantling without the correct Churchill tool. It also gives basic alternator/water pump belt tension guidance.',
    refs: 'Instruction Book page 20: Rear Axle and Drive Belt Adjustment.',
    checklist: ['Do not dismantle the rear axle without the correct Churchill tool.', 'Refer specialist axle work to a workshop familiar with Power-Lok units.', 'Check alternator/water pump belt tightness to prevent slip.', 'Adjust by slackening the bolts and moving the alternator in the guide slot.']
  }
];

const diagrams = [
  { title: 'Instruments and Controls', page: 4, text: 'Dashboard layout and numbered controls.' },
  { title: 'Lubrication Chart', page: 11, text: 'Underside service and grease points.' },
  { title: 'Carter Carburetter Views', page: 14, text: 'Carburetter component identification.' },
  { title: 'Fast Idle Adjustment', page: 16, text: 'Fast idle screw, cam and choke relationship.' },
  { title: 'Throttle Linkage', page: 16, text: 'Factory throttle linkage diagram.' },
  { title: 'Accelerator Pedal Adjustment', page: 17, text: 'Pedal rod length adjustment.' },
  { title: 'Front Wheel Bearing Section', page: 19, text: 'Front hub and bearing cross-section.' }
];

function pageUrl(page) { return `${manualPath}#page=${page}`; }
function joinClass(...names) { return names.filter(Boolean).join(' '); }

function App() {
  const [query, setQuery] = useState('');
  const [activeId, setActiveId] = useState('dashboard');
  const [drawer, setDrawer] = useState(false);
  const [viewerPage, setViewerPage] = useState(4);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sections;
    return sections.filter(s => [s.title, s.plain, s.refs, ...(s.tags||[]), ...(s.facts||[]), ...(s.checklist||[])].join(' ').toLowerCase().includes(q));
  }, [query]);

  const active = sections.find(s => s.id === activeId) || results[0] || sections[0];
  const Icon = active.icon;

  function openViewer(page) {
    setViewerPage(page);
    setViewerOpen(true);
  }

  return (
    <div className={joinClass('app', dark && 'dark')}> 
      <header className="topbar">
        <button className="iconButton mobileOnly" onClick={() => setDrawer(true)} aria-label="Open contents"><Menu size={22}/></button>
        <div className="badge">J</div>
        <div className="titleBlock">
          <div className="eyebrow">Jensen Model C-V8</div>
          <h1>Online Manual</h1>
        </div>
        <button className="modeButton" onClick={() => setDark(!dark)}>{dark ? <Sun size={18}/> : <Moon size={18}/>} Workshop mode</button>
      </header>

      <div className="layout">
        <aside className={joinClass('sidebar', drawer && 'open')}> 
          <div className="drawerHead mobileOnly"><strong>Contents</strong><button className="iconButton" onClick={() => setDrawer(false)}><X size={20}/></button></div>
          <div className="searchBox"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search: brakes, fuses, idle…"/></div>
          <div className="toc">
            {results.map(s => {
              const SIcon = s.icon;
              return <button key={s.id} className={joinClass('tocItem', active.id===s.id && 'active')} onClick={()=>{setActiveId(s.id); setDrawer(false);}}><SIcon size={18}/><span>{s.title}</span><small>p{s.pages.join(',')}</small></button>
            })}
          </div>
        </aside>

        <main>
          <section className="heroCard">
            <div className="sectionLabel"><Icon size={17}/> Pages {active.pages.join(', ')}</div>
            <div className="heroGrid">
              <div>
                <h2>{active.title}</h2>
                <p>{active.plain}</p>
              </div>
              <div className="buttonStack">
                {active.pages.map(p => <button key={p} className="primaryButton" onClick={()=>openViewer(p)}>View scanned page {p}<ExternalLink size={16}/></button>)}
                <a className="secondaryButton" href={manualPath} target="_blank" rel="noreferrer"><FileText size={16}/> Open full PDF</a>
              </div>
            </div>
            <div className="sourceBox"><strong>Source reference</strong><span>{active.refs}</span></div>
            {active.facts && <div className="factGrid">{active.facts.map(f=><div className="fact" key={f}>{f}</div>)}</div>}
            {active.checklist && <div className="checklist"><h3>Repair / diagnostic checklist</h3>{active.checklist.map((c,i)=><div className="step" key={c}><b>{i+1}</b><span>{c}</span></div>)}</div>}
          </section>

          <section className="galleryCard">
            <div className="galleryTitle"><ImageIcon/><div><h2>Diagrams & Schematics Gallery</h2><p>Quick access to the original scanned diagrams before work begins.</p></div></div>
            <div className="diagramGrid">
              {diagrams.map(d => <button key={d.title+d.page} className="diagram" onClick={()=>openViewer(d.page)}><div className="diagramIcon"><ImageIcon/></div><h3>{d.title}</h3><p>{d.text}</p><span>Open page {d.page}<ChevronRight size={15}/></span></button>)}
            </div>
          </section>

          <section className="noteCard"><h2>Period-correct restoration note</h2><p>This app keeps the owner manual values visible and traceable. For originality, preserve the factory dashboard layout, positive-earth assumptions, original fuse ratings, Lucas/Autolite architecture and factory service practices unless later Jensen documentation proves otherwise.</p></section>
        </main>
      </div>

      {viewerOpen && <div className="viewerOverlay" role="dialog" aria-modal="true">
        <div className="viewerHeader"><strong>Original scanned manual — page {viewerPage}</strong><div><a href={pageUrl(viewerPage)} target="_blank" rel="noreferrer" className="tinyButton">Open in new tab</a><button className="tinyButton" onClick={()=>setViewerOpen(false)}>Close</button></div></div>
        <iframe title={`Manual page ${viewerPage}`} src={pageUrl(viewerPage)} />
      </div>}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
