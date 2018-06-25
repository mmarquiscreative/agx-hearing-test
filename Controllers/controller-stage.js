
// CONTROLLERS
angular.module('formApp').controller('stageController', ['$scope', '$state', 'resultsObj', function ($scope,  $state, resultsObj) {
    var stage = this;
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