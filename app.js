// New Angular Module
var formApp = angular.module('formApp', ['ngAnimate', 'ui.router']);

//// Global VALUES ////

// Speech Test Words/options
formApp.value('answerStrings', ['Bean', 'Chalk', 'Goose', 'Kite', 'Moon', 'Page', 'Puff', 'Shout', 'Take']);

// results object to save individual sections wrong answers to
formApp.value('resultsObj', {
    quizAns: 0,
    quizCompleted: false,
    toneAns: 0,
    toneCompleted: false,
    speechAns: 0,
    speechCompleted: false,
    testComplete: function(someString){
        return this[(someString + 'Completed')];
        }
    });

// Speech Test Words/options
formApp.value('activeClass', {
quiz: 'stepNavItem',
volume: '',
tone: '',
speech: '',
results: '',
reload: function(){
    return this;
}
});