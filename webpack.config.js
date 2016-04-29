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
    },

    output: {
        path: __dirname + '/public',
        filename: "[name].js",
        library: '[name]'
    },

    watch: true,

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: 'source-map',

    plugins: [
        new webpack.NoErrorsPlugin()
    ],

    module: {
        loaders: [
            {
                loader: "babel",
                exclude: __dirname + 'node_modules',
                test: /\.js$/
            },
            {
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