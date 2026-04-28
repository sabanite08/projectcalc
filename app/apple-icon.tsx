import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0e0e0c',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: 116,
            height: 116,
            background: '#ffd400',
            transform: 'rotate(45deg)',
            position: 'absolute',
          }}
        />
        <div
          style={{
            position: 'relative',
            color: '#0e0e0c',
            fontSize: 56,
            fontWeight: 900,
            letterSpacing: -2,
            fontFamily: 'sans-serif',
          }}
        >
          PC
        </div>
      </div>
    ),
    { ...size }
  );
}
