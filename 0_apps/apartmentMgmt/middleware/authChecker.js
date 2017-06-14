//authentication - check if loggedIn;
module.exports.checkAuth= function (request, response, next){
	console.log('inside middleware to check if Auth');
	if(!request.session.user){
		//response.redirect('/aptmgmt');
		//response.json({status:401, message:"Please login to continue"});
		next(); //DISABLE and ENABLE PREVIOUS LINE TO ENABLE AUTH CHECKING
	}
	else{
		next();
	}
}
