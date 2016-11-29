'use strict';

var app = require('../../app').appModule;
var playerModeCtrl = require('./player-mode.controller');

app.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('player-mode', {
        url: '/player-mode',
        views: {
            'content': {
                templateUrl: 'app/pages/player-mode/player-mode.html',
                controller: playerModeCtrl.ID,
                controllerAs: playerModeCtrl.ID
            }
        }
    })
}]);

