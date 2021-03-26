const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const env = process.env.NODE_ENV;
const plugins = [
  new ForkTsCheckerWebpackPlugin({
    eslint: {
      enabled: true,
      files: path.join(__dirname, './src/**/*.{ts,tsx}')
    }
  })
];

module.exports = {
  mode: env,

  entry: './src/index.ts',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: env === 'production'
      ? 'react-smooth-animations.min.js'
      : 'react-smooth-animations.js',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
      }
    ]
  },

  plugins,

  optimization: {
    minimize: true
  }
};
