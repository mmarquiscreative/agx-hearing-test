angular.module('formApp').controller('volumeController', ['$scope', 'resultsObj', '$state', function ($scope, resultsObj, $state) {
    var volume = this;
    volume.tonePlaying = false;
    volume.nextButton = false;
    resultsObj.OHQ_audio.volCalib.preload = 'auto';

    // resultsObj.OHQ_audio.volCalib.volume = resultsObj.globalVolume;

    resultsObj.OHQ_audio.volCalib.pause();
    volume.startNoise = function(){
        
        resultsObj.OHQ_audio.volCalib.loop = true;
        resultsObj.OHQ_audio.volCalib.play();
        volume.tonePlaying = true;
        volume.nextButton = true;

    }
    
    console.log(resultsObj.OHQ_audio.volCalib);

document.querySelector('#x_btn_exit').addEventListener('click', function(){
    
});
    
    volume.stopNoise = function(){
        console.log('running stopNoise');
        resultsObj.OHQ_audio.volCalib.pause();
        volume.tonePlaying = false;

    }


    /* var noise = new Audio('/sounds/Speech_Bean.mp3');

  noise.currentTime = 0;
noise.loop = true;
  // commenting out until I can get it to stop when you leave this stage
  noise.play();
noise.preload = 'none';
  volume.stopNoise = function(){
      setTimeout(function(){
        $scope.$apply(function(){
            pauseAudio();
        });
        }, 1);
};


    function pauseAudio() {
        // noise.loop = false;

// noise.currentTime = 0;
        console.log('pauseAudio Run');
                console.log(noise.paused);

        noise.pause();

            console.log(noise.paused);
        console.log(noise);
};*/

}]);