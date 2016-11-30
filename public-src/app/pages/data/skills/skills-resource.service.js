require('angular');

var baseResourceService = require('../services/base-resource.service');
var app = require('../app').appModule;

const ID = 'skillsResourceService';

module.exports = {
    ID :ID
};

SkillsResourceService.$inject = [baseResourceService.ID];

function SkillsResourceService(baseResourceService) {
    var resourceName = 'skills';

    var service = angular.copy(baseResourceService);

    service.resourceName = resourceName;

    return service;
}

app.service(ID, SkillsResourceService);
