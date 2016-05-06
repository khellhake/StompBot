var CONFIG = require('../../js/CONFIG');

function Controller(homeService, $cordovaSplashscreen, $rootScope) {
	var self = this;

	self.homeService = homeService;
	self.$cordovaSplashscreen = $cordovaSplashscreen;
	self.$rootScope = $rootScope;

	// vars
	self.loadingData = true;

	if (self.$rootScope.data) {
		self.loadingData = false;
		self.pedals = self.transform(self.$rootScope.data);
	} else {
		// Get Data
		homeService.getJsonFile().then((function (response) {
			self.pedals = response.data.data.posts;
			self.$rootScope.data = self.transform(response.data.data.posts);

			self.loadingData = false;
		}));
	}

}

// This cleans up the data from WP 'custom_field' into a usable object
// Loops over Companies, and take the custom fields, pushing them to a new 'pedals' array
Controller.prototype.transform = function (data) {

	angular.forEach(data, function (value, key) {
		value.pedals = [];

		angular.forEach(value.custom_fields, function (pdlVal, pdlKey) {
			value.pedals.push({ma:pdlVal[0], name: pdlKey});
		});
	});

	return data;
};

module.exports = Controller;
