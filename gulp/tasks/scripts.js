const {src, dest} = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const webpack = require('webpack-stream');

let isDev = true;
let isProd = !isDev;

let webConfig = {
	mode: isDev ? 'development' : 'production',
	devtool: isDev ? 'eval-source-map' : 'none',
	output: {
		filename: 'index.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: '/node_modules/'
		}]
	}
};

function scripts() {
	return src('./dev/static/js/index.js')
		.pipe(plumber({
			errorHandler: notify.onError(err => ({
				title: 'Error when compiling scripts',
				message: err.message
			}))
		}))
		.pipe(webpack(webConfig))
		.pipe(dest('./build/js'));
}

module.exports = scripts;