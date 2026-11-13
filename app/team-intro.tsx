/* oxlint-disable next/no-img-element */
import { ArrowUpRight } from 'lucide-react';
import { teamMembers } from './team-data';

export function TeamIntro({
  eyebrow = 'Persönlich zusammenarbeiten',
  showLink = true,
}: {
  eyebrow?: string;
  showLink?: boolean;
}) {
  return (
    <div className="team-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h2>Dein Vorhaben. Direkt mit uns.</h2>
      <p>
        Du sprichst direkt mit uns über dein Vorhaben und die
        Zwischenergebnisse. So können wir Rückfragen gemeinsam klären.
      </p>
      {teamMembers.length > 0 && (
        <div className="team-portraits">
          {teamMembers.map((member) => (
            <figure key={member.name}>
              <img
                src={member.image}
                alt={member.name}
                width={member.width}
                height={member.height}
                loading="lazy"
              />
              <figcaption>
                <strong>{member.name}</strong>
                <span>{member.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
      {showLink && (
        <a className="c-inline-link" href="/ueber-nine">
          Über 9.ai <ArrowUpRight size={18} />
        </a>
      )}
    </div>
  );
}
