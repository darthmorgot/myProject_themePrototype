const {src, dest} = require('gulp');

const browserSync = require('browser-sync').create();

function serve() {
	browserSync.init({
		server: './build'
	});
	browserSync.watch('./build/**/*.*').on('change', browserSync.reload);
};

module.exports = serve;