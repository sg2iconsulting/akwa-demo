import type { NextConfig } from "next";


const withVideos = require('next-videos')

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  }, typescript: {
    ignoreBuildErrors: true,
  },};
module.exports = withVideos(nextConfig)

