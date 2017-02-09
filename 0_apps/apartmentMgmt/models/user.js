var mongoose = require('mongoose');

//user schema
var userSchema = mongoose.Schema({

	name: {
      first: { type: String, required: true, trim: true},
      last: { type: String, required: true, trim: true}
  	},
	
	email:{
		type: String, required : true, unique: true, trim:true
	},

	phone:
		{
			primary:{type: String, trim:true},
			alternate1:{type: String, trim:true},
			alternate2:{type: String, trim:true},
			alternate3:{type: String, trim:true}
		},

	hashed_pwd:{type:String, required:true},

	temp_pwd:{type: String},

	temp_pwd_time:{type: Date},

	create_date:{
		type:Date, default: Date.now
	}

});

/*userSchema.pre('validate', function() {
	console.log('In pre validate check');
  if(this.hashed_pwd == 'undefined') {
    next(new Error('hashed_pwd should not be empty'));
    return;
  }

  next();
});*/

userSchema.pre('validate', function (next) {
  console.log('pre validate method----');
  if(this.hashed_pwd == 'undefined'){
  	 next(new Error('hashed_pwd should not be empty'));
    return;
  }
  next();
});

var User = mongoose.model('User',userSchema);

//Get All Users - should be restricted 
getUsers = function(callback,limit){
	var searchOptions='';
	var selectionRange = {hashed_pwd:0,hashed_pwd_time:0,temp_pwd:0,temp_pwd_time:0,create_date:0};
	User.find(searchOptions,selectionRange,callback).limit(limit);
}


//Get User by Email

getUserByEmail = function(emailId,password,callback){
	//console.log('user.js - get user by email -email id:'+emailId+','+'password:'+password);
	var searchOptions = {"email":emailId};
	var selectionRange = {hashed_pwd:0,hashed_pwd_time:0,temp_pwd:0,temp_pwd_time:0,create_date:0};
	//console.log(searchOptions);
	User.find(searchOptions, selectionRange,callback);
}

//Add User
addUser = function(user, callback){
	User.create(user, callback);
}


//Update User (basic information - not password)

updateUser = function(emailId, user,callback){
	var searchOptions = {"email":emailId};
	User.findOneAndUpdate(searchOptions, user, callback);
}

/*
//delete Book
deleteBook = function(id, callback){
	var query = {"_id":id};
	Book.remove(query,callback);
}

*/


User.getUsers = getUsers;
User.getUserByEmail = getUserByEmail;
User.addUser = addUser;
User.updateUser = updateUser;
/*
Book.deleteBook = deleteBook;
*/
module.exports = User ;