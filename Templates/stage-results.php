<div ng-controller = "resultsController as results" class="stage-results">
    <div class="header">
        <h3>Your AGX<sup>&reg;</sup> Online Hearing Quiz Results</h3>
    </div>

    <div class="totals-container">
        <div class="totalResults">
			<!--
				<div class="total-circle-col">
					<score-circle circle-id="totalCircle" which-circle="results.totalScore"></score-circle>
				</div>
			-->

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

        <a class="btn-submit" ng-href="{{results.cta_url}}" >{{results.cta_text}}</a>
    </div>

<div class="results-body">
        <div class="results-row">
            <div class="results-col results-quiz">
                <p class="results-head">Environments in which you may struggle to hear:</p>

                <div class="score">
                    <div class="score-quiz">{{results.wrongAns.quizScore}}</div>
                </div>

                <div class="quiz-environments"><p class="environments-intro"><strong>Environments in which you may struggle to hear:</strong></p>
                    <p class="environment" ng-repeat="item in results.wrongAns.quizAns">{{item}}</p>
                </div>
            </div>

            <div class="results-col results-tone">
                <p class="results-head">Frequencies you may struggle to hear:</p>

                <div class="score">
                    <div class="score-tone">{{results.wrongAns.toneScore}}</div>
                </div>

                <div class="tone-environments"><p class="environments-intro"><strong>Frequencies you may struggle to hear:</strong></p>
                    <p class="environment" ng-repeat="item in results.wrongAns.toneAns">{{item}} Hz</p>
                </div>
            </div>

            <div class="results-col results-speech">
                <p class="results-head">Words you may struggle to hear:</p>

                <div class="score">
                    <div class="score-speech">{{results.wrongAns.speechScore}}</div>
                </div>

                <div class="speech-environments"><p class="environments-intro"><strong>Words you may struggle to hear:</strong></p>
                    <p class="environment" ng-repeat="item in results.wrongAns.speechAnsClean track by $index">{{item}}</p>
                </div>
            </div>
        </div></div> 
</div>