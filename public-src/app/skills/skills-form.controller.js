'use strict';
require('angular');

angular.module('DnDManagerApp').controller('skillFormCtrl', ['$scope', '$http', 'skillsResourceService',
    function($scope, $http, skillsResourceService) {
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
}]);
