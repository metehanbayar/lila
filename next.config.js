/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  distDir: '.next',
  trailingSlash: false,
  images: {
    domains: ['placehold.co'],
    unoptimized: true
  },
  env: {
    MSSQL_USER: process.env.MSSQL_USER,
    MSSQL_PASSWORD: process.env.MSSQL_PASSWORD,
    MSSQL_SERVER: process.env.MSSQL_SERVER,
    MSSQL_DATABASE: process.env.MSSQL_DATABASE,
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'qr.lila.company']
    }
  },
  // PWA config
  headers: async () => {
    return [
      {
        source: '/service-worker.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ]
  }
}

module.exports = nextConfig 