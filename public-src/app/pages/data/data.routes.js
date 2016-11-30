'use strict';

var app = require('../../app').appModule;
var dataCtrl = require('./data.controller');
var skillsCtrl = require('./skills/skills-form.controller');

app.config(['$stateProvider', function($stateProvider) {

    $stateProvider.state('data', {
        url: '/data',
        views: {
            'content': {
                templateUrl: 'app/pages/data/data.html',
                controller: dataCtrl.ID
            }
        }
    })
    .state('data.skill', {
        url: '/skill',
        views: {
            'skill': {
                templateUrl: 'app/pages/data/skills/skills-form.html',
                controller: skillsCtrl.ID,
                controllerAs: skillsCtrl.ID
            }
        }
    });
}]);
