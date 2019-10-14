'use strict'

const path = require('path')
const webpack = require('webpack')

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = {
    devtool: 'source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src', 'index')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new DashboardPlugin(),
        new ExtractTextPlugin('style.css'),
        new HtmlPlugin({
          title: 'GitHub app',
          template: path.join(__dirname, 'src','html','template-dev.html')
        })
    ],
    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'standard'
        }],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'babel'
        },{
          test: /\.css$/,
          exclude: /node_modules/,
          include: /src/,
          loaders: [ 'style','css']
          //css modules
          //loaders: [ 'style','css?modules']
        }]
    },
    resolve: {
      alias: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src', 'components')
      }
    }
}
