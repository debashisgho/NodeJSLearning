var myApp = angular.module('myApp');

myApp.service('InitSvcs', function($http) {
    this.getLogInDetails = function () {
        return $http.get('/aptmgmt/api/user/session/isLoggedIn');
    }
});

myApp.controller('HomeController', ['$scope', '$http', '$location', '$routeParams','InitSvcs', function($scope, $http, $location, $routeParams,InitSvcs){
	console.log('HomeController loaded...');
	
	InitSvcs.getLogInDetails().then(function(result){
		$scope.user =result.data.user;
	});
	
	
}]);