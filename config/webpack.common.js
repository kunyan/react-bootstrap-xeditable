const webpack = require('webpack');
module.exports = {
  entry: {
    'vendors': [
      'react',
      'react-dom'
    ],
    'react-bootstrap-xeditable': './src/index.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', 'jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js(x)?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      }
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
    ]
  }
};
