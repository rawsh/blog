const MillionLint = require('@million/lint');
const { withContentlayer } = require('next-contentlayer')


/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
            source: '/rawbot',
            destination: 'https://lichess.org/@/rawbot/playing',
        },
        {
            source: '/assets/:path*',
            destination: 'https://lichess.org/assets/:path*'
        }
      ];
    }
  };
  

module.exports = MillionLint.next({
  enabled: true,
  rsc: true
})(withContentlayer(nextConfig))