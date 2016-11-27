'use strict';

angular.module('DnDManagerApp').factory('configurationService', function() {
    var config = {};

    config.backend = 'http://localhost:3000/';

    return config;
});