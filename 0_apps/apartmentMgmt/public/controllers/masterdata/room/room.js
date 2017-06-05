var myApp = angular.module('myApp');

//var myApp = angular.module('myApp',['ngMaterial']);

myApp.controller('RoomDataController', ['$scope', '$http', '$location', '$routeParams', '$rootScope','SessionService', function($scope, $http, $location, $routeParams,$rootScope,SessionService){
	console.log('roomDataController loaded...');

SessionService.runInitialSetUp();


//get the building id from the url
$scope._buildingId = $routeParams._buildingId;
$scope.selectedTower = null;
 //$scope.buildingName = $rootScope.building.name;
 //console.log($rootScope);

//get list of towers -/aptmgmt/api/masterdata/building/:_buildingId/towers

$scope.getTowersByBuildingId= function(){

	console.log('getTowersByBuildingId called');
		$http.get('/aptmgmt/api/masterdata/building/'+$scope._buildingId+'/towers').then(function(response){			
			console.log(response.data);
			$scope.towers = response.data;
			if($scope.towers.length ==1){
				console.log("tower size is 1");
				//$scope.selectedTower = $scope.towers[0]._id;
				
			}
			else{
				var selectAllOption = {"_id":"","name":"--All Towers--"}; 
				$scope.towers.unshift(selectAllOption);
			}

			$scope.selectedTower = $scope.towers[0]._id;
		});

}


  
}]);