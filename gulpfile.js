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
const imagesDev = getTask('imagesDev');
const imagesBuild = getTask('imagesBuild');
const pug = getTask('pug');
const scripts = getTask('scripts');

let dev = series(clean, parallel(fonts, imagesDev, pug, scripts));
let build = series(clean, parallel(fonts, imagesBuild, pug, scripts));

exports.dev = dev;
exports.build = build;