var webpack = require('webpack');
var config = require('../config');
var path = require('path');

module.exports = {
	entry: {
		app: ['./src/main.jsx']
	},
	output: {
		path: config.assetsRoot,
	    publicPath: "/",
	    filename: "[name].js"
	},
	devtool: 'eval-source-map',
	module: {
		preLoaders: [
			{test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/},
			{test: /\.jsx$/, loader: "eslint-loader", exclude: /node_modules/}
		],
		loaders: [
			{ test: /\.jsx$/,loader: 'babel-loader', exclude: /node_modules/},
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
			{ test: /\.css$/, loader: "style!css" },
			{ test: /\.json$/, loader: "json-loader" }
		]
	},
	eslint: {
		configFile: path.join(__dirname,'../.eslintrc')
	},
	resolve: {
		extensions: ['','.js','.jsx','.scss','.css'],
		alias: {
            filter: path.join(__dirname, '../src/filters'),
            Components: path.join(__dirname, '../src/components')
        },
		modulesDirectories: [ "node_modules"]
	}
}
