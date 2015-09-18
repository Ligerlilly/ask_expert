askExpert.controller('MainCtrl', ['$scope', '$http', 'AskFactory', function($scope, $http, AskFactory) {
  $http.get('/questions')
    .success(function(data) {
      //$scope.questionData = data;
      AskFactory.questionData = data;
      console.log(data);
    })
    .error(function(error) {
      console.log('Error: ' + error);
    });
    AskFactory.hide = true;

    $scope.AskFactory = AskFactory;
    $scope.questionData = AskFactory.questionData;

}]);
