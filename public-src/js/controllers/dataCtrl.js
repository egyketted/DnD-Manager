'use strict';

angular.module('DnDManagerApp') .controller('dataCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('http://localhost:3000/entities').then(function(result) {
        $scope.entities = result.data;
    });

    $scope.refreshGrid = function(entity) {
        $scope.currentEntity = entity;
       $http.get('http://localhost:3000/' + entity).then(function(result) {
           $scope.gridData = result.data;
       })
    };

    $scope.edit = function(entity) {
        $scope.editing = true;
        $scope.editedEntity = entity;
    };
    $scope.delete = function(entity) {
        $http.delete('http://localhost:3000/' + $scope.currentEntity + '/' + entity.id);
    }
}]);