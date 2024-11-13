import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  
};

export default nextConfig;
module.exports = {
  webpack(config:any,{ isServer }:any) {
    if (!isServer) {
      config.optimization.minimizer = [];
    }
    return config;
  }
};


