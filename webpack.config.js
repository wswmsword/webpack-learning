const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // mode: "development",
  entry: {
    index: "./src/index.js",
    // print: "./src/print.js",
  },
  devtool: false,
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [{
      test: /\.js$/i,
      use: ["babel-loader"],
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Modern JavaScript Environment",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: "/",
  },
  optimization: {
    // runtimeChunk: "single",
  },
}