'use strict';

var app = require('../app').appModule;

const ID = 'appNavbar';

appNavbar.$inject = [];

function appNavbar() {
    let directive = {
        templateUrl: 'app/nav-bar/navbar.html',
        link: link
    };

    function link($scope) {}

    return directive;
}

app.directive(ID, appNavbar);
