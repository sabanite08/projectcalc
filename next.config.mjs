/** @type {import('next').NextConfig} */

// 301s for URLs that were live + indexed at some point but no longer exist.
// `flooring-calculator` was replaced by hardwood/carpet/vinyl on 2026-05-04 (b5367f3).
// Its companion blog post was deleted in the same commit; vinyl-plank guide deleted in e93e02a.
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/flooring-calculator', destination: '/hardwood-calculator', permanent: true },
      { source: '/blog/flooring-square-footage', destination: '/hardwood-calculator', permanent: true },
      { source: '/blog/vinyl-plank-flooring-guide', destination: '/vinyl-calculator', permanent: true },
    ];
  },
};

export default nextConfig;
