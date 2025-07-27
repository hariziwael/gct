// next.config.js
module.exports = {
  experimental: {
    serverActions: true,
  },
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    if (isServer) {
      config.externals.push('@sanity/next-loader')
    }
    return config
  },
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // ✅ allow Sanity images
  },
};

module.exports = nextConfig;
