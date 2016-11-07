var path = require('path')
var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.config')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

//设置css sourceMap
baseWebpackConfig.module.loaders.unshift({
  test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap' )
})
baseWebpackConfig.module.loaders.unshift({
  test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader','less-loader?sourceMap' )
})

module.exports = merge(baseWebpackConfig, {

  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new ExtractTextPlugin('[hash:8].style.css', { allChunks: true }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin({
		  title: 'react_webpack',
		  template: config.htmlTemple,
		  hash:false
		}),
  ]
})
