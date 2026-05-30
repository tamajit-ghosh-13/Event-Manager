import type { NextConfig } from "next";

module.exports = {
  allowedDevOrigins: ["sensitive-village-sincere.ngrok-free.dev"],
};

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
