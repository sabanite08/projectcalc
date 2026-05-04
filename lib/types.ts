export type InputType = 'number' | 'select';

type InputData = Record<string, string | number>;
type DynamicString = string | ((data: InputData) => string);

export interface NumberInput {
  id: string;
  label: DynamicString;
  unit: string;
  default: number;
  step?: number;
  type?: 'number';
  tooltip?: DynamicString;
  visibleWhen?: (data: InputData) => boolean;
}

export interface SelectInput {
  id: string;
  label: DynamicString;
  unit: string;
  default: string;
  type: 'select';
  options: [string, string][];
  tooltip?: DynamicString;
  visibleWhen?: (data: InputData) => boolean;
}

export type CalcInput = NumberInput | SelectInput;

export interface CalcResult {
  main: string | number;
  unit: string;
  detail: [string, string | number][];
}

export interface FAQItem {
  q: string;
  a: string;
}

export type Trade = 'Carpentry' | 'Masonry & Siding' | 'Electrical' | 'Plumbing' | 'HVAC';

export interface Calculator {
  slug: string;
  name: string;
  category: 'construction' | 'home' | 'finance' | 'utility';
  trade?: Trade;
  desc: string;
  formula: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  seoIntro: string;
  note: string;
  inputs: CalcInput[];
  calc: (data: Record<string, string | number>) => CalcResult;
  faq?: FAQItem[];
}
