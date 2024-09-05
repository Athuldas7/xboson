/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true, // Commented out because it's not needed in Next.js 14.2.6
  },
  images: {
    unoptimized: true, // Compatible setting
  },
};

module.exports = nextConfig;
