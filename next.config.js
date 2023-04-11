/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

 // Add basePath
  basePath: '/github-pages',

}

module.exports = {
    experimental: {
        images: {
            unoptimized: true
        }
    }
}

module.exports = nextConfig
