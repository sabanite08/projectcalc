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
import stairStringer from './stair-stringer-layout';
import beamSpan from './beam-span-basics';
import plywoodSheets from './plywood-sheet-coverage';
import rafterLength from './rafter-length-pitch';
import headerSize from './header-size-quickpick';
import mortarGrout from './mortar-grout-bags';
import cmuBlock from './cmu-block-count';
import stoneVeneer from './stone-veneer-coverage';
import stucco from './stucco-bag-count';
import tuckpointing from './tuckpointing-mortar';
import flooring from './flooring-square-footage';
import fence from './fence-post-spacing';
import deckStain from './deck-stain-coverage';
import voltageDrop from './voltage-drop-nec';
import conduitFill from './conduit-fill-nec';
import wireGauge from './wire-gauge-awg-sizing';
import breakerSizing from './circuit-breaker-sizing';
import panelLoad from './panel-load-nec-220';
import conduitBending from './conduit-bending-offset-saddle';
import generatorSize from './generator-sizing-watts';
import btuRoom from './btu-room-sizing';
import ductCfm from './duct-cfm-sizing';

export const posts: BlogPost[] = [
  flooring,
  fence,
  deckStain,
  voltageDrop,
  conduitFill,
  wireGauge,
  breakerSizing,
  panelLoad,
  conduitBending,
  generatorSize,
  btuRoom,
  ductCfm,
  mortarGrout,
  cmuBlock,
  stoneVeneer,
  stucco,
  tuckpointing,
  stairStringer,
  beamSpan,
  plywoodSheets,
  rafterLength,
  headerSize,
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
