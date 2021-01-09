<?php



header('Content-type: text/html; charset=utf-8');
$wgExtensionCredits['variable'][] = array(
	'path'           => __FILE__,
	'name'           => 'Aion Gather Tables',
	'author'         => 'Kelekelio',
	'url'            => 'https://aionpowerbook.com',
	'descriptionmsg' => 'Tables with Aion Gatherings',
	'version'		 => '2.0',
	'license-name' 	 => 'LICENSE',
);

$wgHooks['ParserFirstCallInit'][] = 'AiongatheringAjaxTableFunction';
$wgExtensionMessagesFiles['AiongatheringAjaxTable'] = __DIR__ . '/gathering_table.i18n.php';
function AiongatheringAjaxTableFunction( &$parser ) {
   $parser->setFunctionHook( 'gatheringtable', 'AiongatheringAjaxTableParserFunction' );
   return true;
}
function AiongatheringAjaxTableParserFunction( &$parser, $arg1='' ) {

 global $wgOut;
 
	 
	 
	 $highcrafttype = '<span style="float:left"><select data-placeholder="Type..." multiple id="chosen-select-npc" class="chosen-select-npc" name="test" data-column="3">
    <option value=""></option>
	
	<option value="berry">Berry</option>
	<option value="fish">Fish</option>
	<option value="herb">Herb</option>
	<option value="jewelry">Jewelry</option>
	<option value="metal">Metal</option>
	<option value="noblemetal">Noble Metal</option>
	<option value="od">Aether</option>
	<option value="plant">Plant</option>
	<option value="shell">Shell</option>
	<option value="tree">Tree</option>
	<option value="vegetable">Vegetable</option>
	
  </select></span>';
	 

 
 

		
		
		$tableend = '	
		<div class="datatable-custom-controls" >
		' . $highcrafttype . '
		<span style="float:right" ><button type="button" class="clearalldt" id="clearalldt" resetorder="3" >Reset!</button></span>
		
		<span style="float:right; margin-right:13px; "><select data-column="4"  class="search-input-select">
									<option value="">(Select Skill)</option>
									<option value="gathering_a">' . translate('STR_GATHERING_a', language()) . '</option>
									<option value="gathering_b">' . translate('STR_GATHERING_B', language()) . '</option>
									<option value="aerial_gathering">' . translate('STR_AERIAL_GATHERING', language()) . '</option>
									
									
									
								</select></span>

								<span style="float:right; margin-right:14px"><input style="width:50px" placeholder="Max" type="search" class="custom-search-input-text2" data-column="2"></span>
								<span style="float:right; margin-right:2px">~</span>
								<span style="float:right; margin-right:2px">Skill Points: <input style="width:50px" placeholder="Min" type="search" class="custom-search-input-text" data-column="1"></span>
								
		
		</div>

		
		<br><br><div class="hbody">

		<table class="lists list_basicitem width_100p DataTableAJAX" id="questserverTable" DefsColumn="[{targets: 0,className: \'al pr\', type: \'num-html\'},{targets: 1,className: \'al pr\'},{targets: 2,type: \'num-html\'},{targets: 3,className: \'al pr\'}, {targets: 4,className: \'al pr\'}]" ajaxurl="http://pbwiki/powerbook/extensions/aion/a_gathering_table/gathering_table_ajax.php?craft=' . $arg1 . '&lang=' . language() . '&classic=' . isClassic() . '" dataOrder="3"><thead><tr>
		<th class="fixed nowrap no-sorting"></th>
		<th class="nowrap ajax100p">Name</th>
		<th class="nowrap">Skill</th>
		<th class="nowrap"><div class="restrictionTip" title="Skill Points" >SK</div></th>
		<th class="nowrap "><div class="restrictionTip" title="Minimum Character Level" >M.Lv</div></th>
		</tr>
		</thead></table>
		
		<div class="cl"></div></div>';
		

		
		$wgOut->AddHTML( $tableend );
}