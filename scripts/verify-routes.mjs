import assert from 'node:assert/strict';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
const origin = (process.argv[2] || 'http://localhost:3001').replace(/\/$/, '');
const output = process.argv[3] || 'outputs/route-validation.json';
const sitemap = await (await fetch(origin + '/sitemap.xml')).text();
const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
  (match) => new URL(match[1]),
);
assert.ok(locations.length > 0, 'Sitemap includes public pages');
const canonicalOrigin = locations[0].origin;
const publicPaths = locations.map((url) => url.pathname);
const privatePaths = [
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
const paths = [...new Set([...publicPaths, ...privatePaths])];
const results = [],
  titles = new Set();
for (const path of paths) {
  const response = await fetch(origin + path),
    html = await response.text();
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const noindex = /<meta name="robots" content="[^"]*noindex/.test(html);
  const h1 = (html.match(/<h1[ >]/g) || []).length;
  const badLinks = [...html.matchAll(/<a[^>]* href="(\/[^"?#]*)[^"]*"/g)]
    .map((match) => match[1])
    .filter(
      (href) =>
        !['/assets/', '/_', '/project-images/', '/fonts/'].some((prefix) =>
          href.startsWith(prefix),
        ) && !paths.includes(href),
    );
  const pass =
    response.status === 200 &&
    !!title &&
    !titles.has(title) &&
    h1 === 1 &&
    !!canonical &&
    new URL(canonical).href === new URL(path, canonicalOrigin).href &&
    noindex === privatePaths.includes(path) &&
    badLinks.length === 0;
  if (title) titles.add(title);
  results.push({
    path,
    status: response.status,
    pass,
    h1,
    noindex,
    canonical,
    badLinks,
  });
  console.log(pass ? 'PASS' : 'FAIL', path);
}
for (const path of [
  '/does-not-exist',
  '/checkout/unknown-package',
  '/projekte/unknown-case',
]) {
  const response = await fetch(origin + path);
  results.push({
    path,
    status: response.status,
    pass: response.status === 404,
  });
}
mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, JSON.stringify({ origin, results }, null, 2) + '\n');
assert.ok(
  results.every((result) => result.pass),
  'All routes, canonicals, index rules and internal links pass',
);
