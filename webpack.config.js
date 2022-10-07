const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
let mode = 'development';
let target = 'web';

if (process.env.NODE_ENV === 'production') {
	mode = 'production';
  target = 'browserslist';
}

module.exports = {
	mode: mode,
  target: target,
	module: {
		rules: [
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	devServer: {
		static: path.join(__dirname, 'dist'),
		hot: true,
	},
	plugins: [new MiniCssExtractPlugin()],
	devtool: 'source-map',
};
