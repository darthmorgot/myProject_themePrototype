const del = require('del');

module.exports = () => {
	$.gulp.task('clean', () => {
		return del('build');
	});
};