#!/usr/bin/env node
/**
 * regenerate-summaries.mjs
 *
 * Reads public/ocr-corrections.json, sends each corrected page's OCR text
 * to the Claude API, and writes improved summary + checklist back into
 * src/manualPages.js and src/data/mk3ManualPages.js permanently.
 *
 * Usage:
 *   ANTHROPIC_API_KEY=sk-... node scripts/regenerate-summaries.mjs
 *   ANTHROPIC_API_KEY=sk-... node scripts/regenerate-summaries.mjs --dry-run
 *
 * --dry-run  Shows what would be generated without writing any files.
 */

import Anthropic from '@anthropic-ai/sdk';
import { readFileSync, writeFileSync } from 'fs';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const isDryRun = process.argv.includes('--dry-run');

// ─── Preflight checks ────────────────────────────────────────────────────────

if (!process.env.ANTHROPIC_API_KEY) {
  console.error('\n❌  ANTHROPIC_API_KEY is not set.\n');
  console.error('Run with:');
  console.error('  ANTHROPIC_API_KEY=sk-ant-... node scripts/regenerate-summaries.mjs\n');
  process.exit(1);
}

const corrections = JSON.parse(
  readFileSync(join(root, 'public/ocr-corrections.json'), 'utf8')
);

const correctionCount = Object.keys(corrections).length;
if (correctionCount === 0) {
  console.log('\n✅  No corrections found in public/ocr-corrections.json — nothing to do.\n');
  process.exit(0);
}

console.log(`\n📄  Found ${correctionCount} corrected page(s).`);
if (isDryRun) console.log('🔍  Dry-run mode — no files will be written.\n');

// ─── Load source data ────────────────────────────────────────────────────────

const { manualPages: basePages } = await import('../src/manualPages.js');
const { mk3ManualPages: mk3Pages } = await import('../src/data/mk3ManualPages.js');

// Work on mutable copies
const base = basePages.map(p => ({ ...p }));
const mk3  = mk3Pages.map(p => ({ ...p }));

// ─── Claude API ──────────────────────────────────────────────────────────────

const client = new Anthropic();

const SKIP_TYPES = new Set(['blank', 'diagram']);
const INFORMATIONAL_TITLES = [
  'foreword', 'introduction', 'handbook of instructions', 'vehicle particulars',
  'warranty', 'index', 'contents', 'cover', 'title page'
];

function isInformational(page) {
  return INFORMATIONAL_TITLES.some(kw =>
    (page.title || '').toLowerCase().includes(kw)
  );
}

async function generateSummaryAndChecklist(ocrText, pageTitle, isInfo) {
  const checklistInstruction = isInfo
    ? 'The checklist should be an empty array [] — this page has no repair steps.'
    : `The checklist should contain 3–8 specific, actionable steps extracted from the text.
Each step must:
- Start with an imperative verb (Check, Inspect, Change, Replace, Drain, Fill, etc.)
- Be a complete sentence
- Reflect only what the manual actually says — do not invent steps`;

  const prompt = `You are building a garage-friendly reference app for the Jensen C-V8 classic car (1962–1966).

Given this corrected OCR text from the owners manual, generate two things:
1. A concise one-sentence summary describing what this page covers.
2. A checklist of actionable service/repair steps.

Page title: "${pageTitle}"

OCR text:
---
${ocrText.slice(0, 3000)}
---

${checklistInstruction}

Respond with valid JSON only — no markdown fences, no extra text:
{
  "summary": "One clear sentence about what this page covers.",
  "checklist": ["Step 1...", "Step 2...", ...]
}`;

  const message = await client.messages.create({
    model: 'claude-opus-4-5',
    max_tokens: 1024,
    messages: [{ role: 'user', content: prompt }]
  });

  const raw = message.content[0].text.trim();

  // Strip accidental markdown fences if present
  const cleaned = raw.replace(/^```json?\s*/i, '').replace(/\s*```$/, '');

  return JSON.parse(cleaned);
}

// ─── Process each correction ─────────────────────────────────────────────────

let baseModified = false;
let mk3Modified  = false;
const results = [];

for (const [key, ocrText] of Object.entries(corrections)) {
  if (!ocrText || ocrText.trim().length < 40) {
    console.log(`⏭  Skipping "${key}" — text too short`);
    continue;
  }

  // Parse key → model + page number
  // Keys: "4" (base), "all:4" (base), "mk1:4" (base), "mk2:4" (base), "mk3:5" (mk3)
  let model, pageNum;
  if (key.includes(':')) {
    const [m, p] = key.split(':');
    model  = m === 'mk3' ? 'mk3' : 'base';
    pageNum = parseInt(p, 10);
  } else {
    model  = 'base';
    pageNum = parseInt(key, 10);
  }

  const pages  = model === 'mk3' ? mk3 : base;
  const pageIdx = pages.findIndex(p => p.page === pageNum);

  if (pageIdx === -1) {
    console.log(`⚠   Page ${pageNum} (${model}) not found in data — skipping`);
    continue;
  }

  const page = pages[pageIdx];

  if (SKIP_TYPES.has(page.type) || page.hidden || page.isImageOnly) {
    console.log(`⏭  Skipping p${pageNum} (${model}) — ${page.type || 'image-only'}`);
    continue;
  }

  console.log(`⚙   Generating for p${pageNum} (${model}): "${page.title}"...`);

  try {
    const generated = await generateSummaryAndChecklist(
      ocrText,
      page.title,
      isInformational(page)
    );

    results.push({ key, model, pageNum, title: page.title, generated });

    if (!isDryRun) {
      pages[pageIdx] = {
        ...page,
        summary:   generated.summary,
        checklist: generated.checklist,
      };
      if (model === 'mk3') mk3Modified = true;
      else baseModified = true;
    }

    console.log(`   ✓ Summary: ${generated.summary.slice(0, 80)}...`);
    console.log(`   ✓ ${generated.checklist.length} checklist item(s)`);

  } catch (err) {
    console.error(`   ✗ Failed for ${key}: ${err.message}`);
    if (err.message.includes('JSON')) {
      console.error('   Raw response was not valid JSON — skipping this page');
    }
  }

  // Respect rate limits
  await new Promise(r => setTimeout(r, 600));
}

// ─── Write updated files ─────────────────────────────────────────────────────

if (!isDryRun) {
  if (baseModified) {
    writeFileSync(
      join(root, 'src/manualPages.js'),
      `export const manualPages = ${JSON.stringify(base, null, 2)};\n`
    );
    console.log('\n✅  Wrote src/manualPages.js');
  }

  if (mk3Modified) {
    writeFileSync(
      join(root, 'src/data/mk3ManualPages.js'),
      `export const mk3ManualPages = ${JSON.stringify(mk3, null, 2)};\n`
    );
    console.log('✅  Wrote src/data/mk3ManualPages.js');
  }

  if (!baseModified && !mk3Modified) {
    console.log('\n⚠   No pages were updated.');
  }
} else {
  console.log('\n─── Dry-run results ───────────────────────────────────────\n');
  for (const r of results) {
    console.log(`[${r.key}] ${r.title}`);
    console.log(`  Summary:   ${r.generated.summary}`);
    console.log(`  Checklist: ${r.generated.checklist.length} items`);
    r.generated.checklist.forEach((item, i) => console.log(`    ${i + 1}. ${item}`));
    console.log('');
  }
  console.log('─────────────────────────────────────────────────────────\n');
  console.log('Run without --dry-run to write these to the source files.\n');
}

console.log(`\n🏁  Done. ${results.length} page(s) processed.\n`);
