/** @type {import('next').NextConfig} */
const nextConfig = {
  // WordPress generated all internal archive links with a trailing slash.
  // Preserve that URL shape instead of normalizing it through a 308 first.
  trailingSlash: true,
  async rewrites() {
    return [
      // The archived WordPress pages link to clean URLs such as
      // `/class-7-foundation-program/`, while their static files live at
      // `/class-7-foundation-program/index.html`. Rewrite internally so a
      // click needs no redirect (and therefore never paints the interim
      // blank Next.js route).
      { source: '/:path+', destination: '/:path+/index.html' },
    ];
  },
};

module.exports = nextConfig;
