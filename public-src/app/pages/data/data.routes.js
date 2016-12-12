'use strict';

var app = require('../../app').appModule;
var dataCtrl = require('./data.controller');
var skillsCtrl = require('./skills/skills-form.controller');
var entityCtrl = require('./entity.controller');

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
        params: {
            entity: null
        },
        views: {
            'skill': {
                templateUrl: 'app/pages/data/skills/skills-form.html',
                controller: skillsCtrl.ID,
                controllerAs: skillsCtrl.ID
            }
        },
        resolve: {
            // This will be solved before moving to the new state so the current one become the previous one
            // upon successful navigation
            previousState: [
                "$state",
                function ($state) {
                    var currentStateData = {
                        name: $state.current.name,
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }
            ]
        }
    })
        .state('data.entity', {
            url: '/entity/:entity',
            resolve: {
                entities: ['$http', 'configuration', '$stateParams', function ($http, configuration, $stateParams) {
                    return $http.get(configuration.backend + $stateParams.entity).then(function(result) {
                        return result.data;
                    })
                }]
            },
            views: {
                'entity': {
                    templateUrl: 'app/pages/data/entity.html',
                    controller: entityCtrl.ID,
                    controllerAs: entityCtrl.ID
                }
            }
        });
}]);
