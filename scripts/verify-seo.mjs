import assert from 'node:assert/strict';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { createHash, randomInt } from 'node:crypto';

const origin = (process.argv[2] || 'http://localhost:3001').replace(/\/$/, '');
const output = process.argv[3] || 'design/seo/verified-local.json';
const canonicalOrigin = 'https://nine-ai-studio.serhad1999.chatgpt.site';
const noindexPaths = [
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
const failures = [];
const check = (pass, message) => {
  if (!pass) failures.push(message);
};
const attrs = (tag) =>
  Object.fromEntries(
    [...tag.matchAll(/([\w:-]+)\s*=\s*["']([^"']*)["']/g)].map((m) => [
      m[1].toLowerCase(),
      m[2],
    ]),
  );
const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ');
const clean = (s) =>
  decode(
    s
      .replace(/<(script|style|svg)\b[^>]*>[\s\S]*?<\/\1>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim(),
  );
const tags = (html, tag) =>
  [...html.matchAll(new RegExp('<' + tag + '\\b[^>]*>', 'gi'))].map((m) =>
    attrs(m[0]),
  );
const hash = (text) => createHash('sha256').update(text).digest('hex');
async function get(path, options) {
  const response = await fetch(origin + path, {
    signal: AbortSignal.timeout(20000),
    ...options,
  });
  return { response, html: await response.text() };
}
const { response: sitemapResponse, html: sitemap } = await get('/sitemap.xml');
assert.equal(sitemapResponse.status, 200, 'sitemap response');
const blocks = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(
  (m) => m[1],
);
const locations = blocks.map((block) =>
  decode(block.match(/<loc>([^<]+)<\/loc>/)?.[1] || ''),
);
const indexPaths = locations.map((url) => new URL(url).pathname);
assert.equal(indexPaths.length, 39, 'full intended-index inventory');
assert.equal(
  new Set(indexPaths).size,
  indexPaths.length,
  'no duplicate sitemap entries',
);
check(
  locations.every((url) => url.startsWith(canonicalOrigin + '/')),
  'sitemap trusted canonical origin',
);
check(
  blocks.every((block) => {
    const path = new URL(decode(block.match(/<loc>([^<]+)<\/loc>/)?.[1] || '')).pathname;
    const expected = path === '/projekte/entwurf-energie' ? '2026-10-21' : '2026-09-08';
    return block.includes('<lastmod>' + expected + '</lastmod>');
  }),
  'accurate release modification dates',
);
check(
  !/<priority>|<changefreq>/.test(sitemap),
  'no synthetic sitemap priorities',
);
const { html: robots, response: robotsResponse } = await get('/robots.txt');
check(robotsResponse.status === 200, 'robots status');
check(
  robots.includes('Sitemap: ' + canonicalOrigin + '/sitemap.xml'),
  'robots sitemap discovery',
);
check(
  /User-agent: \*\s+Allow: \/\s+Disallow: \/api\//.test(robots),
  'public crawl allowed; API disallowed',
);
for (const bot of [
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'Claude-SearchBot',
  'GPTBot',
  'Google-Extended',
  'ClaudeBot',
])
  check(
    robots.includes('User-agent: ' + bot),
    'explicit crawler policy: ' + bot,
  );

const pages = [];
const assets = new Map();
const visibleByPath = new Map();
for (const path of [...indexPaths, ...noindexPaths]) {
  const { response, html } = await get(path);
  const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] || '';
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || '';
  const meta = tags(head, 'meta');
  const metaValue = (key) =>
    decode(
      meta.find((m) => m.name === key || m.property === key)?.content || '',
    );
  const title = decode(head.match(/<title[^>]*>([^<]+)<\/title>/i)?.[1] || '');
  const description = decode(metaValue('description') || '');
  const canonical = tags(head, 'link').find((l) => l.rel === 'canonical')?.href;
  const robotsMeta = metaValue('robots') || '';
  const text = clean(main);
  const images = tags(main, 'img');
  const links = tags(
    html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ''),
    'a',
  )
    .map((l) => l.href)
    .filter(Boolean);
  const ids = new Set(
    [...html.matchAll(/\bid=["']([^"']+)["']/g)].map((m) => m[1]),
  );
  const data = [
    ...html.matchAll(
      /<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ].flatMap((m) => {
    try {
      const value = JSON.parse(m[1]);
      return value['@graph'] || [value];
    } catch {
      failures.push(path + ': malformed JSON-LD');
      return [];
    }
  });
  const types = data.flatMap((d) => [d['@type']].flat());
  const index = indexPaths.includes(path);
  check(response.status === 200, path + ': HTTP 200');
  check(
    /text\/html/.test(response.headers.get('content-type') || ''),
    path + ': HTML response',
  );
  check((main.match(/<h1\b/g) || []).length === 1, path + ': one H1');
  check(!/prime[ -]?energie/i.test(main), path + ': no outdated energy branding');
  check(text.length > 300, path + ': primary content rendered');
  check(
    title.length > 10 && description.length > 40,
    path + ': meaningful metadata',
  );
  check(
    canonical && new URL(canonical).href === canonicalOrigin + path,
    path + ': correct canonical',
  );
  check(
    index
      ? /index/.test(robotsMeta) && !/noindex|nofollow/.test(robotsMeta)
      : /noindex/.test(robotsMeta),
    path + ': correct robots category',
  );
  check(
    !/noindex/i.test(response.headers.get('x-robots-tag') || '') || !index,
    path + ': HTTP robots header',
  );
  check(
    html.includes('site-footer-links') &&
      html.includes('Persönliches Angebot erhalten'),
    path + ': shared inquiry footer',
  );
  check(ids.has('top'), path + ': back-to-top target');
  for (const image of images) {
    check(
      'alt' in image && image.width && image.height,
      path + ': image alt and dimensions ' + image.src,
    );
    if (image.src?.startsWith('/')) assets.set(image.src, { kind: 'image' });
    if (image.srcset) {
      check(!!image.sizes, path + ': responsive image has a sizes hint');
      for (const candidate of decode(image.srcset).split(',')) {
        const match = candidate.trim().match(/^(\S+)\s+(\d+)w$/);
        check(!!match, path + ': valid responsive image candidate');
        if (match?.[1].startsWith('/'))
          assets.set(match[1], {
            kind: 'responsive-image',
            width: Number(match[2]),
          });
      }
    }
  }
  if (index) {
    check(
      types.includes('WebPage') &&
        (path === '/' || types.includes('BreadcrumbList')),
      path + ': page and applicable breadcrumb schema',
    );
    check(
      types.includes('Organization') && types.includes('WebSite'),
      path + ': consistent identity',
    );
    check(
      metaValue('og:title') === title &&
        metaValue('twitter:title') === title &&
        new URL(metaValue('og:url')).href === new URL(canonical).href,
      path + ': matching social text',
    );
    check(
      !types.includes('Review') && !types.includes('AggregateRating'),
      path + ': no invented reviews',
    );
    if (path.startsWith('/wissen/'))
      check(
        types.includes('Article') && text.includes('Von Nine.ai'),
        path + ': visible article authorship',
      );
    if (path.startsWith('/projekte/'))
      check(
        types.includes('CreativeWork') &&
          images.some((i) => i.src?.includes('-mobile.webp')),
        path + ': project scope and mobile proof',
      );
    for (const faq of data.filter((d) => d['@type'] === 'FAQPage'))
      for (const question of faq.mainEntity)
        check(
          text.includes(question.name) &&
            text.includes(question.acceptedAnswer.text),
          path + ': visible FAQ matches schema',
        );
    for (const node of data.filter((d) =>
      ['BreadcrumbList', 'ItemList'].includes(d['@type']),
    ))
      for (const item of node.itemListElement) {
        const url = item.item || item.url;
        check(
          url && locations.includes(url),
          path + ': structured linked entity exists ' + url,
        );
      }
    for (const node of data.filter((d) => d['@type'] === 'BreadcrumbList'))
      check(
        node.itemListElement.length >= 2,
        path + ': valid breadcrumb length',
      );
  }
  const warnings = [];
  if (index && !metaValue('og:image'))
    warnings.push(
      'No social image: intentionally not commissioned; social title/description present.',
    );
  if (index && !data.find((d) => d['@type'] === 'Organization')?.sameAs)
    warnings.push('Verified external identity profiles still missing.');
  const page = {
    path,
    classification: index ? 'public-index' : 'public-noindex',
    status: response.status,
    title,
    description,
    canonical,
    robots: robotsMeta,
    h1: clean(main.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1] || ''),
    textLength: text.length,
    textHash: hash(text),
    headings: [...main.matchAll(/<(h[1-6])\b[^>]*>([\s\S]*?)<\/\1>/gi)].map(
      (m) => [m[1], clean(m[2])],
    ),
    images,
    types,
    internalLinks: links.filter((href) => href.startsWith('/')),
    ids: [...ids],
    warnings,
  };
  pages.push(page);
  visibleByPath.set(path, text);
}
check(
  new Set(pages.map((p) => p.title)).size === pages.length,
  'all titles unique',
);
check(
  new Set(pages.map((p) => p.description)).size === pages.length,
  'all descriptions unique',
);
const pathSet = new Set(pages.map((p) => p.path));
for (const page of pages)
  for (const href of page.internalLinks) {
    const link = new URL(decode(href), canonicalOrigin);
    if (
      link.pathname.startsWith('/assets/') ||
      link.pathname.startsWith('/project-images/') ||
      link.pathname.startsWith('/fonts/')
    )
      continue;
    check(pathSet.has(link.pathname), page.path + ': link resolves ' + href);
    if (link.hash && pathSet.has(link.pathname))
      check(
        pages
          .find((p) => p.path === link.pathname)
          .ids.includes(decodeURIComponent(link.hash.slice(1))),
        page.path + ': anchor resolves ' + href,
      );
  }
