// Always import controller js page to index.html
appRoot.controller("studentsController", function($scope) {
  var ctrl = this;
  this.$onInit = function() {
    console.log("init fun...");
  };
  $scope.getRow = function(txt) {
    console.log("txt::", txt);
  };
});
