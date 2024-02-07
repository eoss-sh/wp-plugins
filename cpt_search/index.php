<?php
/**
 * Plugin Name: CPT Rest Search
 * Plugin URI: https://eoss.ch
 * Description: This is a brief description of your plugin.
 * Version: 1.0
 * Author: SH
 * Author URI: https://eoss.ch
 */

// Prevent direct file access
if (!defined('ABSPATH')) {
    exit;
}


/**
 * Register Custom Post Type and Taxonomy
 */

include_once('inc/cpt_registry.php');
include_once('inc/taxonomy_registry.php');

/**
 * Register Blocks
 */
function create_block_cpt_search_blocks_block_init() {
	register_block_type( __DIR__ . '/cpt_search_blocks/build/all-posts-block');
}
add_action( 'init', 'create_block_cpt_search_blocks_block_init' );


/** 
 * Enqueue Styles and Scripts
 */
function plugin_enqueue_scripts() {
    wp_enqueue_script('plugin-script', plugins_url('assets/js/app.js', __FILE__), array(), '1.0', true);
    wp_enqueue_style('plugin-style', plugins_url('assets/css/styles.css', __FILE__), array(), '1.0', 'all');
}
add_action('wp_enqueue_scripts', 'plugin_enqueue_scripts');


