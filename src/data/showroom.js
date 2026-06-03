/**
 * Jensen C-V8 Virtual Showroom Data
 *
 * Body colour and trim data sourced from the Jensen C-V8 Registry —
 * representing all 500 cars built between 1962 and 1966.
 *
 * Pricing: original figures are approximate, based on period sources.
 * Today's equivalent uses Bank of England CPI inflation data (×22 from 1963 baseline).
 */

// ── Models ───────────────────────────────────────────────────────────────────

export const showroomModels = [
  {
    id: 'mk1',
    name: 'Jensen C-V8 Mk I',
    tagline: 'The exciting new Grand Touring saloon.',
    years: '1962 – 1963',
    produced: 70,
    originalPriceGBP: 2780,
    originalPriceNote: 'approx. 1962 list price',
    todayEquivalentGBP: 61000,
    heroImage: '/showroom/cv8-mk1-hero.jpg',
    description: 'Designed in the Jensen tradition of safety with speed. The C-V8 combines a modified Chrysler V8 engine — giving over 140 mph — with a super-streamlined resin bonded fibrous glass body, Dunlop self-adjusting disc brakes on all four wheels, and a de luxe interior that seats four adults in comfort. First shown at the International Motor Show, Earls Court, October 1962. Just 70 were built.',
    highlights: [
      'Over 140 mph — modified Chrysler V8',
      '0 to 100 mph and back to a stop in under 24 seconds',
      'Dunlop self-adjusting disc brakes — all four wheels',
      'Super-streamlined resin bonded fibrous glass body',
      'De luxe interior — seats 4 adults in comfort',
      '19 cu ft luggage accommodation',
    ],
    differences: 'Distinguished by chrome headlamp bezels and early interior trim details. The rarest of the three marks — one of just 70 ever built.',
    adImages: [
      { src: '/showroom/mk1-ad-charles-follett.jpg',  caption: '"See the Exciting Jensen C-V8" — Charles Follett Ltd, Berkeley Street London W1, The Motor, October 1962' },
      { src: '/showroom/mk1-ad-announcing.jpg',       caption: '"Announcing the New Jensen C-V.8" — International Motor Show, Earls Court, October 17th 1962' },
      { src: '/showroom/mk1-ad-dunlop.jpg',           caption: '"Dunlop Road Speed Tyres & Disc Brakes — chosen for these two celebrities" — The Motor, October 1962' },
      { src: '/showroom/mk1-ad-snappon-ep.jpg',       caption: 'Supplier advertisements — Snappon door seals and EP rack & pinion steering, The Motor, October 1962' },
    ],
  },
  {
    id: 'mk2',
    name: 'Jensen C-V8 Mk II',
    tagline: 'The definitive GT.',
    years: '1963 – 1965',
    produced: 216,
    originalPriceGBP: 2895,
    originalPriceNote: 'approx. 1963 list price',
    todayEquivalentGBP: 64000,
    heroImage: '/showroom/cv8-mk2-hero.jpg',
    description: 'The Mk II refined and consolidated the C-V8 formula, bringing improved interior appointments and detail changes that would define the car\'s character. With 216 built, the Mk II represents the heart of C-V8 production — and the version most closely associated with the car\'s golden era.',
    highlights: [
      'Refined interior and improved detail finish',
      'Full Connolly hide upholstery throughout',
      'TorqueFlite automatic or 4-speed manual gearbox',
      '216 produced — the most common of the three marks',
    ],
    differences: 'Updated headlamp treatment and revised interior compared to the Mk I. The most frequently seen mark in the community.',
  },
  {
    id: 'mk3',
    name: 'Jensen C-V8 Mk III',
    tagline: 'The pinnacle of the line.',
    years: '1965 – 1966',
    produced: 214,
    originalPriceGBP: 3679,
    originalPriceManualGBP: 3779,
    originalPriceNote: 'total on-the-road price inc. Purchase Tax · automatic transmission',
    originalPriceSource: 'Jensen Motors Ltd official price list KS/BP/665/10M/I',
    todayEquivalentGBP: 81000,
    todayEquivalentManualGBP: 83000,
    priceListImage: '/showroom/mk3-price-list.jpg',
    heroImage: '/showroom/cv8-mk3-hero.jpg',
    heroNightImage: '/showroom/cv8-mk3-hero.jpg',   // default night fallback (same until a dedicated night hero is added)
    colourImages: {
      'Botticelli Blue': '/showroom/cv8-mk3-botticelli-blue-day.jpg',
      'Princess Grey':   '/showroom/cv8-mk3-princess-grey-day.jpg',
      'Regal Red':       '/showroom/cv8-mk3-regal-red-day.jpg',
      'Indigo Blue':     '/showroom/cv8-mk3-indigo-blue-day.jpg',
    },
    colourNightImages: {
      'Botticelli Blue': '/showroom/cv8-mk3-botticelli-blue-night.jpg',
      'Princess Grey':   '/showroom/cv8-mk3-princess-grey-night.jpg',
      'Regal Red':       '/showroom/cv8-mk3-regal-red-night.jpg',
    },
    defaultInteriorImage: '/showroom/interior-bright-red.jpg',
    defaultInteriorNightImage: '/showroom/interior-bright-red-night.jpg',
    trimImages: {
      'Blue-Grey': '/showroom/interior-blue-grey.jpg',
      'Bright Red': '/showroom/interior-bright-red.jpg',
    },
    trimNightImages: {
      'Blue-Grey': '/showroom/interior-blue-grey-night.jpg',
      'Bright Red': '/showroom/interior-bright-red-night.jpg',
    },
    frontImage: '/showroom/cv8-mk3-front.jpg',
    standardColours: ['Black','Indigo Blue','Princess Grey','Regal Red','Oyster Grey','Deep Carriage Green','Californian Sage','Peony','Botticelli Blue'],
    standardTrim: ['Beige','Bright Red','Blue-Grey','Dark Red','Light Mushroom','Grey','Green','Black'],
    // Surcharges from official price list KS/BP/665/10M/I
    // Special exterior: £15.0.0 + £3.2.6 p.t. = £18.125 in 1965 → approx. £399 today (×22 CPI)
    // Special interior: £30.0.0 + £6.5.0 p.t. = £36.25 in 1965 → approx. £798 today (×22 CPI)
    specialExteriorSurcharge: { originalGBP: 18, todayGBP: 399, label: '£15.0.0 + £3.2.6 p.t.' },
    specialInteriorSurcharge: { originalGBP: 36, todayGBP: 798, label: '£30.0.0 + £6.5.0 p.t.' },
    description: 'Docile but powerful — sleeker and more luxurious than ever before. The Mk III was the final and most accomplished expression of the C-V8, bringing the Armstrong Selectaride electrically-adjustable shock absorbers as standard — one of the first production cars in the world to offer this feature. A car for the top man. Calm. But very powerful. Very safe.',
    highlights: [
      'Armstrong Selectaride adjustable dampers — a world first',
      'Most refined interior of the three marks',
      'Individual chrome JENSEN letters across the bonnet lid',
      'Snetterton 24-hour record: 1,866 miles at 79 mph average — Commander\'s Cup',
    ],
    differences: 'The most complete C-V8. Selectaride dampers and a more lavishly appointed interior set it apart. Proven at Snetterton — 24 hours, requiring only refuelling.',
    adImages: [
      { src: '/showroom/mk3-ad-commanders-cup.jpg', caption: 'Original Jensen advertisement — "New to Jensen: The C-V8 Mk III & The Commanders Cup"' },
    ],
  },
];

