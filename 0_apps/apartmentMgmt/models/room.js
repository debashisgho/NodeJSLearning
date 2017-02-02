var mongoose = require('mongoose');

//user schema
var roomSchema = mongoose.Schema({

	roomNo:
        {type: String, required: true, trim: true}
  	},
	
	floorNo:
		{type: String, required: false, trim: true},

	buildings:
		{ type : ObjectId, ref: 'building'},
	
	area_details:{
		area:{type: Number, required:true, trim:true},
		measurementUnit:{type: String}
	}
		

	create_date:{
		type:Date, default: Date.now
	},

	owner_details:{ 

			current:{				
				  	  id:{type : ObjectId, ref: 'user',requred: true},
					  fromDate:{type:Date,required:true},
			},		

			previous:[{
				id:{type : ObjectId, ref: 'user',requred: true},
				fromDate:{type:Date,required:true},
				toDate:{type:Date,required:true}
			}]
			
		},	

	rent_details:{ 

			current:{				
				  	  id:{type : ObjectId, ref: 'user',requred: true},
					  from:{type:Date,required:true},
			},		

			previous:[{
					  id:{type : ObjectId, ref: 'user',requred: true},
					  fromDate:{type:Date,required:true},
				      toDate:{type:Date,required:true}
			}]
			
		},	

});


var User = mongoose.model('User',userSchema);

module.exports = User ;