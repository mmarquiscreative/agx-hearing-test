angular.module('formApp').controller('resultsController', ['$scope', 'resultsObj', function($scope, resultsObj){
    var results = this;
    
    results.wrongAns = resultsObj;
}])