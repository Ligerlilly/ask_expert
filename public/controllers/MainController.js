askExpert.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/questions')
    .success(function(data) {
      $scope.questionData = data;
      console.log(data);
    })
    .error(function(error) {
      console.log('Error: ' + error);
    });

}]);
