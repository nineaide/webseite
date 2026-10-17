'use client';
/* oxlint-disable next/no-img-element */
import { ArrowUp, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useInquiryStatus } from './use-inquiry-status';
import { businessPhone } from './team-data';
import './site-footer.css';

export function Footer() {
  const received = useInquiryStatus();
  const path = usePathname();
  const contactHref =
    path === '/website-erstellen-lassen'
      ? '#website-check'
      : '/website-erstellen-lassen?paket=unsicher#website-check';
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <a href="#top" aria-label="9.ai – zurück zum Seitenanfang">
            <img
              src="/assets/brand/NineAI-dark.svg"
              alt="9.ai"
              width="150"
              height="51"
            />
            <ArrowUp size={19} aria-hidden="true" />
          </a>
          <p>
            Für Unternehmen.
            <br />
            In ganz Deutschland.
          </p>
        </div>
        <nav className="site-footer-links" aria-label="Footer-Navigation">
          <a href="/ueber-nine">Über 9.ai</a>
          <a href="/loesungen">Services</a>
          <a href={businessPhone?.href ?? contactHref}>
            {businessPhone ? 'Anrufen' : 'Kontakt'}
          </a>
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
        </nav>
        <div className="site-footer-action">
          {received ? (
            <output className="site-footer-thanks">
              <CheckCircle2 size={27} aria-hidden="true" />
              <span>
                <strong>Vielen Dank für deine Anfrage.</strong>
                <small>Dein Vorhaben ist bei uns eingegangen.</small>
              </span>
            </output>
          ) : (
            <>
              <a href={contactHref} className="c-button c-button-blue">
                Persönliches Angebot erhalten{' '}
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
              <span>Unverbindlich. Gemeinsam den passenden Umfang finden.</span>
            </>
          )}
        </div>
        <div className="site-footer-bottom">
          <span>© 2026 Nine.ai</span>
          <a href="/wissen">Wissen & Planung</a>
          <a href="mailto:anfrage@nineai.de">anfrage@nineai.de</a>
        </div>
      </div>
    </footer>
  );
}
