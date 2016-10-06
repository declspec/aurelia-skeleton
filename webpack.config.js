var webpack = require('webpack'),
    AureliaPlugin = require('aurelia-webpack-plugin');

var config = getConfig(),
    env = (process.env.NODE_ENV || 'development').toLowerCase();

switch(env) {
case 'production':
case 'prod':
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        comments: false,
        exclude: [],
        mangle: {
            screw_ie8: true,
            keep_fnames: true
        },
        compress: {
            screw_ie8: true,
            warnings: false
        }
    }));
    break;
}

module.exports = config;

function getConfig() {
    return  {
        entry: {
            app: [
                './src/main.ts'
            ],
            aurelia: [
                'bluebird',
                'aurelia-bootstrapper-webpack',
                'aurelia-binding',
                'aurelia-dependency-injection',
                'aurelia-event-aggregator',
                'aurelia-framework',
                'aurelia-history',
                'aurelia-history-browser',
                'aurelia-loader',
                'aurelia-loader-webpack',
                'aurelia-logging',
                'aurelia-logging-console',
                'aurelia-metadata',
                'aurelia-pal',
                'aurelia-pal-browser',
                'aurelia-path',
                'aurelia-polyfills',
                'aurelia-route-recognizer',
                'aurelia-router',
                'aurelia-task-queue',
                'aurelia-templating',
                'aurelia-templating-binding',
                'aurelia-templating-router',
                'aurelia-templating-resources'
            ]
        },

        output: {
            path: './bin',
            publicPath: 'bin/',
            filename: '[name].js'
        },

        resolve: {
            extensions: [
                '',
                '.webpack.js',
                '.web.js',
                '.js',
                '.jsx',
                '.ts',
                '.tsx'
            ]
        },

        module: {
            loaders: [
                { test: /\.css$/,       loader: "style-loader!css-loader" },
                { test: /\.tsx?$/,      loader: 'awesome-typescript-loader' },
                { test: /\.html$/,      loader: 'html' }
            ]
        },

        plugins: [
            new AureliaPlugin(),
            new webpack.ProvidePlugin({ Promise: 'bluebird' }),
            new webpack.optimize.CommonsChunkPlugin({ name: 'aurelia', filename: 'aurelia.js' })
        ]
    };
}