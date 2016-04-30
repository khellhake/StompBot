var _ = require('lodash');

function Controller (mainService, $location, $mdSidenav, $window, $cordovaEmailComposer, $cordovaInAppBrowser, $routeParams, $cordovaSms, $rootScope) {
	var self = this;
	self.mainService = mainService;
	self.$location = $location;
	self.$mdSidenav = $mdSidenav;
	self.$window = $window;
	self.$cordovaEmailComposer = $cordovaEmailComposer;
	self.$cordovaInAppBrowser = $cordovaInAppBrowser;
	self.$cordovaSms = $cordovaSms;
	self.$routeParams = $routeParams;
	self.$rootScope = $rootScope;

	//vars
	self.totalSelected = 0;
	self.isSidenavOpen = false;
	self.selectedArray = [];

	self.goTo = function (page) {
		this.$location.path('/' + page);
	};

	self.toggleMenu = function() {
		self.$mdSidenav('left').toggle();
	};

	self.openInsta = function($window) {
		self.$window.open('instagram://user?username=stompbotapp', '_system');
		return false;
	};

	self.selectRow = function (pedal) {
        // ADD TO LIST
        if (self.selectedArray.indexOf(pedal) == -1) {
            self.selectedArray.push(pedal);
            self.totalSelected += parseInt(pedal.ma);

			// Store
			localStorage.setItem('stompBotSelected', JSON.stringify(self.selectedArray));
        } 
        // REMOVE FROM LIST
        else {
            self.selectedArray.splice(self.selectedArray.indexOf(pedal),1);
            self.totalSelected -= parseInt(pedal.ma);

        }
    };

    self.isSelected = function (pedal) {
        if( self.selectedArray.indexOf(pedal) > -1 || localStorage.stompBotSelected.indexOf(pedal.$$haskKey) > -1){

            return true;
        }
        return false;
    };

	self.sendMail = function(){
		self.$cordovaEmailComposer.isAvailable().then(function() {
		   // is available
		 }, function () {
		   // not available
		 });

		  var email = {
		    to: 'info@stompbotapp.com',
		    subject: 'StompBot - I want more!',
		    body: '<h3>Hi StompBot,<br />You\'re the greatest!</h3> <p>Please add these pedals to your list: </p>',
		    isHtml: true
		  };

		 self.$cordovaEmailComposer.open(email).then(null, function () {});
	};

	self.$rootScope.sendSMS = function($cordovaSms) {
		var message = "Hey! You have to checkout this new app I got for tracking your pedals' power usage. https://goo.gl/HzduYd",
			options = {};

		self.$cordovaSms
			.send('', message, options)
			.then(function() {
			// Success! SMS was sent
			alert("Thanks for sharing!");
		}, function(error) {
			// An error occurred
			alert("It's cool... maybe share it later?");
		});
	};


}

module.exports = Controller;