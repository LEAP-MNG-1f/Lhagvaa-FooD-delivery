import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: { BACKEND_ENDPOINT: process.env.BACKEND_ENDPOINT || undefined },
  /* config options here */
};
export default nextConfig;
