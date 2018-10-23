<?php

// Scripts
if(!is_admin()) {

	// Register scripts
	wp_register_script('angular', '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min.js', false, null);
	wp_register_script('jquery', '//code.jquery.com/jquery-3.3.1.min.js', false, null);
	wp_register_script('angular-ui-router', '//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.10/angular-ui-router.min.js', false, null);
	wp_register_script('angular-animate', '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-animate.min.js', false, null);
	wp_register_script('agx-hearing-test-module', plugins_url('app.js', __FILE__) );
	wp_register_script('agx-hearing-test-config', plugins_url('Config/config-stateRouters.js', __FILE__) );
	wp_register_script('agx-hearing-test-directive-speech', plugins_url('Directives/directive-speechBtn.js', __FILE__) );
	wp_register_script('agx-hearing-test-directive-score', plugins_url('Directives/directive-scoreCircle.js', __FILE__) );
	wp_register_script('agx-hearing-test-controller-stage', plugins_url('Controllers/controller-stage.js', __FILE__) );
	wp_register_script('agx-hearing-test-controller-quiz', plugins_url('Controllers/controller-quiz.js', __FILE__) );
	wp_register_script('agx-hearing-test-controller-volume', plugins_url('Controllers/controller-volume.js', __FILE__) );
	wp_register_script('agx-hearing-test-controller-tone', plugins_url('Controllers/controller-toneTest.js', __FILE__) );
	wp_register_script('agx-hearing-test-controller-speech', plugins_url('Controllers/controller-speechTest.js', __FILE__) );
	wp_register_script('agx-hearing-test-controller-results', plugins_url('Controllers/controller-results.js', __FILE__) );
	wp_register_script('agx-hearing-test-controller-modal', plugins_url('Controllers/controller-modal.js', __FILE__) );

  wp_register_style( 'agx-hearing-test-styles', plugins_url( 'styles.css', __FILE__ ) );

  
	// Localize Scripts
	$localize_array = array(
		'ajax_url' => admin_url( 'admin-ajax.php' )
	);
	wp_localize_script('angular', 'postfollow', $localize_array );
	wp_localize_script('jquery', 'postfollow', $localize_array );
	wp_localize_script('angular-ui-router', 'postfollow', $localize_array );
	wp_localize_script('angular-animate', 'postfollow', $localize_array );
	wp_localize_script('agx-hearing-test-module', 'postfollow', $localize_array );
	wp_localize_script('agx-hearing-test-config', 'postfollow', $localize_array );
	wp_localize_script('agx-hearing-test-directive-speech', 'postfollow', $localize_array );
	wp_localize_script('agx-hearing-test-directive-score', 'postfollow', $localize_array );
	wp_localize_script('agx-hearing-test-controller-stage', 'postfollow', $localize_array );
	wp_localize_script('agx-hearing-test-controller-quiz', 'postfollow', $localize_array );
	wp_localize_script('agx-hearing-test-controller-volume', 'postfollow', $localize_array );
	wp_localize_script('agx-hearing-test-controller-tone', 'postfollow', $localize_array );
	wp_localize_script('agx-hearing-test-controller-speech', 'postfollow', $localize_array );
	wp_localize_script('agx-hearing-test-controller-results', 'postfollow', $localize_array );
  wp_localize_script('agx-hearing-test-controller-modal', 'postfollow', $localize_array );
  

	// Enqueue Scripts
	wp_enqueue_script('angular');
	wp_enqueue_script('jquery');
	wp_enqueue_script('angular-ui-router');
	wp_enqueue_script('angular-animate');
	wp_enqueue_script('agx-hearing-test-module');
	wp_enqueue_script('agx-hearing-test-config');
	wp_enqueue_script('agx-hearing-test-directive-speech');
	wp_enqueue_script('agx-hearing-test-directive-score');
	wp_enqueue_script('agx-hearing-test-controller-stage');
	wp_enqueue_script('agx-hearing-test-controller-quiz');
	wp_enqueue_script('agx-hearing-test-controller-volume');
	wp_enqueue_script('agx-hearing-test-controller-tone');
	wp_enqueue_script('agx-hearing-test-controller-speech');
	wp_enqueue_script('agx-hearing-test-controller-results');
	wp_enqueue_script('agx-hearing-test-controller-modal');
}


// Styles
function agx_hearing_test_styles() {
	wp_enqueue_style( 'wpb-google-fonts', 'https://fonts.googleapis.com/css?family=Noto+Serif', false ); 
  wp_enqueue_style( 'agx-hearing-test-styles' );
}
 
// add_action( 'wp_enqueue_scripts', 'wpb_add_google_fonts' );
	
add_action('wp_enqueue_scripts', 'agx_hearing_test_styles');


