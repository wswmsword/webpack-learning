const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    polyfills: "./src/polyfills",
    index: "./src/index.js",
  },
  mode: "production",
  output: {
    clean: true,
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "shimming",
    }),
    new webpack.ProvidePlugin({
      _: "lodash",
    }),
  ],
  module: {
    rules: [
      {
        test: require.resolve("./src/index.js"),
        use: "imports-loader?wrapper=window",
      },
      {
        test: require.resolve("./src/globals.js"),
        use: "exports-loader?type=commonjs&exports=file,multiple|helpers.parse|parse"
      }
    ]
  }
}