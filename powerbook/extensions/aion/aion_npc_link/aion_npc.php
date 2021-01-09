<?php
header('Content-type: text/html; charset=utf-8');
$wgExtensionCredits['variable'][] = array(
	'path'           => __FILE__,
	'name'           => 'Aion NPCs',
	'author'         => 'Kelekelio',
	'url'            => 'https://aionpowerbook.com',
	'descriptionmsg' => 'Aion npc links',
	'version'		 => '1.0',
	'license-name' 	 => 'LICENSE',
);
 
$wgHooks['ParserFirstCallInit'][] = 'AionNPCFunction';
$wgExtensionMessagesFiles['AionNPC'] = __DIR__ . '/aion_npc.i18n.php';
function AionNPCFunction( &$parser ) {
   $parser->setFunctionHook( 'npc', 'AionNPCParserFunction' );
   return true;
}
function AionNPCParserFunction( &$parser, $arg1 ) {

    $html = buildNpcLink($arg1);

    return array( $html, 'noparse' => true, 'isHTML' => true );
}