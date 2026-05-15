import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { calculators, getCalculator } from '@/lib/calculators';
import { getFAQ } from '@/lib/faqs';
import { getPostsForCalc } from '@/lib/posts';
import CalculatorView from '@/components/CalculatorView';
import ToolkitCTA from '@/components/ToolkitCTA';
import { getToolkitForCalc } from '@/lib/toolkits';
import { renderInline, stripInlineLinks } from '@/lib/render';
import { getToolsCategoryForCalc } from '@/lib/tools';
import { authorPersonSchema, LAST_REVIEWED, LAST_REVIEWED_LABEL } from '@/lib/author';

const categoryLabels: Record<string, string> = {
  construction: 'TRADES',
  home: 'HOME & DIY',
  finance: 'FINANCE',
  utility: 'UTILITY',
};

export async function generateStaticParams() {
  return calculators.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const calc = getCalculator(slug);
  if (!calc) return { title: 'Calculator not found' };
  return {
    title: { absolute: calc.metaTitle },
    description: calc.metaDesc,
    alternates: { canonical: `https://projectcalc.app/${calc.slug}` },
    openGraph: {
      title: calc.metaTitle,
      description: calc.metaDesc,
      url: `https://projectcalc.app/${calc.slug}`,
      type: 'website',
    },
  };
}

