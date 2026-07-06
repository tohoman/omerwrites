// Merkezi taksonomi — nav, filtreler, journey sayfaları ve kartlar buradan beslenir.

export const TOPICS = [
  { slug: 'geopolitics', label: 'Geopolitics', kind: 'Policy Analysis' },
  { slug: 'energy-economy', label: 'Energy & Economy', kind: 'Policy Analysis' },
  { slug: 'identity-faith', label: 'Identity & Faith', kind: 'Column' },
  { slug: 'technology', label: 'Technology', kind: 'Academic' },
] as const;

export type TopicLabel = (typeof TOPICS)[number]['label'];

export const KINDS = ['Policy Analysis', 'Academic', 'Column'] as const;
export type Kind = (typeof KINDS)[number];

export const JOURNEYS = [
  {
    slug: 'the-turkey-axis',
    title: 'The Turkey Axis',
    dek: "Ankara's balancing act — how a middle power converts regional turbulence into strategic leverage.",
  },
  {
    slug: 'great-power-competition',
    title: 'Great Power Competition',
    dek: 'The return of hard interests: spheres of influence, deterrence, and the economics beneath them.',
  },
  {
    slug: 'faith-and-statecraft',
    title: 'Faith & Statecraft',
    dek: 'Where belief meets power — religion as identity, constraint, and instrument in political life.',
  },
] as const;

export const topicSlug = (label: string) =>
  TOPICS.find((t) => t.label === label)?.slug ??
  label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const kindSlug = (kind: string) => kind.toLowerCase().replace(/\s+/g, '-');
