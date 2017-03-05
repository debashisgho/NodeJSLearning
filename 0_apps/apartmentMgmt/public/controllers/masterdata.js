var myApp = angular.module('myApp');

myApp.controller('MasterDataController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('MasterDataController loaded...');


$scope.getMasterDataCategories = function(){
		$http.get('/aptmgmt/api/masterdata/categories').then(function(response){
			$scope.masterdataL = response.data;			
		});
	}
	

}]);