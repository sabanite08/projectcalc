/**
 * Inline SVG diagrams for top calc pages — high-traffic calcs first.
 *
 * Convention: viewBox 480×260, hi-vis yellow `#ffd400` primary fill,
 * `#111` strokes/labels, `ui-monospace, Menlo, monospace` for labels.
 * Each diagram is hand-tuned to show the relationship the calc
 * computes, not a decoration. Width is capped at 480px in CSS; the
 * SVG scales down on narrow screens.
 */

const FILL = "#ffd400";
const FILL_DARK = "#cfa600";
const FILL_SIDE = "#e6bd00";
const STROKE = "#111";
const FONT = `font-family="ui-monospace, Menlo, monospace" font-size="13"`;
const FONT_TITLE = `font-family="ui-monospace, Menlo, monospace" font-size="14" font-weight="700"`;

// 1. CONCRETE — isometric slab with L × W × T
export const concreteDiagram = {
  alt: "Concrete slab in isometric view labeled with length L, width W, and thickness T",
  svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Concrete slab dimensions">
    <text x="240" y="32" ${FONT_TITLE} text-anchor="middle" fill="${STROKE}">L × W × T ÷ 27 = cubic yards</text>
    <polygon points="100,170 320,170 380,130 160,130" fill="${FILL}" stroke="${STROKE}" stroke-width="2"/>
    <polygon points="320,170 320,210 380,170 380,130" fill="${FILL_SIDE}" stroke="${STROKE}" stroke-width="2"/>
    <polygon points="100,170 100,210 320,210 320,170" fill="${FILL_DARK}" stroke="${STROKE}" stroke-width="2"/>
    <line x1="100" y1="230" x2="320" y2="230" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="100" y1="225" x2="100" y2="235" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="320" y1="225" x2="320" y2="235" stroke="${STROKE}" stroke-width="1.5"/>
    <text x="210" y="250" ${FONT} text-anchor="middle" fill="${STROKE}">L (length, ft)</text>
    <line x1="395" y1="130" x2="410" y2="115" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="395" y1="170" x2="410" y2="155" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="408" y1="113" x2="408" y2="157" stroke="${STROKE}" stroke-width="1.5"/>
    <text x="420" y="140" ${FONT} fill="${STROKE}">W</text>
    <line x1="85" y1="170" x2="85" y2="210" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="80" y1="170" x2="90" y2="170" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="80" y1="210" x2="90" y2="210" stroke="${STROKE}" stroke-width="1.5"/>
    <text x="55" y="195" ${FONT} fill="${STROKE}">T</text>
  </svg>`,
};

// 2. DRYWALL — room top-down with sheet grid
export const drywallDiagram = {
  alt: "Top-down view of a room interior partitioned into 4×8 drywall sheets",
  svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Drywall sheets laid out in a room">
    <text x="240" y="32" ${FONT_TITLE} text-anchor="middle" fill="${STROKE}">Wall area ÷ sheet area = sheet count</text>
    <rect x="80" y="60" width="320" height="160" fill="${FILL}" stroke="${STROKE}" stroke-width="2"/>
    <!-- sheet grid: 5 cols x 2 rows -->
    <line x1="144" y1="60" x2="144" y2="220" stroke="${STROKE}" stroke-width="1" stroke-dasharray="4 3"/>
    <line x1="208" y1="60" x2="208" y2="220" stroke="${STROKE}" stroke-width="1" stroke-dasharray="4 3"/>
    <line x1="272" y1="60" x2="272" y2="220" stroke="${STROKE}" stroke-width="1" stroke-dasharray="4 3"/>
    <line x1="336" y1="60" x2="336" y2="220" stroke="${STROKE}" stroke-width="1" stroke-dasharray="4 3"/>
    <line x1="80" y1="140" x2="400" y2="140" stroke="${STROKE}" stroke-width="1" stroke-dasharray="4 3"/>
    <!-- label one sheet -->
    <text x="176" y="105" ${FONT} text-anchor="middle" fill="${STROKE}">4×8</text>
    <text x="176" y="125" ${FONT} text-anchor="middle" fill="${STROKE}">sheet</text>
    <!-- dimension labels -->
    <line x1="80" y1="240" x2="400" y2="240" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="80" y1="235" x2="80" y2="245" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="400" y1="235" x2="400" y2="245" stroke="${STROKE}" stroke-width="1.5"/>
    <text x="240" y="258" ${FONT} text-anchor="middle" fill="${STROKE}">wall length (ft)</text>
    <line x1="60" y1="60" x2="60" y2="220" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="55" y1="60" x2="65" y2="60" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="55" y1="220" x2="65" y2="220" stroke="${STROKE}" stroke-width="1.5"/>
    <text x="48" y="145" ${FONT} text-anchor="end" fill="${STROKE}">height</text>
  </svg>`,
};

