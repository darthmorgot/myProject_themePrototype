const {src, dest} = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const	scss = require('gulp-sass');
const	sourcemaps = require('gulp-sourcemaps');
const	autoprefixer = require('gulp-autoprefixer');

function stylesDev() {
	return src('./dev/static/styles/styles.scss')
		.pipe(plumber({
			errorHandler: notify.onError(err => ({
				title: 'Error when compiling styles',
				message: err.message
			}))
		}))
		.pipe(sourcemaps.init())
		.pipe(scss())
		.pipe(autoprefixer())
		.pipe(sourcemaps.write())
		.pipe(dest('./build/css'))
};

module.exports = stylesDev;