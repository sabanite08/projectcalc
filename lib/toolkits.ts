export interface Toolkit {
  id: string;
  name: string;
  price: string;
  pitch: string;
  bullets: string[];
  url: string | null;
  calcSlugs: string[];
}

export const toolkits: Toolkit[] = [
  {
    id: 'roofing-pro',
    name: 'Roofing Pro Toolkit',
    price: '$39',
    pitch:
      'Excel workbook that turns a roof footprint and pitch into a full material takeoff, ventilation balance, and a print-ready customer quote.',
    bullets: [
      'Material takeoff with waste factor + dumpster sizing',
      'Pitch reference, ventilation NFA (1:150 rule)',
      'Print-ready quote with editable margin, tax, and labor rates',
    ],
    url: 'https://www.etsy.com/listing/4495853489/roofing-estimate-spreadsheet-excel',
    calcSlugs: ['roofing-calculator'],
  },
  {
    id: 'hvac-pro',
    name: 'HVAC Pro Toolkit',
    price: '$39',
    pitch:
      'Excel workbook that runs a Manual J load, allocates per-room CFM with round-duct sizes, checks ASHRAE 62.2 ventilation, and prints a customer quote.',
    bullets: [
      'Manual J HTM heating + cooling load with auto equipment sizing',
      'Per-room CFM allocation + round-duct lookup at 0.10" WC',
      'ASHRAE 62.2 whole-house + spot exhaust check',
    ],
    url: 'https://www.etsy.com/listing/4496461127/hvac-estimate-spreadsheet-excel-manual-j',
    calcSlugs: [
      'manual-j-heat-load-calculator',
      'btu-calculator',
      'duct-cfm-calculator',
      'static-pressure-calculator',
      'ventilation-cfm-calculator',
      'heat-loss-calculator',
      'refrigerant-charge-calculator',
    ],
  },
  {
    id: 'plumbing-pro',
    name: 'Plumbing Pro Toolkit',
    price: '$39',
    pitch:
      'Excel workbook that auto-picks supply, drain, and vent pipe sizes from your fixture list and prints a customer quote.',
    bullets: [
      'Type fixture qty → auto WSFU + DFU totals (IPC tables)',
      'Auto-pick service main, distribution, drain, vent, and trap-arm sizes',
      'Print-ready quote with editable PEX/copper/PVC pricing',
    ],
    url: 'https://www.etsy.com/listing/4496461014/plumbing-estimate-spreadsheet-excel-pipe',
    calcSlugs: [
      'water-supply-pipe-size-calculator',
      'drain-pipe-size-calculator',
      'vent-pipe-size-calculator',
      'pressure-loss-calculator',
      'gpm-to-pipe-size-calculator',
      'trap-size-calculator',
      'building-drain-size-calculator',
      'wet-wall-stack-calculator',
      'pipe-volume-calculator',
      'pipe-slope-calculator',
    ],
  },
  {
    id: 'framing-pro',
    name: 'Framing Pro Toolkit',
    price: '$39',
    pitch:
      'Excel workbook that turns a wall + floor + roof layout into a full lumber takeoff, cut list, sheathing count, and print-ready quote.',
    bullets: [
      'Studs, plates, joists, rafters, headers, hangers, fasteners — auto-counted',
      'Cut list at standard 2× lengths + total board feet by section',
      'Pitch-adjusted plywood/OSB sheet count for sub-floor, walls, and roof',
    ],
    url: 'https://www.etsy.com/listing/4496470088/framing-estimate-spreadsheet-excel',
    calcSlugs: [
      'lumber-calculator',
      'lumber-cut-calculator',
      'beam-span-calculator',
      'header-size-calculator',
      'plywood-sheets-calculator',
      'rafter-length-calculator',
      'stair-stringer-calculator',
    ],
  },
  {
    id: 'electrical-pro',
    name: 'Electrical Pro Toolkit',
    price: '$39',
    pitch:
      'Excel workbook with a NEC 220 service-load calc, branch-circuit schedule, voltage-drop check, and print-ready customer quote.',
    bullets: [
      'NEC 220 Part III standard-method panel load with all demand factors',
      '20 branch circuits pre-mapped: AWG, breaker, AFCI/GFCI, conduit fill',
      'Voltage-drop check (K=12.9 copper) — auto-flags branches over 3%',
    ],
    url: 'https://www.etsy.com/listing/4496464733/electrical-estimate-spreadsheet-excel',
    calcSlugs: [
      'panel-load-calculator',
      'voltage-drop-calculator',
      'wire-gauge-calculator',
      'circuit-breaker-size-calculator',
      'conduit-fill-calculator',
      'conduit-bending-calculator',
      'generator-size-calculator',
    ],
  },
  {
    id: 'concrete-pro',
    name: 'Concrete Pro Toolkit',
    price: '$39',
    pitch:
      'Excel workbook that turns slab + footing + wall dimensions into a complete concrete + rebar takeoff and a print-ready customer quote.',
    bullets: [
      'Yardage with waste, base material, vapor barrier, mesh, curing compound',
      'Slab + footing + wall rebar grid count with ties, chairs, bolsters',
      'Print-ready quote with editable concrete pricing by PSI + pump truck',
    ],
    url: 'https://www.etsy.com/listing/4496467247/concrete-estimate-spreadsheet-excel',
    calcSlugs: ['concrete-calculator'],
  },
  {
    id: 'painting-pro',
    name: 'Painting Pro Toolkit',
    price: '$39',
    pitch:
      'Excel workbook that turns a room takeoff into net paintable area, gallons of primer + topcoat by coverage rate, prep + paint labor hours, and a print-ready customer quote.',
    bullets: [
      'Net wall + ceiling sq ft per room (gross minus 21 sf doors, 15 sf windows)',
      'Gallons by surface with texture factor (smooth 1.00x → popcorn 1.50x)',
      'Prep-level multiplier (1.0x light → 3.0x lead-safe RRP) on labor hours',
    ],
    url: 'https://www.etsy.com/listing/4507382226/painting-estimate-spreadsheet-excel',
    calcSlugs: ['paint-calculator'],
  },
  {
    id: 'drywall-pro',
    name: 'Drywall Pro Toolkit',
    price: '$39',
    pitch:
      'Excel workbook that turns a room takeoff into 1/2" and 5/8" type X sheets, joint compound, tape, screws, and a GA-214 finish-level scaled labor + quote.',
    bullets: [
      'Sheets by 1/2" vs 5/8" type X with waste factor (residential / fire-rated split)',
      'Mud + tape + screws + corner bead, scaled by GA-214 finish level (L1-L5)',
      'Hang + tape/mud + sand + corner-bead hours with RSMeans-aligned rates',
    ],
    url: 'https://www.etsy.com/listing/4507382346/drywall-estimate-spreadsheet-excel',
    calcSlugs: ['drywall-calculator'],
  },
  {
    id: 'deck-pro',
    name: 'Deck Pro Toolkit',
    price: '$39',
    pitch:
      'Excel workbook that turns a deck footprint into joist + beam + post + footing counts, decking boards, IRC R312 balusters, fasteners, and a print-ready quote.',
    bullets: [
      'Joist count + length, beam LF, post LF, footing concrete CY with 10% waste',
      'Decking boards by material (PT / Composite / Hardwood) with auto-pricing',
      'Railing balusters at 4" max sphere passage (IRC R312.1.3) + stair stringers',
    ],
    url: 'https://www.etsy.com/listing/4507376527/deck-estimate-spreadsheet-excel-joists',
    calcSlugs: [
      'deck-stain-calculator',
      'floor-joist-span-calculator',
      'beam-span-calculator',
    ],
  },
  {
    id: 'flooring-pro',
    name: 'Flooring Pro Toolkit',
    price: '$39',
    pitch:
      'Excel workbook with a material switcher (LVP / Tile / Hardwood / Carpet / Vinyl) that returns boxes, supplementals (thinset, grout, adhesive, pad), tear-out + install hours, and a print-ready quote.',
    bullets: [
      'Material switcher pulls per-sf pricing, install rate, and supplemental list',
      'Boxes with waste factor (8-15% by material) + transitions LF',
      'Thinset/grout for tile, pad for carpet, cleats for hardwood — auto-included',
    ],
    url: 'https://www.etsy.com/listing/4507376639/flooring-estimate-spreadsheet-excel-lvp',
    calcSlugs: [
      'hardwood-calculator',
      'carpet-calculator',
      'vinyl-calculator',
      'tile-calculator',
    ],
  },
];

export function getToolkitForCalc(calcSlug: string): Toolkit | null {
  const hit = toolkits.find(t => t.calcSlugs.includes(calcSlug));
  if (!hit || !hit.url) return null;
  return hit;
}
