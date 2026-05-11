import { calculators } from './calculators';
import type { CalcResult, Calculator } from './types';

export type SketchMode = 'rectangle' | 'lshape' | 'custom';

export interface SketchSnapshot {
  mode: SketchMode;
  /** rect/L-shape bounding length (or polygon bbox) */
  L: number;
  /** rect/L-shape bounding width (or polygon bbox) */
  W: number;
  /** L-shape cutout length */
  cL?: number;
  /** L-shape cutout width */
  cW?: number;
  /** L-shape cutout corner */
  corner?: 'tr' | 'tl' | 'br' | 'bl';
  /** custom polygon area in ft² */
  area: number;
  /** total perimeter in ft (used by insulation + custom calcs) */
  perimeter: number;
}

/** Returns the default value for a calc input (matches what the calc page uses). */
function defaultFor(inp: Calculator['inputs'][number]): string | number {
  return inp.type === 'select' ? inp.default : inp.default;
}

/** Builds the `data` object the calc.calc() expects, using sketch dims +
 *  each input's default for anything the sketch can't supply. */
export function buildCalcData(calc: Calculator, sketch: SketchSnapshot): Record<string, string | number> {
  const data: Record<string, string | number> = {};
  calc.inputs.forEach(inp => {
    data[inp.id] = defaultFor(inp);
  });

  // Insulation is the one calc where L = total wall length (= perimeter)
  if (calc.slug === 'insulation-calculator') {
    data.L = sketch.perimeter;
    return data;
  }

  // Standard area-based calcs: feed sketch dimensions
  if (sketch.mode === 'custom') {
    data.shape = 'custom';
    data.customArea = sketch.area;
    data.customPerimeter = sketch.perimeter;
    data.L = sketch.L;
    data.W = sketch.W;
  } else if (sketch.mode === 'lshape') {
    data.L = sketch.L;
    data.W = sketch.W;
    data.shape = 'lshape';
    data.cutoutL = sketch.cL ?? 0;
    data.cutoutW = sketch.cW ?? 0;
    data.cutoutCorner = sketch.corner ?? 'tr';
  } else {
    data.L = sketch.L;
    data.W = sketch.W;
    data.shape = 'rectangle';
  }
  return data;
}

/** Lists the inputs that were *not* derived from the sketch (so the PDF can
 *  show the assumed defaults). */
export function defaultedInputs(calc: Calculator): { id: string; label: string; value: string }[] {
  const sketchOwnedIds = new Set([
    'L', 'W', 'shape', 'cutoutL', 'cutoutW', 'cutoutCorner',
    'customArea', 'customPerimeter',
  ]);
  return calc.inputs
    .filter(inp => !sketchOwnedIds.has(inp.id))
    .map(inp => {
      const label = typeof inp.label === 'function' ? inp.label({}) : inp.label;
      let value: string;
      if (inp.type === 'select') {
        const opt = inp.options.find(([v]) => v === inp.default);
        value = opt ? opt[1] : String(inp.default);
      } else {
        value = `${inp.default}${inp.unit ? ' ' + inp.unit : ''}`;
      }
      return { id: inp.id, label, value };
    });
}

export interface ComputedCalc {
  slug: string;
  name: string;
  result: CalcResult;
  defaults: { label: string; value: string }[];
}

export function computeCalcsForSketch(slugs: string[], sketch: SketchSnapshot): ComputedCalc[] {
  const out: ComputedCalc[] = [];
  for (const slug of slugs) {
    const calc = calculators.find(c => c.slug === slug);
    if (!calc) continue;
    try {
      const data = buildCalcData(calc, sketch);
      const result = calc.calc(data);
      const defaults = defaultedInputs(calc).map(d => ({ label: d.label, value: d.value }));
      out.push({ slug: calc.slug, name: calc.name, result, defaults });
    } catch {
      // Calculation failed — skip silently rather than block the PDF.
    }
  }
  return out;
}
