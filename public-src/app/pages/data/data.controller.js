'use strict';
require('angular');

var app = require('../../app').appModule;

const ID = 'dataCtrl';

module.exports = {
    ID: ID
};

DataController.$inject = ['$scope', '$http', 'configuration'];

function DataController($scope, $http, configuration, baseResourceService, $stateParams) {
    $http.get(configuration.backend + 'entities').then(function(result) {
        $scope.entities = result.data;
    });

    $scope.refreshGrid = function(entity) {
       $scope.currentEntity = entity;
       $http.get(configuration.backend + entity).then(function(result) {
           $scope.gridData = result.data;
       });
    };

    $scope.cancel = function() {
        $scope.editing = false;
    }
}

app.controller(ID, DataController);
