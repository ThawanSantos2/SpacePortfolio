/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Desabilita Image Optimization para arquivos PNG/JPG simples
  },
  experimental: {
    esmExternals: true,
  },
};

module.exports = nextConfig;