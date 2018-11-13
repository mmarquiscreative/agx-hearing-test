angular.module('formApp').controller('SpeechTest', ['$scope', 'resultsObj', 'answerStrings', '$state', function($scope, resultsObj, answerStrings, $state){

    ///////////////////////////////////
    //////////// Variables ////////////

    var speech = this;

    // TEST COMPLETED SECTION //
    speech.testCompleted = resultsObj.testComplete('speech');

    speech.resetStage = function() {
        resultsObj.speechScore = 0;
        resultsObj.speechAns = [];
        resultsObj.speechCompleted = false;
        speech.testCompleted = resultsObj.testComplete('speech');
    };

    // Preload BG Noise Audio
    resultsObj.OHQ_audio.speechTest_Noise_Lvl1.preload = 'auto';
    resultsObj.OHQ_audio.speechTest_Noise_Lvl2.preload = 'auto';
    resultsObj.OHQ_audio.speechTest_Noise_Lvl3.preload = 'auto';
    resultsObj.OHQ_audio.speechTest_Noise_Lvl4.preload = 'auto';

    // Preload Word Audio
    resultsObj.OHQ_audio.speechTest_Word_Bean.preload = 'auto';
    resultsObj.OHQ_audio.speechTest_Word_Chalk.preload = 'auto';
    resultsObj.OHQ_audio.speechTest_Word_Goose.preload = 'auto';
    resultsObj.OHQ_audio.speechTest_Word_Kite.preload = 'auto';
    resultsObj.OHQ_audio.speechTest_Word_Moon.preload = 'auto';
    resultsObj.OHQ_audio.speechTest_Word_Page.preload = 'auto';
    resultsObj.OHQ_audio.speechTest_Word_Puff.preload = 'auto';
    resultsObj.OHQ_audio.speechTest_Word_Shout.preload = 'auto';
    resultsObj.OHQ_audio.speechTest_Word_Take.preload = 'auto';

    ////////////////////////////

    speech.bgNoise = resultsObj.OHQ_audio.speechTest_Noise_Lvl1;
    speech.bgNoise.loop = true;
    speech.noiseVolume = 1;

    // resultsObj.OHQ_audio['speechTest_Noise_Lvl' + speech.noiseVolume].loop = true;

    /*
  if(!speech.testCompleted) {
    speech.bgNoise.autoplay = true;
  } else if (speech.testCompleted) {
    speech.bgNoise.autoplay = false;
  }
  */

    /* speech.bgNoiseSettings = {
        loopBool: 'true',
        srcPath: '/wp-content/plugins/agx-hearing-test/sounds/SpeechTest_OHQ_Noise_Lvl1.mp3'
    } */

    // Pulls array of strings from global namespace
    speech.answerStrings = answerStrings;

    // Are the answer buttons disabled?
    speech.ansDisabled = true;

    // Is the start test button disabled?
    speech.startTestDisabled = false;

    // Current Round counter
    speech.curRound = 1;

    // Holding array for answers input via buttons
    speech.answerInput = [];

    // Key to compare answerInput against to test for true/false
    speech.answerKey = ['Bean', 'Chalk', 'Goose'];

    speech.answerNumberWords = ['1st', '2nd', '3rd'];

    // What answers were wrong (strings)
    speech.wrongAns = [];

    speech.testFunction = function() {
        console.log('Test function run');
    };


    ///////////////////////////////////
    //////////// Functions ////////////

    // Pushes an answer to the answerInput array
    speech.addAnswer = function(someAns) {

        // Add new answer if round isn't over
        if(speech.answerInput.length < 2) {
            speech.answerInput.push(someAns);

            if(someAns !== '? ? ?'){
                document.querySelector(('#OHQ_Speech_' + someAns)).className += ' speechBtnAnswer';
            };
            console.log(someAns);
        } else {
                            speech.ansDisabled = true;

            if(someAns !== '? ? ?'){
                document.querySelector(('#OHQ_Speech_' + someAns)).className += ' speechBtnAnswer';
            };


            // 1. if round is over push answer then eval
            speech.answerInput.push(someAns);

            evalAnswers();

            setTimeout(function() {
                // 2. compare answers to key
                speech.answerInput.forEach(function(cur){
                    if(cur !== '? ? ?'){
                        document.querySelector(('#OHQ_Speech_' + cur)).className = 'speechBtn';
                    };
                });


                // 3. reset answerInput array
                $scope.$apply(function() {
                    speech.answerInput = [];
                    console.log(speech.answerInput);
                    speech.roundAudio();
                });
            }, 1000);

        };
    }

    function resetAns() {
        speech.ansDisabled = false;
    }

    // Compare input answers to answer key
    function evalAnswers() {
        for(i = 0; i < 4; i++) {

            // if answerInput doesn't match answerKey
            if(speech.answerInput[i] !== speech.answerKey[i]) {
                console.log(speech.answerInput[i] + " vs " + speech.answerKey[i]);
                // add wrong answer string to wrongAns array
                speech.wrongAns.push(speech.answerKey[i]);
                resultsObj.speechAns.push(speech.answerKey[i]);
            }
        }
        console.log(speech.wrongAns);
    }

    function increaseBGAudio(){
        var lastBG;

        // 1. save cur noise volume
        lastBG = speech.noiseVolume;

        // 2. increase bg audio volume level counter
        speech.noiseVolume++;

        // 3. play new level of bg noise
        audioPlayerBG(speech.noiseVolume, 'play');

        // 4. Pause last level of bg audio (overlapping reduces delay)
        audioPlayerBG(lastBG, 'stop');

    }



    function audioPlayerBG(whichAudio, playStop){


        if(playStop === 'play'){

            switch(whichAudio){
                case 1:
                    resultsObj.OHQ_audio.speechTest_Noise_Lvl1.play();
                    resultsObj.OHQ_audio.speechTest_Noise_Lvl1.loop = true;
                    break;
                case 2:
                    resultsObj.OHQ_audio.speechTest_Noise_Lvl2.play();
                    resultsObj.OHQ_audio.speechTest_Noise_Lvl2.loop = true;
                    break;
                case 3:
                    resultsObj.OHQ_audio.speechTest_Noise_Lvl3.play();
                    resultsObj.OHQ_audio.speechTest_Noise_Lvl3.loop = true;
                    break;
                case 4:
                    resultsObj.OHQ_audio.speechTest_Noise_Lvl4.play();
                    resultsObj.OHQ_audio.speechTest_Noise_Lvl4.loop = true;
                    break;
                default:
                    console.log('audioPlayerBG PLAY switch didnt work. whichAudio was: ' + whichAudio);
            };

        } else if (playStop === 'stop'){

            switch(whichAudio){
                case 1:
                    resultsObj.OHQ_audio.speechTest_Noise_Lvl1.pause();
                    resultsObj.OHQ_audio.speechTest_Noise_Lvl1.loop = false;
                    break;
                case 2:
                    resultsObj.OHQ_audio.speechTest_Noise_Lvl2.pause();
                    resultsObj.OHQ_audio.speechTest_Noise_Lvl2.loop = false;
                    break;
                case 3:
                    resultsObj.OHQ_audio.speechTest_Noise_Lvl3.pause();
                    resultsObj.OHQ_audio.speechTest_Noise_Lvl3.loop = false;
                    break;
                case 4:
                    resultsObj.OHQ_audio.speechTest_Noise_Lvl4.pause();
                    resultsObj.OHQ_audio.speechTest_Noise_Lvl4.loop = false;
                    break;
                default:
                    console.log('audioPlayerBG STOP switch didnt work. whichAudio was: ' + whichAudio);
            };



        }
    }

    function audioPlayerWord(whichAudio, playStop){

        if(playStop === 'play'){

            switch(whichAudio){
                case 'Bean':
                    resultsObj.OHQ_audio.speechTest_Word_Bean.play();
                    break;
                case 'Chalk':
                    resultsObj.OHQ_audio.speechTest_Word_Chalk.play();
                    break;
                case 'Goose':
                    resultsObj.OHQ_audio.speechTest_Word_Goose.play();
                    break;
                case 'Kite':
                    resultsObj.OHQ_audio.speechTest_Word_Kite.play();
                    break;
                case 'Moon':
                    resultsObj.OHQ_audio.speechTest_Word_Moon.play();
                    break;
                case 'Page':
                    resultsObj.OHQ_audio.speechTest_Word_Page.play();
                    break;
                case 'Puff':
                    resultsObj.OHQ_audio.speechTest_Word_Puff.play();
                    break;
                case 'Shout':
                    resultsObj.OHQ_audio.speechTest_Word_Shout.play();
                    break;
                case 'Take':
                    resultsObj.OHQ_audio.speechTest_Word_Take.play();
                    break;
                default:
                    console.log('audioPlayerBG PLAY switch didnt work. whichAudio was: ' + whichAudio);
            };

        } else if (playStop === 'stop'){

            switch(whichAudio){
                case 'Bean':
                    resultsObj.OHQ_audio.speechTest_Word_Bean.pause();
                    break;
                case 'Chalk':
                    resultsObj.OHQ_audio.speechTest_Word_Chalk.pause();
                    break;
                case 'Goose':
                    resultsObj.OHQ_audio.speechTest_Word_Goose.pause();
                    break;
                case 'Kite':
                    resultsObj.OHQ_audio.speechTest_Word_Kite.pause();
                    break;
                case 'Moon':
                    resultsObj.OHQ_audio.speechTest_Word_Moon.pause();
                    break;
                case 'Page':
                    resultsObj.OHQ_audio.speechTest_Word_Page.pause();
                    break;
                case 'Puff':
                    resultsObj.OHQ_audio.speechTest_Word_Puff.pause();
                    break;
                case 'Shout':
                    resultsObj.OHQ_audio.speechTest_Word_Shout.pause();
                    break;
                case 'Take':
                    resultsObj.OHQ_audio.speechTest_Word_Take.pause();
                    break;
                default:
                    console.log('audioPlayerBG STOP switch didnt work. whichAudio was: ' + whichAudio);
            };



        }
    }

    // play new round audio/gen new round answers
    speech.roundAudio = function() {

        // speech.bgNoise.autoplay = true;

        // If not last round
        if(speech.curRound < 4) {

            // 1. increase BG Noise
            increaseBGAudio();

            // 2. add one to curRound counter
            speech.curRound++;

            // 2. disable answer input
            speech.ansDisabled = true;

            // 3. disable start test button ????? move somewhere?
            speech.startTestDisabled = true;

            // 4. generate new round answers
            generateRoundAns();

            // 5. play corresponding audio for new round answers
            playRoundAudio();


            // if last round
        } else {

            // 1. Disable answer input
            speech.ansDisabled = true;

            // 2. Push number of wrong answers to global resultsObj object
            resultsObj.speechScore = speech.wrongAns.length;

            // 3. Mark section as complete in resultObj
            resultsObj.speechCompleted = true;

            // 4. Stop current BG noise
            audioPlayerBG(speech.noiseVolume, 'stop');

            // 5. Go to results section
            $state.go('^.results');
        }
    };

    // generates three random answers from answerkey for new round
    function generateRoundAns() {
        var num1, num2, num3;

        // 1. Reset answerKey array
        speech.answerKey = [];

        // 2. Calculate 3 random numbers
        num1 = Math.round(Math.random()*8);
        num2 = Math.round(Math.random()*8);
        num3 = Math.round(Math.random()*8);

        // 2. Resolve/remove duplicates within the three numbers
        while (num1 === num2 || num2 === num3 || num1 === num3) {
            num2 = Math.round(Math.random()*8);
            num3 = Math.round(Math.random()*8);
        }

        // 3. Push answers to answerStrings array
        // Uses random numbers above to pull random answers from answerKey
        speech.answerKey.push(speech.answerStrings[num1]);
        speech.answerKey.push(speech.answerStrings[num2]);
        speech.answerKey.push(speech.answerStrings[num3]);
    }

    /* document.querySelector('#toneAnswer').addEventListener('click', function(){
        // speech.bgNoise.play();
    }); */

    function playRoundAudio() {
        var tempAudio, delayTime, endDelayTime;

        // 1. Set delay between word audio playing
        delayTime = 1200;

        // 2. Set delay before starting next round
        endDelayTime = delayTime * 1.3;

        // 3. Play first audio
        audioPlayerWord(speech.answerKey[0], 'play');


        // 4. Play next audio from within setTimeout to delay
        setTimeout(function() {

            audioPlayerWord(speech.answerKey[1], 'play');

            // 5. Play third audio from within setTimeout
            setTimeout(function() {
                audioPlayerWord(speech.answerKey[2], 'play');


                // 6. After delay, enable answer button input
                setTimeout(function() {

                    // enable answer button input
                    $scope.$apply(resetAns());
                    console.log(speech.ansDisabled);
                }, endDelayTime);
            }, delayTime)
        }, delayTime);

    };

    // Play the audio files that match the answers generated
    /*  function playRoundAudio() {
        var tempAudio, delayTime;

        // initialize empty array
        tempAudio = [];

        // set delay between audio files playing
        delayTime = 1200;

        // Push file paths to audio file which corresponds to the round answers
        for(i=0; i < 3; i++) {
            tempAudio.push(new Audio('/wp-content/plugins/agx-hearing-test/sounds/SpeechTest_OHQ_Word_' +  speech.answerKey[i] + '.mp3'));
        }

        // play first audio
        resultsObj.OHQ_audio['speechTest_Word_' + speech.answerKey[0]].play();
        // tempAudio[0].play();

        // play next audio from within setTimeout to delay
        setTimeout(function() {

            resultsObj.OHQ_audio['speechTest_Word_' + speech.answerKey[1]].play();

            // play third audio from within setTimeout
            setTimeout(function() {
                resultsObj.OHQ_audio['speechTest_Word_' + speech.answerKey[2]].play();

                // after delay, enable answer button input
                setTimeout(function() {

                    // enable answer button input
                    $scope.$apply(resetAns());
                    console.log(speech.ansDisabled);
                }, delayTime);
            }, delayTime)
        }, delayTime);

    } */
}]);

