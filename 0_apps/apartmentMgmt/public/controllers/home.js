var myApp = angular.module('myApp');
//below disabled part is a working code, it is used just in case the promise and callback
//model does not work well
/*myApp.service('InitSvcs', function($http) {
    this.getLogInDetails = function () {
        return $http.get('/aptmgmt/api/user/session/isLoggedIn');
    }
});

myApp.controller('HomeController', ['$scope', '$http', '$location', '$routeParams','InitSvcs', function($scope, $http, $location, $routeParams,InitSvcs){
	console.log('HomeController loaded...');
	
	InitSvcs.getLogInDetails().then(function(result){
		$scope.user =result.data.user;
	});
	
	
}]);*/


myApp.service('InitSvcs', function($http) {
    this.getLogInDetails = function () {  	 

       return $http.get('/aptmgmt/api/user/session/isLoggedIn')
        .then(function(response){
        	return response.data.user;
        });
       
    }
});

myApp.controller('HomeController', ['$scope', '$http', '$location', '$routeParams','InitSvcs', '$rootScope', function($scope, $http, $location, $routeParams,InitSvcs,$rootScope){
	console.log('HomeController loaded...');
	
	var responsePromise = InitSvcs.getLogInDetails();

	responsePromise
	.then(function(data){		
		$scope.user= data;
		$rootScope.user = data;
	});
	
}]);