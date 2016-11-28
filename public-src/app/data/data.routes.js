'use strict';

var app = require('../app').appModule;
var dataCtrl = require('./data.controller');

app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {

    $stateProvider.state('data', {
        url: '/data',
        views: {
            'content': {
                templateUrl: 'app/data/data.html',
                controller: dataCtrl.ID
            }
        }
    });
}]);