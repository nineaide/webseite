// The hosted static layer serves WebP as application/octet-stream. Keep the
// approved source images unchanged and serve their bytes with explicit headers.
// This route is server-only; image data is never embedded in page/client code.
const sources = import.meta.glob<string>(
  [
    '../../../public/assets/projects/*.webp',
    '../../../public/assets/project-variants/*.webp',
  ],
  { eager: true, query: '?inline', import: 'default' },
);
const images = new Map(
  Object.entries(sources).map(([path, data]) => [path.split('/').pop()!, data]),
);
type ImageAsset = { bytes: Uint8Array<ArrayBuffer>; etag: string };
const decoded = new Map<string, Promise<ImageAsset>>();
type Context = { params: Promise<{ file: string }> };

async function decode(data: string): Promise<ImageAsset> {
  const bytes = Uint8Array.from(atob(data.split(',')[1]), (char) =>
    char.charCodeAt(0),
  );
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  const hash = Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, '0'),
  ).join('');
  return { bytes, etag: '"' + hash + '"' };
}

export async function GET(request: Request, { params }: Context) {
  const { file } = await params;
  const source = images.get(file);
  if (!source) {
    return new Response(null, {
      status: 404,
      headers: { 'Cache-Control': 'no-store' },
    });
  }
  if (!decoded.has(file)) decoded.set(file, decode(source));
  const { bytes, etag } = await decoded.get(file)!;
  const version = new URL(request.url).searchParams.get('v');
  if (version !== null && version !== etag.slice(1, 17)) {
    return new Response(null, {
      status: 404,
      headers: { 'Cache-Control': 'no-store' },
    });
  }
  const headers = {
    'Content-Type': 'image/webp',
    'Cache-Control': version
      ? 'public, max-age=31536000, immutable'
      : 'public, max-age=3600, stale-while-revalidate=86400',
    ETag: etag,
    'X-Content-Type-Options': 'nosniff',
  };
  const matches = request.headers
    .get('If-None-Match')
    ?.split(',')
    .some(
      (tag) => tag.trim().replace(/^W\//, '') === etag || tag.trim() === '*',
    );
  if (matches) return new Response(null, { status: 304, headers });
  return new Response(request.method === 'HEAD' ? null : bytes, {
    headers: { ...headers, 'Content-Length': String(bytes.byteLength) },
  });
}

export const HEAD = GET;
