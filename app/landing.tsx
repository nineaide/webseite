import { ArrowDown, ArrowUpRight, Check } from 'lucide-react';
import { Header, Footer } from './site-chrome';
import { HeroShowcase, HomeProjectShowcase } from './project-showcase';
import { HomeServiceCards } from './home-service-cards';
import { WebsitePackages } from './website-packages';
import { FAQAnswers } from './faq-answers';
import './home-about.css';
import { Locations } from './locations';
import { PageStructuredData } from './structured-data';
import { DevelopmentCycle } from './development-cycle';
import { HomeContact } from './home-contact';

export default function Landing() {
  return (
    <div className="figma-site c-home">
      <PageStructuredData path="/" />
      <div className="home-opening">
        <Header />
        <main id="main">
          <section className="wrap sales-hero">
            <div className="sales-hero-copy">
              <span className="eyebrow">Webdesign für Unternehmen</span>
              <h1>Eine Website, die Kunden für dich gewinnt.</h1>
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
            id="zusammenarbeit"
            aria-labelledby="home-about-title"
          >
            <div className="wrap home-about-grid">
              <div className="home-about-copy">
                <span className="eyebrow">Unsere Zusammenarbeit</span>
                <h2 id="home-about-title">
                  So entsteht dein Projekt.
                </h2>
                <p>
                  Wir klären gemeinsam, was deine Website oder Anwendung leisten
                  soll, und setzen sie in überschaubaren Etappen um. Du siehst
                  früh Zwischenergebnisse und gibst Feedback, das direkt in
                  Planung und Umsetzung einfließt.
                </p>
                <a className="c-inline-link" href="/ueber-nine#zusammenarbeit">
                  So arbeiten wir bei Nine.ai <ArrowUpRight size={18} />
                </a>
              </div>
              <DevelopmentCycle />
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
                  <span className="eyebrow">Branchen & Website-Beispiele</span>
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
                  <span className="eyebrow">Website-Pakete & Basispreise</span>
                  <h2>Was soll deine Website für dich tun?</h2>
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
          <section className="process-area home-preparation" id="ablauf">
            <div className="wrap home-preparation-layout">
              <div className="section-heading">
                <div>
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
                <h2 id="home-answers-title">Fragen vor dem Projektstart</h2>
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
          <HomeContact />
        </main>
      </div>
      <Footer />
    </div>
  );
}
