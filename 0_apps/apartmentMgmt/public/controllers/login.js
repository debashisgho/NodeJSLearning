var myApp = angular.module('myApp');

myApp.controller('LoginController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('LoginController loaded...');
	$http.defaults.withCredentials = true;
$scope.loginUser = function(){
		console.log("starting controller method -going to call post method");
		$http.post('/aptmgmt/api/user/login/', $scope.user).then(function(response){
			//window.location.href='/aptmgmt/login';
			console.log("finished http call");
			console.log($location);
			console.log(response.data.status+" : "+response.data.message);
			var statusCode = "F";
			
			if(response.data.status < 400)
			{
				statusCode= "S";
			}

			$scope.response = {
				"status":statusCode,
				"message":response.data.message
			};
			
		});
	}
	

}]);