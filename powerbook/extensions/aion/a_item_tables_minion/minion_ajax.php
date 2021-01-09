<?php

$requestData = $_REQUEST;

include($_SERVER['DOCUMENT_ROOT'].'/DB/db.php');
include($_SERVER['DOCUMENT_ROOT'].'/powerbook/extensions/aion/include/externalFunctions.php');
include($_SERVER['DOCUMENT_ROOT'].'/DB/aionDB.php');
include($_SERVER['DOCUMENT_ROOT'].'/powerbook/extensions/aion/include/commons.php');
include($_SERVER['DOCUMENT_ROOT'].'/powerbook/extensions/aion/include/items.php');



$columns = array(
// datatable column index  => database column name
    0 => 'id',
    1 => 'icon_name',
    2 => 'search_' . language(),
    3 => 'tier_grade',
    4 => 'star_grade'
);

$searchBox = strtr($requestData['search']['value'], array(
    "'" => '&apos;'
));


$totalData = aionDB()->query("SELECT id FROM client_familiars where 1 = 1 ")->numRows();

$totalFiltered = $totalData;



$sql = "SELECT id, icon_name, tier_grade, star_grade, search_ko, search_" . language();
$sql .= " FROM client_familiars where 1 = 1 ";


if( !empty($requestData['search']['value']) ) {
    $sql.=" AND ( search_ko LIKE '%".$searchBox."%' ";
    $sql.=" OR search_" . language() . " LIKE '%".$searchBox."%' ) ";
}

$totalFiltered = aionDB()->query($sql)->numRows();

$sql.=" ORDER BY ". $columns[$requestData['order'][0]['column']]."   ".$requestData['order'][0]['dir']."  LIMIT ".$requestData['start'].", ".$requestData['length']."   ";


$query = aionDB()->query($sql)->fetchAll();

$data = array();

foreach ($query as $row) {
    $nestedData=array();

    $localization = !empty($row['search_' . language()]) ? $row['search_' . language()] : $row['search_ko'];



    $nestedData[] = $row["id"];
    $nestedData[] = minionIconBuilder($row["icon_name"]);
    $nestedData[] = $localization;
    $nestedData[] = $row["tier_grade"];
    $nestedData[] = $row["star_grade"];

    $data[] = $nestedData;
}


$json_data = array(
    "draw"            => intval( $requestData['draw'] ),   // for every request/draw by clientside , they send a number as a parameter, when they recieve a response/data they first check the draw number, so we are sending same number in draw.
    "recordsTotal"    => intval( $totalData ),  // total number of records
    "recordsFiltered" => intval( $totalFiltered ), // total number of records after searching, if there is no searching then totalFiltered = totalData
    "data"            => $data   // total data array
);

echo json_encode($json_data);  // send data as json format