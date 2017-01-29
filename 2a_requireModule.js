var methods = {};
var output1 =1; //will not be visible to require since this is not exported
var output2 =2;  //this is visible to require since it is exported
this.output3=3;//usage of this makes it automatically exportable
methods.function1 = function(){
	console.info("in function 1");
}

methods.function2 = function(){
	console.info("in function 2");
}

var privateFunction = function(){
	console.log("I am private");
}

exports.data = methods;
exports.output2 = output2;