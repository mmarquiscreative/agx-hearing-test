// MODULE
var formApp = angular.module('formApp', ['ngAnimate', 'ui.router'])

//CONFIG
.config(function($stateProvider, $urlRouterProvider){
    
    $stateProvider
    
    // route to show our basic form
    .state('stage', {
        url: '/stage',
        templateUrl: 'stage.html',
        controller: 'stageController'
    })
    
    // nested states
    // each of these will have their own view
    // url will be nested (/stage/intro)
    
    .state('stage.intro', {
        url: '/intro',
        templateUrl: 'stage-intro.html'
    })
    
    // url will be /stage/quiz
    
    .state('stage.quiz', {
        url: '/quiz',
        templateUrl: 'stage-quiz.html'
    })
    
    // url will be /stage/volume
    
    .state('stage.volume', {
        url: '/volume',
        templateUrl: 'stage-volume.html'
    })
    
    // url will be /stage/toneTest
    
    .state('stage.toneTest', {
        url: '/toneTest',
        templateUrl: 'stage-toneTest.html'
    })
    
    // url will be /stage/speechTest
    
    .state('stage.speechTest', {
        url: '/speechTest',
        templateUrl: 'stage-speechTest.html'
    })
    
    // url will be /stage/results
    
    .state('stage.results', {
        url: '/results',
        templateUrl: 'stage-results.html'
    })
    
    // catch all route
    // send users to the form page
    
    $urlRouterProvider.otherwise('/stage/intro');
})

// CONTROLLERS
.controller('stageController', function ($scope) {
    
    // all form data will be stored in this object
    
    $scope.formData = {};
    
    // function to process the form
    
    $scope.processForm = function(){
        alert('Awesome!');
    };
    
    
});



