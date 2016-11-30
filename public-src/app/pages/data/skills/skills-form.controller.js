'use strict';
require('angular');

const ID = 'skillFormCtrl';

var app = require('../../../app').appModule;

module.exports = {
    ID: ID
};

SkillFormController.$inject = ['$scope', '$http', 'skillsResourceService'];

function SkillFormController($scope, $http, skillsResourceService) {
        $scope.baseResource = angular.copy($scope.resource);

        $scope.create = function() {
            skillsResourceService.create($scope.resource, function(response) {
                window.alert('Entity successfully created!');
                $scope.cancel();
            }, function(error) {
                window.alert('Something went wrong!');
            });
        };

        $scope.save = function() {
            skillsResourceService.save($scope.resource, function(response) {
                window.alert('Entity successfully saved!');
                $scope.cancel();
            }, function(error) {
                window.alert('Something went wrong!');
            });
        };

        $scope.reset = function() {
            $scope.resource = $scope.baseResource;
        };
}

app.controller(ID, SkillFormController);
