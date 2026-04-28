import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Tuckpointing — repointing the deteriorated mortar joints in
      a brick or stone wall — is one of those jobs where getting
      the math right is the easy part. Getting the{' '}
      <em>mortar mix</em> right is what saves the wall. Here's
      the bag-count math, plus the historic-mortar caveat that
      will keep you out of trouble on older buildings.
    </p>

    <h2>Volume math — joint length × width × depth</h2>
    <p>
      Mortar volume to repoint a wall is straightforward
      geometry:
    </p>
    <p style={{ padding: 12, background: 'rgba(255,212,0,0.05)', borderLeft: '2px solid #555', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
      ft³ = joint_LF × joint_W × joint_D ÷ 144
    </p>
    <p>
      An 80-lb bag of Type N or S mortar yields about{' '}
      <strong>0.6 ft³ once mixed</strong>. So 200 lin ft of 3/8 in
      joint repointed 3/4 in deep is:
    </p>
    <ul>
      <li>Volume = 200 × 0.375 × 0.75 ÷ 144 = 0.39 ft³</li>
      <li>Bags = 0.39 ÷ 0.6 = 1 bag (round up)</li>
    </ul>
    <p>
      Add 15% waste because tuckpointing involves a lot of
      partial-bag mixes and tooling loss — small repoint jobs
      typically eat more bag than the volume math suggests. Run
      the live count on the{' '}
      <Link href="/tuckpointing-calculator">tuckpointing
      calculator</Link>.
    </p>

    <h2>The BIA depth rule</h2>
    <p>
      Brick Industry Association Technical Note 7F sets the
      minimum repoint depth at <strong>2× the joint width and
      never less than 5/8 in</strong>. For a typical 3/8 in
      joint, that's 3/4 in deep. For a 1/2 in joint, it's 1 in
      deep.
    </p>
    <p>
      Why the depth rule? Cut a joint shallow and the new mortar
      pops out within a few years because the surface area for
      bond is too small. Cut deeper than 1.5 in and you're
      working past the depth a tuckpoint trowel can reach without
      bridging into the next joint. The 2× rule is the sweet spot
      for bond strength.
    </p>

    <h2>Match the mortar to the wall</h2>
    <p>
      This is the part most contractors miss. The compressive
      strength of repointing mortar must match — or be slightly
      softer than — the original mortar. A wall built in 1900
      with soft lime-based mortar (350 psi) and repointed with
      modern Type S (1,800 psi) creates a hardness mismatch.
      Freeze-thaw cycles and thermal expansion now happen in the
      brick face instead of the joint, and the wall spalls
      instead of weathering.
    </p>
    <p>
      Era-by-era guide:
    </p>
    <ul>
      <li>
        <strong>Pre-1880</strong> — mostly lime-only mortar (60
        to 250 psi). Use a Type O or weaker, often a custom
        lime-Portland blend.
      </li>
      <li>
        <strong>1880-1930</strong> — natural cement and lime
        mixes (350-750 psi). Type O (350 psi) is the safe match.
      </li>
      <li>
        <strong>1930-1970</strong> — Portland cement-lime mixes
        (Type N range, 750 psi). Modern Type N is fine.
      </li>
      <li>
        <strong>1970-present</strong> — Modern Type N or S
        depending on the original spec.
      </li>
    </ul>
    <p>
      For historic-register or pre-1930 buildings, send a sample
      of the existing mortar for chemical analysis before
      repointing. A preservation mason or local historic society
      will know the right lab. The analysis costs $200-400 and
      saves the brick face.
    </p>

    <h2>Color match</h2>
    <p>
      Even if the strength is right, the wrong color will be the
      thing the homeowner notices first. Bagged mortar is a flat
      gray; old joints are usually warmer (from natural cement)
      or whiter (from lime). Pre-blended "historic mortar" mixes
      from companies like Lancaster, Limeworks, and St. Astier
      come in dozens of color matches. Test patches on a small
      area before committing to the whole wall.
    </p>

    <h2>Joint length per square foot of wall</h2>
    <p>
      For a quick conversion, modular brick walls run roughly
      <strong> 7 lin ft of joint per ft² of wall face</strong>{' '}
      (head and bed joints combined). So a 200 ft² wall has about
      1,400 lin ft of joint. That said, you only repoint where
      the mortar is failing — a typical "spot repoint" addresses
      30-50% of the wall. Walk the wall and tape-measure the
      runs that need attention.
    </p>

    <h2>Common errors</h2>
    <p>
      <strong>Cutting joints with an angle grinder.</strong>{' '}
      Angle-grinder dust packs into adjacent joints and cracks
      brick faces at sharp angles. Use a tuckpoint blade in a
      mortar saw or hand-chisel narrow joints — slower but the
      brick survives.
    </p>
    <p>
      <strong>Tooling joints flush with the brick face.</strong>
      {' '}Original concave or weathered joints are slightly
      recessed. Tooling new mortar flush changes the wall's
      shadow line and looks wrong. Match the original tool
      profile with a tuckpoint jointer.
    </p>
    <p>
      <strong>Working in cold or wet weather.</strong> Mortar
      below 40°F doesn't cure properly. Above 90°F or in direct
      sun, it dries before it cures and cracks. Plan repointing
      for spring or fall, and mist the work for the first 48
      hours.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>How many bags of mortar for tuckpointing 200 sq ft
      of brick?</strong> If 50% of joints need repointing,
      roughly 700 lin ft × 3/8 in × 3/4 in = 1.4 ft³ → 3 bags
      with waste. The calculator handles the math from joint
      length directly.
    </p>
    <p>
      <strong>Can I tuckpoint over winter?</strong> Not
      practically. Mortar needs above 40°F for at least 48 hours
      after placement to cure. Cold-weather admixtures help but
      don't replace ambient temperature.
    </p>
    <p>
      <strong>How long does tuckpointing last?</strong> Properly
      done with a matched mortar — 50 to 80 years. Mismatched
      mortar (modern Type S on old brick) often fails in 10 to
      15 years and damages the brick face on the way out.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/tuckpointing-calculator" style={{ color: 'var(--hi-vis)' }}>tuckpointing calculator</Link>{' '}
      returns mortar quantity from joint volume only. Mortar type
      selection for historic buildings requires a chemical
      analysis of the original mortar — verify with a preservation
      mason before mixing.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'tuckpointing-mortar',
  title: 'Tuckpointing — Mortar for Repointing',
  metaTitle: 'Tuckpointing Mortar Math — Bags and BIA Depth | ProjectCalc',
  metaDesc: 'Tuckpointing mortar volume from joint length, width, and depth. BIA 2× depth rule, era-by-era mortar match, common errors that crack brick.',
  excerpt: 'Tuckpointing math is easy. Matching the mortar mix to the wall era is what saves the brick. Here is the volume math, the BIA depth rule, and the historic-mortar caveat.',
  date: '2026-04-27',
  readTime: 6,
  category: 'construction',
  relatedCalcs: ['tuckpointing-calculator', 'mortar-grout-calculator', 'brick-calculator'],
  Body,
};

export default post;
