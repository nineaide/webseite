# Routeninventar · 08.09.2026

48 HTML-Seiten: **39 public-index**, **9 public-noindex**. Einzelsprachig Deutsch; hreflang nicht erforderlich. Öffentliche Suchseiten unter der vorhandenen HTTPS-Adresse, Formulare und Rechtsseiten bewusst nicht im Index.

Alle indexierbaren Seiten sind über HTML-Links ab der Startseite in höchstens drei Schritten erreichbar. Evidenz: `design/seo/verified-live.json`.

| Route | Kategorie | Thema | Tiefe ab Start |
|---|---|---|---:|
| `/wissen` | public-index | Gute Entscheidungen. Ein klarer Start. | 1 |
| `/` | public-index | Eine Website, die Kunden für dich gewinnt. | 0 |
| `/loesungen` | public-index | Was können wir für dich tun? | 1 |
| `/websites` | public-index | Dein Angebot ist gut. Zeigen wir es. | 1 |
| `/website-erstellen-lassen` | public-index | Deine neue Website. Alles außer gewöhnlich. | 1 |
| `/projekte` | public-index | Gute Arbeit. Zum Ansehen. | 1 |
| `/pakete` | public-index | Deine neue Website. Dein klarer Festpreis. | 1 |
| `/ueber-nine` | public-index | Du machst dein Geschäft. Wir kümmern uns um deinen Auftritt. | 1 |
| `/plattformen-web-apps` | public-index | Deine Idee. Eine eigene Anwendung. | 2 |
| `/google-ads-growth` | public-index | Google Ads. Passende Anfragen. | 2 |
| `/ki-automation` | public-index | Wiederkehrende Arbeit. Ein klarer Ablauf. | 2 |
| `/plattformen-web-apps/buchungssysteme` | public-index | Online buchen. Im Betrieb den Überblick behalten. | 2 |
| `/plattformen-web-apps/kundenportale` | public-index | Alles an einem Ort. Für jeden die richtige Ansicht. | 2 |
| `/plattformen-web-apps/bestellsysteme-gastronomie` | public-index | Vom Tisch zur Küche. Mit allem, was dazugehört. | 2 |
| `/plattformen-web-apps/konfiguratoren` | public-index | Die passende Auswahl. Aus vielen Möglichkeiten. | 3 |
| `/plattformen-web-apps/schnittstellen` | public-index | Einmal erfassen. Am richtigen Ort weiterarbeiten. | 3 |
| `/google-ads-growth/suchanzeigen` | public-index | Gefunden werden, wenn dein Angebot gefragt ist. | 3 |
| `/google-ads-growth/landingpages` | public-index | Ein Klick. Ein klares Angebot. | 3 |
| `/google-ads-growth/conversion-tracking` | public-index | Was wurde angefragt? Was wurde daraus? | 3 |
| `/ki-automation/prozessautomatisierung` | public-index | Weniger doppelte Arbeit. Mehr Überblick im Ablauf. | 3 |
| `/ki-automation/ki-assistenten` | public-index | Wissen finden. Antworten mit Grundlage. | 3 |
| `/websites/dienstleister` | public-index | Deine Leistung. Schnell verstanden. | 2 |
| `/websites/handwerk` | public-index | Gute Arbeit. Ein Auftritt, der sie zeigt. | 2 |
| `/websites/gastronomie` | public-index | Vorfreude wecken. Den Besuch einfach machen. | 2 |
| `/projekte/parkesicher` | public-index | ParkeSicher. Von der Suche bis zum Betrieb. | 1 |
| `/projekte/un-petit-cafe` | public-index | Un Petit Café. Vom ersten Eindruck bis zur Küche. | 1 |
| `/projekte/mb-performance` | public-index | MB Performance. Das passende Fahrzeug im Mittelpunkt. | 2 |
| `/projekte/meister-lorenz` | public-index | Meister Lorenz. Das Anliegen schnell verstanden. | 1 |
| `/projekte/prime-energie` | public-index | PRIME ENERGIE. Ein klarer Weg zur Tarifberatung. | 2 |
| `/projekte/mrcarkey` | public-index | Mr. CarKey. Die passende Hilfe schnell finden. | 2 |
| `/projekte/gardentime` | public-index | Garden Time Frankfurt. Mehrere Leistungen. Ein klarer Einstieg. | 2 |
| `/projekte/loni-galabau` | public-index | Loni GalaBau. Raum für sichtbare Arbeit. | 2 |
| `/projekte/dirik-autopflege` | public-index | Dirik Autopflege. Fahrzeugpflege sichtbar machen. | 2 |
| `/wissen/was-kostet-eine-website` | public-index | Was kostet deine neue Website? | 2 |
| `/wissen/website-relaunch-checkliste` | public-index | Neue Website. Gut vorbereiteter Wechsel. | 2 |
| `/wissen/web-app-oder-standardsoftware` | public-index | Software auswählen. Vom Alltag aus denken. | 2 |
| `/wissen/buchungssystem-planen` | public-index | Damit aus „gebucht“ ein klarer Ablauf wird. | 2 |
| `/wissen/google-ads-budget-planen` | public-index | Werbung planen. Mit nachvollziehbaren Zahlen. | 2 |
| `/wissen/website-briefing` | public-index | Deine Website planen. Mit den richtigen Angaben. | 2 |
| `/projekt-starten` | public-noindex | Was können wir für dich tun ? | 1 |
| `/checkout/nine-launch` | public-noindex | Gute Entscheidung. Jetzt wird es konkret. | 2 |
| `/checkout/nine-growth` | public-noindex | Gute Entscheidung. Jetzt wird es konkret. | 2 |
| `/checkout/platform-discovery` | public-noindex | Deine Web-App zuerst planen . | 2 |
| `/checkout/custom-platform` | public-noindex | Deine Plattform bauen . | 2 |
| `/checkout/nine-scale` | public-noindex | Deine Google-Werbung . | 2 |
| `/impressum` | public-noindex | Impressum | 1 |
| `/datenschutz` | public-noindex | Datenschutz | 1 |
| `/agb` | public-noindex | AGB | None |

