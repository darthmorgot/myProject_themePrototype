const {src, dest} = require('gulp');

const imgPath = {
	'input': ['./dev/static/images/**/*.{png,jpg,gif,svg}', '!./dev/static/images/svg/*'],
	'ouput': './build/img/'
};

function imagesDev() {
	return src(imgPath.input)
		.pipe(dest(imgPath.ouput));
}

module.exports = imagesDev;