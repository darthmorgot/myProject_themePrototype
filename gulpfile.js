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
const scriptsDev = getTask('scriptsDev');
const scriptsBuild = getTask('scriptsBuild');
const serve = getTask('serve');
const watch = getTask('watch');
const stylesDev = getTask('stylesDev');
const stylesBuild = getTask('stylesBuild');
const svg = getTask('svg');

let dev = series(clean, parallel(fonts, imagesDev, pug, stylesDev, scriptsDev, svg));
let build = series(clean, parallel(fonts, imagesBuild, pug, stylesBuild, scriptsBuild, svg));

exports.dev = dev;
exports.build = build;
exports.default = series(dev, parallel(watch, serve));