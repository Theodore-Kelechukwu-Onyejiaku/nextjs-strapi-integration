import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Allow images from localhost
  images: {
    domains: ["localhost"],
  },
};

export default nextConfig;
