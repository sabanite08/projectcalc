import { amazonSearch } from './affiliates';

export type Retailer = 'Amazon' | 'Home Depot' | 'Build.com';

export interface Tool {
  name: string;
  blurb: string;
  url: string;
  retailer: Retailer;
  essential?: boolean;
}

export interface ToolCategory {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDesc: string;
  intro: string;
  tools: Tool[];
}

export const toolCategories: ToolCategory[] = [
  {
    slug: 'carpentry',
    name: 'Carpentry Tools',
    shortName: 'Carpentry',
    metaTitle: 'Best Carpentry Tools for Framing and Trim — ProjectCalc',
    metaDesc: 'A curated list of the framing, layout, and finish-carpentry tools we recommend for residential work. Picks span Amazon and Home Depot.',
    intro: 'These are the carpentry tools that actually move the work — layout tools that get you to the right cut on the first try, fasteners and connectors that meet code, and the powered hardware that pays for itself on a single project. Good carpentry depends more on layout discipline than on horsepower, so the budget-friendly hand tools at the top of this list earn their slot ahead of the heavier gear below. If you do nothing else, buy a Speed Square and a quality tape — the rest of the list is upgrade territory.',
    tools: [
      { name: 'Swanson Speed Square', blurb: 'The 7" rafter square with pitch tables stamped on the face. Marks square, 45°, and any rafter angle in one tool. Replace your old plastic combination square with this and never go back.', url: amazonSearch('swanson speed square'), retailer: 'Amazon', essential: true },
      { name: 'Stanley FatMax 25 ft tape', blurb: 'Wide blade stays rigid out 11+ feet for solo measurements. The standout tape for framing where you need to reach a corner without a helper.', url: amazonSearch('stanley fatmax 25 ft tape measure'), retailer: 'Amazon', essential: true },
      { name: 'Stair gauges (pair)', blurb: 'Hex-lock gauges that clamp to a framing square at your rise and run. Lays out every stringer identical without re-measuring — turns a half-day stringer job into 30 minutes.', url: amazonSearch('stair gauge framing square'), retailer: 'Amazon', essential: true },
      { name: 'Framing nailer (21° round-head)', blurb: 'The right gun for wall plates, joists, sheathing, and rafters. 21° collation accepts the cheapest plastic-strip nails. DeWalt and Milwaukee both ship reliable cordless options.', url: amazonSearch('21 degree framing nailer cordless'), retailer: 'Amazon' },
      { name: 'Cordless circular saw', blurb: '6½" or 7¼" cordless saw covers all dimensional lumber to 2x material. Brushless models keep up with corded performance without a cord to drag through framing.', url: amazonSearch('cordless circular saw 7 1/4'), retailer: 'Amazon' },
      { name: 'Chalk reel', blurb: 'Snap a 25-ft layout line in one second. Blue chalk for indoor framing (washes off), red for permanent marks on sheathing or subfloor.', url: amazonSearch('chalk reel line'), retailer: 'Amazon' },
      { name: 'Framing hammer (22 oz waffle face)', blurb: 'Heavier head, longer handle, and the waffle face grips nails before they bend. Worth the upgrade from a 16 oz hammer the first time you have to drive 16d sinkers all day.', url: amazonSearch('estwing 22 oz framing hammer waffle'), retailer: 'Amazon' },
      { name: 'Simpson Strong-Tie joist hangers', blurb: 'Code-required for any joist hanging from a beam or ledger. Buy the size matching your joist depth (LU, LUS, or HU series). Use Simpson SDS or N10 nails — drywall screws are not approved.', url: amazonSearch('simpson strong tie joist hanger'), retailer: 'Amazon' },
      { name: 'Hurricane ties (H1, H2.5)', blurb: 'Truss-to-wall and rafter-to-wall ties required by IRC R802.11 in most jurisdictions. Cheaper than a re-inspection.', url: amazonSearch('simpson hurricane tie h2.5'), retailer: 'Amazon' },
      { name: '4-ft level', blurb: 'A box-beam aluminum 4-ft level with magnetic edge sets posts, walls, and headers in one read. The 6-ft version is more accurate but unwieldy in tight framing.', url: amazonSearch('4 foot box beam level'), retailer: 'Amazon' },
      { name: 'Combination square (12-in)', blurb: 'Sets blade depth on circular saws, marks 90° and 45°, and acts as a depth gauge for dadoes. The Starrett is heirloom quality; budget brands are fine for framing.', url: amazonSearch('combination square 12 inch'), retailer: 'Amazon' },
      { name: 'Carpenter pencils + sharpener', blurb: 'Flat carpenter pencils don\'t roll off plates and mark dark enough to read across a room. A handheld pencil sharpener pays for itself in five minutes saved per day.', url: amazonSearch('carpenter pencil sharpener'), retailer: 'Amazon' },
    ],
  },
  {
    slug: 'masonry',
    name: 'Masonry & Concrete Tools',
    shortName: 'Masonry',
    metaTitle: 'Best Masonry and Concrete Tools — Brick, Block, Pavers, Slabs',
    metaDesc: 'Hand and power tools for brick, block, stone, paver, and slab work. Curated picks from Amazon and Home Depot for residential masonry projects.',
    intro: 'Masonry and concrete work covers everything from a brick repair to pouring a driveway slab — and most of it shares the same toolkit. The list below leans heavily on hand tools because masonry rewards finesse over force; the powered items at the end (mixer, plate compactor) are big enough to rent for a single weekend rather than buy. If you only spend money on three things, pick the brick trowel, jointer, and a good 4-ft level — those three handle every joint you\'ll ever set.',
    tools: [
      { name: 'Brick trowel (10 or 11 in)', blurb: 'The standard for spreading mortar beds and buttering ends. London or Philadelphia pattern is preference; the 10" trowel is forgiving for first-timers.', url: amazonSearch('brick trowel 10 inch'), retailer: 'Amazon', essential: true },
      { name: 'Mortar jointer', blurb: 'Rounds the joint profile after the mortar firms up — concave is the standard residential look, V-jointer for tighter contemporary lines. A flat slicker covers raked or weather joints.', url: amazonSearch('mortar jointer concave'), retailer: 'Amazon', essential: true },
      { name: '4-ft mason\'s level', blurb: 'Levels every course as you set, plumbs the corners, and doubles as a screed for short pours. The yellow Stabila and red Empire are the two pro standards.', url: amazonSearch('4 foot masons level'), retailer: 'Amazon', essential: true },
      { name: 'Mason\'s line + line blocks', blurb: 'Strung between two corner blocks at exact course height — every brick in the field aligns to the line. The single fastest way to keep long walls true.', url: amazonSearch('masons line blocks twine'), retailer: 'Amazon' },
      { name: 'Magnesium bull float', blurb: 'Smooths fresh concrete after the screed pass. The 36" or 48" mag float on a bull-float handle reaches the middle of slabs without walking on the pour.', url: amazonSearch('magnesium bull float concrete'), retailer: 'Amazon' },
      { name: 'Concrete edger + groover', blurb: 'Edger rounds the slab perimeter; groover cuts the control joints that keep cracks where you want them (every 8-10 ft on a 4" slab). Both used at the same point in the finishing sequence.', url: amazonSearch('concrete edger groover set'), retailer: 'Amazon' },
      { name: 'Block trowel (wider than brick trowel)', blurb: 'Sized for the wider face of CMU coursing — typically 12-14" with a longer heel. A brick trowel works in a pinch but burns extra trips for material.', url: amazonSearch('mason block trowel'), retailer: 'Amazon' },
      { name: 'Mortar mixing paddle + drill', blurb: 'Mixes 60-80 lb bag at a time with a ½" corded drill. Faster and cleaner than hand-mixing in a wheelbarrow, and produces a more consistent batch.', url: amazonSearch('mortar mixing paddle'), retailer: 'Amazon' },
      { name: 'Rubber paver mallet', blurb: 'White or non-marking rubber face seats pavers into the bedding sand without chipping the edges. A regular hammer or dead-blow leaves marks you\'ll see.', url: amazonSearch('rubber paver mallet'), retailer: 'Amazon' },
      { name: 'Diamond cutoff blade (4½ in)', blurb: 'Pairs with a 4½" angle grinder for cutting brick, block, paver, stone, and concrete. Wet-cutting with a hose feed cuts dust dramatically — silica is no joke.', url: amazonSearch('diamond cutoff blade 4.5 inch'), retailer: 'Amazon' },
      { name: 'Plate compactor (rental friendly)', blurb: 'Compacts paver base in 2-inch lifts. Buying makes sense for repeat work; renting at $80/day is the right call for a single patio.', url: amazonSearch('plate compactor 3000 lb'), retailer: 'Amazon' },
      { name: 'Pointing trowel (5 in)', blurb: 'Narrow trowel for tuckpointing, repairs, and tight joint work where a full brick trowel won\'t fit. The flexible blade reaches into recessed joints without scraping the brick face.', url: amazonSearch('pointing trowel 5 inch'), retailer: 'Amazon' },
    ],
  },
  {
    slug: 'electrical',
    name: 'Electrical Tools',
    shortName: 'Electrical',
    metaTitle: 'Best Electrical Tools for Residential Wiring — ProjectCalc',
    metaDesc: 'Curated electrical tools for residential rough-in and service work. Klein, Greenlee, and Fluke picks from Amazon and Home Depot.',
    intro: 'Residential electrical work rewards quality hand tools — the same wire stripper, screwdriver, and meter you buy for a kitchen remodel will outlast a house. The list below is built around Klein, Greenlee, and Fluke because they\'re the brands union sparkies actually use, not the rebadged stuff at the discount aisle. The big-ticket item is a good clamp meter; the rest of the list is under $50 each and pays for itself the first time you don\'t need to make a hardware-store run mid-job.',
    tools: [
      { name: 'Klein 11-in-1 screwdriver', blurb: 'Hex driver, 4 phillips, 4 flat, 2 nut drivers in one tool. Replaces a tray of screwdrivers and works on every device in a residential panel.', url: amazonSearch('klein 11 in 1 screwdriver'), retailer: 'Amazon', essential: true },
      { name: 'Klein wire strippers (10-22 AWG)', blurb: 'Strips solid and stranded copper from #10 to #22 AWG with built-in screw cutters and a looping notch. Pays for itself the first time vs. cheap strippers that nick conductors.', url: amazonSearch('klein wire strippers 11055'), retailer: 'Amazon', essential: true },
      { name: 'Klein non-contact voltage tester', blurb: 'Touchless go/no-go check on any wire. Verify dead before working any device, every time. Two-stage models also detect both 50V (signal) and 120V/240V (power) levels.', url: amazonSearch('klein non contact voltage tester'), retailer: 'Amazon', essential: true },
      { name: 'Klein clamp meter', blurb: 'Reads voltage, current, and resistance without breaking the circuit. Way more useful than a basic multimeter for diagnosing residential issues. The CL120 hits every common feature for under $80.', url: amazonSearch('klein clamp meter cl120'), retailer: 'Amazon' },
      { name: 'Lineman\'s pliers (9 in)', blurb: 'Side-cutters and twisting jaw in one tool — pull, cut, and twist solid copper splices with a single grip. The Klein D213-9NE is the contractor standard.', url: amazonSearch('klein linemans pliers d213'), retailer: 'Amazon' },
      { name: 'Klein conduit bender (½ or ¾ in EMT)', blurb: 'Stamped multipliers and degree marks on the handle for offsets, saddles, and 90° bends. The right size depends on what conduit you run most — ½" covers most lighting and outlet work.', url: amazonSearch('klein conduit bender 1/2 emt'), retailer: 'Amazon' },
      { name: 'EMT cutter', blurb: 'Cuts ½" and ¾" EMT cleaner than a hacksaw and 5× faster. Built-in reamer removes the inside burr in one twist.', url: amazonSearch('emt conduit cutter'), retailer: 'Amazon' },
      { name: 'Fish tape (50 ft)', blurb: 'Steel tape for pulling wire through finished walls or conduit. The flat-blade design slides past plates and around corners better than round wire. Greenlee and Klein both make solid options.', url: amazonSearch('fish tape 50 ft electrical'), retailer: 'Amazon' },
      { name: 'Channellock channel locks (10-in)', blurb: 'Adjustable tongue-and-groove pliers for everything from pulling staples to tightening locknut hubs. Real Channellock brand — the knockoffs slip out of position.', url: amazonSearch('channellock 10 inch tongue groove'), retailer: 'Amazon' },
      { name: 'Knipex Cobra pliers', blurb: 'German-engineered alternative to channel locks with a self-adjusting jaw. Once you use them you\'ll buy a second pair. Sized 250mm (10 in) for residential work.', url: amazonSearch('knipex cobra pliers 250mm'), retailer: 'Amazon' },
      { name: 'Generator interlock kit', blurb: 'UL-listed interlock for the panel breaker handle prevents simultaneous main + generator backfeed. Code-compliant per NEC 702 at a fraction of the cost of a full transfer switch.', url: amazonSearch('generator interlock kit square d'), retailer: 'Amazon' },
      { name: 'Stud finder + wall scanner', blurb: 'For locating studs, joists, and live wires before drilling. The Franklin Sensors 13-LED whole-stud detector skips the calibration nonsense and just works.', url: amazonSearch('franklin sensors stud finder'), retailer: 'Amazon' },
    ],
  },
  {
    slug: 'plumbing',
    name: 'Plumbing Tools',
    shortName: 'Plumbing',
    metaTitle: 'Best Plumbing Tools for Residential Repair and Rough-In',
    metaDesc: 'Curated plumbing tools — wrenches, PEX gear, drain machines, and gauges. Brand picks from Amazon and Home Depot for homeowners and pros.',
    intro: 'Plumbing tools split into two categories: hand tools that handle 90% of residential repair, and specialty gear (PEX expanders, drain machines) you only need on rough-in or stubborn clogs. The list below covers both. If you only buy three, a 14" pipe wrench, basin wrench, and PEX cinch tool will get you through every common task without a hardware-store run. The drain auger and propane torch land in the upgrade tier — needed often enough to own, rare enough that quality matters more than features.',
    tools: [
      { name: '14-in pipe wrench (Ridgid)', blurb: 'The single most useful plumbing tool. Ridgid heavy-duty (red handle) is the contractor standard — replaceable jaws, lifetime guarantee. Cheap pipe wrenches round off galvanized fittings.', url: amazonSearch('ridgid 14 inch pipe wrench'), retailer: 'Amazon', essential: true },
      { name: 'Basin wrench', blurb: 'The only tool that reaches the supply nuts behind a sink. Spring-loaded swiveling head gets the angle that pliers can\'t. Worth its weight the first time you replace a kitchen faucet.', url: amazonSearch('basin wrench plumbing'), retailer: 'Amazon', essential: true },
      { name: 'PEX cinch clamp tool', blurb: 'Lowest-cost entry to PEX work. Pinches stainless rings around fittings — code-compliant and reliable when done right. Pair with a removal tool for redos.', url: amazonSearch('pex cinch clamp tool'), retailer: 'Amazon', essential: true },
      { name: 'PEX expansion tool', blurb: 'Used with PEX-A (Uponor/Wirsbo) — expands the tube over a fitting and lets it shrink back. Cleaner connections than cinch, but more expensive tool ($150+) and only works with PEX-A.', url: amazonSearch('pex expansion tool milwaukee'), retailer: 'Amazon' },
      { name: 'Tubing cutter (copper)', blurb: '15-22mm cutter handles ½", ⅝", ¾", and 1" copper. Roller-style cuts square and clean — sweat joints fit better when both ends are square.', url: amazonSearch('copper tubing cutter ridgid'), retailer: 'Amazon' },
      { name: 'Channel lock pliers (10-in pair)', blurb: 'Two pairs side-by-side for unscrewing fittings and tightening compression nuts. Real Channellock brand — same as for electrical work.', url: amazonSearch('channellock 10 inch tongue groove'), retailer: 'Amazon' },
      { name: 'Adjustable wrench set (8, 10, 12 in)', blurb: 'For hex-shaped supply nuts and angle stops where pliers slip. The Bahco Crescent series is the gold standard.', url: amazonSearch('adjustable wrench set crescent'), retailer: 'Amazon' },
      { name: 'Propane torch + striker', blurb: 'For sweating copper joints. Self-igniting MAPP torches save the striker step but cost more. Bernzomatic TS8000 is the standard — broad flame for ½" and ¾" copper work.', url: amazonSearch('bernzomatic ts8000 mapp torch'), retailer: 'Amazon' },
      { name: 'Drain snake (25 ft hand auger)', blurb: 'Clears most kitchen and lavatory drain clogs without a powered machine. The drum-style hand auger spins from a crank — adequate for residential clogs up to 40 ft of pipe.', url: amazonSearch('drum auger 25 foot drain'), retailer: 'Amazon' },
      { name: 'Toilet auger (closet auger)', blurb: 'Bent at the right angle to navigate the trap of a toilet without scratching the porcelain. Different tool from the standard drain snake — get one of each.', url: amazonSearch('closet auger toilet'), retailer: 'Amazon' },
      { name: 'Water pressure test gauge', blurb: 'Threads onto a hose bib and reads incoming static pressure. Check before sizing supply lines, regulators, or expansion tanks. Confirms whether you\'re running at code (40-80 PSI).', url: amazonSearch('water pressure test gauge'), retailer: 'Amazon' },
      { name: 'Plumber\'s putty + Teflon tape', blurb: 'Putty for under sink strainers and base seals; Teflon (PTFE) tape for threaded pipe joints. Two cheap consumables you\'ll burn through faster than expected.', url: amazonSearch('plumbers putty teflon tape'), retailer: 'Amazon' },
    ],
  },
  {
    slug: 'hvac',
    name: 'HVAC Tools',
    shortName: 'HVAC',
    metaTitle: 'Best HVAC Tools for Residential Service — ProjectCalc',
    metaDesc: 'Curated HVAC tools — manifold gauges, manometers, vacuum pumps, and refrigerant scales. Pro picks from Amazon for residential service techs.',
    intro: 'HVAC service tools are technical and brand-specific — most of the list below is gear required to handle refrigerant legally (EPA Section 608 cert) and to verify equipment performance. If you\'re a homeowner doing your own annual maintenance, the manometer and combustion analyzer cover the diagnostic side. If you\'re sizing equipment, the duct anemometer matters most. For full residential HVAC service, you need the manifold set, vacuum pump, and recovery machine — that trio runs $600-1500 depending on brand.',
    tools: [
      { name: 'Digital HVAC manifold gauge set', blurb: 'Reads pressure and saturation temp simultaneously — much faster than analog gauges plus a separate P-T chart. Required for charging, leak testing, and verifying subcooling/superheat.', url: amazonSearch('digital hvac manifold gauge set'), retailer: 'Amazon', essential: true },
      { name: 'Vacuum pump (3-5 CFM)', blurb: 'Pulls 500 micron vacuum on the system before charging. Required for any refrigerant work — moisture in the system kills compressors. Robinair and Yellow Jacket are the contractor standards.', url: amazonSearch('hvac vacuum pump 4 cfm'), retailer: 'Amazon', essential: true },
      { name: 'Digital manometer / Magnehelic gauge', blurb: 'Measures static pressure across the air handler (TESP). The single best diagnostic for blower performance, filter loading, and duct restriction.', url: amazonSearch('digital manometer hvac'), retailer: 'Amazon', essential: true },
      { name: 'Refrigerant scale (10kg / 220 lb)', blurb: 'Charges by weight per the equipment nameplate. Way more accurate than charging by sight glass or pressure. Yellow Jacket and Mastercool both make wireless models.', url: amazonSearch('refrigerant scale wireless'), retailer: 'Amazon' },
      { name: 'Hot-wire anemometer', blurb: 'Reads air velocity at registers — calculates CFM by velocity × free area. The right tool for verifying duct sizing matches Manual D design.', url: amazonSearch('hot wire anemometer hvac'), retailer: 'Amazon' },
      { name: 'Combustion analyzer', blurb: 'Reads CO, CO₂, O₂, and combustion efficiency on furnaces, boilers, and water heaters. Required to commission a high-efficiency boiler properly. Testo 320 is the residential workhorse.', url: amazonSearch('testo 320 combustion analyzer'), retailer: 'Amazon' },
      { name: 'Tubing cutter + flaring tool kit', blurb: 'For fabricating refrigerant line set flares on mini-splits. Cheap kits work; the Imperial 105-FA is the pro standard with eccentric ratchet flare.', url: amazonSearch('refrigerant flaring tool kit'), retailer: 'Amazon' },
      { name: 'Leak detector (electronic)', blurb: 'Sniffs for refrigerant leaks at fittings, evaporator coils, and line set joints. Heated diode detectors work on R-32, R-410A, R-454B. Fieldpiece SRL2 is solid mid-tier.', url: amazonSearch('hvac refrigerant leak detector'), retailer: 'Amazon' },
      { name: 'Pipe insulation cutters', blurb: 'Clean cuts on closed-cell line set insulation without crushing the foam. A regular utility knife works in a pinch but tears the cell structure.', url: amazonSearch('pipe insulation cutter foam'), retailer: 'Amazon' },
      { name: 'Fin straightener', blurb: '$10 plastic comb that uncrushes condenser coil fins after lawn-equipment damage. Restores airflow without buying a new condenser.', url: amazonSearch('condenser fin straightener'), retailer: 'Amazon' },
      { name: 'Schrader valve core remover', blurb: 'Speeds up evacuation and recovery by removing the core temporarily. Cuts vacuum-pull time in half on long line sets.', url: amazonSearch('schrader valve core remover'), retailer: 'Amazon' },
      { name: 'Smart thermostat (Ecobee or Nest)', blurb: 'Diagnostic logging tells you cycle times, runtime, and equipment efficiency over the season — confirms whether your AC is right-sized or short-cycling. Pays for itself in one season of energy savings.', url: amazonSearch('ecobee smart thermostat'), retailer: 'Amazon' },
    ],
  },
  {
    slug: 'home',
    name: 'Home & DIY Tools',
    shortName: 'Home & DIY',
    metaTitle: 'Best Home and DIY Project Tools — Drywall, Paint, Tile, Flooring',
    metaDesc: 'Hand tools and accessories for drywall, paint, tile, flooring, fence, and landscape projects. Curated picks from Amazon and Home Depot.',
    intro: 'These are the everyday-DIY tools — the ones that pay back across drywall patches, paint jobs, tile installs, and weekend yard work. Most are under $25 and earn their slot by saving an hour of frustration the first time you reach for them. The list skips the fancier specialty gear (drywall lifts, tile saws, carpet stretchers) covered on individual calculator pages and focuses on what you actually want at hand for any home project.',
    tools: [
      { name: 'Stud finder', blurb: 'For hanging anything heavier than a picture. Franklin Sensors models with whole-stud LED detection skip the swept-and-recalibrate routine and just work.', url: amazonSearch('franklin sensors stud finder'), retailer: 'Amazon', essential: true },
      { name: 'Caulk gun (dripless)', blurb: 'A $20 dripless caulk gun beats a $5 builder\'s gun on every metric — releases when you stop pulling so caulk doesn\'t keep flowing. Newborn 250 is the pro favorite.', url: amazonSearch('newborn 250 dripless caulk gun'), retailer: 'Amazon', essential: true },
      { name: 'Putty knife set', blurb: 'A 1.5", 3", and 6" knife set covers spackle patching, drywall mud, and seam-filling. Stainless blades clean easier than carbon steel.', url: amazonSearch('putty knife set stainless'), retailer: 'Amazon', essential: true },
      { name: 'Paint roller kit', blurb: 'A 9" roller frame, 3-pack of microfiber covers, tray, and edge brush. Buy quality covers — cheap covers shed lint into the finish on the first wall.', url: amazonSearch('paint roller kit microfiber'), retailer: 'Amazon' },
      { name: '5-gallon paint bucket grid', blurb: 'Hooks into a 5-gal bucket so you roll directly out of the bucket instead of refilling a tray every wall. Cuts setup time in half on rooms over 200 ft².', url: amazonSearch('5 gallon paint bucket grid'), retailer: 'Amazon' },
      { name: 'Drywall T-square (4 ft)', blurb: 'For scoring and snapping drywall to length. The aluminum T-square stays straight and clips over the sheet edge for a perfect square cut.', url: amazonSearch('drywall t square 4 ft'), retailer: 'Amazon' },
      { name: 'Drywall taping knife set', blurb: '4", 6", 10", and 12" knives — each tapered for a different mud step. The 4" sets corner bead and screw spots; the 12" feathers the final coat for invisible seams.', url: amazonSearch('drywall taping knife set'), retailer: 'Amazon' },
      { name: 'Notched trowel (¼" square)', blurb: 'For setting tile in thinset. The notch size matches your tile size — ¼" square for 12×12 tile, ½" for large-format. Wrong notch = lifted tile.', url: amazonSearch('notched trowel 1/4 inch tile'), retailer: 'Amazon' },
      { name: 'Rubber grout float', blurb: 'Spreads grout into joints at a 45° angle — the rubber face won\'t scratch tile. Pair with a tile sponge for the diagonal wipe-down 30 minutes after grouting.', url: amazonSearch('rubber grout float tile'), retailer: 'Amazon' },
      { name: 'Pry bar set', blurb: 'A flat bar (Wonderbar) and a cat\'s paw cover demolition, baseboard removal, and pulling embedded nails. The flat bar doubles as a chisel and scraper.', url: amazonSearch('pry bar set wonderbar'), retailer: 'Amazon' },
      { name: 'Utility knife + fresh blades', blurb: 'A retractable Stanley with 100-pack of blades. Swap blades constantly — dull blades cause more drywall and vinyl mistakes than any other tool.', url: amazonSearch('stanley utility knife blades'), retailer: 'Amazon' },
      { name: 'Garden dump cart', blurb: '5-cubic-foot tow-behind or hand cart for moving mulch, topsoil, gravel, or anything heavier than a wheelbarrow. The dump action saves your back on every load.', url: amazonSearch('garden dump cart'), retailer: 'Amazon' },
    ],
  },
];

export function getToolCategory(slug: string): ToolCategory | undefined {
  return toolCategories.find(c => c.slug === slug);
}

const TRADE_TO_TOOLS: Record<string, string> = {
  'Carpentry': 'carpentry',
  'Masonry & Siding': 'masonry',
  'Electrical': 'electrical',
  'Plumbing': 'plumbing',
  'HVAC': 'hvac',
};

const HOME_OVERRIDES: Record<string, string> = {
  'concrete-calculator': 'masonry',
  'paver-calculator': 'masonry',
  'paver-sand-calculator': 'masonry',
  'retaining-wall-calculator': 'masonry',
  'water-heater-size-calculator': 'plumbing',
};

export function getToolsCategoryForCalc(
  calcSlug: string,
  trade: string | undefined,
  category: string,
): ToolCategory | null {
  if (category === 'finance') return null;
  const override = HOME_OVERRIDES[calcSlug];
  if (override) return getToolCategory(override) ?? null;
  if (trade && TRADE_TO_TOOLS[trade]) return getToolCategory(TRADE_TO_TOOLS[trade]) ?? null;
  if (category === 'home') return getToolCategory('home') ?? null;
  return null;
}
