import regular from './fonts/cabinet-400.woff2?url';
import medium from './fonts/cabinet-500.woff2?url';
import bold from './fonts/cabinet-700.woff2?url';
import extrabold from './fonts/cabinet-800.woff2?url';

// Keep Vite's content hash, but serve through our font endpoint. The hosted
// asset layer does not preserve the generated _headers cache configuration.
export const fontSources = [
  { url: regular, weight: '400' },
  { url: medium, weight: '500' },
  { url: bold, weight: '700' },
  { url: extrabold, weight: '800' },
].map(({ url, weight }) => ({
  path: '/fonts/' + url.split('/').pop()!.split('?')[0],
  weight,
  style: 'normal',
}));
