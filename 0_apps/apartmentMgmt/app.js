var expressApp = require('express'); 
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

Room = require('./models/room');
User = require('./models/user');
Building = require('./models/building');
//expressApp points to function createApplication
var app = expressApp();

//folder which will serve public files
//app.use(expressApp.static(__dirname+'/public'));

//use the bodyParser middleware to put the requested application/json in the body
app.use(bodyParser.json());

//start server
app.listen(80,function(){
	console.log('server started with express - listening at port 80');
})

//connect to Database
mongoose.connect('mongodb://localhost:27017/aptmgmt');
var db = mongoose.connection;

//acessing root should request users to use the /aptmgmt/api instead
app.get('/',function(request,response){	
 response.send('Welcome to Apartment Management App.' +'<br>'+'To get list of APIs, use path /aptmgmt/api');
});
app.get('/aptmgmt',function(request,response){	
 response.send('Welcome to Apartment Management App.' +'<br>'+'To get list of APIs, use path /aptmgmt/api');
});

/*
//get genres
app.get('/bookstore/api/genres',function(request, response){
	Genre.getGenres(function(err,genres){
		if(err){
			throw err;
		}
		response.json(genres);
	});
});

//insert genre
app.post('/bookstore/api/genres',function(request, response){
	var genre = request.body;
	Genre.addGenre(genre, function(err,genre){
		if(err){
			throw err;
		}
		response.json(genre);
	});
});

//update genre
app.put('/bookstore/api/genres/:_id',function(request, response){
	var genre = request.body;
	Genre.updateGenre(request.params._id, genre, function(err,genre){
		if(err){
			throw err;
		}
		response.json(genre);
	});
});

//delete genre
app.delete('/bookstore/api/genres/:_id',function(request, response){
	Genre.deleteGenre(request.params._id, function(err,result){
		if(err){
			throw err;
		}
		response.json(result);
	});
});

//get books
app.get('/bookstore/api/books',function(request, response){
	Book.getBooks(function(err,books){
		if(err){
			throw err;
		}
		response.json(books);
	})
});

//get book by id
app.get('/bookstore/api/books/:_id',function(request, response){
	Book.getBookById(request.params._id,function(err,book){
		if(err){
			throw err;
		}
		response.json(book);
	})
});

//insert book
app.post('/bookstore/api/books',function(request, response){
	var book = request.body;
	Book.addBook(book, function(err,book){
		if(err){
			response.json(err);
		}
		response.json(book);
	});
});

//update book
app.put('/bookstore/api/books/:_id',function(request, response){
	var book = request.body;
	Book.updateBook(request.params._id, book, function(err,book){
		if(err){
			throw err;
		}
		response.json(book);
	});
});


//delete genre
app.delete('/bookstore/api/books/:_id',function(request, response){
	Book.deleteBook(request.params._id, function(err,result){
		if(err){
			throw err;
		}
		response.json(result);
	});
});*/

