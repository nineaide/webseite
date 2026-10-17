import localFont from 'next/font/local';
import { fontSources } from './font-assets';

// Local build assets receive hashed URLs and immutable caching. All four
// weights appear above the fold (body, navigation, headings and the preview).
export const cabinet = localFont({
  src: fontSources,
  variable: '--font-nine-sans',
  fallback: ['Arial', 'sans-serif'],
  // Never replace already visible fallback text halfway through a page load.
  display: 'optional',
  preload: true,
});
