import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      The number on a mortgage calculator is almost never your real monthly
      housing cost. The two letters that matter are <strong>P&I</strong>{' '}
      (principal and interest) versus <strong>PITI</strong> (principal,
      interest, taxes, insurance). Here&apos;s how they differ, what gets escrowed,
      and a realistic way to budget for the actual cost of owning a home.
    </p>

    <h2>The two acronyms</h2>
    <p>
      <strong>P&I</strong> is the mortgage math everyone learned in algebra:
      a loan amount + interest rate + term gives you a fixed monthly payment.
      The <Link href="/mortgage-calculator">mortgage calculator</Link> shows
      this number. So does Zillow, NerdWallet, and every bank&apos;s "estimate
      your payment" tool.
    </p>
    <p>
      <strong>PITI</strong> is what shows up in your bank account. It&apos;s
      P&I plus property taxes plus homeowners insurance, all collected by
      your lender each month and held in an escrow account. The lender pays
      the tax and insurance bills on your behalf when they come due — which
      is why they collect 1/12 of the annual cost each month.
    </p>

    <h2>How much bigger is PITI than P&I?</h2>
    <p>
      Typically <strong>25–35% larger</strong>. On a $300,000 home with a
      $250,000 loan at 7%:
    </p>
    <ul>
      <li>P&I: $1,663/month (the calculator&apos;s answer)</li>
      <li>Property tax: ~$300–600/month (varies wildly by state — see below)</li>
      <li>Homeowners insurance: ~$120–220/month</li>
      <li>PMI (if down payment under 20%): ~$100–250/month</li>
      <li><strong>Realistic PITI: $2,180–2,730/month</strong></li>
    </ul>
    <p>
      That&apos;s 30–65% more than the headline P&I number. Knowing this is the
      difference between buying a house you can afford and buying a house
      that drains your savings.
    </p>

    <h2>Property tax: the wild variable</h2>
    <p>
      Property tax rates differ enormously by state and even by county. As an
      effective rate (annual tax ÷ home value):
    </p>
    <ul>
      <li>Hawaii, Alabama: 0.3–0.4%</li>
      <li>Tennessee, Florida, South Carolina: 0.5–0.8%</li>
      <li>Most southern + western states: 0.7–1.2%</li>
      <li>Texas, Wisconsin, Vermont: 1.5–1.9%</li>
      <li>New Jersey, Illinois, New Hampshire: 2.0–2.5%</li>
    </ul>
    <p>
      On a $300,000 home, that&apos;s $900/year in Hawaii vs $7,500/year in New
      Jersey. As a monthly escrow component: $75 vs $625. Always check the
      tax bill on the listing or county assessor&apos;s website before deciding
      what you can afford.
    </p>

    <h2>Insurance and PMI</h2>
    <p>
      <strong>Homeowners insurance</strong> averages $1,400–2,600/year in
      most states. Florida, Louisiana, and California (wildfire zones) can
      run $4,000+. The escrowed monthly amount is 1/12 of this.
    </p>
    <p>
      <strong>PMI (private mortgage insurance)</strong> kicks in when you
      put less than 20% down on a conventional loan. It costs 0.5–1.5% of
      the loan amount per year — so $1,250–3,750/year on a $250,000 loan,
      escrowed monthly. PMI drops off automatically once your loan balance
      hits 78% of the original home value, but you can request removal at
      80% if you&apos;ve had a recent appraisal.
    </p>
    <p>
      FHA loans have similar (often higher) MIP that&apos;s harder to remove.
      Veterans get a VA loan with no PMI and a lower funding fee.
    </p>

    <h2>The "true cost of homeownership" rule</h2>
    <p>
      Beyond PITI, real-world homeowners spend an additional 1–2% of the
      home&apos;s value annually on maintenance and unexpected repairs. On a
      $300,000 house, budget another $250–500/month for:
    </p>
    <ul>
      <li>HVAC tune-ups, water heater replacement</li>
      <li>Appliance failures (fridge, dishwasher, washer/dryer averaging 8–12 year lives)</li>
      <li>Roof repairs, eventual full replacement</li>
      <li>Plumbing, electrical, foundation issues</li>
      <li>Yard, exterior paint, fence, deck stain</li>
      <li>HOA fees (if applicable, $25–500/month additional)</li>
    </ul>
    <p>
      So the real number on a $300K house in a 1% property tax state is
      something like:
    </p>
    <ul>
      <li>P&I: $1,663</li>
      <li>+ Tax: $250</li>
      <li>+ Insurance: $150</li>
      <li>+ PMI (if applicable): $150</li>
      <li>+ Maintenance reserve: $300</li>
      <li>= <strong>$2,513/month true cost</strong></li>
    </ul>

    <h2>How to figure your number</h2>
    <p>
      Run the <Link href="/mortgage-calculator">mortgage calculator</Link>{' '}
      to get P&I. Then add:
    </p>
    <ol>
      <li>Annual property tax ÷ 12 (look up the listing&apos;s tax bill)</li>
      <li>Annual insurance estimate ÷ 12 (call an insurer or estimate at 0.5% of home value annually)</li>
      <li>PMI if down payment under 20% (~0.7% × loan amount ÷ 12 as a default)</li>
      <li>Maintenance reserve: 1% of home value ÷ 12</li>
    </ol>
    <p>
      The total is what your housing actually costs. If that number exceeds
      28% of your gross income, you&apos;re house-poor — even if a lender approves
      you. Lenders allow up to 36–43% total debt-to-income ratio, but living
      at the upper end of that range means you&apos;re one car repair away from
      missing a payment.
    </p>

    <h2>Other loans that affect your real budget</h2>
    <p>
      The lender looks at your total monthly debts when qualifying you. Auto
      and personal loans both count against your debt-to-income ratio.
    </p>
    <p>
      Run those numbers too: the{' '}
      <Link href="/car-payment-calculator">car payment calculator</Link> for
      any vehicle financing, and the{' '}
      <Link href="/personal-loan-calculator">personal loan calculator</Link>{' '}
      for credit card consolidation or other debt. If your existing loans
      already use 15% of your gross income, your remaining housing budget is
      tighter than the standard 28% rule suggests.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>What does PITI mean?</strong> Principal, Interest, Taxes,
      Insurance — the four parts of your monthly mortgage payment when
      tax/insurance are escrowed.
    </p>
    <p>
      <strong>Can I avoid escrow?</strong> Some lenders allow it if you put
      20%+ down and have good credit. You then pay tax and insurance bills
      directly when they come due. Saves a tiny bit of money (you keep the
      float) but requires discipline to set aside 1/12 each month yourself.
    </p>
    <p>
      <strong>How much house can I afford?</strong> Total PITI + maintenance
      should stay under 28% of gross monthly income. Total monthly debts
      (housing + cars + loans + credit cards) under 36%. Going higher gets
      you in the door but stresses your budget.
    </p>

    <p style={{ marginTop: 32, padding: '16px', background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Run the numbers:</strong> use the{' '}
      <Link href="/mortgage-calculator" style={{ color: 'var(--hi-vis)' }}>mortgage calculator</Link>{' '}
      for P&I, then add tax + insurance + maintenance manually for true cost.
      Have a car or other loan? Run those through the{' '}
      <Link href="/car-payment-calculator" style={{ color: 'var(--hi-vis)' }}>car payment</Link>{' '}
      and{' '}
      <Link href="/personal-loan-calculator" style={{ color: 'var(--hi-vis)' }}>personal loan</Link>{' '}
      calculators too.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'mortgage-pi-vs-piti',
  title: 'Mortgage P&I vs PITI: What Your Real Monthly Cost Will Be',
  metaTitle: 'P&I vs PITI Mortgage Math — Real Monthly Cost | ProjectCalc',
  metaDesc: 'The mortgage calculator number is not your real housing cost. Real numbers on PITI, escrow, PMI, property tax by state, and the maintenance reserve.',
  excerpt: 'The number on a mortgage calculator is almost never your real monthly housing cost. P&I (principal and interest) is what calculators show. PITI (with taxes and insurance) is what shows up in your bank account.',
  date: '2026-04-26',
  readTime: 7,
  category: 'finance',
  relatedCalcs: ['mortgage-calculator', 'car-payment-calculator', 'personal-loan-calculator'],
  Body,
};

export default post;
