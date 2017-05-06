
/*sample JSON

{

	"name":"Rittika Apartment",
  	"contact":
  		{
  			"email":"rittikaApt@gmail.com",
  			"phone":"91-9903887868"
  		},

	"details":{
		"type":"Stand-Alone",
		"towers":[{
			"name":"tower-A",
			"floors":[{
				"num":"5"
			}]
		}]
	},	
		
	"address":
		{
			"address1":"Sourav Ganguly Avenue",
			"address2":"Bablatala",
			"address3":"Kalipark",
			"pin":"700136",
			"postOffice":"R-Gopalpur",
			"city_vill":"Kolkata",
			"district":"South 24 pgs",
			"state":"West Bengal",
			"country":"India",
			"landmark":"near 217-B Bus Stand"
		},	

	"associatedEmails":[
			"debashisgho@gmail.com, pallabi_1988@gmail.com"
		],
	"committeeMembers":[
		{
			"designation":"member",
			"user_id":"58fced9a66928924e8db4501"
		},
		{
			"designation":"member",
			"user_id":"58fed3da01183c1b38063d0b"
		}
	]

}
*/



var mongoose = require('mongoose');

//user schema
var buildingSchema = mongoose.Schema({

	name:
        {type: String, required: true, trim: true},

  	contact:
  		{
  			email:[{type:String, required:true, unique: true,trim:true}],
  			phone:[{type:String, trim:true}]
  		},

	details:{
		type:{type:String, required:true, enum: ['House', 'Co-Operative','Complex','Stand-Alone'],trim:true},
		towers:[{
			name:{type:String, required:true},
			floors:[{
				num:{type:String,required:true},
				rooms:[{
					type : mongoose.Schema.Types.ObjectId, ref: 'Room'
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
			landmark:{type:String, trim:true}
		},	

	associatedEmails:[
		{type:String,required:true,trim:true}
	],
	committeeMembers:[{
			designation:{type:String, required:true,trim:true},
			user_id:{type : mongoose.Schema.Types.ObjectId, ref: 'User',requred: true}
	}],


	create_date:{type:Date, default: Date.now}

},{collection: 'buildings'});

var Building = mongoose.model('Building',buildingSchema);

//Get All Buildings - should be restricted 
getBuildings = function(callback,limit){
	var searchOptions='';
	var selectionRange = {create_date:0,__v:0};
	Building.find(searchOptions,selectionRange,callback).limit(limit);
}


//Add Building
addBuilding = function(building, callback){
	console.log(building);
	Building.create(building, callback);
}


Building.getBuildings = getBuildings;
Building.addBuilding = addBuilding;
module.exports = Building ;