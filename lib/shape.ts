import type { CalcInput } from './types';

/**
 * Standard shape inputs to add to any area-based calculator.
 * Always pair with `extractShape` in the calc function and `appendShapeDetail` in the result.
 */
export const SHAPE_INPUTS: CalcInput[] = [
  {
    id: 'shape',
    label: 'Shape',
    unit: '',
    type: 'select',
    default: 'rectangle',
    options: [
      ['rectangle', 'Rectangle'],
      ['lshape', 'L-shape (with cutout)'],
      ['custom', 'Custom (from sketch)'],
    ],
  },
  {
    id: 'cutoutL',
    label: 'Cutout length',
    unit: 'ft',
    default: 0,
    step: 0.5,
    visibleWhen: d => d.shape === 'lshape',
  },
  {
    id: 'cutoutW',
    label: 'Cutout width',
    unit: 'ft',
    default: 0,
    step: 0.5,
    visibleWhen: d => d.shape === 'lshape',
  },
  {
    id: 'cutoutCorner',
    label: 'Cutout corner',
    unit: '',
    type: 'select',
    default: 'tr',
    options: [
      ['tr', 'Top-right'],
      ['tl', 'Top-left'],
      ['br', 'Bottom-right'],
      ['bl', 'Bottom-left'],
    ],
    visibleWhen: d => d.shape === 'lshape',
  },
  {
    id: 'customArea',
    label: 'Sketched area',
    unit: 'ft²',
    default: 0,
    step: 1,
    visibleWhen: d => d.shape === 'custom',
  },
  {
    id: 'customPerimeter',
    label: 'Sketched perimeter',
    unit: 'ft',
    default: 0,
    step: 1,
    visibleWhen: d => d.shape === 'custom',
  },
];

export interface ShapeArea {
  gross: number;
  cutout: number;
  net: number;
  isLShape: boolean;
  isCustom: boolean;
  /** Wall perimeter for walls-based calcs (drywall, paint). For rect/L it
   *  uses the bounding rectangle; for custom it is the true polygon
   *  perimeter passed in via `customPerimeter`. */
  wallPerimeter: number;
}

export function extractShape(data: Record<string, string | number>): ShapeArea {
  const L = +data.L || 0;
  const W = +data.W || 0;
  const gross = L * W;
  const isCustom = data.shape === 'custom';
  const isLShape = data.shape === 'lshape';
  if (isCustom) {
    const a = +data.customArea || 0;
    const p = +data.customPerimeter || 0;
    return { gross: a, cutout: 0, net: a, isLShape: false, isCustom: true, wallPerimeter: p };
  }
  const rectPerimeter = 2 * (L + W);
  if (!isLShape) {
    return { gross, cutout: 0, net: gross, isLShape: false, isCustom: false, wallPerimeter: rectPerimeter };
  }
  const cL = +data.cutoutL || 0;
  const cW = +data.cutoutW || 0;
  const cutout = cL * cW;
  return {
    gross,
    cutout,
    net: Math.max(0, gross - cutout),
    isLShape: true,
    isCustom: false,
    wallPerimeter: rectPerimeter,
  };
}

export function shapeDetailRows(s: ShapeArea): [string, string][] {
  if (s.isCustom) {
    return [
      ['Custom-shape area', s.net.toFixed(0) + ' ft²'],
      ['Custom-shape perimeter', s.wallPerimeter.toFixed(0) + ' ft'],
    ];
  }
  if (!s.isLShape || s.cutout === 0) {
    return [['Floor area', s.net.toFixed(0) + ' ft²']];
  }
  return [
    ['Gross area', s.gross.toFixed(0) + ' ft²'],
    ['Cutout', s.cutout.toFixed(0) + ' ft²'],
    ['Net area (L-shape)', s.net.toFixed(0) + ' ft²'],
  ];
}
