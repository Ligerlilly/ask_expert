askExpert.factory('AskFactory',['$state','$http', function AskFactory($state, $http) {
  var factory = {};
  //factory.questions = [];
  factory.answers = [];
  // factory.addQuestion = function() {
  //   factory.questions.push({ question: factory.questionText, question_id: factory.questions.length + 1 });
  //   factory.questionText = null;
  //   $state.go('home');
  // };
  //ng-init='AskFactory.getQuestions()'

  factory.questionData = {};
  factory.questionFormData = {};

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
  factory.deleteQuestion = function(questionId) {
    $http.delete('/questions/' + questionId)
      .success(function(data) {
        factory.questionData = data;
        console.log(data);
        $state.go('home');
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  factory.getQuestion = function(questionId) {
    console.log('test');
    $http.get('/questions/' + questionId)
      .success(function(data) {
        factory.questionData = data;
        console.log(data);
        //$state.go('questionShow');
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  factory.updateQuestion = function(questionId) {
    $http.put('/question/' + questionId)
    .success(function(data) {
      factory.questionData = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error:' + data);
    });
  };

  factory.addAnswer = function() {
    factory.answers.push({ response: factory.answerText, question_id: factory.questionId });
    factory.answerText = null;
  };
  return factory;
}]);
