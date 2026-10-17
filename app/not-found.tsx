import { Header, Footer } from './site-chrome';
import { ArrowUpRight } from 'lucide-react';
export default function NotFound() {
  return (
    <div className="figma-site">
      <Header />
      <main id="main" className="f-container n-hero">
        <div>
          <span className="n-kicker">404 / SEITE NICHT GEFUNDEN</span>
          <h1>Hier geht es gerade nicht weiter.</h1>
        </div>
        <div className="n-hero-lead">
          <p>
            Die angefragte Seite existiert nicht. Über die Startseite findest du
            Lösungen, Projekte und Pakete.
          </p>
          <a className="f-button" href="/">
            Zur Startseite{' '}
            <ArrowUpRight className="text-arrow" aria-hidden="true" />
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
