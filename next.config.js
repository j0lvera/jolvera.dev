const generateRSSFeed = require("./posts/generate-rss-feed");
const withMDX = require("@zeit/next-mdx")({
  extension: /.mdx?$/,
  options: {
    hastPlugins: [require("./mdx-prism/index")]
  }
});

module.exports = withMDX({
  target: "serverless",
  pageExtensions: ["js", "jsx", "mdx", "md"],
  // exportPathMap: async (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) => {
  //   if (dev) return defaultPathMap;
  //   generateRSSFeed(outDir);
  //   return defaultPathMap;
  // },
  webpack: (config, { defaultLoaders }) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    config.module.rules.push(
      {
        test: /\.css$/,
        use: [
          defaultLoaders.babel,
          {
            loader: require("styled-jsx/webpack").loader,
            options: {
              type: "global"
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack"
          }
        ]
      }
    );

    return config;
  }
});
