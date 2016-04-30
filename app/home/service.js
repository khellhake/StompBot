
module.exports = function ( dataService ) {

	return {

		getJsonFile: function (filename) {
			return dataService.getJsonFile(filename);
		},

	};
};