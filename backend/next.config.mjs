/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/media/file/:path*',
        destination: '/media/:path*',
      },
    ]
  },
  output: 'standalone',
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  experimental: {
    serverComponentsExternalPackages: ['sharp', 'mongodb', '@aws-sdk'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('date-fns')
      // Handle AWS SDK properly
      config.externals.push({
        '@aws-sdk/client-s3': 'commonjs @aws-sdk/client-s3',
        '@aws-sdk/s3-request-presigner': 'commonjs @aws-sdk/s3-request-presigner',
      })
    }
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: false,
      stream: false,
      util: false,
      url: false,
      zlib: false,
      http: false,
      https: false,
      assert: false,
      os: false,
      path: false,
    }
    
    // Ignore AWS SDK in client bundle
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@aws-sdk/client-s3': false,
        '@aws-sdk/s3-request-presigner': false,
      }
    }
    
    return config
  },
  env: {
    DATABASE_URI: process.env.DATABASE_URI,
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
    PORT: process.env.PORT,
  },
  
  // Serve static files from media directory
  async headers() {
    return [
      {
        source: '/media/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig