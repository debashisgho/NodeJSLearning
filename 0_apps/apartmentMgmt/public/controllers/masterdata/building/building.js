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
			
			var building = response.data;
			console.log(building);
			for(var i=0; i<building.committeeMembers.length;i++){

				building.committeeMembers[i].name.fullName=building.committeeMembers[i].name.last+","+building.committeeMembers[i].name.first;
			}
			$scope.building = building;
			console.log($scope.building);
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

$scope.addCommitteeMember= function(){
		console.log("add another member called");
		console.log($scope.building.committeeMembers);
		$scope.building.committeeMembers.push("");
	};

$scope.deleteCommitteeMember= function(){
		console.log("delete member called for index:"+this.$index);
		console.log($scope.building.committeeMembers);
		$scope.building.committeeMembers.splice(this.$index,1);
	};

}]);