'use strict';
var app = require('../../app').appModule;

const ID = 'dmModeCtrl';

module.exports = {
    ID: ID
};

DmModeController.$inject = [];

function DmModeController() {

}

app.controller(ID, DmModeController);
