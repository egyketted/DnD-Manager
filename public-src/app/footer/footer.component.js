'use strict';

var app = require('../app').appModule;

const ID = 'appFooter';

function footerDirective($http) {
    let directive = {
        templateUrl: 'app/footer/footer.html',
        link: link
    };

    function link($scope) {
        $http.get('package.json').then(function(config) {
            $scope.name = config.data.name;
            $scope.version = config.data.version;
            $scope.buildnum = config.data.buildnum;
            console.log('loaded version info', config.data);
        });
    }

    return directive;
}

footerDirective.$inject = ['$http'];

app.directive(ID, footerDirective);
