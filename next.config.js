/** @type {import('next').NextConfig} */

const API_KEY = "94ee3e0e2f216a4d23dbf3a4f0a38249";

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/",
        permanent: false
      }
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      },
      {
        source: "/api/movie/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}&language=en-US&page=1`
      }
    ];
  }
};

module.exports = nextConfig;
