var Controller = require('./controller');
var service = require('./service');

module.exports = function (module) {

	module
		.factory('mainService', ['dataService', service])
		.controller('MainController', [
			'mainService', 
			'$location', 
			'$mdSidenav', 
			'$window', 
			'$cordovaEmailComposer', 
			'$cordovaInAppBrowser', 
			'$routeParams', 
			'$cordovaSms',
			'$rootScope', Controller]);
};