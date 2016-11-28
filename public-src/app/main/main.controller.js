'use strict';
require('angular');
var app = require('../app').appModule;

const ID = 'mainCtrl';

module.exports = {
    ID: ID
};

app.controller(ID, [
	'$state', '$scope', '$http', function($state, $scope, $http) {
		console.log($state);
		$scope.states = [
			{ label: 'data', state: 'data'},
			{ label: 'DM mode', state: 'dm-mode' },
			{ label: 'Player mode', state: 'player-mode' }
		];

		$http.get('package.json').then(function(config) {
			$scope.name = config.data.name;
			$scope.version = config.data.version;
			$scope.buildnum = config.data.buildnum;
			console.log('loaded version info', config.data);
		});
}]);