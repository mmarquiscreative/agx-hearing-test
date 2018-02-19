
// MODULE
var answerStrings = ['Bean', 'Chalk', 'Goose', 'Kite', 'Moon', 'Page', 'Puff', 'Shout', 'Take'];

var resultsObj = {
    quizAns: 0,
    toneAns: 0,
    speechAns: 0
}

var formApp = angular.module('formApp', ['ngAnimate', 'ui.router'])



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


