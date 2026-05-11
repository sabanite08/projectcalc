'use client';

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Svg,
  Rect,
  Polygon,
  Line,
  G,
} from '@react-pdf/renderer';
import type { ComputedCalc, SketchSnapshot } from '@/lib/pdf-calc';

const COLORS = {
  bg: '#0e0e0c',
  ink: '#f4f1ea',
  ink2: '#b8b3a7',
  ink3: '#76726a',
  hiVis: '#ffd400',
  line: '#3a3a35',
  bg2: '#1a1a17',
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: COLORS.bg,
    color: COLORS.ink,
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottom: `1px solid ${COLORS.line}`,
    paddingBottom: 10,
    marginBottom: 24,
  },
  logoBlock: { flexDirection: 'row', alignItems: 'center' },
  logoSquare: {
    width: 12,
    height: 12,
    backgroundColor: COLORS.hiVis,
    transform: 'rotate(45deg)',
    marginRight: 8,
  },
  logoText: { fontFamily: 'Helvetica-Bold', fontSize: 14, letterSpacing: 1 },
  headerMeta: { fontSize: 9, color: COLORS.ink3, letterSpacing: 1 },
  title: { fontFamily: 'Helvetica-Bold', fontSize: 22, marginBottom: 4 },
  subtitle: { color: COLORS.ink2, fontSize: 11, marginBottom: 24 },

  sketchBlock: {
    backgroundColor: COLORS.bg2,
    border: `1px solid ${COLORS.line}`,
    borderRadius: 4,
    padding: 16,
    marginBottom: 24,
  },
  sketchLabel: {
    fontSize: 9,
    color: COLORS.hiVis,
    letterSpacing: 1.5,
    marginBottom: 8,
  },

  dimsGrid: { flexDirection: 'row', gap: 12 },
  dimCard: {
    flex: 1,
    backgroundColor: COLORS.bg2,
    border: `1px solid ${COLORS.line}`,
    borderRadius: 4,
    padding: 12,
  },
  dimKey: { fontSize: 8, color: COLORS.ink3, letterSpacing: 1.5, marginBottom: 4 },
  dimVal: { fontFamily: 'Helvetica-Bold', fontSize: 18, color: COLORS.hiVis },

  calcCard: {
    backgroundColor: COLORS.bg2,
    border: `1px solid ${COLORS.line}`,
    borderLeft: `4px solid ${COLORS.hiVis}`,
    borderRadius: 4,
    padding: 18,
    marginBottom: 16,
  },
  calcName: {
    fontSize: 9,
    color: COLORS.ink3,
    letterSpacing: 2,
    marginBottom: 4,
  },
  calcResult: { fontFamily: 'Helvetica-Bold', fontSize: 26 },
  calcUnit: { fontSize: 10, color: COLORS.ink2, marginTop: 2, letterSpacing: 1 },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTop: `1px solid ${COLORS.line}`,
    paddingVertical: 4,
  },
  detailKey: { color: COLORS.ink3, fontSize: 9 },
  detailVal: { color: COLORS.ink, fontSize: 9, fontFamily: 'Helvetica-Bold' },
  detailGroup: { marginTop: 10 },
  detailHead: {
    fontSize: 7,
    color: COLORS.ink3,
    letterSpacing: 1.5,
    marginBottom: 4,
    marginTop: 6,
  },

  sectionLabel: {
    fontSize: 9,
    color: COLORS.hiVis,
    letterSpacing: 2,
    marginBottom: 8,
    marginTop: 12,
  },

  footer: {
    position: 'absolute',
    bottom: 24,
    left: 40,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 8,
    color: COLORS.ink3,
    letterSpacing: 1,
    borderTop: `1px solid ${COLORS.line}`,
    paddingTop: 6,
  },

  noteBox: {
    backgroundColor: COLORS.bg2,
    border: `1px solid ${COLORS.line}`,
    borderRadius: 4,
    padding: 10,
    fontSize: 8,
    color: COLORS.ink2,
    marginTop: 16,
    lineHeight: 1.5,
  },

  shoppingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.bg2,
    border: `1px solid ${COLORS.line}`,
    borderRadius: 4,
    padding: 12,
    marginBottom: 8,
  },
  shoppingName: { fontSize: 11, color: COLORS.ink2, letterSpacing: 1 },
  shoppingVal: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 14,
    color: COLORS.hiVis,
  },
});

