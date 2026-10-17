# SEO-/GEO-Prüfung · 08.09.2026

**Stand: v29 veröffentlicht; Live-HTML geprüft.**

Abdeckung: **39/39 indexierbare Seiten**, zusätzlich **9/9 öffentliche noindex-Seiten**. Der Gesamtauftrag ist nicht abgeschlossen: echte Suchpositionen, vollständige Unternehmensidentität, eigene Hauptdomain und Messzugänge sind noch nicht nachgewiesen. Die zuletzt erneut geprüften externen Voraussetzungen stehen in `design/seo/external-prerequisites.json`.

## Umfang und Evidenz

- Vollständiger HTTP-Bericht: `design/seo/verified-live.json`. Zeitpunkt: 2026-09-08T02:38:40.988Z.
- 48 Seiten mit HTTP 200, einer H1, eigenem Titel und eigener Beschreibung. 39 XML-Sitemap-URLs; alle in maximal drei HTML-Linkschritten von der Startseite erreichbar.
- 78 Vergleiche mit Googlebot Mobile und OAI-SearchBot: gleicher Hauptinhalt. Das prüft Serverinhalte, nicht die Darstellung bei einer bestimmten Bildschirmbreite.
- 73 verwendete Bild-URLs erreichbar; Alt-Texte und Abmessungen vorhanden. MIME-Typ, WebP-Signatur, exakte Build-Dateien, HEAD/GET-ETag und HTTP 304 nachgeprüft. Die 27 Originalaufnahmen bleiben unverändert; 45 kleinere Varianten erhalten das Seitenverhältnis und vorhandene Anonymisierungen. srcset/sizes stehen im initialen HTML; die vollständige Auflösung bleibt verfügbar.
- Fünf unbekannte HTML-Routentypen, eine unbekannte Bilddatei und eine falsche Bildversion liefern echte 404; drei Seiten-URL-Varianten zeigen das korrekte Canonical. Anfrage-API-GET liefert 405 statt privater Datensätze.
- Produktionsbuild, TypeScript und Lint für app/lib und den SEO-Verifier bestanden. Font-Test für die ursprünglichen 20 Seiten und vier Schriftdateien separat bestanden.
- Zwei Keyword-Planer-Abfragen mit Deutschland/Deutsch/Google, August 2025 bis Juli 2026. 23 relevante sichtbare Zeilen dokumentiert; keine Kampagnen gestartet oder Budgets verändert.
- Zufällige frische Nachprüfung nach dem Gesamtcrawl: `/google-ads-growth/landingpages`, `/plattformen-web-apps/schnittstellen`, `/websites/gastronomie`, `/plattformen-web-apps`, `/plattformen-web-apps/buchungssysteme`, `/websites`.

## Neun Prüfpunkte pro indexierbarer Seite

M = Metadaten, C = Canonical/Host, R = Robots, D = strukturierte Daten, H = H1/Semantik, I = Bilder, L = HTML-Links, S = SSR/404, X = Sitemap. `✓*` bedeutet: Seitenprüfung bestanden, gemeinsame Einschränkung aus dem Backlog bleibt. Deutsch-only; hreflang entfällt. Für die Startseite ist ein Breadcrumb bewusst nicht anwendbar: Google verlangt mindestens zwei ListItems, und die Startseite hat keinen echten übergeordneten Pfad.

| Route | M | C | R | D | H | I | L | S | X |
|---|---|---|---|---|---|---|---|---|---|
| `/wissen` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/loesungen` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/websites` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/website-erstellen-lassen` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/projekte` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/pakete` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/ueber-nine` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/plattformen-web-apps` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/google-ads-growth` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/ki-automation` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/plattformen-web-apps/buchungssysteme` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/plattformen-web-apps/kundenportale` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/plattformen-web-apps/bestellsysteme-gastronomie` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/plattformen-web-apps/konfiguratoren` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/plattformen-web-apps/schnittstellen` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/google-ads-growth/suchanzeigen` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/google-ads-growth/landingpages` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/google-ads-growth/conversion-tracking` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/ki-automation/prozessautomatisierung` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/ki-automation/ki-assistenten` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/websites/dienstleister` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/websites/handwerk` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/websites/gastronomie` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/projekte/parkesicher` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/projekte/un-petit-cafe` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/projekte/mb-performance` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/projekte/meister-lorenz` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/projekte/prime-energie` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/projekte/mrcarkey` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/projekte/gardentime` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/projekte/loni-galabau` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/projekte/dirik-autopflege` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/wissen/was-kostet-eine-website` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/wissen/website-relaunch-checkliste` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/wissen/web-app-oder-standardsoftware` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/wissen/buchungssystem-planen` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/wissen/google-ads-budget-planen` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |
| `/wissen/website-briefing` | ✓* | ✓* | ✓ | ✓* | ✓ | ✓ | ✓ | ✓* | ✓ |

