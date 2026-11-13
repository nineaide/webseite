const phases = [
  { label: 'Anforderungen', color: '#101b31', text: '#ffffff', size: 23 },
  { label: 'Planung', color: '#0a4fd8', text: '#ffffff', size: 25 },
  { label: 'Umsetzung', color: '#315b8c', text: '#ffffff', size: 24 },
  { label: 'Test', color: '#386aab', text: '#ffffff', size: 25 },
  { label: 'Livegang', color: '#aac3e5', text: '#101b31', size: 25 },
  { label: 'Verbesserung', color: '#d9e6f7', text: '#101b31', size: 21 },
] as const;

function point(radius: number, degrees: number) {
  const angle = (degrees * Math.PI) / 180;
  return {
    x: 300 + radius * Math.cos(angle),
    y: 300 + radius * Math.sin(angle),
  };
}

function coordinates(radius: number, degrees: number) {
  const { x, y } = point(radius, degrees);
  return `${x.toFixed(2)} ${y.toFixed(2)}`;
}

/** Six editable, flat sectors with the small chevron joins of a slide diagram. */
function sector(index: number) {
  const start = -150 + index * 60 + 0.7;
  const end = -150 + (index + 1) * 60 - 0.7;
  return [
    `M ${coordinates(276, start)}`,
    `A 276 276 0 0 1 ${coordinates(276, end)}`,
    `L ${coordinates(210, end + 5)}`,
    `L ${coordinates(144, end)}`,
    `A 144 144 0 0 0 ${coordinates(144, start)}`,
    `L ${coordinates(210, start + 5)} Z`,
  ].join(' ');
}

/* oxlint-disable jsx-a11y/prefer-tag-over-role -- This inline SVG is one labelled image. */
export function DevelopmentCycle() {
  return (
    <figure className="about-agile-visual">
      <svg
        className="agile-cycle-graphic"
        viewBox="0 0 600 600"
        width={600}
        height={600}
        role="img"
        aria-labelledby="agile-cycle-title agile-cycle-description"
      >
        <title id="agile-cycle-title">Agile Entwicklung</title>
        <desc id="agile-cycle-description">
          Anforderungen, Planung, Umsetzung, Test, Livegang und Verbesserung
          bilden einen wiederkehrenden Kreislauf.
        </desc>
        {phases.map((phase, index) => {
          const center = point(210, -120 + index * 60);
          return (
            <g key={phase.label} aria-hidden="true">
              <path
                d={sector(index)}
                fill={phase.color}
                stroke="#ffffff"
                strokeWidth={6}
                strokeLinejoin="round"
              />
              <text
                x={center.x}
                y={center.y - 14}
                textAnchor="middle"
                fill={phase.text}
                fontSize={27}
                fontWeight={700}
              >
                {index + 1}.
              </text>
              <text
                x={center.x}
                y={center.y + 17}
                textAnchor="middle"
                fill={phase.text}
                fontSize={phase.size}
                fontWeight={700}
              >
                {phase.label}
              </text>
            </g>
          );
        })}
        <text
          className="agile-cycle-center"
          x={300}
          y={291}
          textAnchor="middle"
          fill="#101b31"
          fontSize={36}
          fontWeight={700}
        >
          <tspan x={300}>Agile</tspan>
          <tspan x={300} dy={40}>
            Entwicklung
          </tspan>
        </text>
      </svg>
      <figcaption>
        <h3>Wir arbeiten agil.</h3>
        <p>
          Ändert sich dein Vorhaben, stimmen wir die nächsten Schritte gemeinsam
          ab. Dein Feedback fließt in Gestaltung und Entwicklung ein.
        </p>
      </figcaption>
    </figure>
  );
}
