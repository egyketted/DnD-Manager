angular.module('DnDManagerApp').factory('playersResourceService', ['baseResourceService', function(baseResourceService) {
    var resourceName = 'players';

    var service = angular.copy(baseResourceService);

    service.resourceName = resourceName;

    return service;
}]);