import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Once you know the BTU load on a room, the next question is
      how much air it takes to deliver that load. That's CFM —
      cubic feet per minute — and it drives everything else in
      the duct system. Here is the math, the rule of thumb, and
      the static-pressure problem nobody wants to talk about.
    </p>

    <h2>Sensible heat formula</h2>
    <p>
      The standard equation for air-side heat transfer:
    </p>
    <p style={{ padding: 12, background: 'rgba(255,212,0,0.05)', borderLeft: '2px solid #555', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
      CFM = BTU/hr ÷ (1.08 × ΔT)
    </p>
    <ul>
      <li><strong>BTU/hr</strong> = the heating or cooling load
        on the room or system</li>
      <li><strong>1.08</strong> = a constant that combines air
        density (0.075 lb/ft³), specific heat of air (0.24
        BTU/lb·°F), and 60 minutes per hour</li>
      <li><strong>ΔT</strong> = temperature difference between
        supply air and return air</li>
    </ul>
    <p>
      Run the live calculation on the{' '}
      <Link href="/duct-cfm-calculator">duct CFM calculator
      </Link>.
    </p>

    <h2>Pick the right ΔT</h2>
    <p>
      The temperature differential you use changes the answer
      significantly:
    </p>
    <ul>
      <li><strong>Cooling: 20°F ΔT</strong> — supply air at 55°F
        when return is 75°F. This is the standard residential
        cooling design point.</li>
      <li><strong>Furnace heating: 50-70°F ΔT</strong> — supply
        air at 130-140°F when return is 70°F. Gas and propane
        furnaces have higher supply temps than heat pumps.</li>
      <li><strong>Heat pump heating: 30-40°F ΔT</strong> — heat
        pumps deliver lower-temperature heat than furnaces, so
        the airflow is similar to or higher than cooling.</li>
    </ul>
    <p>
      Same room, same load: a furnace needs about 1/3 the CFM
      that AC needs because the higher ΔT lets each cubic foot
      of air carry more heat.
    </p>

    <h2>The 400 CFM per ton rule of thumb</h2>
    <p>
      For residential AC, the industry rule is{' '}
      <strong>400 CFM per ton of cooling capacity</strong>. That
      's a ratio that comes out automatically when you run a 20°F
      ΔT through the formula:
    </p>
    <p style={{ padding: 12, background: 'rgba(255,212,0,0.05)', borderLeft: '2px solid #555', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
      12,000 BTU ÷ (1.08 × 20°F) = 555 CFM theoretical, which
      derates to 400 in practice
    </p>
    <p>
      The 400-per-ton rule assumes a properly designed return-air
      side and a typical residential coil. High-static-pressure
      systems may end up at 350; high-humidity climates may
      design at 350 to extend dehumidification cycle time.
    </p>

    <h2>Why the duct system has to match</h2>
    <p>
      CFM is just the airflow target — the duct sizing has to
      actually deliver it. Manual D (the airflow companion to
      Manual J) sizes ducts to:
    </p>
    <ul>
      <li>Maintain velocity below 800 fpm in trunk lines and
        500 fpm in branches (above that, ducts are noisy and
        deliver poor airflow)</li>
      <li>Stay below 0.5 in. w.c. external static pressure
        (above that, the blower can't deliver design airflow)</li>
      <li>Balance airflow proportionally to room load — the
        room's CFM is what the calculator gives you, but it has
        to actually show up at the register</li>
    </ul>
    <p>
      A 2.5-ton system needs ~1,000 CFM total. If the existing
      ductwork was sized for a 2-ton (800 CFM) system and you
      upsize the equipment without resizing ducts, you've just
      capped your delivered capacity at 800 CFM regardless of
      what the equipment can do.
    </p>

    <h2>Common errors</h2>
    <p>
      <strong>Designing on rated CFM, not delivered CFM.</strong>
      {' '}A blower rated for 1,000 CFM at 0.5 in static delivers
      750 CFM at 0.8 in static. Real-world residential ducts
      often run at 0.7-0.9 in static, so equipment specs lie if
      you don't measure.
    </p>
    <p>
      <strong>Sizing ducts to the registers, not the load.</strong>
      {' '}A 6×10 supply register has roughly 60 in² of opening,
      which moves about 100 CFM at 1.5 in/sec face velocity. The
      register isn't the bottleneck — the duct feeding it is.
    </p>
    <p>
      <strong>Forgetting the return side.</strong> The return-air
      system has to move the same CFM as the supply, or the
      blower can't deliver design airflow. Most residential
      systems are starved for return — one giant 25×25 in central
      return for a whole house should really be 2-3 returns.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>How many CFM for a 2-ton AC?</strong> About 800
      CFM at 400 CFM/ton — that's 24,000 BTU ÷ (1.08 × 20°F).
    </p>
    <p>
      <strong>Can I undersize the CFM and get more dehumidification?
      </strong> Yes — the 350 CFM/ton derate is a deliberate move
      for humid climates. The lower airflow keeps the coil
      colder and pulls more water out of the air, at the cost of
      slower temperature reduction.
    </p>
    <p>
      <strong>Why is my room hot when the system is the right
      size?</strong> Almost always a duct problem, not a system
      problem. Cracked or disconnected duct in the attic, blocked
      register, or undersized branch is the usual culprit.
      Measure the actual CFM at the register with a flow hood —
      it's almost never what the design calls for.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/duct-cfm-calculator" style={{ color: 'var(--hi-vis)' }}>duct CFM calculator</Link>{' '}
      gives the airflow needed to move a given heat load. Real
      duct system performance also depends on static pressure,
      duct sizing per Manual D, and the return-air design — verify
      with a licensed HVAC contractor for full system design.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'duct-cfm-sizing',
  title: 'Duct CFM — Airflow For a Heat Load',
  metaTitle: 'Duct CFM Calculator — Airflow Math for HVAC | ProjectCalc',
  metaDesc: 'Duct CFM math: sensible heat formula, 400 CFM per ton rule, ΔT for cooling vs heating, why duct sizing has to match the equipment.',
  excerpt: 'Once you know the BTU load, CFM is what carries it. Here is the sensible heat formula, the 400-per-ton rule, the right delta-T, and the static-pressure problem nobody talks about.',
  date: '2026-04-27',
  readTime: 5,
  category: 'construction',
  relatedCalcs: ['duct-cfm-calculator', 'btu-calculator'],
  Body,
};

export default post;
