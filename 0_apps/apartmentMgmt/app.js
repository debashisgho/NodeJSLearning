var expressApp = require('express'); 
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
//var cookieParser = require('cookie-parser');


//expressApp points to function createApplication
var app = expressApp();

//folder which will serve public files
app.use(expressApp.static(__dirname+'/public'));

//connect to Database
mongoose.connect('mongodb://localhost:27017/aptmgmt');
var db = mongoose.connection;

//set up the middleware 


//use the bodyParser middleware to put the requested application/json in the body
app.use(bodyParser.json());


//load the routes
app.use(require('./routers/router'));


//start server
app.listen(80,function(){
	console.log('server started with express - listening at port 80');
})



