import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import sharp from 'sharp';

// Build-time responsive encodings only. Supplied, redacted originals are never
// overwritten, cropped, recolored or sharpened. No runtime image service needed.
const sourceDir = 'public/assets/projects';
const outputDir = 'public/assets/project-variants';
await mkdir(outputDir, { recursive: true });
const manifest = {};
const digest = (bytes) =>
  createHash('sha256').update(bytes).digest('hex').slice(0, 16);
const url = (file, bytes) => '/project-images/' + file + '?v=' + digest(bytes);
for (const file of (await readdir(sourceDir))
  .filter((name) => name.endsWith('.webp'))
  .sort()) {
  const original = await readFile(sourceDir + '/' + file);
  const { width, height } = await sharp(original).metadata();
  if (!width || !height) throw new Error('Missing image dimensions: ' + file);
  const widths = file.endsWith('-desktop.webp')
    ? [480, 800]
    : file.endsWith('-mobile.webp')
      ? [160, 260]
      : [480];
  const variants = [];
  for (const targetWidth of widths.filter((value) => value < width)) {
    const name = file.replace('.webp', '--w' + targetWidth + '.webp');
    const { data, info } = await sharp(original)
      .resize({ width: targetWidth, withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toBuffer({ resolveWithObject: true });
    if (
      info.width !== targetWidth ||
      Math.abs(info.height - (height * targetWidth) / width) > 1
    )
      throw new Error('Unexpected responsive image dimensions: ' + name);
    // Do not offer a larger transfer as a small-screen optimization.
    if (data.byteLength >= original.byteLength) continue;
    await writeFile(outputDir + '/' + name, data);
    variants.push({
      src: url(name, data),
      width: info.width,
      height: info.height,
      bytes: data.byteLength,
    });
  }
  variants.push({
    src: url(file, original),
    width,
    height,
    bytes: original.byteLength,
  });
  manifest['/project-images/' + file] = {
    src: url(file, original),
    width,
    height,
    variants,
  };
}
await writeFile(
  'app/project-image-manifest.json',
  JSON.stringify(manifest, null, 2) + '\n',
);
console.log(
  'Prepared responsive sources for ' +
    Object.keys(manifest).length +
    ' approved project images.',
);
