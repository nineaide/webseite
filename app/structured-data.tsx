import { absoluteUrl, siteIdentity } from '../lib/site-identity';
import { breadcrumbsFor, findSeoPage, seoPages } from '../lib/seo-pages';
import { findEditorialPage } from './content';
import { websiteOffers } from './website-offers';

function JsonLd({ value }: { value: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(value).replace(/</g, '\\u003c'),
      }}
    />
  );
}

export function SiteIdentityData() {
  return (
    <JsonLd
      value={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': absoluteUrl('/#organization'),
            name: siteIdentity.name,
            alternateName: '9.ai',
            url: absoluteUrl('/'),
            email: siteIdentity.email,
            logo: absoluteUrl(siteIdentity.logo),
          },
          {
            '@type': 'WebSite',
            '@id': absoluteUrl('/#website'),
            name: siteIdentity.name,
            url: absoluteUrl('/'),
            inLanguage: 'de-DE',
            publisher: { '@id': absoluteUrl('/#organization') },
          },
        ],
      }}
    />
  );
}

export function PageStructuredData({ path }: { path: string }) {
  const page = findSeoPage(path);
  if (!page) return null;
  const url = absoluteUrl(path);
  const breadcrumbs = breadcrumbsFor(page);
  const type =
    page.kind === 'collection'
      ? 'CollectionPage'
      : page.kind === 'about'
        ? 'AboutPage'
        : 'WebPage';
  const graph: Record<string, unknown>[] = [
    {
      '@type': type === 'WebPage' ? type : ['WebPage', type],
      '@id': url + '#webpage',
      url,
      name: page.title,
      description: page.description,
      inLanguage: 'de-DE',
      isPartOf: { '@id': absoluteUrl('/#website') },
      ...(breadcrumbs.length > 1
        ? { breadcrumb: { '@id': url + '#breadcrumb' } }
        : {}),
      ...(page.image
        ? {
            primaryImageOfPage: {
              '@type': 'ImageObject',
              url: absoluteUrl(page.image),
            },
          }
        : {}),
    },
  ];
  // Google requires at least two ListItems. The homepage has no ancestors;
  // inventing a second root crumb just to satisfy an audit would be misleading.
  if (breadcrumbs.length > 1)
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': url + '#breadcrumb',
      itemListElement: breadcrumbs.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    });
  if (page.kind === 'service')
    graph.push({
      '@type': 'Service',
      '@id': url + '#service',
      name: page.label,
      description: page.description,
      url,
      provider: { '@id': absoluteUrl('/#organization') },
      areaServed: { '@type': 'Country', name: 'Deutschland' },
    });
  const children = seoPages.filter((child) => child.parent === path);
  if (page.kind === 'collection' && children.length)
    graph.push({
      '@type': 'ItemList',
      itemListElement: children.map((child, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: child.label,
        url: absoluteUrl(child.path),
      })),
    });
  const editorial = findEditorialPage(path);
  if (page.kind === 'case')
    graph.push({
      '@type': 'CreativeWork',
      '@id': url + '#project-story',
      name: page.label + ' – Projekteinblick',
      description: page.description,
      url,
      creator: { '@id': absoluteUrl('/#organization') },
      mainEntityOfPage: { '@id': url + '#webpage' },
      ...(page.image ? { image: absoluteUrl(page.image) } : {}),
    });
  if (page.kind === 'article' && editorial)
    graph.push({
      '@type': 'Article',
      '@id': url + '#article',
      headline: editorial.heading.replace(/\n/g, ' '),
      description: page.description,
      image: absoluteUrl(editorial.image.src),
      datePublished: editorial.modified,
      dateModified: editorial.modified,
      author: {
        '@type': 'Organization',
        '@id': absoluteUrl('/#organization'),
        name: siteIdentity.name,
        url: absoluteUrl('/ueber-nine'),
      },
      publisher: { '@id': absoluteUrl('/#organization') },
      mainEntityOfPage: { '@id': url + '#webpage' },
      inLanguage: 'de-DE',
    });
  if (editorial?.faqs.length)
    graph.push({
      '@type': 'FAQPage',
      '@id': url + '#faq',
      mainEntity: editorial.faqs.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    });
  if (path === '/pakete')
    graph.push({
      '@type': 'OfferCatalog',
      name: 'Website-Pakete von Nine.ai',
      itemListElement: websiteOffers.map((offer) => ({
        '@type': 'Offer',
        url: absoluteUrl('/pakete#' + offer.slug),
        itemOffered: {
          '@type': 'Service',
          name: offer.name,
          description: offer.goal,
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: offer.price,
          priceCurrency: 'EUR',
          valueAddedTaxIncluded: false,
        },
        seller: { '@id': absoluteUrl('/#organization') },
      })),
    });
  return (
    <JsonLd value={{ '@context': 'https://schema.org', '@graph': graph }} />
  );
}
