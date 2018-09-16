angular.module('formApp').controller('modalController', ['$scope', function($scope) {
  var pop = this;

  pop.modalClass = 'ohq-modal';
  pop.modalBtnOpen = 'btn-open';
  pop.modalBtnClose = 'btn-close';
  pop.modal = document.querySelector('.ohq-modal');

  pop.updateDisplay = function() {
    console.log(pop.modalClass);
    var testClass = pop.modalClass;

    if(testClass === 'ohq-modal') {
      pop.modalClass = 'ohq-modal-active';
      console.log('testing');
    } else if(testClass === 'ohq-modal-active') {
      pop.modalClass = 'ohq-modal';
    } else {
      console.log('No match. Current style is ' + pop.modalClass);
    }

    console.log(pop.modalClass);
  }

}]);