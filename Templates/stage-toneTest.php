<div class="stage-tone-test" ng-controller="toneTestController as tone">
    <div class="header">
       <div ng-hide="tone.startTest">
          <p class="lead-text">This section will help identify which pitches you might have trouble hearing.</p>
           <button ng-click="tone.startToneTest()" class="btn-submit">Start Audio</button>
       </div>
        <div ng-show="tone.startTest">
        <div ng-hide="tone.testCompleted">
            <div class="tone-test-body">
                <p class="lead-text">Do you hear the tone playing?</p>
                <div class="tone-test-frequencies">
                    <p ng-attr-class="freq-2000hz {{tone.curClass[0]}}">Tone 1</p>
                    <p ng-attr-class="freq-4000hz {{tone.curClass[1]}}">Tone 2</p>
                    <p ng-attr-class="freq-6000hz {{tone.curClass[2]}}">Tone 3</p>
                    <p ng-attr-class="freq-8000hz {{tone.curClass[3]}}">Tone 4</p>
                    <p ng-attr-class="freq-10000hz {{tone.curClass[4]}}">Tone 5</p>
                </div>
            </div>

            <div class="btns-yn">
                <button ng-hide="tone.buttonHide_YN" class="btn-yn-yes" ng-click="tone.nextTone(true)" ng-disabled="{{tone.disabledBool}}">Yes</button>
                <button ng-hide="tone.buttonHide_YN" class="btn-yn-no" ng-click="tone.nextTone(false)" ng-disabled="{{tone.disabledBool}}">No</button>
            </div>

            <div class="tone-test-tones">
                <audio id="toneAudio" ng-src="{{tone.curToneObj.srcPath}}"></audio>
            </div>

        </div>

        <!-- Test Completed Section -->
        <div ng-show="tone.testCompleted">
            <h3>Looks like you've already completed this section. Would you like to:</h3>
            <button ng-click="tone.resetStage()" class="btn-submit">Re-take quiz?</button>
            <p>— Or —</p>
            <button ui-sref="stage.speechTest" class="btn-submit">Go to next section?</button>
        </div>

    </div>
</div>
    </div>

