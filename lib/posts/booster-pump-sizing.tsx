import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Some buildings just don&apos;t get enough water pressure from the
      street. Hilltop houses where the municipal supply runs uphill, rural
      service lines hundreds of feet from the meter, top floors of any
      multi-story building — they all show the same symptoms. Trickle
      shower. Dribbling hose bib. Code-violation pressure at the most
      remote fixture. The fix is a booster pump, and sizing it correctly
      means the difference between solving the problem and creating two new
      ones (short-cycling, water hammer). Here&apos;s how to size it right.
    </p>

    <h2>When you actually need a booster</h2>
    <p>
      Three diagnostic checks before assuming a pump is the answer:
    </p>
    <p>
      <strong>1. Test incoming static pressure.</strong> A $10 hose-bib
      gauge tells you what the utility delivers. Code minimum at any fixture
      is 20 PSI; comfortable is 40–60 PSI. Above 80 PSI is too high (PRV
      required). If incoming static is 50+ PSI, a pump is probably not
      the right fix — find the friction loss instead.
    </p>
    <p>
      <strong>2. Test pressure during demand.</strong> Run a tub or shower
      and check pressure at the gauge. If incoming static is 60 PSI but
      under-load pressure drops to 25 PSI at the meter, the problem is
      friction loss in the supply line, not low pressure. Use the{' '}
      <Link href="/pressure-loss-calculator">pressure loss calculator</Link>{' '}
      to find where the loss is, fix the pipe, skip the pump.
    </p>
    <p>
      <strong>3. Calculate elevation loss.</strong> Each foot of vertical
      rise costs 0.433 PSI of static pressure. A second-floor master bath
      30 ft above the meter loses 13 PSI to elevation. If incoming is 50
      PSI and you need 40 PSI delivered after losing 13 to elevation and
      another 8 to friction, you&apos;re short by 11 PSI — that&apos;s
      what the pump needs to add.
    </p>

    <h2>The math: required boost</h2>
    <p>
      The booster needs to add enough PSI to bring the most remote fixture
      up to target pressure under peak demand:
    </p>
    <p style={{ fontFamily: 'JetBrains Mono, monospace', padding: '12px', background: 'var(--bg-2)', border: '1px solid var(--line)' }}>
      Boost (PSI) = (Target − Incoming Static) + Elevation Loss + Friction Loss
    </p>
    <p>
      <strong>Example:</strong> Incoming static 35 PSI, target delivered 60
      PSI, top fixture 25 ft above pump, friction loss 3 PSI in the supply
      run. Boost = (60 − 35) + (25 × 0.433) + 3 = 25 + 10.8 + 3 = 38.8
      PSI. Pick a pump rated for 40 PSI boost at the design flow rate.
    </p>
    <p>
      The{' '}
      <Link href="/booster-pump-sizing-calculator">booster pump sizing calculator</Link>{' '}
      runs this math and recommends a pump duty class and approximate motor
      HP.
    </p>

    <h2>The math: required GPM</h2>
    <p>
      The pump also has to deliver enough flow at the boosted pressure. Use
      peak demand from your fixture-unit calculation:
    </p>
    <ul>
      <li>1-bath ADU: ~5 GPM peak</li>
      <li>2-bath single family: ~10–15 GPM peak</li>
      <li>3-bath single family: ~15–20 GPM peak</li>
      <li>Multi-family duplex: ~25 GPM peak</li>
    </ul>
    <p>
      For VFD (variable-speed) pumps, add 10–20% capacity headroom so the
      pump can ramp up smoothly without running pinned at maximum. The{' '}
      <Link href="/water-supply-pipe-size-calculator">water supply pipe sizing calculator</Link>{' '}
      gives peak GPM directly from your fixture counts.
    </p>

    <h2>Pump types: constant-speed vs VFD</h2>
    <p>
      <strong>Constant-speed pumps</strong> (pressure-tank style):
    </p>
    <ul>
      <li>Cycle on at lower set point (e.g., 40 PSI), off at upper (e.g., 60 PSI)</li>
      <li>Need a pressure tank downstream (4–14 gal) to give run-time between starts</li>
      <li>Cheaper ($300–800 for residential)</li>
      <li>Pressure fluctuates 20+ PSI between cycles</li>
      <li>Short-cycle if undersized tank — kills the motor fast</li>
    </ul>
    <p>
      <strong>VFD (variable-speed) pumps:</strong>
    </p>
    <ul>
      <li>Modulate motor speed continuously to maintain constant set pressure</li>
      <li>No pressure tank required (or small one for shock absorption)</li>
      <li>More expensive ($800–2,000)</li>
      <li>Smooth pressure, near-silent operation</li>
      <li>Longer life (no start-stop thermal cycling)</li>
    </ul>
    <p>
      VFD is the modern default for residential booster service. The
      additional cost pays back in motor life and comfort.
    </p>

    <h2>Pressure tank sizing (constant-speed pumps only)</h2>
    <p>
      The pressure tank holds water under air pressure so the pump runs less
      frequently. Rule of thumb: tank should give the pump at least
      one full minute of run time at peak demand. Quick sizing:
    </p>
    <ul>
      <li>5 GPM peak demand: 4-gal tank minimum</li>
      <li>10 GPM peak: 14-gal tank</li>
      <li>15 GPM peak: 20-gal tank</li>
      <li>25 GPM peak: 32-gal tank</li>
    </ul>
    <p>
      Pre-charge tank air pressure to 2 PSI below the pump cut-in pressure
      (e.g., 38 PSI for a 40/60 cycle range). Wrong pre-charge is the
      single most common cause of pump short-cycling on otherwise-sized
      systems.
    </p>

    <h2>Where to install the pump</h2>
    <p>
      Standard locations:
    </p>
    <ul>
      <li><strong>Inside the building, after the meter:</strong> Most common for residential. Indoor location protects the pump from freezing and theft.</li>
      <li><strong>In a utility vault or pump house:</strong> Common for rural or commercial properties with long service runs. Vault must be drained or insulated.</li>
      <li><strong>Submersible in a cistern or storage tank:</strong> Used when local supply is intermittent (some rural municipal systems schedule water delivery). Pump moves stored water on demand.</li>
    </ul>
    <p>
      Always install with isolation valves on both sides plus a union or
      flange so you can replace the pump without cutting pipe. Add a check
      valve upstream to prevent backflow into the supply line.
    </p>

    <h2>Common mistakes</h2>
    <ul>
      <li><strong>Over-boosting.</strong> Targeting 80+ PSI delivered burns out fixtures and triggers pressure-relief valves all over the building. 50–60 PSI delivered is comfortable and code-compliant.</li>
      <li><strong>Sizing for average instead of peak.</strong> The pump has to handle simultaneous-fixture load, not single-fixture flow. Use peak GPM from a fixture-unit calculation.</li>
      <li><strong>No pressure tank with constant-speed pump.</strong> The pump cycles on/off every time anyone runs water. Motor dies in 6 months.</li>
      <li><strong>Wrong pressure-tank pre-charge.</strong> Tank air pressure must be 2 PSI below pump cut-in, set with the tank disconnected from water pressure. Tanks ship at 40 PSI from the factory regardless of system requirement.</li>
      <li><strong>No pressure relief valve on the discharge.</strong> Required by code on all booster systems. Without it, a stuck pressure switch can blow the supply line apart.</li>
    </ul>

    <h2>Quick FAQ</h2>
    <p>
      <strong>What size booster pump for a 2-bath house?</strong> Most
      residential 2-bath setups need 12–15 GPM at 20–30 PSI boost — that&apos;s
      a typical ½-HP to 1-HP pump like the Grundfos MQ3-45 or Davey HM
      series. Use the{' '}
      <Link href="/booster-pump-sizing-calculator">booster pump calculator</Link>{' '}
      to confirm the boost requirement for your specific situation.
    </p>
    <p>
      <strong>Can I use a well pump as a booster pump?</strong> Sometimes,
      but well pumps are usually sized for high-pressure, low-flow service
      (deep well lift). A purpose-built booster pump is sized for moderate
      pressure across higher flow. Get the right tool for the job.
    </p>
    <p>
      <strong>Does a booster pump increase my water bill?</strong> No —
      water consumption doesn&apos;t change. The pump uses electricity to
      add pressure to the same gallons. Electric cost is modest: a typical
      residential booster runs maybe $5–15/month at average use.
    </p>
    <p>
      <strong>Why is my booster pump cycling constantly?</strong> Almost
      always undersized pressure tank or wrong pre-charge pressure. Check
      tank pre-charge with the pump off and water drained. Set to 2 PSI
      below cut-in pressure.
    </p>

    <p style={{ marginTop: 32, padding: '16px', background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Run the numbers:</strong> the{' '}
      <Link href="/booster-pump-sizing-calculator" style={{ color: 'var(--hi-vis)' }}>booster pump sizing calculator</Link>{' '}
      computes required PSI boost and recommends pump duty class and
      approximate motor HP.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> Pump sizing depends on local
      water pressure conditions, fixture demand, fittings, and code
      amendments. Verify with a licensed plumber and your local
      plumbing inspector before purchase or installation. ProjectCalc
      is not responsible for code violations or system failures
      resulting from use.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'booster-pump-sizing-guide',
  title: 'How to Size a Booster Pump for Low-Pressure Water Service',
  metaTitle: 'Booster Pump Sizing — GPM, PSI, and Pump Selection | ProjectCalc',
  metaDesc: 'Size a residential booster pump correctly. When you need one, how to calculate required boost, constant-speed vs VFD, pressure tank sizing, and installation rules.',
  excerpt: 'Some buildings don\'t get enough water pressure from the street — hilltop houses, rural service lines, top floors. The fix is a booster pump, and sizing it right means the difference between solving the problem and creating two new ones.',
  date: '2026-04-27',
  readTime: 8,
  category: 'construction',
  relatedCalcs: ['booster-pump-sizing-calculator', 'pressure-loss-calculator', 'water-supply-pipe-size-calculator'],
  Body,
};

export default post;
