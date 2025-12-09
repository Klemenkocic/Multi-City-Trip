/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  basePath: (isProd && isGithubPages) ? '/Multi-City-Trip' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;

