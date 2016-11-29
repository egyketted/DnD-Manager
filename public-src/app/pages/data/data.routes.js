'use strict';

var app = require('../../app').appModule;
var dataCtrl = require('./data.controller');

app.config(['$stateProvider', function($stateProvider) {

    $stateProvider.state('data', {
        url: '/data',
        views: {
            'content': {
                templateUrl: 'app/pages/data/data.html',
                controller: dataCtrl.ID
            }
        }
    });
}]);