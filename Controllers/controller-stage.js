// CONTROLLERS
angular.module('formApp').controller('stageController', ['$scope', '$state', 'resultsObj', '$location', function ($scope,  $state, resultsObj, $location) {
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
	
}])