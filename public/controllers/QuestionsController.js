askExpert.controller('QuestionCtrl', ["$scope", 'AskFactory', "$http", function($scope, AskFactory, $http){
  $scope.questions = AskFactory.questions;
  $scope.AskFactory = AskFactory;
  $scope.questionData = {};
  $scope.formData = {};
  $scope.createQuestion = function() {
    $http.post('/questions', $scope.formData)
      .success(function(data){
        $scope.formData = {};
        $scope.questionData = data;
        console.log(data);
      })
      .error(function(error) {
        console.log('Error: ' + error);
      });
  };
}]);
