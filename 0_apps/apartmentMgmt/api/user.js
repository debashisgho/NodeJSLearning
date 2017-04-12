var express = require('express');
var router = express.Router();

User = require('../models/user');

//get users
router.get('/aptmgmt/api/users',function(request, response){
	User.getUsers(function(err,users){
		if(err){
			response.json(err);
			return;
		}
		response.json(users);
	});
});

//get user by email
router.get('/aptmgmt/api/user/:_emailId',function(request, response){
	console.log('get user by email called for email id:'+request.params._emailId);
	
	User.getUserByEmail(request.params._emailId,function(err,user){

		if(err){
			console.log("app.js -getUserByEmail encountered error");
			response.json(err);
			return;
		}
		console.log("app.js -getUserByEmail db call success");
		response.json(user);
	});
	
});

//insert user
router.post('/aptmgmt/api/user',function(request, response){
	console.log('insert user called');
	var user = request.body;	
	console.log("print user objects");
	console.log(user);
	User.addUser(user, function(err,user){

		if(err){			
			//throw err;
			if(err.code==11000){
				response.json({status:409,message:"User is already registered"});				
			}
			else{
				//response.json({status:500,message:"Internal Server Error"});
				response.json(err);
			}
			return;
		}
		response.json({status:201, message:"User successfully registered"});
	});
});


//update user
router.put('/aptmgmt/api/user/:_emailId',function(request, response){
	var user = request.body;
	//create a userMod so that only selective field can be updated
	var userMod={};
	userMod.name = user.name;
	userMod.phone = user.phone;
	console.log("app.js - update user request for email id:"+request.params._emailId);
	console.log("input user :"+user.name.first);
	console.log("to be modified segment"+userMod.name.first);
	User.updateUser(request.params._emailId, userMod, function(err){

		if(err){
			response.json(err);
			return;
		}
		
		//returned user document from update query can not sent back in the reseponse as it has credentials field
		User.getUserByEmail(request.params._emailId,function(err,user){
				if(err){
					response.json(err);
					return;
				}
				response.json(user);
   			});
	});
});

//Register User

router.post('/aptmgmt/api/user/register',function(request, response){
	console.log('register user called');
	var user = request.body;	
	console.log("print user objects");
	console.log(user);
	//response.json(user);

	User.addUser(user, function(err,user){

		if(err){			
			//throw err;
			if(err.code==11000){
				console.log("user already registered");
				response.json({status:409,message:"User is already registered"});	
				//console.log(response);			
			}
			else{
				//response.json({status:500,message:"Internal Server Error"});
				console.log("ran into error");
				response.json({status:500,message:err});
				//console.log(response);
			}
			return;
		}
		console.log("user successfully registered");
		response.json({status:201, message:"User successfully registered"});
		//response.status=201;
		//response.message="User successfully registered";
		//console.log(response);
	});
	
	
});

module.exports = router;
