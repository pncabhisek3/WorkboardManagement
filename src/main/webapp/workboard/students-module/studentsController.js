// Always import controller js page to index.html
appRoot.controller("studentsController", function($scope, studentsService) {
	var ctrl = this;
	this.$onInit = function() {
		console.log("init fun...");
		//TODO: Get context root from separate jsp page..
		studentsService.getAll(
				"http://localhost:8080/workboard_mgmt/api/students", function(
						resp) {
					console.log("GET success:", resp);
					$scope.students = resp.data.data;
				}, function(resp) {
					console.log("GET unsuccess:", resp);
				});
	};

	$scope.editStudent = function(index) {
		window.location.href="http://localhost:8080/workboard_mgmt/#!/student/"+$scope.students[index].studentId;
	};
	
	$scope.deleteStudent= function(index){
		studentsService.delete("http://localhost:8080/workboard_mgmt/api/students", $scope.students[index], function(response){
			console.log("Delete Success");
		}, function(response){
			console.log("Delete uccess");
		});
	}

});
