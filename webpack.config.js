var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: ['./src/main.jsx']
	},
	output: {
		path: path.resolve(__dirname, "dist"),
	    publicPath: "/",
	    filename: "[name].js"
	},
	devtool: 'eval-source-map',
	module: {
		preLoaders: [
			// {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/},
			// {test: /\.jsx$/, loader: "eslint-loader", exclude: /node_modules/}
		],
		loaders: [
			{ test: /\.jsx$/,loader: 'babel-loader', exclude: /node_modules/},
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
			{ test: /\.css$/, loader: "style!css" }
		]
	},
	plugins: [
      new webpack.NoErrorsPlugin(),
	  new HtmlWebpackPlugin({
		  title: 'react_webpack',
		  template: path.join(__dirname,'./src/index.html'),
		  hash:false
		}),
  	],
	eslint: {
		configFile: path.join(__dirname,'./.eslintrc')
	},
	babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
	resolve: {
		extensions: ['','.js','.jsx','.scss','.css'],
		alias: {
            filter: path.join(__dirname, './src/filters'),
            Components: path.join(__dirname, './src/components')
        },
		modulesDirectories: [ "node_modules"]
	}
}
