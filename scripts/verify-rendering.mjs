import assert from 'node:assert/strict';
import { readFileSync, writeFileSync } from 'node:fs';

// Fetch real response HTML without running JavaScript. Content inside RSC/JS
// payloads does not count as a rendered page.
const origin = process.argv[2] || 'http://localhost:3001';
const output = process.argv[3] || 'design/ssr-rendering.json';
const routes = [
  '/',
  '/loesungen',
  '/plattformen-web-apps',
  '/websites',
  '/website-erstellen-lassen',
  '/ki-automation',
  '/google-ads-growth',
  '/projekte',
  '/projekte/parkesicher',
  '/pakete',
  '/ueber-nine',
  '/projekt-starten',
  '/checkout/nine-launch',
  '/checkout/nine-growth',
  '/checkout/platform-discovery',
  '/checkout/custom-platform',
  '/checkout/nine-scale',
  '/impressum',
  '/datenschutz',
  '/agb',
];
function readable(html) {
  return html
    .replace(/<(script|style|svg)\b[^>]*>[\s\S]*?<\/\1>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(?:nbsp|amp|quot|#x27|#39);/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
function attribute(tag, name) {
  return tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];
}
const pages = [];
const titles = new Set();
const fontUrls = new Set();
for (const path of routes) {
  const response = await fetch(origin + path);
  const html = await response.text();
  const head = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] || '';
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || '';
  const text = readable(main);
  const title = head.match(/<title[^>]*>([^<]+)<\/title>/)?.[1];
  const preloads = [...head.matchAll(/<link\b[^>]*>/g)]
    .map(([tag]) => tag)
    .filter((tag) => attribute(tag, 'as') === 'font');
  assert.equal(response.status, 200, path);
  assert.match(response.headers.get('content-type') || '', /text\/html/, path);
  assert.equal((main.match(/<h1\b/g) || []).length, 1, path + ' H1');
  assert.ok(title && !titles.has(title), path + ' unique title in head');
  assert.match(head, /<meta name="description"/, path + ' description in head');
  assert.match(head, /<link rel="canonical"/, path + ' canonical in head');
  assert.ok(text.length > 300, path + ' meaningful SSR body');
  assert.equal(preloads.length, 4, path + ' four early font preloads');
  for (const tag of preloads) {
    const href = attribute(tag, 'href');
    assert.match(href, /^\/fonts\/cabinet-\d+\.[\w-]+\.woff2$/);
    assert.match(tag, /crossorigin/i);
    assert.ok(
      html.includes(`url('${href}')`),
      path + ' font CSS and preload agree',
    );
    fontUrls.add(href);
  }
  assert.match(html, /font-display:\s*optional/, path + ' no late font swap');
  assert.doesNotMatch(
    html,
    /data:[^;]*;base64,d09GMg/,
    path + ' no inline font payload',
  );
  if (['/', '/pakete', '/websites'].includes(path)) {
    assert.match(text, /6\.900/, path + ' Launch price in HTML');
    assert.match(text, /12\.900/, path + ' Growth price in HTML');
  }
  titles.add(title);
  pages.push({
    path,
    status: response.status,
    title,
    mainTextLength: text.length,
    fontPreloads: preloads.length,
    text,
  });
  console.log('PASS SSR', path, text.length + ' readable characters');
}
// Three representative templates: Googlebot receives the same page content.
const mobileGooglebot =
  'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';
for (const path of ['/', '/websites', '/projekte']) {
  const response = await fetch(origin + path, {
    headers: { 'User-Agent': mobileGooglebot },
  });
  const html = await response.text();
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || '';
  assert.equal(response.status, 200, path + ' Googlebot response');
  assert.equal(
    readable(main),
    pages.find((page) => page.path === path).text,
    path + ' crawler/user content parity',
  );
}
for (const path of [
  '/does-not-exist',
  '/checkout/unknown-package',
  '/projekte/unknown-case',
]) {
  const response = await fetch(origin + path);
  assert.equal(response.status, 404, path + ' real 404');
}
const fonts = [];
for (const path of fontUrls) {
  const response = await fetch(origin + path);
  const bytes = new Uint8Array(await response.arrayBuffer());
  const cache = response.headers.get('cache-control') || '';
  assert.equal(response.status, 200, path);
  assert.equal(new TextDecoder().decode(bytes.slice(0, 4)), 'wOF2', path);
  const weight = path.match(/cabinet-(\d+)\./)[1];
  assert.deepEqual(
    Buffer.from(bytes),
    readFileSync(`app/fonts/cabinet-${weight}.woff2`),
    path + ' exact font bytes',
  );
  assert.match(response.headers.get('content-type') || '', /font\/woff2/, path);
  assert.match(cache, /max-age=31536000/, path + ' one-year font cache');
  assert.match(cache, /immutable/, path + ' content-addressed caching');
  const headResponse = await fetch(origin + path, { method: 'HEAD' });
  assert.equal(headResponse.status, 200, path + ' HEAD status');
  assert.equal(
    headResponse.headers.get('cache-control'),
    cache,
    path + ' HEAD cache',
  );
  assert.equal(
    (await headResponse.arrayBuffer()).byteLength,
    0,
    path + ' HEAD body',
  );
  const revalidated = await fetch(origin + path, {
    headers: { 'If-None-Match': response.headers.get('etag') },
  });
  assert.equal(revalidated.status, 304, path + ' conditional response');
  fonts.push({ path, bytes: bytes.length, cache });
}
const unknownFont = await fetch(origin + '/fonts/unknown.woff2');
assert.equal(unknownFont.status, 404, 'unknown font returns 404');
writeFileSync(
  output,
  JSON.stringify(
    {
      origin,
      checkedAt: new Date().toISOString(),
      pages: pages.map(({ text: _text, ...page }) => page),
      fonts,
      crawlerParity: ['/', '/websites', '/projekte'],
      real404s: 3,
    },
    null,
    2,
  ),
);
console.log(
  `PASS: ${pages.length} server-rendered pages, 3 crawler comparisons, 3 real 404s and 4 cached fonts.`,
);
