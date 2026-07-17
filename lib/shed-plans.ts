// Permit-ready shed plan sets, sold on Etsy (ProjectCalcShop). Each is a 9-sheet
// 11x17 construction set drawn and checked by an ICC-Certified Building Official.
// The /shed-plans hub renders the cards, the comparison table + JSON-LD from this list.
//
// EVERY FIELD HERE IS A CLAIM A BUYER CAN CHECK against the plan set they download, so each one is
// read off the SKU's plan_data.json (planforge/output/<SKU>/plan_data.json) — the file the drawing
// engine itself writes — not written from memory.
//
// Sheds have NO plan names, unlike the garages (The Alcott, The Bexley...). They are sold by size on
// Etsy and PLAN_NAMES in planforge/marketing.py covers garages only. Don't invent one for a card
// heading: a name that isn't on the listing is a name the buyer can't match to what they bought.

export interface ShedPlan {
  id: string;                 // internal SKU (PF-Sxxx)
  size: string;               // "8×8" (width × length)
  w: number;                  // width, ft
  l: number;                  // length, ft
  sqft: number;
  roof: 'Gable' | 'Lean-To';
  pitch: string;              // "6:12"
  rafter: string;             // "2×6" — gables are 2x6, lean-tos span farther on 2x8
  door: string;               // "6′ double"
  windows: string;            // "2 (3×4)"
  bestFor: string;            // the short use-case, for the compare table
  blurb: string;              // 1-2 sentences: card copy + Product JSON-LD description
  image: string;              // hero, served from /public
  url: string;                // Etsy listing URL
}

export const SHED_PRICE = '$19';

