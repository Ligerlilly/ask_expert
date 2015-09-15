var askExpert = angular.module('askExpert', ['ui.router']);


askExpert.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '',
    templateUrl: 'partials/home.html',
    controller: 'MainCtrl',
  });
  $stateProvider.state('questions', {
    url: '/questions',
    templateUrl: 'partials/questions.html',
    controller: 'QuestionCtrl'
  });
  $stateProvider.state('questionShow', {
    url: '/questions/:questionId',
    templateUrl: 'partials/questionShow.html',
    controller: "QuestionCtrl"
  });
  $stateProvider.state('questionShow.edit', {
    url: '/qestions/:question_id/edit',
    templateUrl: 'partials/questionEdit.html',
    controller: 'QuestionCtrl'
  });
});
