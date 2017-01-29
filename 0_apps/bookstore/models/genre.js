var mongoose = require('mongoose');

//genre schema
var genreSchema = mongoose.Schema({

	name:{
		type: String,
		required : true
	},

	create_date:{
		type:Date,
		default: Date.now
	}
});



var Genre = mongoose.model('Genre',genreSchema);

//Get Genres
getGenres = function(callback,limit){
	Genre.find(callback).limit(limit);
}

//Add Genere
addGenre = function(genre, callback){
	Genre.create(genre, callback);
}

//Update Genere
updateGenre = function(id, genre,callback){
	var query = {"_id":id};
	Genre.findOneAndUpdate(query, genre, {new:true}, callback);
}


//delete Genere
deleteGenre = function(id, callback){
	var query = {"_id":id};
	Genre.remove(query,callback);
}


Genre.getGenres = getGenres;
Genre.addGenre = addGenre;
Genre.updateGenre = updateGenre;
Genre.deleteGenre = deleteGenre;

module.exports = Genre ;