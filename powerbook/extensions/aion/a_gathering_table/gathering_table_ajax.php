<?php

$requestData= $_REQUEST;

$craft = $_GET['craft'];
$lang = $_GET['lang'];




include($_SERVER['DOCUMENT_ROOT'].'/extensions/aion/aion_item_link/db.php');
include($_SERVER['DOCUMENT_ROOT'].'/extensions/aion/include/externalFunctions.php');
include($_SERVER['DOCUMENT_ROOT'].'/extensions/aion/include/commons.php');
include($_SERVER['DOCUMENT_ROOT'].'/extensions/aion/include/dbConnection.php');
include($_SERVER['DOCUMENT_ROOT'].'/extensions/aion/include/items.php');





$columns = array(
// datatable column index  => database column name
    0 => 'material1',
    1 => 'search_' . $lang,
    2 => 'harvestskill',
    3 => 'skill_level',
    4 => 'char_level_limit'
);

$lowlevelfilter = $requestData['columns'][1]['search']['value'];
$highlevelfilter = $requestData['columns'][2]['search']['value'];
$craftype = $requestData['columns'][3]['search']['value'];
$racefilter = $requestData['columns'][4]['search']['value'];






$searchBox = strtr($requestData['search']['value'], array(
    "'" => '&apos;',
    "elyos" => 'pc_light',
    "asmodian" => 'pc_dark',
));


$totalData = aionDB()->query("SELECT id FROM gather_srcs where name not like '%test%'")->numRows();

$totalFiltered = $totalData;  // when there is no search parameter then total number rows = total number filtered rows.

$sql = "SELECT * ";
$sql.=" FROM gather_srcs ";
$sql.=" where name not like '%test%' ";

if ( !empty($lowlevelfilter) and $lowlevelfilter > 1) {
    $sql.= " AND ( skill_level >= $lowlevelfilter ) ";
}

if ( !empty($highlevelfilter) ) {
    $sql.= " AND ( skill_level <= $highlevelfilter ) ";
}

if( !empty($craftype) ){

    $tags = explode(', ', $requestData['columns'][3]['search']['value']);

    $sqlnods = "";
    foreach($tags as $key) {
        $sqlnods .= " source_type = '" . $key . "' or ";
    }


    $sql.=" AND ( " . $sqlnods ." source_type = '1') ";

}

if( !empty($racefilter) ){ //race filter
    $sql.=" AND ( harvestskill = '".$racefilter."' ) ";
}



if( !empty($requestData['search']['value']) ) {   // if there is a search parameter, $requestData['search']['value'] contains search parameter
    $sql.=" AND ( skill_level LIKE '%".$searchBox."%' ";
    $sql.=" OR search_$lang LIKE '%".$searchBox."%' ";
    $sql.=" OR search_ko LIKE '%".$searchBox."%' )";
}
$totalFiltered = aionDB()->query($sql)->numRows();

$sql.=" ORDER BY ". $columns[$requestData['order'][0]['column']]."   ".$requestData['order'][0]['dir']."  LIMIT ".$requestData['start'].", ".$requestData['length']."   ";

$query = aionDB()->query($sql)->fetchAll();

$data = array();

foreach ($query as $row) {
    $nestedData=array();

    $localization = !empty($row['search_' . language()]) ? $row['search_' . language()] : $row['search_ko'];

    if ($row["harvestskill"] == 'gathering_a') {
        $skillname = translate('STR_GATHERING_A', $lang);
    }elseif ($row["harvestskill"] == 'gathering_b') {
        $skillname = translate('STR_GATHERING_b', $lang);
    }elseif ($row["harvestskill"] == 'aerial_gathering') {
        $skillname = translate('STR_AERIAL_GATHERING', $lang);
    }else {
        $skillname = 'Unknown';
    }

    $nestedData[] = craftItemIcon($row["material1"], language());
    $nestedData[] = '<a class="col_" href="https://aionpowerbook.com/powerbook/Gathering/' . $row["id"] . '" >' . $localization . '</a>';
    $nestedData[] = $skillname;
    $nestedData[] = $row["skill_level"];
    $nestedData[] = $row["char_level_limit"];

    $data[] = $nestedData;
}


$json_data = array(
    "draw"            => intval( $requestData['draw'] ),   // for every request/draw by clientside , they send a number as a parameter, when they recieve a response/data they first check the draw number, so we are sending same number in draw.
    "recordsTotal"    => intval( $totalData ),  // total number of records
    "recordsFiltered" => intval( $totalFiltered ), // total number of records after searching, if there is no searching then totalFiltered = totalData
    "data"            => $data   // total data array
);

echo json_encode($json_data);  // send data as json format


