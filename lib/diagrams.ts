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
