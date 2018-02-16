
// MODULE
var answerStrings = ['Bean', 'Chalk', 'Goose', 'Kite', 'Moon', 'Page', 'Puff', 'Shout', 'Take'];

var resultsObj = {
    speechAns: 0
}

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
        templateUrl: 'stage-toneTest.html',
        controller: 'toneTestController'
    })
    
    // url will be /stage/speechTest
    
    .state('stage.speechTest', {
        url: '/speechTest',
        templateUrl: 'stage-speechTest.html',
        controller: 'SpeechTest'
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
      })

.controller('toneTestController', function ($scope) {
        var tone = this;
        $scope.curTone = 0;
        
        $scope.loopBool = new Array("true", "false", "false", "false", "false");
    
        $scope.toneClass = new Array("freqBlock ", "freqBlock", "freqBlock", "freqBlock", "freqBlock");
        
        $scope.toneAns = [];
        
        $scope.nextTone = function(someBool){
           $scope.loopBool[$scope.curTone] = "false";
            
            $scope.toneAns[$scope.curTone] = someBool;
            console.log($scope.toneAns[$scope.curTone]);
                       
            $scope.curTone++;
            
            $scope.loopBool[$scope.curTone] = "true";
        }
        
      })

.controller('SpeechTest', function($scope){
    
    ///////////////////////////////////
    //////////// Variables ////////////
    
    var speech = this;
    speech.ansDisabled = true;
    speech.startTestDisabled = false;
    speech.curRound = 0;
    speech.answerInput = [];
    speech.answerKey = ['Bean', 'Chalk', 'Goose'];
    speech.answerStrings = answerStrings;
    speech.wrongAns = [];
    
    speech.testFunction = function(){
        console.log('Test function run');
    };
    
    
    ///////////////////////////////////
    //////////// Functions ////////////
    
    speech.addAnswer = function(someAns){
        if(speech.answerInput.length < 2){
            speech.answerInput.push(someAns);
        } else {
            speech.answerInput.push(someAns);
            evalAnswers();
            speech.answerInput = [];
            speech.roundAudio();
        };
    
    }
    
    function resetAns(){
        speech.ansDisabled = false;
    }
    
    // Compare input answers vs answer key
    function evalAnswers(){
        for(i = 0; i < 4; i++){
            if(speech.answerInput[i] !== speech.answerKey[i]){
                speech.wrongAns.push(speech.answerKey[i]);
            };
        };
        console.log(speech.wrongAns);
    };
    
    speech.roundAudio = function(){
        if(speech.curRound < 4){
            speech.curRound++;
            speech.ansDisabled = true;
            speech.startTestDisabled = true;
            generateRoundAns();
            playRoundAudio();
        } else { 
            speech.ansDisabled = true;
            console.log('time for the next round');
            resultsObj.speechAns = speech.wrongAns.length;
            
        }
    };
    
    function generateRoundAns(){
        var num1, num2, num3;
        speech.answerKey = [];
        
        
        // 1. Calculate numbers in groups of 3
        num1 = Math.round(Math.random()*8);
        num2 = Math.round(Math.random()*8);
        num3 = Math.round(Math.random()*8);
        
        // 2. Prevent duplicates in groups
        while (num1 === num2 || num2 === num3 || num1 === num3){
            num2 = Math.round(Math.random()*8);
            num3 = Math.round(Math.random()*8);
        };
        speech.answerKey.push(speech.answerStrings[num1]);
        speech.answerKey.push(speech.answerStrings[num2]);
        speech.answerKey.push(speech.answerStrings[num3]);
     };
  
    function playRoundAudio(){
       var tempAudio, delayTime;
        tempAudio = [];
        delayTime = 1200;
        for(i=0; i < 3; i++){
            
             tempAudio.push(new Audio('/sounds/Speech_' +  speech.answerKey[i] + '.mp3'));
        };
        
            tempAudio[0].play();
            setTimeout(function(){
                tempAudio[1].play();
                setTimeout(function(){
                    tempAudio[2].play();
                    setTimeout(function(){
                        $scope.$apply(resetAns());
                        console.log(speech.ansDisabled);
                        }, delayTime);
                    }, delayTime)
                }, delayTime);
           
     };  
    
})

/*
.directive('speechTest', function(){
    
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
        element.bind("click", function(){
            var tempAudio = new Audio('/sounds/Speech_' + element[0].textContent + '.mp3');
            tempAudio.play();
            console.log(element[0].textContent);
            })
       
        }
    }
    
})
*/

.directive('speechTestBtn', function(){
    
    return {
        restrict: 'E',
        template: '<button ng-repeat="number in speech.answerStrings"  ng-disabled="speech.ansDisabled" ng-click="speech.addAnswer(number)" class="speechBtn" speechtest >{{number}}</button>'
    }
})

.controller('resultsController', function(){
    var results = this;
    
    results.wrongAns = resultsObj;
    
    
    
})

console.log(formApp.SpeechTest.wrongAns);