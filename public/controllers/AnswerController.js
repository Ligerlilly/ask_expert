askExpert.controller('AnswerCtrl', ['$scope', 'AskFactory', function($scope, AskFactory) {
  $scope.AskFactory = AskFactory;
  $scope.questionData = AskFactory.questionData;
  AskFactory.hide = false;

}]);
