var myApp = angular.module('myApp');

myApp.controller('LogoutController', ['$scope','$http', '$location', function($scope,$http, $location){
	console.log('LogoutController loaded...');
$scope.logout = function(){
		$http.get('/aptmgmt/api/user/session/logout/').then(function(response){
			$location.url("/aptmgmt");			
		});
	}
	

}]);