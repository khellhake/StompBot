'use strict';

var grunt = require( 'grunt' ),
	_ = require( 'lodash' ),
	SETTINGS = require( '../js/CONFIG_ENV_SETTINGS.js' ).SETTINGS,
	// we default to 'local' for 'grunt watch'
	target = ( grunt.option( 'target' ) || 'debug' ).toUpperCase();

// temp ----->
function getBuild() {
	return process.env.BUILD_NUMBER || 0;
}

function getBuildDate() {
	return ( new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString() );
}

// temp ----->
function getTimestamp() {
	return new Date().getTime();
}

// temp ----->
function getDate() {
	return new Date().toLocaleDateString();
}

function createConfigPatterns() {

	var patterns = [];

	_.forEach( SETTINGS, function( value, firstKey ) {
		_.forEach( value, function( value, secondKey ) {

			var name = firstKey + '__' + secondKey;

			patterns.push({
				match: name,
				replacement: value[ target ]
			});
		});
	});

	return patterns;
}

module.exports = {
	config: {
		options: {
			patterns: createConfigPatterns()
		},
		src: 'js/CONFIG.tmpl.js',
		dest: 'js/CONFIG.js'
	},
	version: {
		options: {
			patterns: [
				{
					match: 'BUILD',
					replacement: getBuild
				},
				{
					match: 'DATE',
					replacement: getBuildDate
				}
			]
		},
		src: 'app/VERSION.tmpl.js',
		dest: 'app/VERSION.js'
	},
	'index.html': {
		options: {
			patterns: [
				{
					match: 'TIMESTAMP',
					replacement: getTimestamp
				}
			]
		},
		src: 'index.tmpl.html',
		dest: 'index.html'
	}
};