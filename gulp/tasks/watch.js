const {watch} = require('gulp');

const pug = require('./pug');
const imagesDev = require('./imagesDev');
const scripts = require('./scripts');
const stylesDev = require('./stylesDev');

function watcher() {
	watch('./dev/pug/**/*.pug', pug);
	watch('./dev/static/styles/**/*.scss', stylesDev);
	watch('./dev/static/images/**/*.{png,jpg,gif,svg}', imagesDev);
	// watch('./dev/static/images/svg/*.svg', svg);
	watch('./dev/static/js/**/*.js', scripts);
};

module.exports = watcher;