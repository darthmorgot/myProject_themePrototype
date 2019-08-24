const {src, dest} = require('gulp');

const imagemin = require('gulp-imagemin');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const pngquant = require('imagemin-pngquant');
const cache = require('gulp-cache');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const imgPath = {
	'input': ['./dev/static/images/**/*.{png,jpg,gif,svg}', '!./dev/static/images/svg/*'],
	'ouput': './build/img/'
};

function imagesBuild() {
	return src(imgPath.input)
		.pipe(plumber({
			errorHandler: notify.onError(err => ({
				title: 'Error when optimizing images',
				message: err.message
			}))
		}))
		.pipe(cache(
			imagemin([
				imagemin.gifsicle({interlaced: true}),
				imagemin.jpegtran({progressive: true}),
				imageminJpegRecompress({
					loops: 3,
					min: 70,
					max: 75,
					quality: 'medium'
				}),
				imagemin.svgo(),
				imagemin.optipng({optimizationLevel: 3}),
				pngquant({
					quality: [0.6, 0.7], 
					speed: 5
				})
			], 
			{
				verbose: true
			})
		))
		.pipe(dest(imgPath.ouput));
}

module.exports = imagesBuild;