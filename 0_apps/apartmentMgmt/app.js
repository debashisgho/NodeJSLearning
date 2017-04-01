var expressApp = require('express'); 
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


//expressApp points to function createApplication
var app = expressApp();

//folder which will serve public files
app.use(expressApp.static(__dirname+'/public'));

//connect to Database
var configDB = require('./config/db.js');
mongoose.connect(configDB.url);
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



