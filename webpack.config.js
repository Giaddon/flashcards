const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public/"),
    },
    port: 3010,
    hot: true,
    historyApiFallback: true,
  },
};