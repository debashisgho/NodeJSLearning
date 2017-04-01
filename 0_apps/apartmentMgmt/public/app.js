var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider,$locationProvider){
	$routeProvider
	.when('/aptmgmt', {
		controller:'HomeController',
		templateUrl: '/views/home.html'
	})
	.when('/aptmgmt/login', {
		controller:'LoginController',
		templateUrl: '/views/login.html'
	})
	.when('/aptmgmt/register', {
		controller:'RegisterController',
		templateUrl: '/views/register.html'
	})
	.when('/masterData', {
		controller:'MasterDataController',
		templateUrl: '/views/masterdata.html'
	})

	.when('/masterdata/user', {
		controller:'MasterDataController',
		templateUrl: '/views/user.html'
	})

	.when('/earning', {
		controller:'EarningController',
		templateUrl: '/views/earning.html'
	})

	
	$locationProvider.html5Mode(true);

});