/** @type {import('next').NextConfig} */
const nextConfig = {
  // WordPress generated all internal archive links with a trailing slash.
  // Preserve that URL shape, but disable the automatic 308 redirect that forces
  // a trailing slash, so requests with or without trailing slashes load immediately
  // without flashing a 404 / redirect screen.
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return {
      beforeFiles: [
        // Map alternative spellings and aliases for centres (both with and without trailing slash):
        { source: '/centers', destination: '/centres/' },
        { source: '/centers/', destination: '/centres/' },
        { source: '/our-centers', destination: '/centres/' },
        { source: '/our-centers/', destination: '/centres/' },
        { source: '/our-centres', destination: '/centres/' },
        { source: '/our-centres/', destination: '/centres/' },
        { source: '/centers/hebbal', destination: '/centres/hebbal-sahakaranagar/' },
        { source: '/centers/hebbal/', destination: '/centres/hebbal-sahakaranagar/' },
        { source: '/centres/hebbal', destination: '/centres/hebbal-sahakaranagar/' },
        { source: '/centres/hebbal/', destination: '/centres/hebbal-sahakaranagar/' },
      ],
      fallback: [
        // Serve the homepage and archived WordPress pages cleanly with no redirect
        // so navigation never triggers an interim 307 or 404 screen.
        { source: '/', destination: '/index.html' },
        { source: '/:path+', destination: '/:path+/index.html' },
      ],
    };
  },
};

module.exports = nextConfig;
