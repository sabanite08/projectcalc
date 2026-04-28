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
];

export function getToolkitForCalc(calcSlug: string): Toolkit | null {
  const hit = toolkits.find(t => t.calcSlugs.includes(calcSlug));
  if (!hit || !hit.url) return null;
  return hit;
}
