
// CONTROLLERS
angular.module('formApp').controller('stageController', ['$scope', '$state', function ($scope,  $state) {
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
        default:
            console.log('stage.testBool no match');
            break;
                    }
        return returnBool;
                    }
        
}])