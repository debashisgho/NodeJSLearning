//authentication - check if loggedIn;
module.exports.checkAuth= function (request, response, next){
	console.log('inside middleware to check if Auth');
	if(!request.session.user){
		//response.redirect('/aptmgmt');
		response.json({status:401, message:"Please login to continue"});
	}
	else{
		next();
	}
}
