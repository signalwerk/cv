const { addAfterLoader, loaderByName } = require("@craco/craco");

module.exports = {
  webpack: {
    configure(webpackConfig) {
      addAfterLoader(webpackConfig, loaderByName("babel-loader"), {
        test: /\.mdx?$/,
        loader: require.resolve("@mdx-js/loader"),
        options: {
          providerImportSource: "@mdx-js/react",
          pragma: "React.createElement",
          pragmaFrag: "React.Fragment",
        },
      });
      return webpackConfig;
    },
  },
};
