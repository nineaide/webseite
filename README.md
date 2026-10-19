# Nine.ai

German website for web design, web development, Google Ads and automation. Current design rules and revision history: `Design.md`. Public Sites project `appgprj_6a9c5aadc2bc819194a07b6d2c80e9b0`.

## Current experience

- Four website offers: Nine Start 1,990 EUR net, Launch 6,900, Growth 12,900 and Nine X on request. The homepage is compact and retains real examples and the responsive preview.
- The advertising landing page `/website-erstellen-lassen` places the inquiry form early. Its repeated lower package block was removed; curated customer references, LiquidMark and smooth FAQ remain.
- All HTML pages share the same footer. “Persönliches Angebot erhalten” links to the server-backed inquiry form; confirmed receipt changes the footer to thanks for the current browser session. Drafts and errors do not mark an inquiry received.
- Genuine team portraits can be added in `app/team-data.ts`. No team names, photos, phone number, customer reviews, legal identity or verified profile URLs have been invented.

The Tailwind source list in `app/globals.css` covers the application and its five used UI primitives (including the dialog's button dependency). When importing another UI component, add its source and any UI dependencies there. Unused library components and research files are intentionally excluded from the blocking stylesheet. The Liquid mark keeps its server-rendered SVG fallback and initializes its WebGL surface only when the section comes within 200 px of the viewport; pause, reduced motion and offscreen animation stopping remain available.

- Nine approved customer projects have desktop/mobile captures and independent detail pages. ParkeSicher and Café system images remain anonymized. Website examples do not imply measured Ads or revenue results.

## Architecture

React 19 / TypeScript / Vinext / Cloudflare Worker; D1 stores submitted website inquiries. `app/[...slug]/page.tsx` selects existing and editorial pages. `app/content` contains service details, case studies and guides. `lib/seo-pages.ts` is the public-index route registry; `app/sitemap.xml/route.ts` builds its XML sitemap.

39 indexable pages and 9 public noindex pages are documented in `ROUTES-INVENTORY.md`. Unknown page patterns return real 404s. Canonicals use the existing working Sites origin in `lib/site-identity.ts`; change it only when the intended own domain is confirmed and connected, and update the sitemap URL in `public/robots.txt` at the same time. No own domain was configured at the last inspection.

Four local Cabinet Grotesk fonts use explicit preload, content-addressed WOFF2 routes and immutable caching. Native anchors preserve full server-rendered navigation. Editorial content requires no client JavaScript to read. Responsive rules retain a single-column mobile layout for long content and package cards.

Project images use `/project-images/[file]` because the hosted static layer otherwise labels WebP files as application/octet-stream. The server-only route imports approved source images and their responsive encodings at build time, whitelists filenames and supplies image/webp and a content-based ETag. It supports HEAD/304 and rejects unknown files and mismatched version hashes. Image bytes are not embedded in page HTML or client JavaScript.

`npm run prepare:images` uses pinned build-time Sharp to create 45 smaller encodings from the 27 unchanged originals. Generated files live separately in `public/assets/project-variants`; `app/project-image-manifest.json` records actual pixel widths, sizes and content hashes. Native `srcset`/`sizes` selects the matching download. The original full resolution remains available. Versioned URLs receive a one-year immutable cache; legacy unversioned URLs keep a one-hour cache. Rebuild regenerates the manifest whenever an image changes.

## Validation

```sh
npm run dev
npx tsc --noEmit
npx oxlint app lib scripts/verify-seo.mjs
npm run build
npm run verify:images
npm run start -- --port 3001
node scripts/verify-seo.mjs http://localhost:3001 design/seo/verified-local.json
node scripts/verify-rendering.mjs http://localhost:3001 design/seo/ssr-fonts-local.json
```

Restart the local production worker after rebuilding: its previously loaded manifest may refer to removed asset/module paths. The first verifier covers all 48 HTML routes, both crawler user agents, internal link discovery, image MIME/signatures/build-asset equality/conditional caching, responsive candidates, sitemap, schema, seven 404 patterns and a fresh random recheck. `verify:images` independently decodes every image candidate and checks dimensions, aspect ratio, version hash and transfer savings. The older rendering verifier intentionally covers the original 20 routes and font-cache behavior only. Neither HTTP verifier claims browser layout testing or field Core Web Vitals. Additional Google PageSpeed mobile lab reports cover five selected live URLs; source report URLs, metrics and lead-page follow-ups are stored in `design/seo/pagespeed-mobile-lab.json`. All five report no real-user data. The lab contrast finding was corrected; eager main reference previews receive high fetch priority.

Audit evidence and calculated readiness scores: `SEO-AUDIT-PROGRESS.md`, `design/seo/`. Real Keyword-Planer data, query intent and limits are documented separately. These are technical readiness checks, not ranking or conversion guarantees.

## Inquiry and launch dependencies

`/api/website-anfrage` accepts and stores website inquiries in private D1. The configured business recipient is anfrage@nineai.de. Automatic email delivery requires `LEAD_RESEND_API_KEY` and `LEAD_EMAIL_FROM`; hosting runtime values are managed through Sites and must never be committed. The other project/checkout forms remain local drafts; the owner explicitly deferred payment integration.

No Google Ads/Meta pixels or active conversion tags are installed. A local custom event hook exists for later integration. Complete business/legal information, a verified main domain, Search Console/Bing ownership, genuine reviews and team photos remain owner inputs. The Google Partner badge stays hidden until an approved real badge/profile is supplied.

Publishing: build and verify, commit the exact source, push with a short-lived per-command credential, package using the Sites helper, save a version, deploy within the existing public audience, wait for success and re-fetch the live routes. Preserve the same Site and browser tab.

## Cloudflare deployment from GitHub

Live deployment: [nineai-webseite.team-41d.workers.dev](https://nineai-webseite.team-41d.workers.dev/).

`wrangler.cloudflare.json` configures the independent `nineai-webseite` Worker and its D1 database. Use `npm run build:cloudflare` to build this target, then `npm run deploy:cloudflare` to deploy the generated Worker. The deploy command checks that the built Worker, account and database match the source configuration. The default `npm run build` still builds for the existing Sites hosting.

Workers Builds is connected to `nineaide/webseite`. Pushes to `main` are configured to automatically build and deploy `nineai-webseite` using these settings:

| Setting                    | Value                       |
| -------------------------- | --------------------------- |
| Production branch          | `main`                      |
| Root directory             | `/`                         |
| Build command              | `npm run build:cloudflare`  |
| Deploy command             | `npm run deploy:cloudflare` |
| Build environment variable | `NODE_VERSION=24.15.0`      |
| Preview builds             | Disabled                    |

Initialize the remote D1 schema deliberately with `npm run db:migrate:cloudflare`, using credentials with D1 edit permission. Apply any new migrations explicitly before deploying code that depends on them. Migrations are deliberately kept separate from automatic deployments so that schema changes can be reviewed before they run.

For a local production preview, initialize the local schema with `npx wrangler d1 migrations apply DB --local --config wrangler.cloudflare.json`, then run `npm run start -- --persist-to .wrangler/state`. The explicit persistence directory makes the source-config migrations and built-config server use the same local database.

Configure `LEAD_RESEND_API_KEY` and `LEAD_EMAIL_FROM` separately in the Worker's runtime settings; never commit their values. These email settings are currently missing here and in the existing Sites deployment. Without them, accepted inquiries remain stored in D1 with a pending notification instead of being emailed.

This Worker provides an additional live link. Canonicals and the sitemap origin continue to point to `https://nine-ai-studio.serhad1999.chatgpt.site/`; do not change the primary origin merely to add this deployment.
