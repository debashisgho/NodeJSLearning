//var authService;
module.exports.redirectIfNotLoggedIn= function (request, response, next){
	console.log('inside middleware to check if loggedIn');
	if(!request.session.user){
		response.redirect('/aptmgmt');
	}
	else{
		next();
	}
}
//module.exports = authService;