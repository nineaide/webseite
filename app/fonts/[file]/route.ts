import regular from '../cabinet-400.woff2?inline';
import medium from '../cabinet-500.woff2?inline';
import bold from '../cabinet-700.woff2?inline';
import extrabold from '../cabinet-800.woff2?inline';
import { fontSources } from '../../font-assets';

const data = [regular, medium, bold, extrabold];
const fonts = new Map(
  fontSources.map((font, index) => [
    font.path.slice('/fonts/'.length),
    Uint8Array.from(atob(data[index].split(',')[1]), (char) =>
      char.charCodeAt(0),
    ),
  ]),
);
type Context = { params: Promise<{ file: string }> };
const production = process.env.NODE_ENV === 'production';

export async function GET(request: Request, { params }: Context) {
  const { file } = await params;
  const bytes = fonts.get(file);
  if (!bytes) {
    return new Response(null, {
      status: 404,
      headers: { 'Cache-Control': 'no-store' },
    });
  }
  const etag = '"' + file + '"';
  const headers = {
    'Content-Type': 'font/woff2',
    'Cache-Control': production
      ? 'public, max-age=31536000, immutable'
      : 'no-store',
    ETag: etag,
    'X-Content-Type-Options': 'nosniff',
  };
  if (production && request.headers.get('If-None-Match') === etag) {
    return new Response(null, { status: 304, headers });
  }
  return new Response(request.method === 'HEAD' ? null : bytes, { headers });
}

export const HEAD = GET;
