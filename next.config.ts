import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/mjp-auto-detailing",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