Die neun noindex-Seiten sind aus der Sitemap ausgeschlossen, in robots.txt aber abrufbar; so kann ihr noindex gelesen werden. Noindex ist kein Zugriffsschutz. Private Anfragen sind ausschließlich über die dafür vorgesehene Serververarbeitung zugänglich.

## Priorisierter Status

- **P1 erledigt:** vorherige globale Crawl-/Indexierungssperre und leere Sitemap für öffentliche Inhalte korrigiert. Keine P1-Fehler im aktuellen HTTP-Verifier.
- **Live-Bildauslieferung korrigiert:** v25 lieferte 27 gültige WebP-Dateien über die statische Hosting-Schicht als application/octet-stream. Aktive HTML-/Sitemap-/Schema-Bildpfade verwenden jetzt den eigenen serverseitigen Bildendpunkt mit image/webp. Die Dateien selbst sind unverändert.
- **P2 offen, externe Identität:** tatsächliche Firmierung/Anschrift/Verantwortlicher und freigegebene Unternehmensprofile fehlen. Keine erfundenen sameAs-, Person-, LocalBusiness-, Review- oder Rating-Daten eingesetzt. Quelle: Skill docs/08, docs/14 und docs/17.
- **P2 Nachweis offen:** eigene Hauptdomain noch nicht verbunden; keine Nine.ai-Property im geöffneten Search-Console-Zugang. Indexierung, Positionen, Anfragen und später qualifizierte Leads müssen am tatsächlichen Ziel gemessen werden. Quelle: docs/15.
- **P3 Plattform:** HTTP→HTTPS ist ein 302 ohne zusätzliche Kette. Der Worker erhält bereits HTTPS; dieser Plattformstatus ist nicht durch eine lokale Weiterleitung zu beheben. Quelle: docs/12–13.
- **P3 bewusst ausgenommen:** Social-Preview-Bilder wurden nicht beauftragt; vorhandene OG-/Twitter-Texte sind korrekt. Kein zusätzlicher Rankinggewinn wird aus einem Social-Bild abgeleitet.
- **Prüfgrenze:** keine eigene mobile/desktop Browser-DOM-Gegenüberstellung oder vollständige manuelle Interaktionsprüfung. Responsive Quellregeln und mobile Crawler-Inhalte geprüft. Kein SEO-Live-Datenconnector verfügbar. Die zusätzlich geöffneten PageSpeed-Berichte liefern Labormessungen, aber ausdrücklich keine Nutzungs-/CrUX-Daten.
- **GEO-Policy:** OAI-SearchBot, PerplexityBot und Claude-SearchBot dürfen öffentliche Inhalte abrufen; Trainingscrawler bleiben gesperrt. Google-Extended betrifft auch bestimmte Gemini-Grounding-Verwendungen. Diese Einschränkung wird nicht als vollständige Freigabe aller KI-Produkte dargestellt.

## Berechnete Bereitschaftswerte

**SEO: 90/100 — vorläufig, 39/39 Seiten per HTML geprüft.**

| Kategorie | Punkte | Begründung |
|---|---:|---|
| Indexierung & Crawling | 24/25 | Robots 5/5, Canonical 5/5, Sitemap 5/5, Status/Linkziele 5/5, Host 4/5: Sites leitet HTTP mit 302 auf HTTPS um; nicht im Worker steuerbar. |
| SSR & mobile Inhalte | 18/20 | Primärinhalt im HTML 10/10, echte 404 5/5, mobile Bot-Inhalte identisch 3/3; separate mobile Browser-DOM-Prüfung 0/2, hier nicht durchgeführt. |
| Strukturierte Daten | 12/15 | WebPage 4/4, anwendbare Breadcrumbs 3/3, Seitentypen 3/3, konsistente Organization 2/2; verifizierte externe Identitätsprofile 0/3. |
| Metadaten | 18/20 | Eindeutige Titel 6/6, Beschreibungen 6/6, OG/Twitter-Text und URL 6/6; Social-Bild 0/2, bewusst nicht beauftragt. Deutsch-only: i18n-Punkte hier enthalten. |
| Semantik & Links | 10/10 | H1 3/3, semantische Bereiche 3/3, HTML-Verlinkung/Erreichbarkeit 4/4; keine Pagination, UGC oder bezahlten Fremdlinks vorhanden. |
| Bilder | 5/5 | Alt 2/2, feste Abmessungen 2/2, im Quelltext passende Ladeprioritäten 1/1. Bild-MIME, Originalbytes und Cache geprüft; keine neue visuelle Ansichtsmessung. |
| Core Web Vitals — Feldnachweis offen | 3/5 | Reservierte Bildflächen 1, lokale gecachte Fonts 1, begrenzte/pausierbare Bewegung 1. Zusätzliche mobile PageSpeed-Labormessungen ersetzen keinen Feldnachweis: 0/2 für ungemessene Feld-LCP/CLS/INP. |

