
    angular.module('formApp').controller('quizController', ['$scope', 'resultsObj', function ($scope, resultsObj) {
        var quiz = this;
        $scope.curQuestion = 0;
        
        $scope.progClass = new Array("prog-current", "prog-bubble", "prog-bubble", "prog-bubble");
        
        
        $scope.nextQuestion = function(someBool){
           var someNum = $scope.curQuestion;
           console.log($scope.progClass);
           $scope.progClass[$scope.curQuestion] = "prog-bubble";
           console.log($scope.progClass); $scope.questions[someNum].answer = someBool
            
            if(someBool){
                resultsObj.quizAns++;
            };
            
            $scope.curQuestion++;
            
            $scope.progClass[$scope.curQuestion] = "prog-current";
        }
      $scope.questions = [
        {question: 'Do you have difficulty understanding people with higher speaking voices?',
        answer: ""},
        {question: 'Do you have a hard time understanding people over the phone?',
        answer: ""},
        {question: 'Do you have trouble keeping up with conversations in busy restaurants?',
        answer: ""},
        {question: 'Are you often told that you set the television volume very loud?',
        answer: ""}
      ]
      }])