var askExpert = angular.module('askExpert', ['ui.router']);


askExpert.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '',
    templateUrl: 'partials/home.html',
    controller: 'MainCtrl',
  });
  $stateProvider.state('questions', {
    url: '/questions',
    templateUrl: 'partials/questionsCreate.html',
    controller: 'QuestionCtrl'
  });
  $stateProvider.state('questionShow', {
    url: '/questions/:questionId',
    templateUrl: 'partials/questionShow.html',
    controller: "QuestionCtrl"
  });
  $stateProvider.state('questionShow.edit', {
    url: '/edit',
    templateUrl: 'partials/questionEdit.html',
    controller: 'QuestionCtrl'
  });
  $stateProvider.state("questionShow.answer", {
    url: '/answer',
    templateUrl: 'partials/questionAnswer.html',
    controller: "AnswerCtrl"
  });
});