**GEO: 90/100 — vorläufig.**

| Kategorie | Punkte | Begründung |
|---|---:|---|
| KI-Crawler-Regeln | 20/20 | Retrieval und Training getrennt konfiguriert. Google-Extended bleibt gesperrt; dadurch auch dessen Gemini-Grounding-Verwendungen. Google Search wird dadurch nicht gesperrt. |
| Auslesbares HTML | 20/20 | 39/39 Seiten ohne JavaScript lesbar; 39/39 OAI-SearchBot-Vergleiche identisch. |
| Inhaltsstruktur | 14/15 | Eigenständige Antworten und Vergleiche, Listen/Tabellen, verlinkte Belege. Einzelne bestehende Verkaufs-Heros bleiben bewusst emotional formuliert. |
| Unternehmensidentität | 12/20 | Organization 4/4, inhaltliche Über-Seite 4/4, sichtbare Redaktion 2/2, verlinktes Autoren-/Unternehmensprofil 2/2; belegte persönliche Qualifikationen 0/2, verifizierte sameAs-Profile 0/6. |
| SEO als Voraussetzung | 14/15 | round(SEO × 0,15); beschreibt technische Voraussetzungen, keine vorhandenen Positionen. |
| Keine unbelegten GEO-Tricks | 10/10 | Keine llms.txt-Abkürzung, erfundenen Bewertungen, unsichtbaren Keyword-Texte oder Stadtseitenserien. |

Berechnung: `scripts/report-seo.py` und `design/seo/scoring.json`. Die Punkte folgen einer konservativen Aufteilung der Kategorien aus Skill docs/11; fehlende Nachweise erhalten keine Vollpunkte.

Ausgangslage v24: 11 vorgesehene Indexseiten, alle durch robots/noindex blockiert. Vorläufige SEO-Baseline 60/100 nach P1-Deckel (Rohkategorien 14+18+0+12+10+5+3=62), GEO 49/100 (0+20+10+0+9+10). Der alte Standardtool-Wert 45/100 erfasste wegen der leeren Sitemap nur die Startseite und ist kein Ganzseitenvergleich. Die Baseline und der neue Mittelwert haben unterschiedliche Seitenumfänge; kein prozentualer Rankingzuwachs wird daraus berechnet.

**Grenzen:** interne technische Bereitschaftswerte, keine Google-Bewertung. Backlinks, inhaltliche Originalität/Qualität, Wettbewerb, reale Rankings und Geschäftserfolg sind nicht in diesen Zahlen enthalten. Weder Indexierung noch erste Suchergebnisse werden garantiert.

## Einordnung des Standard-Audit-Tools

Der zusätzliche Bericht `design/seo/tool-live.md` verwendet einen eigenen, vereinfachten Punktabzug. Dieser Wert ist nicht der oben berechnete SEO-/GEO-Kategoriewert. Seine Einzelhinweise wurden am tatsächlich ausgelieferten HTML und im Tool-Code geprüft:

- Die Meldung „A JSON-LD node has no @type“ zählt je Dokument auch den @graph-Container als eigene Entität. Der Container braucht keinen @type; die darin enthaltenen tatsächlichen Entitäten sind typisiert. Das ist kein Fehler im Schema.
- Gleiche lastmod-Daten sind hier der feste redaktionelle Stand der gemeinsamen Veröffentlichung. Sie werden nicht bei jedem Request auf das aktuelle Datum gesetzt.
- Fehlende OG-Bilder sind eine bewusst nicht beauftragte Social-Vorschau, keine Crawlsperre. Der Plattform-302 ist im offenen Backlog dokumentiert.
- Die tatsächlich gefundenen H1→H3-Sprünge auf /projekte und /pakete wurden mit kontextabhängigen H2-Kartenüberschriften korrigiert, ohne neue sichtbare Textblöcke einzuführen.

