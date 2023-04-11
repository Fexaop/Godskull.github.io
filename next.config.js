/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

 // Add basePath
  basePath: '/github-pages',
    images: {
        unoptimized: true
    },
  images: {
   loader: "custom",
},
}


module.exports = nextConfig