// 3. PAINT — wall elevation + gallon icon
export const paintDiagram = {
  alt: "Wall elevation labeled with coverage rate per gallon of paint",
  svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Paint coverage per gallon">
    <text x="240" y="32" ${FONT_TITLE} text-anchor="middle" fill="${STROKE}">~350 ft² per gallon × coats</text>
    <!-- wall elevation -->
    <rect x="60" y="70" width="240" height="160" fill="${FILL}" stroke="${STROKE}" stroke-width="2"/>
    <!-- window cutout -->
    <rect x="100" y="100" width="60" height="48" fill="#fff" stroke="${STROKE}" stroke-width="2"/>
    <line x1="130" y1="100" x2="130" y2="148" stroke="${STROKE}" stroke-width="1"/>
    <line x1="100" y1="124" x2="160" y2="124" stroke="${STROKE}" stroke-width="1"/>
    <!-- door cutout -->
    <rect x="220" y="130" width="48" height="100" fill="#fff" stroke="${STROKE}" stroke-width="2"/>
    <circle cx="262" cy="180" r="2" fill="${STROKE}"/>
    <!-- gallon can -->
    <rect x="350" y="120" width="80" height="90" fill="#fff" stroke="${STROKE}" stroke-width="2"/>
    <rect x="350" y="120" width="80" height="22" fill="${FILL}" stroke="${STROKE}" stroke-width="2"/>
    <path d="M 370 120 Q 370 105 390 105 Q 410 105 410 120" fill="none" stroke="${STROKE}" stroke-width="2"/>
    <text x="390" y="175" ${FONT_TITLE} text-anchor="middle" fill="${STROKE}">1 gal</text>
    <text x="390" y="195" ${FONT} text-anchor="middle" fill="${STROKE}">≈ 350 ft²</text>
    <!-- arrow from gallon to wall -->
    <path d="M 350 165 L 305 165" stroke="${STROKE}" stroke-width="2" fill="none"/>
    <polygon points="305,165 312,161 312,169" fill="${STROKE}"/>
  </svg>`,
};

// 4. ROOFING — gable elevation showing pitch
export const roofingDiagram = {
  alt: "Gable roof elevation showing pitch as rise over run; roof area equals footprint times pitch multiplier",
  svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gable roof pitch and footprint">
    <text x="240" y="32" ${FONT_TITLE} text-anchor="middle" fill="${STROKE}">footprint × pitch-multiplier = roof area</text>
    <!-- house body -->
    <rect x="100" y="160" width="280" height="60" fill="#fff" stroke="${STROKE}" stroke-width="2"/>
    <!-- gable roof -->
    <polygon points="80,160 240,80 400,160" fill="${FILL}" stroke="${STROKE}" stroke-width="2"/>
    <!-- pitch triangle annotation: 4/12 illustration -->
    <line x1="240" y1="120" x2="320" y2="120" stroke="${STROKE}" stroke-width="1.5" stroke-dasharray="4 2"/>
    <line x1="320" y1="120" x2="320" y2="140" stroke="${STROKE}" stroke-width="1.5" stroke-dasharray="4 2"/>
    <text x="280" y="116" ${FONT} text-anchor="middle" fill="${STROKE}">12 (run)</text>
    <text x="335" y="135" ${FONT} fill="${STROKE}">rise</text>
    <!-- footprint label -->
    <line x1="100" y1="240" x2="380" y2="240" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="100" y1="235" x2="100" y2="245" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="380" y1="235" x2="380" y2="245" stroke="${STROKE}" stroke-width="1.5"/>
    <text x="240" y="258" ${FONT} text-anchor="middle" fill="${STROKE}">footprint length × width</text>
  </svg>`,
};

// 5. BEAM-SPAN — simply-supported beam with point load
export const beamSpanDiagram = {
  alt: "Simply-supported beam with downward point load at midspan and reaction arrows at the two supports",
  svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Beam with point load and supports">
    <text x="240" y="32" ${FONT_TITLE} text-anchor="middle" fill="${STROKE}">Span and load determine required beam depth</text>
    <!-- beam -->
    <rect x="80" y="120" width="320" height="20" fill="${FILL}" stroke="${STROKE}" stroke-width="2"/>
    <!-- supports (triangles) -->
    <polygon points="80,140 60,180 100,180" fill="#fff" stroke="${STROKE}" stroke-width="2"/>
    <polygon points="400,140 380,180 420,180" fill="#fff" stroke="${STROKE}" stroke-width="2"/>
    <!-- ground -->
    <line x1="40" y1="180" x2="440" y2="180" stroke="${STROKE}" stroke-width="2"/>
    <line x1="40" y1="185" x2="60" y2="195" stroke="${STROKE}" stroke-width="1"/>
    <line x1="60" y1="185" x2="80" y2="195" stroke="${STROKE}" stroke-width="1"/>
    <line x1="80" y1="185" x2="100" y2="195" stroke="${STROKE}" stroke-width="1"/>
    <line x1="380" y1="185" x2="400" y2="195" stroke="${STROKE}" stroke-width="1"/>
    <line x1="400" y1="185" x2="420" y2="195" stroke="${STROKE}" stroke-width="1"/>
    <!-- load arrow at midspan -->
    <line x1="240" y1="70" x2="240" y2="118" stroke="${STROKE}" stroke-width="2.5"/>
    <polygon points="240,118 234,108 246,108" fill="${STROKE}"/>
    <text x="240" y="62" ${FONT} text-anchor="middle" fill="${STROKE}">Load (P)</text>
    <!-- span label -->
    <line x1="80" y1="210" x2="400" y2="210" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="80" y1="205" x2="80" y2="215" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="400" y1="205" x2="400" y2="215" stroke="${STROKE}" stroke-width="1.5"/>
    <text x="240" y="230" ${FONT} text-anchor="middle" fill="${STROKE}">span (L)</text>
  </svg>`,
};

// 6. VOLTAGE-DROP — circuit with source + wire run + load
export const voltageDropDiagram = {
  alt: "Electrical circuit showing voltage source, wire run of length L, load, and voltage drop along the conductor",
  svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Voltage drop along a wire run">
    <text x="240" y="32" ${FONT_TITLE} text-anchor="middle" fill="${STROKE}">VD = 2·K·I·L ÷ CM</text>
    <!-- panel (source) -->
    <rect x="50" y="100" width="60" height="100" fill="${FILL}" stroke="${STROKE}" stroke-width="2"/>
    <text x="80" y="155" ${FONT} text-anchor="middle" fill="${STROKE}">PANEL</text>
    <text x="80" y="172" ${FONT} text-anchor="middle" fill="${STROKE}">V</text>
    <!-- hot wire -->
    <line x1="110" y1="130" x2="370" y2="130" stroke="${STROKE}" stroke-width="3"/>
    <!-- neutral -->
    <line x1="110" y1="170" x2="370" y2="170" stroke="${STROKE}" stroke-width="3"/>
    <!-- load (box) -->
    <rect x="370" y="100" width="60" height="100" fill="#fff" stroke="${STROKE}" stroke-width="2"/>
    <text x="400" y="148" ${FONT} text-anchor="middle" fill="${STROKE}">LOAD</text>
    <text x="400" y="165" ${FONT} text-anchor="middle" fill="${STROKE}">(I amps)</text>
    <!-- distance label -->
    <line x1="110" y1="220" x2="370" y2="220" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="110" y1="215" x2="110" y2="225" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="370" y1="215" x2="370" y2="225" stroke="${STROKE}" stroke-width="1.5"/>
    <text x="240" y="240" ${FONT} text-anchor="middle" fill="${STROKE}">one-way distance L (ft) — current travels 2L</text>
    <!-- AWG label on wire -->
    <text x="240" y="120" ${FONT} text-anchor="middle" fill="${STROKE}">AWG (copper) → CM</text>
  </svg>`,
};

