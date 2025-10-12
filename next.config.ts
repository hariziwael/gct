// next.config.ts
module.exports = {
  poweredByHeader: false,

  experimental: {
    serverActions: {},
  },
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    if (isServer) {
      config.externals.push('@sanity/next-loader')
    }
    return config
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://*.sanity.io; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;"
          }
        ],
      },
    ]
  },
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // ✅ allow Sanity images
  },
  experimental: {
    serverActions: true,
  },
};

const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: "Cache-Control",
    value: "public, max-age=3600, stale-while-revalidate=60"
  },
  
]




module.exports = nextConfig;
