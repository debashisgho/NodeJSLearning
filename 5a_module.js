//with every javascript file node automatically creates a module.export object
//refer to 2a - the exports can be re-written in the following manner. 


var methods = module.exports = {};

var output1 = 1; //will not be visible to require since this is not exported
var output2 = 2; //this is visible to require since it is exported
this.output3 = 3; //usage of this makes it automatically exportable
methods.function1 = function() {
	console.info("in function 1");
}

module.exports.function2 = function() {
	console.info("in function 2");
}

var privateFunction = function() {
	console.log("I am private");
}

//The other way to define is 

//The below overwrites everything 
module.exports = {
	function3: function() {

	}
}