// 7. WATER-SUPPLY-PIPE-SIZE — branching pipe tree with fixtures
export const waterSupplyDiagram = {
  alt: "Water supply line branching from a service entry to bath, kitchen, and laundry fixtures, each with a fixture unit value",
  svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Water supply line with branches and fixture units">
    <text x="240" y="32" ${FONT_TITLE} text-anchor="middle" fill="${STROKE}">Sum WSFU → pipe size (IPC Table E202.1)</text>
    <!-- main service line -->
    <rect x="60" y="135" width="120" height="14" fill="${FILL}" stroke="${STROKE}" stroke-width="2"/>
    <text x="120" y="125" ${FONT} text-anchor="middle" fill="${STROKE}">Service</text>
    <!-- vertical riser -->
    <rect x="173" y="80" width="14" height="120" fill="${FILL}" stroke="${STROKE}" stroke-width="2"/>
    <!-- branch top: bath -->
    <rect x="187" y="78" width="100" height="14" fill="${FILL}" stroke="${STROKE}" stroke-width="2"/>
    <circle cx="305" cy="85" r="14" fill="#fff" stroke="${STROKE}" stroke-width="2"/>
    <text x="305" y="89" ${FONT} text-anchor="middle" fill="${STROKE}">bath</text>
    <text x="345" y="89" ${FONT} fill="${STROKE}">4 WSFU</text>
    <!-- branch middle: kitchen -->
    <rect x="187" y="135" width="100" height="14" fill="${FILL}" stroke="${STROKE}" stroke-width="2"/>
    <circle cx="305" cy="142" r="14" fill="#fff" stroke="${STROKE}" stroke-width="2"/>
    <text x="305" y="146" ${FONT} text-anchor="middle" fill="${STROKE}">kit</text>
    <text x="345" y="146" ${FONT} fill="${STROKE}">2 WSFU</text>
    <!-- branch bottom: laundry -->
    <rect x="187" y="190" width="100" height="14" fill="${FILL}" stroke="${STROKE}" stroke-width="2"/>
    <circle cx="305" cy="197" r="14" fill="#fff" stroke="${STROKE}" stroke-width="2"/>
    <text x="305" y="201" ${FONT} text-anchor="middle" fill="${STROKE}">lndry</text>
    <text x="345" y="201" ${FONT} fill="${STROKE}">2 WSFU</text>
    <!-- pipe-size annotation -->
    <text x="55" y="170" ${FONT} fill="${STROKE}">3/4″ or 1″?</text>
  </svg>`,
};

// 8. MANUAL-J HEAT LOAD — house cross-section with heat-flow arrows
export const manualJDiagram = {
  alt: "House cross-section with heat-loss arrows leaving the walls, roof, windows, and floor",
  svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Heat loss through building envelope">
    <text x="240" y="32" ${FONT_TITLE} text-anchor="middle" fill="${STROKE}">Sum BTU/hr through every envelope surface</text>
    <!-- house outline -->
    <polygon points="120,210 360,210 360,120 240,60 120,120" fill="${FILL}" stroke="${STROKE}" stroke-width="2"/>
    <!-- floor line -->
    <line x1="100" y1="210" x2="380" y2="210" stroke="${STROKE}" stroke-width="2"/>
    <!-- window on left wall -->
    <rect x="135" y="140" width="35" height="35" fill="#fff" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="152" y1="140" x2="152" y2="175" stroke="${STROKE}" stroke-width="1"/>
    <line x1="135" y1="158" x2="170" y2="158" stroke="${STROKE}" stroke-width="1"/>
    <!-- door on right -->
    <rect x="310" y="155" width="30" height="55" fill="#fff" stroke="${STROKE}" stroke-width="1.5"/>
    <!-- heat-flow arrows: outward from each surface -->
    <!-- roof L -->
    <line x1="180" y1="90" x2="160" y2="65" stroke="${STROKE}" stroke-width="2"/>
    <polygon points="160,65 170,67 165,75" fill="${STROKE}"/>
    <!-- roof R -->
    <line x1="300" y1="90" x2="320" y2="65" stroke="${STROKE}" stroke-width="2"/>
    <polygon points="320,65 310,67 315,75" fill="${STROKE}"/>
    <!-- left wall -->
    <line x1="120" y1="165" x2="90" y2="165" stroke="${STROKE}" stroke-width="2"/>
    <polygon points="90,165 100,160 100,170" fill="${STROKE}"/>
    <!-- right wall -->
    <line x1="360" y1="165" x2="390" y2="165" stroke="${STROKE}" stroke-width="2"/>
    <polygon points="390,165 380,160 380,170" fill="${STROKE}"/>
    <!-- floor (down) -->
    <line x1="240" y1="215" x2="240" y2="240" stroke="${STROKE}" stroke-width="2"/>
    <polygon points="240,240 235,232 245,232" fill="${STROKE}"/>
    <text x="55" y="160" ${FONT} fill="${STROKE}">walls</text>
    <text x="395" y="160" ${FONT} fill="${STROKE}">doors</text>
    <text x="120" y="60" ${FONT} fill="${STROKE}">roof</text>
    <text x="320" y="60" ${FONT} fill="${STROKE}">roof</text>
    <text x="195" y="248" ${FONT} fill="${STROKE}">floor / slab</text>
  </svg>`,
};

