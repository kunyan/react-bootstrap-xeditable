import * as webpack from 'webpack';

const externals: webpack.ExternalsElement[] = [
  {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  {
    react: 'react',
    'react-dom': 'react-dom'
  }
];

const config: webpack.Configuration = {
  entry: './src/index.tsx',
  devtool: 'source-map',
  mode: 'production',
  output: {
    path: __dirname + '/dist',
    filename: 'react-bootstrap-xeditable.js',
    library: 'ReactBootstrapXEditable',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  externals,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      }
    ]
  }
};

const es5Config = {
  ...config,
  output: {
    path: __dirname + '/lib',
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            target: 'es5'
          }
        }
        // exclude: /node_modules/
      }
    ]
  }
}

const es6Config = {
  ...config,
  output: {
    path: __dirname + '/es',
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            target: 'es2015'
          }
        }
        // exclude: /node_modules/
      }
    ]
  }
}

export default [config, es5Config, es6Config]
