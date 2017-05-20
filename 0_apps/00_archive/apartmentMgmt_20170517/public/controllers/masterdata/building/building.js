var myApp = angular.module('myApp');

//var myApp = angular.module('myApp',['ngMaterial']);

myApp.controller('buildingDataController', ['$scope', '$http', '$location', '$routeParams','SessionService', function($scope, $http, $location, $routeParams,SessionService){
	console.log('BuildingDataController loaded...');

SessionService.runInitialSetUp();
$scope.formEditMode = false ; // during page load form will be on view mode.
$scope.formEditButtonText = "Edit"; 

$scope.selected="";
$scope.testNames =['Name1', 'Name2','Name3','Apple1','Ball'];

$scope.editForm = function(){
	
	if($scope.formEditMode == false){
		$scope.formEditButtonText = "Cancel Edit";
		$scope.formEditMode = true;
		return;
	}

	if($scope.formEditMode == true){
		$scope.getBuildingById(); //refresh the $scope building data to ensure changes during edit are lost
		$scope.formEditButtonText = "Edit";
		$scope.formEditMode = false;
		return;
	}
};

$scope.getBuildings = function(){
		console.log('getBuildings called');
		$http.get('/aptmgmt/api/masterdata/buildings').then(function(response){			
			console.log(response.data);
			$scope.buildings = response.data;
		});
	};

$scope.getBuildingById = function(){
		var id = $routeParams.id;
		console.log('getBuildingById called for building id:'+id);
		$http.get('/aptmgmt/api/masterdata/building/'+id).then(function(response){			
			
			var building = response.data;
			console.log(building);
			for(var i=0; i<building.committeeMembers.length;i++){

				building.committeeMembers[i].name.fullName=building.committeeMembers[i].name.last+","+building.committeeMembers[i].name.first;
			}
			$scope.building = building;
			console.log($scope.building);
		});
	};
$scope.updateBuilding = function(){
		
		$scope.buildingInfo.$setPristine();//the form is submitted, so reset to pristine
		console.log("controller updateProfile started");
		
		//modify the extra data from building that is not expected by backend. 
		for(var i=0; i<$scope.building.committeeMembers.length; i++){			
			delete $scope.building.committeeMembers[i].name.fullName;
		}
		console.log($scope.building);
		$http.put('/aptmgmt/api/masterdata/building/'+$scope.building._id, $scope.building).then(function(response){
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

			//call the getBuildingById method to refresh the building data from backend
			$scope.getBuildingById();
			$scope.formEditMode =false;
			$scope.formEditButtonText ="Edit";
			
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