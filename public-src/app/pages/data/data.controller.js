'use strict';
require('angular');

const ID = 'dataCtrl';

module.exports = {
    ID: ID
};

angular.module('DnDManagerApp').controller(ID, ['$scope', '$http', 'configuration', function($scope, $http, configuration) {
    $http.get(configuration.backend + 'entities').then(function(result) {
        $scope.entities = result.data;
    });

    $scope.refreshGrid = function(entity) {
       $scope.currentEntity = entity;
       $http.get(configuration.backend + entity).then(function(result) {
           $scope.gridData = result.data;
       })
    };

    $scope.edit = function(entity) {
        $scope.resource = entity;
        $scope.editing = true;
    };

    $scope.create = function() {
        $scope.resource = {id: undefined, name: '', description: ''};
        $scope.editing = true;
    };

    $scope.delete = function(entity) {
        $http.delete(configuration.backend + $scope.currentEntity + '/' + entity.id);
    };

    $scope.cancel = function() {
        $scope.editing = false;
    }
}]);