// 9. MORTGAGE — amortization stack (principal grows, interest shrinks)
export const mortgageDiagram = {
  alt: "Bar chart showing how mortgage payments shift from mostly interest in year one to mostly principal in year thirty",
  svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mortgage amortization principal vs interest over 30 years">
    <text x="240" y="32" ${FONT_TITLE} text-anchor="middle" fill="${STROKE}">Payment is fixed; principal/interest mix flips over time</text>
    <!-- axes -->
    <line x1="60" y1="220" x2="440" y2="220" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="60" y1="60" x2="60" y2="220" stroke="${STROKE}" stroke-width="1.5"/>
    <text x="240" y="245" ${FONT} text-anchor="middle" fill="${STROKE}">year 1                year 15               year 30</text>
    <text x="52" y="65" ${FONT} text-anchor="end" fill="${STROKE}">$</text>
    <!-- 30 bars: each 8wide + 4gap -->
    <g>${Array.from({length: 30}, (_, i) => {
      const x = 70 + i * 12;
      const totalH = 140; // fixed bar height
      // principal share: starts ~13% at year 1, grows to ~87% at year 30 (rough exponential)
      const principalPct = 0.10 + 0.80 * (i / 29) ** 1.8;
      const interestH = Math.round(totalH * (1 - principalPct));
      const principalH = totalH - interestH;
      const interestY = 220 - interestH;
      const principalY = interestY - principalH;
      return `<rect x="${x}" y="${interestY}" width="8" height="${interestH}" fill="${FILL_DARK}" stroke="${STROKE}" stroke-width="0.5"/>` +
             `<rect x="${x}" y="${principalY}" width="8" height="${principalH}" fill="${FILL}" stroke="${STROKE}" stroke-width="0.5"/>`;
    }).join('')}</g>
    <!-- legend -->
    <rect x="60" y="65" width="14" height="10" fill="${FILL}" stroke="${STROKE}" stroke-width="0.5"/>
    <text x="80" y="74" ${FONT} fill="${STROKE}">principal</text>
    <rect x="155" y="65" width="14" height="10" fill="${FILL_DARK}" stroke="${STROKE}" stroke-width="0.5"/>
    <text x="175" y="74" ${FONT} fill="${STROKE}">interest</text>
  </svg>`,
};

// 11. HARDWOOD — plank layout in a room (top-down)
export const hardwoodDiagram = {
  alt: "Top-down view of a room with hardwood planks laid in parallel courses, dimensions of plank length and width labeled",
  svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hardwood plank layout in a room">
    <text x="240" y="32" ${FONT_TITLE} text-anchor="middle" fill="${STROKE}">Room area ÷ plank coverage + waste = box count</text>
    <rect x="80" y="60" width="320" height="160" fill="${FILL}" stroke="${STROKE}" stroke-width="2"/>
    <!-- planks: 6 rows, staggered seams -->
    <line x1="80" y1="86" x2="400" y2="86" stroke="${STROKE}" stroke-width="1"/>
    <line x1="80" y1="112" x2="400" y2="112" stroke="${STROKE}" stroke-width="1"/>
    <line x1="80" y1="138" x2="400" y2="138" stroke="${STROKE}" stroke-width="1"/>
    <line x1="80" y1="164" x2="400" y2="164" stroke="${STROKE}" stroke-width="1"/>
    <line x1="80" y1="190" x2="400" y2="190" stroke="${STROKE}" stroke-width="1"/>
    <!-- staggered seams -->
    <line x1="160" y1="60" x2="160" y2="86" stroke="${STROKE}" stroke-width="1"/>
    <line x1="260" y1="60" x2="260" y2="86" stroke="${STROKE}" stroke-width="1"/>
    <line x1="340" y1="60" x2="340" y2="86" stroke="${STROKE}" stroke-width="1"/>
    <line x1="130" y1="86" x2="130" y2="112" stroke="${STROKE}" stroke-width="1"/>
    <line x1="230" y1="86" x2="230" y2="112" stroke="${STROKE}" stroke-width="1"/>
    <line x1="320" y1="86" x2="320" y2="112" stroke="${STROKE}" stroke-width="1"/>
    <line x1="180" y1="112" x2="180" y2="138" stroke="${STROKE}" stroke-width="1"/>
    <line x1="280" y1="112" x2="280" y2="138" stroke="${STROKE}" stroke-width="1"/>
    <line x1="370" y1="112" x2="370" y2="138" stroke="${STROKE}" stroke-width="1"/>
    <line x1="150" y1="138" x2="150" y2="164" stroke="${STROKE}" stroke-width="1"/>
    <line x1="250" y1="138" x2="250" y2="164" stroke="${STROKE}" stroke-width="1"/>
    <line x1="350" y1="138" x2="350" y2="164" stroke="${STROKE}" stroke-width="1"/>
    <line x1="200" y1="164" x2="200" y2="190" stroke="${STROKE}" stroke-width="1"/>
    <line x1="300" y1="164" x2="300" y2="190" stroke="${STROKE}" stroke-width="1"/>
    <line x1="140" y1="190" x2="140" y2="220" stroke="${STROKE}" stroke-width="1"/>
    <line x1="240" y1="190" x2="240" y2="220" stroke="${STROKE}" stroke-width="1"/>
    <line x1="340" y1="190" x2="340" y2="220" stroke="${STROKE}" stroke-width="1"/>
    <!-- callout: plank length -->
    <line x1="160" y1="50" x2="260" y2="50" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="160" y1="45" x2="160" y2="55" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="260" y1="45" x2="260" y2="55" stroke="${STROKE}" stroke-width="1.5"/>
    <text x="210" y="44" ${FONT} text-anchor="middle" fill="${STROKE}">plank length</text>
    <!-- callout: plank width -->
    <line x1="60" y1="86" x2="60" y2="112" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="55" y1="86" x2="65" y2="86" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="55" y1="112" x2="65" y2="112" stroke="${STROKE}" stroke-width="1.5"/>
    <text x="50" y="105" ${FONT} text-anchor="end" fill="${STROKE}">w</text>
    <!-- waste callout -->
    <text x="240" y="245" ${FONT} text-anchor="middle" fill="${STROKE}">+10% straight · +12% offset · +15% diagonal</text>
  </svg>`,
};

