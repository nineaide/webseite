'use client';
/* oxlint-disable next/no-img-element */
import {
  useEffect,
  useState,
  useSyncExternalStore,
  type PointerEvent,
  type ReactNode,
} from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Monitor,
  Pause,
  Play,
  Smartphone,
  X,
  Maximize2,
  Layers3,
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { type ConceptProject } from './project-data';
import {
  referenceProjects,
  referenceImage,
  heroReferences,
  leadReferences,
  type ReferenceProject,
} from './reference-data';
import './references.css';
import { projectImageProps } from './project-image-props';

export function GlassSurface({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  function move(e: PointerEvent<HTMLDivElement>) {
    if (
      e.pointerType !== 'mouse' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return;
    const box = e.currentTarget.getBoundingClientRect();
    const sheen = e.currentTarget.firstElementChild as HTMLElement;
    sheen.style.transform =
      'translateX(' + (((e.clientX - box.left) / box.width) * 70 - 35) + '%)';
  }
  return (
    <div className={'liquid-surface ' + className} onPointerMove={move}>
      <span className="liquid-sheen" aria-hidden="true" />
      {children}
    </div>
  );
}

export function WebsitePreview({
  project,
  mobile = false,
  eager = false,
}: {
  project: ConceptProject;
  mobile?: boolean;
  eager?: boolean;
}) {
  return (
    <div
      className={
        'website-preview preview-' +
        project.id +
        (mobile ? ' preview-mobile' : '')
      }
    >
      <div className="preview-nav">
        <strong>{project.name}</strong>
        <div>
          <span>Leistungen</span>
          <span>Projekte</span>
          <span>
            Kontakt <ArrowUpRight className="text-arrow" aria-hidden="true" />
          </span>
        </div>
        <span className="preview-burger">☰</span>
      </div>
      <div className="preview-intro">
        <div className="preview-copy">
          <span>{project.tagline}</span>
          <p>{project.headline}</p>
          <span className="preview-action">
            {project.action}
            <ArrowUpRight size={16} />
          </span>
        </div>
        <img
          src={project.image}
          alt={project.imageAlt}
          width="1536"
          height="1024"
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : undefined}
        />
      </div>
      <div className="preview-services">
        {project.services.map((s, i) => (
          <span key={s}>
            <small>0{i + 1}</small>
            {s}
            <ArrowUpRight size={15} />
          </span>
        ))}
      </div>
    </div>
  );
}

export function ReferencePreview({
  project,
  mobile = false,
  eager = false,
  sizes,
}: {
  project: ReferenceProject;
  mobile?: boolean;
  eager?: boolean;
  sizes?: string;
}) {
  return (
    <img
      className={
        'reference-preview' + (mobile ? ' reference-preview-mobile' : '')
      }
      {...projectImageProps(
        referenceImage(project.id, mobile),
        sizes ??
          (mobile
            ? '235px'
            : '(max-width: 700px) calc(100vw - 64px), (max-width: 1200px) 80vw, 1060px'),
      )}
      alt={
        project.name +
        ' – ' +
        (mobile ? 'mobile Website-Ansicht' : 'Desktop-Ansicht der Website')
      }
      width={mobile ? 390 : 1440}
      height={mobile ? 844 : 1000}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager && !mobile ? 'high' : undefined}
      decoding="async"
    />
  );
}

export function HeroShowcase({
  variant = 'home',
}: {
  variant?: 'home' | 'lead';
}) {
  const projects = variant === 'lead' ? leadReferences : heroReferences;
  const labels =
    variant === 'lead'
      ? ['Energie', 'Plattform', 'Handwerk']
      : ['Handwerk', 'Gastronomie', 'Plattform'];
  const [active, setActive] = useState(projects[0].id);
  const project = projects.find((p) => p.id === active) ?? projects[0];
  return (
    <div className="hero-showcase reference-hero">
      <div className="hero-display">
        <ReferencePreview
          project={project}
          eager
          sizes="(max-width: 700px) calc(100vw - 65px), (max-width: 1100px) 80vw, 600px"
        />
        <span className="display-foot">KUNDENPROJEKT · {project.name}</span>
      </div>
      <div className="hero-phone" aria-hidden="true">
        <ReferencePreview
          project={project}
          mobile
          eager
          sizes="(max-width: 700px) 23vw, 150px"
        />
      </div>
      <GlassSurface className="hero-selector">
        <span>Ein Einblick in unsere Arbeit</span>
        <fieldset aria-label="Kundenprojekt im Einstieg wählen">
          {projects.map((p, i) => (
            <button
              type="button"
              key={p.id}
              aria-pressed={p.id === active}
              onClick={() => setActive(p.id)}
            >
              {labels[i]}
            </button>
          ))}
        </fieldset>
      </GlassSurface>
      <p className="hero-demo-note">
        <a href={(variant === 'lead' ? '#' : '/projekte#') + project.id}>
          {project.name} entdecken <ArrowUpRight size={13} />
        </a>
      </p>
    </div>
  );
}

