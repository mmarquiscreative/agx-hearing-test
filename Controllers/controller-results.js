angular.module('formApp').controller('resultsController', ['$scope', 'resultsObj', function($scope, resultsObj){
    var results = this;
    
    results.wrongAns = resultsObj;
    
        function removeDuplicates (someArray) {
        var returnArray = [];
        
        someArray.forEach(function(cur){
            var testString = cur;
            var checkVar = returnArray.find(function(cur){
                return cur === testString;
            });
            console.log("testString is " + testString);
            console.log("cur is " + cur);
            console.log(checkVar);
            
            if(checkVar === undefined){
                returnArray.push(cur);
            }
        
        });
    
    return returnArray;
    }
    
    results.wrongAns.speechAnsClean = removeDuplicates(results.wrongAns.speechAns);
    
    console.log(results.wrongAns.speechAnsClean);
    
    console.log(results.wrongAns.speechAns);
}])