import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Deck stain coverage looks straightforward — a gallon
      labeled 250 ft² should cover 250 ft². In practice, deck
      condition, application style, and the railing nobody
      remembered measuring all push the real number around. Here
      is the practical version.
    </p>

    <h2>Smooth vs weathered — the 100-square-foot gap</h2>
    <p>
      The single biggest variable in stain coverage is whether
      the wood has been previously sealed or has weathered to
      bare gray:
    </p>
    <ul>
      <li><strong>Smooth or recently sealed wood:</strong> 250
        ft² per gallon. The first coat over a sealed surface
        sits on top.</li>
      <li><strong>Weathered or rough wood:</strong> 150 ft² per
        gallon. Open grain soaks in 50-70% more product than
        smooth.</li>
    </ul>
    <p>
      A 200 ft² deck swings from 0.8 gal to 1.3 gal depending on
      condition — the difference between buying one gallon and
      two. The{' '}
      <Link href="/deck-stain-calculator">deck stain calculator
      </Link>{' '}lets you pick condition.
    </p>

    <h2>Always count the railing</h2>
    <p>
      Railings are the most-forgotten coverage item on every deck
      job. A typical 16×12 deck (192 ft²) with 30 lin ft of
      railing has roughly <strong>120 ft² of railing
      surface</strong> when you count balusters, top and bottom
      rails, and the rim around the deck — that's another 60% on
      top of the deck floor. Forget the railing and you'll run
      out of stain mid-project.
    </p>
    <p>
      Quick estimate: railing surface area ≈ railing perimeter
      × 4 (approximation that catches both faces of the rim plus
      both sides of the balusters and rails). The calculator
      builds this in.
    </p>

    <h2>Two coats is the default</h2>
    <p>
      Most stain manufacturers spec two coats on new or recoated
      decks. The first coat soaks into the wood and acts as a
      primer-sealer; the second is the durable color and UV
      coat. One coat works only on:
    </p>
    <ul>
      <li>Light recoats over sound existing stain that's just
        worn</li>
      <li>Solid-color stains designed for one-coat application
        (read the label — they exist but are rare)</li>
      <li>Penetrating oils where you'd rather have a faded look
        on year 2</li>
    </ul>
    <p>
      Skip the second coat and you'll restain in 2-3 years
      instead of 4-5.
    </p>

    <h2>Penetrating vs film-forming</h2>
    <p>
      Stain breaks into two technology categories that affect
      coverage and longevity:
    </p>
    <ul>
      <li>
        <strong>Penetrating oil-based stains</strong> (Penofin,
        Sikkens Cetol) soak into the wood. Coverage runs higher
        on the bottle (300-400 ft²/gal) but the actual life is 2
        years on horizontal decking, 3-4 on railings.
      </li>
      <li>
        <strong>Film-forming acrylics</strong> (Behr
        Premium Solid, Cabot Solid Color) sit on the wood and
        form a paint-like layer. Coverage of 250 ft²/gal is
        typical; life on horizontal deck boards is 3-5 years
        before peeling starts.
      </li>
      <li>
        <strong>Hybrid semi-transparents</strong> (Cabot
        Australian Timber Oil, Ready Seal) split the difference.
        Coverage and life land between the two extremes.
      </li>
    </ul>

    <h2>Common errors</h2>
    <p>
      <strong>Staining over a wet deck.</strong> Stain needs
      bone-dry wood — moisture meter under 15% on horizontal
      surfaces. Stain on damp wood traps moisture below the
      finish; the stain peels in patches within one season.
    </p>
    <p>
      <strong>Skipping the cleaner-and-brightener.</strong> Old
      stain residue and weathered surface cells block new stain
      from bonding. A wood cleaner (Restore-A-Deck, oxalic acid
      brightener) on the day before staining nearly doubles the
      finish life.
    </p>
    <p>
      <strong>Staining in direct sun.</strong> Stain dries before
      it penetrates on a 90°F sunny board. Result: lap marks,
      blotchy color, premature flake. Stain in shade or on
      overcast days when the wood surface is below 80°F.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>How much stain for a 200 sq ft deck?</strong> About
      1 gallon for smooth wood, 2 gallons for weathered, both
      with two coats. Add 1 more gallon if you have railings.
    </p>
    <p>
      <strong>Can I use deck stain on a fence?</strong> Yes — the
      same products work on vertical wood, and coverage is
      typically 25% better on vertical (300 ft²/gal smooth)
      because there's less penetration.
    </p>
    <p>
      <strong>How long between coats?</strong> Read the label,
      but most stains call for 4-12 hours between coats. Below 50°F
      or above 90°F, extend the cure window. The second coat goes
      on as soon as the first is dry to the touch but not before.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/deck-stain-calculator" style={{ color: 'var(--hi-vis)' }}>deck stain calculator</Link>{' '}
      uses standard manufacturer coverage rates. Real coverage
      varies by product, wood species, and surface texture —
      verify with the spec sheet for the exact stain you're
      buying.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'deck-stain-coverage',
  title: 'Deck Stain — How Much Do You Need',
  metaTitle: 'Deck Stain Coverage — Smooth vs Weathered | ProjectCalc',
  metaDesc: 'Deck stain math: 250 ft² per gallon smooth, 150 weathered. Why the railing nobody measured doubles the order, plus penetrating vs film-forming.',
  excerpt: 'Deck stain coverage swings 100 ft² per gallon between smooth and weathered wood. Always count the railing. Two coats is the default. Here is the practical version.',
  date: '2026-04-27',
  readTime: 5,
  category: 'home',
  relatedCalcs: ['deck-stain-calculator', 'paint-calculator', 'lumber-calculator'],
  Body,
};

export default post;
