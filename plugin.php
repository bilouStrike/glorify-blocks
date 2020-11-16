<?php
/**
 * Plugin Name: glorify-blocks
 * Plugin URI: https://www.glorifyapp.com
 * Description: glorify-blocks - Collections of blocks
 * Author: Belal Dif, Douara Abder
 * Author URI: https://www.glorifyapp.com
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
