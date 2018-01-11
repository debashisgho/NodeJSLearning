var express = require('express');
var router = express.Router();

Room = require('../../models/room');

//add the routes

//insert room
router.post('/aptmgmt/api/masterdata/building/tower/room',function(request, response){
	console.log('insert room called');
	var room = request.body;	
	console.log("print room objects");
	
	console.log(room);
	Room.addRoom(room, function(err,room){

		
		if(err){			
			//throw err;
			console.log(err);
			if(err.code==11000){
				response.json({status:409,message:"room is already existing"});				
			}
			else{
				//response.json({status:500,message:"Internal Server Error"});
				response.json(err);
			}
			return;
		}
		response.json({status:201, message:"room successfully added"});
	});
});


//get rooms by tower id
router.get('/aptmgmt/api/masterdata/building/tower/:_towerId/rooms',function(request, response){

	console.log("/api/room.js -"+request.body);
	var _towerId = request.params._towerId;
	Room.getRoomsByTowerId(_towerId,function(err,rooms){
		
		if(err){
			response.json(err);
			return;
		}
		response.json(rooms);
	});
});


module.exports = router;

