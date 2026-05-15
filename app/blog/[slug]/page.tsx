import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { posts, getPost, getRelatedPosts } from '@/lib/posts';
import { getCalculator } from '@/lib/calculators';
import { author, authorPersonSchema } from '@/lib/author';

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: 'Article not found' };
  return {
    title: { absolute: post.metaTitle },
    description: post.metaDesc,
    alternates: { canonical: `https://projectcalc.app/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDesc,
      url: `https://projectcalc.app/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

const categoryLabels: Record<string, string> = {
  home: 'HOME & DIY',
  construction: 'TRADES',
  finance: 'FINANCE',
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);
  const relatedCalcs = post.relatedCalcs
    .map(s => getCalculator(s))
    .filter((c): c is NonNullable<typeof c> => c !== undefined);

  const ldJson = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDesc,
    datePublished: post.date,
    dateModified: post.date,
    author: authorPersonSchema,
    publisher: {
      '@type': 'Organization',
      name: 'ProjectCalc',
      url: 'https://projectcalc.app',
    },
    mainEntityOfPage: `https://projectcalc.app/blog/${post.slug}`,
  };

  const Body = post.Body;

  return (
    <main>
      <section className="calc-wrap">
        <nav className="breadcrumb">
          <Link href="/">ProjectCalc</Link>
          <span className="sep">/</span>
          <Link href="/blog">Blog</Link>
          <span className="sep">/</span>
          <span>{post.title}</span>
        </nav>

        <div className="article-header">
          <div className="post-meta">
            <span>{categoryLabels[post.category]}</span>
            <span>·</span>
            <span>{post.readTime} MIN READ</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>BY <Link href="/about" style={{ color: 'inherit', textDecoration: 'underline' }}>{author.firstName.toUpperCase()}</Link></span>
          </div>
          <h1 className="article-title">{post.title}</h1>
        </div>

        <article className="article-body">
          <Body />
        </article>

        {relatedCalcs.length > 0 && (
          <div className="related">
            <div className="section-label">
              <span>USE THE CALCULATOR</span>
            </div>
            <div className="related-list">
              {relatedCalcs.map(c => (
                <Link key={c.slug} href={`/${c.slug}`}>
                  <div className="cat-name" style={{ fontSize: 14 }}>{c.name}</div>
                  <div className="cat-desc">{c.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {related.length > 0 && (
          <div className="related">
            <div className="section-label">
              <span>MORE GUIDES</span>
            </div>
            <div className="related-list">
              {related.map(r => (
                <Link key={r.slug} href={`/blog/${r.slug}`}>
                  <div className="cat-name" style={{ fontSize: 14 }}>{r.title}</div>
                  <div className="cat-desc">{categoryLabels[r.category]} · {r.readTime} min</div>
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
