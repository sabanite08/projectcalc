// Permit-ready shed plan sets, sold on Etsy (ProjectCalcShop). Each is a 9-sheet
// 11x17 construction set drawn and checked by an ICC-Certified Building Official.
// The /shed-plans hub renders the comparison table + JSON-LD from this list.

export interface ShedPlan {
  id: string;                 // internal SKU (PF-Sxxx)
  size: string;               // "8×8" (width × length)
  w: number;                  // width, ft
  l: number;                  // length, ft
  sqft: number;
  roof: 'Gable' | 'Lean-To';
  pitch: string;              // "6:12"
  door: string;               // "6′ double"
  windows: string;            // "2 (3×4)"
  url: string;                // Etsy listing URL
}

export const SHED_PRICE = '$19';

export const shedPlans: ShedPlan[] = [
  { id: 'PF-S001', size: '8×8',   w: 8,  l: 8,  sqft: 64,  roof: 'Gable',   pitch: '6:12', door: '3′ single', windows: '1 (2×3)',        url: 'https://www.etsy.com/listing/4534327769' },
  { id: 'PF-S002', size: '8×10',  w: 8,  l: 10, sqft: 80,  roof: 'Gable',   pitch: '6:12', door: '4′ double', windows: '1 (3×3)',        url: 'https://www.etsy.com/listing/4534343138' },
  { id: 'PF-S003', size: '8×12',  w: 8,  l: 12, sqft: 96,  roof: 'Gable',   pitch: '6:12', door: '5′ double', windows: '2 (3×3)',        url: 'https://www.etsy.com/listing/4534343186' },
  { id: 'PF-S004', size: '10×10', w: 10, l: 10, sqft: 100, roof: 'Gable',   pitch: '6:12', door: '5′ double', windows: '1 (3×3)',        url: 'https://www.etsy.com/listing/4534328233' },
  { id: 'PF-S005', size: '10×12', w: 10, l: 12, sqft: 120, roof: 'Gable',   pitch: '6:12', door: '5′ double', windows: '1 (3×3)',        url: 'https://www.etsy.com/listing/4533708617' },
  { id: 'PF-S006', size: '10×14', w: 10, l: 14, sqft: 140, roof: 'Gable',   pitch: '6:12', door: '5′ double', windows: '2 (3×3)',        url: 'https://www.etsy.com/listing/4535335273' },
  { id: 'PF-S007', size: '10×16', w: 10, l: 16, sqft: 160, roof: 'Gable',   pitch: '6:12', door: '6′ double', windows: '2 (3×3)',        url: 'https://www.etsy.com/listing/4535347824' },
  { id: 'PF-S008', size: '12×12', w: 12, l: 12, sqft: 144, roof: 'Gable',   pitch: '6:12', door: '5′ double', windows: '1 (3×4)',        url: 'https://www.etsy.com/listing/4535347902' },
  { id: 'PF-S009', size: '12×16', w: 12, l: 16, sqft: 192, roof: 'Gable',   pitch: '6:12', door: '6′ double', windows: '2 (3×4)',        url: 'https://www.etsy.com/listing/4535439872' },
  { id: 'PF-S010', size: '12×20', w: 12, l: 20, sqft: 240, roof: 'Gable',   pitch: '6:12', door: '6′ double', windows: '2 (3×4)',        url: 'https://www.etsy.com/listing/4535439994' },
  { id: 'PF-S011', size: '8×12',  w: 8,  l: 12, sqft: 96,  roof: 'Lean-To', pitch: '2:12', door: '4′ double', windows: '1 (3×3)',        url: 'https://www.etsy.com/listing/4535427743' },
  { id: 'PF-S012', size: '10×12', w: 10, l: 12, sqft: 120, roof: 'Lean-To', pitch: '2:12', door: '5′ double', windows: '2 (3×3, 2×3)',   url: 'https://www.etsy.com/listing/4535440276' },
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
