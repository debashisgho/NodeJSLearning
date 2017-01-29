function mainFunctions() {

	var fullName;
	return {

		constructFullName: function(fName, lName) {
			fullName = fName + ' ' + lName;
		},

		printName: function() {
			console.log('Hello ! ' + fullName);
		}


	}

}

module.exports = mainFunctions;