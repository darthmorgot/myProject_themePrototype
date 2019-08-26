const {src, dest} = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

function scripts() {
	return src('./dev/static/js/index.js')
		.pipe(plumber({
			errorHandler: notify.onError(err => ({
				title: 'Error when compiling scripts',
				message: err.message
			}))
		}))
		.pipe(dest('./build/js'));
}

module.exports = scripts;