// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.myanimelist.net",
        port: "",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
      },
    ],
  },
};

export default withPlaiceholder(nextConfig);