const discovered = new Map([['/', 0]]);
const queue = ['/'];
while (queue.length) {
  const path = queue.shift();
  for (const href of pages.find((p) => p.path === path)?.internalLinks || []) {
    const next = new URL(decode(href), canonicalOrigin).pathname;
    if (pathSet.has(next) && !discovered.has(next)) {
      discovered.set(next, discovered.get(path) + 1);
      queue.push(next);
    }
  }
}
check(
  indexPaths.every((path) => discovered.has(path)),
  'all index pages discoverable through HTML links from homepage',
);
for (const page of pages) page.crawlDepth = discovered.get(page.path) ?? null;
const crawlers = {
  GooglebotMobile:
    'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  'OAI-SearchBot': 'OAI-SearchBot/1.0; +https://openai.com/searchbot',
};
const crawlerParity = [];
for (const [name, userAgent] of Object.entries(crawlers))
  for (const path of indexPaths) {
    const { response, html } = await get(path, {
      headers: { 'User-Agent': userAgent },
    });
    const same =
      clean(html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || '') ===
      visibleByPath.get(path);
    check(
      response.status === 200 && same,
      path + ': server-content parity for ' + name,
    );
    crawlerParity.push({ path, crawler: name, status: response.status, same });
  }
const legacyProject = await fetch(origin + '/projekte/prime-energie', { redirect: 'manual' });
check(legacyProject.status === 308, 'legacy energy project: permanent redirect');
check(new URL(legacyProject.headers.get('location'), origin).pathname === '/projekte/entwurf-energie', 'legacy energy project: current destination');
const missingPaths = [
  '/no-such-page',
  '/checkout/no-such-package',
  '/projekte/no-such-project',
  '/wissen/no-such-article',
  '/websites/no-such-industry',
  '/project-images/no-such-image.webp',
  '/project-images/entwurf-energie-desktop.webp?v=outdated',
  '/project-images/prime-energie-desktop.webp',
  '/project-images/prime-energie-mobile.webp',
];
for (const path of missingPaths)
  check((await get(path)).response.status === 404, path + ': actual 404');