// 12. TILE — 12×12 tiles in grout grid
export const tileDiagram = {
  alt: "Top-down view of a tile layout with consistent grout joints, single tile dimensions labeled",
  svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tile grid with grout joints">
    <text x="240" y="32" ${FONT_TITLE} text-anchor="middle" fill="${STROKE}">Area ÷ tile area + waste = tile count</text>
    <!-- 5 cols × 3 rows of tiles with grout between -->
    ${(() => {
      const tiles = [];
      const tileW = 50, tileH = 50, gap = 6;
      const xStart = 90, yStart = 70;
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 5; col++) {
          const x = xStart + col * (tileW + gap);
          const y = yStart + row * (tileH + gap);
          tiles.push(`<rect x="${x}" y="${y}" width="${tileW}" height="${tileH}" fill="${FILL}" stroke="${STROKE}" stroke-width="1.5"/>`);
        }
      }
      return tiles.join('');
    })()}
    <!-- highlight one tile + label -->
    <rect x="146" y="70" width="50" height="50" fill="none" stroke="${STROKE}" stroke-width="2.5"/>
    <line x1="171" y1="60" x2="146" y2="60" stroke="${STROKE}" stroke-width="1"/>
    <text x="225" y="65" ${FONT} fill="${STROKE}">1 tile (e.g. 12×12 in)</text>
    <!-- grout label -->
    <line x1="280" y1="120" x2="320" y2="135" stroke="${STROKE}" stroke-width="1"/>
    <text x="325" y="140" ${FONT} fill="${STROKE}">grout joint</text>
    <!-- overall area label -->
    <text x="240" y="240" ${FONT} text-anchor="middle" fill="${STROKE}">+10% straight · +15% diagonal · +20% herringbone</text>
  </svg>`,
};

// 13. PAVER — herringbone pattern
export const paverDiagram = {
  alt: "Top-down view of pavers in herringbone pattern with patio area boundary marked",
  svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Paver patio in herringbone pattern">
    <text x="240" y="32" ${FONT_TITLE} text-anchor="middle" fill="${STROKE}">Area ÷ paver area = paver count + cuts</text>
    <!-- patio boundary -->
    <rect x="80" y="60" width="320" height="160" fill="#fff" stroke="${STROKE}" stroke-width="2"/>
    <!-- herringbone units (L-shaped: 60w × 30h horizontal + 30w × 60h vertical) -->
    <g stroke="${STROKE}" stroke-width="1" fill="${FILL}">
    ${(() => {
      const out = [];
      // simple ladder of brick-like pavers, alternating long/short
      const cols = 8, rows = 6;
      const w = 38, h = 24;
      for (let r = 0; r < rows; r++) {
        const offset = (r % 2 === 0) ? 0 : 19;
        for (let c = 0; c < cols; c++) {
          const x = 84 + c * w + offset;
          const y = 64 + r * h;
          if (x + w < 396 && y + h < 218) {
            out.push(`<rect x="${x}" y="${y}" width="${w-2}" height="${h-2}"/>`);
          }
        }
      }
      return out.join('');
    })()}
    </g>
    <!-- dim labels -->
    <line x1="80" y1="240" x2="400" y2="240" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="80" y1="235" x2="80" y2="245" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="400" y1="235" x2="400" y2="245" stroke="${STROKE}" stroke-width="1.5"/>
    <text x="240" y="258" ${FONT} text-anchor="middle" fill="${STROKE}">patio L × W (ft)</text>
  </svg>`,
};