## Externe nächste Schritte

1. Gewünschte eigene Hauptdomain bestätigen und anschließen; anschließend Canonicals, Robots-Sitemap-Zeile und Domainvarianten auf das tatsächlich funktionierende Ziel umstellen.
2. Echte Unternehmensangaben, Teamfotos/Namen/Rollen und freigegebene Bewertungs-/Partner-/Unternehmensprofile liefern. Bewertungen nur von den tatsächlich gezeigten Kunden und mit nachvollziehbarer Quelle verwenden.
3. Die passende Search-Console-/Bing-Property verifizieren, Sitemap einreichen und Indexierung der wichtigsten Seiten prüfen. Kein Eigentumsnachweis wurde ohne abgestimmtes Konto eingerichtet.
4. Später Suchanfragen, Positionen, Anfragen und Qualität der Gespräche auswerten. Keine Veränderung an Ads-Budgets oder laufenden Kampagnen ist Bestandteil dieses Ausbaus.

## Initiale Darstellungsarbeit

Die v29-Optimierung begrenzt Tailwind auf die App und die fünf tatsächlich importierten UI-Bausteine inklusive Abhängigkeiten. Das zentrale Stylesheet sinkt von 226.236 auf 88.706 Bytes; unter identischen gzip-Einstellungen von 40.074 auf 17.881 Bytes. Alle 515 eigenen ungeschichteten CSS-Blöcke und das Browser-Reset bleiben identisch. Der Liquid-Effekt initialisiert seine Shader und Distanzfelder erst, wenn sein Abschnitt bis auf 200 Pixel an den sichtbaren Bereich herankommt. Das vorhandene SVG, die Pause und reduzierte Bewegung bleiben erhalten. Nachweis: `design/seo/rendering-payload.json`. Diese Quell- und Build-Prüfung ist kein Feld-CWV-Nachweis.

## Mobile Google-PageSpeed-Stichprobe

Fünf öffentlich zugängliche URLs wurden im Google-PageSpeed-Frontend geprüft. Die API hatte zuvor HTTP 429 geliefert. Diese Labormessung simuliert ein Moto G Power mit langsamem 4G; sie ersetzt weder Feld-CWV noch eine vollständige Browserprüfung. Google meldete für alle fünf URLs „Keine Daten“ bei der tatsächlichen Nutzererfahrung. Reproduzierbare Bericht-URLs und Zeiten stehen in `design/seo/pagespeed-mobile-lab.json`.

