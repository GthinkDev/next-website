import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // 设置 turbopack.root 来解决锁文件冲突警告
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;