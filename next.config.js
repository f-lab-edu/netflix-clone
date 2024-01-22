/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.tmdb.org", "occ-0-7129-3996.1.nflxso.net", "daisyui.com"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "image.tmdb.org",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "occ-0-7129-3996.1.nflxso.net",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "daisyui.com",
    //   },
    // ],
  },
};

module.exports = nextConfig;
