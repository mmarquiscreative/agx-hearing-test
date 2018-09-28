// CONTROLLERS
angular.module('formApp').controller('stageController', ['$scope', '$state', 'resultsObj', function ($scope,  $state, resultsObj) {
    var stage = this;
    
    /* START: Modal Functionality */


        // Modal Classes
        
        stage.modalClass = 'ohq-modal';
        stage.modalBtnOpen = 'btn-open';
        stage.modalBtnClose = 'btn-close';
        
        // Node
        stage.modal = document.querySelector('.ohq-modal');

        
        // Toggle between stage-up and button
        stage.updateDisplay = function() {
            
            console.log('Testing ' + stage.modalClass);
            
            var testClass = stage.modalClass;

            if(testClass === 'ohq-modal') {
                stage.modalClass = 'ohq-modal-active';
                console.log('ohq-modal ===> ohq-modal-active');
            } else if(testClass === 'ohq-modal-active') {
                stage.modalClass = 'ohq-modal';
                console.log('ohq-modal-active ===> ohq-modal');
                resultsObj.restartTest();
                $state.go('stage.intro');
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
        $state.go('^.intro');
    };

}])