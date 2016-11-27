angular.module('DnDManagerApp').factory('skillsResourceService', ['baseResourceService', function(baseResourceService) {
    var resourceName = 'skills';

    var service = angular.copy(baseResourceService);

    service.resourceName = resourceName;

    return service;
}]);
