import { writeFileSync } from 'node:fs';
const origin = process.argv[2] || 'http://localhost:3000';
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
const results = [];
const titles = new Set();
const descriptions = new Set();
let failed = false;
for (const path of routes) {
  const r = await fetch(origin + path);
  const html = await r.text();
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = html.match(
    /<meta name="description" content="([^"]+)"/,
  )?.[1];
  const h1 = (html.match(/<h1[ >]/g) || []).length;
  const noindex = /<meta name="robots" content="[^"]*noindex/.test(html);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const badLinks = [...html.matchAll(/<a[^>]* href="(\/[^"?#]*)[^\"]*"/g)]
    .map((m) => m[1])
    .filter(
      (h) =>
        !h.startsWith('/assets/') && !h.startsWith('/_') && !routes.includes(h),
    );
  const pass =
    r.status === 200 &&
    h1 === 1 &&
    !!title &&
    !!description &&
    noindex &&
    !titles.has(title) &&
    !descriptions.has(description) &&
    canonical ===
      'https://nine-ai-studio.serhad1999.chatgpt.site' +
        (path === '/' ? '' : path) &&
    badLinks.length === 0;
  results.push({
    path,
    status: r.status,
    h1,
    noindex,
    canonical,
    title,
    description,
    badLinks,
    pass,
  });
  titles.add(title);
  descriptions.add(description);
  if (!pass) failed = true;
  console.log(pass ? 'PASS' : 'FAIL', path, r.status, 'h1=' + h1);
}
for (const path of [
  '/does-not-exist',
  '/checkout/unknown-package',
  '/projekte/unknown-case',
]) {
  const r = await fetch(origin + path);
  const pass = r.status === 404;
  results.push({ path, status: r.status, pass });
  failed ||= !pass;
  console.log(pass ? 'PASS' : 'FAIL', path, r.status);
}
writeFileSync(
  'design/route-validation.json',
  JSON.stringify(
    { origin, checkedAt: new Date().toISOString(), results },
    null,
    2,
  ),
);
if (failed) process.exit(1);
