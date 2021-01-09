<?php
header('Content-type: text/html; charset=utf-8');
$wgExtensionCredits['variable'][] = array(
	'path'           => __FILE__,
	'name'           => 'Aion Version Tables',
	'author'         => 'Kelekelio',
	'url'            => 'https://aionpowerbook.com',
	'descriptionmsg' => 'Tables with Aion Versions',
	'version'		 => '3.0',
	'license-name' 	 => 'LICENSE',
);

$wgHooks['ParserFirstCallInit'][] = 'AionVersionTableFunction';
$wgExtensionMessagesFiles['AionVersionTables'] = __DIR__ . '/version.i18n.php';
function AionVersionTableFunction( &$parser ) {
   $parser->setFunctionHook( 'version', 'AionVersionTableParserFunction' );
   return true;
}
function AionVersionTableParserFunction( &$parser, $arg1='', $arg2='' ) {

    global $wgOut;

    $code = language();
    $classic = isClassic();


    if ($arg2 == '1') {
        $imp = '{{Important|Following items might only be visible when the website is set to Classic Server. Change the server with a radio button next to the language selector.}}';
    } else {
        $imp = '{{Important|Following items might only be visible when the website is set to Live Server. Change the server with a radio button next to the language selector.}}';
    }


 
 		
		$tableend = '<br><div class="hbody">
		<ul class="nav nav-tabs" role="tablist">
		<li role="presentation" ><a href="#Items" aria-controls="Item" role="tab" data-toggle="tab" class="active" >Item</a></li>
		<li role="presentation"><a href="#NPC" aria-controls="NPC" role="tab" data-toggle="tab">NPC</a></li>
		<li role="presentation"><a href="#Quest" aria-controls="Quest" role="tab" data-toggle="tab">Quest</a></li>
		<li role="presentation"><a href="#Skill" aria-controls="Skill" role="tab" data-toggle="tab">Skill</a></li>
		</ul>
		<br>
			<div class="tab-content">
				<div role="tabpanel" class="tab-pane active" id="Items">
		<table class="lists list_basicitem width_100p DataTableAJAX" id="items" DefsColumn="[{targets: 0, className: \'al pr\'}, {targets: 1,className: \'al pr\'},{targets: 3,className: \'al pr\'}]" ajaxurl="http://pbwiki/powerbook/extensions/aion/a_version_tables/version_ajax.php?version=' . $arg1 . '&lang=' . $code . '&classic='.$classic.'&type=1" ><thead><tr><th class="fixed nowrap">ID</th><th class="fixed nowrap no-sorting"></th><th class="nowrap" style="width:100%">Name</th><th class="nowrap">Level</th></tr></thead></table><div class="cl"></div>
				</div>
				<div role="tabpanel" class="tab-pane" id="NPC">
		<table class="lists list_basicitem width_100p DataTableAJAX" id="npc" DefsColumn="[{targets: 0,className: \'al pr\'},{targets: 1,className: \'al pr\'},{targets: 3,className: \'al pr\'},{targets: 4,className: \'al pr\'},{targets: 5,className: \'al pr\'}]" ajaxurl="http://pbwiki/powerbook/extensions/aion/a_version_tables/version_ajax.php?version=' . $arg1 . '&lang=' . $code .'&classic='.$classic.'&type=2" ><thead><tr><th class="fixed nowrap">ID</th><th class="fixed nowrap no-sorting"></th><th class="ajax100p nowrap " style="width:100%">Name</th><th class="nowrap">Level</th><th class="nowrap">HP</th><th class="nowrap">M. Supp.</th></tr></thead></table><div class="cl"></div>
				</div>
				<div role="tabpanel" class="tab-pane" id="Quest">
		<table class="lists list_basicitem width_100p DataTableAJAX" id="quest" DefsColumn="[{targets: 0,className: \'al pr\'},{targets: 1,className: \'al pr\'},{targets: 3,className: \'al pr\'}]" ajaxurl="http://pbwiki/powerbook/extensions/aion/a_version_tables/version_ajax.php?version=' . $arg1 . '&lang=' . $code .'&classic='.$classic.'&type=3" ><thead><tr><th class="fixed nowrap">ID</th><th class="fixed nowrap no-sorting"></th><th class="ajax100p nowrap" style="width:100%" >Name</th><th class="nowrap">Level</th></tr></thead></table><div class="cl"></div>
				</div>
				<div role="tabpanel" class="tab-pane" id="Skill">
		<table class="lists list_basicitem width_100p DataTableAJAX" id="skill" DefsColumn="[{targets: 0,className: \'al pr\'},{targets: 1,className: \'al pr\'},{targets: 3,className: \'al pr\'}]" ajaxurl="http://pbwiki/powerbook/extensions/aion/a_version_tables/version_ajax.php?version=' . $arg1 . '&lang=' . $code .'&classic='.$classic.'&type=4" ><thead><tr><th class="fixed nowrap">ID</th><th class="fixed nowrap no-sorting"></th><th class="ajax100p nowrap" style="width:100%">Name</th></tr></thead></table><div class="cl"></div>
				</div>
			</div>
		</div>';


    try {
        $wgOut->addWikiTextAsInterface($imp);
    } catch (MWException $e) {

    }
    $wgOut->AddHTML( $tableend );
}




 