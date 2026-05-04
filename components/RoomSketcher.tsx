'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const COMPATIBLE_CALCS: { slug: string; name: string; group: string }[] = [
  { slug: 'drywall-calculator', name: 'Drywall', group: 'Walls & Ceilings' },
  { slug: 'paint-calculator', name: 'Paint', group: 'Walls & Ceilings' },
  { slug: 'insulation-calculator', name: 'Insulation', group: 'Walls & Ceilings' },
  { slug: 'hardwood-calculator', name: 'Hardwood', group: 'Flooring' },
  { slug: 'carpet-calculator', name: 'Carpet', group: 'Flooring' },
  { slug: 'vinyl-calculator', name: 'Vinyl', group: 'Flooring' },
  { slug: 'tile-calculator', name: 'Tile', group: 'Flooring' },
  { slug: 'concrete-calculator', name: 'Concrete', group: 'Outdoor & Hardscape' },
  { slug: 'paver-calculator', name: 'Pavers', group: 'Outdoor & Hardscape' },
  { slug: 'deck-stain-calculator', name: 'Deck Stain', group: 'Outdoor & Hardscape' },
  { slug: 'sod-calculator', name: 'Sod', group: 'Yard & Garden' },
  { slug: 'mulch-calculator', name: 'Mulch', group: 'Yard & Garden' },
  { slug: 'gravel-calculator', name: 'Gravel', group: 'Yard & Garden' },
  { slug: 'topsoil-calculator', name: 'Topsoil', group: 'Yard & Garden' },
];

const GROUPS = ['Walls & Ceilings', 'Flooring', 'Outdoor & Hardscape', 'Yard & Garden'];

type Corner = 'tr' | 'tl' | 'br' | 'bl';
type Mode = 'rectangle' | 'lshape';

const CANVAS_W = 600;
const CANVAS_H = 360;
const PADDING = 50;

function fitRect(L: number, W: number) {
  const availW = CANVAS_W - PADDING * 2;
  const availH = CANVAS_H - PADDING * 2;
  const ratio = L / W;
  let rectW: number, rectH: number;
  if (ratio > availW / availH) {
    rectW = availW;
    rectH = availW / ratio;
  } else {
    rectH = availH;
    rectW = availH * ratio;
  }
  return {
    x: (CANVAS_W - rectW) / 2,
    y: (CANVAS_H - rectH) / 2,
    width: rectW,
    height: rectH,
  };
}

function lShapePoints(
  L: number, W: number, cL: number, cW: number, corner: Corner,
  rect: { x: number; y: number; width: number; height: number },
): string {
  const sx = rect.width / L;
  const sy = rect.height / W;
  const toSvg = (fx: number, fy: number) =>
    `${rect.x + fx * sx},${rect.y + fy * sy}`;
  let pts: [number, number][];
  switch (corner) {
    case 'tr':
      pts = [[0, 0], [L - cL, 0], [L - cL, cW], [L, cW], [L, W], [0, W]];
      break;
    case 'tl':
      pts = [[cL, 0], [L, 0], [L, W], [0, W], [0, cW], [cL, cW]];
      break;
    case 'br':
      pts = [[0, 0], [L, 0], [L, W - cW], [L - cL, W - cW], [L - cL, W], [0, W]];
      break;
    case 'bl':
      pts = [[0, 0], [L, 0], [L, W], [cL, W], [cL, W - cW], [0, W - cW]];
      break;
  }
  return pts.map(([x, y]) => toSvg(x, y)).join(' ');
}

function cutoutRect(
  L: number, W: number, cL: number, cW: number, corner: Corner,
  rect: { x: number; y: number; width: number; height: number },
) {
  const sx = rect.width / L;
  const sy = rect.height / W;
  let fx = 0, fy = 0;
  switch (corner) {
    case 'tr': fx = L - cL; fy = 0; break;
    case 'tl': fx = 0;      fy = 0; break;
    case 'br': fx = L - cL; fy = W - cW; break;
    case 'bl': fx = 0;      fy = W - cW; break;
  }
  return {
    x: rect.x + fx * sx,
    y: rect.y + fy * sy,
    width: cL * sx,
    height: cW * sy,
  };
}

