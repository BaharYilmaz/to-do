/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true, //register service worker
  skipWaiting: true, //installs new sw when available
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ["static.vecteezy.com"],
  },
});
