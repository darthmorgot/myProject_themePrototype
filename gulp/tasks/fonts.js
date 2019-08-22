const {src, dest} = require('gulp');

module.exports = () => {
	$.gulp.task('fonts', () => {
		return src('./dev/static/fonts/**/*.*')
			.pipe(dest('./build/fonts/'));
	});
};