// 14. RETAINING-WALL — cross-section with backfill + drainage
export const retainingWallDiagram = {
  alt: "Cross-section of a retaining wall with backfill, drainage gravel behind, and weep holes at the base",
  svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Retaining wall cross-section">
    <text x="240" y="32" ${FONT_TITLE} text-anchor="middle" fill="${STROKE}">Length × height = wall face area; height drives block course count</text>
    <!-- ground line -->
    <line x1="40" y1="220" x2="440" y2="220" stroke="${STROKE}" stroke-width="2"/>
    <!-- wall (yellow block stack) -->
    ${(() => {
      const courses = 6;
      const out = [];
      for (let i = 0; i < courses; i++) {
        const y = 220 - (i + 1) * 22;
        out.push(`<rect x="170" y="${y}" width="80" height="22" fill="${FILL}" stroke="${STROKE}" stroke-width="1.5"/>`);
      }
      return out.join('');
    })()}
    <!-- footing -->
    <rect x="150" y="220" width="120" height="14" fill="${FILL_DARK}" stroke="${STROKE}" stroke-width="1.5"/>
    <!-- backfill on uphill (right) side -->
    <path d="M 250 88 L 440 88 L 440 220 L 250 220 Z" fill="#e8d7a5" stroke="${STROKE}" stroke-width="1"/>
    <!-- drainage gravel column behind wall -->
    <rect x="250" y="88" width="22" height="132" fill="#bbbbbb" stroke="${STROKE}" stroke-width="1"/>
    <text x="335" y="155" ${FONT} fill="${STROKE}">backfill</text>
    <text x="275" y="100" ${FONT} fill="${STROKE}">↑ drain gravel</text>
    <!-- weep hole -->
    <circle cx="240" cy="208" r="3" fill="#fff" stroke="${STROKE}" stroke-width="1.5"/>
    <text x="180" y="215" ${FONT} text-anchor="end" fill="${STROKE}">weep →</text>
    <!-- height label -->
    <line x1="140" y1="88" x2="140" y2="220" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="135" y1="88" x2="145" y2="88" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="135" y1="220" x2="145" y2="220" stroke="${STROKE}" stroke-width="1.5"/>
    <text x="130" y="155" ${FONT} text-anchor="end" fill="${STROKE}">height</text>
  </svg>`,
};

// 15. DECK-STAIN — top-down deck with railing
export const deckStainDiagram = {
  alt: "Top-down view of a wood deck with railing on three sides, deck area and railing linear feet labeled",
  svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Deck top-down with railing">
    <text x="240" y="32" ${FONT_TITLE} text-anchor="middle" fill="${STROKE}">Deck area + railing LF = stain gallons</text>
    <!-- deck planks (vertical) -->
    <g stroke="${STROKE}" stroke-width="1.5">
    ${(() => {
      const out = [];
      for (let i = 0; i < 16; i++) {
        const x = 80 + i * 20;
        out.push(`<rect x="${x}" y="80" width="18" height="140" fill="${FILL}"/>`);
      }
      return out.join('');
    })()}
    </g>
    <!-- railing on left, top, right (NOT bottom — house side) -->
    <line x1="80" y1="80" x2="80" y2="220" stroke="${STROKE}" stroke-width="4"/>
    <line x1="400" y1="80" x2="400" y2="220" stroke="${STROKE}" stroke-width="4"/>
    <line x1="80" y1="80" x2="400" y2="80" stroke="${STROKE}" stroke-width="4"/>
    <!-- balusters as ticks -->
    ${(() => {
      const out = [];
      for (let i = 0; i < 12; i++) {
        const x = 90 + i * 28;
        out.push(`<line x1="${x}" y1="72" x2="${x}" y2="80" stroke="${STROKE}" stroke-width="2"/>`);
      }
      return out.join('');
    })()}
    <!-- house side -->
    <rect x="60" y="220" width="360" height="14" fill="${FILL_DARK}" stroke="${STROKE}" stroke-width="1.5"/>
    <text x="240" y="232" ${FONT} text-anchor="middle" fill="${STROKE}">house wall (no railing)</text>
    <!-- area label -->
    <text x="240" y="160" ${FONT_TITLE} text-anchor="middle" fill="${STROKE}">deck area</text>
    <!-- LF label -->
    <text x="50" y="155" ${FONT} text-anchor="end" fill="${STROKE}">+ railing</text>
    <text x="50" y="170" ${FONT} text-anchor="end" fill="${STROKE}">LF</text>
  </svg>`,
};

// 16. HEADER-SIZE — wall framing with header over opening
export const headerSizeDiagram = {
  alt: "Wall framing cross-section with header beam spanning a rough opening, king studs and jack studs labeled",
  svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Header above rough opening with king and jack studs">
    <text x="240" y="32" ${FONT_TITLE} text-anchor="middle" fill="${STROKE}">Opening span + load → header depth</text>
    <!-- top plate -->
    <rect x="60" y="60" width="360" height="12" fill="${FILL_DARK}" stroke="${STROKE}" stroke-width="1.5"/>
    <!-- bottom plate -->
    <rect x="60" y="230" width="360" height="12" fill="${FILL_DARK}" stroke="${STROKE}" stroke-width="1.5"/>
    <!-- king studs (full height) -->
    <rect x="80" y="72" width="14" height="158" fill="${FILL}" stroke="${STROKE}" stroke-width="1.5"/>
    <rect x="386" y="72" width="14" height="158" fill="${FILL}" stroke="${STROKE}" stroke-width="1.5"/>
    <!-- jack studs (under header) -->
    <rect x="94" y="100" width="14" height="130" fill="${FILL}" stroke="${STROKE}" stroke-width="1.5"/>
    <rect x="372" y="100" width="14" height="130" fill="${FILL}" stroke="${STROKE}" stroke-width="1.5"/>
    <!-- header (the highlighted piece) -->
    <rect x="108" y="100" width="264" height="32" fill="${FILL}" stroke="${STROKE}" stroke-width="2.5"/>
    <text x="240" y="121" ${FONT_TITLE} text-anchor="middle" fill="${STROKE}">HEADER</text>
    <!-- cripples above header -->
    <rect x="160" y="72" width="14" height="28" fill="${FILL}" stroke="${STROKE}" stroke-width="1"/>
    <rect x="240" y="72" width="14" height="28" fill="${FILL}" stroke="${STROKE}" stroke-width="1"/>
    <rect x="320" y="72" width="14" height="28" fill="${FILL}" stroke="${STROKE}" stroke-width="1"/>
    <!-- opening (white) -->
    <rect x="108" y="132" width="264" height="98" fill="#fff" stroke="${STROKE}" stroke-width="1.5"/>
    <text x="240" y="190" ${FONT} text-anchor="middle" fill="${STROKE}">rough opening</text>
    <!-- span dimension -->
    <line x1="108" y1="250" x2="372" y2="250" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="108" y1="245" x2="108" y2="255" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="372" y1="245" x2="372" y2="255" stroke="${STROKE}" stroke-width="1.5"/>
    <text x="240" y="262" ${FONT} text-anchor="middle" fill="${STROKE}">opening span (ft)</text>
    <!-- callouts -->
    <text x="80" y="80" ${FONT} fill="${STROKE}">king</text>
    <text x="94" y="245" ${FONT} fill="${STROKE}">jack</text>
  </svg>`,
};

// 17. RAFTER-LENGTH — right triangle with run, rise, rafter
export const rafterLengthDiagram = {
  alt: "Right triangle showing the rafter as the hypotenuse, run on the horizontal leg, and rise on the vertical leg; angle equals roof pitch",
  svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rafter as hypotenuse with run and rise legs">
    <text x="240" y="32" ${FONT_TITLE} text-anchor="middle" fill="${STROKE}">rafter² = run² + rise²</text>
    <!-- right triangle -->
    <polygon points="80,210 360,210 360,90" fill="${FILL}" stroke="${STROKE}" stroke-width="2.5"/>
    <!-- right angle indicator -->
    <polyline points="340,210 340,194 360,194" fill="none" stroke="${STROKE}" stroke-width="1.5"/>
    <!-- run label -->
    <line x1="80" y1="230" x2="360" y2="230" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="80" y1="225" x2="80" y2="235" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="360" y1="225" x2="360" y2="235" stroke="${STROKE}" stroke-width="1.5"/>
    <text x="220" y="248" ${FONT} text-anchor="middle" fill="${STROKE}">run (horizontal)</text>
    <!-- rise label -->
    <line x1="380" y1="90" x2="380" y2="210" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="375" y1="90" x2="385" y2="90" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="375" y1="210" x2="385" y2="210" stroke="${STROKE}" stroke-width="1.5"/>
    <text x="395" y="155" ${FONT} fill="${STROKE}">rise</text>
    <!-- rafter label on hypotenuse -->
    <text x="195" y="135" ${FONT_TITLE} fill="${STROKE}" transform="rotate(-23 195 135)">rafter (hypotenuse)</text>
    <!-- pitch arc -->
    <path d="M 130 210 A 50 50 0 0 0 105 184" fill="none" stroke="${STROKE}" stroke-width="1.5"/>
    <text x="130" y="200" ${FONT} fill="${STROKE}">pitch</text>
  </svg>`,
};

