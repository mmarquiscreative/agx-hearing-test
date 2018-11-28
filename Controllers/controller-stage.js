// CONTROLLERS
angular.module('formApp').controller('stageController', ['$scope', '$state', 'resultsObj', '$location', function ($scope,  $state, resultsObj, $location) {
    var stage, headerEl, headerStyles, themePageStyles, starterZIndex;
    stage = this;

    /* var OHQ_HTML = document.querySelector('#agx-ohq').innerHTML;
  document.querySelector('#top-of-page').outerHTML = OHQ_HTML + document.querySelector('#top-of-page').outerHTML;
  */ 







    /* START: Audio Test Section 

    //// CONTROL
    var controlPlayCount = 0;

    stage.controlPlayNext = function(){

        if(controlPlayCount <= 3){

            controlPlayCount++;

            if(controlPlayCount > 1){
                resultsObj.OHQ_audio['toneTest_' + ((controlPlayCount - 1) * 2) + '000'].pause();
                resultsObj.OHQ_audio['toneTest_' + ((controlPlayCount - 1) * 2) + '000'].loop = false;
            };

            resultsObj.OHQ_audio['toneTest_' + (controlPlayCount * 2) + '000'].play();
            resultsObj.OHQ_audio['toneTest_' + (controlPlayCount * 2) + '000'].loop = true;
        } else {
            resultsObj.OHQ_audio['toneTest_' + (controlPlayCount * 2) + '000'].pause();
            resultsObj.OHQ_audio['toneTest_' + (controlPlayCount * 2) + '000'].loop = false;
        };
    };


    //// OBJECT PROPERTY TWEAK
var objectPropPlayCount = 0;
var objectPropWords = [ 'Puff', 'Shout', 'Take'];

    stage.objectPropPlayNext = function(){

        if(objectPropPlayCount <= 2){


            if(objectPropPlayCount > 0){
                var tempNum = (objectPropPlayCount - 1)
                resultsObj.OHQ_audio['speechTest_Word_' + (objectPropWords[tempNum])].pause();
                resultsObj.OHQ_audio['speechTest_Word_' + (objectPropWords[tempNum])].loop = false;
            };

            resultsObj.OHQ_audio['speechTest_Word_' + (objectPropWords[objectPropPlayCount])].play();
            resultsObj.OHQ_audio['speechTest_Word_' + (objectPropWords[objectPropPlayCount])].loop = true;

        } else {
           var tempNum = (objectPropPlayCount - 1)
                resultsObj.OHQ_audio['speechTest_Word_' + (objectPropWords[tempNum])].pause();
                resultsObj.OHQ_audio['speechTest_Word_' + (objectPropWords[tempNum])].loop = false;
        };
                    objectPropPlayCount++;

    };


    //// PRELOAD: AUTO JS
    
var preloadPlayCount = 0;
var preloadWords = [ 'Bean', 'Chalk', 'Goose'];
    resultsObj.OHQ_audio.speechTest_Word_Bean.preload = 'auto';
    resultsObj.OHQ_audio.speechTest_Word_Chalk.preload = 'auto';
    resultsObj.OHQ_audio.speechTest_Word_Goose.preload = 'auto';
    

    stage.preloadPlayNext = function(){

        if(preloadPlayCount <= 2){


            if(preloadPlayCount > 0){
                var tempNum = (preloadPlayCount - 1)
                resultsObj.OHQ_audio['speechTest_Word_' + (preloadWords[tempNum])].pause();
                resultsObj.OHQ_audio['speechTest_Word_' + (preloadWords[tempNum])].loop = false;
            };

            resultsObj.OHQ_audio['speechTest_Word_' + (preloadWords[preloadPlayCount])].play();
            resultsObj.OHQ_audio['speechTest_Word_' + (preloadWords[preloadPlayCount])].loop = true;

        } else {
           var tempNum = (preloadPlayCount - 1)
                resultsObj.OHQ_audio['speechTest_Word_' + (preloadWords[tempNum])].pause();
                resultsObj.OHQ_audio['speechTest_Word_' + (preloadWords[tempNum])].loop = false;
        };
                    preloadPlayCount++;

    };


    //// SRC CHANGE
    stage.curToneSrc = '/wp-content/plugins/agx-hearing-test/sounds/SpeechTest_OHQ_Noise_Lvl1.mp3';
    var srcCurTone = 0;
    var toneAudio = new Audio('/wp-content/plugins/agx-hearing-test/sounds/ToneTest_OHQ_2000_Hz.mp3');
    
   
    
    
    stage.srcPlayNext = function(){
        
        if(srcCurTone < 10){
                    srcCurTone += 2;

        toneAudio.src = '/wp-content/plugins/agx-hearing-test/sounds/ToneTest_OHQ_' + srcCurTone + '000_Hz.mp3';
        toneAudio.play();
        } else {
            toneAudio.pause();
        }
        
        
    }

    //// DOUBLE STREAMING

var notPlaying = true;

stage.doublePlayNext = function(){
    
 
    
    
    
    if(notPlaying){
        document.querySelector('#doubleBGNoise').play();
        document.querySelector('#doubleBGNoise').loop = true;
        
        document.querySelector('#doubleWord').play();
        document.querySelector('#doubleWord').loop = true;
        notPlaying = false;
    } else {
      
        
        doubleBGNoise.pause();
        document.querySelector('#doubleBGNoise').loop = false;
        
        doubleWord.pause();
        document.querySelector('#doubleWord').loop = false;
        
        notPlaying = true;
    }
    
}
     END: Audio Test Section */


    /* START: Modal Functionality */
    stage.cta_text = document.querySelector('#cta_text').textContent;
    stage.cta_url = document.querySelector('#cta_url').textContent;

    resultsObj.cta_text = stage.cta_text;
    resultsObj.cta_url = stage.cta_url;

    // Modal Classes
    stage.modalClass = 'ohq-modal';
    stage.modalBtnOpen = 'btn-open';
    stage.modalBtnClose = 'btn-close';

    // Node
    stage.modal = document.querySelector('.ohq-modal');



    console.log(document.querySelector('#OHQ_test'));    
    document.querySelector('#OHQ_test').addEventListener('click', openOHQ, false);

    function openOHQ() {
        document.querySelector('#ohq-container').style.display = 'block';
        document.querySelector('#ohq-overlay-parent').style.display = 'block';
        var test_iOS = is_iOS();
        
        
        
        if(test_iOS){
            console.log('is_iOS came back true: running pre-play actions');
            resultsObj.OHQ_audio.speechTest_Master_lvl1.play();
    resultsObj.OHQ_audio.speechTest_Master_lvl1.pause();
            resultsObj.OHQ_audio.speechTest_Master_lvl2.play();
    resultsObj.OHQ_audio.speechTest_Master_lvl2.pause();
            resultsObj.OHQ_audio.speechTest_Master_lvl3.play();
    resultsObj.OHQ_audio.speechTest_Master_lvl3.pause();
                     };
        $state.go('stage.intro');
        
        document.querySelector('body').style.overflow = 'hidden';
    }
function is_iOS () {
    /*
        Returns whether device agent is iOS Safari
    */
    
    console.log(navigator.userAgent);
    
    var ua = navigator.userAgent;
    var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    var webkitUa = !!ua.match(/WebKit/i);

    return webkitUa && iOS && !ua.match(/CriOS/i);
    
    //return typeof webkit !== 'undefined' && iOS && webkit && !ua.match(/CriOS/i);
};
    ///////////////////////////////////////////////////////////////
    // ::AGXHearing.com::START AGX Hearing Floating Header Workaround 
    ///////////////////////////////////////////////////////////////

    /* headerEl = document.querySelector('.mk-header');
  headerStyles = window.getComputedStyle(headerEl, null);

  themePageEl = document.querySelector('#theme-page');
  themePageStyles = window.getComputedStyle(themePageEl, null);
  starterZIndex = headerStyles.zIndex;

  console.log(headerEl); */

    ///////////////////////////////////////////////////////////////
    // ::AGXHearing.com::END AGX Hearing Floating Header Workaround 
    ///////////////////////////////////////////////////////////////    


    // Toggle between stage-up and button
    stage.updateDisplay = function() {
        // var testClass, themePageZIndex, tempHeaderIndex;

        document.querySelector('#ohq-container').style.display = 'none';
        document.querySelector('#ohq-overlay-parent').style.display = 'none';

        console.log('ohq-modal-active ===> ohq-modal');
        $state.go('stage.intro');
        resultsObj.restartTest();

        document.querySelector('body').style.overflow = '';

        /*  themePageZIndex = themePageStyles.zIndex;
    tempHeaderIndex = (themePageZIndex - 1);

    console.log('headerEL is: ' + headerEl +
      'starterZIndex: ' + starterZIndex +
      '\nthemePageZIndex: ' + themePageZIndex + 
      '\ntempHeaderIndex: ' + tempHeaderIndex); */

        ///////////////////////////////////////////////////////////////
        // ::AGXHearing.com::START AGX Hearing Floating Header Workaround 
        ///////////////////////////////////////////////////////////////

        /*
      if(headerEl) {
        headerEl.style.zIndex = tempHeaderIndex;
        var nodeList = document.querySelectorAll('.mk-page-section-wrapper');

        console.log(nodeList);
        nodeList.forEach(function(cur) {
          cur.style.zIndex = 10; 
        });
      } else {
        console.log('headerEl returned false. HeaderEl was ' + headerEl);
      }; */

        /*
      if(headerEl) {
        console.log(starterZIndex);
        headerEl.style.zIndex = starterZIndex;
      } else {
        console.log('headerEl returned false. HeaderEl was ' + headerEl);
      };
      */

        ///////////////////////////////////////////////////////////////
        // ::AGXHearing.com::END AGX Hearing Floating Header Workaround 
        ///////////////////////////////////////////////////////////////

    };

    /* END: Modal Functionality */


    stage.testBool = function(stageName) {
        var returnBool;

        switch(stageName) {
            case 'intro':
                returnBool = $state.$current.includes['stage.intro'];
                break;
            case 'quiz':
                returnBool = $state.$current.includes['stage.quiz'];
                break;
            case 'volume':
                returnBool = $state.$current.includes['stage.volume'];
                break;
            case 'tone':
                returnBool = $state.$current.includes['stage.toneTest'];
                break;
            case 'speech':
                returnBool = $state.$current.includes['stage.speechTest'];
                break;
            case 'results':
                returnBool = $state.$current.includes['stage.results'];
                break;
            case 'exit':
                returnBool = $state.$current.includes['stage.exit'];
                break;
            default:
                console.log('stage.testBool no match');
                break;
        }

        return returnBool;
    }

    stage.restart = function() {
        resultsObj.restartTest();
        $state.go('stage.intro');
    };


    /*
  stage.loadForm = function() {

    console.log('running test form');

    var resultsMessage = document.querySelector(".nf-quiz-message");
    var quizResults = document.querySelector(".nf-hearing-results");
    var toneResults = document.querySelector(".nf-tone-results");
    var speechResults = document.querySelector(".ninja-forms-field.nf-speech-results.nf-element");

    resultsMessage.onchange = function() {
      console.log('change noted');
    };

    console.log(resultsMessage);
    var newValue = '<p style="background: blue; width: 70%; padding: 1rem;" >70%</p>';
    jQuery( '.nf-hearing-results' ).val( newValue ).trigger( 'change' );
    console.log(resultsMessage.value);
  }
  */

}])