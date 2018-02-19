//CONFIG
angular.module('formApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    
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
        templateUrl: 'stage-quiz.html',
        controller: 'quizController'
    })
    
    // url will be /stage/volume
    
    .state('stage.volume', {
        url: '/volume',
        templateUrl: 'stage-volume.html',
        controller: 'volumeController'
    })
    
    // url will be /stage/toneTest
    
    .state('stage.toneTest', {
        url: '/toneTest',
        templateUrl: 'stage-toneTest.html',
        controller: 'toneTestController'
    })
    
    // url will be /stage/speechTest
    
    .state('stage.speechTest', {
        url: '/speechTest',
        templateUrl: 'stage-speechTest.html',
        controller: 'SpeechTest'
    })
    
    // url will be /stage/results
    
    .state('stage.results', {
        url: '/results',
        templateUrl: 'stage-results.html'
    })
    
    // catch all route
    // send users to the form page
    
    $urlRouterProvider.otherwise('/stage/intro');
}])
