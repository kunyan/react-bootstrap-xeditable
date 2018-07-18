import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const devServer: webpackDevServer.Configuration = {
  hot: true,
  watchOptions: {
    poll: true
  }
};

const devConfig: webpack.Configuration = {
  entry: './example/App.tsx',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
        // exclude: /node_modules/
      }
    ]
  },
  devServer
};

export default devConfig;
