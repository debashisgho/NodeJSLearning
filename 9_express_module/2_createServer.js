var expressApp = require('express'); //check \node_modules\express\lib\express.js
//expressApp points to function createApplication
var app = expressApp();


app.listen(80,function(){
	console.log('server started with express - listening at port 80');
})

//access from browser localhost:80/hello
app.get('/hello',function(request,response){
	console.log('requested path /hello');
 response.send('hello from Express');
});


//if user access any other url it does not work
