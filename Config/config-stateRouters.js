//CONFIG
angular.module('formApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $location){

    $stateProvider

	// route on innit page load
    .state('pre-stage', {
        url: '',
        templateUrl: '/wp-content/plugins/agx-hearing-test/Templates/stage.php',
        controller: 'stageController',
        data: {
            testClass: 'stepNavItem active'
        }
    })
	
    // route to show our basic form
    .state('stage', {
        url: '/stage',
        templateUrl: '/wp-content/plugins/agx-hearing-test/Templates/stage.php',
        controller: 'stageController',
        data: {
            testClass: 'stepNavItem active'
        }
    })

    // nested states
    // each of these will have their own view
    // url will be nested (/stage/intro)

    .state('stage.intro', {
        url: '/intro',
        templateUrl: '/wp-content/plugins/agx-hearing-test/Templates/stage-intro.php'
    })

    // url will be /stage/quiz

    .state('stage.quiz', {
        url: '/quiz',
        templateUrl: '/wp-content/plugins/agx-hearing-test/Templates/stage-quiz.php',
        controller: 'quizController'
    })

    // url will be /stage/volume

    .state('stage.volume', {
        url: '/volume',
        templateUrl: '/wp-content/plugins/agx-hearing-test/Templates/stage-volume.php',
        controller: 'volumeController'
    })

    // url will be /stage/toneTest

    .state('stage.toneTest', {
        url: '/toneTest',
        templateUrl: '/wp-content/plugins/agx-hearing-test/Templates/stage-toneTest.php',
        controller: 'toneTestController'
    })

    // url will be /stage/speechTest

    .state('stage.speechTest', {
        url: '/speechTest',
        templateUrl: '/wp-content/plugins/agx-hearing-test/Templates/stage-speechTest.php',
        controller: 'SpeechTest'
    })

    // url will be /stage/results

    .state('stage.results', {
        url: '/results',
        templateUrl: '/wp-content/plugins/agx-hearing-test/Templates/stage-results.php',
        controller: 'resultsController'
    })

    // url will be /stage/exit

    .state('stage.exit', {
      url: '/exit',
      templateUrl: '/wp-content/plugins/agx-hearing-test/Templates/stage-exit.php',
      controller: 'exitController'
    })

    // catch all route
    // send users to the form page

	$urlRouterProvider.otherwise('/pre-stage');
	 $urlRouterProvider.when('/pre-stage', '');
}])
