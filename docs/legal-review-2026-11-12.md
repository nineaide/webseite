# Nine.ai: rechtliche und technische Bestandsprüfung mit Umsetzung

Stand: 12. November 2026. Grundlage sind das Repository `webseite`, die vom Auftraggeber mitgeteilten Tatsachen und eine lesende Browserprüfung von `https://www.nineai.de/`. Kein Commit, Push, Deployment oder Zugriff auf produktive Lead-Inhalte. Keine produktive Formularanfrage versendet.

Die Umsetzung ersetzt keine Prüfung der außerhalb des Repositorys geführten Verträge, Freigaben und Kontoeinstellungen. Insbesondere kann sie deren tatsächlichen Abschluss oder die Erreichbarkeit eines Postfachs nicht nachweisen.

## A. Impressum

Verwendet: Nine.ai als Marke/Angebot des Einzelunternehmens **dghWeb – Dariush Ghawss**, Inhaber Dariush Ghawss, Christoph-Rapparini-Bogen 17, 80639 München, Deutschland. Geschäftliche Kontaktadresse `dariush.ghawss@gmail.com`, Website `https://www.nineai.de/`. Keine Handelsregistereintragung. Unternehmenssitz München; Frankfurt bleibt als Nine.ai-Präsenz erhalten.

Der vom Auftraggeber mitgeteilte Kleinunternehmerstatus wird mit dem Hinweis auf § 19 UStG erläutert. Keine persönliche Steuer-ID, Steuernummer, erfundene USt-ID/W-IdNr., Registerdaten, geschäftliche Telefonnummer oder Zulassungsbehörde ergänzt. `anfrage@nineai.de` bleibt Datenschutzkontakt und bestehender Formular-Empfänger. [§ 5 DDG](https://www.gesetze-im-internet.de/ddg/__5.html), [§ 19 UStG](https://www.gesetze-im-internet.de/ustg_1980/__19.html).

Die bisherige allgemeine Behauptung, sämtliche Referenzfreigaben seien nachgewiesen, wurde aus dem Impressum entfernt. Die im Auftrag ausdrücklich bestätigte Einordnung von Entwurf Energie bleibt erhalten. Funktionsprüfungen der Links werden im Testabschnitt dokumentiert; Mailzustellung und Antwortorganisation sind durch einen Linktest nicht belegt.

## B. Datenschutz: Dienste und Nachweise

| Dienst / Anbieter | Zweck und Daten | Im Code / Konfiguration | Produktiver Nachweis | Rechtsgrundlage unserer Verarbeitung | Dauer / Kriterien | Drittlandbezug |
| --- | --- | --- | --- | --- | --- | --- |
| Workers, statische Assets und Auslieferungsnetz / Cloudflare, Inc., USA | Seiten, Schriften, Bilder, API; IP, URL, Zeitpunkt, Browser, ggf. Referrer und technische Statusdaten | `wrangler.cloudflare.json`, Vite-Konfiguration, Asset-Routen | Live-Domain und Abrufe bestätigt; konkrete Account-Protokollierung nicht einsehbar | Art. 6 Abs. 1 f DSGVO: Bereitstellung, Verfügbarkeit, Missbrauchsschutz | Erforderlichkeit; tatsächliche Worker-/Sicherheitslog-Einstellungen und Fristen offen | Internationales Netz, USA möglich; keine ausschließliche Deutschland-Zusage. Anbieter-DPA mit SCC vorhanden; konkrete Vertragslage nicht eingesehen |
| D1 / Cloudflare | Anfrageinhalte und technische Bearbeitungsdaten | Bindung `DB`, Migration und POST-Route | Produktiv konfiguriert; absichtlich keine Live-Schreibprobe und kein Abruf echter Leads | Art. 6 Abs. 1 b bei eigenen vorvertraglichen Anfragen, f bei Kommunikation für Dritte; c bei konkreten gesetzlichen Aufbewahrungspflichten | Nicht zustande gekommene Anfragen grundsätzlich 6 Monate ab Eingang, mit manueller Einstufung; Vertrags-/Aufbewahrungsfälle getrennt | Datenbankstandort, Jurisdiktion und Wiederherstellungsfenster im Konto nicht eingesehen |
| Mailannahme für `nineai.de` / IONOS SE | Technische Zustellung von E-Mails und notwendige Nachrichten-/Verbindungsangaben | Kein SMTP-Client in der Website; aktive MX-Einträge `mx00.ionos.de` und `mx01.ionos.de` öffentlich geprüft | DNS-Mailrouting belegt; tatsächliches Postfach, Weiterleitungen und Empfang nicht verifiziert | b/f entsprechend Anfragezweck | Anfrage-Löschregel; konkrete dienstseitige Einstellungen offen | Empfangsanbieter in Deutschland; weitere Dienstleister, Weiterleitungen und Vertragsbedingungen nicht eingesehen |
| Geschäftlicher E-Mail-Kontakt / Gmail, Google | E-Mails an die ausdrücklich mitgeteilte Gmail-Adresse | `business-identity.ts`, Impressum | Freigegebene Kontaktadresse; kein Kontozugriff oder Zustelltest | b/f entsprechend Anfragezweck | Anfrage-Löschregel, bei gesetzlichen Pflichten gesondert | Google Ireland Limited für EWR-Nutzer laut Anbieter; weltweite Verarbeitung möglich. Konkreter Kontotyp und Schutzvereinbarungen nicht eingesehen |
| Optionaler Formular-Mailversand / Resend (Plus Five Five, Inc., USA) | Anfrage-ID, Name, E-Mail, Telefon, Interesse, freiwillige Angaben und UTM-Werte; Antwortadresse | `lib/lead-notification.ts`, serverseitige Einstellungen `LEAD_RESEND_API_KEY` und `LEAD_EMAIL_FROM` | Account mangels Zugang nicht einsehbar. **Nach Bereitstellung des neuen Codes erscheint der Abschnitt nur, wenn die tatsächlich benötigten Servereinstellungen vorhanden sind** | b/f entsprechend Anfragezweck | Anbietertarif/-fristen offen, Postfachkopien separat prüfen | Anbieter-DPA benennt primäre US-Verarbeitung und SCC; konkrete Verträge nicht eingesehen |

Die Datenschutzerklärung nennt Zwecke, Datenarten, Empfänger, Rechtsgrundlagen, Löschkriterien sowie die Rechte nach Art. 15–21 DSGVO, den Widerruf gegebenenfalls erteilter Einwilligungen und das Beschwerderecht. Maßgebliche Kontrolle für private Unternehmen in Bayern: **Bayerisches Landesamt für Datenschutzaufsicht, Promenade 18, 91522 Ansbach**, anhand der [aktuellen Kontaktseite](https://www.lda.bayern.de/de/kontakt.html) und der [Zuständigkeit nach Art. 18 BayDSG](https://www.gesetze-bayern.de/Content/Document/BayDSG-18) überprüft. Kein Datenschutzbeauftragter erfunden.

Anbieterquellen: [Cloudflare-DPA](https://www.cloudflare.com/cloudflare-customer-dpa/), [Cloudflare-Privacy](https://www.cloudflare.com/privacypolicy/), [D1-Datenstandorte](https://developers.cloudflare.com/d1/configuration/data-location/), [D1-Time-Travel](https://developers.cloudflare.com/d1/reference/time-travel/), [Workers-Logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/), [IONOS-Datenschutz](https://www.ionos.de/datenschutzerklaerung), [Google-Datenschutz](https://policies.google.com/privacy?hl=de), [Resend-DPA](https://resend.com/legal/dpa), [Resend-Privacy](https://resend.com/legal/privacy-policy).

**Nicht als aktive Besucherdienste dargestellt:** Cloudflare Pages, R2, KV, Turnstile, Web Analytics, Google Analytics/Tag Manager, Meta/Facebook Pixel, LinkedIn Insight, Clarity, Hotjar, Matomo, Plausible, OpenAI, Anthropic, Gemini, externe Chatwidgets, Newsletter, Upload-Dienste oder Medien-Embeds. Keine entsprechenden aktiven App-Aufrufe gefunden. Die generische Sites-Vorschaukonfiguration ist vom Cloudflare-Produktionsbuild getrennt; R2 ist dort `null`. Der Google-Partner-Baustein liefert wegen leerer Profil-URL nichts aus und lädt deshalb das enthaltene gstatic-Bild nicht. Cloudflare-WAF-/Bot-/Account-Funktionen können aus dem Quellcode nicht abschließend beurteilt werden.

## C. Cookies und Einwilligung

Die isolierte Live-Prüfung umfasste Startseite, Impressum, Datenschutz, Projektanfrage, Website-Anfrage, Projekte und `/agb`, einschließlich Scrollen für nachladende Inhalte. Ergebnis: keine Cookies, keine Local-Storage-Schlüssel, keine IndexedDB-Datenbanken und vor einer Anfrage keine Session-Storage-Schlüssel; ausschließlich Requests an `www.nineai.de`, keine Analytics-Requests oder Browserfehler. Der Formularversand wurde im Browser abgefangen, nicht an die Live-API gesendet.

Im bisherigen Quellcode lag nach erfolgreichem Versand ein reines Bestätigungsflag `nine:inquiry-received=true` im Session Storage. Es wurde entfernt: Die Anzeige funktioniert im Arbeitsspeicher der geöffneten Seite, ohne seitenübergreifende Persistenz. Dadurch ist keine zweifelhafte Einstufung einer bloßen Komfortspeicherung als zwingend notwendig erforderlich. Anfrage-ID und Formulareingaben bleiben bis zur Übermittlung im Arbeitsspeicher.

`components/ui/sidebar.tsx` enthält einen Cookie `sidebar_state` mit 7 Tagen Laufzeit, wird aber von keiner App-Seite importiert und ist damit in dieser Website nicht aktiv. Rein vorhandene UI-Bibliotheken sind kein Nachweis einer tatsächlichen Speicherung. Die Cache-Auslieferung von eigenen Dateien ist von optionalem Tracking zu unterscheiden.

Für den geprüften Anwendungsstand ist kein optionaler Dienst zu blockieren; deshalb wurde kein künstlicher Consent-Banner eingebaut. Die Bewertung bezieht sich auf diesen Stand und die tatsächlich beobachtete Live-Auslieferung, nicht auf unbekannte zukünftige Account-Einstellungen. [§ 25 TDDDG](https://www.gesetze-im-internet.de/ttdsg/__25.html).

## D. Formulare, Zugriffe und Löschung

Eine gemeinsame Formularimplementierung bedient Website-Pakete, individuelle Projekte, CRM, Web-Apps, KI/Automation und Google Ads. Pflichtfelder: Name, E-Mail, Telefonnummer. Eine Paket-/Leistungsauswahl wird mitgesendet; Website und Nachricht sind optional. Direkt am Formular steht die Datenschutzerklärung, ohne pauschale Pflicht-Einwilligungscheckbox. Die Anfrage ist ausdrücklich unverbindlich, ohne Vertrag oder Zahlungspflicht.

Übermittelt werden `name`, `email`, `phone`, `website`, `message`, `goal`, `package`, zufällige UUID `requestId`, Honeypot `fax` und gegebenenfalls `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`. POST-Ziel ist dieselbe Origin, `/api/website-anfrage`. Der Honeypot wird geprüft und nicht als Lead gespeichert. Bei gültiger Anfrage speichert D1 diese Kontakt-/Projektangaben, Kampagnendaten, `created_at`, UUID, SHA-256-Prüfwert und Benachrichtigungsstatus/-versuchszahl. Der Prüfwert ist kein Nachweis einer Anonymisierung.

Die Lead-Tabelle enthält keine IP-, User-Agent- oder Referrer-Spalte; die Route kopiert diese Header nicht in Leads. Sie prüft den Origin-Header, limitiert anhand derselben E-Mail-Adresse auf drei neue Anfragen in 15 Minuten und erkennt identische Übermittlungswiederholungen. Das ist von Cloudflare-Infrastrukturverarbeitung zu trennen. Die Anwendung loggt keine Formularinhalte. Kein aktiver externer CAPTCHA-, KI-, Upload- oder Newsletter-Dienst. Zugriff organisatorisch nur durch Dariush Ghawss und den unmittelbar beteiligten Geschäftspartner laut Auftrag; tatsächliche Account-Berechtigungen konnten nicht eingesehen werden.

**Neue sichere Löschvorbereitung:** Migration `0001` ergänzt `retention_status`, zunächst `unreviewed`. Das CLI `scripts/lead-retention.mjs` kann alte IDs auflisten, einzelne Anfragen manuell klassifizieren und ausschließlich mindestens sechs Kalendermonate alte `no_contract`-Zeilen löschen. `contract` und `legal_hold` können mit diesem Werkzeug nicht auf `no_contract` zurückgestuft werden. Ohne `--execute` sind Schreibaktionen nur eine SQL-Vorschau; ohne `--remote` arbeitet es lokal. Anleitung: [lead-retention.md](lead-retention.md).

**Kein automatischer produktiver Löschdienst eingerichtet.** Ohne zuverlässige Information über spätere Verträge wäre eine reine Alterslöschung falsch. Produktive Migration, Statuspflege, rechtzeitiger Löschlauf, Mailkopien, Exporte und Umgang mit Wiederherstellungen müssen durch den Kontoinhaber eingerichtet werden. Die Datenschutzerklärung behauptet keine automatische Sechs-Monats-Löschung. D1-Time-Travel hat laut Anbieter tarifabhängige Wiederherstellungsfenster; der konkrete Tarif ist nicht bekannt.

## E. Verbraucher, Preise und Vertragsinformationen

Alle eigenen öffentlichen Preisformulierungen einschließlich Metadaten, Ratgeber und Menüs wurden von Netto-Zuschlägen bereinigt. Die Zahlen wurden nicht erhöht oder mit 19 % multipliziert. Einmalige und monatliche Preise bleiben unterscheidbar, Basis-/Ab-Preise und separat angebotene Zusatzkosten bleiben erklärt. Der Hinweis auf § 19 UStG steht im Footer jeder HTML-Seite sowie unmittelbar bei Paketangeboten und Anfragen mit Preisübersicht. Externe Werbebudgets und eingebettete Screenshots von Kundenangeboten sind keine eigenen Nine.ai-Leistungspreise. [PAngV](https://www.gesetze-im-internet.de/pangv_2022/BJNR492110021.html).

Unternehmen, Selbstständige und Privatkunden werden ausdrücklich zugelassen; fachliche Leistungsseiten dürfen weiterhin typische Unternehmensanwendungen erklären. Vertragsentstehung erst durch spätere Annahme eines individuellen Angebots oder gesonderte Vereinbarung. Keine Zahlung und kein verbindlicher Kauf im Formular.

`/agb` war bereits eine erreichbare, nicht im Footer oder Formular als Vertragsbedingung verlinkte Informationsseite. Sie bleibt erreichbar und erklärt nun ausdrücklich, dass sie **keine gesonderten AGB** enthält. Keine Vertrags-AGB erfunden.

Keine Widerrufsbelehrung für die unverbindliche Anfrage hinzugefügt. Beim späteren Fernabsatz-/Außergeschäftsraum-Vertrag mit Verbrauchern sind Anwendbarkeit, rechtzeitige Belehrung und ein eventuell gewünschter Leistungsbeginn während der Widerrufsfrist separat zu prüfen. Eine individuelle Website ist nicht allein wegen ihrer individuellen Gestaltung pauschal vom Verbraucherwiderruf ausgenommen. [§ 312g BGB](https://www.gesetze-im-internet.de/bgb/__312g.html).

Keine alte EU-OS-Plattform und keine erfundene Schlichtungsteilnahme eingebaut. § 36 Abs. 3 VSBG nimmt Unternehmen mit zehn oder weniger Beschäftigten **am 31. Dezember des Vorjahres** von Abs. 1 Nr. 1 aus. Die mitgeteilte geringe aktuelle Beschäftigtenzahl ist damit abzugleichen; eine Verpflichtung nach Nr. 2 oder zugesagte Teilnahme ist nicht belegt. § 37 betrifft gesonderte Informationen nach einer tatsächlich entstandenen und nicht beigelegten Streitigkeit. [§ 36 VSBG](https://www.gesetze-im-internet.de/vsbg/__36.html), [§ 37 VSBG](https://www.gesetze-im-internet.de/vsbg/__37.html).

## F. Noch nicht aus GitHub und Live-Seite belegbar

1. Tatsächliche Cloudflare-Zugriffsberechtigungen, D1-Standort/Jurisdiktion/Tarif, WAF-/Bot-Einstellungen sowie Aktivierung, Inhalt und Aufbewahrungszeiten von Infrastruktur- und Worker-Logs.
2. Produktive Resend-Secrets, verifizierter Absender, erfolgreicher E-Mail-Versand und konkrete Resend-Aufbewahrung. Keine Anmeldung ohne vorhandenen Zugang versucht; die lesende Secret-Liste war mangels Cloudflare-Authentifizierung nicht möglich. Nach Deployment richtet sich die Anzeige des Resend-Abschnitts nach den tatsächlichen benötigten Einstellungen.
3. Bestehendes IONOS-Postfach oder Weiterleitungen, Empfang von `anfrage@nineai.de`, endgültiger Speicherort weiterer Mailkopien, Kontotyp der Gmail-Adresse sowie tatsächlich vereinbarte Auftragsverarbeitung und internationale Schutzmaßnahmen. MX- und Mailto-Prüfung sind keine Zustellprobe.
4. Umsetzung der produktiven Migration und des fristgerechten Prüf-/Löschprozesses einschließlich Vertragsstatus, Postfachkopien und Backups. Keine echten Daten gelöscht.
5. Dokumentierte Nutzungs-/Personen-/Foto-/Markenrechte für die nachfolgend aufgeführten Referenzen und Assets. Die generelle Freigabe darf nicht aus dem Vorhandensein von Dateien abgeleitet werden. Entwurf Energie ist gemäß ausdrücklicher Auftraggeberangabe ein genehmigtes echtes Kundenprojekt in Entwicklung.
6. Späterer tatsächlicher Verbraucher-Vertragsprozess, Widerrufsinformationen und gegebenenfalls individuelle Vertragsbedingungen; maßgeblicher Beschäftigtenstand zum gesetzlichen Vorjahresstichtag für § 36 VSBG.
7. Der schon zuvor bekannte lokale Wrangler-Parallelfehler bleibt offen: Der unveränderte `verify-lead.mjs` erwartet drei Ratenlimit-Ablehnungen, erhält bei fünf parallelen Anfragen aber `[201, 503, 201, 429, 429]`. Die 503-Antwort lautet „Your worker restarted mid-request …“. Eine zusätzlich getrennt ausgeführte serielle Prüfung mit geschlossenen Verbindungen besteht. Das belegt weder einen produktiven Fehler noch eine erfolgreiche produktive Parallelprüfung; ein entsprechender Test in einer kontrollierten Staging-Umgebung bleibt erforderlich.

### Referenzen und fremde Inhalte zur internen Rechteprüfung

Keine Referenz und kein Asset wurde gelöscht oder umbenannt.

| Öffentlicher Projektname | Sichtbare Logos / Ansichten | Weitere Inhalte zur Rechteprüfung |
| --- | --- | --- |
| ParkeSicher | Logo, Desktop/Mobil, Anbieter-Oberflächen zu Buchungen, Preisen, Verfügbarkeit, Tagesübersicht, Umsatz | Flughafen-/Flugzeugfoto, eingeblendete 4,8-Bewertungen; Anbietername ParkNow Frankfurt Shuttle in Systemaufnahmen, Buchungs-/Personenangaben dort teilweise sichtbar geschwärzt |
| Un Petit Café | Desktop/Mobil und Gastro-Systemansichten; die aktuellen Website-Aufnahmen zeigen sichtbar **ToastClub Wiesbaden** als Wort-/Bildmarke | Gastronomiefotos, 4,8/5-Sterneanzeige; Zuordnung der abgebildeten Marke zur veröffentlichten Projekterzählung intern abgleichen |
| MB Performance | Logo, Desktop/Mobil, Fahrzeug-/Tuningdatenbank | Lamborghini-Foto und Herstellerzeichen, Fahrzeuge/Marken im Angebot |
| Meister Lorenz | Autoschlüssel/Meister-Lorenz-Logo, Desktop/Mobil | Fahrzeug-/Schlüsselfoto mit Land-Rover-Schriftzug; Land Rover, Jaguar, Jeep und Mercedes im Screenshottext; eingeblendetes Testimonial „Thomas K., Hanau“; WhatsApp-Zeichen |
| Entwurf Energie | Ersetztes Logo, Desktop/Mobil, Landing- und CRM-Ansichten | Durch Auftrag freigegebenes echtes Projekt, in Entwicklung; ersetzte Namen, Beispielkontakte und Bearbeitungsdaten in CRM-Aufnahmen; ursprüngliche Kundenidentität nicht ergänzt |
| Mr. CarKey | Logo, Desktop/Mobil | Personen-/Werkstattfoto, WhatsApp- und Instagram-Zeichen |
| Garden Time Frankfurt | Gardentime-Logo, Desktop/Mobil | Garten-/Objektfotos, geschäftliche Kontaktdaten, Erfahrungs-/Kundenanzahlen und Datenschutzbehauptung innerhalb der Aufnahme, WhatsApp-Zeichen |
| Loni GalaBau | Logo, Desktop/Mobil | Garten-/Gebäudefoto, Jahresangabe und WhatsApp-Zeichen |
| Dirik Autopflege | Logo, Desktop/Mobil | Fahrzeugfoto, Audi Sport, BMW M und AMG, WhatsApp, Bewertungsanzeige 4,8/5 und 79+ Reviews |

Diese Bewertungen sind Bildinhalte von Kundenwebsites, keine verifizierten Nine.ai-Kundenbewertungen. Ihre Authentizität und die Freigabe der Wiedergabe sind gesondert zu dokumentieren. In Bildern sichtbare Kontaktangaben sind ebenfalls in die Freigabeprüfung einzubeziehen. Keine pauschale Zustimmung behauptet.

### Asset- und Lizenzübersicht

- **Cabinet Grotesk**: vier lokal gehostete WOFF2-Gewichte in `app/fonts/` sowie vorhandene Kopien in `public/assets/`; keine externen Font-Requests. Die zugehörige Original-Lizenz-/Downloadnachweisdatei ist im Repository nicht enthalten. [Offizielle Fontshare-Seite](https://www.fontshare.com/fonts/cabinet-grotesk), [Lizenzen](https://www.fontshare.com/licenses); die zum tatsächlich bezogenen Fontpaket gehörende Lizenz muss intern archiviert werden.
- **Lucide React**: Icons aus der Projektabhängigkeit, Lizenz in `node_modules/lucide-react/LICENSE` (ISC, mit zusätzlichen Hinweisen zur Feather-Herkunft); Lizenzhinweise bei Verteilung erhalten.
- **React, Vinext, Base UI, Tailwind und übrige Paketabhängigkeiten**: anhand `package.json`/Lockfile nachvollziehbar; keine neuen Bibliotheken installiert. Deren jeweilige Lizenztexte bleiben maßgeblich; dies ist keine juristische Komplettprüfung aller transitiven Abhängigkeiten.
- **Deutschlandkarte**: selbst gehostetes `public/assets/locations/germany.svg`, Herkunft im SVG-Kommentar Simplemaps; offizielle [SVG-Lizenz](https://simplemaps.com/resources/svg-license) erlaubt kommerzielle Verwendung, ohne verpflichtenden Backlink, mit Einschränkung für unveränderte Weiterverteilung einer Kartensammlung. Farben wurden für Nine.ai angepasst.
- **Nine.ai-Logo und weitere Markenassets**: lokale SVG/PNG-Dateien; Urheber-/Nutzungsnachweis nicht aus Dateien allein ableitbar. Der Liquid-Effekt ist eigener Rendering-Code, kein externer KI-Dienst.
- **Projektaufnahmen**: 33 Original-WebP-Dateien und daraus erzeugte responsive Varianten. Rechte an enthaltenen Fotos, Marken, Bewertungen und Personen sind mitzuprüfen; ein Screenshot ist keine Fotolizenz. Unbenutzte nummerische Altassets in `public/assets/` sind keine nachgewiesenen Stocklizenzen und können mit dem öffentlichen Asset-Verzeichnis weiter ausgeliefert werden.
- **Google-Partner-Grafik**: gstatic-URL im vorbereiteten Baustein, derzeit wegen fehlender Profil-URL nicht gerendert. Ein Kontonachweis für Status/Snippet und die Markenrichtlinien sind vor Aktivierung zu kontrollieren. Es wird keine weitere Google-Zertifizierung behauptet.

## G. Geänderte Dateien und Prüfungen

Die einzelnen UI-Änderungen beschränken sich auf rechtliche Hinweise, Preis-/Verbrauchertexte und die nicht mehr persistierte Eingangsbestätigung. Header, Projektfilter, Referenzen, Standortdarstellung und Hauptdomain-Konfiguration bleiben bestehen. Die konkrete Dateiliste und Prüfergebnisse folgen unten.

### Geänderte und neue Dateien

- `app/[...slug]/page.tsx`
- `app/content/ads-automation-pages.ts`
- `app/content/development-pages.ts`
- `app/content/guide-pages.ts`
- `app/content/industry-pages.ts`
- `app/content/service-hubs.ts`
- `app/inquiry-form.tsx`
- `app/landing.tsx`
- `app/legal-content.tsx`
- `app/offer-guide.tsx`
- `app/package-cards.tsx`
- `app/package-request.tsx`
- `app/site-chrome.tsx`
- `app/site-data.ts`
- `app/site-footer.css`
- `app/site-footer.tsx`
- `app/subpages.tsx`
- `app/website-erstellen-lassen/page.tsx`
- `app/website-erstellen-lassen/website-lead.tsx`
- `app/website-packages.tsx`
- `app/website-page.tsx`
- `db/schema.ts`
- `docs/lead-retention.md`
- `docs/legal-review-2026-11-12.md`
- `drizzle/0001_lead_retention.sql`
- `drizzle/meta/0001_snapshot.json`
- `drizzle/meta/_journal.json`
- `lib/business-identity.ts`
- `lib/inquiry-status.ts`
- `lib/lead-notification.ts`
- `lib/seo-pages.ts`
- `lib/site-identity.ts`
- `scripts/lead-retention.mjs`
- `scripts/verify-retention.mjs`

### Originale Projektaufnahmen

Basisverzeichnis: `public/assets/projects/`. Die 56 responsive Varianten werden im bestehenden Bildmanifest zugeordnet und wurden nicht geändert.

```text
cafe-menu.webp
cafe-order.webp
cafe-status.webp
cafe-tables.webp
dirik-autopflege-desktop.webp
dirik-autopflege-mobile.webp
entwurf-energie-crm-mobile.webp
entwurf-energie-crm-preview-desktop.webp
entwurf-energie-crm-preview-mobile.webp
entwurf-energie-desktop.webp
entwurf-energie-landing-preview-desktop.webp
entwurf-energie-landing-preview-mobile.webp
entwurf-energie-leads.webp
entwurf-energie-mobile.webp
gardentime-desktop.webp
gardentime-mobile.webp
loni-galabau-desktop.webp
loni-galabau-mobile.webp
mb-performance-desktop.webp
mb-performance-mobile.webp
meister-lorenz-desktop.webp
meister-lorenz-mobile.webp
mrcarkey-desktop.webp
mrcarkey-mobile.webp
parkesicher-availability.webp
parkesicher-bookings.webp
parkesicher-desktop.webp
parkesicher-mobile.webp
parkesicher-prices.webp
parkesicher-revenue.webp
parkesicher-today.webp
un-petit-cafe-desktop.webp
un-petit-cafe-mobile.webp
```

### Abschließende Prüfungen

- TypeScript: `node node_modules/typescript/bin/tsc --noEmit` bestanden.
- Cloudflare-Produktionsbuild mit `NINEAI_DEPLOY_TARGET=cloudflare`: bestanden. Keine Veröffentlichung.
- Lint für alle geänderten TypeScript-/JavaScript-Dateien: bestanden. `git diff --check` bestanden.
- `verify-routes.mjs`: 48 Inhaltsseiten, interne Links und drei echte 404-Fälle bestanden.
- `verify-rendering.mjs`: 20 SSR-Seiten, drei Crawlervergleiche, drei echte 404-Fälle und vier Font-Endpunkte bestanden.
- `verify-seo.mjs`: 39 indexierbare und neun nicht indexierbare Seiten, 79 Assets und 78 Crawlervergleiche ohne Fehler.
- `verify-project-routing.mjs`: alle acht Empfehlungen bestanden. Bildprüfung: 33 Originale, 56 Varianten, 89 Kandidaten bestanden; kein Bild verändert.
- Alle 48 Inhaltsseiten auf Impressums-/Datenschutzlinks und die neuen Preisangaben geprüft; keine verbleibenden eigenen Netto-Preistexte. Auch Metadaten und Ratgeber wurden im Quelltext durchsucht.
- 32 Browserkombinationen (acht Kernseiten in 1440, 768, 390 und 320 Pixeln): keine horizontalen Überläufe, fehlenden Bilder, JavaScriptfehler oder externen Requests. Footer-Rechtslinks mindestens 44 Pixel hoch. Impressum, Datenschutz und Pakete zusätzlich visuell geprüft.
- Alle 15 Paket-/Leistungswege mit tatsächlichen, ausschließlich lokalen Formularanfragen bestanden. Pflicht-Telefon, Paketübernahme und optionale Nachricht geprüft; Datenschutzerklärung am Formular, keine Pflicht-Einwilligungscheckbox.
- Nach bestätigtem Eingang: Bestätigung und Footeranzeige funktionieren ohne Cookie-, Local- oder Session-Storage-Eintrag.
- Datenschutzerklärung mit und ohne lokal konfigurierte Resend-Testwerte per GET geprüft: Abschnitt erscheint nur im konfigurierten Fall; keine Test-Zugangsdaten im HTML. Keine E-Mail über diese Testinstanz versendet.
- Alle fünf im regulären Datenschutztext enthaltenen externen Anbieter-/Behördenlinks liefern HTTP 200. Die offiziellen Resend-DPA-/Datenschutzquellen wurden zusätzlich recherchiert. Mailto-Links geprüft; kein Mailzustelltest.
- `verify-retention.mjs`: UTC-Kalendermonate einschließlich Schaltjahr/Monatsende, sichere Migration bestehender Zeilen, explizite Freigabe, Schutz von Vertrags-/Aufbewahrungsfällen, neue/ungültig datierte Zeilen und vollständige Löschung der freigegebenen Zeile bestanden. Drizzle-Metadatenprüfung bestanden.
- Beide Migrationen nur auf die isolierte lokale D1 angewendet. Lokale neue Anfragen stehen standardmäßig auf `unreviewed`. Löschvorschau ohne Kandidaten erfolgreich; produktive Datenbank unangetastet.
- Vorhandener API-Integrationstest: **nicht vollständig bestanden**, wegen des oben dokumentierten lokalen Parallel-503. Die unveränderten Assertions wurden nicht gelockert. Separate serielle Diagnose besteht einschließlich Validierung, Speicherung, Wiederholschutz, Konfliktschutz, Ratenlimit, Pflichttelefon, Leistungsarten und Upload-Größengrenze.

Prüfartefakte und Screenshots liegen ausschließlich im ignorierten Verzeichnis `outputs/legal-audit/`. Es wurden keine Bibliotheken installiert, keine produktiven Daten gelöscht und keine Commits, Pushes oder Deployments ausgeführt.
