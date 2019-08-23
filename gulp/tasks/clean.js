const del = require('del');

function clean() {
	return del('build');
}

module.exports = clean;