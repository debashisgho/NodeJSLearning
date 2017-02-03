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
			alternate:[{type: String, trim:true}]
		},

	hased_pwd:{type:String, required:true},

	temp_pwd:{type: String},

	temp_pwd_time:{type: String},


	create_date:{
		type:Date, default: Date.now
	}

});


var User = mongoose.model('User',userSchema);

module.exports = User ;