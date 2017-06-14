var myApp = angular.module('myApp');

//var myApp = angular.module('myApp',['ngMaterial']);

myApp.controller('RoomDataController', ['$scope', '$http', '$location', '$routeParams', '$rootScope','SessionService', function($scope, $http, $location, $routeParams,$rootScope,SessionService){
	console.log('roomDataController loaded...');

SessionService.runInitialSetUp();


$scope.room ={};
$scope.room.owner_details={};
$scope.room.owner_details.current =[];
$scope.room.owner_details.previous=[];

$scope.room.rent_details={};
$scope.room.rent_details.current =[];
$scope.room.rent_details.previous=[];

$scope.room.others={};
$scope.room.others.othersLiving =[];

$scope.date = new Date();

$scope.dateOptions = {
    dateDisabled: false,
    formatYear: 'yy',
    maxDate: new Date(2050, 12, 12),
    minDate: new Date(1900,1,1),
    startingDay: 1
  };

/*// Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }*/

  $scope.open= function() {
  	console.log("index of popup open -"+this.$index);
    $scope.popup.opened = true;
  };



  $scope.popup = {
    opened: false
  };


//control pop up currOwnerFromDate
$scope.popUpCurrOwnerFromDate =[];

//initial value of pop up
$scope.popUpDefault ={
	opened:false
}

$scope.openPopUpCurrOwnerFromDate =function(){
	$scope.popUpCurrOwnerFromDate[this.$index].opened = true;
}





//get the building id from the url
$scope._buildingId = $routeParams._buildingId;
$scope.measurementAreaUnit= "Sq.ft.";
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

$scope.addCurrentOwner= function(){
		console.log("add currentOwner called");
		$scope.popUpCurrOwnerFromDate.push($scope.popUpDefault);
		$scope.room.owner_details.current.push("");
	};

$scope.deleteCurrentOwner= function(){
		console.log("delete current Owner called");
		$scope.room.owner_details.current.splice(this.$index,1);
	};

$scope.addPreviousOwner= function(){
		console.log("add PreviousOwner called");
		$scope.room.owner_details.previous.push("");
	};

$scope.deletePreviousOwner= function(){
		console.log("delete Previous Owner called");
		$scope.room.owner_details.previous.splice(this.$index,1);
		
	};

$scope.addCurrentRent= function(){
		console.log("add currentRent called");
		$scope.room.rent_details.current.push("");
	};

$scope.deleteCurrentRent= function(){
		console.log("delete current Rent called");
		$scope.room.rent_details.current.splice(this.$index,1);
	};

$scope.addPreviousRent= function(){
		console.log("add PreviousRent called");
		$scope.room.rent_details.previous.push("");
	};

$scope.deletePreviousRent= function(){
		console.log("delete Previous Rent called");
		$scope.room.rent_details.previous.splice(this.$index,1);
		
	};
$scope.addOthersLiving= function(){
		console.log("add Others Living");
		$scope.room.others.othersLiving.push("");
	};

$scope.deleteOthersLiving= function(){
		console.log("delete Others living");
		$scope.room.others.othersLiving.splice(this.$index,1);
		
	};
  
}]);