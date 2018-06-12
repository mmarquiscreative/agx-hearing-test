angular.module('formApp').controller('toneTestController', ['$scope', 'resultsObj', '$state', function ($scope, resultsObj, $state) {
    var tone = this;
    
    // TEST COMPLETED SECTION //
    tone.testCompleted = resultsObj.testComplete('tone');
    
    
    
    tone.toneAudio = document.querySelector('#toneAudio');
    tone.toneAudio.volume = 0.5;
    tone.toneAudio.loop = true;
    
    if(!tone.testCompleted){
    tone.toneAudio.autoplay = true;
    }
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
        srcPath: '/sounds/2000.mp3'
    }
    
    $scope.loopBool = new Array("true", "false", "false", "false", "false");
    
        $scope.toneClass = new Array("freqBlock ", "freqBlock", "freqBlock", "freqBlock", "freqBlock");
        
    
        tone.nextTone = function(someBool){
            
            tone.curClass[tone.curTone] = '';
            
            if(!someBool){
                resultsObj.toneScore++
                resultsObj.toneAns.push(tone.frequencies[tone.curTone]);
            };
            
            tone.curTone++;
             
            if(tone.curTone < tone.frequencies.length){
            tone.curClass[tone.curTone] = 'active-freq';
            var newSrc = ('/sounds/' + tone.frequencies[tone.curTone] + '.mp3');
            tone.curToneObj.freq = tone.frequencies[tone.curTone];
            
            tone.curToneObj.srcPath = newSrc;
            
            } else if (tone.curTone >= tone.frequencies.length){
                tone.disabledBool = true;
                tone.toneAudio.autoplay = false;
                tone.buttonHide_YN = true;
                tone.buttonHide_Next = false;
                resultsObj.toneCompleted = true;
                $state.go('^.speechTest')
                console.log(resultsObj.toneAns);
                
            } else {
                console.log(("something went wrong with tone.nextTone. Here is someBool: " + someBool + "\n and here is tone.curTone: " + tone.curTone));
            }
            }
        
        tone.resetStage = function(){
                           tone.toneAudio.play();

 setTimeout(function(){
        $scope.$apply(function(){
           tone.toneAudio.autoplay = true;
        });
        }, 1);
        resultsObj.toneScore = 0;
        resultsObj.toneAns = [];
        resultsObj.toneCompleted = false;
        tone.testCompleted = resultsObj.testComplete('tone');
    };
    
    
    ////////////////////////////
        
      }])