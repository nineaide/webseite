import { ArrowDown, ArrowUpRight, Check } from 'lucide-react';
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
                Wir gestalten und entwickeln deine Website. Damit Besucher deine
                Leistungen finden und dich direkt anfragen können.
              </p>
              <div className="hero-actions">
                <a href="#pakete" className="c-button c-button-light">
                  Website-Pakete ansehen <ArrowDown size={19} />
                </a>
                <a href="/projekt-starten" className="c-inline-link">
                  Kontakt aufnehmen <ArrowUpRight size={18} />
                </a>
              </div>
              <div className="hero-reassurance">
                <span>
                  <Check size={16} /> Transparente Basispreise
                </span>
                <span>
                  <Check size={16} /> Design & Entwicklung
                </span>
              </div>
              <p className="hero-price">
                Deine Landingpage ab <strong>1.990 €</strong>
              </p>
            </div>
            <HeroShowcase />
          </section>
          <section
            className="process-area home-about"
            aria-labelledby="home-about-title"
          >
            <div className="wrap home-about-grid">
              <div className="home-about-copy">
                <span className="eyebrow">WER WIR SIND</span>
                <h2 id="home-about-title">
                  Deine Idee.
                  <br />
                  Direkt mit uns umgesetzt.
                </h2>
                <p>
                  Bei Nine.ai sprichst du direkt mit den Menschen, die deine
                  Website oder digitale Lösung entwickeln. Ohne unnötige Umwege.
                </p>
                <a className="c-inline-link" href="/ueber-nine">
                  Über 9.ai <ArrowUpRight size={18} />
                </a>
              </div>
              <div
                className="home-about-process"
                aria-labelledby="home-about-process-title"
              >
                <h3 id="home-about-process-title">SO ARBEITEN WIR</h3>
                <div className="home-about-route">
                  <svg
                    className="home-about-route-line"
                    viewBox="0 0 600 360"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path d="M 8 20 H 530 Q 582 20 582 72 V 148 Q 582 200 530 200 H 8" />
                    <circle cx="8" cy="20" r="4" />
                    <circle cx="326" cy="20" r="4" />
                    <circle cx="326" cy="200" r="4" />
                    <path
                      className="home-about-route-finish"
                      d="m 20 192 -12 8 12 8"
                    />
                  </svg>
                  <ol>
                    {[
                      ['Kennenlernen', 'Wir sprechen über dein Vorhaben.'],
                      [
                        'Konzept & Design',
                        'Du siehst, wie deine Lösung aussehen kann.',
                      ],
                      [
                        'Entwicklung',
                        'Wir setzen um und stimmen uns mit dir ab.',
                      ],
                      ['Livegang', 'Dein Projekt geht online.'],
                    ].map(([title, description]) => (
                      <li key={title}>
                        <div>
                          <h4>{title}</h4>
                          <p>{description}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </section>
          <section className="package-area home-services" id="leistungen">
            <div className="wrap">
              <div className="section-heading home-services-heading">
                <div>
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
                  <span className="eyebrow">WEBSITE-PAKETE & BASISPREISE</span>
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
                  <span className="eyebrow">VOR DEM PROJEKTSTART</span>
                  <h2>Was wir zum Projektstart von dir brauchen</h2>
                </div>
                <p>
                  Eine fertige Planung brauchst du nicht. Gemeinsam klären wir,
                  was bereits vorhanden ist und wobei du Unterstützung möchtest.
                </p>
              </div>
              <dl className="home-project-preparation">
                <div>
                  <dt>Dein Vorhaben</dt>
                  <dd>
                    Was soll sich für dein Unternehmen oder deine Kunden
                    verbessern? Beschreibe uns die Aufgabe so, wie du sie im
                    Alltag erlebst.
                  </dd>
                </div>
                <div>
                  <dt>Vorhandene Inhalte</dt>
                  <dd>
                    Zeig uns deine Website und die Inhalte, die wir übernehmen
                    können. Fehlende Texte oder Bilder besprechen wir separat.
                  </dd>
                </div>
                <div>
                  <dt>Bestehende Technik</dt>
                  <dd>
                    Welche Programme nutzt dein Team bereits? Benötigte Zugänge
                    stimmen wir persönlich ab. Bitte sende keine Passwörter über
                    das Anfrageformular.
                  </dd>
                </div>
              </dl>
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
                    'Wie sind die Website-Preise zu verstehen?',
                    'Nine Start beginnt bei 1.990 €, Nine Launch bei 6.900 € und Nine Growth bei 12.900 €, jeweils als Basispreis für den beschriebenen Umfang. Die Preise dienen als Orientierung. Dein persönliches Angebot richtet sich nach deinen Anforderungen. Betrieb, Werbebudget und zusätzliche Leistungen werden separat vereinbart.',
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
                    'Wie frage ich ein Paket an?',
                    'Wähle dein Paket und ergänze deine Kontaktdaten. Wir besprechen deinen Bedarf und erstellen ein persönliches Angebot. Deine Anfrage ist unverbindlich.',
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
