'use strict';

// server settings
var SERVER = {
    API_ROOT: '@@SERVER__API_ROOT',
	ROOT_URL: '',
	WEB_ROOT: '@@SERVER__WEB_ROOT',
	SECURE_PROXY_URI: ''
};
module.exports.SERVER = SERVER;

var ANGULARJS = {
	// https://docs.angularjs.org/guide/production
	// Enable/Disable Debug Data
	DEBUG_ENABLED: @@ANGULARJS__DEBUG_ENABLED
};
module.exports.ANGULARJS = ANGULARJS;

// debug settings
var DEBUG = {

	// settings for debug.log functionality
	// possible values:
	//	true	turns logging on (suggested for development)
	//	false	turns logging off (suggested for production)
    LOGGING: @@DEBUG__LOGGING
};
module.exports.DEBUG = DEBUG;