// The 200 sq ft line: many jurisdictions exempt accessory structures under it (the rules vary — the
// FAQ says so and so should any blurb that mentions it). Only the 12x20 (240 sf) clears it; 12x16 at
// 192 sf is the largest that does not. That's a real buying decision, so the blurbs name it.
export const shedPlans: ShedPlan[] = [
  {
    id: 'PF-S001',
    size: '8×8', w: 8, l: 8, sqft: 64,
    roof: 'Gable', pitch: '6:12', rafter: '2×6',
    door: '3′ single', windows: '1 (2×3)',
    bestFor: 'Mower + garden tools',
    blurb:
      'Sixty-four square feet for the mower, the trimmer, and the garden tools — the tidy backyard ' +
      'shed that clears out the garage without eating the yard. A 3′ single door and one window, ' +
      'on 2×6 rafters at a 6:12 pitch.',
    image: '/plans/pf-s001.webp',
    url: 'https://www.etsy.com/listing/4534327769',
  },
  {
    id: 'PF-S002',
    size: '8×10', w: 8, l: 10, sqft: 80,
    roof: 'Gable', pitch: '6:12', rafter: '2×6',
    door: '4′ double', windows: '1 (3×3)',
    bestFor: 'Bikes + shelving',
    blurb:
      'The 8×8 with room for bikes and a full wall of shelving down one side. The door steps up to ' +
      'a 4′ double — wide enough to walk a mower straight through instead of angling it.',
    image: '/plans/pf-s002.webp',
    url: 'https://www.etsy.com/listing/4534343138',
  },
  {
    id: 'PF-S003',
    size: '8×12', w: 8, l: 12, sqft: 96,
    roof: 'Gable', pitch: '6:12', rafter: '2×6',
    door: '5′ double', windows: '2 (3×3)',
    bestFor: 'Narrow lots + fence lines',
    blurb:
      'Long and narrow: it tucks along a fence or a side yard where a square shed will not fit, and ' +
      'still takes a mower plus a wall of storage. A 5′ double door and two windows.',
    image: '/plans/pf-s003.webp',
    url: 'https://www.etsy.com/listing/4534343186',
  },
  {
    id: 'PF-S004',
    size: '10×10', w: 10, l: 10, sqft: 100,
    roof: 'Gable', pitch: '6:12', rafter: '2×6',
    door: '5′ double', windows: '1 (3×3)',
    bestFor: 'Riding mower + bench',
    blurb:
      'Square and deep enough for a riding mower with a workbench behind it. Ten feet is the point ' +
      'where a bench stops living in front of the door.',
    image: '/plans/pf-s004.webp',
    url: 'https://www.etsy.com/listing/4534328233',
  },
  {
    id: 'PF-S005',
    size: '10×12', w: 10, l: 12, sqft: 120,
    roof: 'Gable', pitch: '6:12', rafter: '2×6',
    door: '5′ double', windows: '1 (3×3)',
    bestFor: 'Mower, bench, shelving',
    blurb:
      'The size most people land on: a riding mower, a bench, and shelving, with floor left over to ' +
      'stand and actually work. A 5′ double door and a window for daylight over the bench.',
    image: '/plans/pf-s005.webp',
    url: 'https://www.etsy.com/listing/4533708617',
  },
  {
    id: 'PF-S006',
    size: '10×14', w: 10, l: 14, sqft: 140,
    roof: 'Gable', pitch: '6:12', rafter: '2×6',
    door: '5′ double', windows: '2 (3×3)',
    bestFor: 'Small workshop',
    blurb:
      'Two feet more than the 10×12 — the difference between storage you walk into and a shop you ' +
      'can turn around in. Two windows put cross-light over a bench.',
    image: '/plans/pf-s006.webp',
    url: 'https://www.etsy.com/listing/4535335273',
  },
  {
    id: 'PF-S007',
    size: '10×16', w: 10, l: 16, sqft: 160,
    roof: 'Gable', pitch: '6:12', rafter: '2×6',
    door: '6′ double', windows: '2 (3×3)',
    bestFor: 'Workshop + ATV',
    blurb:
      'A real workshop footprint at 160 sq ft, still under the 200 sq ft line many jurisdictions ' +
      'exempt from a permit. The 6′ double door takes an ATV or a lawn tractor with attachments.',
    image: '/plans/pf-s007.webp',
    url: 'https://www.etsy.com/listing/4535347824',
  },
  {
    id: 'PF-S008',
    size: '12×12', w: 12, l: 12, sqft: 144,
    roof: 'Gable', pitch: '6:12', rafter: '2×6',
    door: '5′ double', windows: '1 (3×4)',
    bestFor: 'Bench + mower parked in front',
    blurb:
      'Twelve feet square — the widest of the gables before you are really describing a small ' +
      'garage. Deep enough for a bench across the back wall with a mower parked in front of it.',
    image: '/plans/pf-s008.webp',
    url: 'https://www.etsy.com/listing/4535347902',
  },
  {
    id: 'PF-S009',
    size: '12×16', w: 12, l: 16, sqft: 192,
    roof: 'Gable', pitch: '6:12', rafter: '2×6',
    door: '6′ double', windows: '2 (3×4)',
    bestFor: 'Biggest under 200 sq ft',
    blurb:
      'At 192 sq ft this is the largest set here that still slips under the 200 sq ft line many ' +
      'jurisdictions exempt — eight square feet of headroom, and worth checking yours. A 6′ double ' +
      'door, two windows, and room for a workshop plus storage.',
    image: '/plans/pf-s009.webp',
    url: 'https://www.etsy.com/listing/4535439872',
  },
  {
    id: 'PF-S010',
    size: '12×20', w: 12, l: 20, sqft: 240,
    roof: 'Gable', pitch: '6:12', rafter: '2×6',
    door: '6′ double', windows: '2 (3×4)',
    bestFor: 'Full workshop or studio',
    blurb:
      'The biggest: 240 sq ft for an ATV, a lawn tractor with attachments, or a full workshop or ' +
      'studio. It clears 200 sq ft, so plan on a permit in most places — which is the whole point ' +
      'of a set drawn to hand straight to the building department.',
    image: '/plans/pf-s010.webp',
    url: 'https://www.etsy.com/listing/4535439994',
  },
  {
    id: 'PF-S011',
    size: '8×12', w: 8, l: 12, sqft: 96,
    roof: 'Lean-To', pitch: '2:12', rafter: '2×8',
    door: '4′ double', windows: '1 (3×3)',
    bestFor: 'Against a fence or wall',
    blurb:
      'A single-slope roof that drains to one side and tucks against a fence, garage, or house ' +
      'wall. 2×8 rafters at a 2:12 pitch bear on both walls, so no ceiling ties are needed, and ' +
      'the set includes a dimensioned rake-wall stud cut schedule.',
    image: '/plans/pf-s011.webp',
    url: 'https://www.etsy.com/listing/4535427743',
  },
  {
    id: 'PF-S012',
    size: '10×12', w: 10, l: 12, sqft: 120,
    roof: 'Lean-To', pitch: '2:12', rafter: '2×8',
    door: '5′ double', windows: '2 (3×3, 2×3)',
    bestFor: 'Modern low profile',
    blurb:
      'The lean-to at a working size: the low modern profile against a wall, 120 sq ft, and two ' +
      'windows. 2×8 rafters at 2:12 bear on both walls — no ceiling ties — with a rake-wall stud ' +
      'cut schedule drawn out.',
    image: '/plans/pf-s012.webp',
    url: 'https://www.etsy.com/listing/4535440276',
  },
];

// Calculators that pair with building a shed — used for two-way internal links.
export const shedRelatedCalcSlugs = [
  'concrete-calculator',
  'lumber-calculator',
  'floor-joist-span-calculator',
  'rafter-length-calculator',
  'roofing-calculator',
  'gravel-calculator',
];
