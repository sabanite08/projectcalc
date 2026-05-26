import type { MetadataRoute } from 'next';
import { calculators } from '@/lib/calculators';
import { posts } from '@/lib/posts';
import { LAST_REVIEWED } from '@/lib/author';

// Calc + utility-page lastmod tracks LAST_REVIEWED so an E-E-A-T pass moves
// the sitemap signal too. Bumping LAST_REVIEWED in lib/author.ts is the single
// place to tell Google "everything was re-audited on this date."
const LAUNCH = '2026-04-26';
const SKETCH_LAUNCH = '2026-05-04';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://projectcalc.app';
  const launchDate = new Date(LAUNCH);
  const reviewedDate = new Date(LAST_REVIEWED);
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
      lastModified: reviewedDate,
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
      url: `${base}/about`,
      lastModified: reviewedDate,
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
