import { developmentPages } from './development-pages';
import { adsAutomationPages } from './ads-automation-pages';
import { industryPages } from './industry-pages';
import { serviceHubPages } from './service-hubs';
import { caseStudies } from './case-studies';
import { guidePages } from './guide-pages';
export const editorialPages = [
  ...serviceHubPages,
  ...developmentPages,
  ...adsAutomationPages,
  ...industryPages,
  ...caseStudies,
  ...guidePages,
];
export const findEditorialPage = (path: string) =>
  editorialPages.find((page) => page.path === path);
