import type { BlogPost } from './types';
import concrete from './how-much-concrete';
import drywall from './drywall-estimating-guide';
import roofing from './roofing-shingles-guide';
import mulch from './mulch-yards-vs-bags';
import mortgage from './mortgage-pi-vs-piti';
import paint from './how-much-paint';
import waterSupply from './water-supply-line-sizing';
import tileBathroom from './how-much-tile-bathroom';

export const posts: BlogPost[] = [
  paint,
  waterSupply,
  tileBathroom,
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
