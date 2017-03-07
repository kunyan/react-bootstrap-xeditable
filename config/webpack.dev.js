const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
module.exports = webpackMerge(commonConfig, {
  entry: {
    'app': helpers.root('example') + '/app.jsx',
  },
  output: {
    path: helpers.root('dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['demo'],
    }),
    new HtmlWebpackPlugin({
      template: 'example/index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
