let path = require('path')

const SRC_DIR = path.resolve(__dirname, 'src')
const DIST_DIR = path.resolve(__dirname, 'dist')

const config = {
	entry: SRC_DIR + '/app.js',
	output: {
		filename: 'bundle.js',
		path: DIST_DIR
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				include: SRC_DIR,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	},
	devServer: {
		contentBase: SRC_DIR,
		port: 41002
	}
}

module.exports = config