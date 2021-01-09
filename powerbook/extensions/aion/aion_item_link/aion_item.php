<?php


header('Content-type: text/html; charset=utf-8');
$wgExtensionCredits['variable'][] = array(
	'path'           => __FILE__,
	'name'           => 'Aion Items',
	'author'         => 'Kelekelio',
	'url'            => 'https://aionpowerbook.com',
	'descriptionmsg' => 'Aion item link',
	'version'		 => '3.0',
	'license-name' 	 => 'LICENSE',
);
 
$wgHooks['ParserFirstCallInit'][] = 'AionLocaFunction';
$wgExtensionMessagesFiles['AionLoca'] = __DIR__ . '/aion_item.i18n.php';
function AionLocaFunction( &$parser ) {
   $parser->setFunctionHook( 'item', 'AionLocaParserFunction' );
   return true;
}





include($_SERVER['DOCUMENT_ROOT'].'/DB/db.php');
include($_SERVER['DOCUMENT_ROOT'].'/powerbook/extensions/aion/include/wikiSpecific.php');
include($_SERVER['DOCUMENT_ROOT'].'/DB/aionDB.php');
include($_SERVER['DOCUMENT_ROOT'].'/powerbook/extensions/aion/include/commons.php');
include($_SERVER['DOCUMENT_ROOT'].'/powerbook/extensions/aion/include/items.php');
include($_SERVER['DOCUMENT_ROOT'].'/powerbook/extensions/aion/include/npcs.php');



function AionLocaParserFunction( &$parser, $arg1 ) {

    $html = buildItemLink($arg1);

    return array( $html, 'noparse' => true, 'isHTML' => true );
}