'use client';

import { useEffect, useState } from 'react';
import type { CalcResult } from '@/lib/types';
import { getCalculator } from '@/lib/calculators';

export default function CalculatorView({ slug }: { slug: string }) {
  const calc = getCalculator(slug);

  const [data, setData] = useState<Record<string, string | number>>(() => {
    const initial: Record<string, string | number> = {};
    calc?.inputs.forEach(inp => {
      initial[inp.id] = inp.type === 'select' ? inp.default : '';
    });
    return initial;
  });
  const [result, setResult] = useState<CalcResult | null>(null);

  if (!calc) return null;

  // Recalculate when all number fields are filled with valid numbers.
  // Selects always have a value; only number fields can be empty while
  // the user is filling things in.
  useEffect(() => {
    const allFilled = calc.inputs.every(inp => {
      if (inp.type === 'select') return true;
      const v = data[inp.id];
      if (v === '' || v === undefined || v === null) return false;
      const n = typeof v === 'number' ? v : parseFloat(String(v));
      return !isNaN(n);
    });
    if (!allFilled) {
      setResult(null);
      return;
    }
    try {
      setResult(calc.calc(data));
    } catch {
      setResult(null);
    }
  }, [data, calc]);

  const handleChange = (id: string, value: string) => {
    const inp = calc.inputs.find(i => i.id === id);
    if (!inp) return;
    if (inp.type === 'select') {
      setData(prev => ({ ...prev, [id]: value }));
    } else if (value === '') {
      setData(prev => ({ ...prev, [id]: '' }));
    } else {
      const num = parseFloat(value);
      setData(prev => ({ ...prev, [id]: isNaN(num) ? value : num }));
    }
  };

  const handlePrint = () => window.print();
  const handleReset = () => {
    const initial: Record<string, string | number> = {};
    calc.inputs.forEach(inp => {
      initial[inp.id] = inp.type === 'select' ? inp.default : '';
    });
    setData(initial);
  };

  return (
    <div className="calc-body">
      <div className="inputs">
        {calc.inputs.map(inp => {
          const label = typeof inp.label === 'function' ? inp.label(data) : inp.label;
          const tooltip = typeof inp.tooltip === 'function' ? inp.tooltip(data) : inp.tooltip;
          return (
          <div key={inp.id} className="input-group">
            <label>
              {label}
              {tooltip && (
                <span className="tooltip-trigger" data-tooltip={tooltip}>?</span>
              )}
            </label>
            <div className="input-row">
              {inp.type === 'select' ? (
                <select
                  value={String(data[inp.id])}
                  onChange={e => handleChange(inp.id, e.target.value)}
                >
                  {inp.options.map(([v, l]) => (
                    <option key={v} value={v}>{l}</option>
                  ))}
                </select>
              ) : (
                <>
                  <input
                    type="number"
                    inputMode="decimal"
                    value={String(data[inp.id])}
                    step={inp.step || 1}
                    placeholder={`e.g. ${inp.default}`}
                    onChange={e => handleChange(inp.id, e.target.value)}
                  />
                  {inp.unit && <div className="unit">{inp.unit}</div>}
                </>
              )}
            </div>
          </div>
          );
        })}
      </div>
      <div>
        <div className="result">
          <div className="result-label">RESULT</div>
          <div className="result-main">{result ? result.main : '—'}</div>
          <div className="result-unit">{result ? result.unit : 'FILL IN ABOVE'}</div>
          <div className="result-detail">
            {result?.detail.map(([k, v], i) => (
              <div key={i} className="detail-row">
                <span className="key">{k}</span>
                <span className="val">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="note">{calc.note}</div>
        <div className="actions">
          <button className="btn" onClick={handlePrint}>Print</button>
          <button className="btn" onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}
