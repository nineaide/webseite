'use client';
import {
  X,
  Layers3,
  Globe2,
  ChevronDown,
  Menu,
  Sparkles,
  TrendingUp,
  ArrowUpRight,
  BriefcaseBusiness,
  BookOpen,
} from 'lucide-react';
import { GlassSurface } from './project-showcase';
/* oxlint-disable next/no-img-element */
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { projectTypes } from '../lib/project-routing';
import { projectImageProps } from './project-image-props';
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
export const navigation = [
  ['Startseite', '/'],
  ['Projekte', '/projekte'],
  ['Pakete & Preise', '/pakete'],
  ['Was wir machen', '/loesungen'],
  ['Über Nine', '/ueber-nine'],
];
export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => {
    const registry = (
      document as Document & {
        modelContext?: {
          registerTool: (
            tool: unknown,
            options: { signal: AbortSignal },
          ) => unknown;
        };
      }
    ).modelContext;
    if (!registry) return;
    const lifecycle = new AbortController();
    try {
      Promise.resolve(
        registry.registerTool(
          {
            name: 'start_project_briefing',
            description:
              'Öffnet das Nine.ai-Projektbriefing für eine Projektart. Sendet keine Anfrage.',
            inputSchema: {
              type: 'object',
              properties: { service: { type: 'string', enum: projectTypes } },
              required: ['service'],
              additionalProperties: false,
            },
            annotations: { readOnlyHint: false, untrustedContentHint: false },
            execute(input: unknown) {
              const service = (input as { service?: unknown })?.service;
              if (
                typeof service !== 'string' ||
                !projectTypes.includes(service)
              )
                throw new Error('Ungültige Projektart');
              window.location.assign(
                '/projekt-starten?service=' + encodeURIComponent(service),
              );
              return { status: 'briefing_open', service };
            },
          },
          { signal: lifecycle.signal },
        ),
      ).catch(() => {});
    } catch {
      /* WebMCP is optional in browsers without registry support. */
    }
    return () => lifecycle.abort();
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Zum Inhalt
      </a>
      <header className="studio-header wrap">
        <a className="studio-logo" href="/" aria-label="Nine.ai Startseite">
          <img
            src="/assets/brand/NineAI-dark.svg"
            alt="Nine.ai"
            width="164"
            height="56"
          />
        </a>
        <nav aria-label="Hauptnavigation">
          <a
            href="/"
            aria-current={path === '/' ? 'page' : undefined}
          >
            Startseite
          </a>
          <a
            href="/projekte"
            aria-current={path?.startsWith('/projekte') ? 'page' : undefined}
          >
            Projekte
          </a>
          <a
            href="/pakete"
            aria-current={path === '/pakete' ? 'page' : undefined}
          >
            Pakete & Preise
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="nine-menu"
          >
            Mehr entdecken <ChevronDown size={15} />
          </button>
        </nav>
        <a
          className="c-button c-button-blue header-cta"
          href="/projekt-starten"
        >
          Projekt besprechen <ArrowUpRight size={17} />
        </a>
        <button
          className="studio-menu-button"
          type="button"
          aria-label="Menü öffnen"
          aria-expanded={open}
          aria-controls="nine-menu"
          onClick={() => setOpen(true)}
        >
          <Menu size={21} />
          <span>Menü</span>
        </button>
      </header>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          id="nine-menu"
          className="studio-menu-panel"
          showCloseButton={false}
        >
          <div className="menu-heading">
            <div>
              <DialogTitle>Dein nächster Schritt.</DialogTitle>
              <DialogDescription>
                Was möchtest du mit Nine.ai angehen?
              </DialogDescription>
            </div>
            <DialogClose className="dialog-close" aria-label="Menü schließen">
              <X size={23} />
            </DialogClose>
          </div>
          <div className="menu-content">
            <nav aria-label="Alle Seiten">
              {[
                [
                  'Website-Pakete',
                  'Drei Festpreise. Individuell mit Nine X.',
                  '/pakete',
                  Globe2,
                ],
                [
                  'Kundenprojekte',
                  'Neun Referenzen. Websites & eigene Systeme.',
                  '/projekte',
                  BriefcaseBusiness,
                ],
                [
                  'Kundenportale & Web-Apps',
                  'Buchen, anmelden, Abläufe vereinfachen.',
                  '/plattformen-web-apps',
                  Layers3,
                ],
                [
                  'Google Ads',
                  'Passende Interessenten erreichen.',
                  '/google-ads-growth',
                  TrendingUp,
                ],
                [
                  'Wissen & Planung',
                  'Kosten, Abläufe und nächste Schritte verstehen.',
                  '/wissen',
                  BookOpen,
                ],
                [
                  'KI & Automatisierung',
                  'Wiederkehrende Aufgaben abnehmen.',
                  '/ki-automation',
                  Sparkles,
                ],
              ].map(([title, text, href, icon]) => {
                const Icon = icon as typeof X;
                return (
                  <a
                    key={String(href)}
                    href={String(href)}
                    onClick={() => setOpen(false)}
                  >
                    <span className="menu-icon">
                      <Icon size={23} />
                    </span>
                    <span>
                      <strong>{String(title)}</strong>
                      <small>{String(text)}</small>
                    </span>
                    <ArrowUpRight size={21} />
                  </a>
                );
              })}
            </nav>
            <div className="menu-feature">
              <img
                {...projectImageProps(
                  '/project-images/meister-lorenz-desktop.webp',
                  '380px',
                )}
                alt="Kundenprojekt Meister Lorenz: Website für einen Autoschlüssel-Meisterbetrieb"
                width="1440"
                height="1000"
              />
              <GlassSurface>
                <span>Deine neue Website</span>
                <strong>
                  6.900 € <small>netto</small>
                </strong>
                <a
                  className="c-button c-button-light"
                  href="/checkout/nine-launch"
                >
                  Nine Launch ansehen <ArrowUpRight size={17} />
                </a>
              </GlassSurface>
            </div>
          </div>
          <div className="menu-bottom">
            <a href="/ueber-nine">
              Über Nine.ai <ArrowUpRight size={16} />
            </a>
            <a href="/loesungen">
              Alle Leistungen <ArrowUpRight size={16} />
            </a>
            <a href="/projekt-starten">
              Vorhaben besprechen <ArrowUpRight size={16} />
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export { Footer } from './site-footer';
