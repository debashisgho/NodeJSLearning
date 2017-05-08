var myApp = angular.module('myApp');

myApp.controller('buildingDataController', ['$scope', '$http', '$location', '$routeParams','SessionService', function($scope, $http, $location, $routeParams,SessionService){
	console.log('BuildingDataController loaded...');

SessionService.runInitialSetUp();

$scope.getBuildings = function(){
		console.log('getBuildings called');
		$http.get('/aptmgmt/api/buildings').then(function(response){			
			console.log(response.data);
			$scope.buildings = response.data;
		});
	};

$scope.getBuildingById = function(){
		var id = $routeParams.id;
		console.log('getBuildingById called for building id:'+id);
		$http.get('/aptmgmt/api/building/'+id).then(function(response){			
			console.log(response.data);
			$scope.building = response.data[0];
		});
	};

$scope.addAnotherPhone= function(){
		console.log("add another phone called");
		console.log($scope.building.contact.phone);
		$scope.building.contact.phone.push("");
		/*$scope.building.contact.phone[0]="hello";*/
	};

$scope.deletePhone= function(){
		console.log("delete phone called");
		console.log($scope.building.contact.phone);
		$scope.building.contact.phone.splice(this.$index,1);
		/*$scope.building.contact.phone[0]="hello";*/
	};

}]);