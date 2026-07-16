import './globals.css';
import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/next';
import CalcSearch from '@/components/CalcSearch';
import SwRegister from '@/components/SwRegister';

export const viewport: Viewport = {
  themeColor: '#0e0e0c',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://projectcalc.app'),
  title: {
    default: 'ProjectCalc — Quick calculators for any project',
    template: '%s | ProjectCalc',
  },
  description: 'Free, fast calculators for construction, home improvement, and DIY projects. Drywall, paint, concrete, roofing, lumber, voltage drop, and more. No signup, no popups.',
  openGraph: {
    title: 'ProjectCalc — Calculators for any project',
    description: 'Free, fast calculators for construction, home improvement, and DIY projects.',
    url: 'https://projectcalc.app',
    siteName: 'ProjectCalc',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProjectCalc',
    description: 'Free, fast calculators for any project — pro or DIY.',
  },
  icons: {
    icon: [
      { url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Crect width='16' height='16' fill='%230e0e0c'/%3E%3Crect x='3' y='3' width='10' height='10' fill='%23ffd400' transform='rotate(45 8 8)'/%3E%3C/svg%3E" },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-icon', sizes: '180x180', type: 'image/png' }],
  },
  appleWebApp: {
    capable: true,
    title: 'ProjectCalc',
    statusBarStyle: 'black-translucent',
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* @ts-ignore */}
        <meta name='impact-site-verification' value='e1cdc443-992b-4317-9ff5-5fb602ce62e3' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="site-header">
          <Link href="/" className="logo">PROJECTCALC</Link>
          <CalcSearch />
          <nav className="header-nav">
            <Link href="/#home">Home</Link>
            <Link href="/#construction">Trades</Link>
            <Link href="/#finance">Finance</Link>
            <Link href="/sketch">Sketch</Link>
            <Link href="/shed-plans">Shed Plans</Link>
            <Link href="/garage-plans">Garage Plans</Link>
            <Link href="/tools">Tools</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <div className="footer-links" aria-label="Tool categories">
            <span style={{ opacity: 0.6, fontSize: '0.9em', marginRight: 8 }}>TOOLS BY TRADE:</span>
            <Link href="/tools/carpentry">Carpentry</Link>
            <Link href="/tools/masonry">Masonry</Link>
            <Link href="/tools/electrical">Electrical</Link>
            <Link href="/tools/plumbing">Plumbing</Link>
            <Link href="/tools/hvac">HVAC</Link>
            <Link href="/tools/home">Home &amp; DIY</Link>
          </div>
          <div>© PROJECTCALC — BUILT FOR ANY PROJECT</div>
          <div className="footer-sister">
            Sister project: <a href="https://operaite.net">Operaite</a> — AI tools for small business owners
          </div>
          <div className="footer-links">
            <Link href="/about">About</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="https://github.com/sabanite08/projectcalc">GitHub</Link>
          </div>
        </footer>
        <Analytics />
        <SwRegister />
      </body>
    </html>
  );
}
