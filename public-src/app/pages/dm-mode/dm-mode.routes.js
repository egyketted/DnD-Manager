'use strict';

var app = require('../../app').appModule;
var dmModeCtrl = require('./dm-mode.controller');

app.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('dm-mode', {
        url: '/dm-mode',
        views: {
            'content': {
                templateUrl: 'app/pages/dm-mode/dm-mode.html',
                controller: dmModeCtrl.ID,
                controllerAs: dmModeCtrl.ID
            }
        }
    })
}]);
