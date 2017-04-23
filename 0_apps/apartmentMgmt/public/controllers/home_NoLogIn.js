var myApp = angular.module('myApp');

myApp.controller('Home_NoLogInController', ['$scope', '$http', '$location', '$routeParams','SessionService', '$rootScope', function($scope, $http, $location, $routeParams,SessionService,$rootScope){
	console.log('Home_NoLogInController loaded...');
	
	var responsePromise = SessionService.getLogInDetails();

	responsePromise
	.then(function(data){		
		$scope.user= data;
		$rootScope.user = data;
	});
	
}]);