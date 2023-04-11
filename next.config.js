/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

 // Add basePath
  basePath: '/github-pages',

}

module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
}
