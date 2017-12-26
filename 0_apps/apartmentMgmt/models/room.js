var mongoose = require('mongoose');

//user schema
var roomSchema = mongoose.Schema({

	roomNo:
        {type: String, required: true, trim: true},

  	tower:
		{ type : mongoose.Schema.Types.ObjectId, ref: 'Tower'},
	
	floorNo:
		{type: String, trim: true},

	building:
		{ type : mongoose.Schema.Types.ObjectId, ref: 'Building'},
	
	area_details:{
		area:{type: Number, required:true, trim:true},
		measurementUnit:{type: String}
	},	

	owner_details:{ 

			current:[{				
				  	  id:{type : mongoose.Schema.Types.ObjectId, ref: 'User',requred: true}
			}],		

			previous:[{
				id:{type : mongoose.Schema.Types.ObjectId, ref: 'User',requred: true},
				fromDate:{type:Date,required:true},
				toDate:{type:Date,required:true}
			}]			
			
		},	

	others:{

			othersLiving:[{
				id:{type : mongoose.Schema.Types.ObjectId, ref: 'User',requred: true}
			}]

		},

	rent_details:{ 

			current:[{				
				  	  id:{type : mongoose.Schema.Types.ObjectId, ref: 'user',requred: true},
				  	  fromDate:{type:Date,required:true}
			}],		

			previous:[{
					  id:{type : mongoose.Schema.Types.ObjectId, ref: 'user',requred: true},
					  fromDate:{type:Date,required:true},
				      toDate:{type:Date,required:true}
			}]
			
		},				

	
	create_date:{
		type:Date, default: Date.now
	}

});


var Room = mongoose.model('Room',roomSchema);

module.exports = Room ;