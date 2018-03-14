angular.module('formApp').controller('volumeController', ['$scope', function($scope) {
  var volume = this;
volume.noise = document.querySelector('#volumeAudio');
    volume.noise.volume = 0.5;
    
    volume.stopNoise = function(){
        volume.noise.pause();
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