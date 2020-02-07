appRoot.controller("studentController", function($scope, $rootScope,
		studentService) {

	this.$onInit = function() {
		console.log("Student Template on init...");
	}

	this.$postLink = function() {
		console.log("Student Template on render...");
	}

	$scope.createStudent = function() {
		console.log("Student to save:", $scope.student);
		if ($scope.student)
			studentService.create(
					"http://localhost:8080/workboard_mgmt/api/student",
					$scope.student, function(response) {
						console.log("Post success:", response);
					}, function(response) {
						console.log("Post unsuccess:", response);
					});
	};

});