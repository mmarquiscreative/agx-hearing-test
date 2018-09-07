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
  echo '
    <div id="agx-hearing-test" ng-app="formApp">
      <div class="container" ng-controller="stageController as stage">
        <button ui-sref="stage.exit" ng-class="stage.testBool(&#39;results&#39;) ? &#39;btn-exit&#39; : &#39;hidden&#39;">X</button>
        <button ng-click="" ng-class="stage.testBool(&#39;results&#39;) ? &#39;hidden&#39; : &#39;btn-exit&#39;">X</button>

        <!-- views will be injected here -->
        <div ui-view></div>

      </div>
    </div>
  ';

}

add_filter('wp_footer','agx_hearing_test');




