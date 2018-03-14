angular.module('formApp').controller('toneTestController', ['$scope', 'resultsObj', function ($scope, resultsObj) {
    var tone = this;
    
    // TEST COMPLETED SECTION //
    tone.testCompleted = resultsObj.testComplete('tone');
    
    tone.resetStage = function(){
        resultsObj.toneAns = 0;
        resultsObj.toneCompleted = false;
        tone.testCompleted = resultsObj.testComplete('tone');
    };
    ////////////////////////////
    
    
    tone.toneAudio = document.querySelector('#toneAudio');
    tone.toneAudio.volume = 0.5;
    tone.toneAudio.loop = true;
    tone.disabledBool = false;
    tone.buttonHide_YN = false;
    tone.buttonHide_Next = true;
    
    tone.frequencies = new Array('2000', '4000', '6000', '8000', '10000');    
    tone.curClass = new Array('active-freq', '', '', '', '');
    tone.curTone = 0;
    
    tone.curToneObj = {
        freq: '2000',
        loopBool: 'true',
        activeClass: 'active-freq',
        srcPath: '/sounds/2000.wav'
    }
    
    $scope.loopBool = new Array("true", "false", "false", "false", "false");
    
        $scope.toneClass = new Array("freqBlock ", "freqBlock", "freqBlock", "freqBlock", "freqBlock");
        
    
        tone.nextTone = function(someBool){
            
            tone.curClass[tone.curTone] = '';
            tone.curTone++;
             if(!someBool){
                resultsObj.toneAns++
            };
            
            if(tone.curTone < tone.frequencies.length){
            tone.curClass[tone.curTone] = 'active-freq';
            var newSrc = ('/sounds/' + tone.frequencies[tone.curTone] + '.wav');
            tone.curToneObj.freq = tone.frequencies[tone.curTone];
            
            tone.curToneObj.srcPath = newSrc;
            
            } else if (tone.curTone >= tone.frequencies.length){
                tone.disabledBool = true;
                tone.toneAudio.pause();
                tone.buttonHide_YN = true;
                tone.buttonHide_Next = false;
                resultsObj.toneCompleted = true;
                console.log(resultsObj.toneAns);
            } else {
                console.log(("something went wrong with tone.nextTone. Here is someBool: " + someBool + "\n and here is tone.curTone: " + tone.curTone));
            }
            }
        
      }])