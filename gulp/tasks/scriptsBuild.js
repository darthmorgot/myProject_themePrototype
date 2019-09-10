const {src, dest} = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const webpack = require('webpack-stream');

let webConfig = {
	mode: 'production',
	devtool: 'none',
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

function scriptsBuild() {
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

module.exports = scriptsBuild;