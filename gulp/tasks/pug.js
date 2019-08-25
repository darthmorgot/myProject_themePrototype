const {src, dest} = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const	pug = require('gulp-pug');
const changed = require('gulp-changed');
const pugInheritance = require('gulp-pug-inheritance');

function pugCompile() {
	return src('./dev/pug/*.pug')
		.pipe(plumber({
			errorHandler: notify.onError(err => ({
				title: 'Error when optimizing images',
				message: err.message
			}))
		}))
		.pipe(changed('./build', {extension: '.html'}))
		.pipe(pugInheritance({basedir: './dev/pug/', skip: 'node_modules'}))
		.pipe(pug({
			// pretty: true
		}))
		.pipe(dest('./build'))
};

module.exports = pugCompile;