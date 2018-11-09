angular.module('formApp').controller('toneTestController', ['$scope', 'resultsObj', '$state', function ($scope, resultsObj, $state) {
    var tone = this;

tone.startTest = false;
    
    // returns a boolean from resultsObj.toneCompleted
    tone.testCompleted = resultsObj.toneCompleted;
    
    console.log("Start Test: " + tone.startTest);
    console.log("Test Completed: " + tone.testCompleted);
   
    resultsObj.OHQ_audio.toneTest_2000.preload = 'auto';
    resultsObj.OHQ_audio.toneTest_4000.preload = 'auto';
    resultsObj.OHQ_audio.toneTest_6000.preload = 'auto';
    resultsObj.OHQ_audio.toneTest_8000.preload = 'auto';
    resultsObj.OHQ_audio.toneTest_10000.preload = 'auto';
    
    // sets loop
    resultsObj.OHQ_audio.toneTest_2000.loop = true;

    // establishes autoplay variable
    resultsObj.OHQ_audio.toneTest_2000.autoplay = false;
    
    resultsObj.OHQ_audio.toneTest_2000.pause();
    
    // disable y/n buttons if true
    tone.disabledBool = false;

    // hide y/n buttons if true
    tone.buttonHide_YN = false;

    // hide next button if true
    tone.buttonHide_Next = true;

    // array of frequency strings that match audio file names
    tone.frequencies = new Array('2000', '4000', '6000', '8000', '10000');

    // The html block with active-freq is styled as the active tone.
    // The active-freq will be pushed down the array,
    // and the corresponding html blocks will change to active style
    // depending on which index of the array contains 'active-freq'

    tone.curClass = new Array('active-freq', '', '', '', '');

    // a counter for which tone we're on
    tone.curTone = 1;

    // an reference object for the current audio filepath / updating it
    tone.curToneObj = {
        freq: '2000',
        srcPath: '/wp-content/plugins/agx-hearing-test/sounds/2000.mp3'
    }

    // starts audio if test has not already been completed
    if(!tone.testCompleted && tone.startTest){
        resultsObj.OHQ_audio.toneTest_2000.autoplay = true;
    }

    // function that runs when either y/n button is pushed
    // someBool is true if 'yes' or false if 'No'
    tone.nextTone = function(someBool){

        tone.startTest = true;
        
        // removes 'active-freq' class from current html block
        tone.curClass[(tone.curTone - 1)] = '';

        // if false / answered 'no' / couldn't hear tone
        if(!someBool){

            // add one to score for this section
            resultsObj.toneScore++

            // push which frequency they struggled with to resultsObj
            resultsObj.toneAns.push(tone.frequencies[(tone.curTone - 1)]);
        };
        
        if(tone.curTone > 0) {
            // pauses the current audio tone playing
        resultsObj.OHQ_audio['toneTest_' + (tone.curTone * 2) + '000'].pause();
        };
        
        tone.curTone++;

        if(tone.curTone <= tone.frequencies.length){
            tone.curClass[(tone.curTone - 1)] = 'active-freq';
            
            resultsObj.OHQ_audio['toneTest_' + (tone.curTone * 2) + '000'].play();
            resultsObj.OHQ_audio['toneTest_' + (tone.curTone * 2) + '000'].loop = true;
            
            console.log((tone.curTone * 2));
            console.log(resultsObj.OHQ_audio['toneTest_' + (tone.curTone * 2) + '000']);

        } else if (tone.curTone > tone.frequencies.length){
            tone.disabledBool = true;
            resultsObj.OHQ_audio.toneTest_2000.autoplay = false;
            tone.buttonHide_YN = true;
            tone.buttonHide_Next = false;
            resultsObj.toneCompleted = true;
            console.log(resultsObj.toneCompleted);
            $state.go('^.speechTest')
            console.log(resultsObj.toneAns);
            tone.startTest = false;

        } else {
            console.log(("something went wrong with tone.nextTone. Here is someBool: " + someBool + "\n and here is tone.curTone: " + tone.curTone));
        }
    }

    tone.resetStage = function(){
        resultsObj.OHQ_audio.toneTest_2000.play();

                tone.startTest = false;
        
        setTimeout(function(){
            $scope.$apply(function(){
                resultsObj.OHQ_audio.toneTest_2000.autoplay = true;
            });
        }, 1);
        resultsObj.toneScore = 0;
        resultsObj.toneAns = [];
        resultsObj.toneCompleted = false;
        resultsObj.toneCompleted = false;
        tone.testCompleted = resultsObj.toneCompleted;
        tone.startTest = false;
    };
    
     tone.startToneTest = function(){
         console.log('start toneTest running');
        tone.startTest = true;
        resultsObj.OHQ_audio.toneTest_2000.play();
        
    }


    ////////////////////////////

}])