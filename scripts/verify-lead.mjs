import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { writeFileSync } from 'node:fs';

// Integration fixtures are sent only to a local build with no mail credentials.
const origin = process.argv[2] || 'http://localhost:3001';
assert.ok(
  ['localhost', '127.0.0.1'].includes(new URL(origin).hostname),
  'This fixture runner must not submit to production',
);
const endpoint = origin + '/api/website-anfrage';
const lead = {
  requestId: randomUUID(),
  name: 'Integration Test',
  email: `test-${randomUUID()}@example.test`,
  goal: 'relaunch',
  package: 'nine-start',
  website: 'example.test',
  phone: '',
  message: 'Local verification only',
  fax: '',
  campaign: { utm_source: 'test' },
};
async function send(body, options = {}) {
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      Origin: origin,
      'Content-Type': 'application/json',
      ...options.headers,
    },
    body: JSON.stringify(body),
  });
}
assert.equal((await fetch(endpoint)).status, 405, 'No public read API');
assert.equal(
  (await send(lead, { headers: { Origin: 'https://outside.example' } })).status,
  403,
  'Cross-site submit rejected',
);
assert.equal(
  (await send({ ...lead, email: 'invalid' })).status,
  400,
  'Invalid contact rejected',
);
assert.equal(
  (await send({ ...lead, fax: 'filled by bot' })).status,
  400,
  'Honeypot rejected',
);
assert.equal(
  (await send({ ...lead, package: 'free-website' })).status,
  400,
  'Unknown package rejected',
);
assert.equal(
  (await send({ ...lead, website: 'javascript:alert(1)' })).status,
  400,
  'Unsafe website scheme rejected',
);
const first = await send(lead);
assert.equal(first.status, 201, await first.clone().text());
assert.equal((await first.json()).accepted, true);
assert.equal(first.headers.get('cache-control'), 'no-store');
assert.equal(
  (await send(lead)).status,
  200,
  'Same request can be retried without duplication',
);
assert.equal(
  (await send({ ...lead, name: 'Different Name' })).status,
  409,
  'Cannot overwrite a received request',
);
const concurrent = await Promise.all(
  Array.from({ length: 5 }, () => send({ ...lead, requestId: randomUUID() })),
);
assert.equal(
  concurrent.filter((response) => response.status === 201).length,
  2,
  'Exactly two further requests accepted',
);
assert.equal(
  concurrent.filter((response) => response.status === 429).length,
  3,
  'Atomic rate limit rejects excess concurrent requests',
);
const page = await fetch(
  origin + '/website-erstellen-lassen?paket=nine-growth&utm_source=test',
);
const html = await page.text();
assert.equal(page.status, 200);
assert.equal((html.match(/<h1\b/g) || []).length, 1);
assert.match(
  html,
  /<link rel="canonical" href="https:\/\/nine-ai-studio.serhad1999.chatgpt.site\/website-erstellen-lassen"/,
);
assert.match(
  html,
  /value="nine-growth"[^>]*checked=""|checked=""[^>]*value="nine-growth"/,
);
assert.match(html, /mailto:anfrage@nineai.de/);
assert.match(html, /1\.990/);
assert.match(html, /6\.900/);
assert.match(html, /Vorschau · Bewertungen folgen/);
assert.match(html, /keine echte Bewertung/);
assert.match(html, /parkesicher-live\.png/);
assert.match(html, /12\.900/);
assert.equal(
  (html.match(/<div\b[^>]*data-slot="accordion-content"[^>]*>/g) || []).filter(
    (panel) => /\shidden=""/.test(panel),
  ).length,
  7,
  'All FAQ answers start collapsed',
);
for (const slug of ['nine-start', 'nine-launch']) {
  const selectedHtml = await (
    await fetch(origin + '/website-erstellen-lassen?paket=' + slug)
  ).text();
  assert.match(
    selectedHtml,
    new RegExp(
      'value="' + slug + '"[^>]*checked=""|checked=""[^>]*value="' + slug + '"',
    ),
  );
}
writeFileSync('/tmp/nine-lead-local-fixture.json', JSON.stringify(lead));
// Keep this last: Wrangler 4.92's local proxy corrupts its next pooled request
// after a rejected upload, even when the Worker explicitly cancels that body.
// Production must separately verify 413 followed by a normal validation error.
assert.equal(
  (await send({ ...lead, message: 'x'.repeat(15000) })).status,
  413,
  'Oversized body rejected',
);
console.log(
  'PASS: Lead validation, durable receipt, idempotency, conflict handling, atomic rate limiting, SSR, package handoff and seven collapsed FAQs.',
);
