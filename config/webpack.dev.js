const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const path = require('path');
module.exports = webpackMerge(commonConfig, {
  entry: {
    'app': helpers.root('test') + '/app.jsx',
  },
  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['demo'],
    }),
    new HtmlWebpackPlugin({
      template: 'test/index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
