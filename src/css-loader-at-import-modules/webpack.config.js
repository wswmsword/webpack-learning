const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const ExtractCssPlugin = require("mini-css-extract-plugin");

module.exports = {
  // mode: "development",
  // devtool: false,
  mode: "production",
  entry: {
    main: "./index.js",
  },
  output: {
    clean: true,
  },
  module: {
    rules: [{
      test: /html$/,
      type: "asset/resource"
    }, {
      test: /\.css$/,
      use: [
        // ExtractCssPlugin.loader,
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              // mode: "local",
              // auto: true,
              localIdentName: "[path][name]__[local]--[hash:base64:5]",
              // localIdentContext: path.resolve(__dirname, "src"),
              // localIdentHashSalt: "my-custom-hash",
              // namedExport: true,
              exportLocalsConvention: "camelCaseOnly",
            }
          }
        },
      ]
    }]
  },
  plugins: [
    new ExtractCssPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "./index.html" },
      ],
      options: {
        concurrency: 100,
      },
    }),
  ],
  // optimization: {
  //   // runtimeChunk: true,
  //   splitChunks: {
  //     chunks: "all",
  //     cacheGroups: {
  //       vandor: {
  //         name: "commoncss",
  //         enforce: true,
  //         test: /common\.module\.css$/,
  //       }
  //     }
  //   }
  // }
}