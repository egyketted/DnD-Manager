'use strict';
require('angular');

var app = require('../../app').appModule;

const ID = 'entityCtrl';

module.exports = {
    ID: ID
};

EntityController.$inject = ['entities', '$stateParams', 'baseResourceService', '$state'];

function EntityController(entities, $stateParams, baseResourceService, $state) {
    this.gridData = entities;
    this.currentEntity = $stateParams.entity.substr(0, $stateParams.entity.length - 1);

    this.delete = (entity) => {
        baseResourceService.delete($stateParams.entity, entity.id).then(() => {
            this.gridData = this.gridData.filter(data => data.id !== entity.id)
        });
    };

    this.edit = (entity) => {
        $state.go(`data.${this.currentEntity}`, { entity: entity });
    };
}

app.controller(ID, EntityController);
