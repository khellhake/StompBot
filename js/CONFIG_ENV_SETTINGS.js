'use strict';

var SETTINGS = {
	SERVER: {
		API_ROOT: {
			DEBUG:		'',
			DEV:		'',
			TEST:		'',
			PROD:		'',
			PROTOTYPE:	''
		},
		WEB_ROOT: {
			DEBUG:		'',
			DEV:		'',
			TEST:		'',
			PROD:		'',
			PROTOTYPE:	''
		}
	},

	ANGULARJS: {
		DEBUG_ENABLED: {
			DEBUG:		false,
			DEV:		false,
			TEST:		false,
			PROD:		false,
			PROTOTYPE:	false
		}
	},

	DEBUG: {
		LOGGING: {
			DEBUG:		true,
			DEV:		true,
			TEST:		false,
			PROD:		false,
			PROTOTYPE:	false
		}
	},

};
module.exports.SETTINGS = SETTINGS;