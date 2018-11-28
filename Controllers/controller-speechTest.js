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

    // Preload Master Audio
    resultsObj.OHQ_audio.speechTest_Master_lvl1.preload = 'auto';
    resultsObj.OHQ_audio.speechTest_Master_lvl2.preload = 'auto';
    resultsObj.OHQ_audio.speechTest_Master_lvl3.preload = 'auto';

    ////////////////////////////

    speech.bgNoise = resultsObj.OHQ_audio.speechTest_Noise_Lvl2;
    speech.bgNoise.loop = true;
    speech.noiseVolume = 0;

    
    
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

    speech.answerStringOptions = [[
        'Bean', 
        'Chalk', 
        'Goose', 
        'Kite', 
        'Moon', 
        'Page', 
        'Puff', 
        'Shout', 
        'Take'],
                                  [    'Kite', 
                                   'Bean', 
                                   'Page', 
                                   'Take',
                                   'Goose', 
                                   'Shout',
                                   'Puff', 
                                   'Chalk', 
                                   'Moon' 
                                  ],
                                  [   'Take',
                                   'Shout', 
                                   'Puff', 
                                   'Kite', 
                                   'Bean', 
                                   'Moon', 
                                   'Goose', 
                                   'Chalk', 
                                   'Page' 
                                  ]];




    speech.answerStrings = answerStrings;

    speech.curAnswerStrings = speech.answerStringOptions[0];

    // Are the answer buttons disabled?
    speech.ansDisabled = true;

    // Is the start test button disabled?
    speech.startTestDisabled = false;

    // Current Round counter
    speech.curRound = 1;

    // Holding array for answers input via buttons
    speech.answerInput = [];

    // Key to compare answerInput against to test for true/false
    // speech.answerKey = ['Bean', 'Chalk', 'Goose'];
    speech.answerKey = [];

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

    
    // Compare answer input to answer key
    function evalAnswers() {
        /* var whichIndex = 0;
        
        speech.answerInput.forEach(function(cur){
            
            if(cur !== speech.answerKey[whichIndex]){
                               
                // 1. console.log answer input vs correct answer
                console.log("Answer Input: " + speech.answerInput[i] + "\n Correct Answer: " + speech.answerKey[i]);
                
                // 2. Add wrong answer string to wrongAns array
                speech.wrongAns.push(speech.answerKey[i]);
                
                // 3. Push wrong answer string to resultsObj for later use
                resultsObj.speechAns.push(speech.answerKey[i]);
                
                
            }
            
        }) */
        
        for(i = 0; i < 4; i++) {
            
            

            // if answerInput doesn't match answerKey
            if(speech.answerInput[i] !== speech.answerKey[i]) {
               
                // 1. console.log answer input vs correct answer
                console.log("Answer Input: " + speech.answerInput[i] + "\n Correct Answer: " + speech.answerKey[i]);
                
                // 2. Add wrong answer string to wrongAns array
                speech.wrongAns.push(speech.answerKey[i]);
                
                // 3. Push wrong answer string to resultsObj for later use
                resultsObj.speechAns.push(speech.answerKey[i]);

                
                //// DEV: Debug [START]
    
                // 1. console.log controller's wrong answer array
                console.log("speech.wrongAns: " + speech.wrongAns);

                // 2. console.log resultsObj wrong answer array
                console.log("resultsObj.speechAns: " + resultsObj.speechAns);
                
                //// DEV: Debug [END] 

            }
        }
    }



    function speechAudioCurStart(whichAudio) {
        var curStart;
        if(speech.noiseVolume === 1){
            switch(whichAudio){
                case 'Bean':
                    curStart = 0;
                    console.log('index of ' + whichAudio + 'is ' + curStart);
                    break;
                case 'Chalk':
                    curStart = 2;
                    console.log('index of ' + whichAudio + 'is ' + curStart);

                    break;
                case 'Goose':
                    curStart = 4;
                    console.log('index of ' + whichAudio + 'is ' + curStart);

                    break;
                case 'Kite':
                    curStart = 6;
                    console.log('index of ' + whichAudio + 'is ' + curStart);

                    break;
                case 'Moon':
                    curStart = 8;
                    console.log('index of ' + whichAudio + 'is ' + curStart);

                    break;
                case 'Page':
                    curStart = 10;
                    console.log('index of ' + whichAudio + 'is ' + curStart);

                    break;
                case 'Puff':
                    curStart = 12;
                    console.log('index of ' + whichAudio + 'is ' + curStart);

                    break;
                case 'Shout':
                    curStart = 14;
                    console.log('index of ' + whichAudio + 'is ' + curStart);

                    break;
                case 'Take':
                    curStart = 16;
                    console.log('index of ' + whichAudio + 'is ' + curStart);

                    break;
                default:
                    console.log('audioPlayerBG PLAY switch didnt work. whichAudio was: ' + whichAudio);
            };
        } else if (speech.noiseVolume === 2){
            switch(whichAudio){
                case 'Kite':
                    curStart = 0;
                    console.log('index of ' + whichAudio + 'is ' + curStart);
                    break;
                case 'Bean':
                    curStart = 2;
                    console.log('index of ' + whichAudio + 'is ' + curStart);

                    break;
                case 'Page':
                    curStart = 4;
                    console.log('index of ' + whichAudio + 'is ' + curStart);

                    break;
                case 'Take':
                    curStart = 6;
                    console.log('index of ' + whichAudio + 'is ' + curStart);

                    break;
                case 'Goose':
                    curStart = 8;
                    console.log('index of ' + whichAudio + 'is ' + curStart);

                    break;
                case 'Shout':
                    curStart = 10;
                    console.log('index of ' + whichAudio + 'is ' + curStart);

                    break;
                case 'Puff':
                    curStart = 12;
                    console.log('index of ' + whichAudio + 'is ' + curStart);

                    break;
                case 'Chalk':
                    curStart = 14;
                    console.log('index of ' + whichAudio + 'is ' + curStart);

                    break;
                case 'Moon':
                    curStart = 16;
                    console.log('index of ' + whichAudio + 'is ' + curStart);

                    break;
                default:
                    console.log('audioPlayerBG PLAY switch didnt work. whichAudio was: ' + whichAudio);
            };
        } else if (speech.noiseVolume === 3){
            switch(whichAudio){
                case 'Take':
                    curStart = 0;
                    console.log('index of ' + whichAudio + 'is ' + curStart);
                    break;
                case 'Shout':
                    curStart = 2;
                    console.log('index of ' + whichAudio + 'is ' + curStart);

                    break;
                case 'Puff':
                    curStart = 4;
                    console.log('index of ' + whichAudio + 'is ' + curStart);

                    break;
                case 'Kite':
                    curStart = 6;
                    console.log('index of ' + whichAudio + 'is ' + curStart);

                    break;
                case 'Bean':
                    curStart = 8;
                    console.log('index of ' + whichAudio + 'is ' + curStart);

                    break;
                case 'Moon':
                    curStart = 10;
                    console.log('index of ' + whichAudio + 'is ' + curStart);

                    break;
                case 'Goose':
                    curStart = 12;
                    console.log('index of ' + whichAudio + 'is ' + curStart);

                    break;
                case 'Chalk':
                    curStart = 14;
                    console.log('index of ' + whichAudio + 'is ' + curStart);

                    break;
                case 'Page':
                    curStart = 16;
                    console.log('index of ' + whichAudio + 'is ' + curStart);

                    break;
                default:
                    console.log('audioPlayerBG PLAY switch didnt work. whichAudio was: ' + whichAudio);
            };
        } else {
            console.log('whichAudio: ' + whichAudio);
        };

        return curStart;
    }



    function audioPlayerSpeechTest (whichAudio){
        var curStart = speechAudioCurStart(whichAudio);
        var clipEnd = 5900;

        switch(speech.noiseVolume){
            case 1:
                
                console.log("Which audio was: " + whichAudio + "\n curStart was: " + curStart);
                resultsObj.OHQ_audio.speechTest_Master_lvl1.currentTime = curStart;
                resultsObj.OHQ_audio.speechTest_Master_lvl1.play();
                console.log('case 1 fired with: ' + speech.noiseVolume);
                setTimeout(function() {
                    resultsObj.OHQ_audio.speechTest_Master_lvl1.pause();
                    $scope.$apply(resetAns());
                    console.log(speech.ansDisabled);
                }, 5900);
                break;
            case 2:
                console.log(resultsObj.OHQ_audio.speechTest_Master_lvl2);
                console.log("Which audio was: " + whichAudio + "\n curStart was: " + curStart);
                resultsObj.OHQ_audio.speechTest_Master_lvl2.currentTime = curStart;
                resultsObj.OHQ_audio.speechTest_Master_lvl2.play();
                console.log('case 2 fired with: ' + speech.noiseVolume);
                setTimeout(function() {
                    resultsObj.OHQ_audio.speechTest_Master_lvl2.pause();
                    $scope.$apply(resetAns());
                    console.log(speech.ansDisabled);
                }, 5900);
                break;
            case 3:
                console.log(resultsObj.OHQ_audio.speechTest_Master_lvl3);
                console.log("Which audio was: " + whichAudio + "\n curStart was: " + curStart);
                resultsObj.OHQ_audio.speechTest_Master_lvl3.currentTime = curStart;
                resultsObj.OHQ_audio.speechTest_Master_lvl3.play();
                console.log('case 3 fired with: ' + speech.noiseVolume);
                setTimeout(function() {
                    resultsObj.OHQ_audio.speechTest_Master_lvl3.pause();
                    $scope.$apply(resetAns());
                    console.log(speech.ansDisabled);
                }, 5900);
                break;
            default:
                console.log('whichMasterAudio switch--speech.noiseVolume is: ' + speech.noiseVolume);
        }


    }


    // play new round audio/gen new round answers
    speech.roundAudio = function() {
        
        console.log("speech.answerKey: " + speech.answerKey);
        // speech.bgNoise.autoplay = true;

        // If not last round
        if(speech.curRound < 4) {

            // 1. increase BG Noise

            speech.noiseVolume++;
            // 2. add one to curRound counter
            speech.curRound++;

            // 2. disable answer input
            speech.ansDisabled = true;

            // 3. disable start test button ????? move somewhere?
            speech.startTestDisabled = true;

            // 4. generate new round answers
            generateRoundAns();
        console.log("speech.answerKey: " + speech.answerKey);

            // 5. play corresponding audio for new round answers
            playRoundAudio();
        console.log("speech.answerKey: " + speech.answerKey);


            // if last round
        } else {

            // 1. Disable answer input
            speech.ansDisabled = true;

            // 2. Push number of wrong answers to global resultsObj object
            resultsObj.speechScore = speech.wrongAns.length;

            // 3. Mark section as complete in resultObj
            resultsObj.speechCompleted = true;

            // 4. Stop current BG noise
            // audioPlayerBG(speech.noiseVolume, 'stop');

            // 5. Go to results section
            $state.go('^.results');
        }
    };

    function generateRoundAns(){
        var startIndex;

        // 1. Reset answerKey array
        speech.answerKey = [];
        console.log(resultsObj.quizAns);

        /*switch(speech.noiseVolume){
        case 1:
            speech.answerStrings = speech.answerStringOptions.lvl1;
            speech.curAnswerStrings = speech.answerStringOptions.lvl1;
            break;
        case 2:
            speech.curAnswerStrings = speech.answerStringOptions.lvl2;
            speech.curAnswerStrings = speech.answerStringOptions.lvl2;
            break;
        case 3:
            speech.curAnswerStrings = speech.answerStringOptions.lvl3;
            speech.curAnswerStrings = speech.answerStringOptions.lvl3;
            break;
        default:
            console.log('no answer string options. Cur volume was: ' + speech.noiseVolume);
    };
    */

        // 2. Gen random start index
        startIndex = Math.round(Math.random()*6);
        console.log('Start Index is: ' + startIndex);

        // 3. Push 3 answers to answerKey
        for(var i = 0; i < 3; i++){
            var curVol = (speech.noiseVolume - 1);
            console.log('curVol is: ' + curVol);
            var curIndex = (i + startIndex);
            console.log('Cur Index is: ' + curIndex);

            var pushAnswer = speech.answerStringOptions[curVol][curIndex];
            speech.answerKey.push(pushAnswer);
            console.log(speech.answerStringOptions[curVol]);
        }

        console.log(speech.answerKey);
    };


    function playRoundAudio(){
        var startAnswer;

        startAnswer = speech.answerKey[0];
        console.log("startAnswer is: " + startAnswer);
        audioPlayerSpeechTest(startAnswer);

    }


}]);

