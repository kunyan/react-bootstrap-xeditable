const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const path = require('path');
module.exports = webpackMerge(commonConfig, {
  entry: {
    'react-xeditable': helpers.root('src') + '/index.js',
  },
  output: {
    path: helpers.root('dist'),
    filename: '[name].js',
    library: 'ReactXEditable',
    libraryTarget: 'umd',
  },
});
