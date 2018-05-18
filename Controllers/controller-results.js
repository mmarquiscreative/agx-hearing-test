angular.module('formApp').controller('resultsController', ['$scope', 'resultsObj', function($scope, resultsObj){
    var results = this;

    results.wrongAns = resultsObj;

    

    results.wrongAns.speechAnsClean = removeDuplicates(results.wrongAns.speechAns);

    console.log(results.wrongAns.speechAnsClean);

    console.log(results.wrongAns.speechAns);
    
        results.score = 0;

    results.testRotate = 180;

    
    
results.totalScore = {
    name: 'totalScore',
    percentScore: 0,
    fillRotation: 'rotate(0deg)',
    fixRotation: 'rotate(0deg)',
    halfRotation: 'rotate(0deg)',
    halfFixRotation: 'rotate(0deg)',
    color: '#cf504e',
    border: '"' + ("solid " + results.color + " 1px") + '"'
}

results.quizScore = {
        name: 'quizScore',
    percentScore: 0,
    fillRotation: 'rotate(0deg)',
    fixRotation: 'rotate(0deg)',
    halfRotation: 'rotate(0deg)',
    halfFixRotation: 'rotate(0deg)',
    color: '#cf504e',
    border: '"' + ("solid " + results.color + " 1px") + '"'
}
    
results.toneScore = {
        name: 'toneScore',
percentScore: 0,
    fillRotation: 'rotate(0deg)',
    fixRotation: 'rotate(0deg)',
    halfRotation: 'rotate(0deg)',
    halfFixRotation: 'rotate(0deg)',
    color: '#cf504e',
    border: '"' + ("solid " + results.color + " 1px") + '"'
}
    
results.speechScore = {
        name: 'speechScore',
percentScore: 0,
    fillRotation: 'rotate(0deg)',
    fixRotation: 'rotate(0deg)',
    halfRotation: 'rotate(0deg)',
    halfFixRotation: 'rotate(0deg)',
    color: '#cf504e',
    border: '"' + ("solid " + results.color + " 1px") + '"'
}
    results.quizScore.percentScore = scoreToPercent(results.wrongAns.quizScore, results.wrongAns.quizPerfectScore);
    
    results.toneScore.percentScore = scoreToPercent(results.wrongAns.toneScore, results.wrongAns.tonePerfectScore);
    
    
    results.speechScore.percentScore = scoreToPercent(results.wrongAns.speechScore, results.wrongAns.speechPerfectScore);
    
    results.totalScore.percentScore = (results.quizScore.percentScore + results.toneScore.percentScore + results.speechScore.percentScore) / 3;
    
    
    rotateFill('totalScore');
    rotateFill('quizScore');
    rotateFill('toneScore');
    rotateFill('speechScore');

    
    function rotateFill(someObj){

        var rotation = percentToDegree(results[someObj].percentScore);
        
        Math.ceil(rotation);
        
        if(rotation >= 180){
            results[someObj].fillRotation = 'rotate(' + 180 + 'deg)';
            results[someObj].halfRotation = 'rotate(' + (rotation - 180) + 'deg)';
            results[someObj].fixRotation = 'rotate(' + (rotation/2) + 'deg)';
        } else {
            results[someObj].fillRotation = 'rotate(' + rotation + 'deg)';
            results[someObj].halfRotation = 'rotate(0deg)';
            results[someObj].fixRotation = 'rotate(' + (rotation/2) + 'deg)';
        };

        results[someObj].fixRotation = 'rotate(' + (Math.ceil((rotation/2))) + 'deg)';

        if(rotation <= 45){
            results[someObj].color = "#cf504e";
        } else if (45 < rotation && rotation <= 90){
            results[someObj].color = "#cf445f";
        } else if (90 < rotation && rotation <= 135){
            results[someObj].color = "#a93d59";
        } else if (135 < rotation && rotation <= 180){
            results[someObj].color = "#9d4283";
        } else if (180 < rotation && rotation <= 225){
            results[someObj].color = "#8a4f9c";
        } else if (225 < rotation && rotation <= 270){
            results[someObj].color = "#7065ad";
        } else if (270 < rotation && rotation <= 315) {
            results[someObj].color = "#747ada";
        } else if (315 < rotation && rotation < 360){
            results[someObj].color = "#5b92f1";
        } else if (rotation === 360){
            results[someObj].color = "#25aae1";
        };

        console.log(results[someObj].name + ": ");        console.log(results[someObj]);

    };
    
    function scoreToPercent(actualScore, perfectScore){
        var returnPercent = 100 - ((actualScore/perfectScore) * 100);
        return returnPercent;
    }
    
    function percentToDegree(percentNum){
        var returnDegree = (percentNum/100) * 360;
        return returnDegree;
    }
        
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
   
}])