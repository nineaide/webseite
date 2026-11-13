import './development-cycle.css';

export const developmentPhases = [
  {
    id: 'anforderungen',
    label: 'Anforderungen',
    summary: 'Verstehen, was dein Projekt leisten soll.',
    text: 'Wir sprechen über deine Ziele, die Menschen, die deine Lösung nutzen, und die vorhandenen Inhalte. Gemeinsam klären wir auch Budget, Zeitrahmen und offene Fragen.',
    result: 'Ein gemeinsames Bild der Aufgabe.',
  },
  {
    id: 'planung',
    label: 'Planung',
    summary: 'Struktur und Prioritäten festlegen.',
    text: 'Wir ordnen Inhalte und Funktionen und legen fest, was zuerst entsteht. Du siehst einen Entwurf und kannst früh beurteilen, ob Aufbau und Richtung zu deinem Vorhaben passen.',
    result: 'Ein abgestimmter Entwurf und die nächsten Etappen.',
  },
  {
    id: 'umsetzung',
    label: 'Umsetzung',
    summary: 'Aus dem Entwurf wird eine nutzbare Lösung.',
    text: 'Wir arbeiten Design und Technik aus und zeigen dir regelmäßig den aktuellen Stand. Dein Feedback fließt direkt ein. Ändern sich Anforderungen, stimmen wir Umfang und Zeitplan gemeinsam neu ab.',
    result: 'Eine Lösung, die du selbst ausprobieren kannst.',
  },
  {
    id: 'test',
    label: 'Test',
    summary: 'Prüfen, ob alles im Alltag funktioniert.',
    text: 'Wir testen Inhalte, Formulare und Funktionen auf verschiedenen Geräten. Gemeinsam gehen wir typische Nutzungssituationen durch und beheben offene Punkte vor der Veröffentlichung.',
    result: 'Ein geprüfter Stand für den Livegang.',
  },
  {
    id: 'livegang',
    label: 'Livegang',
    summary: 'Veröffentlichen und die Übergabe vorbereiten.',
    text: 'Wir stimmen den Veröffentlichungstermin ab, begleiten den Start und erklären dir die Bedienung. Neue Erfahrungen aus dem Betrieb können zu neuen Anforderungen werden. Dann beginnt die nächste Runde.',
    result:
      'Dein Projekt ist online. Die weitere Zusammenarbeit stimmen wir nach Bedarf ab.',
  },
] as const;

function coordinates(radius: number, degrees: number) {
  const angle = (degrees * Math.PI) / 180;
  return `${(300 + radius * Math.cos(angle)).toFixed(2)} ${(300 + radius * Math.sin(angle)).toFixed(2)}`;
}
function sector(index: number) {
  const start = -126 + index * 72 + 1;
  const end = start + 70;
  return `M ${coordinates(276, start)} A 276 276 0 0 1 ${coordinates(276, end)} L ${coordinates(158, end)} A 158 158 0 0 0 ${coordinates(158, start)} Z`;
}
/* oxlint-disable jsx-a11y/prefer-tag-over-role -- The SVG is one accessible, labelled image. */
export function DevelopmentRing({
  active,
  progress,
  detailed = false,
}: {
  active?: number;
  progress?: number;
  detailed?: boolean;
}) {
  return (
    <svg
      className="development-ring"
      viewBox="0 0 600 600"
      width={600}
      height={600}
      role="img"
      aria-label={`Unser Kreislauf: Anforderungen, Planung, Umsetzung, Test und Livegang. Danach können neue Anforderungen folgen.${active === undefined ? '' : ` Aktuelle Phase: ${developmentPhases[active].label}.`}`}
    >
      {developmentPhases.map((phase, index) => {
        const angle = ((-90 + index * 72) * Math.PI) / 180;
        const x = 300 + 216 * Math.cos(angle);
        const y = 300 + 216 * Math.sin(angle);
        return (
          <g
            key={phase.id}
            className={`development-ring-phase${active === index ? ' is-active' : ''}`}
            aria-hidden="true"
          >
            <path
              d={sector(index)}
              style={
                progress === undefined
                  ? undefined
                  : { fill: ringColor(index, progress) }
              }
            />
            <foreignObject x={x - 110} y={y - 38} width={220} height={76}>
              <div
                className="development-ring-annotation"
                style={
                  progress === undefined
                    ? undefined
                    : { color: ringTextColor(index, progress) }
                }
              >
                <span className="development-ring-number">{index + 1}</span>
                <span className="development-ring-label">{phase.label}</span>
              </div>
            </foreignObject>
          </g>
        );
      })}
      <text
        x={300}
        y={286}
        textAnchor="middle"
        className="development-ring-center"
        aria-hidden="true"
      >
        {detailed ? (
          <>
            <tspan x={300} dy={-20}>
              Ihre Seite
            </tspan>
            <tspan x={300} dy={38}>
              entwickelt
            </tspan>
            <tspan x={300} dy={38}>
              sich weiter
            </tspan>
          </>
        ) : (
          <>
            <tspan x={300}>Gemeinsam</tspan>
            <tspan x={300} dy={38}>
              entwickeln
            </tspan>
          </>
        )}
      </text>
    </svg>
  );
}
function ringColor(index: number, progress: number) {
  return `rgb(${ringChannels(index, progress).join(',')})`;
}
function ringTextColor(index: number, progress: number) {
  const channels = ringChannels(index, progress).map((value) => {
    const normalized = value / 255;
    return normalized <= 0.04045
      ? normalized / 12.92
      : ((normalized + 0.055) / 1.055) ** 2.4;
  });
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722 <=
    0.179
    ? '#ffffff'
    : '#000000';
}
function ringChannels(index: number, progress: number) {
  const current = Math.floor(progress);
  const mix = progress - current;
  const light = [220, 231, 246],
    done = [155, 186, 225],
    dark = [18, 75, 180];
  const from = index < current ? done : index === current ? dark : light;
  const to = index <= current ? done : index === current + 1 ? dark : light;
  return from.map((value, i) => Math.round(value + (to[i] - value) * mix));
}
export function DevelopmentCycle() {
  return (
    <figure className="about-agile-visual">
      <DevelopmentRing />
      <figcaption>
        <p>
          Nach dem Livegang können neue Anforderungen entstehen. Wir greifen sie
          gemeinsam auf und beginnen die nächste Runde.
        </p>
      </figcaption>
    </figure>
  );
}
