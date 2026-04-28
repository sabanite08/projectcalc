export interface Toolkit {
  id: string;
  name: string;
  price: string;
  pitch: string;
  bullets: string[];
  url: string | null;
  calcSlugs: string[];
}

// Toolkit URLs come from env vars so listings can go live without a code push.
// Set NEXT_PUBLIC_TOOLKIT_ROOFING_URL in Vercel after the shop listing exists.
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
    url: process.env.NEXT_PUBLIC_TOOLKIT_ROOFING_URL || null,
    calcSlugs: ['roofing-calculator'],
  },
];

export function getToolkitForCalc(calcSlug: string): Toolkit | null {
  const hit = toolkits.find(t => t.calcSlugs.includes(calcSlug));
  if (!hit || !hit.url) return null;
  return hit;
}
