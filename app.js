// New Angular Module
var formApp = angular.module('formApp', ['ngAnimate', 'ui.router']);

//// Global VALUES ////

// Speech Test Words/options
formApp.value('answerStrings', ['Bean', 'Chalk', 'Goose', 'Kite', 'Moon', 'Page', 'Puff', 'Shout', 'Take']);

// results object to save individual sections wrong answers to
formApp.value('resultsObj', {
    quizScore: 0,
    quizAns: [],
    quizCompleted: false,
    toneScore: 0,
    toneAns: [],
    toneCompleted: false,
    speechScore: 0,
    speechAns: [],
    speechCompleted: false,
    testComplete: function(someString){
        return this[(someString + 'Completed')];
        },
    restartTest: function(){
        // 1. reset Quiz
        
        this.quizScore = 0;
        this.quizAns = [];
        this.quizCompleted = false;
        
        // 2. reset Tone
        
        this.toneScore = 0;
        this.toneAns = [];
        this.toneCompleted = false;
        
        // 3. reset speech
        
        this.speechScore = 0;
        this.speechAns = [];
        this.speechCompleted = false;
        
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