const {src, dest} = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

function libsDev() {
	return src('node_modules/svg4everybody/dist/svg4everybody.min.js')
		.pipe(plumber({
			errorHandler: notify.onError(err => ({
				title: 'Error when compiling scripts',
				message: err.message
			}))
		}))
		.pipe(dest('./build/js'));
}

module.exports = libsDev;