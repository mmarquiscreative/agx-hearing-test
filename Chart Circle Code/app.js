var formApp = angular.module('formApp', [])

.controller('chartController', ['$scope', function ($scope){
    var chart = this;
    
    chart.score = 0;
    
    chart.testRotate = 180;
   
       
    chart.fillRotation = 'rotate(0deg)';
    chart.fixRotation = 'rotate(0deg)';
    chart.halfRotation= 'rotate(0deg)';
    chart.halfFixRotation = 'rotate(0deg)';
    
    chart.color = '#cf504e';
    chart.border = '"' + ("solid" + chart.color + "1px") + '"';
    chart.rotateFill = function(){

        var rotation = percentToDegree(chart.score);
       
        if(rotation >= 180){
            chart.fillRotation = 'rotate(' + 180 + 'deg)';
            chart.halfRotation = 'rotate(' + (rotation - 180) + 'deg)';
            chart.fixRotation = 'rotate(' + (rotation/2) + 'deg)';
        } else {
            chart.fillRotation = 'rotate(' + rotation + 'deg)';
            chart.halfRotation = 'rotate(0deg)';
            chart.fixRotation = 'rotate(' + (rotation/2) + 'deg)';
        };
        
        
        if(rotation <= 45){
            chart.color = "#cf504e";
        } else if (45 < rotation && rotation <= 90){
            chart.color = "#cf445f";
        } else if (90 < rotation && rotation <= 135){
            chart.color = "#a93d59";
        } else if (135 < rotation && rotation <= 180){
            chart.color = "#9d4283";
        } else if (180 < rotation && rotation <= 225){
            chart.color = "#8a4f9c";
        } else if (225 < rotation && rotation <= 270){
            chart.color = "#7065ad";
        } else if (270 < rotation && rotation <= 315){
            chart.color = "#747ada";
        } else if (315 < rotation && rotation < 360){
            chart.color = "#5b92f1";
        } else if (rotation === 360){
            chart.color = "#25aae1";
        };
           
       
        console.log('base rotation: ' + rotation);
        console.log('fill rotation: ' + chart.fillRotation);
        console.log('halfRotation: ' + chart.halfRotation);
        console.log(document.querySelector('.fill').style);

        console.log(angular.element(document.querySelector('.mask.half'))[0].style);
    };
    function percentToDegree(percentNum){
        var returnDegree = (percentNum/100) * 360;
        return returnDegree;
    }
} ])