/* oxlint-disable next/no-img-element */
/* oxlint-disable jsx-a11y/no-noninteractive-tabindex -- The named table scroll region needs keyboard focus for horizontal scrolling. */
import { ArrowUpRight, ArrowDown, Check } from 'lucide-react';
import { FAQAnswers } from './faq-answers';
import { findSeoPage } from '../lib/seo-pages';
import { referenceImage, referenceProjects } from './reference-data';
import type { EditorialImage, EditorialPage } from './content/types';
import './editorial.css';
import { projectImageProps } from './project-image-props';

export function EditorialFigure({
  image,
  eager = false,
}: {
  image: EditorialImage;
  eager?: boolean;
}) {
  return (
    <figure
      className={
        'editorial-figure' +
        (image.height > image.width ? ' editorial-figure-portrait' : '')
      }
    >
      <div className="editorial-image-surface">
        <img
          {...projectImageProps(
            image.src,
            image.height > image.width
              ? '(max-width: 700px) 78vw, 400px'
              : '(max-width: 700px) calc(100vw - 80px), (max-width: 1100px) 80vw, 650px',
          )}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : 'auto'}
          decoding="async"
        />
      </div>
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}

export function RelatedTopics({
  paths,
  title = 'Was zu deinem Vorhaben passt.',
}: {
  paths: string[];
  title?: string;
}) {
  const pages = paths.map(findSeoPage).filter((page) => !!page);
  if (!pages.length) return null;
  return (
    <section className="editorial-related" aria-label={title}>
      <h2>{title}</h2>
      <div className="editorial-related-grid">
        {pages.map((page) => (
          <a key={page.path} href={page.path}>
            <span>
              {page.kind === 'article'
                ? 'Ratgeber'
                : page.kind === 'case'
                  ? 'Kundenprojekt'
                  : 'Mehr erfahren'}
            </span>
            <h3>{page.label}</h3>
            <p>{page.description}</p>
            <ArrowUpRight size={22} aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}

export function ProjectProofLinks({ ids }: { ids: string[] }) {
  const projects = ids
    .map((id) => referenceProjects.find((p) => p.id === id))
    .filter((p) => !!p);
  if (!projects.length) return null;
  return (
    <section className="editorial-proof" aria-label="Passende Kundenprojekte">
      <span className="eyebrow">EINBLICKE IN UNSERE ARBEIT</span>
      <div className="editorial-proof-grid">
        {projects.map((project) => (
          <a
            href={
              findSeoPage('/projekte/' + project.id)
                ? '/projekte/' + project.id
                : '/projekte#' + project.id
            }
            key={project.id}
          >
            <img
              {...projectImageProps(
                referenceImage(project.id),
                '(max-width: 700px) calc(100vw - 72px), 380px',
              )}
              alt={project.name + ': Desktopansicht der Kundenwebsite'}
              width={1440}
              height={1000}
              loading="lazy"
              decoding="async"
            />
            <div>
              <span>{project.industry}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <span className="editorial-proof-action">
                Projekt ansehen <ArrowUpRight size={18} aria-hidden="true" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export function EditorialPageView({ page }: { page: EditorialPage }) {
  const isArticle = page.kind === 'article';
  const project =
    page.kind === 'case'
      ? referenceProjects.find((p) => '/projekte/' + p.id === page.path)
      : undefined;
  return (
    <article className={'editorial-page editorial-' + page.kind}>
      <header className="editorial-hero">
        <div className="editorial-hero-copy">
          <span className="eyebrow">{page.kicker}</span>
          <h1>{page.heading}</h1>
          <p className="editorial-lead">{page.intro}</p>
          {isArticle ? (
            <div className="editorial-byline">
              <a href="/ueber-nine">Von Nine.ai</a>
              <span>
                Stand:{' '}
                <time dateTime={page.modified}>
                  {new Date(page.modified + 'T12:00:00Z').toLocaleDateString(
                    'de-DE',
                  )}
                </time>
              </span>
            </div>
          ) : (
            <ul className="editorial-highlights">
              {page.highlights.map((item) => (
                <li key={item}>
                  <Check size={17} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          )}
          <div className="editorial-hero-actions">
            <a
              href={'#' + page.sections[0].id}
              className="c-button c-button-blue"
            >
              {isArticle
                ? 'Zum Ratgeber'
                : project
                  ? 'Projekt entdecken'
                  : 'So gehen wir vor'}{' '}
              <ArrowDown size={18} aria-hidden="true" />
            </a>
            {project ? (
              <a
                className="c-inline-link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Kundenwebsite öffnen{' '}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            ) : (
              <a
                className="c-inline-link"
                href="/website-erstellen-lassen?paket=unsicher#website-check"
              >
                Vorhaben besprechen{' '}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
        <EditorialFigure image={page.image} eager />
      </header>
      <nav className="editorial-contents" aria-label="Inhalt dieser Seite">
        {page.sections.map((section) => (
          <a key={section.id} href={'#' + section.id}>
            {section.title}
          </a>
        ))}
      </nav>
      <div className="editorial-body">
        {page.sections.map((section) => (
          <section
            id={section.id}
            className={
              'editorial-section' +
              (section.image ? ' editorial-section-illustrated' : '')
            }
            key={section.id}
          >
            <h2>{section.title}</h2>
            <div className="editorial-section-content">
              <div className="editorial-copy">
                {section.paragraphs.map((text) => (
                  <p key={text}>{text}</p>
                ))}
                {section.points && (
                  <ul className="editorial-points">
                    {section.points.map((point) => (
                      <li key={point.title}>
                        <h3>{point.title}</h3>
                        <p>{point.text}</p>
                      </li>
                    ))}
                  </ul>
                )}
                {section.links && (
                  <div className="editorial-text-links">
                    {section.links
                      .filter(
                        (link) =>
                          !link.href.startsWith('/') || findSeoPage(link.href),
                      )
                      .map((link) => (
                        <a key={link.href} href={link.href}>
                          {link.label}
                          <ArrowUpRight size={17} aria-hidden="true" />
                        </a>
                      ))}
                  </div>
                )}
              </div>
              {section.table && (
                <section
                  className="editorial-table-scroll"
                  aria-label={section.title + ' – Vergleich'}
                  tabIndex={0}
                >
                  <table>
                    <thead>
                      <tr>
                        {section.table.headings.map((h) => (
                          <th scope="col" key={h}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row) => (
                        <tr key={row[0]}>
                          {row.map((cell, i) =>
                            i === 0 ? (
                              <th scope="row" key={i}>
                                {cell}
                              </th>
                            ) : (
                              <td key={i}>{cell}</td>
                            ),
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
              )}
              {section.image && <EditorialFigure image={section.image} />}
            </div>
          </section>
        ))}
      </div>
      {project?.screens && (
        <section
          className="case-system-gallery"
          aria-label={project.systemTitle}
        >
          <span className="eyebrow">EIN BLICK IN DIE EIGENE ANWENDUNG</span>
          <h2>{project.systemTitle}</h2>
          <div className="case-system-grid">
            {project.screens.map((screen) => (
              <figure key={screen.src}>
                <a
                  href={screen.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={screen.title + ' – Aufnahme vollständig öffnen'}
                >
                  <img
                    {...projectImageProps(
                      screen.src,
                      '(max-width: 700px) calc(100vw - 90px), 330px',
                    )}
                    alt={screen.title + ': ' + screen.description}
                    width={screen.width}
                    height={screen.height}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <figcaption>
                  <h3>{screen.title}</h3>
                  <p>{screen.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
      <ProjectProofLinks ids={page.referenceIds} />
      {page.faqs.length > 0 && (
        <section className="n-section n-faq editorial-faq">
          <div>
            <span className="eyebrow">GUT ZU WISSEN</span>
            <h2>
              Deine Fragen.
              <br />
              Direkt beantwortet.
            </h2>
          </div>
          <FAQAnswers items={page.faqs} />
        </section>
      )}
      <RelatedTopics
        paths={page.related}
        title={
          isArticle
            ? 'Von der Planung zum passenden nächsten Schritt.'
            : 'Weiterdenken. Konkret werden.'
        }
      />
      {isArticle && (
        <p className="editorial-method">
          Redaktion: Nine.ai. Mit KI-Unterstützung erstellt; Grundlage sind die
          beschriebenen Projektbeispiele, unsere Leistungsumfänge und die
          verlinkten Quellen. Hinweise oder Korrekturen:{' '}
          <a href="mailto:anfrage@nineai.de">anfrage@nineai.de</a>.
        </p>
      )}
    </article>
  );
}