// Render the sketch as native PDF vector shapes
function SketchSvg({ sketch, polygon }: { sketch: SketchSnapshot; polygon?: { x: number; y: number }[] }) {
  const W = 480;
  const H = 220;
  const PAD = 24;

  if (sketch.mode === 'custom' && polygon && polygon.length >= 3) {
    const xs = polygon.map(p => p.x);
    const ys = polygon.map(p => p.y);
    const minX = Math.min(...xs), maxX = Math.max(...xs);
    const minY = Math.min(...ys), maxY = Math.max(...ys);
    const w = Math.max(0.1, maxX - minX);
    const h = Math.max(0.1, maxY - minY);
    const scale = Math.min((W - PAD * 2) / w, (H - PAD * 2) / h);
    const ox = (W - w * scale) / 2 - minX * scale;
    const oy = (H - h * scale) / 2 - minY * scale;
    const pts = polygon.map(p => `${p.x * scale + ox},${p.y * scale + oy}`).join(' ');
    return (
      <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
        <Polygon points={pts} fill={COLORS.hiVis} fillOpacity={0.10} stroke={COLORS.hiVis} strokeWidth={2} />
      </Svg>
    );
  }

  // rectangle / L-shape: fit the bounding rect into the canvas
  const L = sketch.L;
  const Wf = sketch.W;
  if (L <= 0 || Wf <= 0) return <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}><G></G></Svg>;
  const scale = Math.min((W - PAD * 2) / L, (H - PAD * 2) / Wf);
  const rectW = L * scale;
  const rectH = Wf * scale;
  const rx = (W - rectW) / 2;
  const ry = (H - rectH) / 2;

  if (sketch.mode === 'lshape' && sketch.cL && sketch.cW && sketch.corner) {
    const cL = sketch.cL;
    const cW = sketch.cW;
    const corner = sketch.corner;
    let pts: [number, number][];
    switch (corner) {
      case 'tr': pts = [[0, 0], [L - cL, 0], [L - cL, cW], [L, cW], [L, Wf], [0, Wf]]; break;
      case 'tl': pts = [[cL, 0], [L, 0], [L, Wf], [0, Wf], [0, cW], [cL, cW]]; break;
      case 'br': pts = [[0, 0], [L, 0], [L, Wf - cW], [L - cL, Wf - cW], [L - cL, Wf], [0, Wf]]; break;
      case 'bl': pts = [[0, 0], [L, 0], [L, Wf], [cL, Wf], [cL, Wf - cW], [0, Wf - cW]]; break;
    }
    const polyPts = pts.map(([x, y]) => `${rx + x * scale},${ry + y * scale}`).join(' ');
    return (
      <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
        <Polygon points={polyPts} fill={COLORS.hiVis} fillOpacity={0.10} stroke={COLORS.hiVis} strokeWidth={2} />
      </Svg>
    );
  }

  return (
    <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <Rect x={rx} y={ry} width={rectW} height={rectH} fill={COLORS.hiVis} fillOpacity={0.10} stroke={COLORS.hiVis} strokeWidth={2} />
      {/* dimension lines */}
      <Line x1={rx} y1={ry - 8} x2={rx + rectW} y2={ry - 8} stroke={COLORS.ink3} strokeWidth={0.5} />
      <Line x1={rx - 8} y1={ry} x2={rx - 8} y2={ry + rectH} stroke={COLORS.ink3} strokeWidth={0.5} />
    </Svg>
  );
}

export interface ProjectPDFProps {
  projectName: string;
  generatedAt: string; // ISO date string already formatted, eg "May 10, 2026"
  sketch: SketchSnapshot;
  polygon?: { x: number; y: number }[];
  calcs: ComputedCalc[];
}

function modeLabel(mode: SketchSnapshot['mode']) {
  if (mode === 'custom') return 'Custom shape';
  if (mode === 'lshape') return 'L-shape';
  return 'Rectangle';
}

