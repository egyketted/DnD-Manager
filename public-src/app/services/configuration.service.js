'use strict';
require('angular');

const CONFIG = {
    backend: 'http://localhost:3000/'
};

angular.module('DnDManagerApp').value('configuration', CONFIG);