'use strict';
require('angular');
var app = require('../app').appModule;

const ID = 'mainCtrl';

module.exports = {
    ID: ID
};

MainController.$inject = ['$scope'];

function MainController($scope) {
}

app.controller(ID, MainController);