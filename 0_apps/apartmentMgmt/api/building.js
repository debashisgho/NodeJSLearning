var express = require('express');
var router = express.Router();

Building = require('../models/building');


//insert building
router.post('/aptmgmt/api/building',function(request, response){
	console.log('insert building called');
	var building = request.body;	
	console.log("print building objects");
	
	console.log(building);
	Building.addBuilding(building, function(err,building){
		
		if(err){			
			//throw err;
			if(err.code==11000){
				response.json({status:409,message:"building is already existing"});				
			}
			else{
				//response.json({status:500,message:"Internal Server Error"});
				response.json(err);
			}
			return;
		}
		response.json({status:201, message:"building successfully added"});
	});
});

//get list of buildings
router.get('/aptmgmt/api/buildings',function(request, response){
	Building.getBuildings(function(err,buildings){
		if(err){
			response.json(err);
			return;
		}
		response.json(buildings);
	});
});


//get building by buildig id
router.get('/aptmgmt/api/building/:_id',function(request, response){
	console.log('get building  by id called for id:'+request.params._id);
	
	Building.getBuildingById(request.params._id,function(err,building){

		if(err){
			console.log("building.js -getBuildingById encountered error");
			response.json(err);
			return;
		}
		console.log("/api/building.js -getBuildingById db call success");
		
		response.json(building);
	});
	
});


//update building
router.put('/aptmgmt/api/building/:_emailId',function(request, response){
	var building = request.body;

	console.log("/api/building.js - update building request for email id:"+request.params._emailId);
	
	Building.updateBuilding(request.params._emailId, building, function(err){

		if(err){
			response.json(err);
			return;
		}
		

   		response.json({status:202, message:"Building successfully updated"});
	});
});
module.exports = router;