askExpert.factory('AskFactory',['$state','$http', function AskFactory($state, $http) {
  var factory = {};
  //factory.questions = [];
  //factory.answers = [];
  // factory.addQuestion = function() {
  //   factory.questions.push({ question: factory.questionText, question_id: factory.questions.length + 1 });
  //   factory.questionText = null;
  //   $state.go('home');
  // };
  //ng-init='AskFactory.getQuestions()'

  factory.questionData = {};
  factory.questionFormData = {};
  factory.hide = true;
  factory.answerData = {};
  factory.answer = {};
  factory.findAnswers = function(questionId) {
    found_answers = [];
    factory.answerData.forEach(function(answer) {
      if (answer.query_id === parseInt(questionId)) {
        found_answers.push(answer);

      }
      factory.answerData = found_answers;
    });
  };
  factory.createAnswer = function(questionId) {
    factory.answerFormData.question_id = questionId;
    $http.post('/answers', factory.answerFormData)
    .success(function(data) {
      factory.answerFormData = {};
      factory.answerData = data;
      console.log(data);
      $state.go('questionShow', {questionId: questionId});
    })
    .error(function(data) {
      console.log('Error' + data);
    });
  };

  factory.deleteAnswer = function(questionId, answerId) {
    $http.delete('/questions/' + questionId + '/answers/' + answerId)
      .success(function(data) {
          console.log(data);
          factory.answerData = data;
          $state.go('questionShow', {questionId: questionId});
      })
      .error(function(data) {
        console.log("Error" + data);
      });
  };

  factory.updateAnswer = function(answer, questionId) {
    $http.put('/questions/' + questionId + '/answers/' + answer.id, answer)
    .success(function(data) {
      console.log(data);
      factory.answerData = data;
      $state.go('questionShow', {questionId: questionId});
    })
    .error(function(data) {
      console.log('Error:' + data);
    });
  };



  factory.createQuestion = function() {
    $http.post('/questions', factory.questionFormData)
    .success(function(data){
      factory.questionFormData = {};
      factory.questionData = data;
      console.log(data);


      $state.go('questionShow',{"questionId": data[data.length-1].id});
    })
    .error(function(error) {
      console.log('Error: ' + error);
    });
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
    $http.get('/questions/' + questionId)
      .success(function(data) {
        factory.questionData = data;
        console.log(data);

      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  factory.updateQuestion = function(questionData) {
    $http.put('/questions/' + questionData.id, questionData)
    .success(function(data) {
      factory.questionData = data;
      console.log(data);
      $state.go('questionShow', {questionId: questionData.id});
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
