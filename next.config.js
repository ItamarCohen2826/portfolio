/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      allowFutureImage: true,
      unoptimized: true,
    },
  },
/*   sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
} */
}


module.exports = nextConfig
