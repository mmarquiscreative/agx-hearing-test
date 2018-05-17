var formApp = angular.module('formApp', [])

.controller('resultsController', ['$scope', function ($scope){
    var results = this;

    results.score = 0;

    results.testRotate = 180;


    results.fillRotation = 'rotate(0deg)';
    results.fixRotation = 'rotate(0deg)';
    'rotate(0deg)';
    results.halfRotation= 'rotate(0deg)';
    results.halfFixRotation = 'rotate(0deg)';

    results.color = '#cf504e';
    results.border = '"' + ("solid" + results.color + "1px") + '"';
    results.rotateFill = function(){

        var rotation = percentToDegree(results.score);

        if(rotation >= 180){
            results.fillRotation = 'rotate(' + 180 + 'deg)';
            results.halfRotation = 'rotate(' + (rotation - 180) + 'deg)';
        } else {
            results.fillRotation = 'rotate(' + rotation + 'deg)';
            results.halfRotation = 'rotate(0deg)';

        };

        results.fixRotation = 'rotate(' + (results.rotation/2) + 'deg)';

        if(rotation <= 45){
            results.color = "#cf504e";
        } else if (45 < rotation && rotation <= 90){
            results.color = "#cf445f";
        } else if (90 < rotation && rotation <= 135){
            results.color = "#a93d59";
        } else if (135 < rotation && rotation <= 180){
            results.color = "#9d4283";
        } else if (180 < rotation && rotation <= 225){
            results.color = "#8a4f9c";
        } else if (225 < rotation && rotation <= 270){
            results.color = "#7065ad";
        } else if (270 < rotation && rotation <= 315) {
            results.color = "#747ada";
        } else if (315 < rotation && rotation < 360){
            results.color = "#5b92f1";
        } else if (rotation === 360){
            results.color = "#25aae1";
        };



        console.log('base rotation: ' + rotation);
        console.log('fill rotation: ' + results.fillRotation);
        console.log('halfRotation: ' + results.halfRotation);
        console.log(document.querySelector('.fill').style);

        console.log(angular.element(document.querySelector('.mask.half'))[0].style);
    };
    function percentToDegree(percentNum){
        var returnDegree = (percentNum/100) * 360;
        return returnDegree;
    }
} ])