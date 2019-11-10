const {src, dest} = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const	scss = require('gulp-sass');
const	autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');

function stylesBuild() {
	return src('./dev/static/styles/styles.scss')
		.pipe(plumber({
			errorHandler: notify.onError(err => ({
				title: 'Error compiling styles',
				message: err.message
			}))
		}))
		.pipe(scss())
		.pipe(autoprefixer())
		.pipe(cleanCSS({
			level: 2
		}))
		.pipe(rename('styles.min.css'))
		.pipe(dest('./build/css'))
};

module.exports = stylesBuild;