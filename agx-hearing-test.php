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

	
	$ninjaNum = get_option('ninja_number');
	$cta_text = get_option('cta_text');
	$cta_url = get_option('cta_url');
		
		echo '<div id="agx-ohq" ng-app="formApp">
      		<div ng-controller="stageController as stage">
  <p style="display: none;" id="cta_text">';
		echo $cta_text;
		echo '</p> <p style="display: none;" id="cta_url">';
		echo $cta_url;
		echo '<h2>{{stage.cta_test}}</h2>
   <button ng-click="stage.updateDisplay()" class="btn-ohq-modal" ng-class="stage.modalBtnOpen" id="0_btn_start_quiz" >Start Quiz</button>
   
   <!-- Modal pop-up -->
    <div id="ohq-container" class="hidden" ng-class="stage.modalClass">
	  <div ng-class="stage.testBool(\'exit\') ? \'visible\' : \'hidden\'">';
	echo do_shortcode('[ninja_form id='.$ninjaNum.']');
	
	
	echo '</div>
      <!-- modular display buttons -->
	  <button ng-click="stage.updateDisplay()"	   ng-class="stage.testBool(\'exit\') ? \'hidden\' : \'btn-exit\'" id="x_btn_exit">X</button>
		 <!-- <button ui-sref="stage.exit" ng-click="stage.loadForm()"		   ng-class="stage.testBool(\'results\') ? \'btn-exit\' : \'hidden\'">X</button> -->
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
?>
<?php
class AGX_OHQ_Plugin {
    
    public function __construct(){
        
        // Hook into the admin menu
        add_action('admin_menu', array($this, 'create_plugin_settings_page'));
        
        add_action('admin_init', array($this, 'setup_sections'));
        
        add_action('admin_init', array($this, 'setup_fields'));
        
    }
    
    public function create_plugin_settings_page(){
        
        $page_title = 'AGX Hearing Quiz';
        $menu_title = 'AGX Hearing Quiz';
        $capability = 'manage_options';
        $slug = 'agx-hearing-test';
        $callback = array( $this, 'plugin_settings_page_content');
        $icon = 'dashicons-carrot';
        $position = 100;
        
        add_menu_page( $page_title, $menu_title, $capability, $slug, $callback, $icon, $position);
        
    }
    
    public function plugin_settings_page_content(){ ?>
        
        <div class="wrap">
            <h2>AGX Online Hearing Quiz Settings</h2>
			
            <form method="post" action="options.php">
                <?php 
                    settings_fields( 'agx-hearing-test');
                    do_settings_sections('agx-hearing-test');
                        submit_button();
                ?>
            </form>
        </div> <?php
        
    }
    
    public function setup_sections(){
      
        add_settings_section( 'ninja_shortcode', 'Link your Ninja Form', array( $this, 'section_callback'), 'agx-hearing-test' );
		add_settings_section( 'cta_url_section', 'Call To Action', array( $this, 'section_callback'), 'agx-hearing-test' );
        
    }
    
    public function section_callback( $arguments ){
        switch( $arguments['id'] ){
    		case 'ninja_shortcode':
    			echo 'Enter in the id number from the Ninja Form shortcode you wish to link.</br> <em>For example, if your shortcode was [ninja_form id=<strong>2</strong>] you would enter <strong>"2"</strong>.</em>';
    			break;
    		case 'cta_url_section':
    			echo 'Set your CTA text and the button URL.';
    			break;
    	}
        
    }
    
    public function setup_fields() {
        $fields = array(
        	array(
        		'uid' => 'ninja_number',
        		'label' => 'Shortcode ID',
        		'section' => 'ninja_shortcode',
        		'type' => 'number',
        	),
			array(
        		'uid' => 'cta_text',
        		'label' => 'Call to action text:',
        		'section' => 'cta_url_section',
        		'type' => 'textarea',
        	),
			array(
        		'uid' => 'cta_url',
        		'label' => 'Call to action URL',
        		'section' => 'cta_url_section',
        		'type' => 'text',
        		'placeholder' => 'URL here...',
        		'helper' => 'https://www...ect',
        		'supplimental' => 'I am underneath!',
        	)
        	
        );
    	foreach( $fields as $field ){
        	add_settings_field( $field['uid'], $field['label'], array( $this, 'field_callback' ), 'agx-hearing-test', $field['section'], $field );
            register_setting( 'agx-hearing-test', $field['uid'] );
    	}
    }
    
    public function field_callback( $arguments ){
        
        $value = get_option( $arguments['uid'] );
        // get current value if there is one
        // if no argument exists
        if( ! $value ) {
            // set to our default
            $value = $arguments['default'];
            
        }
        
        // Check which type of field we want
        switch( $arguments['type'] ){
            case 'text':
            case 'password':
            case 'number':
                printf( '<input name="%1$s" id="%1$s" type="%2$s" placeholder="%3$s" value="%4$s" />', $arguments['uid'], $arguments['type'], $arguments['placeholder'], $value );
                break;
            case 'textarea':
                printf( '<textarea name="%1$s" id="%1$s" placeholder="%2$s" rows="5" cols="50">%3$s</textarea>', $arguments['uid'], $arguments['placeholder'], $value );
                break;
            case 'select':
            case 'multiselect':
                if( ! empty ( $arguments['options'] ) && is_array( $arguments['options'] ) ){
                    $attributes = '';
                    $options_markup = '';
                    foreach( $arguments['options'] as $key => $label ){
                        $options_markup .= sprintf( '<option value="%s" %s>%s</option>', $key, selected( $value[ array_search( $key, $value, true ) ], $key, false ), $label );
                    }
                    if( $arguments['type'] === 'multiselect' ){
                        $attributes = ' multiple="multiple" ';
                    }
                    printf( '<select name="%1$s[]" id="%1$s" %2$s>%3$s</select>', $arguments['uid'], $attributes, $options_markup );
                }
                break;
            case 'radio':
            case 'checkbox':
                if( ! empty ( $arguments['options'] ) && is_array( $arguments['options'] ) ){
                    $options_markup = '';
                    $iterator = 0;
                    foreach( $arguments['options'] as $key => $label ){
                        $iterator++;
                        $options_markup .= sprintf( '<label for="%1$s_%6$s"><input id="%1$s_%6$s" name="%1$s[]" type="%2$s" value="%3$s" %4$s /> %5$s</label><br/>', $arguments['uid'], $arguments['type'], $key, checked( $value[ array_search( $key, $value, true ) ], $key, false ), $label, $iterator );
                    }
                    printf( '<fieldset>%s</fieldset>', $options_markup );
                }
                break;
        }

        
        //if there is help text
        if( $helper = $arguments[ 'helper' ] ){
            printf( '<span class="helper"> %s</span>',
                  $helper ); // show it
        }
        
        if( $supplimental = $arguments[ 'supplemental' ]){
            printf( '<p class="description">%s</p>',
                  $supplimental ); // show it
        }
        // echo '<input name="ninja_shortcode" id="ninja_shortcode" type="text" value="' . get_option('ninja_shortcode' ) . '" />';
        
    }
    
    }
    

new AGX_OHQ_Plugin();
