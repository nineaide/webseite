import manifest from './project-image-manifest.json';

type ImageEntry = {
  src: string;
  width: number;
  height: number;
  variants: Array<{
    src: string;
    width: number;
    height: number;
    bytes: number;
  }>;
};
const images: Record<string, ImageEntry> = manifest;

/** Standard HTML responsive images; unsupported sources retain their original URL. */
export function projectImageProps(src: string, sizes: string) {
  const image = images[src.split('?')[0]];
  return image
    ? {
        src: image.src,
        srcSet: image.variants
          .map((variant) => variant.src + ' ' + variant.width + 'w')
          .join(', '),
        sizes,
      }
    : { src };
}
