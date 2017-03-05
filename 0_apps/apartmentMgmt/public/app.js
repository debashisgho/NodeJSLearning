var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider,$locationProvider){
	$routeProvider
	.when('/', {
		controller:'HomeController',
		templateUrl: '/views/home.html'
	})
	.when('/masterData', {
		controller:'MasterDataController',
		templateUrl: '/views/masterdata.html'
	})

	.when('/earning', {
		controller:'EarningController',
		templateUrl: '/views/earning.html'
	})
	
	$locationProvider.html5Mode(true);

});