'use strict';
require('angular');
var app = require('../app').appModule;

const ID = 'mainCtrl';

module.exports = {
    ID: ID
};

MainController.$inject = ['$scope'];

function MainController($scope) {
    var vm = this;

    vm.states = [
        { label: 'data', state: 'data'},
        { label: 'DM mode', state: 'dm-mode' },
        { label: 'Player mode', state: 'player-mode' }
    ];
}

app.controller(ID, MainController);