export function ProjectScreens({ project }: { project: ReferenceProject }) {
  const [view, setView] = useState('desktop');
  const [screenIndex, setScreenIndex] = useState(0);
  const screen = project.screens?.[screenIndex];
  return (
    <Tabs
      value={view}
      onValueChange={(value) => setView(String(value))}
      className="preview-tabs reference-tabs"
    >
      <TabsList aria-label={'Ansicht von ' + project.name + ' wählen'}>
        <TabsTrigger value="desktop">
          <Monitor size={17} /> Desktop
        </TabsTrigger>
        <TabsTrigger value="mobile">
          <Smartphone size={17} /> Mobil
        </TabsTrigger>
        {project.screens && (
          <TabsTrigger value="system">
            <Layers3 size={17} /> System
          </TabsTrigger>
        )}
      </TabsList>
      <TabsContent value="desktop">
        <div className="reference-stage">
          <ReferencePreview project={project} />
        </div>
      </TabsContent>
      <TabsContent value="mobile">
        <div className="reference-stage reference-mobile-stage">
          <ReferencePreview project={project} mobile />
        </div>
      </TabsContent>
      {screen && (
        <TabsContent value="system">
          <div className="reference-system">
            <div className="reference-system-copy">
              <h3>{project.systemTitle}</h3>
              <fieldset
                aria-label="Systemansicht auswählen"
                className="reference-screen-selector"
              >
                {project.screens!.map((item, index) => (
                  <button
                    type="button"
                    key={item.src}
                    aria-pressed={screenIndex === index}
                    onClick={() => setScreenIndex(index)}
                  >
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {item.title}
                    <ArrowRight size={16} />
                  </button>
                ))}
              </fieldset>
              <p aria-live="polite">{screen.description}</p>
              <small>
                Systemeinblicke · personenbezogene Angaben anonymisiert.
              </small>
            </div>
            <figure className="reference-system-image">
              <img
                key={screen.src}
                {...projectImageProps(
                  screen.src,
                  '(max-width: 700px) calc(100vw - 96px), 390px',
                )}
                alt={
                  project.name +
                  ': ' +
                  screen.title +
                  ' – anonymisierte Systemansicht'
                }
                width={screen.width}
                height={screen.height}
                loading="lazy"
              />
              <figcaption>{screen.title}</figcaption>
            </figure>
          </div>
        </TabsContent>
      )}
    </Tabs>
  );
}

