# SSR und Schriftladen — 06.09.2026

Die Website ist seit der letzten Zugriffsfreigabe öffentlich erreichbar. Ihre Suchmaschinen-Sperre ist davon unabhängig und bleibt bis zur Antwort auf die laufende Indexierungsfrage bestehen. Alle 19 Routen sind derzeit `public-noindex`.

## Änderungen

| Vorher | Nachher | Warum |
|---|---|---|
| Route-Metadaten konnten im Body nachgeliefert werden | Metadaten werden vor Ausgabe aufgelöst und im `<head>` ausgeliefert | Titel, Beschreibung und Canonical sind ohne JavaScript direkt lesbar |
| Font-Dateien unter `/assets/` mit Revalidierung bei jeder Navigation | Vier genutzte Gewichte mit inhaltsabhängigen Dateinamen unter `/fonts/` | Ein eigener Font-Endpunkt liefert ein Jahr Browser-Caching; geänderte Dateien erhalten neue URLs |
| `font-display: swap`, erst nach CSS entdeckt | Font-Preloads plus Font-CSS bereits im Server-HTML; `font-display: optional` | Keine späte Ersetzung bereits sichtbarer Ersatzschrift |
| Prüfung kontrollierte H1, aber keinen scriptbereinigten Hauptinhalt | Wiederholbare SSR-Prüfung aller 19 Seiten, drei Crawlervergleiche und drei 404-Fälle | Texte müssen tatsächlich HTML sein, Daten in JavaScript-Payloads zählen nicht |

## Nachweise

Produktionsbuild lokal auf Port 3001 geprüft; vollständige Daten in `ssr-rendering.json` und `route-validation.json`. Vier gültige WOFF2-Dateien, zusammen 81096 Bytes, stimmen mit ihren Preload-URLs überein. Cache-Control jeweils `public, max-age=31536000, immutable`.

Die erste Live-Prüfung bestätigte SSR und Metadaten auf allen 19 Seiten, zeigte jedoch, dass Sites die generierte statische `_headers`-Regel nicht übernimmt. Deshalb liefert `/fonts/[file]` die vier gebündelten Dateien mit expliziten Response-Headern aus. Nur bekannte Dateinamen sind erlaubt. Die Bytefolgen entsprechen exakt den Quelldateien; HEAD und bedingte Anfragen mit ETag werden ebenfalls geprüft. Die Base64-Quelldaten bleiben im Servermodul und werden nicht ins HTML eingebettet. Die Live-Prüfung des korrigierten Font-Endpunkts folgt nach Veröffentlichung über dasselbe Prüfskript.

| Route | HTTP | Lesbare Zeichen im main ohne Scripts/Styles/SVG | Ergebnis |
|---|---:|---:|---|
| / | 200 | 7906 | Kopf vollständig, 4 Font-Preloads |
| /loesungen | 200 | 1984 | Kopf vollständig, 4 Font-Preloads |
| /plattformen-web-apps | 200 | 2262 | Kopf vollständig, 4 Font-Preloads |
| /websites | 200 | 7103 | Kopf vollständig, 4 Font-Preloads |
| /ki-automation | 200 | 2250 | Kopf vollständig, 4 Font-Preloads |
| /google-ads-growth | 200 | 2238 | Kopf vollständig, 4 Font-Preloads |
| /projekte | 200 | 1983 | Kopf vollständig, 4 Font-Preloads |
| /projekte/parkesicher | 200 | 1680 | Kopf vollständig, 4 Font-Preloads |
| /pakete | 200 | 5884 | Kopf vollständig, 4 Font-Preloads |
| /ueber-nine | 200 | 1464 | Kopf vollständig, 4 Font-Preloads |
| /projekt-starten | 200 | 952 | Kopf vollständig, 4 Font-Preloads |
| /checkout/nine-launch | 200 | 1743 | Kopf vollständig, 4 Font-Preloads |
| /checkout/nine-growth | 200 | 1776 | Kopf vollständig, 4 Font-Preloads |
| /checkout/platform-discovery | 200 | 1262 | Kopf vollständig, 4 Font-Preloads |
| /checkout/custom-platform | 200 | 1260 | Kopf vollständig, 4 Font-Preloads |
| /checkout/nine-scale | 200 | 1225 | Kopf vollständig, 4 Font-Preloads |
| /impressum | 200 | 816 | Kopf vollständig, 4 Font-Preloads |
| /datenschutz | 200 | 955 | Kopf vollständig, 4 Font-Preloads |
| /agb | 200 | 668 | Kopf vollständig, 4 Font-Preloads |

