var express = require('express');
var router = express.Router();
var sessionMiddleware = require('../middleware/session.js');

MasterData = require('../models/masterdata');

/*function requireLogIn(request, response, next){
	console.log('inside middleware to check if loggedIn');
	if(!request.session.user){
		console.log('user not logged in');
		//response.redirect('/aptmgmt');
		return false;
	}
	else{
		next();
	}
}*/

//get masterdata categories
router.get('/aptmgmt/api/masterdata/categories', sessionMiddleware.redirectIfNotLoggedIn, function(request, response){
	MasterData.getCategories(function(err,categories){
		if(err){
			response.json(err);
			return;
		}		
		response.json(categories);
	});
});

module.exports = router;