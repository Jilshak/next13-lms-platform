/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "utfs.io",
      'unsplash.com'
    ]
  }
}

module.exports = nextConfig
