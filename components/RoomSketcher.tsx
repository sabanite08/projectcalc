'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { track } from '@vercel/analytics';
import PdfPickerModal from './PdfPickerModal';
import type { SketchSnapshot } from '@/lib/pdf-calc';

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
type Mode = 'rectangle' | 'lshape' | 'custom';
type Pt = { x: number; y: number };

const CANVAS_W = 600;
const CANVAS_H = 360;
const PADDING = 50;
const SNAP_FT = 0.5;
const MIN_FT = 1;

function snap(v: number) {
  return Math.max(MIN_FT, Math.round(v / SNAP_FT) * SNAP_FT);
}

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

function fitPolygon(pts: Pt[]) {
  if (pts.length === 0) return null;
  const xs = pts.map(p => p.x);
  const ys = pts.map(p => p.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const w = Math.max(0.1, maxX - minX);
  const h = Math.max(0.1, maxY - minY);
  const availW = CANVAS_W - PADDING * 2;
  const availH = CANVAS_H - PADDING * 2;
  const scale = Math.min(availW / w, availH / h);
  const offsetX = (CANVAS_W - w * scale) / 2 - minX * scale;
  const offsetY = (CANVAS_H - h * scale) / 2 - minY * scale;
  return { scale, offsetX, offsetY, minX, minY, maxX, maxY, w, h };
}

function polygonArea(pts: Pt[]) {
  let a = 0;
  for (let i = 0; i < pts.length; i++) {
    const j = (i + 1) % pts.length;
    a += pts[i].x * pts[j].y - pts[j].x * pts[i].y;
  }
  return Math.abs(a) / 2;
}

function polygonPerimeter(pts: Pt[]) {
  let p = 0;
  for (let i = 0; i < pts.length; i++) {
    const j = (i + 1) % pts.length;
    const dx = pts[j].x - pts[i].x;
    const dy = pts[j].y - pts[i].y;
    p += Math.sqrt(dx * dx + dy * dy);
  }
  return p;
}

const DEFAULT_POLY: Pt[] = [
  { x: 0,  y: 0 },
  { x: 12, y: 0 },
  { x: 12, y: 10 },
  { x: 0,  y: 10 },
];

export default function RoomSketcher() {
  const [mode, setMode] = useState<Mode>('rectangle');
  const [L, setL] = useState<number | ''>(12);
  const [W, setW] = useState<number | ''>(10);
  const [cL, setCL] = useState<number | ''>(4);
  const [cW, setCW] = useState<number | ''>(3);
  const [corner, setCorner] = useState<Corner>('tr');
  const [poly, setPoly] = useState<Pt[]>(DEFAULT_POLY);
  const [pdfOpen, setPdfOpen] = useState(false);
  const pdfImpressionTracked = useRef(false);

  const svgRef = useRef<SVGSVGElement | null>(null);
  // rectangle/L-shape drag (resize corners of bounding rect)
  const rectDragRef = useRef<{
    handle: 'tl' | 'tr' | 'bl' | 'br';
    startX: number;
    startY: number;
    origL: number;
    origW: number;
    pxPerFt: number;
  } | null>(null);
  // custom polygon vertex drag
  const polyDragRef = useRef<{
    index: number;
    scale: number;
    offsetX: number;
    offsetY: number;
  } | null>(null);
  const [, forceTick] = useState(0);

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
      const point =
        'touches' in e
          ? getSvgPoint(e.touches[0].clientX, e.touches[0].clientY)
          : getSvgPoint(e.clientX, e.clientY);

      const rectDrag = rectDragRef.current;
      if (rectDrag) {
        const dxPx = point.x - rectDrag.startX;
        const dyPx = point.y - rectDrag.startY;
        const dxFt = dxPx / rectDrag.pxPerFt;
        const dyFt = dyPx / rectDrag.pxPerFt;
        let newL = rectDrag.origL;
        let newW = rectDrag.origW;
        switch (rectDrag.handle) {
          case 'tr': newL = rectDrag.origL + dxFt; newW = rectDrag.origW - dyFt; break;
          case 'tl': newL = rectDrag.origL - dxFt; newW = rectDrag.origW - dyFt; break;
          case 'br': newL = rectDrag.origL + dxFt; newW = rectDrag.origW + dyFt; break;
          case 'bl': newL = rectDrag.origL - dxFt; newW = rectDrag.origW + dyFt; break;
        }
        setL(snap(newL));
        setW(snap(newW));
        if (e.cancelable) e.preventDefault();
        return;
      }

      const polyDrag = polyDragRef.current;
      if (polyDrag) {
        const fx = (point.x - polyDrag.offsetX) / polyDrag.scale;
        const fy = (point.y - polyDrag.offsetY) / polyDrag.scale;
        setPoly(prev => prev.map((p, i) =>
          i === polyDrag.index
            ? { x: Math.round(fx / SNAP_FT) * SNAP_FT, y: Math.round(fy / SNAP_FT) * SNAP_FT }
            : p,
        ));
        if (e.cancelable) e.preventDefault();
      }
    }
    function onUp() {
      rectDragRef.current = null;
      polyDragRef.current = null;
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

  function startRectDrag(handle: 'tl' | 'tr' | 'bl' | 'br', clientX: number, clientY: number) {
    if (!rect) return;
    const point = getSvgPoint(clientX, clientY);
    rectDragRef.current = {
      handle,
      startX: point.x,
      startY: point.y,
      origL: Lnum,
      origW: Wnum,
      pxPerFt: rect.width / Lnum,
    };
    forceTick(t => t + 1);
  }

  function startPolyDrag(index: number, clientX: number, clientY: number) {
    const fit = fitPolygon(poly);
    if (!fit) return;
    polyDragRef.current = {
      index,
      scale: fit.scale,
      offsetX: fit.offsetX,
      offsetY: fit.offsetY,
    };
    // We don't need to capture clientX/Y because we compute the vertex's
    // new position directly from cursor → feet coords.
    void clientX; void clientY;
    forceTick(t => t + 1);
  }

  function addVertex(edgeIndex: number) {
    setPoly(prev => {
      const a = prev[edgeIndex];
      const b = prev[(edgeIndex + 1) % prev.length];
      const mid = {
        x: Math.round((a.x + b.x) / 2 / SNAP_FT) * SNAP_FT,
        y: Math.round((a.y + b.y) / 2 / SNAP_FT) * SNAP_FT,
      };
      const next = [...prev];
      next.splice(edgeIndex + 1, 0, mid);
      return next;
    });
  }

  function removeVertex(index: number) {
    setPoly(prev => (prev.length <= 3 ? prev : prev.filter((_, i) => i !== index)));
  }

  function resetPoly() {
    setPoly(DEFAULT_POLY);
  }

  const Lnum = typeof L === 'number' ? L : 0;
  const Wnum = typeof W === 'number' ? W : 0;
  const cLnum = typeof cL === 'number' ? cL : 0;
  const cWnum = typeof cW === 'number' ? cW : 0;

  const baseValid = Lnum > 0 && Wnum > 0;
  const cutoutValid = mode === 'rectangle' || mode === 'custom' || (cLnum > 0 && cWnum > 0 && cLnum < Lnum && cWnum < Wnum);
  const customValid = mode !== 'custom' || (poly.length >= 3 && polygonArea(poly) > 0);

  let area = 0;
  let perimeter = 0;
  if (mode === 'custom') {
    area = polygonArea(poly);
    perimeter = polygonPerimeter(poly);
  } else if (baseValid) {
    const boundingArea = Lnum * Wnum;
    const cutoutArea = mode === 'lshape' && cutoutValid ? cLnum * cWnum : 0;
    area = boundingArea - cutoutArea;
    perimeter = 2 * (Lnum + Wnum);
  }

  const valid =
    (mode === 'custom' ? customValid : baseValid && cutoutValid);

  const rect = mode !== 'custom' && baseValid ? fitRect(Lnum, Wnum) : null;
  const polyFit = mode === 'custom' ? fitPolygon(poly) : null;
  // For custom mode the bounding box L/W is the polygon's box in feet
  const bboxL = polyFit ? polyFit.w : 0;
  const bboxW = polyFit ? polyFit.h : 0;

  const sketchSnapshot: SketchSnapshot = {
    mode,
    L: mode === 'custom' ? bboxL : Lnum,
    W: mode === 'custom' ? bboxW : Wnum,
    cL: mode === 'lshape' ? cLnum : undefined,
    cW: mode === 'lshape' ? cWnum : undefined,
    corner: mode === 'lshape' ? corner : undefined,
    area,
    perimeter,
  };

  useEffect(() => {
    if (valid && !pdfImpressionTracked.current) {
      pdfImpressionTracked.current = true;
      track('sketch_pdf_button_viewed', { sketch_mode: mode });
    }
  }, [valid, mode]);

  const buildUrl = (slug: string) => {
    // Insulation: L is wall length (total perimeter)
    if (slug === 'insulation-calculator') {
      return `/${slug}?L=${perimeter.toFixed(2)}`;
    }
    if (mode === 'custom') {
      return `/${slug}?shape=custom&customArea=${area.toFixed(2)}&customPerimeter=${perimeter.toFixed(2)}&L=${bboxL.toFixed(2)}&W=${bboxW.toFixed(2)}`;
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
              <polygon
                points={lShapePoints(Lnum, Wnum, cLnum, cWnum, corner, rect)}
                fill="rgba(255, 212, 0, 0.10)"
                stroke="#ffd400"
                strokeWidth={3}
              />
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
              {(() => {
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

          {rect && mode !== 'custom' && (
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
                      startRectDrag(name, e.clientX, e.clientY);
                    }}
                    onTouchStart={e => {
                      const t = e.touches[0];
                      startRectDrag(name, t.clientX, t.clientY);
                    }}
                  />
                );
              })}
            </>
          )}

          {mode === 'custom' && polyFit && (
            <>
              <polygon
                points={poly.map(p => `${p.x * polyFit.scale + polyFit.offsetX},${p.y * polyFit.scale + polyFit.offsetY}`).join(' ')}
                fill="rgba(255, 212, 0, 0.10)"
                stroke="#ffd400"
                strokeWidth={3}
              />
              {/* Edge midpoint "+" buttons (add vertex on that edge) */}
              {poly.map((p, i) => {
                const q = poly[(i + 1) % poly.length];
                const mx = (p.x + q.x) / 2 * polyFit.scale + polyFit.offsetX;
                const my = (p.y + q.y) / 2 * polyFit.scale + polyFit.offsetY;
                const len = Math.sqrt(Math.pow(q.x - p.x, 2) + Math.pow(q.y - p.y, 2));
                return (
                  <g key={`edge-${i}`}>
                    <text
                      x={mx}
                      y={my - 12}
                      textAnchor="middle"
                      fill="#ffd400"
                      fontFamily="JetBrains Mono, monospace"
                      fontSize="11"
                      fontWeight="700"
                      pointerEvents="none"
                    >
                      {len.toFixed(1)} ft
                    </text>
                    <g
                      style={{ cursor: 'copy' }}
                      onClick={e => { e.stopPropagation(); addVertex(i); }}
                    >
                      <circle cx={mx} cy={my} r={8} fill="#0e0e0c" stroke="#76726a" strokeWidth={1.5} />
                      <text
                        x={mx}
                        y={my + 4}
                        textAnchor="middle"
                        fill="#f4f1ea"
                        fontFamily="JetBrains Mono, monospace"
                        fontSize="13"
                        fontWeight="700"
                        pointerEvents="none"
                      >
                        +
                      </text>
                    </g>
                  </g>
                );
              })}
              {/* Area label at polygon centroid */}
              {(() => {
                const cx = poly.reduce((s, p) => s + p.x, 0) / poly.length;
                const cy = poly.reduce((s, p) => s + p.y, 0) / poly.length;
                const sx = cx * polyFit.scale + polyFit.offsetX;
                const sy = cy * polyFit.scale + polyFit.offsetY;
                return (
                  <>
                    <text
                      x={sx}
                      y={sy - 6}
                      textAnchor="middle"
                      fill="#f4f1ea"
                      fontFamily="Archivo Black, sans-serif"
                      fontSize="20"
                      pointerEvents="none"
                    >
                      {area.toLocaleString(undefined, { maximumFractionDigits: 1 })} ft²
                    </text>
                    <text
                      x={sx}
                      y={sy + 14}
                      textAnchor="middle"
                      fill="#76726a"
                      fontFamily="JetBrains Mono, monospace"
                      fontSize="11"
                      letterSpacing="0.1em"
                      pointerEvents="none"
                    >
                      AREA
                    </text>
                  </>
                );
              })()}
              {/* Vertex handles + × delete buttons */}
              {poly.map((p, i) => {
                const sx = p.x * polyFit.scale + polyFit.offsetX;
                const sy = p.y * polyFit.scale + polyFit.offsetY;
                return (
                  <g key={`v-${i}`}>
                    <circle
                      cx={sx}
                      cy={sy}
                      r={9}
                      className="sketcher-handle"
                      style={{ cursor: 'move' }}
                      onMouseDown={e => {
                        e.preventDefault();
                        startPolyDrag(i, e.clientX, e.clientY);
                      }}
                      onTouchStart={e => {
                        const t = e.touches[0];
                        startPolyDrag(i, t.clientX, t.clientY);
                      }}
                    />
                    {poly.length > 3 && (
                      <g
                        transform={`translate(${sx + 14},${sy - 14})`}
                        style={{ cursor: 'pointer' }}
                        onClick={e => { e.stopPropagation(); removeVertex(i); }}
                      >
                        <circle cx={0} cy={0} r={7} fill="#0e0e0c" stroke="#c74848" strokeWidth={1.5} />
                        <text
                          x={0}
                          y={3.5}
                          textAnchor="middle"
                          fill="#c74848"
                          fontFamily="JetBrains Mono, monospace"
                          fontSize="11"
                          fontWeight="700"
                          pointerEvents="none"
                        >
                          ×
                        </text>
                      </g>
                    )}
                  </g>
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
        <label className={`mode-pill${mode === 'custom' ? ' is-active' : ''}`}>
          <input
            type="radio"
            name="sketch-mode"
            value="custom"
            checked={mode === 'custom'}
            onChange={() => setMode('custom')}
          />
          Custom shape
        </label>
      </div>

      {mode !== 'custom' && (
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
      )}

      {mode === 'custom' && (
        <div className="sketcher-custom-controls">
          <div className="custom-hint">
            Drag any point to reshape. Tap <strong>+</strong> on an edge to add a
            point. Tap <strong>×</strong> next to a point to remove it (3 point
            minimum).
          </div>
          <div className="custom-actions">
            <button type="button" className="btn" onClick={resetPoly}>
              Reset to square
            </button>
            <div className="sketcher-readout">
              <div className="readout-row">
                <span className="readout-key">Area</span>
                <span className="readout-val">{valid ? `${area.toLocaleString(undefined, { maximumFractionDigits: 1 })} ft²` : '—'}</span>
              </div>
              <div className="readout-row">
                <span className="readout-key">Perimeter</span>
                <span className="readout-val">{valid ? `${perimeter.toLocaleString(undefined, { maximumFractionDigits: 1 })} ft` : '—'}</span>
              </div>
              <div className="readout-row">
                <span className="readout-key">Points</span>
                <span className="readout-val">{poly.length}</span>
              </div>
            </div>
          </div>
        </div>
      )}

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
              : mode === 'custom'
              ? 'Draw a shape with at least 3 points to enable launchers.'
              : 'Enter length and width to enable launcher buttons.'}
          </div>
        )}
        {mode === 'lshape' && valid && (
          <div className="launcher-hint">
            L-shape mode: each launcher passes the bounding length, width, and cutout dimensions through to the calculator. The calc page shows the L-shape with a Shape: L-shape toggle and computes the net area exactly.
          </div>
        )}
        {mode === 'custom' && valid && (
          <div className="launcher-hint">
            Custom-shape mode: launchers pass the polygon&apos;s exact area and perimeter through to each calculator. The calc page opens with Shape set to &ldquo;Custom&rdquo; — you can still switch back to Rectangle there if you want a quick re-estimate.
          </div>
        )}
      </div>

      {valid && (
        <div className="sketcher-pdf-cta">
          <div>
            <div className="pdf-cta-eyebrow">PROJECT DOCUMENT</div>
            <div className="pdf-cta-headline">Download a PDF with your sketch and material calcs</div>
            <div className="pdf-cta-sub">
              Pick the calculators you want included — get one document with
              the sketch, area, perimeter, and headline material counts to
              take to the lumberyard.
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary pdf-cta-btn"
            onClick={() => {
              track('sketch_pdf_modal_opened', { sketch_mode: mode });
              setPdfOpen(true);
            }}
          >
            Download project PDF
          </button>
        </div>
      )}

      <PdfPickerModal
        open={pdfOpen}
        onClose={() => setPdfOpen(false)}
        sketch={sketchSnapshot}
        polygon={mode === 'custom' ? poly : undefined}
        calcs={COMPATIBLE_CALCS}
        groups={GROUPS}
      />
    </div>
  );
}
