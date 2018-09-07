//// Quiz CONTROLLER ////
angular.module('formApp').controller('quizController', ['$scope', '$state', 'resultsObj', function ($scope, $state, resultsObj) {


    $scope.$state = $state;

    // Uses keyword to keep $scope specific to this controller
    var quiz = this;



    // Test Completed: START ----> //
    quiz.testCompleted = resultsObj.testComplete('quiz');

    quiz.resetStage = function(){
        resultsObj.quizScore = 0;
        resultsObj.quizAns = [];
        resultsObj.quizCompleted = false;
        quiz.testCompleted = resultsObj.testComplete('quiz');
    };
    // Test Completed: END ----| //


    //// ---- VARIABLES ---- ////


    // Current Question Counter
    quiz.curQuestion = 0;

    // Array of the progress bubble classes -- current or normal
    quiz.progClass = new Array("prog-current", "prog-bubble", "prog-bubble", "prog-bubble");

    // Array of question/answer objects
    quiz.questions = [{
        question: 'Do you ever have difficulty understanding people with high pitched speaking voices?',
        answer: false,
        environment: 'High pitched voices'
    },{
        question: 'Do you ever have a hard time understanding people over the phone?',
        answer: false,
        environment: 'Telephone conversations'
    },{
        question: 'Do you ever have trouble keeping up with conversations in noisy restaurants?',
        answer: false,
        environment: 'Noisy restaurants'
    },{
        question: 'Are you ever told that you set the television volume too loud?',
        answer: false,
        environment: 'Television shows'
    }]


    //// ---- FUNCTIONS ---- ////

    // Process answer and move to next question
    quiz.nextQuestion = function(someBool){

        // 1. Change current progress bubble back to normal
        quiz.progClass[quiz.curQuestion] = "prog-bubble";

        // 2. If answer was a yes--i.e. i do have trouble hearing--add 1 to the resultsObj.quizAns counter
        if(someBool){
            resultsObj.quizScore++;
            resultsObj.quizAns.push( quiz.questions[quiz.curQuestion].environment)
        };

        // 3. Save answer to corresponding question/answer object
        quiz.questions[quiz.curQuestion].answer = someBool;

        // 3. Increase current question counter by 1
        quiz.curQuestion++;

        // 4. Set the new current progress bubble to 'current'
        quiz.progClass[quiz.curQuestion] = "prog-current";

        if(quiz.curQuestion >= quiz.questions.length){
            $state.go('^.volume');    
            resultsObj.quizCompleted = true;
        };
    }




}])