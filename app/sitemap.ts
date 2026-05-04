import type { MetadataRoute } from 'next';
import { calculators } from '@/lib/calculators';
import { posts } from '@/lib/posts';
import { toolCategories } from '@/lib/tools';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://projectcalc.app';
  const now = new Date();

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...calculators.map(c => ({
      url: `${base}/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${base}/blog`,
      lastModified: now,
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
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${base}/tools`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...toolCategories.map(c => ({
      url: `${base}/tools/${c.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${base}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${base}/terms`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
