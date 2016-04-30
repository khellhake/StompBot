
var _ = require('lodash');

// services
var dataService = require('./dataService/index');

var home = require('./home/index');
var main = require('./main/index');
var legal = require('./legal/index');

var CONFIG = require('../js/CONFIG'),
	angular = require('angular'),
	stompbot = angular.module('stompbot', ['ngRoute', 'ngSanitize', 'ngAria', 'ngMaterial', 'ngCordova']);

require('angular-route');
require('angular-sanitize');
require('angular-aria');
require('angular-material');
require('ng-cordova');
require('fastclick');

// get rid of 300ms delay
var attachFastClick = require('fastclick');
attachFastClick(document.body);

// services
dataService(stompbot);

// controllers
home(stompbot);
main(stompbot);
legal(stompbot);

stompbot
	.run(function() {
		document.addEventListener("deviceready", onDeviceReady, false);
	         
        function onDeviceReady() {
            FastClick.attach(document.body);
        }
	})
	.config(['$routeProvider', '$locationProvider', '$compileProvider', '$httpProvider',

		function ($routeProvider, $locationProvider, $compileProvider, $httpProvider, $rootScope) {

			// enable (true) disable (false) debug data for development/production
			$compileProvider.debugInfoEnabled(CONFIG.ANGULARJS.DEBUG_ENABLED);

			$routeProvider
				.when('/legal', {
					templateUrl: 'app/legal/template.html',
					controller: 'legalController',
					controllerAs: 'legal'
				})
				.otherwise({
					redirectTo: '/',
					controller: 'homeController',
					controllerAs: 'home',
					templateUrl: 'app/home/template.html'
				});
		}
	]);


stompbot.filter('debug', function () {
	return function (input) {
		if (input === '') return 'empty string';
		return input ? input : ('' + input);
	};
});


stompbot.filter('youTubeCode', function () {
	return function (str) {
		str = str.split('embed/');

		var formatted = str[1];
		return formatted;
	};
});

stompbot.directive('myYoutube', ['$sce', function ($sce) {
	return {
		restrict: 'EA',
		scope: { code: '=' },
		replace: true,
		template: '<div class="mediaViewerVidContainer"><iframe class="mediaViewerVid" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
		link: function (scope) {
			scope.$watch('code', function (newVal) {
				if (newVal) {
					scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal + '?modestbranding=1&autohide=1&showinfo=0');
				}
			});
		}
	};
}]);
