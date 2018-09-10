<div class="stage-volume" ng-controller="volumeController as volume">
  <div class="volume-body">
        <h2 class="lead-text">Calibrate your Volume</h2>
        <p class="lead-text">
        <p ng-hide="volume.tonePlaying" class="lead-text">Click the button below to begin playing the audio. (Headphones recommended)</p>
        <p ng-show="volume.tonePlaying" class="lead-text">Adjust the volume of your computer to play at a comfortable level. This will establish a baseline volume for the rest of the quiz. <br/><br/>Click the 'Next Step' button when ready.</p>
    </div>
     <audio id="volumeAudio" src="../sounds/noise.mp3" loop autoplay></audio>
         <div class="btns-yn">
     <button ng-hide="volume.tonePlaying" ng-click="volume.startNoise()" ui- class="btn-yn-vol-tone"> Play Audio<span class="glyphicon glyphicon-circle-arrow-right"></span></button>
    	<button ng-show="volume.tonePlaying" ng-click="volume.stopNoise()" ui-sref="stage.toneTest" class="btn-yn-vol-submit">Next Step <span class="glyphicon glyphicon-circle-arrow-right"></span></button>
    </div>