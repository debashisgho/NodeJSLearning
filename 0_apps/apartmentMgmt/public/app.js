var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider,$locationProvider){
	$routeProvider
	.when('/aptmgmt', {
		controller:'HomeController',
		templateUrl: '/views/home_NoLogIn.html'
	})
	.when('/aptmgmt/home', { //this route is used by logged in user. it is automatically redicted after log in
		controller:'HomeController',
		templateUrl: '/views/home_LoggedIn.html'
	})
	.when('/aptmgmt/login', {
		controller:'LoginController',
		templateUrl: '/views/login.html'
	})
	.when('/aptmgmt/logout', {
		controller:'LogoutController'
	})
	.when('/aptmgmt/register', {
		controller:'RegisterController',
		templateUrl: '/views/register.html'
	})
	.when('/aptmgmt/masterdata', {
		controller:'MasterDataController',
		templateUrl: '/views/masterdata.html'
	})

	.when('/aptmgmt/masterdata/user', {
		controller:'MasterDataController',
		templateUrl: '/views/user.html'
	})

	.when('/aptmgmt/earning', {
		controller:'EarningController',
		templateUrl: '/views/earning.html'
	})

	
	$locationProvider.html5Mode(true);

});