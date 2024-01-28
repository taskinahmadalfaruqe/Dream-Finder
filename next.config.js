/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcMinify: false,
  },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '*'
        },
      ],
    },
  }

module.exports = nextConfig