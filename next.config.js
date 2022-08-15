/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  target: "serverless",
  swcMinify: true,
  images: {
    domains: ["image.tmdb.org"],
    loader: "akamai",
    path: "",
  },
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko&region=KR`,
      },
      {
        source: "/api/movies/now_playing",
        destination: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko&region=KR`,
      },
      {
        source: "/api/movies/upcoming",
        destination: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=ko&region=KR&page=1`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}&language=ko`,
      },
    ];
  },
};

module.exports = nextConfig;
