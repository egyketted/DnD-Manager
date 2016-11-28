'use strict';
require('angular');
require('angular-ui-router');

angular.module('DnDManagerApp', ['ui.router'])
	.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {
		$locationProvider.html5Mode(true);
		$stateProvider.state('home', {
			url: '/',
			views: {
				'content': {
					templateUrl: 'views/main.html',
					controller: 'mainCtrl'
				}
			}
		})
		.state('login', {
			url: '/login',
			views: {
				'content': {
					templateUrl: 'views/main.html',
					controller: 'mainCtrl'
				}
			}
		})
		.state('data', {
			url: '/data',
			views: {
				content: {
					templateUrl: 'views/data.html',
					controller: 'dataCtrl'
				}
			}
		});
		$urlRouterProvider.otherwise('/');
	}]);
