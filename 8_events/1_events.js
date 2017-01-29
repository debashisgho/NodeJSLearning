console.log("==========================Events demo ==============================");

var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('MyCustomEvent1', function(arg1,arg2) {
	console.log("event type 1 received-"+arg1+' '+arg2);	
});

eventEmitter.on('MyCustomEvent2', function(arg1,arg2) {
	console.log("event type 2 received-"+arg1+' '+arg2);	
});

eventEmitter.emit('MyCustomEvent1','Hello','There !') //emit type1

 console.log('waiting 2 seconds');
setTimeout(function(){

 eventEmitter.emit('MyCustomEvent2','Hello1','There1 !') //emit type2
 eventEmitter.emit('MyCustomEvent1','Hello-2','There-2 !') //emit type 1

}, 2000)

