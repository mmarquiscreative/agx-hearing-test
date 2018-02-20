angular.module('formApp').controller('toneTestController', ['$scope', 'resultsObj', function ($scope, resultsObj) {
        var tone = this;
        $scope.curTone = 0;
        
        $scope.loopBool = new Array("true", "false", "false", "false", "false");
    
        $scope.toneClass = new Array("freqBlock ", "freqBlock", "freqBlock", "freqBlock", "freqBlock");
        
        $scope.toneAns = [];
        
        $scope.nextTone = function(someBool){
           $scope.loopBool[$scope.curTone] = "false";
            
            $scope.toneAns[$scope.curTone] = someBool;
            console.log($scope.toneAns[$scope.curTone]);
                       
            $scope.curTone++;
            
            $scope.loopBool[$scope.curTone] = "true";
        }
        
      }])