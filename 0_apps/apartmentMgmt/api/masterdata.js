var express = require('express');
var router = express.Router();

MasterData = require('../models/masterdata');


//get masterdata categories
router.get('/aptmgmt/api/masterdata/categories',function(request, response){
	MasterData.getCategories(function(err,categories){
		if(err){
			response.json(err);
			return;
		}		
		response.json(categories);
	});
});

module.exports = router;