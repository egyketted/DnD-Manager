'use strict';
require('angular');
require('angular-ui-router');

var app = angular.module('DnDManagerApp', ['ui.router']);

module.exports = {
    appModule: app
};

app.config(['$locationProvider', '$urlRouterProvider', function($locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}]);
