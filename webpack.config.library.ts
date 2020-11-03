import { Configuration } from 'webpack';

export default {
    mode: 'production',
    entry: {
        library: `${__dirname}/src/library/index.ts`,
    },
    output: {
        path: `${__dirname}/dist`,
        filename: `[name].min.js`,
        library: 'webpack-module-demo',
        libraryTarget: 'umd',
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.(tsx|ts|js)?$/,
                loader: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
        ].filter(Boolean),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        mainFields: ['jsnext:main', 'browser', 'module', 'main'],
    },
    optimization: {
        minimize: false,
    }
} as Configuration;
