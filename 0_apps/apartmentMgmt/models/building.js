var mongoose = require('mongoose');

//user schema
var buildingSchema = mongoose.Schema({

	name:
        {type: String, required: true, trim: true}
  	},

  	contact:
  		{
  			email:[{type:String, trim:true}],
  			phone:[{type:String, trim:true}]
  		},

	details:{
		type:{type:String, required:true, enum: ['House', 'Co-Operative','Complex','Stand-Alone'],trim:true},
		towers:[{
			name:{type:String, required:true},
			floors:[{
				num:{type:String,required:true},
				rooms:[{
					type : ObjectId, ref: 'Room',required:true
				}]
			}]
		}]
	},	
		
	address:
		{
			address1:{type:String, required:true, trim:true},
			address2:{type:String, trim:true},
			address3:{type:String, trim:true},
			pin:{type:String, required:true, trim:true},
			postOffice:{type:String, trim:true},
			city_vill:{type:String, required:true, trim:true},
			district:{type:String, trim:true},
			state:{type:String, required:true, trim:true},
			country:{type:String, required:true,trim:true},
			landmark:{type:String, trim:true},
		},	

	associatedEmails:[{type:String,required:true,trim:true}],
	committeeMembers:[{
			designation:{type:String, required:true,trim:true},
			user_id:{type : ObjectId, ref: 'User',requred: true},
	}],


	create_date:{type:Date, default: Date.now}

});


var Building = mongoose.model('Building',buildingSchema);

module.exports = Building ;