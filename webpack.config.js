const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  output: {
    filename: "main.js",
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