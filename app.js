// // New Angular Module
var formApp = angular.module('formApp', ['ngAnimate', 'ui.router']);

//// Global VALUES ////

// Speech Test Words/options
formApp.value('answerStrings', ['Bean', 'Chalk', 'Goose', 'Kite', 'Moon', 'Page', 'Puff', 'Shout', 'Take']);

// results object to save individual sections wrong answers to
formApp.value('resultsObj', {
	cta_text: '',
	cta_url: '',
	bgNoiseIncrease: 0.05,
    globalVolume: 0.2,
    quizScore: 0,
    quizPerfectScore: 4,
    quizAns: [],
    quizCompleted: false,
    toneScore: 0,
    tonePerfectScore: 5,
    toneAns: [],
    toneCompleted: false,
    speechScore: 0,
    speechPerfectScore: 12,
    speechAns: [],
    speechCompleted: false,
    testComplete: function(someString){
        return this[(someString + 'Completed')];
        },
    restartTest: function(){
        
        console.log('running restart test');
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
        
        // 4. Stop audio
        var idArray = ['#volumeAudio', '#toneAudio', '#bgNoise'];
		
		idArray.forEach(function(cur){
			console.log(cur);
			console.log(document.querySelector(cur));
			if(document.querySelector(cur) !== null){
				document.querySelector(cur).autoplay = false;
        document.querySelector(cur).currentTime = 0;
		document.querySelector(cur).loop = false;
		document.querySelector(cur).pause();}
			else {
				console.log(cur + ' query came back as null');
			}
		});
		
        
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
