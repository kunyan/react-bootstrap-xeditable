import webpack from 'webpack';

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


export default function(env: any) {
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
          options: {
            compilerOptions: {
              target: env.target,
            }
          }
          // exclude: /node_modules/
        }
      ]
    }
  };
  return config;
};
