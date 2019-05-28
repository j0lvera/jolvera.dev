const withMDX = require("@zeit/next-mdx")({
  extension: /.mdx?$/,
  options: {
    hastPlugins: [require("./mdx-prism/index")]
  }
});

module.exports = withMDX({
  target: "serverless",
  env: {
    webmentionsUrl: "http://localhost:3002"
  },
  pageExtensions: ["js", "jsx", "mdx", "md"],
  webpack: (config, { defaultLoaders }) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty",
      module: "empty"
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
