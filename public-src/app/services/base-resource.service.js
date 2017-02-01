'use strict';
require('angular');

var app = require('../app').appModule;
const ID = 'baseResourceService';

module.exports = {
    ID: ID
};

BaseResourceService.$inject = ['configuration', '$http'];

function BaseResourceService(configuration, $http) {
    this.baseUrl = configuration.backend;

    function makeHttpRequest(requestData) {
        return $http(requestData);
    }

    this.create = (resourceName, resourceData) => {
        var requestData = {
            method: 'POST',
            url: this.baseUrl + resourceName,
            data: resourceData
        };
        return makeHttpRequest(requestData);
    };

    this.save = (resourceName, resourceData) => {
        var requestData = {
            method: 'PUT',
            url: this.baseUrl + resourceName + '/' + resourceData.id,
            data: resourceData
        };
        return makeHttpRequest(requestData);
    };

    this.delete = (resourceName, id) => {
        var requestData = {
            method: 'DELETE',
            url: this.baseUrl + resourceName + '/' + id
        };
        return makeHttpRequest(requestData);
    };

    this.get = (resourceName, id) => {
        var requestData = {
            method: 'GET',
            url: this.baseUrl + resourceName + '/' + id
        };
        return makeHttpRequest(requestData);
    };

    this.getAll = (resourceName) => {
        var requestData = {
            method: 'GET',
            url: this.baseUrl + resourceName
        };
        return makeHttpRequest(requestData);
    };
}

app.service(ID, BaseResourceService);
