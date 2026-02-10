/** @type {import('next').NextConfig} */
const isGithubPages = process.env.DEPLOY_TARGET === "github-pages";

const nextConfig = {
  ...(isGithubPages
    ? {
        // GitHub Pages serves the site under: https://<user>.github.io/WebSite
        output: "export",
        basePath: "/WebSite",
      }
    : {}),
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
