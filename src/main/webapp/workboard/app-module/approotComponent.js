var appRoot = angular.module("appRoot", [ "ngRoute" ]);
appRoot.config(function($routeProvider, $locationProvider) {
	//  $locationProvider.html5Mode(true);
	$routeProvider.when("/dashboard", {
		templateUrl : "workboard/dashboard-module/dashboardTemplate.html"
	}).when("/student", {
		templateUrl : "workboard/student-module/studentTemplate.html"
	}).when("/student/:id", {
		templateUrl : "workboard/student-module/studentEditTemplate.html"
	}).when("/students", {
		templateUrl : "workboard/students-module/studentsTemplate.html"
	}).otherwise({
		redirectTo : "/dashboard"
	});
});
