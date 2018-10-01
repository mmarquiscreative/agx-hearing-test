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
    <div id="ohq-container" class="hidden" ng-class="stage.modalClass">
	  <div ng-class="stage.testBool(\'exit\') ? \'visible\' : \'hidden\'">';
	
	echo do_shortcode('[ninja_form id=2]');
	
	echo '</div>
      <!-- modular display buttons -->
	  <button ng-click="stage.updateDisplay()"	   ng-class="stage.testBool(\'exit\') ? \'hidden\' : \'btn-exit\'">X</button>
		  <button ui-sref="stage.exit" 			   ng-class="stage.testBool(\'results\') ? \'btn-exit\' : \'hidden\'">X</button>
	  <button ng-click="stage.updateDisplay()"     ng-class="stage.testBool(\'exit\') ? \'btn-exit\' : \'hidden\'">X</button>
	 
      <!-- views will be injected here -->
      <div ui-view></div>
      </div>
    </div>
    </div>
      </div>';
	
}

add_shortcode( 'agxtest', 'agx_hearing_test' );
// add_filter('wp_footer','agx_hearing_test');
// add_filter('wp_agx_quiz_btn', 'agx_hearing_test');
