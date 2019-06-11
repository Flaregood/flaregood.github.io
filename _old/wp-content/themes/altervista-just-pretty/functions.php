<?php

include_once( '/membri/.dummy/apps/wordpress/wp-content/plugins/altervista/classes/class-av-theme-framework.php' );
include_once( '/membri/.dummy/apps/wordpress/wp-content/plugins/altervista/classes/class-av-admin-theme-framework.php' );

global $altervista;
$av_framework = new AV_Theme_Framework( $altervista, 'altervista-just-pretty' );
$av_framework->initialization();
$av_admin_framework = new AV_Admin_Theme_Framework( 'altervista-just-pretty' );
$av_admin_framework->initialization();

?>