export default function RoomSketcher() {
  const [mode, setMode] = useState<Mode>('rectangle');
  const [L, setL] = useState<number | ''>(12);
  const [W, setW] = useState<number | ''>(10);
  const [cL, setCL] = useState<number | ''>(4);
  const [cW, setCW] = useState<number | ''>(3);
  const [corner, setCorner] = useState<Corner>('tr');

  const svgRef = useRef<SVGSVGElement | null>(null);
  const dragRef = useRef<{
    handle: 'tl' | 'tr' | 'bl' | 'br';
    startX: number;
    startY: number;
    origL: number;
    origW: number;
    pxPerFt: number;
  } | null>(null);
  const [, forceTick] = useState(0); // re-render after non-state ref updates

  function getSvgPoint(clientX: number, clientY: number): { x: number; y: number } {
    const svg = svgRef.current;
    if (!svg) return { x: 0, y: 0 };
    const pt = svg.createSVGPoint();
    pt.x = clientX;
    pt.y = clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return { x: 0, y: 0 };
    const t = pt.matrixTransform(ctm.inverse());
    return { x: t.x, y: t.y };
  }

  useEffect(() => {
    function onMove(e: MouseEvent | TouchEvent) {
      const drag = dragRef.current;
      if (!drag) return;
      const point =
        'touches' in e
          ? getSvgPoint(e.touches[0].clientX, e.touches[0].clientY)
          : getSvgPoint(e.clientX, e.clientY);
      const dxPx = point.x - drag.startX;
      const dyPx = point.y - drag.startY;
      const dxFt = dxPx / drag.pxPerFt;
      const dyFt = dyPx / drag.pxPerFt;
      let newL = drag.origL;
      let newW = drag.origW;
      switch (drag.handle) {
        case 'tr': newL = drag.origL + dxFt; newW = drag.origW - dyFt; break;
        case 'tl': newL = drag.origL - dxFt; newW = drag.origW - dyFt; break;
        case 'br': newL = drag.origL + dxFt; newW = drag.origW + dyFt; break;
        case 'bl': newL = drag.origL - dxFt; newW = drag.origW + dyFt; break;
      }
      newL = Math.max(1, Math.round(newL * 2) / 2);
      newW = Math.max(1, Math.round(newW * 2) / 2);
      setL(newL);
      setW(newW);
      if (e.cancelable) e.preventDefault();
    }
    function onUp() {
      dragRef.current = null;
      forceTick(t => t + 1);
    }
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
  }, []);

  function startDrag(handle: 'tl' | 'tr' | 'bl' | 'br', clientX: number, clientY: number) {
    if (!rect) return;
    const point = getSvgPoint(clientX, clientY);
    dragRef.current = {
      handle,
      startX: point.x,
      startY: point.y,
      origL: Lnum,
      origW: Wnum,
      pxPerFt: rect.width / Lnum,
    };
    forceTick(t => t + 1);
  }

  const Lnum = typeof L === 'number' ? L : 0;
  const Wnum = typeof W === 'number' ? W : 0;
  const cLnum = typeof cL === 'number' ? cL : 0;
  const cWnum = typeof cW === 'number' ? cW : 0;

  const baseValid = Lnum > 0 && Wnum > 0;
  const cutoutValid = mode === 'rectangle' || (cLnum > 0 && cWnum > 0 && cLnum < Lnum && cWnum < Wnum);
  const valid = baseValid && cutoutValid;

  const boundingArea = baseValid ? Lnum * Wnum : 0;
  const cutoutArea = mode === 'lshape' && cutoutValid ? cLnum * cWnum : 0;
  const area = boundingArea - cutoutArea;
  const perimeter = baseValid ? 2 * (Lnum + Wnum) : 0;

  const rect = baseValid ? fitRect(Lnum, Wnum) : null;

  const buildUrl = (slug: string) => {
    // Insulation's L is total wall length (perimeter), not room length
    if (slug === 'insulation-calculator') {
      return `/${slug}?L=${perimeter}`;
    }
    if (mode === 'lshape') {
      return `/${slug}?L=${Lnum}&W=${Wnum}&shape=lshape&cutoutL=${cLnum}&cutoutW=${cWnum}&cutoutCorner=${corner}`;
    }
    return `/${slug}?L=${Lnum}&W=${Wnum}`;
  };

  return (
    <div className="sketcher">
      <div className="sketcher-canvas-wrap">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
          className="sketcher-svg"
          preserveAspectRatio="xMidYMid meet"
          aria-label="Room sketch preview"
        >
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#2a2a26" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width={CANVAS_W} height={CANVAS_H} fill="url(#grid)" />

          {rect && mode === 'rectangle' && (
            <>
              <rect
                x={rect.x}
                y={rect.y}
                width={rect.width}
                height={rect.height}
                fill="rgba(255, 212, 0, 0.10)"
                stroke="#ffd400"
                strokeWidth={3}
              />
              <text
                x={rect.x + rect.width / 2}
                y={rect.y - 14}
                textAnchor="middle"
                fill="#ffd400"
                fontFamily="JetBrains Mono, monospace"
                fontSize="14"
                fontWeight="700"
              >
                {Lnum} ft
              </text>
              <text
                x={rect.x - 14}
                y={rect.y + rect.height / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#ffd400"
                fontFamily="JetBrains Mono, monospace"
                fontSize="14"
                fontWeight="700"
                transform={`rotate(-90 ${rect.x - 14} ${rect.y + rect.height / 2})`}
              >
                {Wnum} ft
              </text>
              <text
                x={rect.x + rect.width / 2}
                y={rect.y + rect.height / 2 - 6}
                textAnchor="middle"
                fill="#f4f1ea"
                fontFamily="Archivo Black, sans-serif"
                fontSize="20"
              >
                {area.toLocaleString()} ft²
              </text>
              <text
                x={rect.x + rect.width / 2}
                y={rect.y + rect.height / 2 + 14}
                textAnchor="middle"
                fill="#76726a"
                fontFamily="JetBrains Mono, monospace"
                fontSize="11"
                letterSpacing="0.1em"
              >
                AREA
              </text>
            </>
          )}

          {rect && mode === 'lshape' && cutoutValid && (
            <>
              {/* L-shape filled polygon */}
              <polygon
                points={lShapePoints(Lnum, Wnum, cLnum, cWnum, corner, rect)}
                fill="rgba(255, 212, 0, 0.10)"
                stroke="#ffd400"
                strokeWidth={3}
              />
              {/* Cutout area shown as dashed outline */}
              {(() => {
                const c = cutoutRect(Lnum, Wnum, cLnum, cWnum, corner, rect);
                return (
                  <rect
                    x={c.x}
                    y={c.y}
                    width={c.width}
                    height={c.height}
                    fill="rgba(118, 114, 106, 0.15)"
                    stroke="#76726a"
                    strokeWidth={2}
                    strokeDasharray="6 4"
                  />
                );
              })()}
              {/* Bounding dimension labels */}
              <text
                x={rect.x + rect.width / 2}
                y={rect.y - 14}
                textAnchor="middle"
                fill="#ffd400"
                fontFamily="JetBrains Mono, monospace"
                fontSize="14"
                fontWeight="700"
              >
                {Lnum} ft
              </text>
              <text
                x={rect.x - 14}
                y={rect.y + rect.height / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#ffd400"
                fontFamily="JetBrains Mono, monospace"
                fontSize="14"
                fontWeight="700"
                transform={`rotate(-90 ${rect.x - 14} ${rect.y + rect.height / 2})`}
              >
                {Wnum} ft
              </text>
              {/* Cutout label */}
              {(() => {
                const c = cutoutRect(Lnum, Wnum, cLnum, cWnum, corner, rect);
                return (
                  <text
                    x={c.x + c.width / 2}
                    y={c.y + c.height / 2 + 4}
                    textAnchor="middle"
                    fill="#b8b3a7"
                    fontFamily="JetBrains Mono, monospace"
                    fontSize="11"
                    letterSpacing="0.05em"
                  >
                    CUTOUT
                  </text>
                );
              })()}
              {/* Area label — pick a spot inside the L-shape */}
              {(() => {
                // Place area label opposite the cutout corner for readability
                const labelX =
                  corner === 'tl' || corner === 'bl'
                    ? rect.x + rect.width * 0.7
                    : rect.x + rect.width * 0.3;
                const labelY =
                  corner === 'tl' || corner === 'tr'
                    ? rect.y + rect.height * 0.7
                    : rect.y + rect.height * 0.3;
                return (
                  <>
                    <text
                      x={labelX}
                      y={labelY - 6}
                      textAnchor="middle"
                      fill="#f4f1ea"
                      fontFamily="Archivo Black, sans-serif"
                      fontSize="20"
                    >
                      {area.toLocaleString()} ft²
                    </text>
                    <text
                      x={labelX}
                      y={labelY + 14}
                      textAnchor="middle"
                      fill="#76726a"
                      fontFamily="JetBrains Mono, monospace"
                      fontSize="11"
                      letterSpacing="0.1em"
                    >
                      AREA
                    </text>
                  </>
                );
              })()}
            </>
          )}

          {rect && (
            <>
              {(['tl', 'tr', 'bl', 'br'] as const).map(name => {
                const cx =
                  name === 'tl' || name === 'bl' ? rect.x : rect.x + rect.width;
                const cy =
                  name === 'tl' || name === 'tr' ? rect.y : rect.y + rect.height;
                const cursor =
                  name === 'tl' || name === 'br' ? 'nwse-resize' : 'nesw-resize';
                return (
                  <circle
                    key={name}
                    cx={cx}
                    cy={cy}
                    r={9}
                    className="sketcher-handle"
                    style={{ cursor }}
                    onMouseDown={e => {
                      e.preventDefault();
                      startDrag(name, e.clientX, e.clientY);
                    }}
                    onTouchStart={e => {
                      const t = e.touches[0];
                      startDrag(name, t.clientX, t.clientY);
                    }}
                  />
                );
              })}
            </>
          )}
        </svg>
      </div>

      <div className="sketcher-mode">
        <label className={`mode-pill${mode === 'rectangle' ? ' is-active' : ''}`}>
          <input
            type="radio"
            name="sketch-mode"
            value="rectangle"
            checked={mode === 'rectangle'}
            onChange={() => setMode('rectangle')}
          />
          Rectangle
        </label>
        <label className={`mode-pill${mode === 'lshape' ? ' is-active' : ''}`}>
          <input
            type="radio"
            name="sketch-mode"
            value="lshape"
            checked={mode === 'lshape'}
            onChange={() => setMode('lshape')}
          />
          L-shape
        </label>
      </div>

      <div className="sketcher-inputs">
        <div className="input-group">
          <label>Length</label>
          <div className="input-row">
            <input
              type="number"
              inputMode="decimal"
              value={L === '' ? '' : L}
              step={0.5}
              placeholder="e.g. 12"
              onChange={e => setL(e.target.value === '' ? '' : parseFloat(e.target.value))}
            />
            <div className="unit">ft</div>
          </div>
        </div>
        <div className="input-group">
          <label>Width</label>
          <div className="input-row">
            <input
              type="number"
              inputMode="decimal"
              value={W === '' ? '' : W}
              step={0.5}
              placeholder="e.g. 10"
              onChange={e => setW(e.target.value === '' ? '' : parseFloat(e.target.value))}
            />
            <div className="unit">ft</div>
          </div>
        </div>
        <div className="sketcher-readout">
          <div className="readout-row">
            <span className="readout-key">Area</span>
            <span className="readout-val">{valid ? `${area.toLocaleString()} ft²` : '—'}</span>
          </div>
          <div className="readout-row">
            <span className="readout-key">Perimeter</span>
            <span className="readout-val">{baseValid ? `${perimeter.toLocaleString()} ft` : '—'}</span>
          </div>
        </div>
      </div>

      {mode === 'lshape' && (
        <div className="sketcher-cutout">
          <div className="cutout-title">CUTOUT</div>
          <div className="cutout-grid">
            <div className="input-group">
              <label>Cutout length</label>
              <div className="input-row">
                <input
                  type="number"
                  inputMode="decimal"
                  value={cL === '' ? '' : cL}
                  step={0.5}
                  placeholder="e.g. 4"
                  onChange={e => setCL(e.target.value === '' ? '' : parseFloat(e.target.value))}
                />
                <div className="unit">ft</div>
              </div>
            </div>
            <div className="input-group">
              <label>Cutout width</label>
              <div className="input-row">
                <input
                  type="number"
                  inputMode="decimal"
                  value={cW === '' ? '' : cW}
                  step={0.5}
                  placeholder="e.g. 3"
                  onChange={e => setCW(e.target.value === '' ? '' : parseFloat(e.target.value))}
                />
                <div className="unit">ft</div>
              </div>
            </div>
            <div className="input-group">
              <label>Cutout corner</label>
              <div className="input-row">
                <select value={corner} onChange={e => setCorner(e.target.value as Corner)}>
                  <option value="tr">Top-right</option>
                  <option value="tl">Top-left</option>
                  <option value="br">Bottom-right</option>
                  <option value="bl">Bottom-left</option>
                </select>
              </div>
            </div>
          </div>
          {!cutoutValid && baseValid && (
            <div className="cutout-warn">
              Cutout must be smaller than the bounding rectangle in both dimensions.
            </div>
          )}
        </div>
      )}

      <div className="sketcher-launchers">
        <div className="section-label">
          <span>USE THESE DIMENSIONS IN</span>
        </div>
        {GROUPS.map(group => (
          <div key={group} className="launcher-group">
            <div className="launcher-group-name">{group}</div>
            <div className="launcher-row">
              {COMPATIBLE_CALCS.filter(c => c.group === group).map(c =>
                valid ? (
                  <Link key={c.slug} href={buildUrl(c.slug)} className="launcher-btn">
                    {c.name} →
                  </Link>
                ) : (
                  <span key={c.slug} className="launcher-btn launcher-btn-disabled">
                    {c.name}
                  </span>
                ),
              )}
            </div>
          </div>
        ))}
        {!valid && (
          <div className="launcher-hint">
            {mode === 'lshape'
              ? 'Enter valid bounding and cutout dimensions to enable launchers.'
              : 'Enter length and width to enable launcher buttons.'}
          </div>
        )}
        {mode === 'lshape' && valid && (
          <div className="launcher-hint">
            L-shape mode: each launcher passes the bounding length, width, and cutout dimensions through to the calculator. The calc page shows the L-shape with a Shape: L-shape toggle and computes the net area exactly.
          </div>
        )}
      </div>
    </div>
  );
}
