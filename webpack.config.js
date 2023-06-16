const fs = require("fs");
const path = require("path");
const webpackMerge = require("webpack-merge");
const baseConfig = require("@splunk/webpack-configs/base.config").default;

// Set up an entry config by iterating over the files in the pages directory.
const entries = fs
  .readdirSync(path.join(__dirname, "src/pages"))
  .filter((pageFile) => !/^\./.test(pageFile))
  .reduce((accum, page) => {
    accum[page] = path.join(__dirname, "src/pages", page);
    return accum;
  }, {});

module.exports = webpackMerge(baseConfig, {
  entry: entries,
  output: {
    path: path.join(__dirname, "appserver/static/pages/"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devtool: "eval-source-map",
});
