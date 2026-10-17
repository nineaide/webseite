# Nine.ai: Gestaltung und Verkaufsweg

Recherche und Umsetzung am 6. September 2026. Die jüngste Nutzerentscheidung hat Vorrang vor der ursprünglichen Figma-Nachbildung: eine verständliche Angebotsseite für Unternehmen, keine dekorativen Trennlinien, keine zweite Schrift, kein Gelb. Die blauen Glas-Icons und die originale Bildmarke bleiben.

## 1. Was an Websites als „KI-generiert“ wahrgenommen wird

Eine Schrift oder eine abgerundete Karte beweist keine KI-Herkunft. Wiederholung macht den Eindruck: dieselben großzügigen Überschriften, austauschbare Versprechen, identische Kartenreihen, beliebige Icons und dekorative Verläufe. In der Diskussion [So many websites look the same with AI](https://www.reddit.com/r/webdesign/comments/1t3ymps/so_many_websites_look_the_same_with_ai/) werden ähnliche graue Umrandungen und Standardkomponenten kritisiert. Andere Teilnehmer weisen zu Recht darauf hin, dass diese Muster schon vor generativer KI existierten. Die Beiträge sind Erfahrungsberichte, keine repräsentative Untersuchung.

Die Diskussion [Website design feels like everyone just copies](https://www.reddit.com/r/webdesign/comments/1qqxq4i/website_design_feels_like_everyone_just_copies/) zeigt den Konflikt zwischen Originalität und Vertrautheit. Wiederkehrende Layouts werden kritisiert; gleichzeitig werden klare Informationen und bekannte Bedienwege verteidigt. Einzelne Aussagen über angeblich immer höhere Conversion bestimmter Layouts sind dort unbelegt. Für Nine.ai folgt daraus: vertraute Navigation, verständliche Paketwahl und ein einfaches Formular behalten. Eigenständigkeit kommt über die echte Marke, bewusste Komposition und konkrete Projektbilder.

Auch ein Gegenstil kann zur Formel werden. In [I was tired of all devtool sites looking like AI slop](https://www.reddit.com/r/webdesign/comments/1r6g86b/i_was_tired_of_all_devtool_sites_looking_like_ai/) wird ein bewusst kantiger Entwurf mit schwarzen Linien diskutiert. Diese Lösung widerspricht gerade der Nine.ai-Präferenz. Es gibt keinen universellen „Anti-KI-Look“, den man einfach übernehmen könnte.

**Konsequenz:** Eine einzige Schriftfamilie, Cabinet Grotesk. Unterschiede entstehen durch Größe, Gewicht und Abstand. Dünne Abschnittslinien, Preis-Trennstriche, FAQ-Unterstreichungen und Umrandungen um Angebotskarten entfallen. Die optischen Lichtkanten der Glas-Icons und notwendige Formular-/Fokusmarkierungen haben eine konkrete Funktion und bleiben.

Diese Entscheidung passt zur Empfehlung von Steve Schoger und Adam Wathan, mit [weniger Umrandungen](https://refactoringui.com/) zu arbeiten und stattdessen Abstand, Hintergrundunterschiede oder gezielte Schatten zu verwenden. Bei Nine.ai wird nicht jede entfernte Linie durch einen Schatten ersetzt.

## 2. Welche Farben mit dem Logo-Blau funktionieren

Die Forendiskussion [Advice on color palette](https://www.reddit.com/r/web_design/comments/1lmjca2/advice_on_color_palette/) behandelt genau die Kombination Blau, helleres Blau und Grau. Wiederkehrende Hinweise: ausreichender Logokontrast, helle Produktflächen und gezielter Einsatz der Hauptfarbe, damit wichtige Aktionen unterscheidbar bleiben. Die Empfehlungen beziehen sich auf den dort gezeigten Shop, nicht auf eine allgemein beste Palette.

In [Feedback on colour palette](https://www.reddit.com/r/webdesign/comments/1r3spe9/feedback_on_colour_palette/) wird besonders deutlich: Farbmuster allein reichen nicht. Man muss wissen, welche Farbe Text, Fläche, Zustand oder Aktion kennzeichnet. Zu ähnliche Blautöne können Zustände ununterscheidbar machen. Deshalb wird die Nine.ai-Palette an echten Buttons, Texten, Glas-Icons und Angebotsflächen beurteilt.

| Rolle | Farbe | Verwendung |
|---|---|---|
| Dunkle Grundfläche | `#151515` | Einstieg, Projekte, ergänzende Inhalte |
| Helle Angebotsfläche | `#EFF1F4` | Paketwahl, gute Lesbarkeit beim Vergleichen |
| Dunkler Text auf hell | `#171B24` | Leistung, Preis und Überschriften |
| Markenblau | `#0A4FD8` | Primäre Aktionen und große Abschlussfläche |
| Helles Blau | `#A9C9FF` | Große Textakzente auf dunkler Fläche |
| Sekundärtext auf dunkel | `#AAB1BF` | Beschreibungen ohne schwachen Kontrast |
| Sekundärtext auf hell | `#566171` | Ergänzende Leistungsinformationen |
| Aktive Auswahl | `#DAE5F7` mit `#123A78` | Sichtbar gefüllter Ziel-Tab, zusätzlich semantischer Auswahlzustand |

Blau plus Silbergrau und Anthrazit ist eine Markenentscheidung. Es gibt aus dieser Recherche keinen Beleg, dass diese Palette garantiert mehr Anfragen erzeugt. Eine zusätzliche warme Akzentfarbe ist für diese Hierarchie nicht erforderlich. Gelb wird im Nine.ai-Interface nicht verwendet; Originalinhalte eines echten Referenzscreenshots werden nicht umgefärbt.

## 3. Drei verkaufsorientierte Anbieter im Vergleich

Alle drei folgenden Websites wurden im Browser betrachtet. Bewertet wurde ihr sichtbarer Angebots- und Kontaktaufbau. Kundenzahlen, Referenzen, Umsatz und Conversion dieser Anbieter wurden nicht unabhängig verifiziert; dies ist keine Rangliste der erfolgreichsten Agenturen.

| Anbieter | Beobachtbarer Verkaufsweg | Ableitung für Nine.ai | Nicht übernommen |
|---|---|---|---|
| [WebFabrik24](https://webfabrik-24.de/) | Verständliches Website-Angebot, Designbeispiele im Einstieg, Anfrage-CTA, Ablauf, Pakete und häufige Fragen | Angebot und Preis schnell zugänglich machen; Beispiele zeigen; nächsten Schritt wiederholen | Fremde Bewertungen, Kundenzahlen, Rabattaktionen, Abomodell und Lieferzeitversprechen |
| [die webfabrik, Mainz](https://www.webfabrik.net/) | Klar benannte Leistungen, direkter Projektkontakt, Einstiegspakete mit beschriebenem Umfang | Keine technischen Begriffe als Voraussetzung für die Orientierung; Leistung und Anfrage zusammenführen | Dichte Textmengen, durchgehende kleine Boxen und Umrandungen |
| [WebWeltWeit](https://www.webweltweit.de/) | Explizite Zielgruppe, Paketwahl und Designvorschau; Kosten und Bestellschritte werden erklärt | Nutzer sollen vor dem nächsten Schritt wissen, was sie auswählen und was enthalten ist | Karussell, Konto-/Zahlungslogik ohne betriebliche Grundlage und mehrfach ähnliche Werbesektionen |

Die zusätzlich gesuchte Website Factory ließ sich unter der gefundenen Adresse `www.website-factory.de` über die Recherche nicht zuverlässig öffnen. Sie wird deshalb nicht als visuell geprüfte Referenz ausgegeben. Anbieter mit ähnlichen Namen wurden nicht als dasselbe Unternehmen behandelt.

Die entscheidende Gemeinsamkeit ist die erkennbare Leistung und eine konkrete nächste Handlung. Für Nine.ai ist das eine begründete Gestaltungsentscheidung, kein Nachweis einer bereits funktionierenden Verkaufsmaschine.

## 4. Aufbau entlang echter Besucherfragen

| Besucherfrage | Umsetzung |
|---|---|
| Was macht ihr und hilft mir das? | „Deine Website. Mehr Anfragen.“ Dazu ein kurzer Satz über Websites und Google Ads für Unternehmen. |
| Was kostet der Einstieg? | Drei direkt verlinkte Preis-Einstiege. Auf dem Handy vor dem animierten Logo. |
| Welches Angebot brauche ich? | Vier verständliche Ziele mit Glas-Icons. Eine Auswahl zeigt Ergebnis, Leistungen, Preis und Paketlink. |
| Wie sieht so etwas aus? | Ein großes echtes ParkeSicher-Bild und eine verständliche Erklärung des Buchungseinstiegs. |
| Wie viel Arbeit habe ich damit? | Drei kurze Schritte: auswählen, besprechen, gemeinsam umsetzen. |
| Was muss ich vorab wissen? | FAQ zu Paketwahl, vorhandenen Inhalten, Pflege und Vorschaugrenzen. |
| Wie starte ich? | Durchgehend erreichbare Anfrage im Header, direkte Paketformulare und alternatives Kurzformular. |

Der Rhythmus wechselt zwischen offenem Einstieg, heller Auswahlfläche, großem Projektbild, kurzen Prozessabsätzen und blauer Abschlussfläche. Nicht jede Frage bekommt eine weitere identische Dreierreihe mit Rahmen.

Das allgemeine Formular wurde von sechs Fragerunden auf ein kurzes Formular plus bearbeitbare Zusammenfassung reduziert. Die Paketformulare übernehmen die vorhandene Auswahl. Unternehmen und Starttermin sind keine Hürden mit zwingenden Detailangaben. Das entspricht den Empfehlungen zu [verständlichen, möglichst knappen Formularen](https://www.nngroup.com/articles/web-form-design/) und zur [Gruppierung mit Weißraum](https://www.nngroup.com/articles/form-design-white-space/). Eine konkrete Steigerung der Abschlussrate wurde für Nine.ai noch nicht gemessen.

## 5. Wo Bewegung sinnvoll ist

Die originale Nine.ai-Bildmarke erhält eine blaue, reflektierende Oberfläche. Sie reagiert auf die Maus, läuft bei Sichtbarkeit und lässt sich pausieren. Das ist die markenspezifische Hauptanimation. Mobile Besucher sehen zuerst Angebot und Preis. Glas bleibt auf Icons und Bedienelemente konzentriert, Texte stehen auf verlässlich lesbaren Flächen.

Inspiration liefern Apples [Liquid Glass](https://developer.apple.com/documentation/TechnologyOverviews/liquid-glass) und [Gestaltungshinweise zur Einführung](https://developer.apple.com/documentation/TechnologyOverviews/adopting-liquid-glass). Die Website verwendet eine eigene Web-Interpretation aus CSS und WebGL, keine native Apple-Komponente. Die [UX-Forendiskussion zu Liquid Glass](https://www.reddit.com/r/UXDesign/comments/1oz81w5/do_you_like_liquid_glass/) zeigt sowohl Gefallen an Material und Bewegung als auch Kritik an Ablenkung und Lesbarkeit. Deshalb keine transparenten Textflächen über unruhigem Inhalt.

[Unseen](https://unseen.co/) und die [2025-Version](https://2025.unseen.co/) wurden zuvor als Beispiele für markante Bewegung betrachtet. Ihre experimentelle Navigation und gelbe Farbe werden nicht auf den Verkaufsweg von Nine.ai übertragen.

## 6. Konkreter Design-Review

| Before | After | Why |
|---|---|---|
| Grotesk mit zusätzlicher kursiver Serifenschrift | Ausschließlich Cabinet Grotesk, ohne dekorative Kursivwechsel | Entspricht der ausdrücklichen Nutzerpräferenz und hält die Marke zusammen |
| Dünne Linien an Preisen, Abschnitten, FAQ und Karten | Abstand, klare Ausrichtung, gefüllte Auswahl und wenige größere Flächen | Weniger visuelles Grundrauschen |
| Hero-Aussage „was bewegen“ | Website und Anfrageziel direkt benannt | Leistung und Nutzen ohne Erklärung erkennbar |
| Zwei aufeinanderfolgende Paketdarstellungen auf der Homepage | Frühe Preislinks plus eine interaktive Zielauswahl | Weniger Wiederholung, klare Entscheidung |
| Sechs Fragerunden für allgemeine Anfragen | Kurzformular und bearbeitbare Zusammenfassung | Geringerer Aufwand vor dem ersten Kontakt |
| Generische Lichtdekoration | Bewegte originale Nine.ai-Bildmarke und gezielte Glas-Icons | Bewegung bekommt einen konkreten Markenbezug |
| Als Projektscreen verwendetes altes Nine.ai-Mockup | Aufnahme der öffentlich sichtbaren ParkeSicher-Startseite | Die Referenz zeigt tatsächlich das besprochene Produkt |

## 7. Prüfbarkeit und verbleibende Geschäftsangaben

30 Kombinationen aus sechs wichtigen Seiten und fünf Breiten (320, 390, 768, 1024, 1440 px) wurden im Browser auf überstehende Inhalte geprüft. Kein horizontaler Überlauf; eine Schriftfamilie in allen geprüften Überschriften, Texten und Buttons. Die Ergebnisse stehen in `studio-responsive-qa.json`. Menü, Logo-Pause, reduzierte Bewegung und Paket-Tabs wurden zusätzlich als Interaktionen geprüft. Alle 19 Routen wurden anschließend bei 390 px in der Produktionsversion geöffnet; kein Dokumentüberlauf und überall eine Schriftfamilie. Paketformular und allgemeines Formular wurden mit Testdaten bis zur Zusammenfassung bedient und die Paketdaten nach dem Zurückwechseln kontrolliert. Keine Browser-Konsolenfehler wurden dabei gemeldet. Der HTTP-Audit bestätigt 19 gültige Routen und drei echte 404-Fälle. Dies ist eine Browseremulation, keine physische Geräte- oder Feldmessung.

Die Website bleibt eine private Vorschau. Für echten Anfrageversand fehlen weiterhin der bestätigte Empfänger und ein eingerichteter Versandweg. Eine bloße Mailadresse wäre noch kein zuverlässiger serverseitiger Versanddienst. Es werden keine Leads, Zahlungen oder Bestellungen vorgetäuscht. Auch rechtliche Anbieterangaben, belastbare Projektrollen und verifizierte Ergebniszahlen müssen vor einer öffentlichen Vermarktung ergänzt werden.

Für eine spätere Wirkungsmessung sind qualifizierte Anfragen pro Einstiegskanal, Paketaufrufe und Formularabschlüsse sinnvoller als reine Animations- oder Klickzahlen. Erst echte Daten erlauben eine Aussage über die Verkaufswirkung. Es wurde dafür kein fremdes Tracking eingebaut.
