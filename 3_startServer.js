var http = require('http');

var server = http.createServer(mainListener);

server.listen(1337,function(){   //it is not mandatory to have this function
	console.log('Server started');
});

function mainListener(request, response){
	console.log('Server received a request');
	console.log(request.url);  //use 
	response.writeHead(200,{'Content-Type':'text/plain','myCustomHeader':'Enjoy Node'}); 
	//show this in chrome network/Doc message exchanges
	response.end('Hello from server'+'you have requested'+request.url); 
	//if this is not called client keeps on waiting for the response
	//show how browser paths are getting printed on webpage 
}