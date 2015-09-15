askExpert.controller('QuestionCtrl', ["$scope", 'AskFactory', "$http", '$stateParams', function($scope, AskFactory, $http, $stateParams){
  $scope.AskFactory = AskFactory;
  //console.log($stateParams.questionId);
  AskFactory.getQuestion($stateParams.questionId);
  $scope.questionData = AskFactory.questionData;
}]);
