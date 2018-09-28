<?php
/*
  Plugin Name: AGX Hearing Test
  Version: 1.0.0
  License: GPLv3 or later
*/


define ("DIR", __FILE__);

require_once 'scripts.php';
// require_once 'wp/template.php';



function agx_hearing_test($content) {
  echo '<div id="agx-ohq" ng-app="formApp">
      <div ng-controller="stageController as stage">
  
   <button ng-click="stage.updateDisplay()" class="btn-ohq-modal" ng-class="stage.modalBtnOpen">Start Quiz</button>
   
   <!-- Modal pop-up -->
    <div id="ohq-container" ng-class="stage.modalClass">
     
      <!-- doesn\'t currently have access to testBool function -->
      <button ui-sref="stage.exit" ng-class="stage.testBool(\'results\') ? \'btn-exit\' : \'hidden\'">X</button>
      <button ng-click="stage.updateDisplay()" ng-class="stage.testBool(\'results\') ? \'hidden\' : \'btn-exit\'">X</button>

      <!-- views will be injected here -->
      <div ui-view>
      </div>
    </div>
    </div>
      </div>';
	

}

add_shortcode( 'agxtest', 'agx_hearing_test' );
// add_filter('wp_footer','agx_hearing_test');
// add_filter('wp_agx_quiz_btn', 'agx_hearing_test');
