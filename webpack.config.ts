import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const modules = ['es6', 'commonJS', 'libraryImport', 'asyncImport'];
const module = process.env.MODULE;
const isDev = modules.includes(module);
if (module && !isDev) {
    throw new Error(`MODULE ${module} not exist, please select in ${modules.join(',')}`);
}
export default {
    mode: 'production',
    entry: (isDev ? [module] : modules).reduce((entry, moduleName) => {
        entry[moduleName] = `${__dirname}/src/${moduleName}/index.ts`;
        return entry;
    }, <any>{}),
    output: {
        path: `${__dirname}/dist`,
        filename: `[name].min.js`,
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
    plugins: [
        isDev &&
            new HtmlWebpackPlugin({
                inject: true,
                template: `${__dirname}/src/index.html`,
                minify: false,
            }),
    ].filter(Boolean),
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        mainFields: ['jsnext:main', 'browser', 'module', 'main'],
    },
    optimization: {
        minimize: false,
    },
    devServer: {
        contentBase: `${__dirname}/dist`,
        compress: false,
        port: 8083,
        open: true,
    },
} as Configuration;