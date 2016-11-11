var path = require('path')
var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.config')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

//设置vendor
baseWebpackConfig.entry.vendor = ['react','redux','react-redux','react-router','react-dom']

//设置css sourceMap
baseWebpackConfig.module.loaders.unshift({
  test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap&strictMath&noIeCompat' )
})
baseWebpackConfig.module.loaders.unshift({
  test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap&strictMath&noIeCompat','less-loader?sourceMap&strictMath&noIeCompat' )
})

module.exports = merge(baseWebpackConfig, {

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': config.build.env
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity //Infinity
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
		 compress: {
			 warnings: false
		 }
	 }),
   new ExtractTextPlugin('[hash:8].style.css', { allChunks: true }),
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