Auf `/`, `/websites` und `/projekte` wurde zusätzlich mit mobilem Googlebot-User-Agent abgerufen: gleicher Hauptinhalt wie für normale Anfragen. Dies prüft die HTTP-Inhaltsgleichheit, nicht Googles tatsächliche Indexaufnahme. Alle 19 Seiten besitzen eindeutige Titel, Beschreibungen und Canonicals. Drei nicht vorhandene URLs liefern echte 404.

## Grenzen

Bei einer sehr langsamen ersten Verbindung kann `optional` die Ersatzschrift für diesen Seitenaufruf beibehalten. Sie wird dann nicht mitten im Lesen ausgetauscht; auf späteren Aufrufen kann die gespeicherte Markenschrift verwendet werden. Die Schrift wird weiterhin lokal ausgeliefert. Es wird kein Text bis zum JavaScript-Start versteckt. Keine gemessenen CrUX-, Lighthouse- oder realen iPhone-Werte behauptet.

Der vorhandene SSR-Stack bleibt bestehen; keine Frameworkmigration und keine unterschiedlichen Inhalte für Bots. Metadaten verwenden die vorhandene Vinext-/Next-Konfiguration `htmlLimitedBots: /.*/` für reguläre Browser- und Crawler-User-Agents.

## SEO/GEO-Abdeckung

SEO Score und GEO Score: nicht anwendbar auf einen finalen öffentlichen Indexierungsstand, da aktuell 0 `public-index`-Routen freigegeben sind. 19/19 `public-noindex`-Routen technisch geprüft. Der automatische Ausgangsbericht `seo-ssr-baseline.md` liefert 45/100 für eine einzige Seite unter Annahme eines indexierbaren Auftritts und ist ausdrücklich kein finaler Website-Score.

| Kategorie | Stand |
|---|---|
| Crawling/Indexierung/Sitemap | Weiterhin absichtlich gesperrt; Nutzerentscheidung ausstehend |
| Server-HTML/Metadaten/Canonical | 19/19 bestanden |
| Crawler-Inhaltsgleichheit | 3/3 repräsentative Seiten bestanden |
| Echte Fehlerantworten | 3/3 mit HTTP 404 |
| Schriftdateien/Vorladen/Cache | 4/4 lokal nachgewiesen, live nach Veröffentlichung erneut zu prüfen |
| Semantik/interne Links | Ein H1 je Seite, interne Routen auflösbar |
| Entitätsdaten/Schema/Unternehmensnachweise | Nicht Gegenstand dieser SSR-Reparatur; bestätigte Firmendaten fehlen |
| Mobile Feldperformance | Nicht gemessen |

Off-page-Faktoren wie Backlinks, Wettbewerb und tatsächliche Rankings sind nicht geprüft. Search Console und CrUX sind nicht angebunden. Keine Ranking- oder Indexierungsgarantie.

## Quellen

- [Google: JavaScript-SEO und Server-Rendering](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Next: vollständige Metadaten statt Streaming](https://nextjs.org/docs/app/api-reference/config/next-config-js/htmlLimitedBots)
- [web.dev: optionale Schriften und Vorladen](https://web.dev/articles/preload-optional-fonts)
- [web.dev: Schriftoptimierung und Caching](https://web.dev/learn/performance/optimize-web-fonts)
