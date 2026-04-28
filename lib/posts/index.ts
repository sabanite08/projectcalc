import type { BlogPost } from './types';
import concrete from './how-much-concrete';
import drywall from './drywall-estimating-guide';
import roofing from './roofing-shingles-guide';
import mulch from './mulch-yards-vs-bags';
import mortgage from './mortgage-pi-vs-piti';
import paint from './how-much-paint';
import waterSupply from './water-supply-line-sizing';
import tileBathroom from './how-much-tile-bathroom';
import pressureLoss from './pressure-loss-pipes';
import gpmToSize from './gpm-to-pipe-size';
import trapSize from './trap-size-by-fixture';
import waterMeter from './water-meter-sizing';
import buildingDrain from './building-drain-sizing';
import wetWall from './wet-wall-stack-sizing';
import boosterPump from './booster-pump-sizing';
import expansionTank from './expansion-tank-sizing';

export const posts: BlogPost[] = [
  pressureLoss,
  gpmToSize,
  trapSize,
  waterMeter,
  buildingDrain,
  wetWall,
  boosterPump,
  expansionTank,
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
