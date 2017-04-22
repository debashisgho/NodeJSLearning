var myapp = angular.module('myapp', []);

myApp.service('SessionService', function($http,$location) {
    this.getLogInDetails = function () { 
    	console.log('Auth service called');
        return $http.get('/aptmgmt/api/user/session/isLoggedIn')
        .then(function(response){
        	return response.data.user;
        });      
    };

    this.redirectIfNotLoggedIn = function(){
    	var logOnDetailsPromise = this.getLogInDetails();
		logOnDetailsPromise
		.then(function(data){	
		var user= data;	
		if(angular.isUndefined(user) || user==null){
			console.log('user not found');
			$location.url("/aptmgmt");	

		}
		else{
			console.log('user found');
			
		}
	});
    }



});