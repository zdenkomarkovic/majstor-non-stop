import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
            default-src 'self';
            script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://stats.g.doubleclick.net https://pagead2.googlesyndication.com;
            connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net;
            img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com;
            style-src 'self' 'unsafe-inline';
            frame-src https://www.googletagmanager.com;
          `.replace(/\s+/g, " "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
