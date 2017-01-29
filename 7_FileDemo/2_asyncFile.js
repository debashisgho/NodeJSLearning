var fs = require('fs');

var fileData = "Hello there !";

console.log('async file write start');
fs.writeFile('./asyncFile.text', fileData, 'utf8', function(error){
	if(error){
		console.log("async file write - error occurred");
		throw error;
	}
console.log('async file write - just finished writiting');
});


console.log('async file write end');

