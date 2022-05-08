/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.pixabay.com', 'api.lorem.space'],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
