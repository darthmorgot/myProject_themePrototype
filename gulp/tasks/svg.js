const {src, dest} = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const svgSprite = require('gulp-svg-sprite');

function svg() {
	return src('./dev/static/images/svg/*.svg')
		.pipe(plumber({
			errorHandler: notify.onError(err => ({
				title: 'Error when optimizing svg',
				message: err.message
			}))
		}))
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true}
		}))
		.pipe(replace('&gt;', '>'))
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: "sprite.svg"
				}
			}
		}))
		.pipe(dest('./build/img/svg'));
};

module.exports = svg;