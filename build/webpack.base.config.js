var webpack = require('webpack');
var config = require('../config');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		app: ['./src/main.jsx']
	},
	output: {
		path: config.assetsRoot,
	    publicPath: "/",
	    filename: "[name].js"
	},
	module: {
		preLoaders: [
			{test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/},
			{test: /\.jsx$/, loader: "eslint-loader", exclude: /node_modules/}
		],
		loaders: [
			{ test: /\.jsx$/,loader: 'babel-loader', exclude: /node_modules/},
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
			// { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap' ) },
			// { test: /\.less$/, loader: "style!css!less?sourceMap" },
			{ test: /\.json$/, loader: "json-loader" },
			{ test: /\.(jpe?g|png|gif)$/i, loaders: [
					'url?limit=10000&name=images/[hash:8].[name].[ext]',
					'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
			] },
			{ test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'}
		]
	},
	eslint: {
		configFile: path.join(__dirname,'../.eslintrc')
	},
	resolve: {
		extensions: ['','.js','.jsx','.scss','.css'],
		root: path.resolve(__dirname),
		alias: {
            filter: '../src/filters',
            Components: '../src/components'
        },
		modulesDirectories: [ "node_modules"]
	}
}
