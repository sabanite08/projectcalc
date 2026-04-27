import { ImageResponse } from 'next/og';
import { getCalculator } from '@/lib/calculators';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'ProjectCalc — calculators for any project';

export default async function OGImage({ params }: { params: { slug: string } }) {
  const calc = getCalculator(params.slug);
  const title = calc?.title || 'PROJECTCALC';
  const subtitle = calc?.metaTitle.split(' — ')[1]?.split(' | ')[0] || calc?.desc || 'Calculators for any project';
  const formula = calc?.formula || '';

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
        {/* hi-vis stripe top-right */}
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

        {/* logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '40px' }}>
          <div
            style={{
              width: '20px',
              height: '20px',
              background: '#ffd400',
              transform: 'rotate(45deg)',
            }}
          />
          <div
            style={{
              fontSize: '24px',
              fontWeight: 900,
              letterSpacing: '0.04em',
              color: '#f4f1ea',
            }}
          >
            PROJECTCALC
          </div>
        </div>

        {/* tag */}
        <div
          style={{
            fontSize: '18px',
            color: '#ffd400',
            letterSpacing: '0.18em',
            marginBottom: '24px',
            textTransform: 'uppercase',
            display: 'flex',
          }}
        >
          {(calc?.category === 'finance' ? 'Finance' : calc?.category === 'construction' ? 'Trades' : 'Home & DIY')}
          {' / '} Calculator
        </div>

        {/* title */}
        <div
          style={{
            fontSize: '108px',
            fontWeight: 900,
            color: '#f4f1ea',
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
            textTransform: 'uppercase',
            maxWidth: '1000px',
            display: 'flex',
          }}
        >
          {title}
        </div>

        {/* subtitle / description */}
        <div
          style={{
            fontSize: '28px',
            color: '#b8b3a7',
            marginTop: '32px',
            maxWidth: '900px',
            lineHeight: 1.3,
            display: 'flex',
          }}
        >
          {subtitle}
        </div>

        {/* footer row: formula left, URL right */}
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
          <div style={{ fontSize: '20px', color: '#76726a', letterSpacing: '0.05em', display: 'flex' }}>
            {formula}
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
            projectcalc.app
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
