
module.exports = function ( dataService ) {

	return {
		getCollection: function (id) {
			return dataService.getCollection(id);
		},

		getFeed: function (id) {
			return dataService.getFeed(id);
		},

		getMediaItem: function (id) {
			return dataService.getMediaItem(id);
		},

		getMediaId: function (id) {
			return dataService.getMediaId(id);
		},

	};
};