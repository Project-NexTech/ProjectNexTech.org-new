import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
    qualities: [100]
  },
  basePath: "",
};

export default nextConfig;
