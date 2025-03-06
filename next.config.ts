import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/**', // This allows any path under /t/p/ (e.g., /t/p/original/)
      },
    ],
  },
};

export default nextConfig;

