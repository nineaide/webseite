/* oxlint-disable next/no-img-element */
import { ArrowUpRight } from 'lucide-react';
import { guidePages } from './content/guide-pages';
import './editorial.css';
import { projectImageProps } from './project-image-props';

export function KnowledgePage() {
  return (
    <article className="knowledge-page">
      <header className="n-hero">
        <div>
          <span className="eyebrow">WISSEN FÜR DEIN VORHABEN</span>
          <h1>
            Gute Entscheidungen.
            <br />
            Ein klarer Start.
          </h1>
        </div>
        <div className="n-hero-lead">
          <p>
            Was kostet die Website? Wann lohnt sich ein eigenes System? Hier
            findest du konkrete Planungshilfen – mit Beispielen aus unseren
            Projekten.
          </p>
        </div>
      </header>
      <div className="knowledge-grid">
        {guidePages.map((page, index) => (
          <article key={page.path}>
            <a href={page.path}>
              <img
                {...projectImageProps(
                  page.image.src,
                  '(max-width: 700px) calc(100vw - 64px), 540px',
                )}
                alt={page.image.alt}
                width={page.image.width}
                height={page.image.height}
                loading={index < 2 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                decoding="async"
              />
              <div>
                <span>RATGEBER · NINE.AI</span>
                <h2>{page.label}</h2>
                <p>{page.description}</p>
                <strong>
                  Ratgeber lesen <ArrowUpRight size={18} aria-hidden="true" />
                </strong>
              </div>
            </a>
          </article>
        ))}
      </div>
    </article>
  );
}
