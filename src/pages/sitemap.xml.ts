import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://omerwrites.com');
  const essays = await getCollection('essays', ({ data }) => !data.draft);

  const staticPaths = ['', 'essays', 'about'];
  const essayPaths = essays.map((essay) => `essays/${essay.id}`);
  const journeyPaths = [...new Set(essays.map((e) => e.data.journey).filter(Boolean))].map(
    (slug) => `journeys/${slug}`,
  );

  const urls = [...staticPaths, ...essayPaths, ...journeyPaths].map(
    (path) => new URL(path, base).toString(),
  );

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((url) => `  <url>\n    <loc>${url}</loc>\n  </url>`)
    .join('\n')}\n</urlset>\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
