appRoot.controller("studentEditController", function($scope, $rootScope,
		$routeParams, studentService) {
	this.$onInit = function() {
		$(".jumbotron-student").hide();
		$(".student-wrapper").show();
		console.log("Student Edit Template on init...",$routeParams.id);
		var id = $routeParams.id;
		if (id)
			studentService.getById(
					"http://localhost:8080/workboard_mgmt/api/student/" + id,
					function(response) {
						console.log("Get success:", response);
						$scope.student= response.data.data;
						if(!$scope.student || Object.keys($scope.student).length == 0){
							$(".jumbotron-student").show();
							$(".student-wrapper").hide();
						}
						
					}, function(response) {
						console.log("Get unsuccess:", response);
					});
	}

	this.$postLink = function() {
		console.log("Student Edit Template on render...");
	}

	$scope.updateStudent = function() {
		console.log("Student to save:", $scope.student);
		if ($scope.student)
			studentService.update(
					"http://localhost:8080/workboard_mgmt/api/student",
					$scope.student, function(response) {
						console.log("Post success:", response);
					}, function(response) {
						console.log("Post unsuccess:", response);
					});
	};

});