import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://pagead2.googlesyndication.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
