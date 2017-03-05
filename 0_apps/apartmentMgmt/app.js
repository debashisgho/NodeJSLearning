var expressApp = require('express'); 
var mongoose = require('mongoose');
var bodyParser = require('body-parser')


Room = require('./models/room');
User = require('./models/user');
Building = require('./models/building');
MasterData = require('./models/masterdata');
//expressApp points to function createApplication
var app = expressApp();

//folder which will serve public files
app.use(expressApp.static(__dirname+'/public'));

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

//get masterdata categories
app.get('/aptmgmt/api/masterdata/categories',function(request, response){
	MasterData.getCategories(function(err,categories){
		if(err){
			response.json(err);
			return;
		}
		response.json(categories);
	});
});


//get users
app.get('/aptmgmt/api/users',function(request, response){
	User.getUsers(function(err,users){
		if(err){
			response.json(err);
			return;
		}
		response.json(users);
	});
});

//get user by email
app.get('/aptmgmt/api/user/:_emailId',function(request, response){
	console.log('get user by email called for email id:'+request.params._emailId);
	
	User.getUserByEmail(request.params._emailId,function(err,user){

		if(err){
			console.log("app.js -getUserByEmail encountered error");
			response.json(err);
			return;
		}
		console.log("app.js -getUserByEmail db call success");
		response.json(user);
	});
	
});

//insert user
app.post('/aptmgmt/api/user',function(request, response){
	console.log('insert user called');
	var user = request.body;	
	console.log("print user objects");
	console.log(user);
	User.addUser(user, function(err,user){

		if(err){			
			//throw err;
			if(err.code==11000){
				response.json({status:409,message:"User is already registered"});				
			}
			else{
				//response.json({status:500,message:"Internal Server Error"});
				response.json(err);
			}
			return;
		}
		response.json({status:201, message:"User successfully registered"});
	});
});


//update user
app.put('/aptmgmt/api/user/:_emailId',function(request, response){
	var user = request.body;
	//create a userMod so that only selective field can be updated
	var userMod={};
	userMod.name = user.name;
	userMod.phone = user.phone;
	console.log("app.js - update user request for email id:"+request.params._emailId);
	console.log("input user :"+user.name.first);
	console.log("to be modified segment"+userMod.name.first);
	User.updateUser(request.params._emailId, userMod, function(err){

		if(err){
			response.json(err);
			return;
		}
		
		//returned user document from update query can not sent back in the reseponse as it has credentials field
		User.getUserByEmail(request.params._emailId,function(err,user){
				if(err){
					response.json(err);
					return;
				}
				response.json(user);
   			});
	});
});

/*

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

