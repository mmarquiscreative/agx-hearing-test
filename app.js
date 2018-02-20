


var formApp = angular.module('formApp', ['ngAnimate', 'ui.router']);
// MODULE
formApp.value('answerStrings', ['Bean', 'Chalk', 'Goose', 'Kite', 'Moon', 'Page', 'Puff', 'Shout', 'Take']);

formApp.value('resultsObj', {
    quizAns: 0,
    toneAns: 0,
    speechAns: 0
});



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
