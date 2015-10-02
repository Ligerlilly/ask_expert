askExpert.controller('QuestionCtrl', ["$scope", 'AskFactory', "$http", '$stateParams', function($scope, AskFactory, $http, $stateParams){
  $scope.AskFactory = AskFactory;
  //console.log($stateParams.questionId);
  if ($stateParams.questionId){
    AskFactory.getQuestion($stateParams.questionId);
    AskFactory.findAnswers($stateParams.questionId);
  }

  $scope.questionData = AskFactory.questionData;
  $scope.answerData = AskFactory.answerData;
}]);
