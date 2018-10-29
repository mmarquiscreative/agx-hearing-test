<div ng-controller = "resultsController as results" class="stage-results">
  <div class="header">
    <h3>Your AGX<sup>&reg;</sup> Online Hearing Quiz Results</h3>
  </div>

  <div class="totals-container">
    <div class="totalResults">
      <p id="totalCta">{{results.totalScore.copy}}</p>
    </div>

    <div class="totals-divider"></div>

    <div class="results-summary">
      <div class="summary-col">
        <p><strong>Hearing Quiz</strong></p>
        <p class="mobile-summary-score">{{results.quizScore.percentScore}}%</p>
        <score-circle circle-id="quizCircle" which-circle="results.quizScore"></score-circle>
      </div>

      <div class="summary-col">
        <p><strong>Tone Quiz</strong></p>
        <p class="mobile-summary-score">{{results.toneScore.percentScore}}%</p>
        <score-circle circle-id="toneCircle" which-circle="results.toneScore"></score-circle>
      </div>

      <div class="summary-col">
        <p><strong>Speech Quiz</strong></p>
        <p class="mobile-summary-score">{{results.speechScore.percentScore}}%</p>
        <score-circle circle-id="speechCircle" which-circle="results.speechScore"></score-circle>
      </div>
    </div>

    <a class="btn-submit" id="OHQ_Results_CTA" ng-href="{{results.cta_url}}" >{{results.cta_text}}</a>
  </div>

  <div class="results-body">
    <div class="results-row">
      <div class="results-col results-quiz">
        <p class="results-head">Environments in which you may struggle to hear:</p>

        <div class="quiz-environments">
          <p class="environment" ng-repeat="item in results.wrongAns.quizAns">{{item}}</p>
        </div>
      </div>

      <div class="results-col results-tone">
        <p class="results-head">Frequencies you may struggle to hear:</p>

        <div class="tone-environments">
          <p class="environment" ng-repeat="item in results.wrongAns.toneAns">{{item}} Hz</p>
        </div>
      </div>

      <div class="results-col results-speech">
        <p class="results-head">Words you may struggle to hear:</p>

        <div class="speech-environments">
          <p class="environment" ng-repeat="item in results.wrongAns.speechAnsClean track by $index">{{item}}</p>
        </div>
      </div>
    </div>
  </div> 
</div>