// 18. BTU — room with thermometer & area
export const btuDiagram = {
  alt: "Room interior cube with a thermometer indicator showing required BTU per square foot for cooling load",
  svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="BTU load per room square footage">
    <text x="240" y="32" ${FONT_TITLE} text-anchor="middle" fill="${STROKE}">~20 BTU/hr per ft² (rule of thumb)</text>
    <!-- room -->
    <rect x="80" y="80" width="220" height="140" fill="${FILL}" stroke="${STROKE}" stroke-width="2"/>
    <!-- window -->
    <rect x="120" y="120" width="50" height="50" fill="#fff" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="145" y1="120" x2="145" y2="170" stroke="${STROKE}" stroke-width="1"/>
    <line x1="120" y1="145" x2="170" y2="145" stroke="${STROKE}" stroke-width="1"/>
    <!-- sun (heat gain hint) -->
    <circle cx="65" cy="65" r="14" fill="#ffd400" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="65" y1="38" x2="65" y2="50" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="42" y1="60" x2="52" y2="65" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="42" y1="80" x2="52" y2="75" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="78" y1="58" x2="88" y2="50" stroke="${STROKE}" stroke-width="1.5"/>
    <!-- area label -->
    <text x="240" y="155" ${FONT_TITLE} text-anchor="middle" fill="${STROKE}">L × W = ft²</text>
    <!-- thermometer -->
    <rect x="350" y="85" width="22" height="120" fill="#fff" stroke="${STROKE}" stroke-width="2" rx="11"/>
    <rect x="354" y="155" width="14" height="50" fill="#ef4444" stroke="none"/>
    <circle cx="361" cy="220" r="14" fill="#ef4444" stroke="${STROKE}" stroke-width="2"/>
    <text x="395" y="120" ${FONT} fill="${STROKE}">heat</text>
    <text x="395" y="135" ${FONT} fill="${STROKE}">load</text>
    <!-- dim labels -->
    <line x1="80" y1="240" x2="300" y2="240" stroke="${STROKE}" stroke-width="1.5"/>
    <text x="190" y="255" ${FONT} text-anchor="middle" fill="${STROKE}">L (ft)</text>
  </svg>`,
};

// 19. AC-TONNAGE — outdoor condenser + house, tons → BTU
export const acTonnageDiagram = {
  alt: "House with outdoor AC condenser unit labeled tonnage; 12,000 BTU per hour equals one ton of cooling",
  svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AC tonnage to BTU conversion">
    <text x="240" y="32" ${FONT_TITLE} text-anchor="middle" fill="${STROKE}">12,000 BTU/hr = 1 ton</text>
    <!-- house -->
    <polygon points="60,200 240,200 240,120 150,80 60,120" fill="${FILL}" stroke="${STROKE}" stroke-width="2"/>
    <rect x="60" y="200" width="180" height="20" fill="${FILL_DARK}" stroke="${STROKE}" stroke-width="2"/>
    <!-- house door -->
    <rect x="135" y="150" width="30" height="50" fill="#fff" stroke="${STROKE}" stroke-width="1.5"/>
    <!-- AC condenser -->
    <rect x="320" y="140" width="100" height="80" fill="#fff" stroke="${STROKE}" stroke-width="2"/>
    <circle cx="370" cy="180" r="22" fill="${FILL}" stroke="${STROKE}" stroke-width="2"/>
    <!-- fan blades -->
    <line x1="370" y1="160" x2="370" y2="200" stroke="${STROKE}" stroke-width="2"/>
    <line x1="350" y1="180" x2="390" y2="180" stroke="${STROKE}" stroke-width="2"/>
    <line x1="355" y1="165" x2="385" y2="195" stroke="${STROKE}" stroke-width="2"/>
    <line x1="355" y1="195" x2="385" y2="165" stroke="${STROKE}" stroke-width="2"/>
    <!-- connecting line set -->
    <line x1="240" y1="195" x2="320" y2="195" stroke="${STROKE}" stroke-width="2.5"/>
    <line x1="240" y1="205" x2="320" y2="205" stroke="${STROKE}" stroke-width="2.5"/>
    <text x="280" y="190" ${FONT} text-anchor="middle" fill="${STROKE}">line set</text>
    <!-- callouts -->
    <text x="150" y="155" ${FONT_TITLE} text-anchor="middle" fill="${STROKE}">cooled</text>
    <text x="150" y="170" ${FONT} text-anchor="middle" fill="${STROKE}">space (ft²)</text>
    <text x="370" y="155" ${FONT} text-anchor="middle" fill="${STROKE}">3 ton</text>
    <text x="370" y="232" ${FONT} text-anchor="middle" fill="${STROKE}">= 36,000 BTU/hr</text>
  </svg>`,
};