// ── Body Colours ─────────────────────────────────────────────────────────────
// Source: Jensen C-V8 Registry — all 500 cars documented

export const bodyColours = [
  { name: 'Princess Grey',       css: '#9ea3a8', made: 100, popular: true,  iciCode: 'M049-2334'      },
  { name: 'Indigo Blue',         css: '#2e3f6d', made: 71,  popular: true,  iciCode: 'M048-2086'      },
  { name: 'Botticelli Blue',     css: '#4a6fa5', made: 69,                  iciCode: 'P030-2309'      },
  { name: 'Regal Red',           css: '#8b1c1c', made: 67,  popular: true,  iciCode: 'P031-2394'      },
  { name: 'Deep Carriage Green', css: '#2c4a2c', made: 54,  popular: true,  iciCode: 'P030-2747'      },
  { name: 'Oyster Grey',         css: '#b8b0a4', made: 31,                  iciCode: 'M031-2116'      },
  { name: 'Sun Bronze',          css: '#8b6914', made: 23,                  iciCode: 'M049-2027'      },
  { name: 'California Sage',     css: '#7a8c5e', made: 15,                  iciCode: 'M031-2629'      },
  { name: 'Smoke Green',         css: '#506050', made: 14,                  iciCode: null             },
  { name: 'Off White',           css: '#f0ebe0', made: 13,                  iciCode: null             },
  { name: 'Peony Red',           css: '#c5394d', made: 12,                  iciCode: 'M049-4715'      },
  { name: 'Black',               css: '#1a1a1a', made: 8,                   iciCode: 'M030-122'       },
  { name: 'Spa White',           css: '#f5f2ec', made: 5,                   iciCode: null             },
  { name: 'Special White',       css: '#fafafa', made: 4,                   iciCode: null             },
  { name: 'Carmine',             css: '#960018', made: 2,                   iciCode: 'M030-9039'      },
  { name: 'Metallic Quartz Blue',css: '#6b88b8', made: 2,                   iciCode: null             },
  { name: 'Pastel Pink',         css: '#f0aab8', made: 2,                   iciCode: null             },
  { name: 'Reno Red',            css: '#9e3030', made: 1,                   iciCode: null             },
  { name: 'Dawn Blue',           css: '#7ab0c8', made: 1,                   iciCode: null             },
  { name: 'Fawn',                css: '#c4a07a', made: 1,                   iciCode: 'P031-2165'      },
  { name: 'Metallic Grey',       css: '#9a9ea3', made: 1,                   iciCode: null             },
  { name: 'Sherwood Green',      css: '#2d5a27', made: 1,                   iciCode: null             },
  { name: 'Autumn Gold',         css: '#c8860a', made: 1,                   iciCode: 'P031-2515'      },
  { name: 'Cadogan Brown',       css: '#6b4423', made: 1,                   iciCode: null             },
];

