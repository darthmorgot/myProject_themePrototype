const {src, dest} = require('gulp');

function fonts() {
	return src('./dev/static/fonts/**/*.*')
		.pipe(dest('./build/fonts/'));
}

module.exports = fonts;