var appRoot = angular.module("appRoot", [ "ngRoute" ]);
appRoot.config(function($routeProvider, $locationProvider) {
	//  $locationProvider.html5Mode(true);
	$routeProvider./*when("/", {
		templateUrl : "index"
	}).*/when("/dashboard", {
		templateUrl : "item/dashboard"
	}).when("/student", {
		templateUrl : "item/student"
	}).when("/students", {
		templateUrl : "item/students"
	}).otherwise({
		redirectTo : "/dashboard"
	});
});
