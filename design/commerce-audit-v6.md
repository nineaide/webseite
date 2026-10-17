# Nine.ai v5 – read-only Angebots- und Commerce-Audit

Stand: 6. September 2026. Untersucht: aktuelle Quelldateien im NineAI-Checkout, keine UI-Automation, keine Sites-Toolcalls, keine Credentials gesucht. Keine Projektdateien verändert. `.openai/hosting.json` wurde gelesen; D1 und R2 sind `null`. Die aktuelle App hat 19 auflösbare Routen, aber keine API-Route.

## Echte Blocker für Livekauf und Leadversand

1. **Keine Zahlungsanbindung.** Alle fünf `/checkout/<paket>`-Routen zeigen `PackageRequest`. Das Formular hat keinen Request, Server, Provider oder dauerhaften Speicher. Es wechselt nach clientseitiger Validierung zur Vorschau und erzeugt eine lokale Textdatei. Ein CTA allein kann daraus keinen Kauf machen.
2. **Kein Empfang für Leads.** Auch `/projekt-starten` endet im Download. Es existiert kein bekannter Kontakt-Empfänger, keine Versandkonfiguration und keine Inbox-Persistenz. `Anfrage starten` in der Navigation erzeugt heute keine echte Anfrage.
3. **Keine abschließende Vertrags-/Steuerkonfiguration.** `Legal` bezeichnet Anbieterangaben, Vertragsbedingungen und Steuerangaben ausdrücklich als noch nicht vorhanden (`app/subpages.tsx:556`). Die vorhandenen Texte dürfen beim Aktivieren von Zahlung/Versand nicht weiterhin behaupten, dass kein Zahlungsdienst eingebunden ist und alle Eingaben lokal bleiben.
4. **Zahlungsplan widerspricht Vollpreis-Direktzahlung.** Launch nennt 30/40/30 Prozent, Growth einen erst abzustimmenden Zahlungsplan (`app/site-data.ts:254`, `:272`). Ein Checkout über den gesamten Paketpreis braucht dazu passende Zahlungsbedingungen. Alternativ wäre nur die erste Rate sofort zahlbar und als Anzahlung auszuweisen; das wäre eine zusätzliche Produktentscheidung. Für die gewünschte einfache Direktkaufstrecke ist Gesamtzahlung die kleinere Implementierung, aber eine Änderung der bestehenden Zahlungsbedingungen.

Diese Punkte blockieren die reale Freischaltung, nicht die jetzt mögliche vollständige Vorbereitung der Angebotsdarstellung, Kaufstrecke, Validierung und Zustände. Im geprüften Code ist kein vorhandener Anbieterlink oder Empfänger nachgewiesen; externe Konten oder vertrauliche Konfiguration wurden absichtlich nicht durchsucht.

## Aktueller Datenfluss

`landing.tsx` / `offer-guide.tsx` / `PackageCards` / `ServicePage` → `/checkout/<slug>` → `app/[...slug]/page.tsx` → `PackageRequest` → React-State `{ name, company, email, idea, timing, service }` → `review=true` → `Blob` → Download `Nine-ai-<slug>-Briefing.txt`.

`/projekt-starten?service=…` validiert den Dienstnamen gegen eine Allowlist im Router und verwendet dasselbe Formular ohne festes Paket. Die Feldlängen und E-Mail werden ausschließlich im Browser geprüft. Name und E-Mail sind Pflicht, Unternehmen optional, Beschreibung mindestens zehn Zeichen. Neuladen verliert alle Angaben. Es gibt keinen Versand-, Pending-, Fehler- oder serverbestätigten Erfolgszustand.

`app/configurator.tsx` enthält noch einen älteren sechs Schritte langen lokalen Download-Konfigurator. Er wird von den aktuellen Routendateien nicht importiert. `lib/project-routing.ts` liefert außerdem die Service-Allowlist für das WebMCP-Navigationswerkzeug. Das Tool öffnet nur den Briefingpfad und versendet ausdrücklich nichts. Die nicht verwendete Empfehlungslogik ist daher kein aktueller Leadverteiler.

