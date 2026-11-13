'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { DevelopmentRing, developmentPhases } from './development-cycle';
import './development-process.css';

const descriptions = [
  [
    'Wir klären, was Ihre Seite leisten soll, welche Inhalte wichtig sind und was Ihre Besucher am Ende tun sollen.',
    'Der Ausgangspunkt ist nicht das Design, sondern das Ziel Ihrer Seite.',
  ],
  [
    'Aus den Anforderungen entsteht eine klare Struktur. Wir legen Seitenaufbau, Funktionen, Prioritäten und die nächsten Schritte fest.',
    'Sie sehen früh, wie aus Ihrer Idee ein konkreter Plan wird.',
  ],
  [
    'Design und Entwicklung greifen ineinander. Sie erhalten sichtbare Zwischenstände und können früh Rückmeldung geben.',
    'Feedback fließt direkt in die weitere Umsetzung ein.',
  ],
  [
    'Vor dem Livegang prüfen wir Inhalte, Technik, Formulare und Nutzerführung auf verschiedenen Bildschirmgrößen.',
    'Nicht nur technisch korrekt, sondern für echte Besucher nachvollziehbar.',
  ],
  [
    'Ihre Seite geht online. Danach endet der Prozess nicht: Neue Erkenntnisse oder Anforderungen können direkt in die nächste Runde einfließen.',
    'Der Livegang schließt den Kreis und kann zugleich der Startpunkt für die nächste Weiterentwicklung sein.',
  ],
];
const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));

export function DevelopmentProcess() {
  const [progress, setProgress] = useState(0);
  const [fits, setFits] = useState(true);
  const [reduced, setReduced] = useState(false);
  const section = useRef<HTMLElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const current = useRef(0);
  const fitsRef = useRef(true);
  const target = useRef(0);
  const frame = useRef(0);
  // Each phase has a reading plateau; only the last quarter blends to the next.
  const base = Math.min(4, Math.floor(progress));
  const fraction =
    reduced || base === 4 ? 0 : clamp((progress - base - 0.75) / 0.25, 0, 1);
  const blend = fraction * fraction * (3 - 2 * fraction);
  const phase = Math.min(4, base + (blend >= 0.5 ? 1 : 0));
  const ringProgress = Math.min(4, base + blend);

  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    let previousTime = 0;
    let measureFrame = 0;
    const render = (time: number) => {
      const elapsed = previousTime ? Math.min(64, time - previousTime) : 16;
      previousTime = time;
      current.current +=
        (target.current - current.current) *
        (media.matches ? 1 : 1 - Math.exp(-elapsed / 75));
      if (Math.abs(target.current - current.current) < 0.001)
        current.current = target.current;
      setProgress(current.current);
      frame.current =
        current.current === target.current ? 0 : requestAnimationFrame(render);
      if (!frame.current) previousTime = 0;
    };
    const update = () => {
      measureFrame = 0;
      if (!section.current || !fitsRef.current) return;
      const box = section.current.getBoundingClientRect();
      const scene =
        section.current.querySelector<HTMLElement>('.process-scene')!;
      const distance = Math.max(1, box.height - scene.offsetHeight);
      target.current = clamp(-box.top / distance, 0, 1) * 5;
      // At either end, ensure the correct first/last phase before the scene leaves.
      if (box.top >= 0 || box.bottom <= scene.offsetHeight)
        current.current = target.current;
      if (!frame.current) frame.current = requestAnimationFrame(render);
    };
    const schedule = () => {
      if (!measureFrame) measureFrame = requestAnimationFrame(update);
    };
    const measure = () => {
      const next =
        (content.current?.getBoundingClientRect().height || 0) + 40 <=
        innerHeight;
      fitsRef.current = next;
      setFits(next);
      schedule();
    };
    const motion = () => {
      setReduced(media.matches);
      schedule();
    };
    const observer = new ResizeObserver(measure);
    if (content.current) observer.observe(content.current);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', measure);
    media.addEventListener('change', motion);
    motion();
    measure();
    return () => {
      cancelAnimationFrame(frame.current);
      cancelAnimationFrame(measureFrame);
      frame.current = 0;
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', measure);
      media.removeEventListener('change', motion);
    };
  }, []);

  function select(next: number) {
    if (!section.current) return;
    const chosen = clamp(next, 0, 4);
    if (!fits) {
      cancelAnimationFrame(frame.current);
      frame.current = 0;
      target.current = current.current = chosen;
      setProgress(chosen);
      return;
    }
    const box = section.current.getBoundingClientRect();
    const scene = section.current.querySelector<HTMLElement>('.process-scene')!;
    window.scrollTo({
      top:
        scrollY +
        box.top +
        (box.height - scene.offsetHeight) * ((chosen + 0.25) / 5),
      behavior: 'instant',
    });
  }

  return (
    <section
      ref={section}
      className="n-section development-process process-story"
      id="zusammenarbeit"
      aria-label="Unsere Vorgehensweise"
      data-fits={fits}
    >
      <div className="process-scene">
        <div className="process-composition" ref={content}>
          <div className="process-copy">
            <p className="process-eyebrow">Unsere Vorgehensweise</p>
            <div className="process-panels">
              {developmentPhases.map((item, index) => {
                const opacity =
                  index === base ? 1 - blend : index === base + 1 ? blend : 0;
                return (
                  <article
                    key={item.id}
                    className="process-panel"
                    aria-hidden={phase !== index}
                    inert={phase !== index}
                    style={
                      {
                        opacity,
                        transform: reduced
                          ? 'none'
                          : `translateY(${index === base ? -6 * blend : 6 * (1 - blend)}px)`,
                        visibility: opacity > 0 ? 'visible' : 'hidden',
                      } as CSSProperties
                    }
                  >
                    <p className="process-count">
                      {String(index + 1).padStart(2, '0')} von 05
                    </p>
                    <h2>{item.label}</h2>
                    <p className="process-description">
                      {descriptions[index][0]}
                    </p>
                    <p className="process-aside">{descriptions[index][1]}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <figure className="process-ring">
            <DevelopmentRing active={phase} progress={ringProgress} detailed />
            <figcaption>
              Livegang führt zurück zu neuen Anforderungen.
            </figcaption>
          </figure>
          <nav className="process-controls" aria-label="Prozessschritt wählen">
            <button
              type="button"
              onClick={() => select(phase - 1)}
              disabled={phase === 0}
            >
              Zurück
            </button>
            <span aria-hidden="true">{phase + 1} / 5</span>
            <button
              type="button"
              onClick={() => select(phase + 1)}
              disabled={phase === 4}
            >
              Weiter
            </button>
          </nav>
        </div>
      </div>
      <noscript>
        <style>{`.process-story .process-scene{display:none}.process-story{height:auto!important}.process-fallback article{margin:32px 0}.process-fallback p{max-width:60ch}`}</style>
        <div className="process-fallback">
          <h2>Unsere Vorgehensweise</h2>
          {developmentPhases.map((item, index) => (
            <article key={item.id}>
              <h3>{item.label}</h3>
              <p>{descriptions[index][0]}</p>
              <p>{descriptions[index][1]}</p>
            </article>
          ))}
        </div>
      </noscript>
    </section>
  );
}
