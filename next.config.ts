import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        pathname: '**', // Allows any path on this domain
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        pathname: '**',
      },
      { // Add this new pattern for Sanity.io
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '**', // Allows any path on the Sanity CDN domain
      },
    ],
  },
};

export default nextConfig;