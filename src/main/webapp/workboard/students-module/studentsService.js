appRoot.service("studentsService", function($http) {
	this.getAll = function(url, successFn, errorFn) {
		$http.get(url).then(function(response) {
			if (successFn)
				successFn(response);
		}, function(response) {
			if (errorFn)
				errorFn(response);
		});
	};
	
	this.deleteData= function(url, data, headers, successFn, errorFn, methodType){
		$http({
		    method: 'DELETE' || methodType,
		    url: url,
		    data: data,
		    headers: headers
		})
		.then(function(response) {
		   if(successFn)
			   successFn(response);
		}, function(response) {
			if(errorFn)
				   successFn(response);
		});
	};
	
	this.delete= function(url, data, successFn, errorFn){
		$http.delete(url, {data: data}).then(function(response) {
			   if(successFn)
				   successFn(response);
			}, function(response) {
				if(errorFn)
					   successFn(response);
			});
	}
	
});