export function ProjectGallery({
  compact = false,
  priorityFirst = false,
  headingLevel = 3,
  ids,
  inquiryHref = '/projekt-starten',
}: {
  compact?: boolean;
  priorityFirst?: boolean;
  headingLevel?: 2 | 3;
  ids?: string[];
  inquiryHref?: string;
}) {
  const ProjectHeading = headingLevel === 2 ? 'h2' : 'h3';
  const [filter, setFilter] = useState('Alle');
  const [selected, setSelected] = useState<ReferenceProject | null>(null);
  const orderedProjects = ids
    ? ids
        .map((id) => referenceProjects.find((p) => p.id === id))
        .filter((p): p is ReferenceProject => !!p)
    : referenceProjects;
  const projects = orderedProjects.filter(
    (p) => filter === 'Alle' || filter === p.category,
  );
  const shown = compact && !ids ? projects.slice(0, 3) : projects;
  return (
    <div
      className={
        'project-gallery reference-gallery' +
        (compact ? ' gallery-compact' : '')
      }
    >
      {!compact && !ids && (
        <fieldset
          className="gallery-filters"
          aria-label="Projekte nach Bereich filtern"
        >
          {[
            'Alle',
            'Dienstleister',
            'Automotive',
            'Gastro',
            'Plattformen',
            'Handwerk',
            'Energie',
          ].map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </fieldset>
      )}
      <div className="gallery-grid">
        {shown.map((project, index) => (
          <article
            className="gallery-item reference-item"
            key={project.id}
            id={project.id}
          >
            <button
              className="gallery-open"
              type="button"
              onClick={() => setSelected(project)}
              aria-label={project.name + ' Projekt öffnen'}
            >
              <div
                className="reference-canvas"
                style={{ background: project.tone }}
              >
                {project.previewAvailable === false ? (
                  <div className="reference-project-placeholder">
                    <span>{project.status ?? 'Projektvorschau'}</span>
                    <strong>Bildschirmaufnahmen folgen</strong>
                  </div>
                ) : (
                  <>
                    <div className="reference-browser">
                      <span aria-hidden="true">
                        <i />
                        <i />
                        <i />
                      </span>
                      <ReferencePreview
                        project={project}
                        eager={priorityFirst && index === 0}
                        sizes="(max-width: 700px) calc(75vw - 30px), (max-width: 1100px) 70vw, 900px"
                      />
                    </div>
                    <div className="reference-phone" aria-hidden="true">
                      <ReferencePreview
                        project={project}
                        mobile
                        eager={priorityFirst && index === 0}
                        sizes="(max-width: 700px) 21vw, (max-width: 1100px) 20vw, 220px"
                      />
                    </div>
                  </>
                )}
              </div>
              <span className="gallery-view">
                <Maximize2 size={17} /> Projekt öffnen
              </span>
            </button>
            <div className="gallery-caption">
              <div>
                <span>{project.industry}</span>
                {project.status && (
                  <span className="reference-project-status">
                    {project.status}
                  </span>
                )}
                <ProjectHeading>{project.name}</ProjectHeading>
              </div>
              <button
                className="circle-link"
                type="button"
                onClick={() => setSelected(project)}
                aria-label={project.name + ' Details ansehen'}
              >
                <ArrowUpRight size={22} />
              </button>
            </div>
            <p>{project.description}</p>
            <div className="reference-card-foot">
              <a href={'/projekte/' + project.id}>
                Projekt im Detail <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              {project.screens && (
                <span>
                  <Layers3 size={15} /> Mit Systemeinblicken
                </span>
              )}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={project.name + ' Live-Website öffnen (neuer Tab)'}
                >
                  {project.websiteLabel ?? 'Live-Website'}{' '}
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
      <Dialog
        open={!!selected}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="project-dialog" showCloseButton={false}>
          <DialogClose className="dialog-close" aria-label="Projekt schließen">
            <X size={22} />
          </DialogClose>
          {selected && (
            <>
              <div className="project-dialog-heading">
                <span className="eyebrow">
                  KUNDENPROJEKT · {selected.industry}
                </span>
                <DialogTitle>{selected.name}</DialogTitle>
                <DialogDescription>{selected.detail}</DialogDescription>
              </div>
              <ul className="reference-feature-list">
                {selected.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              {selected.previewAvailable === false ? (
                <div className="reference-project-placeholder reference-dialog-placeholder">
                  Bildschirmaufnahmen für dieses Projekt folgen.
                </div>
              ) : (
                <ProjectScreens key={selected.id} project={selected} />
              )}
              <div className="project-dialog-bottom">
                {selected.url && (
                  <a
                    className="c-inline-link"
                    href={selected.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {selected.websiteLabel ?? 'Live-Website öffnen'}{' '}
                    <ArrowUpRight size={18} />
                  </a>
                )}
                <a
                  className="c-button c-button-blue"
                  href={inquiryHref}
                  onClick={() => setSelected(null)}
                >
                  Ähnliches Projekt besprechen <ArrowUpRight size={18} />
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function subscribeToReducedMotion(onChange: () => void) {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  preference.addEventListener('change', onChange);
  return () => preference.removeEventListener('change', onChange);
}

function getReducedMotionPreference() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function HomeProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [view, setView] = useState<'desktop' | 'mobile'>('desktop');
  const [playing, setPlaying] = useState(true);
  const [direction, setDirection] = useState<'next' | 'previous'>('next');
  const reducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionPreference,
    () => false,
  );
  const project = referenceProjects[activeIndex] ?? referenceProjects[0];
  const autoPlaying = playing && !reducedMotion;

  useEffect(() => {
    if (!autoPlaying || referenceProjects.length < 2) return;
    const timer = window.setInterval(() => {
      setDirection('next');
      setActiveIndex((index) => (index + 1) % referenceProjects.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [autoPlaying]);

  function goToProject(index: number, nextDirection: 'next' | 'previous') {
    setPlaying(false);
    setDirection(nextDirection);
    setActiveIndex(
      (index + referenceProjects.length) % referenceProjects.length,
    );
  }

  function moveProject(offset: number) {
    goToProject(
      activeIndex + offset,
      offset < 0 ? 'previous' : 'next',
    );
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      moveProject(-1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      moveProject(1);
    }
  }

  return (
    <section
      className="home-project-showcase"
      aria-roledescription="Karussell"
      aria-label="Kundenprojekte ansehen"
    >
      <div className="home-project-visual">
        <fieldset className="home-project-view-switch">
          <legend className="sr-only">Geräteansicht wählen</legend>
          <button
            type="button"
            aria-pressed={view === 'desktop'}
            onClick={() => setView('desktop')}
          >
            <Monitor size={17} aria-hidden="true" /> Desktop
          </button>
          <button
            type="button"
            aria-pressed={view === 'mobile'}
            onClick={() => setView('mobile')}
          >
            <Smartphone size={17} aria-hidden="true" /> Mobil
          </button>
        </fieldset>
        <div
          className={'home-project-stage home-project-stage-' + view}
          style={{ backgroundColor: project.tone }}
        >
          {project.previewAvailable === false ? (
            <div className="home-project-placeholder">
              Bildschirmaufnahmen folgen
            </div>
          ) : (
            <div
              key={project.id}
              className={
                'home-project-screen home-project-screen-' +
                view +
                ' home-project-screen-' +
                direction
              }
            >
              {view === 'desktop' && (
                <span className="home-project-browser-bar" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
              )}
              <ReferencePreview
                project={project}
                mobile={view === 'mobile'}
                eager
                sizes={
                  view === 'mobile'
                    ? '260px'
                    : '(max-width: 700px) calc(100vw - 72px), (max-width: 1200px) 70vw, 760px'
                }
              />
            </div>
          )}
        </div>
      </div>
      <div className="home-project-information">
        <div
          className="home-project-copy"
          aria-live={autoPlaying ? 'off' : 'polite'}
          aria-atomic="true"
        >
          <span className="eyebrow">KUNDENPROJEKT · {project.industry}</span>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="home-project-links">
            <a href={'/projekte/' + project.id}>
              Projekt im Detail <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.websiteLabel ?? 'Live-Website'}{' '}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
        <fieldset className="home-project-controls">
          <legend className="sr-only">Projektsteuerung</legend>
          <button
            className="home-project-arrow"
            type="button"
            aria-label="Vorheriges Projekt"
            onKeyDown={handleKeyDown}
            onClick={() => moveProject(-1)}
          >
            <ChevronLeft size={21} aria-hidden="true" />
          </button>
          <span className="home-project-count" aria-live="off">
            {String(activeIndex + 1).padStart(2, '0')} /{' '}
            {String(referenceProjects.length).padStart(2, '0')}
          </span>
          <button
            className="home-project-arrow"
            type="button"
            aria-label="Nächstes Projekt"
            onKeyDown={handleKeyDown}
            onClick={() => moveProject(1)}
          >
            <ChevronRight size={21} aria-hidden="true" />
          </button>
          <button
            className="home-project-play"
            type="button"
            aria-label={
              reducedMotion
                ? 'Automatische Wiedergabe durch Bewegungseinstellung deaktiviert'
                : autoPlaying
                  ? 'Automatische Wiedergabe pausieren'
                  : 'Automatische Wiedergabe starten'
            }
            aria-pressed={autoPlaying}
            disabled={reducedMotion}
            onClick={() => setPlaying(!autoPlaying)}
          >
            {autoPlaying ? (
              <Pause size={17} aria-hidden="true" />
            ) : (
              <Play size={17} aria-hidden="true" />
            )}
            {autoPlaying ? 'Pause' : 'Abspielen'}
          </button>
        </fieldset>
        <fieldset className="home-project-pagination">
          <legend className="sr-only">Projekt direkt auswählen</legend>
          {referenceProjects.map((item, index) => (
            <button
              type="button"
              key={item.id}
              aria-label={'Projekt ' + (index + 1) + ': ' + item.name}
              aria-pressed={index === activeIndex}
              onClick={() =>
                goToProject(index, index < activeIndex ? 'previous' : 'next')
              }
            />
          ))}
        </fieldset>
      </div>
    </section>
  );
}
