import type { NextConfig } from "next";
import createNextPWA from "@ducanh2912/next-pwa";

const withPWA = createNextPWA({
  dest: "public",
  cacheOnFrontEndNav:true,
  disable:false
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  turbopack:{
    resolveAlias:{},
  },
  experimental:{
    ppr:false
  }
};

export default withPWA(nextConfig);