export function ProjectPDF({ projectName, generatedAt, sketch, polygon, calcs }: ProjectPDFProps) {
  const headerLabel = projectName.trim() || 'Project sketch';
  return (
    <Document
      title={`ProjectCalc — ${headerLabel}`}
      author="projectcalc.app"
      creator="ProjectCalc"
      producer="ProjectCalc"
    >
      <Page size="LETTER" style={styles.page}>
        <View style={styles.headerRow}>
          <View style={styles.logoBlock}>
            <View style={styles.logoSquare} />
            <Text style={styles.logoText}>PROJECTCALC</Text>
          </View>
          <Text style={styles.headerMeta}>{generatedAt.toUpperCase()}</Text>
        </View>

        <Text style={styles.title}>{headerLabel}</Text>
        <Text style={styles.subtitle}>
          Sketch and material calculations generated from projectcalc.app
        </Text>

        <View style={styles.sketchBlock}>
          <Text style={styles.sketchLabel}>SKETCH — {modeLabel(sketch.mode).toUpperCase()}</Text>
          <SketchSvg sketch={sketch} polygon={polygon} />
        </View>

        <View style={styles.dimsGrid}>
          <View style={styles.dimCard}>
            <Text style={styles.dimKey}>AREA</Text>
            <Text style={styles.dimVal}>{sketch.area.toFixed(1)} ft²</Text>
          </View>
          <View style={styles.dimCard}>
            <Text style={styles.dimKey}>PERIMETER</Text>
            <Text style={styles.dimVal}>{sketch.perimeter.toFixed(1)} ft</Text>
          </View>
          <View style={styles.dimCard}>
            <Text style={styles.dimKey}>BOUNDS</Text>
            <Text style={styles.dimVal}>{sketch.L.toFixed(1)} × {sketch.W.toFixed(1)} ft</Text>
          </View>
        </View>

        <View style={styles.noteBox}>
          <Text>
            Each calculator on the following pages was run with the sketched
            dimensions plus standard defaults for the inputs the sketch
            can&apos;t supply (e.g. ceiling height of 8 ft for paint and
            drywall, 4&quot; thickness for concrete). To override any
            assumption, open the calculator on projectcalc.app — your
            dimensions will already be filled in.
          </Text>
        </View>

        <View style={styles.footer} fixed>
          <Text>PROJECTCALC.APP</Text>
          <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
        </View>
      </Page>

      {calcs.length > 0 && (
        <Page size="LETTER" style={styles.page}>
          <View style={styles.headerRow}>
            <View style={styles.logoBlock}>
              <View style={styles.logoSquare} />
              <Text style={styles.logoText}>PROJECTCALC</Text>
            </View>
            <Text style={styles.headerMeta}>{headerLabel.toUpperCase()}</Text>
          </View>

          <Text style={styles.sectionLabel}>CALCULATIONS</Text>

          {calcs.map(c => (
            <View key={c.slug} style={styles.calcCard} wrap={false}>
              <Text style={styles.calcName}>{c.name.toUpperCase()}</Text>
              <Text style={styles.calcResult}>{String(c.result.main)}</Text>
              <Text style={styles.calcUnit}>{c.result.unit}</Text>

              {c.result.detail.length > 0 && (
                <View style={styles.detailGroup}>
                  <Text style={styles.detailHead}>BREAKDOWN</Text>
                  {c.result.detail.map(([k, v], i) => (
                    <View key={i} style={styles.detailRow}>
                      <Text style={styles.detailKey}>{k}</Text>
                      <Text style={styles.detailVal}>{String(v)}</Text>
                    </View>
                  ))}
                </View>
              )}

              {c.defaults.length > 0 && (
                <View style={styles.detailGroup}>
                  <Text style={styles.detailHead}>ASSUMED DEFAULTS</Text>
                  {c.defaults.map((d, i) => (
                    <View key={i} style={styles.detailRow}>
                      <Text style={styles.detailKey}>{d.label}</Text>
                      <Text style={styles.detailVal}>{d.value}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          ))}

          <View style={styles.footer} fixed>
            <Text>PROJECTCALC.APP</Text>
            <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
          </View>
        </Page>
      )}

      {calcs.length > 0 && (
        <Page size="LETTER" style={styles.page}>
          <View style={styles.headerRow}>
            <View style={styles.logoBlock}>
              <View style={styles.logoSquare} />
              <Text style={styles.logoText}>PROJECTCALC</Text>
            </View>
            <Text style={styles.headerMeta}>SHOPPING LIST</Text>
          </View>

          <Text style={styles.title}>Shopping list</Text>
          <Text style={styles.subtitle}>
            Headline material counts for a {sketch.area.toFixed(0)} ft² project.
          </Text>

          {calcs.map(c => (
            <View key={c.slug} style={styles.shoppingRow}>
              <Text style={styles.shoppingName}>{c.name.toUpperCase()}</Text>
              <Text style={styles.shoppingVal}>{String(c.result.main)} {c.result.unit.split(' ')[0]}</Text>
            </View>
          ))}

          <View style={styles.noteBox}>
            <Text>
              Material counts already include each calculator&apos;s standard
              waste factor (typically 10%). Confirm coverage and bag sizes
              with your supplier before ordering — pallet sizes, bag yields,
              and plank dimensions vary slightly by brand.
            </Text>
          </View>

          <View style={styles.footer} fixed>
            <Text>PROJECTCALC.APP — FREE CALCULATORS FOR ANY PROJECT</Text>
            <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
          </View>
        </Page>
      )}
    </Document>
  );
}
