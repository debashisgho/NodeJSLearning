var myApp = angular.module('myApp');

myApp.controller('RegisterController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('RegisterController loaded...');

	$scope.registerUser = function(){
		console.log("starting controller method -going to call post method");
		$http.post('/aptmgmt/api/user/register/', $scope.user).then(function(response){
			//window.location.href='/aptmgmt/login';
			console.log("finished http call");
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