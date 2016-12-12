'use strict';
require('angular');

const ID = 'skillFormCtrl';

var app = require('../../../app').appModule;

module.exports = {
    ID: ID
};

SkillFormController.$inject = ['$scope', 'baseResourceService', '$state', 'previousState', '$stateParams'];

function SkillFormController($scope, baseResourceService, $state, previousState, $stateParams) {
    $scope.resource = angular.copy($stateParams.entity);

    $scope.create = () => {
        baseResourceService.create('skills', $scope.resource)
            .then(response => {
                $state.go(previousState.name, previousState.params);
            })
            .catch(error => {
               console.log(error);
        });
    };

    $scope.cancel = () => {
        $state.go(previousState.name, previousState.params);
    };

    $scope.save = () => {
        baseResourceService.save('skills', $scope.resource)
            .then(response => {
                $state.go(previousState.name, previousState.params);
            }).catch(error => {
                console.log(error);
            });
    };

    $scope.reset = () => {
        $scope.resource = angular.copy($stateParams.entity);
    };
}

app.controller(ID, SkillFormController);
