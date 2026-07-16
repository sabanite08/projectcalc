// Permit-ready garage plan sets, sold on Etsy (ProjectCalcShop). Each is a 9-sheet
// 11x17 construction set drawn and checked by an ICC-Certified Building Official.
// The /garage-plans hub renders the comparison table + JSON-LD from this list.
// Add a row here (with its live Etsy URL) as each new garage size is published.

export interface GaragePlan {
  id: string;                 // internal SKU (PF-Gxxx)
  size: string;               // "14×24" (width × length)
  w: number;                  // width, ft
  l: number;                  // length, ft
  sqft: number;
  cars: string;               // "1-Car"
  style: 'Gable' | 'Craftsman';
  doors: string;              // overhead-door summary
  url: string;                // Etsy listing URL
}

export const GARAGE_PRICE = '$29';

export const garagePlans: GaragePlan[] = [
  { id: 'PF-G001', size: '14×24', w: 14, l: 24, sqft: 336,  cars: '1-Car', style: 'Gable',     doors: 'One 9′ carriage door',   url: 'https://www.etsy.com/listing/4538660719' },
  { id: 'PF-G002', size: '20×24', w: 20, l: 24, sqft: 480,  cars: '2-Car', style: 'Gable',     doors: 'One 16′ carriage door',  url: 'https://www.etsy.com/listing/4539076117' },
  { id: 'PF-G003', size: '24×24', w: 24, l: 24, sqft: 576,  cars: '2-Car', style: 'Gable',     doors: 'One 16′ carriage door',  url: 'https://www.etsy.com/listing/4539123402' },
  { id: 'PF-G011', size: '48×28', w: 48, l: 28, sqft: 1344, cars: '4-Car', style: 'Craftsman', doors: 'Four 9′ carriage doors', url: 'https://www.etsy.com/listing/4538593459' },
];

// Calculators that pair with building a garage — used for two-way internal links.
export const garageRelatedCalcSlugs = [
  'concrete-calculator',
  'gravel-calculator',
  'lumber-calculator',
  'rafter-length-calculator',
  'roofing-calculator',
  'floor-joist-span-calculator',
];
