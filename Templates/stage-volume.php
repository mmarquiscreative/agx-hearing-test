<div class="stage-volume" ng-controller="volumeController as volume">
  <div class="volume-body">
    <h2 id="calVol">Calibrate your Volume</h2>
    <p class="lead-text">
    <p ng-hide="volume.nextButton" class="lead-text">Click the button below to begin playing the audio. (Headphones recommended)</p>
    <p ng-show="volume.nextButton" class="lead-text">Adjust the volume of your computer to play at a comfortable level. This will establish a baseline volume for the rest of the quiz. <br/><br/>Click the 'Next Step' button when ready.</p>
  </div>
  <!-- <audio id="volumeAudio" src="/wp-content/plugins/agx-hearing-test/sounds/noise.mp3" loop autoplay></audio> -->
  <div class="btns-yn">
    <button ng-hide="volume.nextButton" ng-click="volume.startNoise()" class="btn-submit" id="OHQ_Volume_Start"> Play Audio<span class="glyphicon glyphicon-circle-arrow-right"></span></button>
    <button ng-show="volume.nextButton" ng-click="volume.stopNoise()" ui-sref="stage.toneTest" class="btn-submit" id="OHQ_Volume_Next">Next Step <span class="glyphicon glyphicon-circle-arrow-right"></span></button>
  </div>
</div>