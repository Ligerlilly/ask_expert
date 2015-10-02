askExpert.controller('AnswerCtrl', ['$scope', 'AskFactory', '$stateParams', function($scope, AskFactory, $stateParams) {
  $scope.AskFactory = AskFactory;
  $scope.questionData = AskFactory.questionData;
  AskFactory.hide = false;
  if($stateParams.answerId) {
    for (var i = 0; i < AskFactory.answerData.length; i++) {
      if (AskFactory.answerData[i].id === parseInt($stateParams.answerId)) {
        AskFactory.answer = AskFactory.answerData[i]
      }
    }
  }

}]);
