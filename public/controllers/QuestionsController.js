askExpert.controller('QuestionCtrl', ["$scope", 'AskFactory', function($scope, AskFactory){
  $scope.questions = AskFactory.questions;
  $scope.AskFactory = AskFactory;
}]);
