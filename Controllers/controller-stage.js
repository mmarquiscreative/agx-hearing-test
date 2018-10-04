// CONTROLLERS
angular.module('formApp').controller('stageController', ['$scope', '$state', 'resultsObj', '$location', function ($scope,  $state, resultsObj, $location) {
    var stage = this;

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


    // Toggle between stage-up and button
    stage.updateDisplay = function() {
        console.log('Taesting ' + stage.modalClass);

        var testClass = stage.modalClass;

        if(testClass === 'ohq-modal') {
            /* document.querySelector('#ohq-container').style.display = 'block'; */
            stage.modalClass = 'ohq-modal-active';

            console.log('ohq-modal ===> ohq-modal-active');
            $state.go('stage.intro');

        } else if(testClass === 'ohq-modal-active') {
            /* document.querySelector('#ohq-container').style.display = 'hidden'; */
            stage.modalClass = 'ohq-modal';

            console.log('ohq-modal-active ===> ohq-modal');
            resultsObj.restartTest();

        } else {
            console.log('No match. Current style is ' + stage.modalClass);
        };
    };


    /* END: Modal Functionality */



    stage.testBool = function(stageName){
        var returnBool;




        switch(stageName){
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

    stage.restart = function(){
        resultsObj.restartTest();
        $state.go('^');
    };

    stage.loadForm = function(){

        console.log('running test form');

        var resultsMessage = document.querySelector("#nf-field-5");
        var quizResults = document.querySelector(".ninja-forms-field.nf-hearing-results.nf-element");
        var toneResults = document.querySelector(".ninja-forms-field.nf-tone-results.nf-element");
        var speechResults = document.querySelector(".ninja-forms-field.nf-speech-results.nf-element");
        resultsMessage.onchange = function(){
            console.log('change noted');
        };
        console.log(resultsMessage);



        resultsMessage.value = 'test';
        resultsMessage.textContent = 'test';
        resultsMessage.dispatchEvent(new Event('change'));



        console.log(resultsMessage.value);
    }

}])