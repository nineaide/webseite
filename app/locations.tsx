/* oxlint-disable next/no-img-element */
// A local SVG needs no raster optimisation or client-side image component.
import type { CSSProperties } from 'react';
import './locations.css';

// City-centre positions in the source SVG's Mercator coordinate system;
// they mark cities, not individual office addresses.
const locations = [
  { name: 'Frankfurt', x: '37.205%', y: '64.086%' },
  { name: 'München', x: '58.295%', y: '86.068%' },
];

export function Locations({ className = '' }: { className?: string }) {
  return (
    <section
      className={`locations-area ${className}`}
      aria-labelledby="locations-title"
    >
      <div className="locations-card">
        <div className="locations-heading">
          <span className="eyebrow">UNSERE STANDORTE</span>
          <h2 id="locations-title">
            <span>Frankfurt.</span> <span>München.</span>
          </h2>
        </div>
        <p className="locations-copy">
          Zwei Standorte. Ein direkter Draht zu deinem Projekt. Persönlich im
          Austausch, deutschlandweit für dich da.
        </p>
        <div className="locations-map" aria-hidden="true">
          <img
            src="/assets/locations/germany.svg"
            alt=""
            width="1000"
            height="1000"
            loading="lazy"
            decoding="async"
          />
          {locations.map((location) => (
            <span
              key={location.name}
              className="locations-marker"
              style={
                {
                  '--location-x': location.x,
                  '--location-y': location.y,
                } as CSSProperties
              }
            >
              <span className="locations-dot" />
              <span className="locations-label">{location.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
