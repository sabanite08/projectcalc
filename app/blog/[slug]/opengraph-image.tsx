import { ImageResponse } from 'next/og';
import { getPost } from '@/lib/posts';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'ProjectCalc — project guides';

export default async function OGImage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  const title = post?.title || 'PROJECT GUIDE';
  const category = post?.category === 'finance' ? 'Finance' : post?.category === 'construction' ? 'Trades' : 'Home & DIY';
  const readTime = post?.readTime || 5;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#0e0e0c',
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          padding: '64px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '12px',
            height: '180px',
            background: '#ffd400',
          }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '40px' }}>
          <div
            style={{
              width: '20px',
              height: '20px',
              background: '#ffd400',
              transform: 'rotate(45deg)',
            }}
          />
          <div style={{ fontSize: '24px', fontWeight: 900, letterSpacing: '0.04em', color: '#f4f1ea' }}>
            PROJECTCALC
          </div>
        </div>
        <div
          style={{
            fontSize: '18px',
            color: '#ffd400',
            letterSpacing: '0.18em',
            marginBottom: '24px',
            textTransform: 'uppercase',
            display: 'flex',
            gap: '16px',
          }}
        >
          <span>Field Guide</span>
          <span style={{ color: '#76726a' }}>/</span>
          <span style={{ color: '#b8b3a7' }}>{category}</span>
          <span style={{ color: '#76726a' }}>/</span>
          <span style={{ color: '#b8b3a7' }}>{readTime} min read</span>
        </div>
        <div
          style={{
            fontSize: '64px',
            fontWeight: 900,
            color: '#f4f1ea',
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            maxWidth: '1000px',
            display: 'flex',
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 'auto',
            paddingTop: '32px',
            borderTop: '1px solid #2a2a26',
          }}
        >
          <div style={{ fontSize: '20px', color: '#76726a', letterSpacing: '0.1em', display: 'flex', textTransform: 'uppercase' }}>
            Honest project guides
          </div>
          <div
            style={{
              fontSize: '22px',
              color: '#ffd400',
              letterSpacing: '0.1em',
              fontWeight: 700,
              display: 'flex',
            }}
          >
            projectcalc.app/blog
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
