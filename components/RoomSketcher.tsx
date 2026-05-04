'use client';

import { useState } from 'react';
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

export default function RoomSketcher() {
  const [L, setL] = useState<number | ''>(12);
  const [W, setW] = useState<number | ''>(10);

  const Lnum = typeof L === 'number' ? L : 0;
  const Wnum = typeof W === 'number' ? W : 0;
  const valid = Lnum > 0 && Wnum > 0;
  const area = valid ? Lnum * Wnum : 0;
  const perimeter = valid ? 2 * (Lnum + Wnum) : 0;
  const rect = valid ? fitRect(Lnum, Wnum) : null;

  const buildUrl = (slug: string) =>
    `/${slug}?L=${Lnum}&W=${Wnum}&area=${area}`;

  return (
    <div className="sketcher">
      <div className="sketcher-canvas-wrap">
        <svg
          viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
          className="sketcher-svg"
          preserveAspectRatio="xMidYMid meet"
          aria-label="Room sketch preview"
        >
          {/* grid */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#2a2a26" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width={CANVAS_W} height={CANVAS_H} fill="url(#grid)" />

          {rect && (
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
              {/* dimension labels */}
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
              {/* center label */}
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
        </svg>
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
            <span className="readout-val">{valid ? `${perimeter.toLocaleString()} ft` : '—'}</span>
          </div>
        </div>
      </div>

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
          <div className="launcher-hint">Enter length and width to enable calculator launchers.</div>
        )}
      </div>
    </div>
  );
}