| Seite (Baseline v26) | Leistung | A11y | Lighthouse-SEO | LCP (Labor) | CLS (Labor) |
|---|---:|---:|---:|---:|---:|
| [/](https://pagespeed.web.dev/analysis/https-nine-ai-studio-serhad1999-chatgpt-site/cgqg7jsmvq?form_factor=mobile) | 91 | 100 | 100 | 3.2 s | 0 |
| [/website-erstellen-lassen](https://pagespeed.web.dev/analysis/https-nine-ai-studio-serhad1999-chatgpt-site-website-erstellen-lassen/ieaq80k3xu?form_factor=mobile) | 87 | 96 | 100 | 3.3 s | 0 |
| [/google-ads-growth](https://pagespeed.web.dev/analysis/https-nine-ai-studio-serhad1999-chatgpt-site-google-ads-growth/pat20qltb8?form_factor=mobile) | 95 | 100 | 100 | 2.7 s | 0 |
| [/projekte/parkesicher](https://pagespeed.web.dev/analysis/https-nine-ai-studio-serhad1999-chatgpt-site-projekte-parkesicher/j5nigwhc1x?form_factor=mobile) | 93 | 100 | 100 | 2.9 s | 0 |
| [/wissen/was-kostet-eine-website](https://pagespeed.web.dev/analysis/https-nine-ai-studio-serhad1999-chatgpt-site-wissen-was-kostet-eine-website/xklkzncm7t?form_factor=mobile) | 93 | 100 | 100 | 2.9 s | 0 |

Die Lead-Seite zeigte zwei konkrete Befunde: fehlende hohe Ladepriorität des sichtbaren PRIME-ENERGIE-Herobilds und vier zu helle Referenzbeschriftungen. Die Korrektur priorisiert ausschließlich große Einstiegsvorschauen und erhöht den betroffenen Textkontrast auf rechnerisch 7,01:1. Ein einzelner Vorher-/Nachher-Labortest belegt keinen stabilen Performancezuwachs.

Weitere Hinweise: LCP lag in den fünf Ausgangsmessungen bei 2,7–3,3 Sekunden; alle fünf CLS-Werte waren 0. Das ist kein bestandener Feld-CWV-Nachweis. Darauf folgte die Umsetzung kleinerer Bildvarianten: 45 zusätzliche WebP-Größen, native srcset/sizes und mit dem Dateiinhalt versionierte URLs mit einem Jahr Cache. Alte nicht versionierte URLs behalten eine Stunde Cache. Die 27 Originalaufnahmen bleiben unverändert. Weniger CSS im ersten Abruf bleibt eine mögliche weitere Performance-Arbeit. 34 tatsächlich referenzierte CSS-/JS-/Font-Ressourcen aus den fünf Seiten waren in der Ausgangsprüfung live mit korrektem MIME-Typ erreichbar (`critical-resources-live.json`).

Nachprüfung v27: [/website-erstellen-lassen](https://pagespeed.web.dev/analysis/https-nine-ai-studio-serhad1999-chatgpt-site-website-erstellen-lassen/527t2jx0lp?form_factor=mobile) — Leistung 86, A11y 100, Lighthouse-SEO 100, LCP 3.5 s, CLS 0. Feldwerte weiterhin nicht verfügbar.
Nachprüfung v28: [/website-erstellen-lassen](https://pagespeed.web.dev/analysis/https-nine-ai-studio-serhad1999-chatgpt-site-website-erstellen-lassen/nisp0aq78e?form_factor=mobile) — Leistung 94, A11y 100, Lighthouse-SEO 100, LCP 2.9 s, CLS 0. Feldwerte weiterhin nicht verfügbar.
Bildübermittlung v28 (/website-erstellen-lassen): verbleibendes geschätztes Bild-Einsparpotenzial 97 KiB. Die vollständige Bildauflösung bleibt verfügbar. Einzelne Laborscores belegen keinen stabilen Zuwachs unter allen Bedingungen; sämtliche Einzelwerte und gegenläufige Messwerte sind im JSON-Bericht erhalten.
Nachprüfung v29: [/website-erstellen-lassen](https://pagespeed.web.dev/analysis/https-nine-ai-studio-serhad1999-chatgpt-site-website-erstellen-lassen/yprizhknfh?form_factor=mobile) — Leistung 93, A11y 100, Lighthouse-SEO 100, LCP 2.7 s, CLS 0. Feldwerte weiterhin nicht verfügbar.
Bildübermittlung v29 (/website-erstellen-lassen): verbleibendes geschätztes Bild-Einsparpotenzial 97 KiB. Die vollständige Bildauflösung bleibt verfügbar. Einzelne Laborscores belegen keinen stabilen Zuwachs unter allen Bedingungen; sämtliche Einzelwerte und gegenläufige Messwerte sind im JSON-Bericht erhalten.
Nachprüfung v29: [/](https://pagespeed.web.dev/analysis/https-nine-ai-studio-serhad1999-chatgpt-site/ndc5ezafdf?form_factor=mobile) — Leistung 94, A11y 100, Lighthouse-SEO 100, LCP 2.6 s, CLS 0. Feldwerte weiterhin nicht verfügbar.
Bildübermittlung v29 (/): verbleibendes geschätztes Bild-Einsparpotenzial 76 KiB. Die vollständige Bildauflösung bleibt verfügbar. Einzelne Laborscores belegen keinen stabilen Zuwachs unter allen Bedingungen; sämtliche Einzelwerte und gegenläufige Messwerte sind im JSON-Bericht erhalten.

## Primärquellen

- [Google: PageSpeed, Labor- und Felddaten](https://developers.google.com/speed/docs/insights/v5/about)
- [Google: AI-Funktionen und Websites](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: Breadcrumbs, mindestens zwei ListItems](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
- [Google: Google-Extended und andere Crawler](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers)
- [OpenAI: Publisher und Websites](https://help.openai.com/en/articles/12627856)
- [Recherche und Keyword-Planer-Daten](design/seo/keyword-research.md)
