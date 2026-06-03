/**
 * Jensen C-V8 Specialists & Parts Suppliers
 *
 * type is an array — a business can be multiple types.
 */

export const specialistTypes = [
  { id: 'all',         label: 'All',                 emoji: '🔍' },
  { id: 'specialist',  label: 'Jensen Specialist',   emoji: '🚗' },
  { id: 'restoration', label: 'Restoration',         emoji: '🔧' },
  { id: 'parts',       label: 'Parts Supplier',      emoji: '📦' },
  { id: 'supplier',    label: 'Mechanical Supplier', emoji: '⚙️'  },
];

export const specialistCountries = [
  { code: 'all', name: 'All Countries' },
  { code: 'GB',  name: 'United Kingdom' },
  { code: 'AU',  name: 'Australia' },
  { code: 'US',  name: 'United States' },
  { code: 'NL',  name: 'Netherlands' },
  { code: 'DE',  name: 'Germany' },
];

export const specialists = [
  {
    id:          'cropredy-bridge',
    name:        'Cropredy Bridge Garage',
    types:       ['specialist', 'restoration'],
    country:     'United Kingdom',
    countryCode: 'GB',
    region:      'Oxfordshire',
    city:        'Cropredy, Banbury',
    website:     'https://cropredybridge.com',
    phone:       '+44 (0)1295 758444',
    email:       'sales@cropredybridge.com',
    logo:        '/specialists/cropredy-bridge-logo.svg',
    tagline:     'The largest Jensen specialist in the world',
    description: 'Cropredy Bridge Garage has been the world\'s foremost Jensen specialist for over 50 years. Based at Riverside Works in Oxfordshire, they offer a full range of services for Jensen vehicles including the C-V8 — restoration, classic car paint studio, trim studio, servicing, maintenance, upgrades and vehicle sales. "Where passion meets precision."',
    services:    ['Full restoration', 'Paintwork', 'Trimming', 'Servicing & maintenance', 'Vehicle sales', 'Parts sourcing', 'Upgrades'],
    models:      ['all'],
    featured:    true,
  },
  {
    id:          'appleyard-parts',
    name:        'Richard Appleyard Parts Ltd',
    types:       ['specialist', 'restoration', 'parts'],
    country:     'United Kingdom',
    countryCode: 'GB',
    region:      'Derbyshire',
    city:        'Ilkeston, Derby',
    website:     'https://jensen.co.uk',
    phone:       '0115 932 5320',
    email:       'sales@jensen.co.uk',
    logo:        '/specialists/appleyard-parts-logo.png',
    logoScale:   2.2,
    tagline:     'Parts · Car Sales · Servicing',
    description: 'Richard Appleyard Parts Ltd specialises exclusively in classic Jensen sports cars, covering the full range of Jensen models: 541, C-V8, Interceptor/FF and Healey/GT. Based at Quarry Hill Industrial Park, Ilkeston, they supply Jensen spare parts, carry out Jensen servicing and repair, and undertake restoration work. An active supporter of the Jensen Owners Club.',
    services:    ['Parts supply', 'Servicing', 'Repairs', 'Restoration', 'Vehicle sales', 'Jensen Owners Club supporter'],
    models:      ['all'],
    featured:    true,
  },
];
