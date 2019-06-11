<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
/* modifica */
define('DB_NAME', 'my_boninsegnaomar');

/** MySQL database username */
define('DB_USER', 'boninsegnaomar');
/* fine */

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
/* modifica */
define('AUTH_KEY',         'I82m)Ep%qzM93&eir0z3qV3#w%6Emr4TQ37^)Q3XQ#^r$xJc*wAwruvMS7c7YHV^');
define('SECURE_AUTH_KEY',  'uvkR3ebpIA^&*XPXWlo4oVgVX20eNzx%u%4(jePB7Rf6MxKQHww6oeQ@ikNwtEkD');
define('LOGGED_IN_KEY',    'vRRGLo9Aau3x7aAn8Am$0f2@DYjHsEyP!j7o)EZg)hIJ!bCD44uV@bL2$@1CFCbg');
define('NONCE_KEY',        '15Gm8#4xo6bECQfQGc2E1I0ZH^!z*AizuqoZPyFTekUE%^(T6cEaMJT$ZpUb&Bpp');
define('AUTH_SALT',        'A(3yBcZsmLnB26Qp(fBeg%yScvXER!@xiZwjVI2$gtOqTaLc43f8(YyDhi5nw0CE');
define('SECURE_AUTH_SALT', 'ur1w%uFW!tp^Xl*bDq1FIRItJ%mwa9jAw0I2bRpwzZ62Bl)WyeeXqxk4e6mz%KcE');
define('LOGGED_IN_SALT',   'javexnzcj5#PfO^fV64JL4z@z0(okAsYyB$^PxoWQWcg)!MCv08N2*jUdlVb4tT^');
define('NONCE_SALT',       'cWX4mQUpkB#k7x&IRF#e7M2zp&8pPbPnFcs%mU4ybY&1M7XsDnJh$vEK8IZJO^ap');
/* fine */

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
/* modifica */
$table_prefix  = 'avwp_';
/* fine */

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);
define('ALTERNATE_WP_CRON', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */

/* modifica */
$_SERVER['DOCUMENT_ROOT'] = "/membri/boninsegnaomar";
$_ENV['DOCUMENT_ROOT'] = "/membri/boninsegnaomar";
/* fine */
require_once(ABSPATH . 'wp-settings.php');

