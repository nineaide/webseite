/* oxlint-disable next/no-img-element */
import {
  ArrowUpRight,
  Target,
  Command,
  MoveHorizontal,
  CornerDownRight,
  Plus,
} from 'lucide-react';
import { services, packages, money, generalFaq } from './site-data';
import { packagePresentation } from './package-cards';
import { PackageOverview } from './package-cards';
import { ProjectGallery, ProjectScreens } from './project-showcase';
import { referenceProjects } from './reference-data';
import { FAQAnswers } from './faq-answers';
import { ProjectProofLinks, RelatedTopics } from './editorial-pages';
import { TeamIntro } from './team-intro';
import { projectImageProps } from './project-image-props';
export function FAQ({ items = generalFaq }: { items?: string[][] }) {
  return (
    <section className="n-section n-faq">
      <div>
        <span className="n-kicker">GUT ZU WISSEN</span>
        <h2>
          Klare Fragen.
          <br />
          <em>Klare Antworten.</em>
        </h2>
      </div>
      <FAQAnswers items={items} />
    </section>
  );
}
export function Hero({
  kicker,
  title,
  lead,
  href,
  label = 'Projekt starten',
}: {
  kicker: string;
  title: string;
  lead: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="n-hero">
      <div>
        <span className="n-kicker">{kicker}</span>
        <h1>{title}</h1>
      </div>
      <div className="n-hero-lead">
        <p>{lead}</p>
        {href && (
          <a href={href} className="f-button">
            {label} <ArrowUpRight className="text-arrow" aria-hidden="true" />
          </a>
        )}
      </div>
    </section>
  );
}
export function SolutionLinks() {
  return (
    <div className="n-solution-grid">
      {services.map((s, i) => (
        <a
          className={'n-solution ' + (i === 0 ? 'n-blue' : '')}
          href={'/' + s.slug}
          key={s.slug}
        >
          <span className="n-index">
            0{i + 1} / {s.pillar}
          </span>
          <div>
            <h2>{s.label}</h2>
            <span className="n-arrow" aria-hidden="true">
              <ArrowUpRight className="text-arrow" />
            </span>
          </div>
          <p>{s.lead}</p>
        </a>
      ))}
    </div>
  );
}
export function Solutions() {
  return (
    <>
      <Hero
        kicker="BUILD / AUTOMATE / SCALE"
        title="Was können wir für dich tun?"
        lead="Eine Website bauen, ein Kundenportal entwickeln, mit Google Werbung machen oder wiederkehrende Aufgaben automatisieren. Hier findest du den passenden Weg."
      />
      <SolutionLinks />
      <ProjectProofLinks
        ids={['parkesicher', 'entwurf-energie', 'mb-performance']}
      />
      <section className="n-section n-split">
        <div>
          <span className="n-kicker">ZUSAMMEN GEDACHT</span>
          <h2>
            Die Übergänge
            <br />
            machen den <em>Unterschied.</em>
          </h2>
        </div>
        <div className="n-copy">
          <p>
            Eine Kampagne braucht eine überzeugende Zielseite. Eine Buchung
            braucht verlässliche Daten. Eine Automation braucht einen klaren
            Prozess.
          </p>
          <p>
            Deshalb planen wir diese Verbindungen von Anfang an. Du startest mit
            dem Bereich, der dich heute bremst. Die nächste Ausbaustufe bleibt
            mitgedacht.
          </p>
          <a className="n-text-link" href="/ueber-nine">
            So arbeitet Nine.ai{' '}
            <ArrowUpRight className="text-arrow" aria-hidden="true" />
          </a>
        </div>
      </section>
      <RelatedTopics
        paths={[
          '/wissen/website-briefing',
          '/wissen/web-app-oder-standardsoftware',
          '/wissen/google-ads-budget-planen',
        ]}
        title="Dein nächster Schritt lässt sich planen."
      />
      <FAQ />
    </>
  );
}
export function ServicePage({ slug }: { slug: string }) {
  const s = services.find((s) => s.slug === slug)!;
  const href = s.package
    ? '/checkout/' + s.package
    : '/projekt-starten?service=' + encodeURIComponent(s.project);
  const entryPackage = packages.find((p) => p.slug === s.package);
  return (
    <>
      <Hero
        kicker={s.pillar + ' / ' + s.label}
        title={s.title}
        lead={s.lead}
        href={href}
        label={s.cta}
      />
      <section className="c-service-offer">
        <div>
          <span>DEIN PASSENDER EINSTIEG</span>
          <h2>
            {entryPackage
              ? packagePresentation[entryPackage.slug].title
              : 'Eine Aufgabe automatisieren'}
          </h2>
          <p>
            {entryPackage
              ? (entryPackage.suffix.includes('ab') ? 'ab ' : '') +
                money(entryPackage.price) +
                (entryPackage.suffix.includes('Monat') ? ' / Monat' : '')
              : 'ab 4.900 €'}{' '}
            netto · Preisorientierung
          </p>
        </div>
        <a className="c-button c-button-light" href={href}>
          {entryPackage ? 'Paket ansehen' : 'Aufgabe beschreiben'}{' '}
          <ArrowUpRight className="text-arrow" aria-hidden="true" />
        </a>
      </section>
      <section className="n-section n-split">
        <h2>
          Kommt dir das
          <br />
          <em>bekannt vor?</em>
        </h2>
        <div className="n-number-list">
          {s.situations.map((text, i) => (
            <div key={text}>
              <span>0{i + 1}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="n-section">
        <div className="n-section-heading">
          <span className="n-kicker">KONKRET UMGESETZT</span>
          <h2>
            Das setzen wir <em>für dich um.</em>
          </h2>
        </div>
        <div className="n-feature-grid">
          {s.features.map(([title, text], i) => {
            const Icon = [
              ArrowUpRight,
              Target,
              Command,
              MoveHorizontal,
              CornerDownRight,
              Plus,
            ][i % 6];
            return (
              <article key={title} className={i === 0 ? 'n-blue' : ''}>
                <span className="n-feature-icon" aria-hidden="true">
                  <Icon className="text-arrow" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </section>
      {s.slug === 'plattformen-web-apps' ? (
        <CaseTeaser />
      ) : (
        <section className="n-section n-split">
          <h2>
            Erst verstehen.
            <br />
            Dann <em>umsetzen.</em>
          </h2>
          <div className="n-number-list">
            {[
              ['Discover', 'Ziele, Ausgangslage und Umfang gemeinsam klären.'],
              [
                'Design',
                'Abläufe und Lösung sichtbar machen, bevor die Entwicklung beginnt.',
              ],
              [
                'Build',
                'In nachvollziehbaren Schritten umsetzen und überprüfen.',
              ],
              [
                'Scale',
                'Ergebnisse betrachten und die nächste Verbesserung priorisieren.',
              ],
            ].map(([a, b], i) => (
              <div key={a}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{a}</h3>
                  <p>{b}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      <FAQ items={s.faq} />
    </>
  );
}
export function CaseTeaser() {
  return (
    <section className="n-case-teaser n-section s-case">
      <a href="/projekte/parkesicher" aria-label="Projekt ParkeSicher ansehen">
        <div className="s-case-meta">
          <span>01 / PARKESICHER</span>
          <span>Plattform · Suche & Buchung</span>
        </div>
        <div className="s-case-visual">
          <img
            {...projectImageProps(
              '/project-images/parkesicher-desktop.webp',
              '(max-width: 700px) calc(100vw - 64px), 650px',
            )}
            alt="ParkeSicher: Flughafen und Reisezeitraum für eine Parkplatzsuche auswählen"
            width="1440"
            height="1000"
            loading="lazy"
          />
          <span className="s-case-open" aria-hidden="true">
            Projekt
            <br />
            ansehen <ArrowUpRight className="text-arrow" />
          </span>
        </div>
        <div className="s-case-caption">
          <h2>
            Einfach parken.
            <br />
            <em>Entspannt abheben.</em>
          </h2>
          <div>
            <p>
              Flughafenparkplätze finden, vergleichen und buchen. Eine klare
              Oberfläche verbindet Suche, Anbieter und Buchungsabläufe.
            </p>
            <span className="n-text-link">
              ParkeSicher entdecken{' '}
              <ArrowUpRight className="text-arrow" aria-hidden="true" />
            </span>
          </div>
        </div>
      </a>
    </section>
  );
}
export function Projects() {
  return (
    <>
      <section className="s-project-intro">
        <span className="n-kicker">KUNDENPROJEKTE</span>
        <h1>
          Gute Arbeit
          <br />
          <em>zum Ansehen</em>
        </h1>
        <p>
          Unterschiedliche Unternehmen. Unterschiedliche Aufgaben. Websites, Datenbanken und
          eigene Systeme – hier kannst du unsere Arbeit ansehen.
        </p>
      </section>
      <ProjectGallery priorityFirst headingLevel={2} />
    </>
  );
}
export function Parkesicher() {
  const project = referenceProjects.find((item) => item.id === 'parkesicher')!;
  return (
    <>
      <Hero
        kicker="KUNDENPROJEKT / PLATTFORM & ANBIETERSYSTEM"
        title="ParkeSicher. Vom Parkplatz zur Plattform."
        lead="Parkplätze finden und buchen. Ankünfte koordinieren, Preise pflegen und den Betrieb organisieren – in einem zusammenhängenden System."
        href="/projekt-starten?service=Plattform"
        label="Ähnliches System planen"
      />
      <div className="n-case-facts">
        {[
          ['Produkt', 'Buchungsplattform'],
          ['Bereich', 'Flughafenparken'],
          ['Erweiterung', 'Eigene Anbieter-Anwendung'],
        ].map(([label, value]) => (
          <div key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
      <section
        className="n-section reference-case-screens"
        aria-label="ParkeSicher Website und Systemansichten"
      >
        <ProjectScreens project={project} />
      </section>
      <section className="n-section n-split">
        <div>
          <span className="n-kicker">VON DER SUCHE BIS ZUM BETRIEB</span>
          <h2>
            Einfach buchen.
            <br />
            <em>Den Alltag steuern.</em>
          </h2>
        </div>
        <div className="n-copy">
          <p>
            Reisende wählen Flughafen und Zeitraum, vergleichen
            Parkplatzangebote und starten ihre Buchung. Die Website konzentriert
            sich auf einen verständlichen Weg durch diese Entscheidungen.
          </p>
          <p>
            Für Anbieter geht es danach weiter: Die eigene Anwendung zeigt
            ankommende und abreisende Fahrzeuge, filtert Buchungen und
            ermöglicht die Pflege von Preisen, Öffnungszeiten und Sperrtagen.
          </p>
        </div>
      </section>
      <section className="n-section">
        <span className="n-kicker">EIN SYSTEM FÜR MEHRERE AUFGABEN</span>
        <h2>
          Was hinter einer <em>Buchung steckt.</em>
        </h2>
        <ol className="n-flow">
          {[
            ['Suche', 'Flughafen und Reisezeitraum'],
            ['Buchung', 'Angebote und Buchungsablauf'],
            ['Tagesübersicht', 'Ankünfte, Abfahrten und Fahrzeuge'],
            ['Steuerung', 'Preise und Verfügbarkeiten'],
            ['Auswertung', 'Buchungsvolumen im Blick'],
          ].map(([title, text], index) => (
            <li key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
        {project.url && (
          <a
            className="c-inline-link"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            ParkeSicher live ansehen <ArrowUpRight size={18} />
          </a>
        )}
      </section>
    </>
  );
}
export function Packages() {
  return (
    <>
      <PackageOverview />
      <ProjectProofLinks ids={['meister-lorenz', 'entwurf-energie']} />
      <FAQ />
    </>
  );
}
export function About() {
  return (
    <>
      <Hero
        kicker="ÜBER NINE.AI"
        title="Du machst dein Geschäft. Wir kümmern uns um deinen Auftritt."
        lead="Wir planen und bauen Websites, schalten Google-Werbung und automatisieren Abläufe. Du bekommst einen klaren Plan und weißt, was als Nächstes passiert."
        href="/website-erstellen-lassen?paket=unsicher#website-check"
        label="Zusammenarbeit starten"
      />
      <div className="n-about-visual">
        <img
          {...projectImageProps(
            '/project-images/parkesicher-desktop.webp',
            '(max-width: 700px) calc(100vw - 64px), 850px',
          )}
          alt="Unser Kundenprojekt ParkeSicher: Suche und Buchung von Flughafenparkplätzen"
          width="1440"
          height="1000"
        />
        <div className="n-blue">
          <span className="n-kicker">UNSERE ARBEIT · PARKESICHER</span>
          <p>
            Vom ersten Auftritt bis zum System für <em>deinen Betrieb.</em>
          </p>
          <span aria-hidden="true">
            <ArrowUpRight className="text-arrow" />
          </span>
        </div>
      </div>
      <section className="n-section n-split">
        <TeamIntro />
        <div className="n-copy">
          <h2>Was wir zusammenbringen.</h2>
          <p>
            Nine.ai gestaltet Websites, entwickelt Web-Apps und verbindet sie
            mit Google Ads und Automatisierung. Wir arbeiten mit Unternehmen in
            ganz Deutschland.
          </p>
          <p>
            Unsere Referenzen zeigen konkrete Arbeiten: Auftritte für
            Handwerk und Dienstleister, die Fahrzeugdatenbank von MB Performance
            sowie Buchung und Verwaltung bei ParkeSicher. Beim Café-Projekt
            gehören auch Reservierung und ein eigenes Bestellsystem dazu.
          </p>
          <a href="/projekte" className="n-text-link">
            Unsere Kundenprojekte kennenlernen{' '}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>
      <section className="n-section">
        <span className="n-kicker">KOMPETENZEN, DIE ZUSAMMENARBEITEN</span>
        <h2>
          Direkt mit denen,
          <br />
          die es <em>umsetzen.</em>
        </h2>
        <div className="n-feature-grid">
          {[
            [
              'Strategie & Prozesse',
              'Geschäftsziele, Anforderungen und Wirtschaftlichkeit bilden den Rahmen.',
            ],
            [
              'UX & Webentwicklung',
              'Komplexe Abläufe werden zu verständlichen, gut bedienbaren Interfaces.',
            ],
            [
              'Backend & Integration',
              'Daten, Rechte und Geschäftsregeln verbinden das Produkt mit dem Betrieb.',
            ],
            [
              'Growth & Daten',
              'Kampagnen und Conversion werden gemeinsam mit dem Produkt betrachtet.',
            ],
          ].map(([a, b], i) => (
            <article key={a}>
              <span className="n-index">0{i + 1}</span>
              <h3>{a}</h3>
              <p>{b}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="n-section n-split">
        <h2>
          Unsere Haltung
          <br />
          zeigt sich <em>im Ablauf.</em>
        </h2>
        <div className="n-number-list">
          {[
            [
              'Klarheit vor Geschwindigkeit',
              'Wir klären das Ziel und treffen bewusste Entscheidungen über den Umfang.',
            ],
            [
              'Sichtbare Zwischenschritte',
              'Prototypen, gemeinsame Reviews und klare Zuständigkeiten machen Fortschritt nachvollziehbar.',
            ],
            [
              'Verantwortung über den Launch hinaus',
              'Übergabe, Betrieb und Weiterentwicklung werden früh besprochen.',
            ],
          ].map(([a, b], i) => (
            <div key={a}>
              <span>0{i + 1}</span>
              <div>
                <h3>{a}</h3>
                <p>{b}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CaseTeaser />
    </>
  );
}
export function Legal({ kind }: { kind: string }) {
  return (
    <>
      <Hero
        kicker="INFORMATIONEN ZUM PROJEKTSTAND"
        title={kind}
        lead="Diese Website ist öffentlich erreichbar. Die vollständigen Anbieter- und Rechtstexte für den Unternehmensauftritt werden noch ergänzt."
      />
      <article className="n-legal n-copy">
        {kind === 'Impressum' ? (
          <>
            <h2>Anbieterangaben</h2>
            <p>
              Firmierung, ladungsfähige Anschrift, vertretungsberechtigte Person
              und gegebenenfalls Register- und Umsatzsteuerangaben liegen für
              diese Vorschau noch nicht vor.
            </p>
            <p>
              Geschäftlicher Kontakt:{' '}
              <a href="mailto:anfrage@nineai.de">anfrage@nineai.de</a>.
            </p>
            <h2>Bild- und Designmaterial</h2>
            <p>
              Die Projektgalerie zeigt freigegebene Kundenreferenzen. Website-
              Aufnahmen stammen von den verlinkten Seiten; interne
              Systemansichten wurden vom Auftraggeber bereitgestellt.
              Personenbezogene Angaben in diesen Systemansichten wurden
              anonymisiert. Die Aufnahmen dokumentieren den Stand vom 7.
              September 2026 und belegen keine Umsatz- oder
              Conversion-Steigerungen. Verbleibende Konzeptmotive sind als
              solche gekennzeichnet. Das Nine.ai-Logo wurde vom Auftraggeber
              bereitgestellt.
            </p>
          </>
        ) : kind === 'Datenschutz' ? (
          <>
            <h2>Website-Anfragen</h2>
            <p>
              Wenn du den Website-Check auf /website-erstellen-lassen absendest,
              werden dein gewähltes Vorhaben, der Paketeinstieg, Name, E-Mail
              und freiwillig ergänzte Angaben auf dem Server gespeichert. Falls
              der aufgerufene Link Kampagnenangaben enthält, werden diese der
              Anfrage zugeordnet. Die Speicherung erfolgt in der zur Website
              gehörenden Datenbank bei unserem Hostingdienst Sites auf
              Cloudflare-Infrastruktur. Deine Angaben dienen der Bearbeitung
              deiner Anfrage. Der Formularversand meldet erst nach erfolgreicher
              Speicherung einen Empfang.
            </p>
            <p>
              Der E-Mail-Kontakt für diese Anfragen ist{' '}
              <a href="mailto:anfrage@nineai.de">anfrage@nineai.de</a>. Ein
              automatischer Benachrichtigungsdienst wird getrennt eingerichtet;
              derzeit gibt es keine Newsletter-Anmeldung und keine Übertragung
              deiner Eingaben an Google- oder Meta-Werbepixel.
            </p>
            <h2>Projektbriefing</h2>
            <p>
              In den übrigen vorbereiteten Projekt- und Bestellformularen
              bleiben deine Eingaben im geöffneten Browserfenster und werden
              nicht an Nine.ai versendet. Du kannst eine Zusammenfassung als
              Textdatei herunterladen. Nach Verlassen oder Neuladen der Seite
              werden die Formulareingaben nicht wiederhergestellt.
            </p>
            <h2>Bestätigung deiner Anfrage</h2>
            <p>
              Nach erfolgreichem Anfrageeingang merkt sich dein Browser für die
              aktuelle Sitzung ausschließlich, dass eine Anfrage abgeschickt
              wurde. So zeigt der Footer eine Bestätigung. Namen,
              E-Mail-Adressen oder Formularinhalte werden dafür nicht im Browser
              gespeichert.
            </p>
            <h2>Schriften und Tracking</h2>
            <p>
              Die verwendeten Schriften und Bilder werden mit der Website
              ausgeliefert. Diese Vorschau bindet keine Marketing-Tracker,
              Werbepixel oder Zahlungsdienste ein.
            </p>
            <h2>Hosting</h2>
            <p>
              Die Vorschau wird über Sites bereitgestellt. Beim Abruf entstehen
              technisch notwendige Verbindungsdaten beim Hostinganbieter. Die
              vollständigen Angaben zu Verantwortlichem, Hosting,
              Rechtsgrundlagen, Speicherdauer und Betroffenenrechten müssen vor
              öffentlichem Betrieb konkret ergänzt werden.
            </p>
          </>
        ) : (
          <>
            <h2>Keine Bestellung in der Vorschau</h2>
            <p>
              Die dargestellten Pakete erläutern geplante Leistungen und
              Preisanker. Es wird kein kostenpflichtiger Auftrag ausgelöst,
              keine Zahlung eingezogen und kein Starttermin verbindlich
              reserviert.
            </p>
            <h2>Vertragsgrundlagen</h2>
            <p>
              Leistungsbeschreibung, Zahlungsbedingungen, Nutzungsrechte und
              allgemeine Geschäftsbedingungen werden mit der tatsächlichen
              vertragsschließenden Gesellschaft finalisiert. Diese Seite enthält
              keine fertigen Vertragsbedingungen.
            </p>
          </>
        )}
      </article>
    </>
  );
}
