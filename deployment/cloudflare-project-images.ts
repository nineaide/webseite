import { env } from 'cloudflare:workers';

// The Cloudflare build aliases the original image route to this module. Only
// asset URLs enter the Worker bundle; image bytes stay in the static asset store.
const sources = import.meta.glob<string>(
  [
    '../public/assets/projects/*.webp',
    '../public/assets/project-variants/*.webp',
  ],
  { eager: true, query: '?url&no-inline', import: 'default' },
);
const images = new Map(
  Object.entries(sources).map(([path, url]) => [path.split('/').pop()!, url]),
);
type ImageAsset = { bytes: Uint8Array<ArrayBuffer>; etag: string };
type Context = { params: Promise<{ file: string }> };
const loaded = new Map<string, Promise<ImageAsset>>();
const assetOrigin = 'https://nineai-assets.invalid';

async function loadImage(source: string): Promise<ImageAsset> {
  const assets = (
    env as { ASSETS?: { fetch(input: string): Promise<Response> } }
  ).ASSETS;
  if (!assets) throw new Error('Static asset binding is unavailable');

  // Sources come from the build-time whitelist. The fixed origin also keeps
  // request-controlled hosts out of the internal ASSETS binding request.
  const url = new URL(source, assetOrigin);
  if (url.origin !== assetOrigin)
    throw new Error('Unexpected static asset URL');
  const response = await assets.fetch(url.href);
  if (response.status !== 200) throw new Error('Project image is unavailable');
  const bytes = new Uint8Array(await response.arrayBuffer());
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
  if (!loaded.has(file)) loaded.set(file, loadImage(source));
  let asset: ImageAsset;
  try {
    asset = await loaded.get(file)!;
  } catch {
    // A transient asset failure may be retried rather than caching a rejection.
    loaded.delete(file);
    return new Response(null, {
      status: 503,
      headers: { 'Cache-Control': 'no-store' },
    });
  }
  const { bytes, etag } = asset;
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
