 <div ng-controller="quizController as quiz" class="stage-quiz">
  <div class="header">
   <div ng-hide="quiz.testCompleted">
    <div class="prog-bar-main">
      <div ng-class="quiz.progClass[0]"></div>
      <div ng-class="quiz.progClass[1]"></div>
      <div ng-class="quiz.progClass[2]"></div>
      <div ng-class="quiz.progClass[3]"></div>     
    </div>

    <div class="quiz-body">
      <p class="quiz-question-text">{{quiz.questions[quiz.curQuestion].question}}</p>
    </div>

    <div ng-hide="quiz.curQuestion >= quiz.questions.length" class="btns-yn">
      <button  ng-click="quiz.nextQuestion(true)" class="btn-yn-yes">Yes</button>
      <button ng-click="quiz.nextQuestion(false)" class="btn-yn-no">No</button>
    </div>
    
    <!-- <button ng-show="quiz.curQuestion >= quiz.questions.length" ui-sref="stage.volume" class="btn-submit">Next Step <span class="glyphicon glyphicon-circle-arrow-right"></span></button> -->
  </div>

  <!-- Test Completed Section -->
  <div ng-show="quiz.testCompleted">
    <h3>Looks like you've already completed this section. Would you like to:</h3>
    <button ng-click="quiz.resetStage()" class="btn-submit">Re-take quiz?</button>
    <p>— Or —</p>
    <button ui-sref="stage.volume" class="btn-submit">Go to next section?</button>
  </div>
       
</div>
