var path = require('path')
var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.config')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(baseWebpackConfig, {

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': config.build.env
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
		 compress: {
			 warnings: false
		 }
	 }),
    new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin({
		  title: 'react_webpack',
		  template: config.htmlTemple,
			minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
		}),
  ]
})
