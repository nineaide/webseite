/* oxlint-disable next/no-img-element */
import { ArrowUpRight } from 'lucide-react';
import { guidePages } from './content/guide-pages';
import './editorial.css';
import { projectImageProps } from './project-image-props';

export function KnowledgePage() {
  const [featured, ...guides] = guidePages;
  return (
    <article className="knowledge-page">
      <header className="n-hero">
        <div>
          <span className="eyebrow">Wissen für dein Vorhaben</span>
          <h1>Planungshilfen für dein Projekt.</h1>
        </div>
        <div className="n-hero-lead">
          <p>
            Was kostet die Website? Wann lohnt sich ein eigenes System? Hier
            findest du konkrete Planungshilfen mit Beispielen aus unseren
            Projekten.
          </p>
        </div>
      </header>
      <div className="knowledge-grid">
        <article className="knowledge-feature">
          <a href={featured.path}>
            <img
              {...projectImageProps(
                featured.image.src,
                '(max-width: 700px) calc(100vw - 64px), 540px',
              )}
              alt={featured.image.alt}
              width={featured.image.width}
              height={featured.image.height}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div>
              <span>Website planen</span>
              <h2>{featured.label}</h2>
              <p>{featured.description}</p>
              <strong>
                Ratgeber lesen <ArrowUpRight size={18} aria-hidden="true" />
              </strong>
            </div>
          </a>
        </article>
        <div className="knowledge-index">
          {guides.map((page) => (
            <article key={page.path}>
              <a href={page.path}>
                <h2>{page.label}</h2>
                <p>{page.description}</p>
                <span className="knowledge-index-link">
                  Ratgeber lesen <ArrowUpRight size={18} aria-hidden="true" />
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </article>
  );
}