## Weitere Endpunkte

| Route | Zweck / Zugriff | Sitemap |
|---|---|---|
| `/api/website-anfrage` | Öffentlicher POST-Anfrageeingang, keine öffentliche Datenlese-API; GET 405, Crawler gesperrt. Private Daten in D1. | Nein |
| `/fonts/[file]` | Öffentliche statische WOFF2-Dateien, unveränderlicher Cache; unbekannte Dateien 404. | Nein |
| `/project-images/[file]` | Unveränderte Originale und kleinere WebP-Varianten; expliziter MIME-Typ und ETag. Mit passendem `?v=`-Inhaltshash ein Jahr Cache, sonst eine Stunde; unbekannte Dateien und falsche Hashes 404. | Ausgewählte Originalbilder über image:loc |
| `/assets/**` | Öffentliche Marken- und weitere Website-Assets; ursprüngliche Projektdateien bleiben als Build-Quelle erhalten. | Nein |
| `/sitemap.xml` | XML mit den 39 indexierbaren Seiten und tatsächlichem Inhaltsstand. | – |
| `/robots.txt` | Öffentliche Suche erlaubt, API gesperrt, separate KI-Retrieval-/Trainingsregeln. | – |
| Unbekannte URLs | Echter HTTP-Status 404 je geprüftem Routentyp. | Nein |

## Absicht der nicht indexierten Seiten

Projekt- und Bestellabläufe sind kein eigenständiger Suchinhalt. Die drei Rechtsseiten enthalten bis zum Eingang tatsächlicher Unternehmensdaten noch offene Angaben. `noindex` ersetzt keinen Zugriffsschutz; diese neun Seiten bleiben öffentlich lesbar, damit Formular- und Fußzeilenlinks funktionieren. Keine privaten Anfragedaten werden durch diese Seiten ausgeliefert.

## Gültiger Bestand vor diesem Ausbau

20 HTML-Routen, davon 11 für die spätere öffentliche Suche vorgesehen; ausgeliefert wurden alle noch mit noindex/nofollow und leerer Sitemap. Die 28 neuen indexierbaren Seiten ergänzen den Bestand. Belege in `design/seo/baseline-pages.json`.
