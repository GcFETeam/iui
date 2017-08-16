const path = require('path');
const webpack = require('webpack');
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: {
        ui: "./src/javascript/ui.js"
    },
    output: {
        path: __dirname + '/dist',
        filename: "[name].js"
    },
    plugins: [
        // new CommonsChunkPlugin('commons'),
        new ExtractTextPlugin("[name].css")
    ],
    module: {
        loaders: [
            {
                test: path.join(__dirname, 'es6'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("css-loader!sass-loader")
            }
        ]
    }
};