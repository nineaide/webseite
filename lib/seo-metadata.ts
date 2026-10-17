import type { Metadata } from 'next';
import { absoluteUrl } from './site-identity';
import type { SeoPage } from './seo-pages';

export function pageMetadata(page: SeoPage): Metadata {
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: absoluteUrl(page.path) },
    robots: { index: true, follow: true, 'max-image-preview': 'large' },
    openGraph: {
      title: page.title,
      description: page.description,
      url: absoluteUrl(page.path),
      locale: 'de_DE',
      type: page.kind === 'article' ? 'article' : 'website',
      siteName: 'Nine.ai',
    },
    twitter: {
      card: 'summary',
      title: page.title,
      description: page.description,
    },
  };
}
