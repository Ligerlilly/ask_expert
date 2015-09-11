askExpert.factory('AskFactory',['$state','$http', function AskFactory($state, $http) {
  var factory = {};
  //factory.questions = [];
  factory.answers = [];
  // factory.addQuestion = function() {
  //   factory.questions.push({ question: factory.questionText, question_id: factory.questions.length + 1 });
  //   factory.questionText = null;
  //   $state.go('home');
  // };

  factory.questionData = {};
  factory.questionFormData = {};
  $http.get('/questions')
    .success(function(data) {
      factory.questionData = data;
      console.log(data);
    })
    .error(function(error) {
      console.log('Error: ' + error);
    });
  factory.createQuestion = function() {
    $http.post('/questions', factory.questionFormData)
    .success(function(data){
      factory.questionFormData = {};
      factory.questionData = data;
      console.log(data);
    })
    .error(function(error) {
      console.log('Error: ' + error);
    });
    $state.go('home');
  };

  factory.addAnswer = function() {
    factory.answers.push({ response: factory.answerText, question_id: factory.questionId });
    factory.answerText = null;
  };
  return factory;
}]);
