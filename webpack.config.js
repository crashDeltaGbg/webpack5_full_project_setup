const path = require('path');
let mode = 'development';

if (process.env.NODE_ENV === 'production') {
	mode = 'production';
}

module.exports = {
	mode: mode,
	module: {
		rules: [
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
	},
	devtool: 'source-map',
};
