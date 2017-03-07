module.exports = {
  entry: {
    'react-bootstrap-xeditable': './src/index.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', 'jsx']
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.jsx?$/,
      loaders: ['eslint-loader', 'source-map-loader'],
      exclude: /(node_modules)/,
    },
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /(node_modules)/
    }]
  }
};
