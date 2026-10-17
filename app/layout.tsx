import type { Metadata } from 'next';
import './globals.css';
import './studio.css';
import { MotionEnhancements } from './motion';
import { cabinet } from './fonts';
import { siteOrigin } from '../lib/site-identity';
import { findSeoPage } from '../lib/seo-pages';
import { pageMetadata } from '../lib/seo-metadata';
import { SiteIdentityData } from './structured-data';
export const metadata: Metadata = {
  ...pageMetadata(findSeoPage('/')!),
  metadataBase: new URL(siteOrigin),
  icons: { icon: '/assets/brand/favicon.svg' },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={cabinet.variable}>
      <body id="top">
        <SiteIdentityData />
        <MotionEnhancements />
        {children}
      </body>
    </html>
  );
}
