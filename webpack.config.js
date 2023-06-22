const fs = require('fs');
const path = require('path');

// Set up an entry config by iterating over the files in the pages directory.
const entries = fs
  .readdirSync(path.join(__dirname, 'src/pages'))
  .filter((pageFile) => !/^\./.test(pageFile))
  .reduce((accum, page) => {
    accum[page] = path.join(__dirname, 'src/pages', page);
    return accum;
  }, {});

const DEBUG = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: DEBUG ? 'development' : 'production',
  module: {
    rules: [
      // see https://github.com/lodash/lodash/issues/1798
      // So, opting out of AMD parsing for lodash
      {
        test: /lodash/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.[j|t]sx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: DEBUG,
              rootMode: 'upward-optional',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 100000,
          },
        },
        generator: {
          filename: DEBUG ? '[path][name].[ext]?[hash]' : '[hash].[ext]',
        },
      },
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        type: 'asset/resource',
        generator: {
          filename: DEBUG ? '[path][name].[ext]?[hash]' : '[hash].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.jsx', '.ts', '.tsx'],
    fallback: {
      // Splunk libs are using this Node.JS polyfill which is not provided by webpack 5++
      querystring: require.resolve('querystring-es3'),
    },
  },
  output: {
    path: path.join(__dirname, 'appserver/static/pages/'),
    filename: '[name].js',
    chunkFilename: DEBUG ? '[name].[id].js?[chunkhash]' : '[name].[id].[chunkhash].js',
    assetModuleFilename: DEBUG ? '[path][name].[ext]?[hash]' : '[hash].[ext]',
  },
  entry: entries,
  devtool: 'eval-source-map',
};
