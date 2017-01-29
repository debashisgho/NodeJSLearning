var mongoose = require('mongoose');

//book schema
var bookSchema = mongoose.Schema({

	title:{
		type: String,
		required : true
	},

	genre:{
		type: String,
		required : true
	},

	description:{
		type: String,
		required : true
	},

	author:{
		type: String,
		required : true
	},

	publisher:{
		type: String,
		required : true
	},

	pages:{
		type: String,
		required : true
	},

	image_url:{
		type: String,
		required : true
	},

	buy_url:{
		type: String,
		required : true
	},

	create_date:{
		type:Date,
		default: Date.now
	}
});


var Book = mongoose.model('Book',bookSchema);

//Get Books
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

module.exports = Book ;