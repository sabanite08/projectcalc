/** @type {import('next').NextConfig} */

// 2026-05-06: every calc slug got an SEO `-calculator` suffix.
// These 301s preserve existing Google index entries from the old short slugs.
// Source of truth: lib/calculators.ts. If a slug is removed/renamed there, also drop it here.
const renamedSlugs = [
  'drywall', 'paint', 'concrete', 'roofing', 'hardwood', 'carpet', 'vinyl', 'tile',
  'mulch', 'gravel', 'fence', 'deck-stain', 'insulation', 'siding', 'sod',
  'brick', 'mortar-grout', 'cmu-block', 'stone-veneer', 'stucco', 'tuckpointing',
  'lumber', 'voltage-drop', 'btu', 'pipe-volume', 'lumber-cut', 'conduit-fill',
  'wire-gauge', 'circuit-breaker-size', 'panel-load', 'conduit-bending', 'generator-size',
  'pipe-slope', 'water-supply-pipe-size', 'drain-pipe-size', 'vent-pipe-size',
  'pressure-loss', 'gpm-to-pipe-size', 'trap-size', 'water-meter-size',
  'building-drain-size', 'wet-wall-stack', 'booster-pump-sizing', 'expansion-tank-sizing',
  'duct-cfm', 'manual-j-heat-load', 'refrigerant-charge', 'static-pressure',
  'ventilation-cfm', 'heat-loss', 'mortgage', 'car-payment', 'personal-loan', 'tip',
  'stair-stringer', 'beam-span', 'plywood-sheets', 'rafter-length', 'header-size',
  'paver', 'paver-sand', 'retaining-wall', 'roof-pitch', 'roof-truss', 'snow-load',
  'floor-joist-span', 'rebar', 'ac-tonnage', 'furnace-size', 'boiler-size',
  'mini-split-sizing', 'water-heater-size', 'topsoil',
];

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return renamedSlugs.map(slug => ({
      source: `/${slug}`,
      destination: `/${slug}-calculator`,
      permanent: true,
    }));
  },
};

export default nextConfig;
