'use strict';

var app = require('../app').appModule;
var mainCtrl = require('./main.controller');

app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {
		$locationProvider.html5Mode(true);
		$stateProvider.state('home', {
                url: '/',
                views: {
                    'content': {
                        templateUrl: 'app/main/main.html',
                        controller: mainCtrl.ID
                    }
                }
		    });
		$urlRouterProvider.otherwise('/');
}]);
