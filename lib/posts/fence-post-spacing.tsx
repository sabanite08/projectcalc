import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      A wood privacy fence comes down to three numbers: post
      count, panel count, and concrete bag count. Get the spacing
      and depth right and the fence stands for 20-30 years. Get
      them wrong and posts heave, panels warp, and gates sag
      within five.
    </p>

    <h2>Post spacing — 8 ft is the standard</h2>
    <p>
      Wood fence posts go on <strong>8 ft centers</strong> for
      almost every residential install. That matches standard
      panel kits and pre-cut rails. Vinyl fences run 6 or 8 ft
      depending on the panel system. Chain link can stretch to
      10 ft on light-duty residential.
    </p>
    <p>
      The post count math is simple: total length ÷ spacing,
      then add one for the closing post. A 100 ft run at 8 ft
      spacing = 13 spans → 14 posts. Plus extras for every gate
      (one extra post per gate, since gates need a hinge post and
      a latch post on adjacent panels).
    </p>
    <p>
      The{' '}
      <Link href="/fence-calculator">fence calculator</Link>{' '}
      handles all three counts automatically.
    </p>

    <h2>Concrete per post — depth matters more than width</h2>
    <p>
      The standard rule for a 6 ft wood privacy fence is{' '}
      <strong>2 bags of 60-lb concrete per post</strong> in a 10
      in wide hole, 2 ft deep. Tighter math:
    </p>
    <ul>
      <li>3 ft fence (picket): 1 bag per post, 18 in deep</li>
      <li>4-5 ft fence: 1 bag per post, 24 in deep</li>
      <li>6 ft privacy fence: 2 bags per post, 24-30 in deep</li>
      <li>8 ft tall: 2-3 bags per post, 36 in deep, plus
        anchor lag bolts in some jurisdictions</li>
    </ul>

    <h2>Frost depth changes the rules</h2>
    <p>
      Posts must be set <strong>below the frost line</strong> or
      they'll heave every winter. Frost depths by region:
    </p>
    <ul>
      <li>Southern states (FL, TX, AZ, GA): 0-12 in — anchor
        depth is wind-driven, not frost</li>
      <li>Mid-Atlantic, Mid-South: 12-24 in</li>
      <li>Midwest, Northeast: 36-48 in</li>
      <li>Northern Plains, New England, Mountain West: 42-60 in</li>
    </ul>
    <p>
      Check your county's published frost depth before digging.
      The fence calculator's default depth assumes a moderate
      climate; adjust your concrete bag count accordingly. A 4
      ft frost depth doubles the bag count from a 2 ft depth.
    </p>

    <h2>Gate posts get extra everything</h2>
    <p>
      A gate post takes the swinging weight of the gate plus
      every slam over its lifetime. Treat both gate posts as
      heavy-duty:
    </p>
    <ul>
      <li>Use 6×6 posts (not 4×4) — minimum on any gate over 4
        ft wide</li>
      <li>Set 6-12 in deeper than field posts</li>
      <li>Add 1-2 extra bags of concrete per gate post</li>
      <li>Use longer hinges with through-bolts, not lag screws,
        for any gate over 5 ft wide</li>
    </ul>

    <h2>Common errors</h2>
    <p>
      <strong>Forgetting the extra closing post.</strong> Posts
      are 1 more than the number of spans, not equal. A 100-ft
      run at 8 ft spacing has 13 spans but 14 posts.
    </p>
    <p>
      <strong>Skipping the gravel base.</strong> Drop 4-6 in of
      gravel into the bottom of every post hole before the post
      goes in. Gravel drains water away from the post bottom.
      Direct concrete contact with end-grain rots out a treated
      4×4 in 8-12 years.
    </p>
    <p>
      <strong>Mixing concrete too wet.</strong> Fence-post
      concrete is meant to set <em>moist, not soupy</em>. Pour
      the dry mix into the hole, run a stick around to settle
      it, then add water until the surface goes wet but you can
      still hold the post plumb without it sinking. Wet-mixed
      concrete shrinks more and pulls away from the post wall.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>How many fence posts for 100 feet?</strong> At 8 ft
      spacing: 14 posts (13 spans + 1 end). Add 1 per gate.
    </p>
    <p>
      <strong>Can I set fence posts without concrete?</strong>
      {' '}For temporary fences and dog runs, gravel-only set
      works. For any permanent fence over 4 ft tall, concrete is
      the standard for wind resistance and frost stability.
    </p>
    <p>
      <strong>Do I need a building permit for a fence?</strong>
      {' '}Most jurisdictions require permits for fences over 6
      ft tall (sometimes 7) and any fence with a vehicle gate.
      Pickets and short privacy fences usually don't need permits
      but always need to respect property setbacks.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/fence-calculator" style={{ color: 'var(--hi-vis)' }}>fence calculator</Link>{' '}
      uses standard 6 ft wood privacy fence assumptions. Frost
      depth, wind exposure, and local building codes change post
      spacing and concrete requirements — verify with your
      jurisdiction before digging.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'fence-post-spacing',
  title: 'Fence Posts — Spacing, Concrete, and Frost Depth',
  metaTitle: 'Fence Post Spacing and Concrete — How Many Bags | ProjectCalc',
  metaDesc: 'Wood fence post math: 8 ft spacing standard, 2 bags of concrete per post for a 6 ft fence, frost depth by region, gate post upgrades.',
  excerpt: 'A wood privacy fence is three numbers: posts, panels, concrete. Spacing is 8 ft standard; concrete depth depends on frost line. Here is the math plus the gate-post upgrade.',
  date: '2026-04-27',
  readTime: 5,
  category: 'home',
  relatedCalcs: ['fence-calculator', 'concrete-calculator', 'lumber-calculator'],
  Body,
};

export default post;
