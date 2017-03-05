
/*sample query
db.masterdatacategory.insert({"type": "user","description": "Maintain User Detail","img_url": "../images/user.jpeg"})
*/
var mongoose = require('mongoose');


//master data category
var masterdataSchema = mongoose.Schema({

	type: {
      type: String, required : true, unique: true, trim:true
  	},
	
	description:{
		type: String, required : true, trim:true
	},

	img_url:{
		type:String, required: true
	}

},
{collection: 'masterdatacategory'}
);



var MasterData = mongoose.model('MasterData',masterdataSchema);
//Get All Categories
getCategories = function(callback,limit){
	var searchOptions='';
	var selectionRange = {__v:0};
	MasterData.find(searchOptions,selectionRange,callback).limit(limit);
}



MasterData.getCategories = getCategories;

module.exports = MasterData ;