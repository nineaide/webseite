import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile, readdir, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const manifest = JSON.parse(
  await readFile('app/project-image-manifest.json', 'utf8'),
);
const originals = (await readdir('public/assets/projects'))
  .filter((name) => name.endsWith('.webp'))
  .sort();
assert.deepEqual(
  Object.keys(manifest).sort(),
  originals.map((file) => '/project-images/' + file).sort(),
);
const checked = [];
for (const [source, entry] of Object.entries(manifest)) {
  let previousWidth = 0;
  for (const candidate of entry.variants) {
    const url = new URL(candidate.src, 'https://example.invalid');
    const file = url.pathname.split('/').pop();
    const isOriginal = url.pathname === source;
    const bytes = await readFile(
      'public/assets/' +
        (isOriginal ? 'projects/' : 'project-variants/') +
        file,
    );
    const actual = await sharp(bytes).metadata();
    assert.equal(actual.format, 'webp');
    assert.equal(
      actual.width,
      candidate.width,
      'srcset width descriptor matches decoded pixels',
    );
    assert.equal(actual.height, candidate.height);
    assert.equal(bytes.byteLength, candidate.bytes);
    assert.ok(
      candidate.width > previousWidth && candidate.width <= entry.width,
    );
    assert.ok(
      Math.abs(
        candidate.height - (entry.height * candidate.width) / entry.width,
      ) <= 1,
      'aspect ratio preserved, no cropping',
    );
    assert.equal(
      url.searchParams.get('v'),
      createHash('sha256').update(bytes).digest('hex').slice(0, 16),
    );
    if (!isOriginal) assert.ok(bytes.byteLength < entry.variants.at(-1).bytes);
    previousWidth = candidate.width;
    checked.push({ source, ...candidate, isOriginal });
  }
  assert.equal(
    entry.variants.at(-1).src,
    entry.src,
    'full resolution fallback retained',
  );
}
await writeFile(
  'design/seo/responsive-images.json',
  JSON.stringify({ checkedAt: new Date().toISOString(), checked }, null, 2) +
    '\n',
);
console.log(
  JSON.stringify({
    originals: originals.length,
    variants: checked.filter((item) => !item.isOriginal).length,
    checked: checked.length,
  }),
);
