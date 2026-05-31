#!/usr/bin/env node
/**
 * make-icons.mjs
 * Composites the white Jensen logo onto a coloured background to produce:
 *   public/apple-touch-icon.png  (180×180 — iOS home screen)
 *   public/favicon-32.png        (32×32  — browser tab)
 *   public/favicon-180.png       (180×180 — used in OG/share)
 *   public/og-image.png          (1200×630 — social sharing card)
 *
 * Background colour: #0b3d2e (the app's dark green) for app icons
 * The dark logo (for OG image) is the white logo inverted to near-black on cream.
 */

import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const logoPath = join(root, 'public/jensen-logo.png');

const DARK_GREEN = { r: 11,  g: 61,  b: 46  }; // #0b3d2e
const CRIMSON    = { r: 92,  g: 31,  b: 27  }; // #5c1f1b

// ─── Helper: coloured square with logo centred ────────────────────────────────
async function makeIconPng(sizePx, bgColour, outputPath, logoPadFraction = 0.15) {
  const pad  = Math.round(sizePx * logoPadFraction);
  const logo = await sharp(logoPath)
    .resize(sizePx - pad * 2, sizePx - pad * 2, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: {
      width:      sizePx,
      height:     sizePx,
      channels:   4,
      background: { ...bgColour, alpha: 1 },
    }
  })
    .composite([{ input: logo, gravity: 'center' }])
    .png()
    .toFile(outputPath);

  console.log(`✓ ${outputPath.replace(root + '/', '')}`);
}

// ─── Helper: OG image 1200×630 ───────────────────────────────────────────────
async function makeOgImage(outputPath) {
  const W = 1200, H = 630;
  const logoH = 220;

  // White logo resized
  const logo = await sharp(logoPath)
    .resize(null, logoH, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  // Build a simple SVG text layer
  const svg = Buffer.from(`
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <text x="${W/2}" y="${H * 0.72}" text-anchor="middle"
            font-family="Georgia, serif" font-size="38" fill="rgba(255,255,255,0.9)"
            letter-spacing="6">ONLINE MANUAL</text>
      <text x="${W/2}" y="${H * 0.87}" text-anchor="middle"
            font-family="Georgia, serif" font-size="22" fill="rgba(255,255,255,0.55)"
            letter-spacing="2">jensen-cv8.com</text>
    </svg>`);

  await sharp({
    create: { width: W, height: H, channels: 4, background: { ...DARK_GREEN, alpha: 1 } }
  })
    .composite([
      { input: logo,  gravity: 'north', top: Math.round(H * 0.10), left: Math.round((W - 400) / 2) },
      { input: svg,   top: 0,           left: 0 },
    ])
    .png()
    .toFile(outputPath);

  console.log(`✓ ${outputPath.replace(root + '/', '')}`);
}

// ─── Run ─────────────────────────────────────────────────────────────────────
console.log('\n🎨  Generating icons…\n');

await makeIconPng(180,  DARK_GREEN, join(root, 'public/apple-touch-icon.png'));
await makeIconPng(32,   DARK_GREEN, join(root, 'public/favicon-32.png'), 0.10);
await makeIconPng(180,  DARK_GREEN, join(root, 'public/favicon-180.png'));
await makeOgImage(join(root, 'public/og-image.png'));

// Copy 32px version to favicon.png (keeps existing <link rel="icon"> working)
const f32 = readFileSync(join(root, 'public/favicon-32.png'));
writeFileSync(join(root, 'public/favicon.png'), f32);
console.log('✓ public/favicon.png  (copy of favicon-32.png)');

console.log('\n✅  Done. Commit the updated public/ files.\n');
