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
    
resultsObj.OHQ_audio.toneTest_2000.load();
    resultsObj.OHQ_audio.toneTest_4000.load();
    resultsObj.OHQ_audio.toneTest_6000.load();
    resultsObj.OHQ_audio.toneTest_8000.load();
    resultsObj.OHQ_audio.toneTest_10000.load();

    // sets loop
    resultsObj.OHQ_audio.toneTest_2000.loop = true;

    // establishes autoplay variable
    resultsObj.OHQ_audio.toneTest_2000.autoplay = false;

    resultsObj.OHQ_audio.toneTest_2000.pause();

    // disable y/n buttons if true
    tone.disabledBool = false;

    
    

    // The html block with active-freq is styled as the active tone.
    // The active-freq will be pushed down the array,
    // and the corresponding html blocks will change to active style
    // depending on which index of the array contains 'active-freq'

    tone.curClass = new Array('active-freq', '', '', '', '');

    // a counter for which tone we're on
    tone.curTone = 2;

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


    //////////////////////////////////////
    //////////////////////////////////////
    // START: Non-bracket notation version 


    tone.nextTone = function(someBool){
        var lastFreq = (tone.curTone * 1000);
        var curFreq = ((tone.curTone + 2) * 1000);
        var lastClass = (tone.curTone/2 - 1);
        var curClass = (tone.curTone/2);

        // 1. play audio
        if(tone.curTone < 10){
            audioPlayer(lastFreq, 'stop');

            console.log('play ' + curFreq);
            audioPlayer(curFreq, 'play');
        } else if (tone.curTone === 10){
            console.log('stop ' + curFreq);
            audioPlayer(lastFreq, 'stop');
        } else {
            console.log('curFreq greater than 10000');
        }

        // 2. update style
        if(tone.curTone < 10){
            tone.curClass[lastClass] = '';
            tone.curClass[curClass] = 'active-freq';
        }

        // 3. push answer
        // if false / answered 'no' / couldn't hear tone
        if(!someBool){

            // add one to score for this section
            resultsObj.toneScore++

            // push which frequency they struggled with to resultsObj
            resultsObj.toneAns.push(lastFreq);
        };
        // 4. Increase curTone by 2
        tone.curTone += 2;

        // 5. Finish
        if(tone.curTone > 10){
            
            tone.disabledBool = true;
        
        // resultsObj.OHQ_audio.toneTest_2000.autoplay = false;
        // tone.buttonHide_YN = true;
    
        resultsObj.toneCompleted = true;
        console.log(resultsObj.toneCompleted);
                tone.startTest = false;
        console.log(resultsObj.toneAns);

        $state.go('^.speechTest');
            
        }

        // 6. Move to next stage
        console.log('nextStep pressed');
        
    }
    function audioPlayer(whichAudio, playStop){

        if(playStop === 'play'){

            switch(whichAudio){
                case 2000:
                    resultsObj.OHQ_audio.toneTest_2000.play();
                    resultsObj.OHQ_audio.toneTest_2000.loop = true;
                    break;
                case 4000:
                    resultsObj.OHQ_audio.toneTest_4000.play();
                    resultsObj.OHQ_audio.toneTest_4000.loop = true;
                    break;
                case 6000:
                    resultsObj.OHQ_audio.toneTest_6000.play();
                    resultsObj.OHQ_audio.toneTest_6000.loop = true;
                    break;
                case 8000:
                    resultsObj.OHQ_audio.toneTest_8000.play();
                    resultsObj.OHQ_audio.toneTest_8000.loop = true;
                    break;
                case 10000:
                    resultsObj.OHQ_audio.toneTest_10000.play();
                    resultsObj.OHQ_audio.toneTest_10000.loop = true;
                    break;
                default:
                    console.log('audioPlayer PLAY switch didnt work. whichAudio was: ' + whichAudio);
            };

        } else if (playStop === 'stop'){

            switch(whichAudio){
                case 2000:
                    resultsObj.OHQ_audio.toneTest_2000.pause();
                    resultsObj.OHQ_audio.toneTest_2000.loop = false;
                    break;
                case 4000:
                    resultsObj.OHQ_audio.toneTest_4000.pause();
                    resultsObj.OHQ_audio.toneTest_4000.loop = false;
                    break;
                case 6000:
                    resultsObj.OHQ_audio.toneTest_6000.pause();
                    resultsObj.OHQ_audio.toneTest_6000.loop = false;
                    break;
                case 8000:
                    resultsObj.OHQ_audio.toneTest_8000.pause();
                    resultsObj.OHQ_audio.toneTest_8000.loop = false;
                    break;
                case 10000:
                    resultsObj.OHQ_audio.toneTest_10000.pause();
                    resultsObj.OHQ_audio.toneTest_10000.loop = false;
                    break;
                default:
                    console.log('audioPlayer STOP switch didnt work. whichAudio was: ' + whichAudio);
            };

        }

    }










    // END: Non-bracket notation version
    //////////////////////////////////////
    //////////////////////////////////////












    /*tone.nextTone = function(someBool){

        tone.startTest = true;

        var lastTone = tone.curTone - 1;

        // removes 'active-freq' class from current html block
        tone.curClass[lastTone] = '';

        // if false / answered 'no' / couldn't hear tone
        if(!someBool){

            // add one to score for this section
            resultsObj.toneScore++

            // push which frequency they struggled with to resultsObj
            resultsObj.toneAns.push(tone.frequencies[lastTone]);
        };

        if(tone.curTone > 0) {
            // pauses the current audio tone playing
            resultsObj.OHQ_audio['toneTest_' + (tone.curTone * 2) + '000'].pause();
        };

        tone.curTone++;
        lastTone++;

        if(tone.curTone <= tone.frequencies.length){

            tone.curClass[lastTone] = 'active-freq';

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
    } */

    tone.resetStage = function(){

        tone.startTest = false;

        setTimeout(function(){
            $scope.$apply(function(){
                resultsObj.OHQ_audio.toneTest_2000.autoplay = true;
            });
        }, 1);
        resultsObj.toneScore = 0;
        resultsObj.toneAns = [];
        resultsObj.toneCompleted = false;

        tone.testCompleted = false;
        tone.startTest = false;
    };

    tone.startToneTest = function(){
        tone.startTest = true;
        resultsObj.OHQ_audio.toneTest_2000.play();
    }


    ////////////////////////////

}])