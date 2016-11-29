'use strict';
var app = require('../../app').appModule;

const ID = 'playerModeCtrl';

module.exports = {
    ID: ID
};

PlayerModeController.$inject = [];

function PlayerModeController() {

}

app.controller(ID, PlayerModeController);

