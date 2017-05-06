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


module.exports = router;