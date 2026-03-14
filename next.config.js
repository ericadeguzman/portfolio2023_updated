/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')

const nextConfig = {
  async rewrites() {
    return [
      { source: '/favicon.ico', destination: '/favicon.svg' },
    ]
  },
}

module.exports = withVideos(nextConfig)