appRoot.service("studentsService", function($http) {
	this.getAll = function(url, successFn, errorFn) {
		$http.get(url).then(function(response) {
			if (successFn)
				successFn(response);
		}, function(response) {
			if (errorFn)
				errorFn(response);
		});
	}
});