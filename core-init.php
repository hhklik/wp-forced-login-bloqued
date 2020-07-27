<?php 
/*
*
*	***** kt-wp-forced-login-bloqued *****
*
*	This file initializes all KT_WP_FORCED_LOGIN_BLOQUED Core components
*	
*/
// If this file is called directly, abort. //
if ( ! defined( 'WPINC' ) ) {die;} // end if
// Define Our Constants
define('KT_WP_FORCED_LOGIN_BLOQUED_CORE_INC',dirname( __FILE__ ).'/assets/inc/');
define('KT_WP_FORCED_LOGIN_BLOQUED_CORE_IMG',plugins_url( 'assets/img/', __FILE__ ));
define('KT_WP_FORCED_LOGIN_BLOQUED_CORE_CSS',plugins_url( 'assets/css/', __FILE__ ));
define('KT_WP_FORCED_LOGIN_BLOQUED_CORE_JS',plugins_url( 'assets/js/', __FILE__ ));
/*
*
*  Register CSS
*
*/
function kt_wp_forced_login_bloqued_register_core_css(){
wp_enqueue_style('kt_wp_forced_login_bloqued-core', KT_WP_FORCED_LOGIN_BLOQUED_CORE_CSS . 'kt_wp_forced_login_bloqued-core.css',null,time(),'all');
};
add_action( 'wp_enqueue_scripts', 'kt_wp_forced_login_bloqued_register_core_css' );    
/*
*
*  Register JS/Jquery Ready
*
*/
function kt_wp_forced_login_bloqued_register_core_js(){
// Register Core Plugin JS	
wp_enqueue_script('kt_wp_forced_login_bloqued-core', KT_WP_FORCED_LOGIN_BLOQUED_CORE_JS . 'kt_wp_forced_login_bloqued-core.js','jquery',time(),true);
};
add_action( 'wp_enqueue_scripts', 'kt_wp_forced_login_bloqued_register_core_js' );    
/*
*
*  Includes
*
*/ 
// Load the Functions
if ( file_exists( KT_WP_FORCED_LOGIN_BLOQUED_CORE_INC . 'kt_wp_forced_login_bloqued-core-functions.php' ) ) {
	require_once KT_WP_FORCED_LOGIN_BLOQUED_CORE_INC . 'kt_wp_forced_login_bloqued-core-functions.php';
}     
// Load the ajax Request
if ( file_exists( KT_WP_FORCED_LOGIN_BLOQUED_CORE_INC . 'kt_wp_forced_login_bloqued-ajax-request.php' ) ) {
	require_once KT_WP_FORCED_LOGIN_BLOQUED_CORE_INC . 'kt_wp_forced_login_bloqued-ajax-request.php';
} 
// Load the Shortcodes
if ( file_exists( KT_WP_FORCED_LOGIN_BLOQUED_CORE_INC . 'kt_wp_forced_login_bloqued-shortcodes.php' ) ) {
	require_once KT_WP_FORCED_LOGIN_BLOQUED_CORE_INC . 'kt_wp_forced_login_bloqued-shortcodes.php';
}