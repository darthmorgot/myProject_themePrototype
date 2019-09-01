const {src, dest} = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const	pug = require('gulp-pug');
const changed = require('gulp-changed');
const gulpIf = require('gulp-if');
const cached = require('gulp-cached');
const pugInheritance = require('gulp-pug-inheritance');
const filter = require('gulp-filter');

function pugCompile() {
	return src('./dev/pug/**/*.pug')
		.pipe(plumber({
			errorHandler: notify.onError(err => ({
				title: 'Error when compiling pug',
				message: err.message
			}))
		}))
		.pipe(changed('./build', {extension: '.html'}))
		.pipe(gulpIf(global.isWatching, cached('pug')))
		.pipe(pugInheritance({basedir: './dev/pug/', skip: 'node_modules'}))
		.pipe(filter(function (file) {
			return !/\/_/.test(file.path) && !/^_/.test(file.relative);
		}))
		.pipe(pug({
			pretty: true
		}))
		.pipe(dest('./build'))
};

module.exports = pugCompile;