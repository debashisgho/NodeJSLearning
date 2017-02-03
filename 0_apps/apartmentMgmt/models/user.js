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

/*
getBooks = function(callback,limit){
	Book.find(callback).limit(limit);
}


//Get book by id

getBookById = function(id, callback){
	Book.findById(id, callback);
}

//Add Book
addBook = function(book, callback){
	Book.create(book, callback);
}

//Update Book

updateBook = function(id, book,callback){
	var query = {"_id":id};
	Book.findOneAndUpdate(query, book, {new:true}, callback);
}

//delete Book
deleteBook = function(id, callback){
	var query = {"_id":id};
	Book.remove(query,callback);
}

Book.getBooks = getBooks;
Book.getBookById = getBookById;
Book.addBook = addBook;
Book.updateBook = updateBook;
Book.deleteBook = deleteBook;
*//
module.exports = User ;