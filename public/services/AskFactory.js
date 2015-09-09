askExpert.factory('AskFactory',['$state', function AskFactory($state) {
  var factory = {};
  factory.questions = [];
  factory.answers = [];
  factory.addQuestion = function() {
    factory.questions.push({ question: factory.questionText, question_id: factory.questions.length + 1 });
    factory.questionText = null;
    $state.go('home');
  };

  factory.addAnswer = function() {
    factory.answers.push({ response: factory.answerText, question_id: factory.questionId });
    factory.answerText = null;
  };
  return factory;
}]);
