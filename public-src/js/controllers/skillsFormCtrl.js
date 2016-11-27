'use strict';

angular.module('DnDManagerApp').controller('skillFormCtrl', ['$scope', '$http', 'baseResourceService', function($scope, $http, baseResourceService) {
    baseResourceService.resourceName = 'skills';

    $scope.baseResource = angular.copy($scope.resource);

    $scope.create = function() {
        baseResourceService.create($scope.resource, function(response) {
            window.alert('Entity successfully created!');
            $scope.cancel();
        }, function(error) {
            window.alert('Something went wrong!');
        });
    };

    $scope.save = function() {
        baseResourceService.save($scope.resource, function(response) {
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
