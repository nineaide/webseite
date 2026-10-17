export type EditorialImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};
export type EditorialSection = {
  id: string;
  title: string;
  paragraphs: string[];
  points?: { title: string; text: string }[];
  table?: { headings: string[]; rows: string[][] };
  image?: EditorialImage;
  links?: { label: string; href: string }[];
};
export type EditorialPage = {
  path: string;
  parent: string;
  kind: 'service' | 'article' | 'case';
  label: string;
  title: string;
  description: string;
  kicker: string;
  heading: string;
  intro: string;
  image: EditorialImage;
  highlights: string[];
  sections: EditorialSection[];
  faqs: string[][];
  referenceIds: string[];
  related: string[];
  modified: string;
};
export const desktopImage = (
  id: string,
  alt: string,
  caption: string,
): EditorialImage => ({
  src: '/project-images/' + id + '-desktop.webp',
  alt,
  caption,
  width: 1440,
  height: 1000,
});
