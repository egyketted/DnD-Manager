'use strict';

var app = require('../app').appModule;

const ID = 'appFooter';

let component = {
    controller: footerController,
    templateUrl: 'app/footer/footer.html'
}

function footerController($http) {
    var vm = this;
    $http.get('package.json').then(function(config) {
        vm.name = config.data.name;
        vm.version = config.data.version;
        vm.buildnum = config.data.buildnum;
        console.log('loaded version info', config.data);
    });
}

footerController.$inject = ['$http'];

app.component(ID, component);
