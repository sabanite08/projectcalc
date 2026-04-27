import type { BlogPost } from './types';
import concrete from './how-much-concrete';
import drywall from './drywall-estimating-guide';
import roofing from './roofing-shingles-guide';
import mulch from './mulch-yards-vs-bags';
import mortgage from './mortgage-pi-vs-piti';

export const posts: BlogPost[] = [
  concrete,
  drywall,
  roofing,
  mulch,
  mortgage,
];

export const getPost = (slug: string): BlogPost | undefined =>
  posts.find(p => p.slug === slug);

export const getRelatedPosts = (slug: string, limit = 3): BlogPost[] =>
  posts.filter(p => p.slug !== slug).slice(0, limit);

export const getPostsForCalc = (calcSlug: string): BlogPost[] =>
  posts.filter(p => p.relatedCalcs.includes(calcSlug));
