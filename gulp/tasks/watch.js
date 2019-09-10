const {watch} = require('gulp');

const pug = require('./pug');
const imagesDev = require('./imagesDev');
const scriptsDev = require('./scriptsDev');
const stylesDev = require('./stylesDev');
const svg = require('./svg');

function watcher() {
	watch('./dev/pug/**/*.pug', pug);
	watch('./dev/static/styles/**/*.scss', stylesDev);
	watch('./dev/static/images/**/*.{png,jpg,gif,svg}', imagesDev);
	watch('./dev/static/images/svg/*.svg', svg);
	watch('./dev/static/js/**/*.js', scriptsDev);
};

module.exports = watcher;