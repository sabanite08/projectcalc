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
    url: null,
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
    url: null,
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
    url: null,
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
];

export function getToolkitForCalc(calcSlug: string): Toolkit | null {
  const hit = toolkits.find(t => t.calcSlugs.includes(calcSlug));
  if (!hit || !hit.url) return null;
  return hit;
}
