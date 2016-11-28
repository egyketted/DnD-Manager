'use strict';

var app = require('../app').appModule;
var mainCtrl = require('./main.controller');

app.config(['$stateProvider', function($stateProvider) {
		$stateProvider.state('home', {
                url: '/',
                views: {
                    'content': {
                        templateUrl: 'app/main/main.html',
                        controller: mainCtrl.ID
                    }
                }
		    });
}]);
