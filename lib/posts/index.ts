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
import hardwood from './hardwood-flooring-guide';
import carpet from './carpet-installation-guide';
import vinyl from './sheet-vinyl-flooring-guide';
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
import manualJ from './manual-j-load-basics';
import refrigerantCharge from './refrigerant-charge-basics';
import staticPressure from './static-pressure-tesp';
import ventilationCfm from './ventilation-cfm-ashrae';
import heatLoss from './heat-loss-envelope';
import paverQuantity from './paver-quantity-and-pattern-waste';
import paverSand from './paver-base-and-sand-yards';
import retainingWall from './retaining-wall-block-count';
import roofPitch from './roof-pitch-how-to-find';
import roofTruss from './roof-truss-spacing-and-count';
import snowLoad from './snow-load-design';
import floorJoist from './floor-joist-span-tables';
import rebar from './rebar-for-concrete-slabs';
import acTonnage from './ac-tonnage-explained';
import furnaceSize from './furnace-size-by-climate';
import boilerSize from './boiler-size-hydronic';
import miniSplit from './mini-split-sizing-per-zone';
import waterHeater from './water-heater-sizing-guide';
import topsoil from './topsoil-yards-and-bags';
import evCharger from './ev-charger-circuit-sizing';

export const posts: BlogPost[] = [
  paverQuantity,
  paverSand,
  retainingWall,
  roofPitch,
  roofTruss,
  snowLoad,
  floorJoist,
  rebar,
  acTonnage,
  furnaceSize,
  boilerSize,
  miniSplit,
  waterHeater,
  topsoil,
  evCharger,
  hardwood,
  carpet,
  vinyl,
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
  manualJ,
  refrigerantCharge,
  staticPressure,
  ventilationCfm,
  heatLoss,
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
