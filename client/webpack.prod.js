const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
	entry: './src/main.ts',
	mode: 'production',
	target: 'node',
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node-modules/
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new ESLintPlugin()
	]
}