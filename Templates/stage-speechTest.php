<div ng-controller="SpeechTest as speech" class="stage-speech-test">
  <div class="header">
    <div class="speech-test-body" ng-hide="speech.testCompleted">
      <div ng-show="speech.startTestDisabled" class="answerGrid">
        <p class="lead-text">Click on the 3 words you heard (in order):</p>
        <data-speech-test-btn></data-speech-test-btn>
        <button ng-disabled="speech.ansDisabled" class="btn-submit" ng-click="speech.addAnswer('? ? ?')">Skip Word</button>
      </div>

      <div class="speech-current-answers">
        <span style="font-weight: regular; line-height: 100%; margin: 0 3%; padding: 0;" ng-repeat="curAns in speech.answerInput track by $index">{{speech.answerNumberWords[$index] + ' Word: '}}&nbsp;<strong>{{curAns}}</strong>&nbsp;</span>
      </div>

      <div ng-show="!speech.startTestDisabled" >
        <h2>This section is broken into 4 rounds.</h2>
        <p class="lead-text" ng-disabled="speech.startTestDisabled">1. In each round you'll hear three words spoken. <br/><br/>2. After you hear them, click on the 3 words you heard (in order). <br/><br/>3. The background noise increases for each round, so if at any point you aren't able to hear a word, you can click on the 'Skip Word' button.<br/><br/></p>
        <button ng-disabled="speech.startTestDisabled" ng-click="speech.roundAudio()" class="btn-submit" id="btn-start-speech-in-noise">Start Test</button>
      </div>  
    </div>

    <!-- Test Completed Section -->
    <div ng-show="speech.testCompleted">
      <h3>Looks like you've already completed this section. Would you like to:</h3>
      <button ng-click="speech.resetStage()" class="btn-submit">Re-take quiz?</button>
      <p>— Or —</p>
      <button ui-sref="stage.results" class="btn-submit">Go to next section?</button>
    </div>

    <div class="tone-test-tones">
      <!-- <audio id="bgNoise" ng-src="{{speech.bgNoiseSettings.srcPath}}"></audio> -->
    </div>
  </div>
</div>