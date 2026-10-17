# SEO audit — https://nine-ai-studio.serhad1999.chatgpt.site

_Generated 2026-09-06T13:59:35.699Z · 1 pages fetched · seo-audit 1.0.0_

## SEO Score: 45/100

1 pages scored. Site-level penalty: 15.

| Severity | Count | Meaning |
|---|---:|---|
| P1 | 2 | Crawl or index blocker — the page may not be indexed at all |
| P2 | 0 | Indexed but misrepresented |
| P3 | 5 | Hygiene |

Caveat: this is a technical SEO readiness score, not a ranking or traffic guarantee. Off-page factors — backlinks, content quality, competition — are out of scope and are not measured here.

## Findings

### P1 — blockers (2)

- **`User-agent: * / Disallow: /` blocks the entire site from every crawler. If this is production, nothing can be crawled.**
  - `/robots.txt`
  - Rule: `docs/12`
- **Page is `noindex`. If this is production and the page is meant to rank, this alone keeps it out of the index.**
  - `/`
  - Rule: `docs/01`

### P2 — misrepresentation

None.

### P3 — hygiene (5)

- **No `Sitemap:` line in robots.txt. It is the one discovery hint every engine reads without being asked.**
  - `/robots.txt`
  - Rule: `docs/06`
- **robots.txt takes no explicit position on AI crawlers. Training, AI-search and user-triggered fetching are three different decisions; defaulting silently is not one of them.**
  - `/robots.txt`
  - Rule: `docs/10`
- **http:// answers 302; a permanent move should be 301.**
  - `http://`
  - Rule: `docs/01`
- **Incomplete Open Graph (missing og:title or og:image). Not a ranking factor; it is the whole preview on every share surface.**
  - `/`
  - Rule: `docs/01`
- **No JSON-LD. Structured data does not raise rankings, but it is how the entities on the page are stated unambiguously.**
  - `/`
  - Rule: `docs/08`


## Pages fetched

- `/` — 200 — Nine.ai — Websites, Google Ads & Automatisierung