## Angebot: feste Websitepreise und klar getrennte übrige Leistungen

**Direkt kaufbar:** Nine Launch, 6.900 € netto; Nine Growth, 12.900 € netto. Die bisherigen Nettopreise beibehalten. Steuersatz und verbindlichen Bruttogesamtbetrag mit dem tatsächlichen Händlerprofil konfigurieren, nicht pauschal erfinden.

**Anfrage/individueller Umfang:** Web-Apps und Plattformen, KI & Automation, laufende Google-Ads-Betreuung. Nur die beiden autorisierten Websitepreise zu festen Kaufpreisen machen; die übrigen heutigen Preisanker nicht stillschweigend zu weiteren Shopprodukten aufwerten.

Launch hat derzeit vier kurze Leistungszeilen: bis zu sechs Seitenlayouts, eine Sprache, CMS/Kontaktformular, individuelles Design, zwei Feedbackrunden, Mobil-/Suchmaschinenbasis. Growth nennt zwölf Layouts, zwei Landingpagevorlagen, Design/Messung, Google-Ads-Einrichtung. Vor Direktkauf sollte die sichtbare Leistungsdefinition insbesondere klären: Seiten versus Seitentypen, enthaltene Inhalte/Einpflege, CMS und Übergabe, Feedbackrunden für Growth, Voraussetzungen für Werbe-/Trackingzugänge, Hosting/Domain/Lizenzen, Beginn und Übergabe. Keine neuen Lieferfristen oder Leistungen erfinden. Das vorhandene Material genügt für konkrete Paketdetails, aber nicht zur Behauptung beliebig vieler Inhalte oder komplett erstellter Texte/Fotos.

**Eine Datenquelle:** `site-data.ts` sollte strukturierte Felder wie `purchaseMode: 'fixed' | 'inquiry'`, Betrag in Cent, `currency`, Steuerdarstellung, Leistungsgrenzen und Zahlungsweise enthalten. Aktuell werden Preise und Einordnung mehrfach gepflegt: `landing.tsx`, `offer-guide.tsx`, `site-data.ts`, `package-cards.tsx`, `package-request.tsx`. Die Interpretation von `suffix.includes('ab')` und `suffix.includes('Monat')` ist für echte Checkout-Logik zu indirekt. Preis-/Paketzuordnung muss im Server oder fest hinterlegten Providerlink autoritativ sein, nie aus einem übermittelten Browserbetrag.

## Minimal kohärente Implementierung

### Empfehlung: zwei konfigurierte Payment Links + separater Leadendpoint

