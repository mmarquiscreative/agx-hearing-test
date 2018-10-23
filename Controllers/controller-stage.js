// CONTROLLERS
angular.module('formApp').controller('stageController', ['$scope', '$state', 'resultsObj', '$location', function ($scope,  $state, resultsObj, $location) {
  var stage, headerEl, headerStyles, themePageStyles, starterZIndex;
  stage = this;
    
  /* var OHQ_HTML = document.querySelector('#agx-ohq').innerHTML;
  document.querySelector('#top-of-page').outerHTML = OHQ_HTML + document.querySelector('#top-of-page').outerHTML;
  */ 

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

  document.querySelector('#OHQ_Button_Start').addEventListener('click', firstStage, false);
  
  function firstStage() {
    $state.go('stage.intro');
  }

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