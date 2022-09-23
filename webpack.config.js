const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: "/",
    // assetModuleFilename: "images/[hash][ext][query]", // 自定义输出文件名，第一种方法
  },
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [
      {
        test: /\.png/,
        type: "asset/resource",
      },
      {
        test: /.png/, // 自定义输出文件名，第二种方法
        type: "asset/resource",
        generator: {
          filename: "static/[hash][ext][query]",
        }
      },
      {
        test: /.ico/,
        type: "asset/inline",
      },
      {
        test: /.txt/,
        type: "asset/source",
      },
      {
        test: /.md/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 4, // 4b，小于 4b inline，大于 4b resource
          }
        },
        generator: {
          dataUrl: content => {
            return content.toString(); // 自定义 inline 编码
          }
        }
      }
    ]
  }
}