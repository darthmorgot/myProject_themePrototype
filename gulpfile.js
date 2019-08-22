"use strict";

global.$ = {
	gulp: require('gulp'),
	//browserSync: require('browser-sync').create(),
	path: {
		task: require('./gulp/path/tasks')
	}
};

$.path.task.forEach((taskPath) => {
	require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
	'clean',
	$.gulp.parallel(
		'fonts'
	)
));

