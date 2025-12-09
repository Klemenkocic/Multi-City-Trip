/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Multi-City-Trip',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;