const variations = [];
for (const path of [
  '/websites/',
  '/website-erstellen-lassen?utm_source=seo-verification',
  '/wissen/website-briefing?test=1',
]) {
  const { response, html } = await get(path);
  const canonical = tags(html, 'link').find((l) => l.rel === 'canonical')?.href;
  const expected = canonicalOrigin + path.split('?')[0].replace(/\/$/, '');
  check(
    response.status === 200 && canonical === expected,
    path + ': canonical duplicate handling',
  );
  variations.push({ path, status: response.status, canonical });
}
const assetResults = [];
for (const [path, value] of assets) {
  const response = await fetch(origin + path, {
    method: 'HEAD',
    signal: AbortSignal.timeout(20000),
  });
  check(
    response.status === 200 &&
      (response.headers.get('content-type') || '').startsWith('image/'),
    path + ': image available',
  );
  let unchanged = null;
  let conditionalStatus = null;
  if (path.startsWith('/project-images/')) {
    const imageResponse = await fetch(origin + path, {
      signal: AbortSignal.timeout(20000),
    });
    const bytes = Buffer.from(await imageResponse.arrayBuffer());
    const file = new URL(path, origin).pathname.split('/').pop();
    const originalPath = 'public/assets/projects/' + file;
    const original = readFileSync(
      existsSync(originalPath)
        ? originalPath
        : 'public/assets/project-variants/' + file,
    );
    unchanged = hash(bytes) === hash(original);
    check(unchanged, path + ': exact build-asset bytes');
    check(
      imageResponse.headers.get('content-type') === 'image/webp' &&
        bytes.toString('ascii', 0, 4) === 'RIFF' &&
        bytes.toString('ascii', 8, 12) === 'WEBP',
      path + ': WebP media type and signature',
    );
    const etag = imageResponse.headers.get('etag');
    check(
      etag === response.headers.get('etag'),
      path + ': HEAD and GET ETag match',
    );
    const conditional = await fetch(origin + path, {
      headers: { 'If-None-Match': etag || '' },
    });
    conditionalStatus = conditional.status;
    check(conditional.status === 304, path + ': conditional image cache');
    if (new URL(path, origin).searchParams.has('v'))
      check(
        /max-age=31536000, immutable/.test(
          imageResponse.headers.get('cache-control') || '',
        ),
        path + ': versioned immutable image cache',
      );
  }
  assetResults.push({
    path,
    ...value,
    status: response.status,
    contentType: response.headers.get('content-type'),
    bytes: response.headers.get('content-length'),
    unchanged,
    conditionalStatus,
  });
}
check(
  (await get('/api/website-anfrage')).response.status === 405,
  'private lead API exposes no GET records',
);
// Fresh random recheck after the complete route pass. Re-read rendered output,
// not saved text; retained list makes the scope reproducible in the report.
const sample = [];
const candidates = [...indexPaths];
while (sample.length < Math.max(3, Math.ceil(indexPaths.length * 0.15)))
  sample.push(candidates.splice(randomInt(candidates.length), 1)[0]);
