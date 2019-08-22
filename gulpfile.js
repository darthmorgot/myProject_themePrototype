"use strict";

global.$ = {
	gulp: require('gulp'),
	browserSync: require('browser-sync').create(),
	path: {
		task: require('./gulp/path/tasks')
	}
};

const {series, parallel} = $.gulp;

$.path.task.forEach((taskPath) => {
	require(taskPath)();
});

$.gulp.task('dev', series(
	'clean',
	parallel(
		'fonts'
	)
));

