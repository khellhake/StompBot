'use strict';

module.exports = {

	javascript: {
		files: [
			'js/**/*.js',
			'app/**/*',
			//'Gruntfile.js',
			//'!js/CONFIG.tmpl.js',
			//'!js/CONFIG_ENV_SETTINGS.js',
			'!app/_bundle*.js',
			'!js/_bundle*.js'
		],
		tasks: [
			'replace:config',
			'browserify:dev'
		]
	},


	less: {
		files: [
			'css/**/*.less',
		],
		tasks: [
			'less:dev'
		]
	},

	html: {
		files: [
			'index.tmpl.html',
			'!index.html'
		],
		tasks: [
			'replace:index.html',
			// not the right location, but let's fire it up here for now
			'concat:vendor'
		]
	},

	options: {
		// run watch tasks at least once on startup
		atBegin: true,
		spawn: false,
		//livereload: true
	}
};