1. Websitepakete auf einer gemeinsamen Vergleichsfläche sichtbar machen; CTA `Paket kaufen` führt zur jeweiligen bestehenden Detailroute. Dort kompakte Leistungsübersicht, fixer Nettopreis, vollständige Steuer-/Gesamtpreisdarstellung, Zahlungsweise und ein primärer CTA `Weiter zur sicheren Zahlung`.
2. Pro Paket genau einen vom Händler eingerichteten und in Testumgebung geprüften Payment Link fest konfigurieren. Nur erlaubtes HTTPS-Ziel, keine beliebige Query-URL, keine vom Nutzer vorgegebene Weiterleitung, keine Kundendaten oder Briefingtexte im Link. Fehlende/ungültige Konfiguration darf nicht zu einem funktionierenden Kaufbutton oder zu einer Erfolgsbehauptung führen. Konfigurationshinweis in der privaten Vorschau kurz und lokal halten.
3. Name, geschäftliche Rechnungsdaten, Adresse, Steuerdaten und E-Mail im gehosteten Checkout erfassen. Das heutige lange Briefing ist keine Voraussetzung für die Zahlung. Nach dem Kauf folgt die Projektabstimmung. Payment Links können solche Angaben und Steuern erfassen. [Stripe: Checkout anpassen](https://docs.stripe.com/payment-links/customize).
4. Die Bestätigung beim Zahlungsanbieter lassen; dessen Beleg/Rechnung und Händler-Dashboard sind zunächst die echten Kaufnachweise. Für eine Agentur mit wenigen hochwertigen Aufträgen kann das anschließende Onboarding manuell aus dem Händler-Dashboard erfolgen. Dafür ist kein eigener automatisierter Zahlungsstatusdienst erforderlich. Stripe dokumentiert manuelle Erfüllung ausdrücklich. [Stripe: Aufträge erfüllen](https://docs.stripe.com/checkout/fulfillment).
5. Provider-E-Mails, Rechnungen und Händlerbenachrichtigungen passend konfigurieren. Keine eigene `/success?paid=true`-Bestätigung. Eine Rückkehr-URL alleine ist kein Zahlungsbeweis. [Stripe: Nach einer Payment-Link-Zahlung](https://docs.stripe.com/payment-links/post-payment).
6. Die Beratung bleibt eigenständig unter `/projekt-starten`, mit `Anfrage senden` und einem echten `POST /api/leads`. Der Server validiert/trimmt Länge, E-Mail, erlaubte Service-/Paketwerte; begrenzt Bodygröße und Spam; nimmt nur den fest konfigurierten Empfänger. Entweder über verifizierten Versanddienst zustellen oder dauerhaft in einer tatsächlich verwalteten Lead-Inbox speichern. Ein nicht ausgelesener Datenbankeintrag allein ist keine fertige Leadführung. Erfolg erst nach bestätigter Annahme durch den Server; bei Fehler alle Eingaben erhalten und Wiederholen ermöglichen. Ein bloßer `mailto:`-Link wäre höchstens ein benannter Kontaktweg, kein abgeschicktes Formular.

Diese Variante benötigt keine Zahlungsdaten auf Nine.ai, keine neue Kundenauthentifizierung und keine Scheinkauf-Simulation. Benötigt werden zwei reale freigegebene Payment Links, belastbare Angebots-/Händlerdaten sowie ein tatsächlicher Lead-Empfang. In der privaten Vorschau kann der gesamte Ablauf vorbereitet werden; Livekauf und Versand bleiben bis zur gültigen Konfiguration ehrlich unfreigeschaltet.

### Alternative: eigener serverseitiger Checkout

Nur wählen, wenn Briefing, Bestellung und Zahlung schon vor dem Checkout eng zugeordnet oder automatisiert werden sollen: `POST /api/checkout` nimmt ausschließlich einen zulässigen Paketslug und eine validierte Briefingreferenz, erstellt eine Bestellung und erzeugt serverseitig die Provider-Session mit serverbestimmter Price-ID. Secrets bleiben serverseitig. Preise, Währung und erlaubte Rückkehrdomain nie aus dem Browser übernehmen. Eine autorisierte Rückkehrseite zeigt den abgefragten Status. Signierter Webhook verarbeitet bestätigte Zahlungen idempotent; doppelte Ereignisse dürfen keine doppelten Aufträge erzeugen. Verzögerte Zahlungen benötigen einen Pending-Zustand und späteres bestätigtes Ereignis. Stripe verlangt Webhooks für zuverlässige automatisierte Erfüllung und beschreibt Signaturprüfung, erneuten Sessionabruf und Statusprüfung. [Stripe: Aufträge erfüllen](https://docs.stripe.com/checkout/fulfillment).

Das ist möglich mit dem vorhandenen Worker-kompatiblen Serverstack, benötigt aber mehr neue Infrastruktur und echte Persistenz. D1 wäre dafür erst zu konfigurieren. Aktuell ist dieser Weg nicht schon vorhanden.

## Alle öffentlichen App-Texte und Preiswidersprüche

**Allgemeines App-Angebot entfernen, Web-Apps konkret benennen:** `site-data.ts:4,6,23` (`Apps & Kundenportale`, `Deine eigene App`), `subpages.tsx:112,329`, `package-cards.tsx:29,31,39,154`, `package-request.tsx:163`, `landing.tsx:54,75`, `offer-guide.tsx:62`, `layout.tsx:14`. Statt generischem `App` beispielsweise `Web-Apps & Kundenportale`, `Web-App oder Buchungsplattform`, `Web-App planen`. Bestehenden passenden Slug `/plattformen-web-apps` beibehalten; er bezeichnet die gewollte Browseranwendung bereits präzise. Falls „eigene Web-Apps“ die internen Produkte des Studios meint, diese als eigene Projekte zeigen und nicht als generische App-Entwicklungsleistung umdeuten.

**Feste Preise konsistent nachziehen:** `site-data.ts:69,341` (`ab`/Orientierung), `package-cards.tsx:182`, `package-request.tsx:57,90`, `subpages.tsx:174`, `landing.tsx:60,82,174,210`, `offer-guide.tsx:140`, `app/[...slug]/page.tsx:30,62`. Dazu die Fortschritts-/Zahlungstexte in `site-data.ts` und die Legal-Texte passend zur tatsächlich aktiven Funktion. Nicht blanket alle Orientierungsangaben entfernen: individuelle Plattformen, Automation und laufende Ads bleiben separat zu vereinbaren.

**Beispielprojekte:** Heute gibt es nur ParkeSicher, auf Startseite, Projektübersicht, Serviceseite und Über-uns wiederholt. `Projects` behauptet `Echte Projekte` (`subpages.tsx:304`), obwohl die genaue Nine.ai-Rolle im ParkeSicher-Detail selbst als nachzureichen bezeichnet ist (`:434`). Für die angeforderten zusätzlichen Beispiele pro Eintrag sichtbar `Beispielprojekt · Platzhalter` oder `Konzeptstudie · Platzhalter` zeigen; keine Kundenlogos, realen Projektauftraggeber, erfundenen Ergebnisse oder Testimonials. Mehrere verschiedenartige Websiteentwürfe helfen dem Paketkauf mehr als weitere generische Plattformkarten. ParkeSicher kann mit seinem bestehenden Screenshot und den belegbaren Funktionsbeschreibungen erhalten bleiben; keine neue Urheberschaftsbehauptung.

## Wiederholungen und kleinster gestalterischer Fokus

- Startseite erklärt Preise drei Mal: Schnellangebote, zielbasierter Tab-Guide, zusätzliche Paketübersicht. Dazu allgemeine Schritte, FAQ und erneuter Paket-CTA. Die beiden direkt kaufbaren Websites sollten sofort vergleichbar sein; individuelle Leistungen darunter getrennt.
- `OfferGuide` versteckt Alternativen hinter vier Zieltabs und wiederholt lange Ergebnis-/Checklistenblöcke. Für zwei Festpreispakete wäre eine offene Vergleichsfläche mit einer klaren Differenz (Website / Website + Werbestart) einfacher.
- Alle Serviceseiten erhalten durch `ServicePage` dieselbe Folge Hero → Preisstreifen → Problemsätze → sechs Features → nummerierter Ablauf → FAQ → CTA. Fachliche Unterschiede werden damit nur als Textwechsel sichtbar.
- `FAQ`, `CTA` und `CaseTeaser` tauchen an mehreren Stellen fast unverändert auf. Das reale Ergebnis oder der konkrete nächste Kauf-/Beratungsschritt sollte pro Seite Vorrang haben.
- CSS-Kommentare und bisherige Liquid-/Glass-Motive ändern diese strukturellen Wiederholungen nicht. Ohne Browserinspektion ist dies eine Code-/Informationsarchitekturbeobachtung, keine behauptete visuelle QA.

## Passende spätere Verifikation

Nach Umsetzung genügt der Build plus gezielte Tests der relevanten Zustände: nur zwei feste kaufbare Produkte; invalider Slug und invalider Payment-Link scheitern geschlossen; bei fehlender Konfiguration kein Kauf/Versanderfolg; falsche E-Mail/zu lange Eingaben werden serverseitig abgewiesen; Leadfehler erhält Eingaben; bestätigte Zustellung zeigt Bestätigung. Bei serverseitigem Checkout zusätzlich manipulierter Browserpreis, doppelte Webhook-Zustellung, falsche Signatur und asynchrone Zahlung. Keine Livezahlung zum Testen durchführen. Alle App-/Preis-/Legal-Texte erneut per Suche kontrollieren.
