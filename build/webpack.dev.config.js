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
  test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap','less-loader?sourceMap' )
})

module.exports = merge(baseWebpackConfig, {

  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': config.dev.env
    }),
    new ExtractTextPlugin('[hash:8].style.css', { allChunks: true }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin({
		  title: 'react_webpack',
		  template: config.htmlTemple,
		  hash:false
		}),
  ],
  // devServer: {
  //   quiet: false,
  //   noInfo: false,
  //   publicPath: '/',
  //   proxy: {
  //     '/web/public/api/*': {
  //       target: 'http://8082.tuikor.com/'
  //     }
  //   }
  // }
})