export default async function CalcPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const calc = getCalculator(slug);
  if (!calc) notFound();

  // Find related calcs in same category, exclude current
  const related = calculators
    .filter(c => c.category === calc.category && c.slug !== calc.slug)
    .slice(0, 6);

  const faq = getFAQ(calc.slug);
  const hasAffiliateLink = faq.some(f => /\]\([^)]*amazon\./i.test(f.a));
  const relatedPosts = getPostsForCalc(calc.slug);
  const isFinanceAdvice = calc.category === 'finance' && calc.slug !== 'tip-calculator';
  const toolkit = getToolkitForCalc(calc.slug);
  const toolsCategory = getToolsCategoryForCalc(calc.slug, calc.trade, calc.category);

  // JSON-LD structured data for Google — combine WebApplication + FAQPage in @graph
  const ldGraph: object[] = [
    {
      '@type': 'WebApplication',
      name: calc.metaTitle.split(' | ')[0],
      description: calc.metaDesc,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web',
      url: `https://projectcalc.app/${calc.slug}`,
      dateModified: LAST_REVIEWED,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      author: authorPersonSchema,
      publisher: { '@type': 'Organization', name: 'ProjectCalc', url: 'https://projectcalc.app' },
    },
  ];
  if (faq.length > 0) {
    ldGraph.push({
      '@type': 'FAQPage',
      mainEntity: faq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: stripInlineLinks(item.a) },
      })),
    });
  }
  // BreadcrumbList — Home / Category / [Hub] / Calc
  const breadcrumbItems: object[] = [
    { '@type': 'ListItem', position: 1, name: 'ProjectCalc', item: 'https://projectcalc.app' },
    { '@type': 'ListItem', position: 2, name: categoryLabels[calc.category], item: `https://projectcalc.app/#${calc.category}` },
  ];
  if (toolsCategory) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 3,
      name: toolsCategory.shortName,
      item: `https://projectcalc.app/tools/${toolsCategory.slug}`,
    });
    breadcrumbItems.push({ '@type': 'ListItem', position: 4, name: calc.title });
  } else {
    breadcrumbItems.push({ '@type': 'ListItem', position: 3, name: calc.title });
  }
  ldGraph.push({ '@type': 'BreadcrumbList', itemListElement: breadcrumbItems });
  const ldJson = { '@context': 'https://schema.org', '@graph': ldGraph };

  return (
    <main>
      <section className="calc-wrap">
        <nav className="breadcrumb">
          <Link href="/">ProjectCalc</Link>
          <span className="sep">/</span>
          <Link href={`/#${calc.category}`}>{categoryLabels[calc.category]}</Link>
          {toolsCategory && (
            <>
              <span className="sep">/</span>
              <Link href={`/tools/${toolsCategory.slug}`}>{toolsCategory.shortName}</Link>
            </>
          )}
          <span className="sep">/</span>
          <span>{calc.title}</span>
        </nav>

        <div className="calc-header">
          <div>
            <div className="calc-formula">{calc.name.toUpperCase()} · REVIEWED {LAST_REVIEWED_LABEL}</div>
            <h1 className="calc-title">{calc.title}</h1>
          </div>
          <div className="calc-formula">{calc.formula}</div>
        </div>

        <CalculatorView slug={calc.slug} />

        {toolsCategory && (
          <Link href={`/tools/${toolsCategory.slug}`} className="tools-cta">
            <div className="tools-cta-label">RECOMMENDED TOOLS</div>
            <div className="tools-cta-text">
              {toolsCategory.name} we recommend for projects like this
            </div>
            <div className="tools-cta-arrow">→</div>
          </Link>
        )}

        {toolkit && <ToolkitCTA toolkit={toolkit} />}

        {isFinanceAdvice && (
          <div className="disclaimer">
            <strong>Not financial advice.</strong> This calculator provides
            estimates using industry-standard formulas for educational purposes
            only. Real loan terms vary based on your credit, lender fees, and
            program-specific rates. For any major financial decision (home
            purchase, large loan, refinance), consult a licensed loan officer or
            financial advisor before signing anything.
          </div>
        )}

        <div className="seo-block">
          <h2>About this calculator</h2>
          {calc.seoIntro.split('\n\n').map((p, i) => <p key={i}>{renderInline(p)}</p>)}

          {calc.howToUse && (
            <details className="prose-section" open>
              <summary>How to use this calculator</summary>
              <div className="prose-content">
                {calc.howToUse.split('\n\n').map((p, i) => <p key={i}>{renderInline(p)}</p>)}
              </div>
            </details>
          )}

          {calc.workedExample && (
            <details className="prose-section">
              <summary>Worked example</summary>
              <div className="prose-content">
                {calc.workedExample.split('\n\n').map((p, i) => <p key={i}>{renderInline(p)}</p>)}
              </div>
            </details>
          )}

          {calc.commonMistakes && (
            <details className="prose-section">
              <summary>Common mistakes &amp; waste factors</summary>
              <div className="prose-content">
                {calc.commonMistakes.split('\n\n').map((p, i) => <p key={i}>{renderInline(p)}</p>)}
              </div>
            </details>
          )}

          {calc.rulesOfThumb && (
            <details className="prose-section">
              <summary>Rules of thumb</summary>
              <div className="prose-content">
                {calc.rulesOfThumb.split('\n\n').map((p, i) => <p key={i}>{renderInline(p)}</p>)}
              </div>
            </details>
          )}
        </div>

        {faq.length > 0 && (
          <div className="faq-block">
            <h2>Common questions</h2>
            {hasAffiliateLink && (
              <p className="affiliate-note">
                Tool and material links below are affiliate links — we may earn a
                small commission if you buy, at no extra cost to you.
              </p>
            )}
            {faq.map((item, i) => (
              <details key={i} className="faq-item" open={i === 0}>
                <summary>{item.q}</summary>
                <div className="faq-answer">{renderInline(item.a)}</div>
              </details>
            ))}
          </div>
        )}

        {relatedPosts.length > 0 && (
          <div className="related">
            <div className="section-label">
              <span>RELATED GUIDES</span>
            </div>
            <div className="related-list">
              {relatedPosts.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`}>
                  <div className="cat-name" style={{ fontSize: 14 }}>{p.title}</div>
                  <div className="cat-desc">{p.readTime} MIN READ</div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {related.length > 0 && (
          <div className="related">
            <div className="section-label">
              <span>RELATED CALCULATORS</span>
            </div>
            <div className="related-list">
              {related.map(r => (
                <Link key={r.slug} href={`/${r.slug}`}>
                  <div className="cat-name" style={{ fontSize: 14 }}>{r.name}</div>
                  <div className="cat-desc">{r.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
      </section>
    </main>
  );
}
