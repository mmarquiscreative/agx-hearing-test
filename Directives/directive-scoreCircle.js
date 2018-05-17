angular.module('formApp').directive('scoreCircle', function(){
    
    return {
        restrict: 'E',
        scope: {
            circleid: '=circleId'
        },
        template: '<!-- Circle results --><div class="radial-progress {{circleid}} "><div class="circle"><div class="mask full"><div ng-style="{\'transform\': circleid.fillRotation, \'background-color\': circleid.color }" class="fill"></div><div ng-style="{\'background-color\': \'red\' }" class="fill fix"></div></div><div ng-style="{\'transform\': circleid.halfRotation, \'border\': circleid.border}" class="mask half"><div ng-style="{\'transform\': circleid.fillRotation,  \'background-color\': circleid.color }" class="fill"></div></div><div class="mask full"><div ng-style="{\'transform\': circleid.fillRotation, \'background-color\': circleid.color }" class="fill"></div><div ng-style="{\'transform\': circleid.halfRotation }" class="mask half"><div ng-style="{\'transform\': circleid.fillRotation,  \'background-color\': circleid.color }" class="fill"></div></div></div><div class="shadow"></div></div><div class="inset"></div></div><!-- END Circle results -->'
     }
});
