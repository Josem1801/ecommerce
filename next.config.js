/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.pixabay.com',
      'api.lorem.space',
      'store.storeimages.cdn-apple.com',
      'http2.mlstatic.com',
      'w7.pngwing.com',
      'encrypted-tbn0.gstatic.com',
      'api.escuelajs.co',
      'placeimg.com',
      'lh3.googleusercontent.com',
      'uxpanol.com',
      'scontent-iad3-1.xx.fbcdn.net',
      'pbs.twimg.com',
      'www.bing.com',
      'www.azendportafolio.com',
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
