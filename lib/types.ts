export type InputType = 'number' | 'select';

export interface NumberInput {
  id: string;
  label: string;
  unit: string;
  default: number;
  step?: number;
  type?: 'number';
  tooltip?: string;
}

export interface SelectInput {
  id: string;
  label: string;
  unit: string;
  default: string;
  type: 'select';
  options: [string, string][];
  tooltip?: string;
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

export interface Calculator {
  slug: string;
  name: string;
  category: 'construction' | 'home' | 'finance' | 'utility';
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
