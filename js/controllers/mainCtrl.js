'use strict';

angular.module('DnDManagerApp') .controller('mainCtrl', ['$state', '$scope', '$http', function($state, $scope, $http) {
	console.log($state);
	$scope.states = [
		{label: 'data', onclick: function() { $state.go('data'); }},
		{label:'DM mode', onclick: function() { $state.go('dm-mode'); }},
		{label:'Player mode', onclick: function() { $state.go('player-mode'); }}
	];
	$http.get('package.json').then(function(config) {
		$scope.name = config.data.name;
		$scope.version = config.data.version;
		$scope.buildnum = config.data.buildnum;
		console.log('loaded version info', config.data);
	})
}]);