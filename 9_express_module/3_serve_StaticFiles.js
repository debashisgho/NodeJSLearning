var express = require('express'); //check \node_modules\express\lib\express.js
//expressApp points to function createApplication
var app = express();

//global variable __dirname points to the parent directory of the js files. 
//app.use helps to create an alias of the backend files 
//below code servers mycss files from the backend by alias css 
//url : http://localhost/css/mycss.css
app.use('/css',express.static(__dirname+'/mycss')); 
app.listen(80,function(){
	console.log('server started with express - listening at port 80');
	console.log('current server path is :'+__dirname);

})
app.get('/hello',function(request,response){
	console.log('requested path /hello');
 response.send('hello from Express');
});

