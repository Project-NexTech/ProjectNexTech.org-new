import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  reactStrictMode: true,
  output: "export",
  images: {unoptimized: true},
  basePath: "",
};

export default nextConfig;
