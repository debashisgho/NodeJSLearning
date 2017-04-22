var myApp = angular.module('myApp');

myApp.controller('HomeController', ['$scope', '$http', '$location', '$routeParams','SessionService', '$rootScope', function($scope, $http, $location, $routeParams,SessionService,$rootScope){
	console.log('HomeController loaded...');
	
	var responsePromise = SessionService.getLogInDetails();

	responsePromise
	.then(function(data){		
		$scope.user= data;
		$rootScope.user = data;
	});
	
}]);