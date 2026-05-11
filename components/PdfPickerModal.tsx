'use client';

import { useEffect, useMemo, useState } from 'react';
import { track } from '@vercel/analytics';
import type { SketchSnapshot } from '@/lib/pdf-calc';

interface PickerCalc { slug: string; name: string; group: string }

interface Props {
  open: boolean;
  onClose: () => void;
  sketch: SketchSnapshot;
  polygon?: { x: number; y: number }[];
  calcs: PickerCalc[];
  groups: string[];
}

const DEFAULT_SELECTED = new Set([
  'drywall-calculator',
  'paint-calculator',
  'hardwood-calculator',
]);

function todayLabel() {
  return new Date().toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

function fileSafe(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'project';
}

export default function PdfPickerModal({ open, onClose, sketch, polygon, calcs, groups }: Props) {
  const [selected, setSelected] = useState<Set<string>>(new Set(DEFAULT_SELECTED));
  const [projectName, setProjectName] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    setErr(null);
    setBusy(false);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const toggle = (slug: string) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug); else next.add(slug);
      return next;
    });
  };

  const pageCount = useMemo(() => {
    // page 1 = sketch + dims, page 2 = calcs (single page for small sets,
    // wraps for larger), page 3 = shopping list. Calc cards are ~3-4 per
    // page so estimate Math.ceil(n / 3).
    if (selected.size === 0) return 1;
    const calcPages = Math.max(1, Math.ceil(selected.size / 3));
    return 1 + calcPages + 1;
  }, [selected]);

  async function handleGenerate() {
    if (selected.size === 0) {
      setErr('Pick at least one calculator to include.');
      return;
    }
    setBusy(true);
    setErr(null);
    try {
      // Dynamic import keeps the ~800KB react-pdf bundle out of the main route
      const [{ pdf }, { ProjectPDF }, { computeCalcsForSketch }] = await Promise.all([
        import('@react-pdf/renderer'),
        import('./ProjectPDF'),
        import('@/lib/pdf-calc'),
      ]);
      const slugs = Array.from(selected);
      const computed = computeCalcsForSketch(slugs, sketch);

      const doc = (
        <ProjectPDF
          projectName={projectName}
          generatedAt={todayLabel()}
          sketch={sketch}
          polygon={polygon}
          calcs={computed}
        />
      );
      const blob = await pdf(doc).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const dateStamp = new Date().toISOString().slice(0, 10);
      a.href = url;
      a.download = `projectcalc-${fileSafe(projectName)}-${dateStamp}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 5000);

      track('sketch_pdf_generated', {
        calc_count: slugs.length,
        sketch_mode: sketch.mode,
        page_count: pageCount,
      });
      onClose();
    } catch (e) {
      console.error(e);
      setErr('Could not generate the PDF. Try again, or refresh the page.');
    } finally {
      setBusy(false);
    }
  }

  if (!open) return null;

  return (
    <div className="pdf-modal-backdrop" onClick={onClose}>
      <div
        className="pdf-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pdf-modal-title"
        onClick={e => e.stopPropagation()}
      >
        <div className="pdf-modal-head">
          <div>
            <div className="pdf-modal-eyebrow">DOWNLOAD PROJECT PDF</div>
            <h2 id="pdf-modal-title" className="pdf-modal-title">
              Pick what goes on the PDF
            </h2>
          </div>
          <button type="button" className="pdf-modal-close" onClick={onClose} aria-label="Close">×</button>
        </div>

        <div className="pdf-modal-body">
          <div className="input-group">
            <label htmlFor="pdf-project-name">Project name (optional)</label>
            <div className="input-row">
              <input
                id="pdf-project-name"
                type="text"
                value={projectName}
                placeholder="e.g. Back patio rebuild"
                onChange={e => setProjectName(e.target.value.slice(0, 80))}
              />
            </div>
          </div>

          <div className="pdf-modal-groups">
            {groups.map(group => {
              const items = calcs.filter(c => c.group === group);
              return (
                <div key={group} className="pdf-group">
                  <div className="pdf-group-name">{group}</div>
                  <div className="pdf-group-items">
                    {items.map(c => (
                      <label key={c.slug} className={`pdf-check${selected.has(c.slug) ? ' is-on' : ''}`}>
                        <input
                          type="checkbox"
                          checked={selected.has(c.slug)}
                          onChange={() => toggle(c.slug)}
                        />
                        <span>{c.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {err && <div className="pdf-modal-err">{err}</div>}
        </div>

        <div className="pdf-modal-foot">
          <div className="pdf-modal-meta">
            <strong>{selected.size}</strong> calc{selected.size === 1 ? '' : 's'} · est. <strong>{pageCount}</strong> page{pageCount === 1 ? '' : 's'}
          </div>
          <div className="pdf-modal-actions">
            <button type="button" className="btn" onClick={onClose} disabled={busy}>Cancel</button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleGenerate}
              disabled={busy || selected.size === 0}
            >
              {busy ? 'Generating…' : 'Generate PDF'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
