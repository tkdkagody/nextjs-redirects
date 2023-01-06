/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["image.tmdb.org"],
  },
  async redirects() {
    return [
      {
        source: "/stages",
        destination: "http://moverse.club/stages",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/stages",
        destination: `https://moverse.club/api/v1/main/stage/stages`,
      },
    ];
  },
};

module.exports = nextConfig;
