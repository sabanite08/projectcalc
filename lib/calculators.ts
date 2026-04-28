import type { Calculator } from './types';

export const calculators: Calculator[] = [
  {
    slug: 'drywall-calculator',
    name: 'Drywall',
    category: 'home',
    desc: 'Drywall sheets',
    formula: 'sheets = area ÷ 32 × 1.10',
    title: 'DRYWALL SHEETS',
    metaTitle: 'Drywall Calculator — How Many Sheets Do You Need? | ProjectCalc',
    metaDesc: 'Free drywall calculator. Enter your room size and get the exact number of 4x8 sheets to buy, including 10% waste. Works for walls only or walls + ceiling.',
    seoIntro: 'Use this drywall calculator to estimate how many sheets of drywall (sheetrock) you need to finish a room. Enter the room dimensions and ceiling height, pick a sheet size, choose whether you are covering the ceiling, and the calculator returns the exact sheet count rounded up with a 10% waste factor built in. Standard 4×8 sheets cover 32 ft² each; 4×12 sheets cover 48 ft² and reduce seams on long walls but require two people and a truck to handle.',
    note: '10% waste built in. 4×8 sheets cover 32 ft²; 4×12 sheets cover 48 ft² (50% heavier — plan for 2 people).',
    inputs: [
      { id: 'L', label: 'Room length', unit: 'ft', default: 12, step: 0.5 },
      { id: 'W', label: 'Room width', unit: 'ft', default: 10, step: 0.5 },
      { id: 'H', label: 'Ceiling height', unit: 'ft', default: 8, step: 0.5 },
      { id: 'ceil', label: 'Include ceiling?', unit: '', type: 'select', default: 'yes',
        options: [['yes','Yes'],['no','No (walls only)']] },
      { id: 'sheet', label: 'Sheet size', unit: '', type: 'select', default: '4x8',
        tooltip: '4×8 covers 32 ft² and is easy to handle solo. 4×12 covers 48 ft², cuts seams on long walls, but is heavy and needs two people.',
        options: [['4x8','4×8 (32 ft²)'],['4x12','4×12 (48 ft²)']] }
    ],
    calc: (data) => {
      const L = +data.L, W = +data.W, H = +data.H, ceil = data.ceil as string, sheet = data.sheet as string;
      const wallArea = 2 * (L + W) * H;
      const ceilArea = ceil === 'yes' ? L * W : 0;
      const total = wallArea + ceilArea;
      const sheetArea = sheet === '4x12' ? 48 : 32;
      const sheetLabel = sheet === '4x12' ? '4×12 SHEETS' : '4×8 SHEETS';
      const sheets = Math.ceil((total / sheetArea) * 1.10);
      return {
        main: sheets, unit: sheetLabel,
        detail: [
          ['Wall area', wallArea.toFixed(0) + ' ft²'],
          ['Ceiling area', ceilArea.toFixed(0) + ' ft²'],
          ['Total area', total.toFixed(0) + ' ft²'],
          ['With 10% waste', (total * 1.10).toFixed(0) + ' ft²'],
          ['Sheet coverage', sheetArea + ' ft²']
        ]
      };
    }
  },
  {
    slug: 'paint-calculator',
    name: 'Paint',
    category: 'home',
    desc: 'Gallons needed',
    formula: 'gal = ft² × coats ÷ 350',
    title: 'PAINT GALLONS',
    metaTitle: 'Paint Calculator — How Much Paint Do You Need? | ProjectCalc',
    metaDesc: 'Calculate paint gallons for any room. Enter dimensions, number of coats, and surface type — get the exact gallons to buy. Free, no signup.',
    seoIntro: 'This paint calculator tells you how many gallons of paint you need for a room. One gallon covers about 350 square feet on smooth walls or 275 on rough/textured surfaces. Enter your room length, width, ceiling height, the number of coats you plan to apply, and whether the surface is smooth or rough — the calculator rounds up to the nearest whole gallon since paint is sold by the gallon.',
    note: '1 gallon ≈ 350 ft² on smooth surfaces, 250–300 on rough/textured. Always round up.',
    inputs: [
      { id: 'L', label: 'Room length', unit: 'ft', default: 12, step: 0.5 },
      { id: 'W', label: 'Room width', unit: 'ft', default: 10, step: 0.5 },
      { id: 'H', label: 'Ceiling height', unit: 'ft', default: 8, step: 0.5 },
      { id: 'coats', label: 'Number of coats', unit: '', default: 2, step: 1 },
      { id: 'surface', label: 'Surface', unit: '', type: 'select', default: 'smooth',
        options: [['smooth','Smooth (350 ft²/gal)'],['rough','Rough/textured (275 ft²/gal)']] }
    ],
    calc: (data) => {
      const L=+data.L, W=+data.W, H=+data.H, coats=+data.coats, surface=data.surface as string;
      const wallArea = 2 * (L + W) * H;
      const coverage = surface === 'smooth' ? 350 : 275;
      const gallons = (wallArea * coats) / coverage;
      return {
        main: Math.ceil(gallons), unit: 'GALLONS',
        detail: [
          ['Wall area', wallArea.toFixed(0) + ' ft²'],
          ['Total to cover', (wallArea * coats).toFixed(0) + ' ft²'],
          ['Exact need', gallons.toFixed(2) + ' gal'],
          ['Coverage / gal', coverage + ' ft²']
        ]
      };
    }
  },
  {
    slug: 'concrete-calculator',
    name: 'Concrete',
    category: 'home',
    desc: 'Bags or yards',
    formula: 'yd³ = L·W·D ÷ 27',
    title: 'CONCRETE',
    metaTitle: 'Concrete Calculator — Bags and Cubic Yards | ProjectCalc',
    metaDesc: 'Concrete calculator for slabs, footings, and pads. Get cubic yards plus the exact number of 60lb or 80lb bags. Free, instant.',
    seoIntro: 'Use this concrete calculator to estimate how much concrete you need for a slab, footing, sidewalk, or patio. Enter the length, width, and thickness of your pour, and the calculator returns cubic yards (for ready-mix delivery) plus the equivalent number of 60-pound or 80-pound concrete bags from Home Depot or Lowe\'s. A 60lb bag yields about 0.45 ft³; an 80lb bag yields 0.60 ft³.',
    note: 'For pours over 1 cubic yard, ready-mix delivery is usually cheaper than bags. Add 10% for spillage and over-dig.',
    inputs: [
      { id: 'L', label: 'Length', unit: 'ft', default: 10, step: 0.5 },
      { id: 'W', label: 'Width', unit: 'ft', default: 10, step: 0.5 },
      { id: 'D', label: 'Thickness', unit: 'in', default: 4, step: 0.5 }
    ],
    calc: (data) => {
      const L=+data.L, W=+data.W, D=+data.D;
      const cubicFt = L * W * (D / 12);
      const cubicYd = cubicFt / 27;
      const cubicYdWithWaste = cubicYd * 1.10;
      const bags60 = Math.ceil(cubicFt / 0.45);
      const bags80 = Math.ceil(cubicFt / 0.60);
      return {
        main: cubicYdWithWaste.toFixed(2), unit: 'CUBIC YARDS (W/ 10%)',
        detail: [
          ['Cubic feet', cubicFt.toFixed(2)],
          ['Cubic yards (exact)', cubicYd.toFixed(3)],
          ['60lb bags needed', bags60.toLocaleString()],
          ['80lb bags needed', bags80.toLocaleString()]
        ]
      };
    }
  },
  {
    slug: 'roofing-calculator',
    name: 'Roofing',
    category: 'home',
    desc: 'Shingle bundles',
    formula: 'sq = footprint × pitch',
    title: 'ROOFING SHINGLES',
    metaTitle: 'Roofing Calculator — Shingle Bundles and Squares | ProjectCalc',
    metaDesc: 'Roofing calculator. Enter footprint and pitch, get squares and shingle bundles needed. Includes 10% waste factor. Free.',
    seoIntro: 'This roofing calculator estimates the number of shingle bundles you need for a roof. Enter the building footprint length and width and the roof pitch (rise per 12 inches of run), and the calculator computes the actual roof surface area, converts it to roofing squares (1 square = 100 ft²), and returns the bundle count. Most asphalt shingles ship 3 bundles per square. A 10% waste factor for cuts and ridge caps is built in.',
    note: 'Pitch multiplier: 4/12 = 1.054 · 6/12 = 1.118 · 8/12 = 1.202 · 12/12 = 1.414. 3 bundles per square. 10% waste included.',
    inputs: [
      { id: 'L', label: 'Roof footprint length', unit: 'ft', default: 40, step: 1 },
      { id: 'W', label: 'Roof footprint width', unit: 'ft', default: 30, step: 1 },
      { id: 'pitch', label: 'Pitch (rise per 12)', unit: 'in', default: 6, step: 1, tooltip: 'How many inches the roof rises for every 12 inches of horizontal run. A 6/12 pitch rises 6 inches per foot.' }
    ],
    calc: (data) => {
      const L=+data.L, W=+data.W, pitch=+data.pitch;
      const footprint = L * W;
      const pitchMult = Math.sqrt(pitch * pitch + 144) / 12;
      const roofArea = footprint * pitchMult;
      const squares = roofArea / 100;
      const squaresWithWaste = squares * 1.10;
      const bundles = Math.ceil(squaresWithWaste * 3);
      return {
        main: bundles, unit: 'BUNDLES',
        detail: [
          ['Footprint', footprint.toFixed(0) + ' ft²'],
          ['Pitch multiplier', pitchMult.toFixed(3)],
          ['Roof area', roofArea.toFixed(0) + ' ft²'],
          ['Squares (w/ 10%)', squaresWithWaste.toFixed(2)]
        ]
      };
    }
  },
  {
    slug: 'flooring-calculator',
    name: 'Flooring',
    category: 'home',
    desc: 'Sq ft + waste',
    formula: 'ft² × waste factor',
    title: 'FLOORING',
    metaTitle: 'Flooring Calculator — Square Feet and Boxes | ProjectCalc',
    metaDesc: 'Flooring calculator with waste factor. Enter room dimensions and pattern type — get square feet to buy plus number of boxes.',
    seoIntro: 'This flooring calculator gives you the square footage of flooring to buy for a room, including the waste factor that varies by install pattern. Straight installs need 10% waste, offset plank patterns need 12%, and diagonal or herringbone needs 15% because of the extra angled cuts. Most flooring boxes cover 20 ft²; the calculator estimates box count based on that average.',
    note: 'Straight install: 10% waste. Diagonal/herringbone: 15%. Plank pattern with offsets: 12%.',
    inputs: [
      { id: 'L', label: 'Room length', unit: 'ft', default: 14, step: 0.5 },
      { id: 'W', label: 'Room width', unit: 'ft', default: 12, step: 0.5 },
      { id: 'pattern', label: 'Install pattern', unit: '', type: 'select', default: 'straight',
        options: [['straight','Straight (10%)'],['offset','Offset plank (12%)'],['diagonal','Diagonal / herringbone (15%)']] }
    ],
    calc: (data) => {
      const L=+data.L, W=+data.W, pattern=data.pattern as string;
      const area = L * W;
      const wasteMap: Record<string, number> = {straight: 1.10, offset: 1.12, diagonal: 1.15};
      const buy = area * wasteMap[pattern];
      const boxes = Math.ceil(buy / 20);
      return {
        main: buy.toFixed(0), unit: 'FT² TO BUY',
        detail: [
          ['Floor area', area.toFixed(0) + ' ft²'],
          ['Waste factor', ((wasteMap[pattern]-1)*100).toFixed(0) + '%'],
          ['~Boxes (@ 20 sf)', boxes],
          ['Pattern', pattern]
        ]
      };
    }
  },
  {
    slug: 'tile-calculator',
    name: 'Tile',
    category: 'home',
    desc: 'Tiles per room',
    formula: 'tiles = area ÷ tile size × waste',
    title: 'TILE QUANTITY',
    metaTitle: 'Tile Calculator — How Many Tiles Do You Need? | ProjectCalc',
    metaDesc: 'Tile calculator for floors, backsplashes, and showers. Enter area and tile size — get exact tile count with waste factor.',
    seoIntro: 'This tile calculator computes how many tiles you need based on the area to cover and the tile dimensions. Pick from common tile sizes (12x12, 12x24, 18x18, 24x24, 6x6, 4x4 inches) and the calculator returns the tile count with a 10% waste factor for straight layouts or 15% for diagonal. Tiles are typically sold by the box; check the box count when buying so you don\'t come up short.',
    note: 'Tile sizes are nominal — actual size includes the grout joint. Add 10% waste straight, 15% diagonal.',
    inputs: [
      { id: 'L', label: 'Area length', unit: 'ft', default: 10, step: 0.5 },
      { id: 'W', label: 'Area width', unit: 'ft', default: 8, step: 0.5 },
      { id: 'tile', label: 'Tile size', unit: '', type: 'select', default: '12x12',
        options: [['4x4','4×4 in (1.5 tiles/ft²... 9 tiles)'],['6x6','6×6 in (4 tiles/ft²)'],['12x12','12×12 in (1 tile/ft²)'],['12x24','12×24 in (0.5 tiles/ft²)'],['18x18','18×18 in (0.44 tiles/ft²)'],['24x24','24×24 in (0.25 tiles/ft²)']] },
      { id: 'pattern', label: 'Layout', unit: '', type: 'select', default: 'straight',
        options: [['straight','Straight (10%)'],['diagonal','Diagonal (15%)']] }
    ],
    calc: (data) => {
      const L=+data.L, W=+data.W, tile=data.tile as string, pattern=data.pattern as string;
      const area = L * W;
      const tilesPerSqFt: Record<string, number> = {'4x4': 9, '6x6': 4, '12x12': 1, '12x24': 0.5, '18x18': 0.444, '24x24': 0.25};
      const waste = pattern === 'diagonal' ? 1.15 : 1.10;
      const tiles = Math.ceil(area * tilesPerSqFt[tile] * waste);
      return {
        main: tiles, unit: 'TILES',
        detail: [
          ['Area', area.toFixed(0) + ' ft²'],
          ['Tile size', tile + ' in'],
          ['Tiles per ft²', tilesPerSqFt[tile].toFixed(2)],
          ['Waste factor', ((waste-1)*100).toFixed(0) + '%']
        ]
      };
    }
  },
  {
    slug: 'mulch-calculator',
    name: 'Mulch',
    category: 'home',
    desc: 'Cubic yards',
    formula: 'yd³ = ft² × depth ÷ 324',
    title: 'MULCH',
    metaTitle: 'Mulch Calculator — Cubic Yards and Bags | ProjectCalc',
    metaDesc: 'Mulch calculator. Enter bed area and depth — get cubic yards needed plus the equivalent in 2 cubic foot bags.',
    seoIntro: 'This mulch calculator tells you how many cubic yards of mulch to order based on the area of your beds and the depth of coverage. The standard rule is 1 cubic yard covers 324 square feet at 1 inch depth, or 108 ft² at 3 inches (the typical landscape depth). Bagged mulch is sold in 2 cubic foot bags; one cubic yard equals about 13.5 bags.',
    note: 'Recommended depth: 2–3 inches for shrub beds, 3 inches for trees, 1 inch for new gardens. Pine straw goes about 6 inches.',
    inputs: [
      { id: 'L', label: 'Bed length', unit: 'ft', default: 20, step: 1 },
      { id: 'W', label: 'Bed width', unit: 'ft', default: 5, step: 1 },
      { id: 'depth', label: 'Depth', unit: 'in', default: 3, step: 0.5 }
    ],
    calc: (data) => {
      const L=+data.L, W=+data.W, depth=+data.depth;
      const area = L * W;
      const cubicYd = (area * (depth / 12)) / 27;
      const bags = Math.ceil((cubicYd * 27) / 2);
      return {
        main: cubicYd.toFixed(2), unit: 'CUBIC YARDS',
        detail: [
          ['Bed area', area.toFixed(0) + ' ft²'],
          ['Depth', depth + ' in'],
          ['~2 ft³ bags equivalent', bags.toLocaleString()],
          ['Cubic feet', (cubicYd * 27).toFixed(1)]
        ]
      };
    }
  },
  {
    slug: 'gravel-calculator',
    name: 'Gravel',
    category: 'home',
    desc: 'Tons or yards',
    formula: 'tons = yd³ × 1.4',
    title: 'GRAVEL / TOPSOIL',
    metaTitle: 'Gravel Calculator — Cubic Yards and Tons | ProjectCalc',
    metaDesc: 'Gravel and topsoil calculator. Enter area and depth — get cubic yards plus tons. Works for driveway gravel, pea gravel, crushed stone.',
    seoIntro: 'This gravel calculator computes how much gravel, crushed stone, or topsoil you need for a driveway, patio base, or fill area. Enter the area dimensions and the depth of fill, and the calculator returns cubic yards along with the equivalent in tons (gravel weighs about 1.4 tons per cubic yard, topsoil about 1.0 ton). Most quarries sell by the ton, while landscape suppliers often sell by the cubic yard.',
    note: 'Gravel = ~1.4 tons/yd³. Topsoil = ~1.0 ton/yd³. Sand = ~1.3 tons/yd³. For driveways, use 4 inches min over compacted base.',
    inputs: [
      { id: 'L', label: 'Length', unit: 'ft', default: 30, step: 1 },
      { id: 'W', label: 'Width', unit: 'ft', default: 12, step: 1 },
      { id: 'depth', label: 'Depth', unit: 'in', default: 4, step: 0.5 },
      { id: 'material', label: 'Material', unit: '', type: 'select', default: 'gravel',
        options: [['gravel','Gravel (1.4 t/yd³)'],['topsoil','Topsoil (1.0 t/yd³)'],['sand','Sand (1.3 t/yd³)']] }
    ],
    calc: (data) => {
      const L=+data.L, W=+data.W, depth=+data.depth, material=data.material as string;
      const cubicYd = (L * W * (depth / 12)) / 27;
      const tonsMap: Record<string, number> = {gravel: 1.4, topsoil: 1.0, sand: 1.3};
      const tons = cubicYd * tonsMap[material];
      return {
        main: cubicYd.toFixed(2), unit: 'CUBIC YARDS',
        detail: [
          ['Tons', tons.toFixed(2)],
          ['Area', (L * W).toFixed(0) + ' ft²'],
          ['Depth', depth + ' in'],
          ['Material', material]
        ]
      };
    }
  },
  {
    slug: 'fence-calculator',
    name: 'Fence',
    category: 'home',
    desc: 'Posts + panels',
    formula: 'posts = length ÷ spacing + 1',
    title: 'FENCE POSTS',
    metaTitle: 'Fence Calculator — Posts, Panels, and Concrete | ProjectCalc',
    metaDesc: 'Fence calculator. Enter total length and post spacing — get posts, panels, and concrete bags needed for a complete fence.',
    seoIntro: 'This fence calculator estimates the materials you need for a privacy or picket fence: posts, panels, and concrete for setting the posts. Standard wood fence posts are spaced 8 feet on center; vinyl can be 6 or 8 feet depending on the panel system. Each post hole typically takes 1–2 bags of 60lb concrete (for a 4x4 post in a 10-inch-wide hole, 2 feet deep).',
    note: 'Standard 8 ft post spacing. 2 bags of 60lb concrete per post is typical for a 6 ft fence. Add 1 to post count (you need posts on both ends).',
    inputs: [
      { id: 'L', label: 'Total fence length', unit: 'ft', default: 100, step: 1 },
      { id: 'spacing', label: 'Post spacing', unit: 'ft', default: 8, step: 1, tooltip: '8 ft is standard for wood; 6 or 8 ft for vinyl panels. Tighter spacing = more posts but stronger.' },
      { id: 'gates', label: 'Number of gates', unit: '', default: 1, step: 1 }
    ],
    calc: (data) => {
      const L=+data.L, spacing=+data.spacing, gates=+data.gates;
      const posts = Math.ceil(L / spacing) + 1 + gates;
      const panels = Math.ceil(L / spacing) - gates;
      const concreteBags = posts * 2;
      return {
        main: posts, unit: 'POSTS',
        detail: [
          ['Panels (8 ft)', panels],
          ['~60lb concrete bags', concreteBags],
          ['Gate posts (extra)', gates],
          ['Run length', L + ' ft']
        ]
      };
    }
  },
  {
    slug: 'deck-stain-calculator',
    name: 'Deck Stain',
    category: 'home',
    desc: 'Stain coverage',
    formula: 'gal = ft² ÷ 200',
    title: 'DECK STAIN',
    metaTitle: 'Deck Stain Calculator — How Much Stain Do You Need? | ProjectCalc',
    metaDesc: 'Deck stain calculator. Enter deck size and railing length — get gallons of stain or sealer needed for one or two coats.',
    seoIntro: 'This deck stain calculator tells you how many gallons of stain or sealer you need for a deck. Coverage depends on the wood condition: weathered or rough wood absorbs more (150 ft²/gal), while smooth or previously sealed wood gets full coverage (250 ft²/gal). The calculator includes deck surface plus railing area, which is often forgotten and accounts for 15–25% of total stain.',
    note: 'New/smooth wood: ~250 ft²/gal. Weathered: ~150 ft²/gal. Always do 2 coats for new applications.',
    inputs: [
      { id: 'L', label: 'Deck length', unit: 'ft', default: 16, step: 0.5 },
      { id: 'W', label: 'Deck width', unit: 'ft', default: 12, step: 0.5 },
      { id: 'railing', label: 'Railing perimeter', unit: 'ft', default: 30, step: 1 },
      { id: 'coats', label: 'Coats', unit: '', default: 2, step: 1 },
      { id: 'condition', label: 'Wood condition', unit: '', type: 'select', default: 'smooth',
        options: [['smooth','Smooth/sealed (250 ft²/gal)'],['weathered','Weathered/rough (150 ft²/gal)']] }
    ],
    calc: (data) => {
      const L=+data.L, W=+data.W, railing=+data.railing, coats=+data.coats, condition=data.condition as string;
      const deckArea = L * W;
      const railArea = railing * 4;
      const totalArea = deckArea + railArea;
      const coverage = condition === 'smooth' ? 250 : 150;
      const gallons = (totalArea * coats) / coverage;
      return {
        main: Math.ceil(gallons), unit: 'GALLONS',
        detail: [
          ['Deck area', deckArea.toFixed(0) + ' ft²'],
          ['Railing area', railArea.toFixed(0) + ' ft²'],
          ['Total to cover', (totalArea * coats).toFixed(0) + ' ft²'],
          ['Coverage / gal', coverage + ' ft²']
        ]
      };
    }
  },
  {
    slug: 'insulation-calculator',
    name: 'Insulation',
    category: 'home',
    desc: 'Batts needed',
    formula: 'batts = wall area ÷ batt sf',
    title: 'INSULATION BATTS',
    metaTitle: 'Insulation Calculator — Batts and Bags | ProjectCalc',
    metaDesc: 'Insulation calculator for batts. Enter wall length and pick R-value — get batts and bags needed.',
    seoIntro: 'This insulation calculator estimates the number of fiberglass or mineral wool batts you need for walls or ceilings. R-13 batts (for standard 2x4 walls with 16-inch-on-center studs) cover 32 ft² each in a typical 8-foot-tall wall. R-19 (for 2x6 walls) and R-30/R-38 (for ceilings) cover less per batt because they are wider or taller. Subtract 10% for studs, doors, and windows if you want net insulation; the calculator gives gross batts.',
    note: 'Standard R-13 batt covers 32 ft² (16" OC, 8 ft tall). Subtract ~10% for studs/openings for net.',
    inputs: [
      { id: 'L', label: 'Total wall length', unit: 'ft', default: 60, step: 1 },
      { id: 'H', label: 'Wall height', unit: 'ft', default: 8, step: 0.5 },
      { id: 'rval', label: 'R-value', unit: '', type: 'select', default: 'r13',
        tooltip: 'R-13 is for standard 2x4 walls. R-19 for 2x6 walls. R-30 and R-38 are for ceilings/attics.',
        options: [['r13','R-13 (2x4 wall)'],['r19','R-19 (2x6 wall)'],['r30','R-30 (ceiling)'],['r38','R-38 (ceiling)']] }
    ],
    calc: (data) => {
      const L=+data.L, H=+data.H, rval=data.rval as string;
      const area = L * H;
      const sfPerBatt: Record<string, number> = {r13: 32, r19: 24, r30: 24, r38: 16};
      const batts = Math.ceil(area / sfPerBatt[rval]);
      const bagsizes: Record<string, number> = {r13: 8, r19: 6, r30: 4, r38: 4};
      const bags = Math.ceil(batts / bagsizes[rval]);
      return {
        main: batts, unit: rval.toUpperCase() + ' BATTS',
        detail: [
          ['Wall area', area.toFixed(0) + ' ft²'],
          ['Coverage / batt', sfPerBatt[rval] + ' ft²'],
          ['~Bags needed', bags],
          ['Profile', rval.toUpperCase()]
        ]
      };
    }
  },
  {
    slug: 'siding-calculator',
    name: 'Siding',
    category: 'construction',
    trade: 'Masonry & Siding',
    desc: 'Squares needed',
    formula: 'squares = ft² ÷ 100',
    title: 'SIDING',
    metaTitle: 'Siding Calculator — Squares for Vinyl, Fiber Cement | ProjectCalc',
    metaDesc: 'Siding calculator. Subtract windows and doors from wall area — get squares of siding to order with 10% waste.',
    seoIntro: 'This siding calculator gives you the number of squares of siding (vinyl, fiber cement, lap, or panel) you need to cover the exterior of a house. One square equals 100 square feet of finished wall. Most siding is sold by the square at home centers and lumber yards. The calculator subtracts window and door area from gross wall area and applies a 10% waste factor.',
    note: '1 square = 100 ft² of finished wall. Vinyl, fiber cement, lap, panel — all sold by the square. 10% waste.',
    inputs: [
      { id: 'wallArea', label: 'Total wall area', unit: 'ft²', default: 1600, step: 50 },
      { id: 'openings', label: 'Window/door area to subtract', unit: 'ft²', default: 120, step: 10 }
    ],
    calc: (data) => {
      const wallArea=+data.wallArea, openings=+data.openings;
      const net = Math.max(0, wallArea - openings);
      const squares = (net / 100) * 1.10;
      return {
        main: squares.toFixed(2), unit: 'SQUARES',
        detail: [
          ['Gross wall area', wallArea.toFixed(0) + ' ft²'],
          ['Net (after openings)', net.toFixed(0) + ' ft²'],
          ['Waste factor', '10%'],
          ['Round up to', Math.ceil(squares) + ' sq']
        ]
      };
    }
  },
  {
    slug: 'sod-calculator',
    name: 'Sod',
    category: 'home',
    desc: 'Yard pallets',
    formula: 'pallets = ft² ÷ 450',
    title: 'SOD FOR YARD',
    metaTitle: 'Sod Calculator — Pallets for Your Yard | ProjectCalc',
    metaDesc: 'Sod calculator. Enter yard size minus hardscape — get pallets and rolls needed for a complete lawn install.',
    seoIntro: 'This sod calculator computes how many pallets of sod you need for a new lawn. A standard sod pallet covers about 450 square feet (varies by supplier; some are 400, some are 500). Individual rolls are typically 10 ft² each. Subtract any hardscape (driveways, walkways, beds) from your gross yard size to avoid over-ordering.',
    note: '1 pallet ≈ 450 ft² (varies by supplier, 400–500 typical). 1 pallet covers ~21×21 ft.',
    inputs: [
      { id: 'L', label: 'Yard length', unit: 'ft', default: 50, step: 1 },
      { id: 'W', label: 'Yard width', unit: 'ft', default: 30, step: 1 },
      { id: 'subtract', label: 'Hardscape to exclude', unit: 'ft²', default: 0, step: 10 }
    ],
    calc: (data) => {
      const L=+data.L, W=+data.W, subtract=+data.subtract;
      const gross = L * W;
      const net = Math.max(0, gross - subtract);
      const pallets = Math.ceil(net / 450);
      const rolls = Math.ceil(net / 10);
      return {
        main: pallets, unit: 'PALLETS',
        detail: [
          ['Gross area', gross.toLocaleString() + ' ft²'],
          ['Net to sod', net.toLocaleString() + ' ft²'],
          ['~Individual rolls', rolls.toLocaleString()],
          ['Coverage / pallet', '450 ft²']
        ]
      };
    }
  },
  {
    slug: 'brick-calculator',
    name: 'Brick',
    category: 'construction',
    trade: 'Masonry & Siding',
    desc: 'Bricks per wall',
    formula: 'bricks = ft² × 6.86',
    title: 'BRICK QUANTITY',
    metaTitle: 'Brick Calculator — How Many Bricks Per Wall | ProjectCalc',
    metaDesc: 'Brick calculator for modular brick walls. Get brick count and mortar bags including 5% waste.',
    seoIntro: 'This brick calculator estimates the number of modular bricks (7⅝ × 2¼ × 3⅝ inches) you need for a wall, plus the bags of mortar required to lay them. Modular brick with a standard ⅜-inch mortar joint runs 6.86 bricks per square foot. The calculator subtracts the area of windows and doors and adds 5% waste for breakage and cuts.',
    note: 'Modular brick (7⅝" × 2¼" × 3⅝") with ⅜" mortar joint = 6.86 bricks/ft². 5% waste for cuts.',
    inputs: [
      { id: 'L', label: 'Wall length', unit: 'ft', default: 20, step: 1 },
      { id: 'H', label: 'Wall height', unit: 'ft', default: 8, step: 0.5 },
      { id: 'opening', label: 'Openings (doors/windows)', unit: 'ft²', default: 0, step: 1 }
    ],
    calc: (data) => {
      const L=+data.L, H=+data.H, opening=+data.opening;
      const wallArea = (L * H) - opening;
      const bricks = Math.ceil(wallArea * 6.86 * 1.05);
      const mortarBags = Math.ceil(bricks / 125);
      return {
        main: bricks.toLocaleString(), unit: 'BRICKS',
        detail: [
          ['Net wall area', wallArea.toFixed(0) + ' ft²'],
          ['Per ft² (modular)', '6.86'],
          ['~Mortar bags (70 lb)', mortarBags],
          ['Includes 5% waste', '✓']
        ]
      };
    }
  },
  {
    slug: 'lumber-calculator',
    name: 'Lumber',
    category: 'construction',
    trade: 'Carpentry',
    desc: 'Studs · joists · rafters',
    formula: 'count = ⌈run·12 ÷ o.c.⌉ + 1',
    title: 'FRAMING LUMBER COUNT',
    metaTitle: 'Framing Calculator — Studs, Joists, Rafters | ProjectCalc',
    metaDesc: 'Free framing calculator. Pick wall studs, floor joists, ceiling joists, or rafters — enter dimensions and on-center spacing for piece count and linear feet.',
    seoIntro: 'This framing lumber calculator handles four of the most common rough-framing counts: wall studs, floor joists, ceiling joists, and roof rafters. Pick the framing type, enter the room or wall dimensions, choose your on-center spacing, and the calculator returns the piece count plus the supporting numbers a framer or estimator actually wants — pre-cut stud length for walls, total linear feet for joists, rafter pairs and per-rafter horizontal span for roofs. Standard residential spacing is 16" o.c.; engineered floors and advanced framing often run 19.2" or 24" o.c.; 12" o.c. is used in heavy-load or short-span situations.',
    note: 'Counts run-spacing pieces only. Add 2–3 studs per corner/T-intersection and 4 per opening for a full wall.',
    inputs: [
      { id: 'type', label: 'Framing type', unit: '', type: 'select', default: 'wall-stud',
        options: [['wall-stud','Wall studs'],['floor-joist','Floor joists'],['ceiling-joist','Ceiling joists'],['rafter','Rafters']] },
      { id: 'L', unit: 'ft', default: 12, step: 0.5,
        label: (d) => d.type === 'wall-stud' ? 'Wall length' : 'Room length (run)' },
      { id: 'W', unit: 'ft', default: 8, step: 0.5,
        label: (d) => d.type === 'wall-stud' ? 'Ceiling height (ft)' : 'Room width (span per piece, ft)',
        tooltip: (d) => d.type === 'rafter'
          ? 'Room width in feet — each rafter spans about half of this (plus pitch and overhang). Use the building width across the ridge.'
          : d.type === 'wall-stud'
            ? 'Ceiling height in FEET — typical range 7–12 ft. Drives the pre-cut stud length, not the count. Standard 8, 9, or 10 ft walls map to pre-cut studs (92-5/8", 104-5/8", 116-5/8").'
            : 'The dimension each joist spans, in feet — typically the shorter room dimension.' },
      { id: 'oc', label: 'On-center spacing', unit: '', type: 'select', default: '16',
        tooltip: 'On-center is the distance between the center of one piece and the center of the next. 16" is standard residential, 24" is common for ceiling joists and engineered floors, 19.2" appears in advanced framing layouts.',
        options: [['12','12" o.c. (heavy load)'],['16','16" o.c. (standard)'],['19.2','19.2" o.c. (advanced framing)'],['24','24" o.c.']] }
    ],
    calc: (data) => {
      const type = data.type as string;
      const L = +data.L, W = +data.W, oc = +data.oc;
      const count = Math.ceil((L * 12) / oc) + 1;

      if (type === 'wall-stud') {
        const plateLF = L * 3;
        const preCutMap: Record<string, string> = { '8': '92-5/8"', '9': '104-5/8"', '10': '116-5/8"' };
        let preCut: string;
        if (W < 6.5 || W > 14) {
          preCut = 'Check ceiling height — input is in FEET (typical 7–12)';
        } else if (preCutMap[String(W)]) {
          preCut = preCutMap[String(W)];
        } else {
          preCut = (W * 12 - 4.5).toFixed(2) + '" (custom: height − 4½")';
        }
        return {
          main: count, unit: 'WALL STUDS',
          detail: [
            ['Spacing', oc + '" o.c.'],
            ['Wall length', L + ' ft'],
            ['Pre-cut stud length', preCut],
            ['Plate stock (LF)', plateLF + ' ft (single bottom + double top)'],
            ['Heads-up', 'Add 2–3 studs per corner, 4 per opening']
          ]
        };
      }

      if (type === 'floor-joist' || type === 'ceiling-joist') {
        const totalLF = count * W;
        return {
          main: count, unit: type === 'floor-joist' ? 'FLOOR JOISTS' : 'CEILING JOISTS',
          detail: [
            ['Each piece length', W + ' ft (room span)'],
            ['Spacing', oc + '" o.c.'],
            ['Total linear feet', totalLF.toFixed(0) + ' ft'],
            ['Run length', L + ' ft'],
            ['Stock to order', count + ' × ' + W + ' ft']
          ]
        };
      }

      // rafter
      const pairs = count;
      const totalRafters = pairs * 2;
      const horizSpan = W / 2;
      return {
        main: totalRafters, unit: 'RAFTERS',
        detail: [
          ['Rafter pairs', pairs],
          ['Horiz span / rafter', horizSpan.toFixed(2) + ' ft (½ width)'],
          ['Spacing', oc + '" o.c.'],
          ['Roof length', L + ' ft'],
          ['Pitch note', 'Multiply horiz span by pitch factor for actual length']
        ]
      };
    }
  },
  {
    slug: 'voltage-drop-calculator',
    name: 'Voltage Drop',
    category: 'construction',
    trade: 'Electrical',
    desc: 'NEC compliance',
    formula: 'VD = 2·K·I·L ÷ CM',
    title: 'VOLTAGE DROP',
    metaTitle: 'Voltage Drop Calculator — NEC Compliance | ProjectCalc',
    metaDesc: 'NEC voltage drop calculator for copper wire. Enter voltage, amps, distance, and AWG — get drop volts and percent.',
    seoIntro: 'This voltage drop calculator computes the voltage lost in a copper wire run, which the NEC recommends keeping at or below 3% on branch circuits and 5% combined feeder + branch. Use one-way distance — the calculator doubles it for round-trip. K = 12.9 for copper at 75°C. For aluminum wire, multiply the drop by 1.6.',
    note: 'NEC recommends ≤3% drop on branch circuits, ≤5% total. K = 12.9 for copper.',
    inputs: [
      { id: 'V', label: 'System voltage', unit: 'V', default: 120, step: 1 },
      { id: 'I', label: 'Current load', unit: 'A', default: 15, step: 1 },
      { id: 'L', label: 'One-way distance', unit: 'ft', default: 50, step: 5 },
      { id: 'awg', label: 'Wire size (AWG copper)', unit: '', type: 'select', default: '12',
        tooltip: 'AWG = American Wire Gauge. Lower numbers = thicker wire. 14 AWG for 15A circuits, 12 AWG for 20A, 10 AWG for 30A.',
        options: [['14','14 AWG (4110 CM)'],['12','12 AWG (6530 CM)'],['10','10 AWG (10380 CM)'],['8','8 AWG (16510 CM)'],['6','6 AWG (26240 CM)'],['4','4 AWG (41740 CM)'],['2','2 AWG (66360 CM)'],['1/0','1/0 AWG (105600 CM)']]}
    ],
    calc: (data) => {
      const V=+data.V, I=+data.I, L=+data.L, awg=data.awg as string;
      const cmTable: Record<string, number> = {'14':4110,'12':6530,'10':10380,'8':16510,'6':26240,'4':41740,'2':66360,'1/0':105600};
      const CM = cmTable[awg];
      const VD = (2 * 12.9 * I * L) / CM;
      const pct = (VD / V) * 100;
      const status = pct <= 3 ? 'OK — within NEC' : pct <= 5 ? 'Marginal — upsize if possible' : 'TOO HIGH — upsize wire';
      return {
        main: VD.toFixed(2), unit: 'VOLTS DROPPED',
        detail: [
          ['Drop %', pct.toFixed(2) + '%'],
          ['Voltage at load', (V - VD).toFixed(2) + ' V'],
          ['Wire CM', CM.toLocaleString()],
          ['Status', status]
        ]
      };
    }
  },
  {
    slug: 'btu-calculator',
    name: 'AC BTU',
    category: 'construction',
    trade: 'HVAC',
    desc: 'Cooling load',
    formula: 'BTU ≈ ft² × 20 × adj',
    title: 'AC BTU SIZING',
    metaTitle: 'BTU Calculator — Air Conditioner Sizing | ProjectCalc',
    metaDesc: 'Free AC BTU calculator. Enter room size, sun exposure, and occupants — get cooling BTUs and recommended unit size.',
    seoIntro: 'This BTU calculator gives a quick rule-of-thumb cooling load for sizing an air conditioner. The base rule is 20 BTU per square foot of room area, adjusted for sun exposure (±10%) and adding 600 BTU per occupant above two. For tight specs in commercial or unusual residential spaces, an HVAC contractor should run a Manual J load calculation. 12,000 BTU/hr equals one ton of cooling.',
    note: 'Rule of thumb. For tight specs use Manual J. Add 600 BTU/person above 2.',
    inputs: [
      { id: 'sqft', label: 'Room square footage', unit: 'ft²', default: 200, step: 10 },
      { id: 'sun', label: 'Sun exposure', unit: '', default: 'normal', type: 'select',
        options: [['shaded','Heavily shaded (-10%)'],['normal','Normal'],['sunny','Very sunny (+10%)']] },
      { id: 'occ', label: 'Occupants (regular)', unit: 'ppl', default: 2, step: 1 }
    ],
    calc: (data) => {
      const sqft=+data.sqft, sun=data.sun as string, occ=+data.occ;
      let base = sqft * 20;
      if (sun === 'shaded') base *= 0.9;
      if (sun === 'sunny') base *= 1.1;
      const extra = Math.max(0, occ - 2) * 600;
      const total = base + extra;
      const tons = total / 12000;
      return {
        main: total.toLocaleString(undefined, {maximumFractionDigits: 0}), unit: 'BTU / HR',
        detail: [
          ['Cooling tons', tons.toFixed(2)],
          ['Base load', Math.round(base).toLocaleString()],
          ['Occupant load', extra.toLocaleString()],
          ['Suggested unit', tons < 1 ? '0.75 ton' : tons < 1.5 ? '1.0 ton' : tons < 2 ? '1.5 ton' : tons < 2.5 ? '2.0 ton' : tons < 3 ? '2.5 ton' : tons < 3.5 ? '3.0 ton' : '3.5+ ton']
        ]
      };
    }
  },
  {
    slug: 'pipe-volume-calculator',
    name: 'Pipe Volume',
    category: 'construction',
    trade: 'Plumbing',
    desc: 'Water capacity',
    formula: 'V = π·r²·L ÷ 231',
    title: 'PIPE VOLUME',
    metaTitle: 'Pipe Volume Calculator — Gallons of Water | ProjectCalc',
    metaDesc: 'Pipe volume calculator. Enter inside diameter and length — get gallons of water capacity for any straight pipe run.',
    seoIntro: 'This pipe volume calculator gives the water capacity of a single straight pipe run in gallons, cubic inches, and liters. Useful for sizing water heaters, calculating purge volumes for plumbing, or estimating fill time. Multiply the result by the number of identical runs for total system volume. Diameter is the inside diameter (ID), not the nominal size.',
    note: 'Calculates a single straight pipe run. Multiply by number of runs as needed.',
    inputs: [
      { id: 'd', label: 'Pipe inside diameter', unit: 'in', default: 0.75, step: 0.125 },
      { id: 'L', label: 'Pipe length', unit: 'ft', default: 50, step: 1 }
    ],
    calc: (data) => {
      const d=+data.d, L=+data.L;
      const r = d / 2;
      const cubicIn = Math.PI * r * r * (L * 12);
      const gal = cubicIn / 231;
      const liters = gal * 3.7854;
      return {
        main: gal.toFixed(2), unit: 'GALLONS',
        detail: [
          ['Cubic inches', cubicIn.toFixed(0)],
          ['Liters', liters.toFixed(2)],
          ['Pipe ID', d + '"'],
          ['Length', L + ' ft']
        ]
      };
    }
  },
  {
    slug: 'lumber-cut-calculator',
    name: 'Lumber Cuts',
    category: 'construction',
    trade: 'Carpentry',
    desc: 'Boards & waste',
    formula: 'cuts/board = stock ÷ (cut + kerf)',
    title: 'LUMBER CUT LIST',
    metaTitle: 'Lumber Cut Calculator — Boards Needed & Waste | ProjectCalc',
    metaDesc: 'Free lumber cut calculator for framers. Enter stock length, cut length, and quantity — get boards needed, cuts per board, and waste percent.',
    seoIntro: 'This lumber cut calculator tells a framer or finish carpenter exactly how many boards to buy when every cut is the same length — wall studs, blocking, cripples, jack rafters, fascia returns, deck balusters, fence pickets. Pick the stock length you can buy at the lumberyard, enter the length each cut needs to be, set how many cuts the job calls for, and the calculator subtracts a saw kerf (default 1/8") from each cut. The output is the cuts you can get per board, total boards needed (rounded up), and the leftover waste per stick. For a mixed cut list, run the calculator separately for each unique length and add the boards together.',
    note: 'Kerf-aware (default 1/8"). For mixed cut lists, run separately per length and sum.',
    inputs: [
      { id: 'stock', label: 'Stock board length', unit: '', type: 'select', default: '96',
        options: [['72','6 ft (72")'],['96','8 ft (96")'],['120','10 ft (120")'],['144','12 ft (144")'],['168','14 ft (168")'],['192','16 ft (192")'],['240','20 ft (240")']] },
      { id: 'cut', label: 'Cut length', unit: 'in', default: 92.625, step: 0.125,
        tooltip: 'Pre-cut wall stud is 92-5/8" (8 ft wall) or 104-5/8" (9 ft wall). 16" o.c. cripples are 14-1/2".' },
      { id: 'qty', label: 'Total cuts needed', unit: '', default: 30, step: 1 },
      { id: 'kerf', label: 'Saw kerf', unit: 'in', default: 0.125, step: 0.0625,
        tooltip: 'Width of material removed by the saw blade. 1/8" is standard for circular and miter saws; thin-kerf framing blades run 3/32".' }
    ],
    calc: (data) => {
      const stock = +data.stock, cut = +data.cut, qty = +data.qty, kerf = +data.kerf;
      const cutsPerBoard = Math.floor(stock / (cut + kerf));
      if (cutsPerBoard === 0) {
        return {
          main: 'N/A', unit: 'CUT TOO LONG',
          detail: [
            ['Issue', 'Cut length exceeds stock board'],
            ['Stock', (stock / 12).toFixed(2) + ' ft'],
            ['Cut', cut + '"'],
            ['Fix', 'Pick longer stock or use a scarf joint']
          ]
        };
      }
      const boards = Math.ceil(qty / cutsPerBoard);
      const wastePerBoard = stock - cutsPerBoard * (cut + kerf);
      const cutsOnLast = qty - cutsPerBoard * (boards - 1);
      const totalLinearIn = boards * stock;
      const totalUsedIn = qty * cut;
      const wastePct = ((totalLinearIn - totalUsedIn) / totalLinearIn) * 100;
      return {
        main: boards, unit: 'BOARDS NEEDED',
        detail: [
          ['Cuts per board', cutsPerBoard],
          ['Cuts on last board', cutsOnLast],
          ['Waste per board', wastePerBoard.toFixed(2) + '"'],
          ['Total waste', wastePct.toFixed(1) + '%'],
          ['Stock length', (stock / 12).toFixed(0) + ' ft']
        ]
      };
    }
  },
  {
    slug: 'conduit-fill-calculator',
    name: 'Conduit Fill',
    category: 'construction',
    trade: 'Electrical',
    desc: 'NEC % fill check',
    formula: 'fill% = (n · A_wire) ÷ A_conduit',
    title: 'CONDUIT FILL',
    metaTitle: 'Conduit Fill Calculator — NEC Chapter 9 EMT | ProjectCalc',
    metaDesc: 'Free conduit fill calculator. Enter EMT size, wire AWG, and conductor count — get NEC fill percent and pass/fail status.',
    seoIntro: 'This conduit fill calculator checks whether the wires you plan to pull fit inside an EMT (Electrical Metallic Tubing) run within NEC limits. NEC Chapter 9 caps fill at 53% for one conductor, 31% for two, and 40% for three or more. Wire areas are taken from NEC Chapter 9 Table 5 (THHN/THWN-2) and conduit internal areas from Table 4. Use it on rough-in or feeder runs to confirm the conduit size you spec\'d will pass inspection.',
    note: 'NEC fill limits: 53% (1 wire), 31% (2 wires), 40% (3+). EMT + THHN/THWN-2 only.',
    inputs: [
      { id: 'conduit', label: 'EMT size', unit: '', type: 'select', default: '0.75',
        options: [['0.5','½" (0.304 in²)'],['0.75','¾" (0.533 in²)'],['1','1" (0.864 in²)'],['1.25','1¼" (1.496 in²)'],['1.5','1½" (2.036 in²)'],['2','2" (3.356 in²)']] },
      { id: 'awg', label: 'Wire AWG (THHN/THWN-2)', unit: '', type: 'select', default: '12',
        tooltip: 'AWG = American Wire Gauge. Lower numbers = thicker wire. 14 AWG for 15A circuits, 12 AWG for 20A, 10 AWG for 30A.',
        options: [['14','14 AWG (0.0097 in²)'],['12','12 AWG (0.0133 in²)'],['10','10 AWG (0.0211 in²)'],['8','8 AWG (0.0366 in²)'],['6','6 AWG (0.0507 in²)'],['4','4 AWG (0.0824 in²)'],['2','2 AWG (0.1158 in²)'],['1/0','1/0 AWG (0.1855 in²)']] },
      { id: 'n', label: 'Number of conductors', unit: '', default: 3, step: 1 }
    ],
    calc: (data) => {
      const conduit = data.conduit as string, awg = data.awg as string, n = +data.n;
      const conduitArea: Record<string, number> = {'0.5':0.304,'0.75':0.533,'1':0.864,'1.25':1.496,'1.5':2.036,'2':3.356};
      const wireArea: Record<string, number> = {'14':0.0097,'12':0.0133,'10':0.0211,'8':0.0366,'6':0.0507,'4':0.0824,'2':0.1158,'1/0':0.1855};
      const Acon = conduitArea[conduit];
      const Awire = wireArea[awg];
      const totalWireArea = n * Awire;
      const pct = (totalWireArea / Acon) * 100;
      const limit = n === 1 ? 53 : n === 2 ? 31 : 40;
      const status = pct <= limit ? 'OK — within NEC' : 'TOO HIGH — upsize conduit';
      return {
        main: pct.toFixed(1), unit: '% FILL',
        detail: [
          ['NEC limit', limit + '%'],
          ['Status', status],
          ['Conductor area', totalWireArea.toFixed(4) + ' in²'],
          ['Conduit area', Acon + ' in²'],
          ['Headroom', (limit - pct).toFixed(1) + '%']
        ]
      };
    }
  },
  {
    slug: 'pipe-slope-calculator',
    name: 'Pipe Slope',
    category: 'construction',
    trade: 'Plumbing',
    desc: 'Drain drop & grade',
    formula: 'drop = run × slope/ft',
    title: 'PIPE SLOPE',
    metaTitle: 'Pipe Slope Calculator — Drain Drop & Grade | ProjectCalc',
    metaDesc: 'Drain pipe slope calculator. Enter run length and pitch — get total drop in inches, grade percent, and IPC/UPC reference.',
    seoIntro: 'This pipe slope calculator gives the total drop and grade percent for a drain or sewer line. The IPC and UPC plumbing codes require a minimum 1/4" per foot fall on horizontal drains 2.5" and smaller, and 1/8" per foot on 3" and larger pipe (some jurisdictions allow 1/16" per foot on 8"+ pipe with engineering approval). Too little slope and solids settle out of the flow; too much (above 1/2" per ft) and water outruns the solids — both end the same way, with a clog.',
    note: 'IPC/UPC: 1/4"/ft for ≤2.5" pipe, 1/8"/ft for 3"+. Don\'t exceed 1/2"/ft.',
    inputs: [
      { id: 'L', label: 'Pipe run length', unit: 'ft', default: 20, step: 1 },
      { id: 'slope', label: 'Slope per foot', unit: '', type: 'select', default: '0.25',
        tooltip: 'Slope is the vertical drop per linear foot of run. Code minimum depends on pipe diameter.',
        options: [['0.0625','1/16" per ft (8"+ pipe, where allowed)'],['0.125','1/8" per ft (3"+ pipe)'],['0.25','1/4" per ft (≤2.5" pipe — most common)'],['0.5','1/2" per ft (max — steeper risks scouring)']] }
    ],
    calc: (data) => {
      const L = +data.L, slope = +data.slope;
      const dropIn = L * slope;
      const dropFt = dropIn / 12;
      const gradePct = (dropFt / L) * 100;
      const slopeLabel = slope === 0.0625 ? '1/16"' : slope === 0.125 ? '1/8"' : slope === 0.25 ? '1/4"' : '1/2"';
      return {
        main: dropIn.toFixed(2), unit: 'INCHES OF DROP',
        detail: [
          ['Drop in feet', dropFt.toFixed(3) + ' ft'],
          ['Grade', gradePct.toFixed(2) + '%'],
          ['Slope', slopeLabel + ' per ft'],
          ['Run length', L + ' ft']
        ]
      };
    }
  },
  {
    slug: 'water-supply-pipe-size-calculator',
    name: 'Water Supply Size',
    category: 'construction',
    trade: 'Plumbing',
    desc: 'Supply pipe diameter',
    formula: 'size = f(Σ WSFU)',
    title: 'WATER SUPPLY PIPE',
    metaTitle: 'Water Supply Pipe Sizing Calculator — WSFU to Pipe Diameter | ProjectCalc',
    metaDesc: 'Free water supply pipe sizing calculator. Enter your home\'s fixtures — get the minimum copper/CPVC and PEX supply pipe diameter per IPC.',
    seoIntro: 'This water supply pipe sizing calculator gives the minimum supply pipe diameter for a residential service line, based on the fixtures it serves. Enter how many full baths, kitchens, washing machines, and hose bibs the line feeds; the calculator sums Water Supply Fixture Units (WSFU) per IPC Table E202.1, then picks the smallest pipe that can carry that demand at typical residential pressure (40–60 psi static). Copper Type L and CPVC use the nominal size returned. PEX has a smaller inside diameter for the same nominal size, so the PEX answer is bumped up one size for equivalent flow.',
    note: 'Residential service entry, 40–60 psi static. PEX is bumped one nominal size vs copper because of thinner ID.',
    inputs: [
      { id: 'fullBath', label: 'Full bathrooms', unit: '', default: 2, step: 1,
        tooltip: 'A full bath = toilet + lavatory + tub/shower. Counts as 7 WSFU per IPC.' },
      { id: 'halfBath', label: 'Half baths (powder rooms)', unit: '', default: 0, step: 1,
        tooltip: 'Toilet + lavatory only. Counts as 3.5 WSFU.' },
      { id: 'kitchen', label: 'Kitchen sinks', unit: '', default: 1, step: 1 },
      { id: 'dishwasher', label: 'Dishwashers', unit: '', default: 1, step: 1 },
      { id: 'washer', label: 'Clothes washers', unit: '', default: 1, step: 1 },
      { id: 'hose', label: 'Outdoor hose bibs', unit: '', default: 2, step: 1 }
    ],
    calc: (data) => {
      const fb = +data.fullBath, hb = +data.halfBath, k = +data.kitchen, dw = +data.dishwasher, w = +data.washer, h = +data.hose;
      const wsfu = fb * 7 + hb * 3.5 + k * 1.5 + dw * 1.4 + w * 4 + h * 2.5;
      const sizes: [number, string][] = [[2, '½"'], [14, '¾"'], [32, '1"'], [50, '1¼"'], [90, '1½"'], [200, '2"']];
      const pexBump: Record<string, string> = { '½"': '¾"', '¾"': '1"', '1"': '1¼"', '1¼"': '1½"', '1½"': '2"', '2"': '2"' };
      let copper = '2"';
      for (const [max, sz] of sizes) {
        if (wsfu <= max) { copper = sz; break; }
      }
      const pex = pexBump[copper] ?? copper;
      const peakGpm = (wsfu < 6) ? wsfu * 1.5 : 5 + Math.sqrt(wsfu) * 1.8;
      return {
        main: copper, unit: 'COPPER / CPVC SIZE',
        detail: [
          ['Total WSFU', wsfu.toFixed(1)],
          ['PEX equivalent', pex],
          ['Estimated peak demand', peakGpm.toFixed(1) + ' GPM'],
          ['Code reference', 'IPC Table E202.1 / 604.5'],
          ['Pressure assumption', '40–60 psi static']
        ]
      };
    }
  },
  {
    slug: 'drain-pipe-size-calculator',
    name: 'Drain Pipe Size',
    category: 'construction',
    trade: 'Plumbing',
    desc: 'DWV drain diameter',
    formula: 'size = f(Σ DFU)',
    title: 'DRAIN PIPE SIZE',
    metaTitle: 'Drain Pipe Sizing Calculator — DFU to Pipe Diameter | ProjectCalc',
    metaDesc: 'Free drain pipe size calculator. Enter the fixtures on the branch — get the minimum DWV pipe diameter per IPC Table 710.1.',
    seoIntro: 'This drain pipe sizing calculator returns the minimum diameter for a horizontal drain branch carrying a given set of fixtures. Sum of Drainage Fixture Units (DFU) is computed from the fixture counts you enter, then matched against IPC Table 710.1 limits. The output is the smallest pipe size that handles the load — anything smaller risks slow flow or backups; anything larger is wasted material and grade. For a soil stack carrying multiple branches, sum the branch DFUs and oversize accordingly.',
    note: 'Horizontal branch sizing per IPC Table 710.1. For full stacks or building drains, sum branch DFUs and consult code tables.',
    inputs: [
      { id: 'wc', label: 'Water closets (toilets)', unit: '', default: 2, step: 1,
        tooltip: 'Modern 1.28–1.6 GPF toilets count as 3 DFU each (IPC).' },
      { id: 'lav', label: 'Lavatories (bathroom sinks)', unit: '', default: 2, step: 1 },
      { id: 'shower', label: 'Showers', unit: '', default: 1, step: 1 },
      { id: 'tub', label: 'Bathtubs', unit: '', default: 1, step: 1 },
      { id: 'ks', label: 'Kitchen sinks', unit: '', default: 1, step: 1 },
      { id: 'dw', label: 'Dishwashers', unit: '', default: 1, step: 1 },
      { id: 'cw', label: 'Clothes washers (standpipe)', unit: '', default: 1, step: 1 },
      { id: 'fd', label: 'Floor drains', unit: '', default: 0, step: 1 }
    ],
    calc: (data) => {
      const wc=+data.wc, lav=+data.lav, sh=+data.shower, tub=+data.tub, ks=+data.ks, dw=+data.dw, cw=+data.cw, fd=+data.fd;
      const dfu = wc * 3 + lav * 1 + sh * 2 + tub * 2 + ks * 2 + dw * 2 + cw * 3 + fd * 2;
      const sizes: [number, string][] = [[1, '1¼"'], [3, '1½"'], [6, '2"'], [12, '2½"'], [20, '3"'], [160, '4"'], [620, '6"']];
      let pipe = '6"';
      for (const [max, sz] of sizes) {
        if (dfu <= max) { pipe = sz; break; }
      }
      const minSlope = (pipe === '1¼"' || pipe === '1½"' || pipe === '2"' || pipe === '2½"') ? '¼" per ft' : '⅛" per ft';
      const wcWarn = wc > 0 && (pipe === '1¼"' || pipe === '1½"' || pipe === '2"') ? 'Toilets require ≥3" branch — upsize to 3".' : '';
      const finalPipe = wcWarn ? '3"' : pipe;
      return {
        main: finalPipe, unit: 'MIN DRAIN SIZE',
        detail: [
          ['Total DFU', dfu.toFixed(0)],
          ['Min slope', minSlope],
          ['Toilet rule', wc > 0 ? '≥3" required (any branch carrying a WC)' : 'No WC on branch'],
          ['Code reference', 'IPC Table 710.1'],
          ['Note', wcWarn || 'Sized for horizontal branch']
        ]
      };
    }
  },
  {
    slug: 'vent-pipe-size-calculator',
    name: 'Vent Pipe Size',
    category: 'construction',
    trade: 'Plumbing',
    desc: 'Vent diameter',
    formula: 'vent ≥ ½ drain, min 1¼"',
    title: 'VENT PIPE SIZE',
    metaTitle: 'Vent Pipe Size Calculator — DWV Vent Sizing | ProjectCalc',
    metaDesc: 'Free vent pipe sizing calculator. Enter drain size, vented DFUs, and developed length — get the minimum vent diameter per IPC.',
    seoIntro: 'This vent pipe sizing calculator returns the minimum vent diameter for a residential branch vent or stack vent. Per IPC Section 906, every vent must be at least half the diameter of the drain it serves, never less than 1¼", and never more than half the developed length its size allows in IPC Table 906.1. Enter the drain size, total DFUs being vented, and developed length of the vent run; the calculator picks the smallest size that satisfies all three rules. For commercial loads (hundreds of DFUs) or unusual vent configurations like circuit or relief venting, defer to the full code table.',
    note: 'Residential branch / stack vents per IPC 906. Vent ≥ ½ drain diameter, ≥ 1¼", and within Table 906.1 length limits.',
    inputs: [
      { id: 'drain', label: 'Drain pipe being vented', unit: '', type: 'select', default: '2',
        tooltip: 'Nominal diameter of the drain pipe the vent serves.',
        options: [['1.25','1¼"'],['1.5','1½"'],['2','2"'],['3','3"'],['4','4"']] },
      { id: 'dfu', label: 'Total DFU on vented branch', unit: '', default: 8, step: 1,
        tooltip: 'Sum of drainage fixture units served by this vent. Use the drain pipe sizing calculator to compute.' },
      { id: 'len', label: 'Developed vent length', unit: 'ft', default: 25, step: 1,
        tooltip: 'Total length of vent pipe from the trap arm to the open air, including all fittings (each elbow ~1 ft equivalent).' }
    ],
    calc: (data) => {
      const drain = +data.drain, dfu = +data.dfu, len = +data.len;
      const halfDrain = drain / 2;
      const minByHalf = Math.max(1.25, halfDrain);
      const sizes = [1.25, 1.5, 2, 3, 4];
      // IPC Table 906.1 simplified: max DFU and length per vent size
      // [size, maxDFU, maxLengthFt]
      const table: [number, number, number][] = [
        [1.25, 1, 45],
        [1.5, 8, 60],
        [2, 24, 120],
        [3, 84, 212],
        [4, 256, 300],
      ];
      let pick = 4;
      for (const sz of sizes) {
        if (sz < minByHalf) continue;
        const row = table.find(r => r[0] === sz);
        if (!row) continue;
        if (dfu <= row[1] && len <= row[2]) { pick = sz; break; }
      }
      const fmt = (n: number) => n === 1.25 ? '1¼"' : n === 1.5 ? '1½"' : n === 2 ? '2"' : n === 3 ? '3"' : '4"';
      const pickRow = table.find(r => r[0] === pick)!;
      return {
        main: fmt(pick), unit: 'MIN VENT SIZE',
        detail: [
          ['Drain served', fmt(drain)],
          ['Half-drain rule', '≥ ' + fmt(minByHalf)],
          ['DFU served', dfu + ' (limit at this size: ' + pickRow[1] + ')'],
          ['Developed length', len + ' ft (limit at this size: ' + pickRow[2] + ' ft)'],
          ['Code reference', 'IPC 906 / Table 906.1']
        ]
      };
    }
  },
  {
    slug: 'pressure-loss-calculator',
    name: 'Pressure Loss',
    category: 'construction',
    trade: 'Plumbing',
    desc: 'Friction loss (Hazen-Williams)',
    formula: 'h = 4.52·L·Q^1.852 ÷ (C^1.852·D^4.87)',
    title: 'PRESSURE LOSS',
    metaTitle: 'Pressure Loss Calculator — Hazen-Williams Friction Loss | ProjectCalc',
    metaDesc: 'Free pressure loss calculator using the Hazen-Williams formula. Enter pipe size, flow, and length — get friction loss in PSI plus velocity check.',
    seoIntro: 'This pressure loss calculator computes friction loss in a water supply line using the Hazen-Williams equation. Pick the pipe material (different roughness coefficients), nominal size (which determines inside diameter), flow rate, and run length. The output is total head loss in feet, pressure drop in PSI, and water velocity in feet per second — exceeding 8 fps cold or 5 fps hot causes erosion, noise, and water hammer regardless of how the friction math looks. Use this for long service runs, multi-story buildings, irrigation mains, and any branch where the fixture at the dead end is losing pressure.',
    note: 'Hazen-Williams. Velocity should stay <8 fps cold, <5 fps hot. Old galvanized C-factor drops to 60–80 over decades.',
    inputs: [
      { id: 'material', label: 'Pipe material', unit: '', type: 'select', default: 'copper-l',
        tooltip: 'Hazen-Williams C-factor: copper Type L = 140, PEX = 150, CPVC = 150, new galvanized = 100 (drops to 60–80 with age).',
        options: [['copper-l','Copper Type L (C=140)'],['pex','PEX-A (C=150)'],['cpvc','CPVC (C=150)'],['galv','Galvanized steel (C=100)']] },
      { id: 'size', label: 'Nominal pipe size', unit: '', type: 'select', default: '0.75',
        options: [['0.5','½"'],['0.75','¾"'],['1','1"'],['1.25','1¼"'],['1.5','1½"'],['2','2"']] },
      { id: 'gpm', label: 'Flow rate', unit: 'GPM', default: 8, step: 0.5 },
      { id: 'length', label: 'Run length (developed)', unit: 'ft', default: 100, step: 5,
        tooltip: 'Total straight-pipe length plus equivalent length for fittings (each elbow ≈ 2 ft, each tee ≈ 5 ft equivalent).' }
    ],
    calc: (data) => {
      const material = data.material as string, size = data.size as string;
      const gpm = +data.gpm, len = +data.length;
      const cFactors: Record<string, number> = { 'copper-l': 140, 'pex': 150, 'cpvc': 150, 'galv': 100 };
      // Inside diameters by material + nominal size (inches)
      const ids: Record<string, Record<string, number>> = {
        'copper-l': { '0.5': 0.545, '0.75': 0.785, '1': 1.025, '1.25': 1.265, '1.5': 1.505, '2': 1.985 },
        'pex':      { '0.5': 0.475, '0.75': 0.671, '1': 0.862, '1.25': 1.053, '1.5': 1.243, '2': 1.718 },
        'cpvc':     { '0.5': 0.469, '0.75': 0.695, '1': 0.874, '1.25': 1.101, '1.5': 1.394, '2': 1.836 },
        'galv':     { '0.5': 0.622, '0.75': 0.824, '1': 1.049, '1.25': 1.380, '1.5': 1.610, '2': 2.067 },
      };
      const C = cFactors[material];
      const D = ids[material][size];
      // Hazen-Williams head loss in feet per 100 ft, then scale to length
      const headLoss = 4.52 * Math.pow(gpm, 1.852) / (Math.pow(C, 1.852) * Math.pow(D, 4.87)) * len;
      const psi = headLoss * 0.433;
      // Velocity in fps: V = Q × 0.4085 / D²  (Q in GPM, D in inches)
      const velocity = (gpm * 0.4085) / (D * D);
      const velOK = velocity < 8 ? 'OK' : velocity < 10 ? 'HIGH — noise risk' : 'TOO HIGH — erosion risk';
      return {
        main: psi.toFixed(2), unit: 'PSI LOSS',
        detail: [
          ['Head loss', headLoss.toFixed(2) + ' ft'],
          ['Velocity', velocity.toFixed(2) + ' fps (' + velOK + ')'],
          ['Inside diameter', D + '"'],
          ['C-factor', C],
          ['Per 100 ft', (psi * 100 / len).toFixed(2) + ' PSI']
        ]
      };
    }
  },
  {
    slug: 'gpm-to-pipe-size-calculator',
    name: 'GPM to Pipe Size',
    category: 'construction',
    trade: 'Plumbing',
    desc: 'Flow rate sizing',
    formula: 'D ≥ √(Q ÷ 19.6) for V ≤ 8 fps',
    title: 'GPM TO PIPE SIZE',
    metaTitle: 'GPM to Pipe Size Calculator — Flow Rate Sizing | ProjectCalc',
    metaDesc: 'Free flow rate to pipe size calculator. Enter your required GPM and get the minimum pipe diameter for copper, PEX, CPVC, and steel.',
    seoIntro: 'This GPM to pipe size calculator returns the smallest nominal pipe diameter that can carry a given flow rate while keeping water velocity below 8 feet per second on cold lines (5 fps on hot). Velocity above those thresholds causes pipe erosion, water hammer, and audible flow noise — issues that don\'t show up in friction-loss math but ruin a system. Use this for irrigation mains, hose bib supply, custom water features, mechanical room piping, and any application where you know the flow demand directly rather than summing fixture units.',
    note: 'Velocity-based sizing per industry practice: ≤8 fps cold, ≤5 fps hot. Bump up one size for hot water service.',
    inputs: [
      { id: 'gpm', label: 'Required flow rate', unit: 'GPM', default: 12, step: 0.5 },
      { id: 'service', label: 'Service type', unit: '', type: 'select', default: 'cold',
        tooltip: 'Hot water uses lower max velocity (5 fps vs 8 fps) because temperature accelerates erosion at the same flow rate.',
        options: [['cold','Cold water (max 8 fps)'],['hot','Hot water (max 5 fps)']] }
    ],
    calc: (data) => {
      const gpm = +data.gpm;
      const service = data.service as string;
      const maxV = service === 'hot' ? 5 : 8;
      // D_min = sqrt(Q × 0.4085 / V_max), inches
      const dMinIn = Math.sqrt((gpm * 0.4085) / maxV);
      // Nominal sizes with inside diameters (use copper Type L as reference)
      const sizes: [string, number][] = [
        ['½"', 0.545], ['¾"', 0.785], ['1"', 1.025], ['1¼"', 1.265],
        ['1½"', 1.505], ['2"', 1.985], ['2½"', 2.465], ['3"', 2.945]
      ];
      let copperSize = '3"+';
      for (const [label, id] of sizes) {
        if (id >= dMinIn) { copperSize = label; break; }
      }
      const pexBump: Record<string, string> = { '½"':'¾"', '¾"':'1"', '1"':'1¼"', '1¼"':'1½"', '1½"':'2"', '2"':'2½"', '2½"':'3"', '3"':'3"' };
      const pexSize = pexBump[copperSize] ?? copperSize;
      return {
        main: copperSize, unit: 'COPPER / CPVC SIZE',
        detail: [
          ['Min ID needed', dMinIn.toFixed(3) + '"'],
          ['Max velocity', maxV + ' fps'],
          ['PEX equivalent', pexSize],
          ['Service', service === 'hot' ? 'Hot water' : 'Cold water'],
          ['Note', 'Verify friction loss separately for runs >100 ft']
        ]
      };
    }
  },
  {
    slug: 'trap-size-calculator',
    name: 'Trap Size',
    category: 'construction',
    trade: 'Plumbing',
    desc: 'Trap diameter by fixture',
    formula: 'IPC Table 1002.1',
    title: 'TRAP SIZE',
    metaTitle: 'Plumbing Trap Size Calculator — Diameter by Fixture | ProjectCalc',
    metaDesc: 'Free plumbing trap size calculator. Pick the fixture and get the minimum trap diameter, DFU, and required vent size per IPC Table 1002.1.',
    seoIntro: 'Every plumbing fixture needs a trap — a U-shape that holds water as a barrier against sewer gas — and the IPC specifies a minimum trap size for each fixture type in Table 1002.1. Use this trap size calculator to confirm you\'re installing the right trap diameter when replacing a fixture, roughing in new construction, or troubleshooting a slow-draining or gurgling fixture (often a sign the trap is undersized or the trap arm too long). The output also includes DFU value and minimum vent size, so you can size the rest of the branch in one pass.',
    note: 'IPC Table 1002.1. WCs have integral 3" traps cast into the porcelain — no separate trap needed.',
    inputs: [
      { id: 'fixture', label: 'Fixture type', unit: '', type: 'select', default: 'lavatory',
        options: [
          ['lavatory','Lavatory (bathroom sink)'],
          ['bidet','Bidet'],
          ['drinking-fountain','Drinking fountain'],
          ['kitchen-sink','Kitchen sink (single or double bowl)'],
          ['bar-sink','Bar / prep sink'],
          ['laundry-tub','Laundry tub'],
          ['bathtub','Bathtub'],
          ['shower','Shower stall'],
          ['floor-drain','Floor drain'],
          ['washer','Clothes washer standpipe'],
          ['urinal','Urinal'],
          ['dishwasher','Dishwasher (separate trap)'],
          ['wc','Water closet (toilet)'],
        ] }
    ],
    calc: (data) => {
      const f = data.fixture as string;
      // [trap size, branch min, DFU, vent min]
      const table: Record<string, [string, string, number, string]> = {
        'lavatory':         ['1¼"', '1¼"', 1, '1¼"'],
        'bidet':            ['1¼"', '1¼"', 1, '1¼"'],
        'drinking-fountain':['1¼"', '1¼"', 0.5, '1¼"'],
        'kitchen-sink':     ['1½"', '1½"', 2, '1¼"'],
        'bar-sink':         ['1½"', '1½"', 1, '1¼"'],
        'laundry-tub':      ['1½"', '1½"', 2, '1¼"'],
        'bathtub':          ['1½"', '1½"', 2, '1¼"'],
        'shower':           ['2"',  '2"',  2, '1½"'],
        'floor-drain':      ['2"',  '2"',  2, '1½"'],
        'washer':           ['2"',  '2"',  3, '1½"'],
        'urinal':           ['2"',  '2"',  4, '1½"'],
        'dishwasher':       ['1½"', '1½"', 2, '1¼"'],
        'wc':               ['Integral 3"', '3"', 3, '2"'],
      };
      const row = table[f];
      const isWC = f === 'wc';
      return {
        main: row[0], unit: 'MIN TRAP SIZE',
        detail: [
          ['Min branch drain', row[1]],
          ['DFU value', row[2]],
          ['Min vent size', row[3]],
          ['Trap arm max', isWC ? 'N/A — built into fixture' : '5 × trap diameter (per IPC 1002.4)'],
          ['Code reference', 'IPC Table 1002.1 + 906']
        ]
      };
    }
  },
  {
    slug: 'water-meter-size-calculator',
    name: 'Water Meter Size',
    category: 'construction',
    trade: 'Plumbing',
    desc: 'Meter sizing by demand',
    formula: 'meter ≥ peak GPM at acceptable Δp',
    title: 'WATER METER SIZE',
    metaTitle: 'Water Meter Size Calculator — AWWA Sizing Guide | ProjectCalc',
    metaDesc: 'Free water meter sizing calculator. Enter total fixture units — get the recommended meter size and peak demand for residential and small commercial service.',
    seoIntro: 'This water meter size calculator returns the recommended residential or small commercial water meter based on total fixture units, using the AWWA M22 sizing approach. Meters that are too small choke peak flow and cause pressure complaints; meters that are too large under-register low flows and cost the utility (and you, on a per-meter charge). The output gives the displacement-meter size with safe margin, plus the peak GPM that meter is rated for so you can sanity-check against fixture demand.',
    note: 'AWWA M22-based residential meter sizing. Always confirm with your local water utility — they set the actual service size.',
    inputs: [
      { id: 'wsfu', label: 'Total Water Supply Fixture Units', unit: 'WSFU', default: 30, step: 1,
        tooltip: 'Use the water supply pipe sizing calculator to compute WSFU from your fixture counts.' },
      { id: 'service', label: 'Service type', unit: '', type: 'select', default: 'residential',
        options: [['residential','Single-family residential'],['multi','Multi-family / small commercial']] }
    ],
    calc: (data) => {
      const wsfu = +data.wsfu;
      const service = data.service as string;
      // Peak GPM via Hunter (simplified): for residential
      const peakGpm = wsfu < 6 ? wsfu * 1.5 : 5 + Math.sqrt(wsfu) * 1.8;
      // Meter sizing: displacement (PD) meters typical residential
      // Size, max continuous GPM, max safe flow GPM
      const meters: [string, number, number][] = [
        ['⅝" × ¾"', 10, 20],
        ['¾"',       15, 30],
        ['1"',       25, 50],
        ['1½"',      50, 100],
        ['2"',       80, 160],
        ['3"',       180, 320],
      ];
      let pick = '3"+';
      let maxCont = 180, maxSafe = 320;
      // Pick smallest meter where peak < max continuous (provides margin)
      for (const [size, cont, safe] of meters) {
        if (peakGpm <= cont * (service === 'multi' ? 0.85 : 1.0)) {
          pick = size; maxCont = cont; maxSafe = safe; break;
        }
      }
      return {
        main: pick, unit: 'METER SIZE',
        detail: [
          ['Total WSFU', wsfu],
          ['Estimated peak demand', peakGpm.toFixed(1) + ' GPM'],
          ['Meter max continuous', maxCont + ' GPM'],
          ['Meter max safe (intermittent)', maxSafe + ' GPM'],
          ['Standard', 'AWWA M22 / displacement meter']
        ]
      };
    }
  },
  {
    slug: 'building-drain-size-calculator',
    name: 'Building Drain Size',
    category: 'construction',
    trade: 'Plumbing',
    desc: 'Main drain + slope',
    formula: 'building drain DFU + slope',
    title: 'BUILDING DRAIN SIZE',
    metaTitle: 'Building Drain Size Calculator — IPC Table 710.1 | ProjectCalc',
    metaDesc: 'Free building drain sizing calculator. Enter total DFUs — get minimum building drain diameter at ⅛" and ¼" per foot slope per IPC Table 710.1.',
    seoIntro: 'The building drain is the lowest horizontal pipe inside the building, where every branch eventually empties before the line transitions to the building sewer at 5 feet outside the foundation. Its size is set by IPC Table 710.1 using a different DFU column from horizontal branches — the building drain is allowed higher loads at the same diameter because it always runs at full slope. This calculator returns the minimum building drain size for the total DFU load at both ⅛"/ft and ¼"/ft slopes, since slope choice affects capacity.',
    note: 'IPC Table 710.1, building drain column. Not the same as horizontal branch sizing.',
    inputs: [
      { id: 'dfu', label: 'Total DFU served', unit: '', default: 30, step: 1,
        tooltip: 'Sum of drainage fixture units for every fixture in the building. Use the drain pipe sizing calculator to compute.' },
      { id: 'slope', label: 'Drain slope', unit: '', type: 'select', default: '0.25',
        tooltip: '⅛"/ft is allowed for 3"+ pipe and saves vertical space; ¼"/ft is required for ≤2.5" pipe and increases capacity at every size.',
        options: [['0.125','⅛" per ft (3" pipe and larger only)'],['0.25','¼" per ft (any size)'],['0.5','½" per ft (max — beyond this, scour issues)']] }
    ],
    calc: (data) => {
      const dfu = +data.dfu;
      const slope = +data.slope;
      // IPC 710.1 building drain column
      // [size, max DFU @ ⅛, max DFU @ ¼, max DFU @ ½]
      const table: [string, number, number, number][] = [
        ['2"',  21, 26, 31],
        ['2½"', 24, 31, 36],
        ['3"',  42, 50, 57],
        ['4"',  180, 216, 250],
        ['5"',  390, 480, 575],
        ['6"',  700, 840, 1000],
        ['8"',  1600, 1920, 2300],
      ];
      const slopeIdx = slope === 0.125 ? 1 : slope === 0.25 ? 2 : 3;
      let pick = '8"+';
      for (const row of table) {
        if (dfu <= row[slopeIdx]) {
          // Building drain must be ≥3" if any WCs (assume yes for any meaningful DFU count)
          // and ⅛" slope only allowed for ≥3"
          if (slope === 0.125 && (row[0] === '2"' || row[0] === '2½"')) continue;
          pick = row[0]; break;
        }
      }
      const slopeLabel = slope === 0.125 ? '⅛"/ft' : slope === 0.25 ? '¼"/ft' : '½"/ft';
      const dropPer10 = slope * 10;
      return {
        main: pick, unit: 'BUILDING DRAIN SIZE',
        detail: [
          ['Total DFU', dfu],
          ['Slope chosen', slopeLabel],
          ['Drop per 10 ft of run', dropPer10.toFixed(2) + '"'],
          ['Min size if any WC', 'must be ≥ 3"'],
          ['Code reference', 'IPC Table 710.1 (building drain column)']
        ]
      };
    }
  },
  {
    slug: 'wet-wall-stack-calculator',
    name: 'Wet Wall Stack',
    category: 'construction',
    trade: 'Plumbing',
    desc: 'Combined drain + vent stack',
    formula: 'stack DFU + branch interval limit',
    title: 'WET WALL STACK',
    metaTitle: 'Wet Wall Stack Sizing Calculator — Soil Stack DFU | ProjectCalc',
    metaDesc: 'Free wet wall / soil stack sizing calculator. Enter total DFUs and branch intervals — get minimum vertical stack diameter per IPC.',
    seoIntro: 'A wet wall is the framed cavity that carries the drain stack, vent, and hot/cold supply lines through a multi-story building, usually directly behind the bathroom. The soil stack inside that wall is sized for the total DFU load it carries (every fixture above and at its level) and limited per branch interval (the vertical span between fixture connections). This calculator returns the minimum vertical stack diameter from IPC Table 710.1, accounting for both total stack DFU and the per-branch-interval cap. Pair with vent sizing for the stack vent extending above the roof.',
    note: 'IPC Table 710.1 (stack columns). Stacks ≤3 stories use the higher per-branch-interval column; taller stacks use the stricter total-stack column.',
    inputs: [
      { id: 'dfu', label: 'Total DFU on stack', unit: '', default: 24, step: 1,
        tooltip: 'Sum of DFU for every fixture connecting to this stack.' },
      { id: 'intervals', label: 'Number of branch intervals', unit: '', default: 2, step: 1,
        tooltip: 'A branch interval = one floor\'s worth of fixture connections (typically 8 ft of vertical stack). Most residential = 1–3 intervals.' },
      { id: 'maxBranchDfu', label: 'Largest single branch DFU', unit: '', default: 12, step: 1,
        tooltip: 'DFU of the most heavily-loaded branch entering the stack at one level (typically a full bath = 7 DFU, two baths = 14).' }
    ],
    calc: (data) => {
      const dfu = +data.dfu;
      const intervals = +data.intervals;
      const branchDfu = +data.maxBranchDfu;
      // IPC 710.1 simplified soil stack column:
      // [size, max DFU per branch interval, max DFU on stack ≤3 stories, max DFU on stack >3 stories]
      const table: [string, number, number, number][] = [
        ['1½"', 1, 2, 1],
        ['2"',  6, 10, 8],
        ['2½"', 9, 20, 15],
        ['3"',  20, 48, 30],
        ['4"',  90, 240, 180],
        ['5"',  200, 540, 390],
        ['6"',  350, 960, 700],
      ];
      const tallStack = intervals > 3;
      const stackCol = tallStack ? 3 : 2;
      let pick = '6"+';
      for (const row of table) {
        if (dfu <= row[stackCol] && branchDfu <= row[1]) {
          pick = row[0]; break;
        }
      }
      // Stack vent (extension through roof) is at least same size or per IPC 906; min 3" through roof in cold climates
      return {
        main: pick, unit: 'STACK SIZE',
        detail: [
          ['Total DFU on stack', dfu],
          ['Branch intervals', intervals + (tallStack ? ' (tall stack — stricter limit)' : '')],
          ['Largest single branch DFU', branchDfu],
          ['Stack vent (through roof)', 'same as stack, min 3" in cold climates (frost closure)'],
          ['Code reference', 'IPC Table 710.1 (stack columns)']
        ]
      };
    }
  },
  {
    slug: 'booster-pump-sizing-calculator',
    name: 'Booster Pump Size',
    category: 'construction',
    trade: 'Plumbing',
    desc: 'Pump GPM and PSI',
    formula: 'pump = peak GPM @ (target − supply) PSI',
    title: 'BOOSTER PUMP SIZE',
    metaTitle: 'Booster Pump Sizing Calculator — GPM and PSI | ProjectCalc',
    metaDesc: 'Free booster pump sizing calculator. Enter supply pressure, target pressure, and demand — get required pump PSI boost and GPM.',
    seoIntro: 'A booster pump adds pressure to a water supply that doesn\'t arrive at adequate PSI for the building — common with low municipal pressure, well systems on long supply lines, or top-floor fixtures in tall buildings. This booster pump sizing calculator returns the required pump PSI boost and GPM rating based on incoming static pressure, target delivered pressure, and peak flow demand. Use the result to spec a constant-pressure or VFD pump from any major manufacturer.',
    note: 'Sizes the boost stage. Variable-speed (VFD) pumps modulate to maintain target; constant-speed sizes for the peak design point.',
    inputs: [
      { id: 'supply', label: 'Incoming static pressure', unit: 'PSI', default: 35, step: 1,
        tooltip: 'Pressure at the meter or well tank during no-flow conditions. Test with a $10 hose-bib gauge.' },
      { id: 'target', label: 'Target delivered pressure', unit: 'PSI', default: 60, step: 1,
        tooltip: 'Code minimum is 20 PSI at the most remote fixture; 40–60 PSI is comfortable. Above 80 requires a pressure-reducing valve.' },
      { id: 'gpm', label: 'Peak demand', unit: 'GPM', default: 15, step: 1,
        tooltip: 'Use the water supply pipe sizing calculator to estimate peak GPM from fixture units.' },
      { id: 'lift', label: 'Vertical lift to highest fixture', unit: 'ft', default: 25, step: 1,
        tooltip: 'Vertical distance from pump to the highest fixture. Each foot of lift adds 0.433 PSI to required boost.' }
    ],
    calc: (data) => {
      const supply = +data.supply, target = +data.target, gpm = +data.gpm, lift = +data.lift;
      const liftPsi = lift * 0.433;
      const boost = Math.max(0, (target - supply) + liftPsi);
      const status = boost <= 0 ? 'No booster needed — supply already meets target' :
                     boost <= 20 ? 'Single-stage booster (light duty)' :
                     boost <= 50 ? 'Multi-stage booster (medium duty)' :
                     'Multi-stage / high-pressure booster';
      // Approximate motor HP: HP = (GPM × Boost × SG) / (3960 × pump_efficiency)
      // Assume 65% pump efficiency, water SG = 1
      const hp = (gpm * boost) / (3960 * 0.65);
      const hpRound = hp <= 0.5 ? '½ HP' : hp <= 0.75 ? '¾ HP' : hp <= 1 ? '1 HP' :
                      hp <= 1.5 ? '1½ HP' : hp <= 2 ? '2 HP' : hp <= 3 ? '3 HP' : `${Math.ceil(hp)} HP`;
      return {
        main: boost.toFixed(1), unit: 'PSI BOOST',
        detail: [
          ['Pump rated GPM', gpm + ' GPM'],
          ['Vertical lift loss', liftPsi.toFixed(1) + ' PSI'],
          ['Approx motor size', hpRound],
          ['Pump duty', status],
          ['Note', 'Add 10–20% to GPM for VFD pump capacity headroom']
        ]
      };
    }
  },
  {
    slug: 'expansion-tank-sizing-calculator',
    name: 'Expansion Tank Size',
    category: 'construction',
    trade: 'Plumbing',
    desc: 'Closed-loop tank size',
    formula: 'V_tank = V_water × (Vexp ÷ Pa) × (Pa − Pp) ÷ (Ph − Pp)',
    title: 'EXPANSION TANK SIZE',
    metaTitle: 'Expansion Tank Sizing Calculator — Water Heater | ProjectCalc',
    metaDesc: 'Free expansion tank sizing calculator for closed water heater systems. Enter tank volume and pressure — get the required expansion tank size.',
    seoIntro: 'Closed plumbing systems (those with a check valve, pressure-reducing valve, or backflow preventer between the meter and the water heater) require a thermal expansion tank to absorb the volume increase as the heater warms cold water. Without it, every heating cycle pressurizes the system above safe limits, eventually rupturing the tank, blowing fittings, or triggering the T&P relief valve. This calculator sizes the expansion tank based on water heater capacity, supply pressure, and target heating range using the standard ASME formula.',
    note: 'Required by code (UPC 608.3, IPC 607.3.1) on any closed system. Check for: backflow preventer, PRV, or check valve at the meter.',
    inputs: [
      { id: 'wh', label: 'Water heater capacity', unit: 'gallons', default: 50, step: 5,
        tooltip: 'Tank water heater nominal capacity. Tankless systems usually don\'t need expansion tanks unless storage tank is added.' },
      { id: 'supply', label: 'Supply pressure (set on PRV)', unit: 'PSI', default: 60, step: 1 },
      { id: 'maxPressure', label: 'Maximum allowable pressure', unit: 'PSI', default: 80, step: 1,
        tooltip: 'Set just below the T&P relief valve pop pressure (typically 150 PSI) — code targets 80 PSI max for plumbing fittings.' },
      { id: 'temp', label: 'Heating temperature rise', unit: '°F', default: 90, step: 5,
        tooltip: 'Difference between cold inlet and stored hot water temp. 50°F → 140°F = 90°F rise.' }
    ],
    calc: (data) => {
      const wh = +data.wh;
      const supplyPsi = +data.supply;
      const maxPsi = +data.maxPressure;
      const tempRise = +data.temp;
      // Expansion factor: water expands about 0.000022 per °F
      // For 90°F rise on 50 gal water: ~50 × 0.000022 × 90 = 0.099 gal expansion (about 0.2%)
      // Better approximation from ASHRAE: % expansion ≈ 0.00041 × (T_hot - T_cold) for 50°F to 140°F
      const expansionFraction = 0.00041 * tempRise;
      const expansionGal = wh * expansionFraction;
      // Tank acceptance volume formula (simplified bladder tank):
      // V_tank = V_exp / (1 − (P_supply / P_max))
      const acceptanceFactor = 1 - (supplyPsi / maxPsi);
      const tankGal = expansionGal / acceptanceFactor;
      // Round to standard tank sizes: 2, 4.4, 6, 14, 20, 32 gal
      const standard = [2, 4.4, 6, 14, 20, 32, 44];
      let pick = 44;
      for (const s of standard) {
        if (s >= tankGal) { pick = s; break; }
      }
      return {
        main: pick + '', unit: 'GALLON TANK',
        detail: [
          ['Computed minimum', tankGal.toFixed(2) + ' gal'],
          ['Water expansion volume', expansionGal.toFixed(3) + ' gal'],
          ['Pre-charge pressure', supplyPsi + ' PSI (match supply)'],
          ['Max system pressure', maxPsi + ' PSI'],
          ['Common size match', 'Watts / Amtrol / Zilmet ' + pick + '-gal']
        ]
      };
    }
  },
  {
    slug: 'duct-cfm-calculator',
    name: 'Duct CFM',
    category: 'construction',
    trade: 'HVAC',
    desc: 'HVAC airflow',
    formula: 'CFM = BTU ÷ (1.08 × ΔT)',
    title: 'DUCT CFM',
    metaTitle: 'Duct CFM Calculator — HVAC Airflow Sizing | ProjectCalc',
    metaDesc: 'Calculate duct CFM for HVAC sizing. Enter BTU load and supply temp differential — get airflow in cubic feet per minute.',
    seoIntro: 'This duct CFM calculator gives the airflow needed (in cubic feet per minute) to deliver a given heating or cooling load. The sensible heat formula CFM = BTU/hr ÷ (1.08 × ΔT) is what HVAC contractors use for room-by-room duct sizing in a Manual D layout. ΔT is the difference between the supply air temperature and the return air temperature — typically 20°F for cooling and 50–70°F for forced-air heating. The industry rule of thumb is 400 CFM per ton of cooling (1 ton = 12,000 BTU/hr), which lines up with a 20°F cooling ΔT.',
    note: 'CFM = BTU ÷ (1.08 × ΔT). Cooling ΔT ≈ 20°F. Forced-air heating ΔT ≈ 60°F.',
    inputs: [
      { id: 'btu', label: 'Heat load', unit: 'BTU/hr', default: 24000, step: 500 },
      { id: 'dt', label: 'Supply temp differential', unit: '°F', default: 20, step: 1,
        tooltip: 'ΔT = the temperature difference between supply air and return air. Use ~20°F for cooling and ~60°F for furnace heating.' }
    ],
    calc: (data) => {
      const btu = +data.btu, dt = +data.dt;
      const cfm = btu / (1.08 * dt);
      const tons = btu / 12000;
      return {
        main: Math.round(cfm).toLocaleString(), unit: 'CFM',
        detail: [
          ['Cooling tons', tons.toFixed(2)],
          ['Rule-of-thumb (400 CFM/ton)', Math.round(tons * 400).toLocaleString() + ' CFM'],
          ['Heat load', btu.toLocaleString() + ' BTU/hr'],
          ['ΔT', dt + '°F']
        ]
      };
    }
  },
  {
    slug: 'mortgage-calculator',
    name: 'Mortgage',
    category: 'finance',
    desc: 'Monthly payment',
    formula: 'M = P·r(1+r)ⁿ / ((1+r)ⁿ-1)',
    title: 'MORTGAGE PAYMENT',
    metaTitle: 'Mortgage Calculator — Monthly Payment | ProjectCalc',
    metaDesc: 'Mortgage calculator. Enter loan, rate, and term — get monthly principal & interest plus total interest paid.',
    seoIntro: 'This mortgage calculator computes the monthly principal and interest payment on a fixed-rate home loan. Enter the loan amount, interest rate, and term in years. The calculator does not include property tax, homeowner\'s insurance, PMI, or HOA — those are typically escrowed and added on top. To estimate total housing cost, add roughly 1.5–3% of home value annually for those items, divided by 12.',
    note: 'Principal & interest only. PITI (with tax/insurance) typically runs 25–35% higher.',
    inputs: [
      { id: 'P', label: 'Loan amount', unit: '$', default: 300000, step: 1000 },
      { id: 'rate', label: 'Interest rate', unit: '%', default: 6.5, step: 0.125 },
      { id: 'years', label: 'Term', unit: 'yrs', default: 30, step: 1 }
    ],
    calc: (data) => {
      const P=+data.P, rate=+data.rate, years=+data.years;
      const r = rate / 100 / 12;
      const n = years * 12;
      const M = r === 0 ? P / n : P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPaid = M * n;
      const totalInterest = totalPaid - P;
      return {
        main: '$' + M.toLocaleString(undefined, {maximumFractionDigits: 2}), unit: 'PER MONTH (P&I)',
        detail: [
          ['Total paid', '$' + totalPaid.toLocaleString(undefined, {maximumFractionDigits: 0})],
          ['Total interest', '$' + totalInterest.toLocaleString(undefined, {maximumFractionDigits: 0})],
          ['Loan amount', '$' + P.toLocaleString()],
          ['Term', n + ' months']
        ]
      };
    }
  },
  {
    slug: 'car-payment-calculator',
    name: 'Car Payment',
    category: 'finance',
    desc: 'Auto loan',
    formula: 'M = P·r(1+r)ⁿ / ((1+r)ⁿ-1)',
    title: 'CAR PAYMENT',
    metaTitle: 'Car Payment Calculator — Monthly Auto Loan Payment | ProjectCalc',
    metaDesc: 'Free car payment calculator. Enter price, down payment, trade-in, term, and rate — get monthly payment, total interest, and amount financed.',
    seoIntro: 'This car payment calculator estimates your monthly auto loan payment. Enter the vehicle price, your down payment in cash, the trade-in value of your current vehicle (if any), the loan term in months, and the interest rate. The calculator returns your monthly principal and interest payment along with the total amount financed and total interest paid over the life of the loan. Sales tax varies by state — some states tax the full price, others tax price minus trade-in. If you want to include sales tax, add it to the vehicle price.',
    note: 'Principal & interest only. Doesn\'t include sales tax, title, registration, or extended warranty add-ons. Average new-car rates in 2026: 7–9%; used: 9–12%.',
    inputs: [
      { id: 'price', label: 'Vehicle price', unit: '$', default: 35000, step: 500 },
      { id: 'down', label: 'Down payment', unit: '$', default: 5000, step: 500 },
      { id: 'trade', label: 'Trade-in value', unit: '$', default: 0, step: 500 },
      { id: 'months', label: 'Loan term', unit: '', type: 'select', default: '60',
        options: [['36','36 months (3 yr)'],['48','48 months (4 yr)'],['60','60 months (5 yr)'],['72','72 months (6 yr)'],['84','84 months (7 yr)']] },
      { id: 'rate', label: 'Interest rate (APR)', unit: '%', default: 8.5, step: 0.125 }
    ],
    calc: (data) => {
      const price=+data.price, down=+data.down, trade=+data.trade, months=+data.months, rate=+data.rate;
      const P = Math.max(0, price - down - trade);
      const r = rate / 100 / 12;
      const M = P === 0 ? 0 : (r === 0 ? P / months : P * (r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1));
      const totalPaid = M * months;
      const totalInterest = totalPaid - P;
      return {
        main: '$' + M.toLocaleString(undefined, {maximumFractionDigits: 2}), unit: 'PER MONTH',
        detail: [
          ['Amount financed', '$' + P.toLocaleString(undefined, {maximumFractionDigits: 0})],
          ['Total interest', '$' + totalInterest.toLocaleString(undefined, {maximumFractionDigits: 0})],
          ['Total paid (loan)', '$' + totalPaid.toLocaleString(undefined, {maximumFractionDigits: 0})],
          ['Total cost (incl. down + trade)', '$' + (totalPaid + down + trade).toLocaleString(undefined, {maximumFractionDigits: 0})]
        ]
      };
    }
  },
  {
    slug: 'personal-loan-calculator',
    name: 'Personal Loan',
    category: 'finance',
    desc: 'Monthly payment',
    formula: 'M = P·r(1+r)ⁿ / ((1+r)ⁿ-1)',
    title: 'PERSONAL LOAN',
    metaTitle: 'Personal Loan Calculator — Monthly Payment & Total Interest | ProjectCalc',
    metaDesc: 'Personal loan calculator. Enter loan amount, APR, and term — get monthly payment plus total interest you\'ll pay over the life of the loan.',
    seoIntro: 'This personal loan calculator computes the monthly payment on an unsecured fixed-rate personal loan. Enter the loan amount, the APR (annual percentage rate) the lender quoted you, and the term in months. The calculator returns the monthly principal and interest payment plus the total interest you\'ll pay over the life of the loan. Personal loan APRs in 2026 typically range from 7% (excellent credit, top lenders) to 35% (subprime). Most personal loans run 24 to 84 months.',
    note: 'Doesn\'t account for origination fees, which some lenders deduct from your funded amount (a 5% fee on a $10,000 loan means you receive $9,500 but still owe $10,000).',
    inputs: [
      { id: 'P', label: 'Loan amount', unit: '$', default: 15000, step: 500 },
      { id: 'rate', label: 'Interest rate (APR)', unit: '%', default: 12, step: 0.25 },
      { id: 'months', label: 'Term', unit: '', type: 'select', default: '60',
        options: [['12','12 months (1 yr)'],['24','24 months (2 yr)'],['36','36 months (3 yr)'],['48','48 months (4 yr)'],['60','60 months (5 yr)'],['72','72 months (6 yr)'],['84','84 months (7 yr)']] }
    ],
    calc: (data) => {
      const P=+data.P, rate=+data.rate, months=+data.months;
      const r = rate / 100 / 12;
      const M = r === 0 ? P / months : P * (r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
      const totalPaid = M * months;
      const totalInterest = totalPaid - P;
      return {
        main: '$' + M.toLocaleString(undefined, {maximumFractionDigits: 2}), unit: 'PER MONTH',
        detail: [
          ['Total paid', '$' + totalPaid.toLocaleString(undefined, {maximumFractionDigits: 0})],
          ['Total interest', '$' + totalInterest.toLocaleString(undefined, {maximumFractionDigits: 0})],
          ['Loan amount', '$' + P.toLocaleString()],
          ['Term', months + ' months']
        ]
      };
    }
  },
  {
    slug: 'tip-calculator',
    name: 'Tip',
    category: 'finance',
    desc: 'Restaurant tip',
    formula: 'tip = bill × %',
    title: 'TIP',
    metaTitle: 'Tip Calculator — Split Bills, Multiple Rates | ProjectCalc',
    metaDesc: 'Tip calculator with bill split. Enter bill, tip percent, and number of people — get total per person.',
    seoIntro: 'This tip calculator splits a restaurant bill including the tip across any number of people. Enter the pre-tip bill amount, the tip percentage (15% standard, 18% good service, 20% excellent), and the party size. The calculator returns the total bill, the tip amount, and what each person owes if you\'re splitting evenly.',
    note: 'US norms: 15% standard, 18% good, 20%+ excellent. Some restaurants auto-include 18% for parties of 6+.',
    inputs: [
      { id: 'bill', label: 'Bill amount', unit: '$', default: 50, step: 1 },
      { id: 'pct', label: 'Tip percent', unit: '%', default: 18, step: 1 },
      { id: 'people', label: 'Split between', unit: 'ppl', default: 2, step: 1 }
    ],
    calc: (data) => {
      const bill=+data.bill, pct=+data.pct, people=+data.people;
      const tip = bill * (pct / 100);
      const total = bill + tip;
      const perPerson = total / Math.max(1, people);
      return {
        main: '$' + perPerson.toFixed(2), unit: 'PER PERSON',
        detail: [
          ['Bill', '$' + bill.toFixed(2)],
          ['Tip (' + pct + '%)', '$' + tip.toFixed(2)],
          ['Total', '$' + total.toFixed(2)],
          ['People', people]
        ]
      };
    }
  }
];

export const getCalculator = (slug: string) => calculators.find(c => c.slug === slug);

export const getCategories = () => {
  const cats = new Map<string, typeof calculators>();
  calculators.forEach(c => {
    if (!cats.has(c.category)) cats.set(c.category, []);
    cats.get(c.category)!.push(c);
  });
  return cats;
};
