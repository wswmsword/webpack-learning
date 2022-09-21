const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    runtimeChunk: "single", // [一个页面多个入口时共享一个实例](https://bundlers.tooling.report/code-splitting/multi-entry/)
  },
}