import { join } from 'path';
import { Configuration, container } from 'webpack';

const ModuleFederationPlugin = container.ModuleFederationPlugin;
export default {
  entry: `./index.ts`,
  output: {
    path: join(__dirname, '../dist', `./app-expose`),
    clean: true,
    pathinfo: false,
    libraryTarget: 'umd',
    library: {
      type: 'var',
      name: 'app-expose'
    },
  },
  mode: 'production',
  devtool: false,
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js'],
    modules: ['node_modules'],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            // exclude: /node_modules/,
            loader: require.resolve('babel-loader'),
            options: {
              presets: ['@babel/preset-typescript', '@babel/preset-react'],
              plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-object-rest-spread',
              ],
            },
          },
        ].filter(Boolean),
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'libs',
      filename: `entry.js`,
      exposes: {
        './lodash': './node_modules/lodash/index.js'
      }
    }),
  ].filter(Boolean)
} as Configuration;
