'use strict';
require('angular');

angular.module('DnDManagerApp').factory('baseResourceService', ['configurationService', '$http', function(configurationService, $http) {
    var service = {};

    service.baseUrl = configurationService.backend;
    service.resourceName = '';

    function makeHttpRequest(requestData, successCB, errorCB) {
        $http(requestData).then(successCB, errorCB);
    }

    service.create = function(resource, successCB, errorCB) {
        var requestData = {
            method: 'POST',
            url: service.baseUrl + service.resourceName,
            data: resource
        };
        makeHttpRequest(requestData, successCB, errorCB);
    };

    service.save= function(resource, successCB, errorCB) {
        var requestData = {
            method: 'PUT',
            url: service.baseUrl + service.resourceName + '/' + resource.id,
            data: resource
        };
        makeHttpRequest(requestData, successCB, errorCB);
    };

    service.delete = function(id, successCB, errorCB) {
        var requestData = {
            method: 'DELETE',
            url: service.baseUrl + service.resourceName + '/' + id
        };
        makeHttpRequest(requestData, successCB, errorCB);
    };

    service.get = function(id, successCB, errorCB) {
        var requestData = {
            method: 'GET',
            url: service.baseUrl + service.resourceName + '/' + id
        };
        makeHttpRequest(requestData, successCB, errorCB);
    };

    service.getAll = function(successCB, errorCB) {
        var requestData = {
            method: 'GET',
            url: service.baseUrl + service.resourceName
        };
        makeHttpRequest(requestData, successCB, errorCB);
    };

    return service;
}]);