for (const path of sample) {
  const { response, html } = await get(path);
  const text = clean(html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || '');
  check(
    response.status === 200 &&
      hash(text) === pages.find((p) => p.path === path).textHash,
    path + ': fresh random recheck',
  );
}
writeFileSync(
  output,
  JSON.stringify(
    {
      origin,
      canonicalOrigin,
      checkedAt: new Date().toISOString(),
      indexCount: indexPaths.length,
      noindexCount: noindexPaths.length,
      pages,
      sitemap: { status: sitemapResponse.status, locations },
      robots,
      assets: assetResults,
      crawlerParity,
      real404s: missingPaths,
      variations,
      randomRecheck: sample,
      limitations: [
        'Mobile user-agent parity verifies server content, not browser viewport layout.',
        'No field CWV data, Search Console indexing result, or ranking proof is inferred.',
        'No verified business profile URLs or complete legal identity supplied.',
      ],
      failures,
    },
    null,
    2,
  ),
);
console.log(
  JSON.stringify(
    {
      indexPages: indexPaths.length,
      noindexPages: noindexPaths.length,
      assets: assets.size,
      crawlerComparisons: crawlerParity.length,
      maxCrawlDepth: Math.max(
        ...indexPaths.map((p) => discovered.get(p) ?? 99),
      ),
      randomRecheck: sample,
      failures,
    },
    null,
    2,
  ),
);
process.exitCode = failures.length ? 1 : 0;
