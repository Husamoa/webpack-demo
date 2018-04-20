const path = require('path');

module.exports = {
	entry: ['./js/app.js', './js/ex2.js', './js/ex3.js'],
	output: {
		path: path.resolve(__dirname, 'js'), //output directory
		filename: 'out.js', //output file (merge all JS-files will into one out.js file)
		publicPath: 'js'
	},
	module: {
		rules: [
			//scripts rule (*.js)
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'env',
								{
									targets: {
										browsers: ['> 1%', 'last 2 versions']
										// browsers: ['Chrome 49']
									}
								}
							]
						]
					}
				}
			}
		]
	},
	plugins: [],
	watch: true,
	mode: 'development',
	devtool: 'source-map'
}