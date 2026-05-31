// Wiring diagram resources for each Jensen C-V8 mark.
// The 'components' array drives the in-app component search guide.

export const wiringDiagrams = [
  {
    id:        'mk1-mk2',
    title:     'Mk I & Mk II Wiring Diagram',
    subtitle:  'Colourised — original Lucas wiring colours',
    models:    ['all', 'mk1', 'mk2'],
    pdf:       '/manuals/jensen-cv8-mk1-mk2-wiring-diagram.pdf',
    credit:    'Colourised by Jensen C-V8 community',
    components: [
      // ── Charging & Starting ───────────────────────────────────
      { name: 'Battery',           wires: ['Brown (main feed)'],          circuit: 'Charging',  notes: 'Located in boot. Brown cable to main fusebox and starter solenoid.' },
      { name: 'Alternator',        wires: ['Brown', 'Yellow/Brown'],       circuit: 'Charging',  notes: 'Lucas 11AC. Brown output to battery via ammeter.' },
      { name: 'Starter Motor',     wires: ['Brown (heavy)'],              circuit: 'Starting',  notes: 'Solenoid operated. White/Red from ignition switch to solenoid.' },
      { name: 'Starter Solenoid',  wires: ['Brown', 'White/Red'],         circuit: 'Starting',  notes: 'White/Red from ignition switch; Brown heavy cable to starter.' },
      // ── Ignition ─────────────────────────────────────────────
      { name: 'Ignition Switch',   wires: ['White', 'White/Red', 'Brown'], circuit: 'Ignition', notes: 'Position I: White circuit live. Position II: White/Red to starter.' },
      { name: 'Coil',              wires: ['White', 'White/Black'],        circuit: 'Ignition', notes: 'CB terminal: White/Black to distributor. SW terminal: White from ignition.' },
      { name: 'Distributor',       wires: ['White/Black'],                 circuit: 'Ignition', notes: 'Points fed from coil CB terminal via White/Black.' },
      { name: 'Ballast Resistor',  wires: ['White', 'White/Black'],        circuit: 'Ignition', notes: 'In series with coil primary. Bypassed during cranking by White/Red.' },
      // ── Lighting ─────────────────────────────────────────────
      { name: 'Headlamps',         wires: ['Blue/White (main)', 'Blue/Red (dip)'], circuit: 'Lighting', notes: 'Dip: Blue/Red. Main: Blue/White. Flash: Purple/White from stalk.' },
      { name: 'Sidelights (front)',wires: ['Green/Red'],                   circuit: 'Lighting', notes: 'Green/Red from lighting switch via fusebox.' },
      { name: 'Tail/Brake Lights', wires: ['Green/Red', 'Green/Purple'],   circuit: 'Lighting', notes: 'Tail: Green/Red. Stop: Green/Purple from brake switch.' },
      { name: 'Number Plate Light',wires: ['Green/Red'],                   circuit: 'Lighting', notes: 'Green/Red in parallel with tail lights.' },
      { name: 'Interior Light',    wires: ['Purple/White'],                circuit: 'Lighting', notes: 'Purple/White: door-switch feed. Always live via purple.' },
      // ── Instruments ──────────────────────────────────────────
      { name: 'Ammeter',           wires: ['Brown'],                       circuit: 'Instruments', notes: 'In series with main Brown feed between alternator and battery.' },
      { name: 'Oil Pressure Gauge',wires: ['Green/White'],                 circuit: 'Instruments', notes: 'Green/White to sender on engine block. Ignition controlled.' },
      { name: 'Water Temp Gauge',  wires: ['Green/Blue'],                  circuit: 'Instruments', notes: 'Green/Blue to sender on thermostat housing.' },
      { name: 'Fuel Gauge',        wires: ['Green/Yellow'],                circuit: 'Instruments', notes: 'Green/Yellow to tank sender unit.' },
      { name: 'Speedometer',       wires: ['Green/White'],                 circuit: 'Instruments', notes: 'Illumination: Green. Warning lights fed from instrument circuit.' },
      // ── Indicators & Horn ────────────────────────────────────
      { name: 'Flasher Unit',      wires: ['Green', 'Light Green'],        circuit: 'Indicators', notes: 'Lucas FL5. Green feed in, Light Green output to indicator lamps.' },
      { name: 'Front Indicators',  wires: ['Light Green', 'Light Green/Brown'], circuit: 'Indicators', notes: 'LH: Light Green. RH: Light Green/Brown.' },
      { name: 'Rear Indicators',   wires: ['Light Green', 'Light Green/Brown'], circuit: 'Indicators', notes: 'LH: Light Green. RH: Light Green/Brown.' },
      { name: 'Horn',              wires: ['Purple', 'Yellow/Black'],       circuit: 'Horn',       notes: 'Horns: Yellow/Black from horn push. Always live Purple supply.' },
      // ── Accessories ──────────────────────────────────────────
      { name: 'Heater Motor',      wires: ['Blue', 'Blue/White'],          circuit: 'Accessories', notes: 'Two speed via resistor. Blue/White: fast. Blue: slow via resistor.' },
      { name: 'Wiper Motor',       wires: ['Green/Yellow', 'Green/Brown'], circuit: 'Accessories', notes: 'Green/Yellow: low speed. Self-park circuit via Green/Brown.' },
      { name: 'Washer Motor',      wires: ['Green'],                       circuit: 'Accessories', notes: 'Green feed from fused accessory circuit via washer switch.' },
      { name: 'Overdrive',         wires: ['White/Purple', 'Brown/Yellow'],circuit: 'Accessories', notes: 'Gearbox inhibit switch and solenoid. White/Purple from switch.' },
      { name: 'Fuse Box',          wires: ['Brown', 'Green', 'Blue', 'Purple'], circuit: 'Distribution', notes: '4-way Lucas fusebox. Brown in; Green, Blue, Purple feeds out.' },
    ]
  },
  {
    id:        'mk3',
    title:     'Mk III Wiring Diagram',
    subtitle:  'Colourised — original Lucas wiring colours',
    models:    ['mk3'],
    pdf:       '/manuals/jensen-cv8-mk3-wiring-diagram.pdf',
    credit:    'Colourised by Jensen C-V8 community',
    components: [
      // ── Charging & Starting ───────────────────────────────────
      { name: 'Battery',           wires: ['Brown (main feed)'],          circuit: 'Charging',  notes: 'Located in boot. Brown to main fusebox and starter solenoid.' },
      { name: 'Alternator',        wires: ['Brown', 'Yellow/Brown'],       circuit: 'Charging',  notes: 'Lucas 11AC/15ACR. Brown output to battery via ammeter.' },
      { name: 'Starter Motor',     wires: ['Brown (heavy)'],              circuit: 'Starting',  notes: 'Solenoid operated. White/Red from ignition switch.' },
      // ── Ignition ─────────────────────────────────────────────
      { name: 'Ignition Switch',   wires: ['White', 'White/Red', 'Brown'], circuit: 'Ignition', notes: 'Combined ignition/starter switch. Key-operated.' },
      { name: 'Coil',              wires: ['White', 'White/Black'],        circuit: 'Ignition', notes: 'CB terminal to distributor via White/Black.' },
      { name: 'Ballast Resistor',  wires: ['White', 'White/Black'],        circuit: 'Ignition', notes: 'Bypassed by White/Red during cranking for full voltage.' },
      // ── Lighting ─────────────────────────────────────────────
      { name: 'Headlamps',         wires: ['Blue/White (main)', 'Blue/Red (dip)'], circuit: 'Lighting', notes: 'Same Lucas colour convention as Mk I/II.' },
      { name: 'Sidelights (front)',wires: ['Green/Red'],                   circuit: 'Lighting', notes: 'Green/Red from lighting switch.' },
      { name: 'Tail/Brake Lights', wires: ['Green/Red', 'Green/Purple'],   circuit: 'Lighting', notes: 'Tail: Green/Red. Brake: Green/Purple.' },
      { name: 'Reversing Light',   wires: ['Green/White'],                 circuit: 'Lighting', notes: 'Mk III addition. Green/White via gearbox reverse switch.' },
      { name: 'Interior Light',    wires: ['Purple/White'],                circuit: 'Lighting', notes: 'Door-switch controlled. Always-live Purple supply.' },
      // ── Instruments ──────────────────────────────────────────
      { name: 'Ammeter',           wires: ['Brown'],                       circuit: 'Instruments', notes: 'In series on main Brown feed.' },
      { name: 'Oil Pressure Gauge',wires: ['Green/White'],                 circuit: 'Instruments', notes: 'Green/White to sender on engine.' },
      { name: 'Water Temp Gauge',  wires: ['Green/Blue'],                  circuit: 'Instruments', notes: 'Green/Blue to thermostat housing sender.' },
      { name: 'Fuel Gauge',        wires: ['Green/Yellow'],                circuit: 'Instruments', notes: 'Green/Yellow to tank sender.' },
      { name: 'Low Fuel Warning',  wires: ['Green/Yellow'],                circuit: 'Instruments', notes: 'Mk III addition. Triggered by tank sender at low level.' },
      { name: 'Rev Counter',       wires: ['White', 'Green'],              circuit: 'Instruments', notes: 'Mk III electronic rev counter. White ignition feed, Green illumination.' },
      // ── Indicators ───────────────────────────────────────────
      { name: 'Flasher Unit',      wires: ['Green', 'Light Green'],        circuit: 'Indicators', notes: 'Lucas FL5.' },
      { name: 'Indicators',        wires: ['Light Green', 'Light Green/Brown'], circuit: 'Indicators', notes: 'Same colour coding as Mk I/II.' },
      { name: 'Hazard Warning',    wires: ['Purple', 'Light Green'],       circuit: 'Indicators', notes: 'Mk III addition. Purple always-live feed to separate flasher unit.' },
      // ── Accessories ──────────────────────────────────────────
      { name: 'Selectaride',       wires: ['Purple', 'Brown/Yellow'],      circuit: 'Accessories', notes: 'Mk III Selectaride damper switch on transmission tunnel.' },
      { name: 'Heater Motor',      wires: ['Blue', 'Blue/White'],          circuit: 'Accessories', notes: 'Two-speed heater fan.' },
      { name: 'Wiper Motor',       wires: ['Green/Yellow', 'Green/Brown'], circuit: 'Accessories', notes: 'Self-parking. Green/Yellow: run. Green/Brown: park circuit.' },
      { name: 'Re-fuel Switch',    wires: ['Purple', 'Brown/Yellow'],      circuit: 'Accessories', notes: 'Mk III solenoid-released fuel filler flap.' },
      { name: 'Overdrive',         wires: ['White/Purple', 'Brown/Yellow'],circuit: 'Accessories', notes: 'Gearbox inhibit switch and overdrive solenoid.' },
      { name: 'Fuse Box',          wires: ['Brown', 'Green', 'Blue', 'Purple'], circuit: 'Distribution', notes: 'Lucas fusebox. Brown in; colour-coded feeds out.' },
    ]
  }
];

export function getDiagramForModel(model) {
  if (model === 'mk3') {
    return wiringDiagrams.find(d => d.id === 'mk3');
  }
  // all / mk1 / mk2 → shared Mk I & II diagram
  return wiringDiagrams.find(d => d.id === 'mk1-mk2');
}

export const ALL_CIRCUITS = [
  'Charging', 'Starting', 'Ignition', 'Lighting',
  'Instruments', 'Indicators', 'Horn', 'Accessories', 'Distribution'
];
