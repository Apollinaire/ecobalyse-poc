const API_ROOT = 'https://ecobalyse.beta.gouv.fr/api';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  rewrites: async () => {
    return [
      {
        source: '/api/fwd/:path*',
        destination: `${API_ROOT}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
