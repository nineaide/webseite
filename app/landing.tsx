import {
  ArrowDown,
  ArrowUpRight,
  Check,
} from 'lucide-react';
import { Header, Footer } from './site-chrome';
import { HeroShowcase, HomeProjectShowcase } from './project-showcase';
import { HomeServiceCards } from './home-service-cards';
import { WebsitePackages } from './website-packages';
import { FAQAnswers } from './faq-answers';
import './home-about.css';
import { Locations } from './locations';
import { PageStructuredData } from './structured-data';

export default function Landing() {
  return (
    <div className="figma-site c-home">
      <PageStructuredData path="/" />
      <div className="home-opening">
        <Header />
        <main id="main">
          <section className="wrap sales-hero">
            <div className="sales-hero-copy">
              <span className="eyebrow">WEBDESIGN FÜR UNTERNEHMEN</span>
              <h1>
                Eine Website,
                <br />
                die Kunden
                <br />
                <em>für dich gewinnt.</em>
              </h1>
              <p>
                Wir gestalten und entwickeln deine Website. Damit Besucher
                deine Leistungen finden und dich direkt anfragen können.
              </p>
              <div className="hero-actions">
                <a href="#pakete" className="c-button c-button-light">
                  Website-Pakete ansehen <ArrowDown size={19} />
                </a>
                <a
                  href="/website-erstellen-lassen?paket=unsicher#website-check"
                  className="c-inline-link"
                >
                  Erst einmal sprechen <ArrowUpRight size={18} />
                </a>
              </div>
              <div className="hero-reassurance">
                <span>
                  <Check size={16} /> Feste Website-Preise
                </span>
                <span>
                  <Check size={16} /> Design & Entwicklung
                </span>
              </div>
              <p className="hero-price">
                Deine Landingpage ab <strong>1.990 €</strong> netto
              </p>
            </div>
            <HeroShowcase />
          </section>
          <section className="process-area home-about" aria-labelledby="home-about-title">
            <div className="wrap home-about-grid">
              <div className="home-about-copy">
                <span className="eyebrow">WER WIR SIND</span>
                <h2 id="home-about-title">Deine Idee.<br />Direkt mit uns umgesetzt.</h2>
                <p>Bei Nine.ai sprichst du direkt mit den Menschen, die deine Website oder digitale Lösung entwickeln. Ohne unnötige Umwege.</p>
                <a className="c-inline-link" href="/ueber-nine">Über 9.ai <ArrowUpRight size={18} /></a>
              </div>
              <div className="home-about-process" aria-labelledby="home-about-process-title">
                <h3 id="home-about-process-title">SO ARBEITEN WIR</h3>
                <ol>
                  {[
                    ['Kennenlernen', 'Wir sprechen über dein Vorhaben.'],
                    ['Konzept & Design', 'Du siehst, wie deine Lösung aussehen kann.'],
                    ['Entwicklung', 'Wir setzen um und stimmen uns mit dir ab.'],
                    ['Livegang', 'Dein Projekt geht online.'],
                  ].map(([title, description], index) => (
                    <li key={title}>
                      <span className="home-about-step" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                      <div><h4>{title}</h4><p>{description}</p></div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>
          <section className="package-area home-services" id="leistungen">
            <div className="wrap">
              <div className="section-heading home-services-heading">
                <div>
                  <span className="eyebrow">BUILD · AUTOMATE · SCALE</span>
                  <h2>Unsere Leistungen</h2>
                </div>
              </div>
              <HomeServiceCards />
            </div>
          </section>
          <section className="work-area" id="beispiele">
            <div className="wrap">
              <div className="section-heading home-work-heading">
                <div>
                  <span className="eyebrow">BRANCHEN & WEBSITE-BEISPIELE</span>
                  <h2>Einblicke in unsere Arbeit</h2>
                </div>
              </div>
              <HomeProjectShowcase />
              <div className="work-link">
                <a className="c-inline-link" href="/projekte">
                  Alle Projekte ansehen <ArrowUpRight size={19} />
                </a>
              </div>
            </div>
          </section>
          <section className="package-area" id="pakete">
            <div className="wrap">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">
                    DEINE WEBSITE. DEIN FESTPREIS.
                  </span>
                  <h2>
                    Was soll deine
                    <br />
                    Website für dich tun?
                  </h2>
                </div>
                <p>
                  Von der kompakten Landingpage bis zur individuellen Lösung.
                  Hier findest du den passenden Einstieg und den Preis.
                </p>
              </div>
              <WebsitePackages />
            </div>
          </section>
          <section className="work-area home-locations" id="standorte">
            <Locations className="wrap" />
          </section>
          <section className="process-area" id="ablauf">
            <div className="wrap">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">
                    PERSÖNLICHE ZUSAMMENARBEIT
                  </span>
                  <h2>Gemeinsam von der Idee bis zum Launch.</h2>
                </div>
                <p>
                  Du arbeitest direkt mit uns zusammen: Wir stimmen Ziele,
                  Entwurf und Umsetzung Schritt für Schritt mit dir ab.
                </p>
              </div>
              <div className="process-list">
                {[
                  [
                    'Paket wählen. Gemeinsam loslegen.',
                    'Wir klären Ziel, Umfang und Zeitplan. Du bringst dein Angebot und vorhandene Inhalte mit.',
                  ],
                  [
                    'Entwurf ansehen. Feedback geben.',
                    'Du siehst den Entwurf und gibst Feedback, bevor wir deine Website umsetzen.',
                  ],
                  [
                    'Prüfen. Gemeinsam online gehen.',
                    'Wir prüfen die Ansichten, übergeben die Website und erklären dir die vereinbarte Pflege.',
                  ],
                ].map(([title, text], i) => (
                  <article key={title}>
                    <span className="process-number">0{i + 1}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section
            className="home-answers"
            aria-labelledby="home-answers-title"
          >
            <div className="wrap n-faq">
              <div className="home-answers-heading">
                <span className="eyebrow">GUT ZU WISSEN</span>
                <h2 id="home-answers-title">
                  Deine Fragen.
                  <br />
                  Direkt beantwortet.
                </h2>
              </div>
              <FAQAnswers
                items={[
                  [
                    'Welches Website-Paket passt zu mir?',
                    'Nine Start für eine kompakte Landingpage. Nine Launch für deinen Unternehmensauftritt. Nine Growth für Website und Werbestart. Nine X für ein individuell geplantes Vorhaben.',
                  ],
                  [
                    'Sind die Website-Preise fest?',
                    'Ja. Nine Start: 1.990 €, Nine Launch: 6.900 €, Nine Growth: 12.900 €, jeweils netto für den beschriebenen Umfang. Nine X erhält einen individuellen Angebotspreis. Hosting, Domain, Fremdlizenzen, Werbebudget und zusätzliche Leistungen kommen separat dazu.',
                  ],
                  [
                    'Was passiert mit meinen vorhandenen Inhalten?',
                    'Wir prüfen gemeinsam, welche Texte und Bilder wir übernehmen können. Neue Texte, Fotografie und aufwendige Inhaltsübernahmen vereinbaren wir separat.',
                  ],
                  [
                    'Wie lange dauert meine neue Website?',
                    'Den Zeitplan legen wir zum Start gemeinsam fest. Er hängt vom Umfang und davon ab, wann deine Inhalte und dein Feedback vorliegen.',
                  ],
                  [
                    'Kann ich meine Website danach selbst bearbeiten?',
                    'Bei Nine Launch und Nine Growth ist ein Bereich zur Inhaltspflege vorgesehen. Für Nine Start und Nine X stimmen wir die Pflege passend zum Umfang ab. Betrieb und Wartung besprechen wir separat.',
                  ],
                  [
                    'Kann ich das Paket direkt bestellen?',
                    'Du kannst jedes Paket unverbindlich anfragen. Für Nine Launch und Nine Growth kannst du zusätzlich einen Bestellentwurf vorbereiten. Ein verbindlicher Auftrag entsteht erst nach Vereinbarung; die Online-Zahlung ist noch nicht eingerichtet.',
                  ],
                ]}
              />
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
