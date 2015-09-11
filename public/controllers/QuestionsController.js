askExpert.controller('QuestionCtrl', ["$scope", 'AskFactory', "$http", function($scope, AskFactory, $http){
  $scope.questionData = AskFactory.questionData;
  $scope.AskFactory = AskFactory;

}]);
