appRoot.service("studentService", function($http){

	// PUT $http request to backend.
	this.update= function(url, data, successFn, errorFn){
		$http.put(url, data).then(function(response){
			if(successFn)
				successFn(response);
		}, function(response){
			if(errorFn)
				errorFn(response);
		});
	};
	
	// POST $http request to backend. 
	this.create= function(url, data, successFn, errorFn){
		$http.post(url, data).then(function(response){
			if(successFn)
				successFn(response);
		}, function(response){
			if(errorFn)
				errorFn(response);
		});
	}
	
	this.getById= function(url, successFn, errorFn){
		$http.get(url).then(function(response){
			if(successFn)
				successFn(response);
		}, function(response){
			if(errorFn)
				errorFn(response);
		});
	};
	
});