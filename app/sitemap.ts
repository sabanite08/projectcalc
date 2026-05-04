import type { MetadataRoute } from 'next';
import { calculators } from '@/lib/calculators';
import { posts } from '@/lib/posts';
import { toolCategories } from '@/lib/tools';

// Hardcoded "page actually changed" dates so Google gets honest lastmod signals.
// Bump these when the relevant content meaningfully changes (not on every deploy).
const LAUNCH = '2026-04-26';
const TOOLS_LAUNCH = '2026-05-03';
const SKETCH_LAUNCH = '2026-05-04';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://projectcalc.app';
  const launchDate = new Date(LAUNCH);
  const toolsDate = new Date(TOOLS_LAUNCH);
  const sketchDate = new Date(SKETCH_LAUNCH);
  // Blog index reflects the most recent post date
  const latestPostDate = posts.reduce(
    (latest, p) => {
      const d = new Date(p.date);
      return d > latest ? d : latest;
    },
    new Date(LAUNCH),
  );

  return [
    {
      url: base,
      lastModified: latestPostDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...calculators.map(c => ({
      url: `${base}/${c.slug}`,
      lastModified: launchDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${base}/blog`,
      lastModified: latestPostDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...posts.map(p => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    {
      url: `${base}/sketch`,
      lastModified: sketchDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/tools`,
      lastModified: toolsDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...toolCategories.map(c => ({
      url: `${base}/tools/${c.slug}`,
      lastModified: toolsDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    {
      url: `${base}/about`,
      lastModified: sketchDate,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${base}/privacy`,
      lastModified: launchDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${base}/terms`,
      lastModified: launchDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
