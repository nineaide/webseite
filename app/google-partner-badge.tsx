/* oxlint-disable next/no-img-element */
import './google-partner-badge.css';

// Partner status was confirmed by the owner. Their account-specific profile
// link/snippet is still pending; do not link the badge to another agency.
const googlePartner = {
  profileUrl: '',
  imageUrl:
    'https://www.gstatic.com/partners/badge/images/2021/PartnerBadgeClickable.svg',
};

export function GooglePartnerBadge() {
  if (!googlePartner.profileUrl) return null;

  return (
    <aside className="lead-partner lead-wrap" aria-label="Google Partner">
      <a
        className="lead-partner-logo"
        href={googlePartner.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Unser Google-Partner-Profil öffnen (neuer Tab)"
      >
        <img
          src={googlePartner.imageUrl}
          alt="Google Partner"
          width="140"
          height="140"
          loading="lazy"
        />
      </a>
      <div className="lead-partner-copy">
        <strong>Google Partner</strong>
        <p>Für deine Werbung bei Google.</p>
        <small>
          Der Partnerstatus bezieht sich auf Google Ads. Unsere Webdesign- und
          SEO-Leistungen werden von Google nicht geprüft oder empfohlen.
        </small>
      </div>
    </aside>
  );
}
