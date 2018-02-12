// MODULE
var formApp = angular.module('formApp', ['ngAnimate', 'ui.router'])

//CONFIG
.config(function($stateProvider, $urlRouterProvider){
    
    $stateProvider
    
    // route to show our basic form
    .state('stage', {
        url: '/stage',
        templateUrl: 'stage.html',
        controller: 'stageController'
    })
    
    // nested states
    // each of these will have their own view
    // url will be nested (/stage/intro)
    
    .state('stage.intro', {
        url: '/intro',
        templateUrl: 'stage-intro.html'
    })
    
    // url will be /stage/quiz
    
    .state('stage.quiz', {
        url: '/quiz',
        templateUrl: 'stage-quiz.html',
        controller: 'quizController'
    })
    
    // url will be /stage/volume
    
    .state('stage.volume', {
        url: '/volume',
        templateUrl: 'stage-volume.html'
    })
    
    // url will be /stage/toneTest
    
    .state('stage.toneTest', {
        url: '/toneTest',
        templateUrl: 'stage-toneTest.html'
    })
    
    // url will be /stage/speechTest
    
    .state('stage.speechTest', {
        url: '/speechTest',
        templateUrl: 'stage-speechTest.html'
    })
    
    // url will be /stage/results
    
    .state('stage.results', {
        url: '/results',
        templateUrl: 'stage-results.html'
    })
    
    // catch all route
    // send users to the form page
    
    $urlRouterProvider.otherwise('/stage/intro');
})

// CONTROLLERS
.controller('stageController', function ($scope) {
    
    // all form data will be stored in this object
    
    $scope.formData = {};
    
    // function to process the form
    
    
})
    
    .controller('quizController', function ($scope) {
        var quiz = this;
        $scope.curQuestion = 0;
        
        $scope.progClass = new Array("prog-current", "prog-bubble", "prog-bubble", "prog-bubble");
        
        
        $scope.nextQuestion = function(someBool){
           var someNum = $scope.curQuestion;
           console.log($scope.progClass);
           $scope.progClass[$scope.curQuestion] = "prog-bubble";
           console.log($scope.progClass); $scope.questions[someNum].answer = someBool
            
            console.log(someBool);
            
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
      });



