
angular.module('formApp').directive('speechTestBtn', function(){
    
    return {
        restrict: 'E',
        template: '<button ng-repeat="number in speech.answerStrings"  ng-disabled="speech.ansDisabled" ng-click="speech.addAnswer(number)" id="{{\'OHQ_Speech_\' + number}}" class="speechBtn" speechtest >{{number}}</button>'
    }
})
