// TEMP (change CONFIG location!)
var _SERVER = require( '../../js/CONFIG' ).SERVER;

module.exports = function ( $http ) {


	function _getJsonP( url ) {

		//var url = _SERVER.API_ROOT + _SERVER.ROOT_URL + path;

		// apply api key (undefined parameters will be omitted)
		//params.apikey = _SERVER.API_KEY;

		// angular expects a name for the jsonp callback function
		var params = {};
		params.callback = 'JSON_CALLBACK';

		return $http.jsonp(url).then((function(result) {
			return ({
				data: result
				//meta: result.data.meta
			});
		}));
	}

	// function _post( httpMethod, path, data ) {

	// 	var url = _SERVER.API_ROOT + _SERVER.ROOT_URL + path,
	// 		payload = { url, data: JSON.stringify( data ), httpMethod };

	// 	return $http.post(_SERVER.SECURE_PROXY_URI, JSON.stringify(payload)).then((function(result) {			
	// 		var obj = JSON.parse(result.data.d);
	// 		return ({
	// 			data: obj.results,
	// 			meta: obj.meta
	// 		});
	// 	}));
	// }

	return {

		getJsonFile : function(filename){
			var url = 'http://www.coast77.com/apps/pedalpower/api/core/get_category_posts/?id=2&callback=JSON_CALLBACK';
			return _getJsonP(url, {});
		},


		// getJsonFile : function(filename){
		// 	var url = 'http://www.coast77.com/apps/' + filename;

		// 	return $http.jsonp(url + "?callback=JSON_CALLBACK")
		// 		.then((function(result) {
		// 		return ({
		// 			data: result
		// 			//meta: result.data.meta
		// 		});
		// 	}));
		// },

		// Coast WP api
		// getJsonFile : function(filename){
		// 	var url = 'http://www.coast77.com/apps/pedalpower/api/core/get_category_posts/?id=2';

		// 	return $http.jsonp(url + "")
		// 		.then((function(result) {
		// 		return ({
		// 			data: result
		// 			//meta: result.data.meta
		// 		});
		// 	}));
		// },

		

	};
};