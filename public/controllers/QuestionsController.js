askExpert.controller('QuestionCtrl', ["$scope", 'AskFactory', "$http", function($scope, AskFactory, $http){
  $scope.questions = AskFactory.questions;
  $scope.AskFactory = AskFactory;
  
}]);
