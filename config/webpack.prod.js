const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
module.exports = webpackMerge(commonConfig, {
  entry: {
    'react-bootstrap-xeditable': helpers.root('src') + '/index.js',
  },
  output: {
    path: helpers.root('dist'),
    filename: '[name].js',
    library: 'ReactBootstrapXEditable',
    libraryTarget: 'umd',
  },
});
