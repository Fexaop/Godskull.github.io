/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

 // Add basePath
  basePath: '/github-pages',

}

module.exports = {
  assetPrefix: !debug ? "/notes/" : "",
  images: { loader: "custom" },
};
module.exports = nextConfig
