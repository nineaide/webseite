/* oxlint-disable next/no-img-element */
import { ArrowUpRight } from 'lucide-react';
import { teamMembers } from './team-data';

export function TeamIntro({
  eyebrow = 'PERSÖNLICH ZUSAMMENARBEITEN',
}: {
  eyebrow?: string;
}) {
  return (
    <div className="team-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h2>
        Dein Vorhaben.
        <br />
        Direkt mit uns.
      </h2>
      <p>
        Wir hören zu, gestalten und entwickeln. Du besprichst deine Ideen und
        dein Feedback direkt mit Nine.
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
      <a className="c-inline-link" href="/ueber-nine">
        Über 9.ai <ArrowUpRight size={18} />
      </a>
    </div>
  );
}
