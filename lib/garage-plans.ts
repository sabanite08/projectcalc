// Permit-ready garage plan sets, sold on Etsy (ProjectCalcShop). Each is a 9-sheet
// 11x17 construction set drawn and checked by an ICC-Certified Building Official.
// The /garage-plans hub renders the cards, the comparison table + JSON-LD from this list.
// Add a row here (with its live Etsy URL) as each new garage size is published.
//
// EVERY FIELD HERE IS A CLAIM A BUYER CAN CHECK against the plan set they download, so each one is
// read off the SKU's plan_data.json (planforge/output/<SKU>/plan_data.json) — the file the drawing
// engine itself writes — not written from memory. `name` and `blurb` must match the Etsy listing;
// PLAN_NAMES / PLAN_DESC in planforge/marketing.py is where those originate.

export interface GaragePlan {
  id: string;                 // internal SKU (PF-Gxxx)
  name: string;               // plan name, as sold ("The Caldwell")
  size: string;               // "14×24" (width × length)
  w: number;                  // width, ft
  l: number;                  // length, ft
  sqft: number;
  cars: string;               // "1-Car"
  style: 'Gable' | 'Craftsman';
  doors: string;              // overhead-door summary
  roofFrame: 'Stick-framed' | 'Trussed';
  features: string;           // the short differentiator, for the compare table
  blurb: string;              // 1-2 sentences: card copy + Product JSON-LD description
  image: string;              // hero, served from /public (see scripts note below)
  url: string;                // Etsy listing URL
}

export const GARAGE_PRICE = '$29';

export const garagePlans: GaragePlan[] = [
  {
    id: 'PF-G001',
    name: 'The Alcott',
    size: '14×24', w: 14, l: 24, sqft: 336,
    cars: '1-Car', style: 'Gable',
    doors: 'One 9′ carriage door',
    roofFrame: 'Stick-framed',
    features: 'Board-and-batten gable',
    blurb:
      'A compact one-car garage that still leaves a full side wall for a workbench and storage. ' +
      'Stick-framed rafters at 16″ o.c. with a full-size cut template on the roof sheet, a 9′ ' +
      'carriage-style overhead door, and a board-and-batten gable end.',
    image: '/plans/pf-g001.webp',
    url: 'https://www.etsy.com/listing/4538660719',
  },
  {
    id: 'PF-G002',
    name: 'The Bexley',
    size: '20×24', w: 20, l: 24, sqft: 480,
    cars: '2-Car', style: 'Gable',
    doors: 'One 16′ carriage door',
    roofFrame: 'Trussed',
    features: 'Door awning + corner floodlights',
    blurb:
      'Two cars side by side under a single wide 16′ door, with a charcoal standing-seam awning ' +
      'over the opening and floodlights at the front corners. 13 trusses at 24″ o.c., and the ' +
      'door wall is carried by a CS-PF portal frame — detailed and scheduled, not hand-waved.',
    image: '/plans/pf-g002.webp',
    url: 'https://www.etsy.com/listing/4539076117',
  },
  {
    id: 'PF-G003',
    name: 'The Caldwell',
    size: '24×24', w: 24, l: 24, sqft: 576,
    cars: '2-Car', style: 'Gable',
    doors: 'One 16′ carriage door',
    roofFrame: 'Trussed',
    features: 'Door awning + corner floodlights',
    blurb:
      'The full-size two-car: the same 16′ carriage door, charcoal standing-seam awning, and ' +
      'corner floodlights as the Bexley, with four more feet of width. That is the room to open ' +
      'both car doors and still run a workbench along the back wall without giving up a bay.',
    image: '/plans/pf-g003.webp',
    url: 'https://www.etsy.com/listing/4539123402',
  },
  {
    id: 'PF-G004',
    name: 'The Denby',
    size: '24×30', w: 24, l: 30, sqft: 720,
    cars: '2-Car', style: 'Gable',
    doors: 'One 16′ carriage door',
    roofFrame: 'Trussed',
    features: 'Extra-deep 30′ bay + door awning',
    blurb:
      'The deep two-car: the same 16′ carriage door and charcoal standing-seam awning as the ' +
      'Caldwell, stretched to 30 feet of depth — six extra feet for a full workshop or storage bay ' +
      'across the back wall without giving up either parking bay. 16 trusses at 24″ o.c. over a ' +
      'CS-PF portal door wall.',
    image: '/plans/pf-g004.webp',
    url: 'https://www.etsy.com/listing/4541250230',
  },
  {
    id: 'PF-G011',
    name: 'The Whitmore',
    size: '48×28', w: 48, l: 28, sqft: 1344,
    cars: '4-Car', style: 'Craftsman',
    doors: 'Four 9′ carriage doors',
    roofFrame: 'Trussed',
    features: 'Twin cross-gable bays, 10′ walls',
    blurb:
      'Four bays behind twin projected cross-gable bays, so a 48-foot front wall does not read as ' +
      'one flat box. Four 9′ carriage doors, 10′ walls for a lift or overhead storage, gooseneck ' +
      'barn lights, and cornice returns — 27 trusses at 24″ o.c.',
    image: '/plans/pf-g011.webp',
    url: 'https://www.etsy.com/listing/4538593459',
  },
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