// ── Trim (Interior) Colours ───────────────────────────────────────────────────
// Connolly hide throughout — source: Jensen C-V8 Registry

export const trimColours = [
  { name: 'Beige',          css: '#c8b898', made: 93, popular: true  },
  { name: 'Bright Red',     css: '#cc2222', made: 82, popular: true  },
  { name: 'Blue-Grey',      css: '#8a9bb0', made: 76, popular: true  },
  { name: 'Black',          css: '#1a1a1a', made: 73, popular: true  },
  { name: 'Mushroom',       css: '#b5a090', made: 54                 },
  { name: 'Dark Red',       css: '#7a1515', made: 39                 },
  { name: 'Green',          css: '#4a6040', made: 28                 },
  { name: 'Light Mushroom', css: '#d4c4b0', made: 18                 },
  { name: 'Bentley Grey',   css: '#8a8a85', made: 16                 },
  { name: 'Tan',            css: '#b8935a', made: 4                  },
  { name: 'Light Tan',      css: '#d4ae7a', made: 3                  },
  { name: 'Brown',          css: '#6b4028', made: 1                  },
  { name: 'Cerise',         css: '#de3163', made: 1                  },
  { name: 'Dark Blue',      css: '#1a2a5c', made: 1                  },
];

// ── Wheel Options ─────────────────────────────────────────────────────────────

export const wheelOptions = [
  {
    id: 'standard',
    name: 'Painted Steel Wheels',
    description: 'Original 15" painted steel wheels as standard, fitted with period hubcaps. 15 × 4.5", 5 × 127mm PCD.',
    period: 'Standard fitment',
  },
  {
    id: 'wire',
    name: 'Dunlop Wire Wheels',
    description: 'Optional chrome wire wheels by Dunlop — a popular and period-correct upgrade that enhances the sporting character of the C-V8.',
    period: 'Optional factory fit',
  },
];

// ── Specifications ────────────────────────────────────────────────────────────
// Source: Jensen C-V8 Owners Manual & period road tests

export const specifications = {
  engine: {
    label: 'Engine',
    value: 'Chrysler 383 cu in (5,916 cc) V8',
  },
  power: {
    label: 'Power',
    value: '305 bhp at 4,800 rpm',
  },
  torque: {
    label: 'Torque',
    value: '410 lb/ft',
  },
  compression: {
    label: 'Compression',
    value: '9:1',
  },
  transmission: {
    label: 'Transmission',
    value: 'TorqueFlite 3-speed automatic (optional: 4-speed manual with overdrive)',
  },
  topSpeed: {
    label: 'Top Speed',
    value: 'Approx. 136 mph',
  },
  acceleration: {
    label: '0–60 mph',
    value: 'Approx. 7.8 seconds',
  },
  body: {
    label: 'Body',
    value: 'Hand-built fibreglass coupé over steel chassis',
  },
  weight: {
    label: 'Weight',
    value: '29 cwt (1,473 kg)',
  },
  wheelbase: {
    label: 'Wheelbase',
    value: '8 ft 9 in (2,667 mm)',
  },
  length: {
    label: 'Length',
    value: '15 ft 4 in (4,674 mm)',
  },
  fuel: {
    label: 'Fuel Tank',
    value: '16 gallons (72 litres)',
  },
  tyres: {
    label: 'Tyres',
    value: 'Dunlop 6.70–15 (modern equivalent: 205/70-15)',
  },
};
