var myApp = angular.module('myApp');
	
myApp.controller('MyProfileController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('MyProfileController loaded...');

	$scope.viewProfile = function(){
		console.log('view profile called');
		$http.get('/aptmgmt/api/user/currentUser').then(function(response){			
			console.log(response.data[0]);
			$scope.user = response.data[0];
		});
	}
	
}]);