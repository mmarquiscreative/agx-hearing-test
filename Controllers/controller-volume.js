angular.module('formApp').controller('volumeController', ['$scope', function($scope) {
  var volume = this;

  var noise = new Audio('/sounds/noise.wav');
  
  noise.currentTime = 0;
  noise.loop = true;
  // commenting out until I can get it to stop when you leave this stage
  //noise.play();

  function stopNoise() {
    noise.loop = false;
    noise.stop();
  };
}]);