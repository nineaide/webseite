import { seoPages } from '../../lib/seo-pages';
import { absoluteUrl } from '../../lib/site-identity';

const xml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
export function GET() {
  const entries = seoPages
    .map(
      (page) =>
        `<url><loc>${xml(absoluteUrl(page.path))}</loc><lastmod>${page.modified}</lastmod>${page.image ? `<image:image><image:loc>${xml(absoluteUrl(page.image))}</image:loc></image:image>` : ''}</url>`,
    )
    .join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${entries}\n</urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    },
  );
}
