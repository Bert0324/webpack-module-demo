import { join } from 'path';
import { Configuration, container } from 'webpack';
import * as ExternalTemplateRemotesPlugin from 'external-remotes-plugin';

const ModuleFederationPlugin = container.ModuleFederationPlugin;
export default {
  entry: `./index.ts`,
  output: {
    path: join(__dirname, '../dist', `./app-remote`),
    clean: true,
    pathinfo: false,
    libraryTarget: 'umd',
    library: {
      type: 'var',
      name: 'app-remote'
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
                ["import", {
                  "libraryName": "lodash",
                  "libraryDirectory": "",
                  "camel2DashComponentName": false
                }],
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
      remotes: {
        'libs': 'libs@http://127.0.0.1:8080/dist/app-expose/entry.js'
      },
      // shared: {
      //   lodash: {
      //     eager: true
      //   }
      // }
    }),
    new ExternalTemplateRemotesPlugin()
  ].filter(Boolean)
} as Configuration;
