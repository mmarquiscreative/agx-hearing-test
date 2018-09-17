<?php
/*
  Plugin Name: AGX Hearing Test
  Version: 1.0.0
  License: GPLv3 or later
*/


define ("DIR", __FILE__);

require_once 'scripts.php';
// require_once 'wp/template.php';

<h2>Testing Testing Testing</h2>
    <?php echo do_shortcode('[ninja_form id=1]'); ?>
function agx_hearing_test($content) {
  echo '
    <div id="agx-ohq" ng-app="formApp">
      <h2>Some blurb about the AGX Online Hearing Quiz</h2>
      
      <div ng-controller="modalController as pop">
        <button class="btn-ohq-modal" ng-class="pop.modalBtnOpen" ng-click="pop.updateDisplay()">Take The Quiz</button>

        <div id="ohq-container" ng-class="pop.modalClass">
          <div ng-controller="stageController as stage">
            <!-- views will be injected here -->
            <div ui-view></div>
          </div>

          <button ui-sref="stage.exit" ng-class="stage.testBool(&#39;results&#39;) ? &#39;btn-exit&#39; : &#39;hidden&#39;">X</button>
          <button ng-click="pop.updateDisplay()" ng-class="stage.testBool(&#39;results&#39;) ? &#39;hidden&#39; : &#39;btn-exit&#39;">X</button>
        </div>
      </div>
    </div>
  ';
}

add_filter('wp_footer','agx_hearing_test');