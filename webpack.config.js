/* eslint strict: 0 */
'use strict';

const HTTP_PORT = 8080;
const path = require('path');

const webpackConfig = {
  entry: {
    lib: [
      // TODO Do we need the polyfill?
      'babel-polyfill',
      './src/index.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: `${__dirname}/build/`
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    inline: true,
    port: HTTP_PORT
  }
};

module.exports = webpackConfig;
