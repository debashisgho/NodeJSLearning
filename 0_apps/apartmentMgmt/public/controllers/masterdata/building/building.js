var myApp = angular.module('myApp');

myApp.controller('buildingDataController', ['$scope', '$http', '$location', '$routeParams','SessionService', function($scope, $http, $location, $routeParams,SessionService){
	console.log('BuildingDataController loaded...');

SessionService.runInitialSetUp();


/*$scope.getMasterDataCategories = function(){
	console.log('getMasterDataCategories called');
		$http.get('/aptmgmt/api/masterdata/categories').then(function(response){
			$scope.masterdataL = response.data;			
			console.log('got response');
		});

	}*/
	

}]);