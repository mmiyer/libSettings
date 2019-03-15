const path = require( 'path' );

module.exports = {
	mode: 'development',
	entry: './modules/index.js',
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: 'index.js'
	},
	resolve: {
		modules: [ 'modules' ]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'env'
						]
					}
				}
			}
		]
	}
};