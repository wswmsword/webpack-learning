const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Caching",
    }),
  ],
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: "single", // [一个页面多个入口时共享一个实例](https://bundlers.tooling.report/code-splitting/multi-entry/)
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /([\\/])node_modules\1/,
          name: "vendors",
          chunks: "all",
        },
      }
    },
  },
}