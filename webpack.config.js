'use strict';

var NODE_ENV = process.env.NODE_ENV || 'development';
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname + '/src',

    entry: {
        app: './app',

        // Set up an ES6-ish environment
        polyfill: 'babel-polyfill'

        /*common: ['./welcome', './common']*/ // get common part from this entry poins
    },

    output: {
        path: __dirname + '/public',
        filename: "[name].js",
        library: '[name]'
    },

    watch: true,

    watchOptions: {
        aggregateTimeout: 500
    },

    devtool: 'source-map',

    plugins: [
        new webpack.NoErrorsPlugin(),
        /*new webpack.DefinePlugin({
         NODE_ENV: JSON.stringify(NODE_ENV)
         }),
         new webpack.optimize.CommonsChunkPlugin({
         name: 'common',
         minChunks: 3,
         chunks: ['home', 'about']
         })*/
    ],

    module: {
        loaders: [
            {
                loader: "babel-loader",

                // Skip any files outside of your project's `src` directory
                include: [
                    path.resolve(__dirname, "src")
                ],

                // Only run `.js` and `.jsx` files through Babel
                test: /\.js$/,

                // Options to configure babel with
                query: {
                    presets: ['es2015']/*,
                    plugins: ['transform-runtime'],*/
                }
            },
            {
                // HTML LOADER
                // Reference: https://github.com/webpack/raw-loader
                // Allow loading html through js
                test: /\.html$/,
                loader: 'raw'
            }
        ]
    },

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    }
};


// For Uglify
/*
 module.exports.plugins.push(
 new webpack.optimize.UglifyJsPlugin({
 compress: {
 warnings: false,
 drop_console: true,
 unsafe: true
 }
 })
 );*/
