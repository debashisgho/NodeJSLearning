var fs = require('fs');

var fileData = "Hello there !";

console.log('sync file write start');
fs.writeFileSync('./syncFile.text', fileData, 'utf8');

console.log('sync file write end');

