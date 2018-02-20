(function(){
    var answerStrings = ['Bean', 'Chalk', 'Goose', 'Kite', 'Moon', 'Page', 'Puff', 'Shout', 'Take'];


angular.module('OHTApp', [])
    
.controller('HearingTestCtrl', function(){
    var test = this;

    test.stage = {
        intro: false,
        quiz: false,
        volume: false,
        tone: false,
        speech: true,
        results: false
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
            console.log('time for the next round')
        }
        
    }
    
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
           
     }    
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
})();