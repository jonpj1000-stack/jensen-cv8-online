/**
 * Jensen C-V8 Specialists & Parts Suppliers
 *
 * Each entry has:
 *   id          — unique string
 *   name        — business name
 *   type        — 'restoration' | 'parts' | 'specialist' | 'supplier'
 *   country     — ISO country name
 *   countryCode — 2-letter ISO code
 *   region      — county/state/province
 *   city        — city or town
 *   website     — URL
 *   phone       — optional
 *   email       — optional
 *   tagline     — short description (their own words where possible)
 *   description — fuller description of what they offer for Jensen owners
 *   services    — string[] of key services
 *   models      — ['all'] or specific marks they cover
 *   featured    — boolean — show prominently
 */

export const specialistTypes = [
  { id: 'all',         label: 'All',                    emoji: '🔍' },
  { id: 'restoration', label: 'Restoration',            emoji: '🔧' },
  { id: 'specialist',  label: 'Jensen Specialist',      emoji: '🚗' },
  { id: 'parts',       label: 'Parts Supplier',         emoji: '📦' },
  { id: 'supplier',    label: 'Mechanical Supplier',    emoji: '⚙️'  },
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
    type:        'specialist',
    country:     'United Kingdom',
    countryCode: 'GB',
    region:      'Oxfordshire',
    city:        'Cropredy, Banbury',
    website:     'https://cropredybridge.com',
    phone:       '+44 (0)1295 758444',
    email:       'sales@cropredybridge.com',
    logo:        '/specialists/cropredy-bridge-logo.svg',
    tagline:     'The largest Jensen specialist in the world',
    description: 'Cropredy Bridge Garage has been the world\'s foremost Jensen specialist for over 50 years. Based at Riverside Works in Oxfordshire, they offer the full range of services for Jensen vehicles including the C-V8 — restoration, classic car paint studio, trim studio, servicing, maintenance, upgrades and vehicle sales. "Where passion meets precision."',
    services:    ['Full restoration', 'Paintwork', 'Trimming', 'Servicing & maintenance', 'Vehicle sales', 'Parts sourcing', 'Upgrades'],
    models:      ['all'],
    featured:    true,
  },
];
