var myApp = angular.module('myApp');

myApp.service('InitSvcs', function() {
    this.getLogInDetails = function () {
        console.log("isLoggedIn from session controller -- START");
		$http.get('/aptmgmt/api/user/session/isLoggedIn').then(function(response){
			//window.location.href='/aptmgmt/login';
			//console.log(response);
			return response.data.user;
			
		});
    }
});