// 20. CONDUIT-FILL — circle cross-section with wires inside
export const conduitFillDiagram = {
  alt: "Cross-section of an electrical conduit showing several conductors as smaller circles inside the conduit area, with NEC fill percentage limits noted",
  svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Conduit cross-section with multiple wires and NEC fill percentage">
    <text x="240" y="32" ${FONT_TITLE} text-anchor="middle" fill="${STROKE}">Σ wire area ÷ conduit area ≤ NEC fill limit</text>
    <!-- conduit outer circle -->
    <circle cx="180" cy="150" r="84" fill="#fff" stroke="${STROKE}" stroke-width="3"/>
    <!-- wires inside (5 wires: 3 phase + N + G typical) -->
    <circle cx="160" cy="120" r="20" fill="${FILL}" stroke="${STROKE}" stroke-width="2"/>
    <circle cx="200" cy="120" r="20" fill="${FILL}" stroke="${STROKE}" stroke-width="2"/>
    <circle cx="135" cy="160" r="20" fill="${FILL}" stroke="${STROKE}" stroke-width="2"/>
    <circle cx="180" cy="172" r="20" fill="${FILL}" stroke="${STROKE}" stroke-width="2"/>
    <circle cx="225" cy="160" r="20" fill="${FILL}" stroke="${STROKE}" stroke-width="2"/>
    <!-- conduit label -->
    <line x1="245" y1="90" x2="290" y2="65" stroke="${STROKE}" stroke-width="1.5"/>
    <text x="295" y="65" ${FONT} fill="${STROKE}">EMT / conduit</text>
    <text x="295" y="80" ${FONT} fill="${STROKE}">(e.g. 3/4" trade size)</text>
    <!-- wire label -->
    <line x1="180" y1="172" x2="295" y2="172" stroke="${STROKE}" stroke-width="1.5" stroke-dasharray="3 2"/>
    <text x="300" y="170" ${FONT} fill="${STROKE}">conductors</text>
    <text x="300" y="185" ${FONT} fill="${STROKE}">(THHN/THWN-2)</text>
    <!-- NEC fill limits cheat sheet -->
    <text x="300" y="210" ${FONT_TITLE} fill="${STROKE}">NEC fill caps:</text>
    <text x="300" y="226" ${FONT} fill="${STROKE}">1 wire → 53%</text>
    <text x="300" y="240" ${FONT} fill="${STROKE}">2 wires → 31%</text>
    <text x="300" y="254" ${FONT} fill="${STROKE}">3+ wires → 40%</text>
  </svg>`,
};

// 10. STAIR-STRINGER — side profile of stair with rise + run
export const stairStringerDiagram = {
  alt: "Side profile of a staircase stringer with rise and run dimensions labeled on individual treads",
  svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stair stringer rise and run">
    <text x="240" y="32" ${FONT_TITLE} text-anchor="middle" fill="${STROKE}">Total rise ÷ rise per step = step count</text>
    <!-- staircase: 6 steps going up to the right -->
    <path d="M 80 220 L 80 196 L 130 196 L 130 172 L 180 172 L 180 148 L 230 148 L 230 124 L 280 124 L 280 100 L 330 100 L 330 76 L 380 76 L 380 220 Z"
          fill="${FILL}" stroke="${STROKE}" stroke-width="2"/>
    <!-- tread highlights on top edges -->
    <line x1="80" y1="196" x2="130" y2="196" stroke="${STROKE}" stroke-width="2"/>
    <line x1="130" y1="172" x2="180" y2="172" stroke="${STROKE}" stroke-width="2"/>
    <line x1="180" y1="148" x2="230" y2="148" stroke="${STROKE}" stroke-width="2"/>
    <line x1="230" y1="124" x2="280" y2="124" stroke="${STROKE}" stroke-width="2"/>
    <line x1="280" y1="100" x2="330" y2="100" stroke="${STROKE}" stroke-width="2"/>
    <line x1="330" y1="76" x2="380" y2="76" stroke="${STROKE}" stroke-width="2"/>
    <!-- rise label on one tread -->
    <line x1="195" y1="172" x2="195" y2="148" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="190" y1="172" x2="200" y2="172" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="190" y1="148" x2="200" y2="148" stroke="${STROKE}" stroke-width="1.5"/>
    <text x="210" y="164" ${FONT} fill="${STROKE}">rise</text>
    <!-- run label -->
    <line x1="180" y1="158" x2="230" y2="158" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="180" y1="153" x2="180" y2="163" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="230" y1="153" x2="230" y2="163" stroke="${STROKE}" stroke-width="1.5"/>
    <text x="205" y="178" ${FONT} text-anchor="middle" fill="${STROKE}">run</text>
    <!-- total rise -->
    <line x1="395" y1="76" x2="395" y2="220" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="390" y1="76" x2="400" y2="76" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="390" y1="220" x2="400" y2="220" stroke="${STROKE}" stroke-width="1.5"/>
    <text x="405" y="155" ${FONT} fill="${STROKE}">total</text>
    <text x="405" y="170" ${FONT} fill="${STROKE}">rise</text>
    <!-- total run -->
    <line x1="80" y1="235" x2="380" y2="235" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="80" y1="230" x2="80" y2="240" stroke="${STROKE}" stroke-width="1.5"/>
    <line x1="380" y1="230" x2="380" y2="240" stroke="${STROKE}" stroke-width="1.5"/>
    <text x="230" y="253" ${FONT} text-anchor="middle" fill="${STROKE}">total run</text>
  </svg>`,
};
