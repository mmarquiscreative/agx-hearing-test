// // New Angular Module
var formApp = angular.module('formApp', ['ngAnimate', 'ui.router']);

//// Global VALUES ////

// Speech Test Words/options
formApp.value('answerStrings', ['Moon', 
               'Puff', 
               'Bean', 
               'Shout', 
               'Chalk', 
               'Kite', 
               'Page', 
               'Goose', 
               'Take'
              ]);

var loadAudio = {
    volCalib: 
            new Audio('/wp-content/plugins/agx-hearing-test/sounds/VolCalib_OHQ_static.mp3'),
        toneTest_2000: 
            new Audio('/wp-content/plugins/agx-hearing-test/sounds/ToneTest_OHQ_2000_Hz.mp3'),
        toneTest_4000: 
            new Audio('/wp-content/plugins/agx-hearing-test/sounds/ToneTest_OHQ_4000_Hz.mp3'),
        toneTest_6000: 
            new Audio('/wp-content/plugins/agx-hearing-test/sounds/ToneTest_OHQ_6000_Hz.mp3'),
        toneTest_8000: 
            new Audio('/wp-content/plugins/agx-hearing-test/sounds/ToneTest_OHQ_8000_Hz.mp3'),
        toneTest_10000: 
            new Audio('/wp-content/plugins/agx-hearing-test/sounds/ToneTest_OHQ_10000_Hz.mp3'),
        speechTest_Noise_Lvl1:
            new Audio('/wp-content/plugins/agx-hearing-test/sounds/SpeechTest_OHQ_Noise_Lvl1.mp3'),
        speechTest_Noise_Lvl2:
            new Audio('/wp-content/plugins/agx-hearing-test/sounds/SpeechTest_OHQ_Noise_Lvl2.mp3'),
        speechTest_Noise_Lvl3:
            new Audio('/wp-content/plugins/agx-hearing-test/sounds/SpeechTest_OHQ_Noise_Lvl3.mp3'),
        speechTest_Noise_Lvl4:
            new Audio('/wp-content/plugins/agx-hearing-test/sounds/SpeechTest_OHQ_Noise_Lvl4.mp3'),
        speechTest_Word_Bean:
            new Audio('/wp-content/plugins/agx-hearing-test/sounds/SpeechTest_OHQ_Word_Bean.mp3'),
        speechTest_Word_Chalk:
            new Audio('/wp-content/plugins/agx-hearing-test/sounds/SpeechTest_OHQ_Word_Chalk.mp3'),
        speechTest_Word_Goose:
            new Audio('/wp-content/plugins/agx-hearing-test/sounds/SpeechTest_OHQ_Word_Goose.mp3'),
        speechTest_Word_Kite:
            new Audio('/wp-content/plugins/agx-hearing-test/sounds/SpeechTest_OHQ_Word_Kite.mp3'),
        speechTest_Word_Moon:
            new Audio('/wp-content/plugins/agx-hearing-test/sounds/SpeechTest_OHQ_Word_Moon.mp3'),
        speechTest_Word_Page:
            new Audio('/wp-content/plugins/agx-hearing-test/sounds/SpeechTest_OHQ_Word_Page.mp3'),
        speechTest_Word_Puff:
            new Audio('/wp-content/plugins/agx-hearing-test/sounds/SpeechTest_OHQ_Word_Puff.mp3'),
        speechTest_Word_Shout:
            new Audio('/wp-content/plugins/agx-hearing-test/sounds/SpeechTest_OHQ_Word_Shout.mp3'),
        speechTest_Word_Take:
            new Audio('/wp-content/plugins/agx-hearing-test/sounds/SpeechTest_OHQ_Word_Take.mp3'),
        speechTest_Master_lvl1:
            new Audio('/wp-content/plugins/agx-hearing-test/sounds/SpeechTest_down15_up7.5.mp3'),
    speechTest_Master_lvl2:
            new Audio('/wp-content/plugins/agx-hearing-test/sounds/SpeechTest_down10_up7.5.mp3'),
    speechTest_Master_lvl3:
            new Audio('/wp-content/plugins/agx-hearing-test/sounds/SpeechTest_down5_up7.5.mp3')
};

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
  speechPerfectScore: 9,
  speechAns: [],
  speechCompleted: false,

  testComplete: function(someString) {
    return this[(someString + 'Completed')];
  },
    OHQ_audio: { 
        volCalib: 
            loadAudio.volCalib,
        toneTest_2000: 
            loadAudio.toneTest_2000,
        toneTest_4000: 
            loadAudio.toneTest_4000,
        toneTest_6000: 
           loadAudio.toneTest_6000,
        toneTest_8000: 
            loadAudio.toneTest_8000,
        toneTest_10000: 
            loadAudio.toneTest_10000,
        /*volCalib: 
            new Audio('/wp-content/plugins/agx-hearing-test/sounds/VolCalib_OHQ_static.mp3'),
        toneTest_2000: 
            new Audio('/wp-content/plugins/agx-hearing-test/sounds/ToneTest_OHQ_2000_Hz.mp3'),
        toneTest_4000: 
            new Audio('/wp-content/plugins/agx-hearing-test/sounds/ToneTest_OHQ_4000_Hz.mp3'),
        toneTest_6000: 
            new Audio('/wp-content/plugins/agx-hearing-test/sounds/ToneTest_OHQ_6000_Hz.mp3'),
        toneTest_8000: 
            new Audio('/wp-content/plugins/agx-hearing-test/sounds/ToneTest_OHQ_8000_Hz.mp3'),
        toneTest_10000: 
            new Audio('/wp-content/plugins/agx-hearing-test/sounds/ToneTest_OHQ_10000_Hz.mp3'),*/
        speechTest_Noise_Lvl1:
            loadAudio.speechTest_Noise_Lvl1,
        speechTest_Noise_Lvl2:
            loadAudio.speechTest_Noise_Lvl2,
        speechTest_Noise_Lvl3:
            loadAudio.speechTest_Noise_Lvl3,
        speechTest_Noise_Lvl4:
            loadAudio.speechTest_Noise_Lvl4,
        speechTest_Word_Bean:
            loadAudio.speechTest_Word_Bean,
        speechTest_Word_Chalk:
            loadAudio.speechTest_Word_Chalk,
        speechTest_Word_Goose:
            loadAudio.speechTest_Word_Goose,
        speechTest_Word_Kite:
            loadAudio.speechTest_Word_Kite,
        speechTest_Word_Moon:
            loadAudio.speechTest_Word_Moon,
        speechTest_Word_Page:
            loadAudio.speechTest_Word_Page,
        speechTest_Word_Puff:
            loadAudio.speechTest_Word_Puff,
        speechTest_Word_Shout:
            loadAudio.speechTest_Word_Shout,
        speechTest_Word_Take:
            loadAudio.speechTest_Word_Take,
        speechTest_Master_lvl1:
            loadAudio.speechTest_Master_lvl1,
        speechTest_Master_lvl2:
            loadAudio.speechTest_Master_lvl2,
        speechTest_Master_lvl3:
            loadAudio.speechTest_Master_lvl3
    },

  restartTest: function() {
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
    var audioArray = Object.values(this.OHQ_audio);
		console.log(audioArray);
      
      audioArray.forEach(function(cur){
          console.log(!cur.paused);
          cur.autoplay = false;
          cur.loop = false;
          cur.pause();
          cur.currentTime = 0;
      });
      
		 /*idArray.forEach(function(cur) {
			console.log(cur);
			console.log(document.querySelector(cur));
			if(document.querySelector(cur) !== null) {
				document.querySelector(cur).autoplay = false;
        document.querySelector(cur).currentTime = 0;
        document.querySelector(cur).loop = false;
        document.querySelector(cur).pause();
      } else {
				console.log(cur + ' query came back as null');
			}
		});    */
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

/*
jQuery(document).ready(function($) {
  $("#OHQ_Button_Start").on("click", function(e){
    console.log('ohq button start: start');
    e.preventDefault();
    AGX_OHQ_toggleClass();
    console.log('ohq button start: end');  
  });
});

function AGX_OHQ_toggleClass() {
  console.log('toggle class running');
  document.querySelector('#ohq-container').style.display = 'block';
  document.querySelector('#ohq-overlay-parent').style.display = 'block';
  console.log('ohq-modal ===> ohq-modal-active');
};

console.log(document.querySelector('#OHQ_test'));
*/

