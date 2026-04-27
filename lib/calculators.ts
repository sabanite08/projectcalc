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
    desc: 'Board feet',
    formula: 'BF = T·W·L ÷ 12',
    title: 'BOARD FEET',
    metaTitle: 'Board Feet Calculator — Lumber Quantity | ProjectCalc',
    metaDesc: 'Board feet calculator. Enter thickness, width, length, and quantity — get board feet for any lumber order.',
    seoIntro: 'This board feet calculator helps you spec a lumber order. One board foot equals 144 cubic inches (a board 1 inch thick × 12 inches wide × 1 foot long). Use nominal sizes for the thickness and width inputs (a 2x4 is 1.5 × 3.5 actual, but 2 × 4 nominal — always use nominal for board feet). Length is in feet.',
    note: 'T and W in inches, L in feet. One board foot = 144 cubic inches of lumber.',
    inputs: [
      { id: 'T', label: 'Thickness (nominal)', unit: 'in', default: 2, step: 0.25, tooltip: 'Use the size as labeled at the lumber yard. A "2x4" is 2 nominal even though it measures 1.5".' },
      { id: 'W', label: 'Width (nominal)', unit: 'in', default: 4, step: 0.25 },
      { id: 'L', label: 'Length per piece', unit: 'ft', default: 8, step: 1 },
      { id: 'qty', label: 'Quantity', unit: 'pcs', default: 10, step: 1 }
    ],
    calc: (data) => {
      const T=+data.T, W=+data.W, L=+data.L, qty=+data.qty;
      const perPiece = (T * W * L) / 12;
      const total = perPiece * qty;
      return {
        main: total.toFixed(2), unit: 'BOARD FEET TOTAL',
        detail: [
          ['Per piece', perPiece.toFixed(2) + ' BF'],
          ['Pieces', qty],
          ['Linear feet', (L * qty).toFixed(0) + ' ft'],
          ['Nominal size', T + '×' + W]
        ]
      };
    }
  },
  {
    slug: 'voltage-drop-calculator',
    name: 'Voltage Drop',
    category: 'construction',
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
    slug: 'conduit-fill-calculator',
    name: 'Conduit Fill',
    category: 'construction',
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
    slug: 'duct-cfm-calculator',
    name: 'Duct CFM',
    category: 'construction',
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
