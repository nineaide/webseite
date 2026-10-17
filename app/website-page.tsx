/* oxlint-disable next/no-img-element */
import {
  ArrowUpRight,
  Check,
  Monitor,
  PencilRuler,
  MousePointer2,
} from 'lucide-react';
import { WebsitePackages } from './website-packages';
import { ProjectGallery } from './project-showcase';
import { FAQ } from './subpages';
import { RelatedTopics } from './editorial-pages';
import { projectImageProps } from './project-image-props';
export default function WebsitePage() {
  return (
    <>
      <section className="website-service-hero">
        <div>
          <span className="eyebrow">WEBSITES FÜR UNTERNEHMEN</span>
          <h1>
            Dein Angebot ist gut.
            <br />
            <em>Zeigen wir es.</em>
          </h1>
          <p>
            Wir gestalten und entwickeln deine Unternehmenswebsite. Damit
            Besucher schnell verstehen, was du anbietest, Vertrauen aufbauen und
            dich leicht kontaktieren können.
          </p>
          <div>
            <a href="#website-pakete" className="c-button c-button-blue">
              Website-Pakete vergleichen <ArrowUpRight size={19} />
            </a>
            <a
              href="/website-erstellen-lassen?paket=unsicher#website-check"
              className="c-inline-link"
            >
              Vorhaben besprechen <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
        <div className="website-service-image">
          <img
            {...projectImageProps(
              '/project-images/gardentime-desktop.webp',
              '(max-width: 700px) calc(100vw - 64px), 650px',
            )}
            alt="Kundenprojekt Garden Time Frankfurt: Unternehmenswebsite mit Anfrageformular"
            width="1440"
            height="1000"
          />
          <span>Garden Time Frankfurt · Kundenprojekt</span>
        </div>
      </section>
      <nav className="service-jumps" aria-label="Auf dieser Seite">
        {[
          ['Was du bekommst', 'leistungen'],
          ['Pakete & Preise', 'website-pakete'],
          ['Website-Beispiele', 'website-beispiele'],
          ['Dein Aufwand', 'zusammenarbeit'],
          ['Fragen', 'website-fragen'],
        ].map(([label, id]) => (
          <a key={id} href={'#' + id}>
            {label}
          </a>
        ))}
      </nav>
      <section className="n-section" id="leistungen">
        <div className="section-heading">
          <div>
            <span className="eyebrow">VOM AUFBAU BIS ZUR FERTIGEN SEITE</span>
            <h2>
              Eine Website, die
              <br />
              zu deinem Betrieb passt.
            </h2>
          </div>
          <p>
            Für Dienstleister, Handwerk und mittelständische Unternehmen. Mit
            Leistungen, die verständlich bleiben.
          </p>
        </div>
        <div className="reason-columns">
          {[
            {
              title: 'Ein klarer Aufbau',
              text: 'Welche Frage muss deine Startseite zuerst beantworten? Welche Leistungen brauchen eine eigene Seite? Wir planen Inhalt und Wege aus Sicht deiner Kunden.',
              icon: MousePointer2,
            },
            {
              title: 'Dein eigener Stil',
              text: 'Logo, Bilder, Farben und Sprache sollen dein Unternehmen zeigen. Du erhältst einen individuellen Entwurf und gibst Feedback, bevor wir ihn umsetzen.',
              icon: PencilRuler,
            },
            {
              title: 'Sauber umgesetzt',
              text: 'Deine Website wird für Desktop und Mobil aufgebaut. Inhaltspflege, Kontaktformular und die technische Suchmaschinenbasis gehören zum beschriebenen Paket.',
              icon: Monitor,
            },
          ].map(({ title, text, icon: Icon }) => (
            <article key={title}>
              <Icon size={28} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="website-service-pricing" id="website-pakete">
        <div className="section-heading">
          <div>
            <span className="eyebrow">DU KENNST DEN PREIS VOR DEM START.</span>
            <h2>
              Vier Möglichkeiten.
              <br />
              Dein passender Einstieg.
            </h2>
          </div>
          <p>
            Kompakt mit Nine Start, umfassender mit Launch oder Growth. Nine X
            für dein individuelles Vorhaben.
          </p>
        </div>
        <WebsitePackages detailed />
      </section>
      <section className="n-section" id="website-beispiele">
        <div className="section-heading">
          <div>
            <span className="eyebrow">IDEEN FÜR DEINEN AUFTRITT</span>
            <h2>
              So unterschiedlich
              <br />
              kann eine Website sein.
            </h2>
          </div>
          <p>
            Echte Kundenprojekte aus Handwerk und Dienstleistung. Jeder Auftritt
            wird für das jeweilige Unternehmen gestaltet.
          </p>
        </div>
        <ProjectGallery
          compact
          ids={['mrcarkey', 'gardentime', 'dirik-autopflege']}
        />
      </section>
      <section className="website-collaboration n-section" id="zusammenarbeit">
        <div>
          <span className="eyebrow">DEIN AUFWAND BLEIBT ÜBERSCHAUBAR</span>
          <h2>
            Du kennst dein Geschäft.
            <br />
            Wir stellen die richtigen Fragen.
          </h2>
          <p>
            Eine neue Website muss nicht dein nächstes Vollzeitprojekt werden.
            Wir geben dir eine klare Reihenfolge für Inhalte, Feedback und
            Freigaben.
          </p>
        </div>
        <div>
          <h3>Das brauchen wir von dir</h3>
          <ul className="plain-checks">
            <li>
              <Check size={18} /> Dein Angebot und die wichtigsten Zielgruppen
            </li>
            <li>
              <Check size={18} /> Dein Logo und vorhandene Texte und Bilder
            </li>
            <li>
              <Check size={18} /> Zugang zur bisherigen Website, falls vorhanden
            </li>
            <li>
              <Check size={18} /> Gesammeltes Feedback zum Entwurf
            </li>
          </ul>
          <p>
            Neue Texte, Fotografie und größere Inhaltsübernahmen stimmen wir als
            zusätzlichen Umfang ab.
          </p>
        </div>
      </section>
      <RelatedTopics
        paths={[
          '/websites/dienstleister',
          '/websites/handwerk',
          '/websites/gastronomie',
        ]}
        title="Dein Unternehmen. Dein Auftritt."
      />
      <p className="editorial-guide-link">
        Noch in der Planung?{' '}
        <a href="/wissen/was-kostet-eine-website">Website-Kosten verstehen</a>{' '}
        und <a href="/wissen/website-briefing">das Briefing vorbereiten</a>.
      </p>
      <div id="website-fragen">
        <FAQ
          items={[
            [
              'Was kostet eine professionelle Unternehmenswebsite bei Nine.ai?',
              'Nine Start kostet 1.990 €, Nine Launch 6.900 € und Nine Growth 12.900 €, jeweils netto für die beschriebenen Leistungen. Nine X kalkulieren wir individuell. Hosting, Domain und Fremdlizenzen werden separat vereinbart. Bei Nine Growth sind Werbebudget und laufende Ads-Betreuung nicht enthalten.',
            ],
            [
              'Überarbeitet ihr auch bestehende Websites?',
              'Ja. Wir prüfen Inhalte, Struktur und technische Ausgangslage. Danach klären wir, was übernommen werden kann und was neu aufgebaut werden sollte. Der konkrete Übernahmeaufwand wird im Umfang festgehalten.',
            ],
            [
              'Wird meine Website für Google vorbereitet?',
              'Zum Website-Paket gehört eine technische Suchmaschinenbasis: verständliche Seitenstruktur, passende Seitentitel, mobile Darstellung und eine saubere technische Umsetzung. Laufende Suchmaschinenoptimierung und umfangreiche neue Inhalte sind separat zu planen. Bestimmte Rankings können wir nicht garantieren.',
            ],
            [
              'Was unterscheidet eine Website von einer Web-App?',
              'Eine Unternehmenswebsite erklärt dein Angebot und führt zur Kontaktaufnahme. Sobald Kunden sich anmelden, Daten verwalten oder komplexe Buchungen durchführen sollen, planen wir eine Web-App oder ein Kundenportal mit eigenem Umfang.',
            ],
            [
              'Gehören ein Shop oder ein Kundenlogin zum Paket?',
              'Nein. Shops, Kundenlogins und individuelle Daten- oder Schnittstellenlogik sind nicht Teil der Website-Festpreispakete. Solche Funktionen besprechen wir separat.',
            ],
            [
              'Kann mein Team die Website selbst pflegen?',
              'Bei Nine Launch und Nine Growth ist ein Bereich zur Inhaltspflege vorgesehen; bei Nine Start und Nine X stimmen wir ihn separat ab. Die benötigten Inhaltsmodule und die Übergabe planen wir passend zu deinem Team.',
            ],
          ]}
        />
      </div>
    </>
  );
}
