"use strict";

global.$ = {
	gulp: require('gulp'),
	path: {
		task: require('./gulp/path/tasks')
	}
};

const {series, parallel} = $.gulp;

function getTask(task) {
	for (let key in $.path.task) {
		if (key === task) {
			return require($.path.task[key]); 
		}
	}
}

const clean = getTask('clean');
const fonts = getTask('fonts');

let dev = series(clean, parallel(fonts));

exports.dev = dev;