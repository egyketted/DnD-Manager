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
    this.resourceName = '';

    function makeHttpRequest(requestData, successCB, errorCB) {
        $http(requestData).then(successCB, errorCB);
    }

    this.create = function(resource, successCB, errorCB) {
        var requestData = {
            method: 'POST',
            url: this.baseUrl + this.resourceName,
            data: resource
        };
        makeHttpRequest(requestData, successCB, errorCB);
    };

    this.save = function(resource, successCB, errorCB) {
        var requestData = {
            method: 'PUT',
            url: this.baseUrl + this.resourceName + '/' + resource.id,
            data: resource
        };
        console.log(requestData);
        makeHttpRequest(requestData, successCB, errorCB);
    };

    this.delete = function(id, successCB, errorCB) {
        var requestData = {
            method: 'DELETE',
            url: this.baseUrl + this.resourceName + '/' + id
        };
        makeHttpRequest(requestData, successCB, errorCB);
    };

    this.get = function(id, successCB, errorCB) {
        var requestData = {
            method: 'GET',
            url: this.baseUrl + this.resourceName + '/' + id
        };
        makeHttpRequest(requestData, successCB, errorCB);
    };

    this.getAll = function(successCB, errorCB) {
        var requestData = {
            method: 'GET',
            url: this.baseUrl + this.resourceName
        };
        makeHttpRequest(requestData, successCB, errorCB);
    };
}

app.service(ID, BaseResourceService);
