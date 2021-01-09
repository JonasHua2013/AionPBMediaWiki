<?php

include($_SERVER['DOCUMENT_ROOT'].'/DB/db.php');
include($_SERVER['DOCUMENT_ROOT'].'/powerbook/extensions/aion/include/externalFunctions.php');
include($_SERVER['DOCUMENT_ROOT'].'/DB/aionDB.php');
include($_SERVER['DOCUMENT_ROOT'].'/powerbook/extensions/aion/include/commons.php');
include($_SERVER['DOCUMENT_ROOT'].'/powerbook/extensions/aion/include/items.php');


$requestData= $_REQUEST;
$version = $_GET['version'];
$lang = $_GET['lang'];
$type = $_GET['type'];
$classic = $_GET['classic'];










	if ($type == '1') {
		$selectcolumns = 'id, icon_name, quality, level, search_ko';
		$table = 'client_items';
		$columns = array(
			0 => 'id',
			1 => 'icon_name',
			2 => 'search_' . $lang,
			3 => 'level'
		);

	} elseif ($type == '2') {
		$selectcolumns = 'id, disk_type, hpgauge_level, ui_type, stare_distance, magical_skill_boost_resist, hp, level, search_ko';
		$table = 'npc_clients';
		$columns = array(
			0 => 'id',
			1 => 'disk_type',
			2 => 'search_' . $lang,
			3 => 'level',
			4 => 'hp',
			5 => 'magical_skill_boost_resist'
		);

	} elseif ($type == '3') {
		$selectcolumns = 'id, category1, client_level, search_ko';
		$table = 'quests';
		$columns = array(
			0 => 'id',
			1 => 'category1',
			2 => 'search_' . $lang,
			3 => 'client_level'
		);

	} elseif ($type == '4') {
		$selectcolumns = 'id, skillicon_name, search_ko';
		$table = 'skill_base_clients';
		$columns = array(
			0 => 'id',
			1 => 'skillicon_name',
			2 => 'search_' . $lang
		);

	}


    $searchBox = strtr($requestData['search']['value'], array(
        "'" => '&apos;'
    ));


    $totalData = aionDB()->query("SELECT id FROM " . $table . " where client_version = ? ", $version)->numRows();






	$sql = "SELECT $selectcolumns, search_" . $lang;
	$sql .= " FROM $table WHERE client_version = '$version'  ";

	if (!empty($requestData['search']['value'])) {
		$sql .= " AND ( search_" . $lang . " LIKE '%" . $searchBox . "%' ";
		$sql .= " OR search_ko LIKE '" . $searchBox . "%' ";
		$sql .= " OR id LIKE '%" . $searchBox . "%' )";
	}

    $totalFiltered = aionDB()->query($sql)->numRows();

	$sql .= " ORDER BY " . $columns[$requestData['order'][0]['column']] . "   " . $requestData['order'][0]['dir'] . "  LIMIT " . $requestData['start'] . " ," . $requestData['length'] . "   ";

    $query = aionDB()->query($sql)->fetchAll();

	$data = array();

foreach ($query as $row) {
    $nestedData=array();

    $localization = !empty($row['search_' . language()]) ? $row['search_' . language()] : $row['search_ko'];

    // Type 3, Quests
    if ($type == '3') {
        $nestedData[] = $row["id"];
        $nestedData[] = '<img class="thumb" src="https://aionpowerbook.com/images/q2.png" width="37" height="37" alt="">';
        $nestedData[] = '<div class="link_' . $row["category1"] . '"><a href="https://aionpowerbook.com/powerbook/Quest/' . $row["id"] . '">' . $localization . '</a></div>';
        $nestedData[] = $row["client_level"];
    }
    // Type 4, skills
    elseif ($type == '4') {
        $nestedData[] = $row["id"];
        $nestedData[] = $row["skillicon_name"];
        $nestedData[] = '<a class="all skilltipzy" href="https://aionpowerbook.com/powerbook/Skill/' . $row["id"] . '" skillid="' . $row["id"] . '" skilltiplang="' . $lang . '" classic="' . $classic . '">' . $localization . '</a>';
    }
    // NPC, type 2
    elseif ($type == '2') {

        $disk_type = strtolower($row["disk_type"]);
        $hpgauge_level = $row["hpgauge_level"];
        $ui_type = $row["ui_type"];

        if ($row["stare_distance"] > 0) {
            $agressive = '_a';
        }


        if ($disk_type == 'guard') {
            $itemicon = 'icon_emblem_guard';
        } elseif ($disk_type == 'ancientclan') {
            $itemicon = 'icon_emblem_ancientclan';
        } elseif ($disk_type == 'inhabitant') {
            $itemicon = 'icon_emblem_inhabitant';
        } elseif ($disk_type == 'merchant') {
            $itemicon = 'icon_emblem_merchant';
        } elseif ($disk_type == 'polymorph_human') {
            $itemicon = '';
        } elseif ($disk_type == 'polymorph_table_scale') {
            $itemicon = '';
        } elseif ($disk_type == NULL) {
            $itemicon = 'icon_emblem_etc';
        } elseif ($disk_type == 'god') {
            $itemicon = 'icon_emblem_etc';
        } elseif ($disk_type == 'function') {
            $itemicon = 'icon_emblem_function';
        } elseif ($disk_type == 'etc') {
            $itemicon = 'icon_emblem_etc';
        } elseif ($disk_type == 'e_water') {
            $itemicon = 'icon_emblem_e_water';
        } elseif ($disk_type == 'e_fire') {
            $itemicon = 'icon_emblem_e_fire';
        } elseif ($disk_type == 'e_earth') {
            $itemicon = 'icon_emblem_e_earth';
        } elseif ($disk_type == 'e_air') {
            $itemicon = 'icon_emblem_e_air';
        } elseif ($disk_type == 'drakan') {
            $itemicon = 'icon_emblem_etc';
        } elseif ($disk_type == 'd1' or $disk_type == 'd2' or $disk_type == 'd3' or $disk_type == 'd4' or $disk_type == 'd5' or $disk_type == 'd6' or $disk_type == 'd7') {
            if ($hpgauge_level == 1 or $hpgauge_level == 10 or $hpgauge_level == 20 or $hpgauge_level == 26) {
                $itemicon = 'icon_emblem_monster_n_1' . $agressive;
            } elseif ($hpgauge_level == 2 or $hpgauge_level == 11 or $hpgauge_level == 21 or $hpgauge_level == 27) {
                $itemicon = 'icon_emblem_monster_n_2' . $agressive;
            } elseif ($hpgauge_level == 3 or $hpgauge_level == 12 or $hpgauge_level == 22) {
                $itemicon = 'icon_emblem_monster_n_3' . $agressive;
            } elseif ($hpgauge_level == 4 or $hpgauge_level == 13 or $hpgauge_level == 23) {
                $itemicon = 'icon_emblem_monster_r_1' . $agressive;
            } elseif ($hpgauge_level == 5 or $hpgauge_level == 14 or $hpgauge_level == 24) {
                $itemicon = 'icon_emblem_monster_r_2' . $agressive;
            } elseif ($hpgauge_level == 6 or $hpgauge_level == 15 or $hpgauge_level == 25) {
                $itemicon = 'icon_emblem_monster_r_3' . $agressive;
            }
        }


        if ($ui_type == 'trap') {
            $itemicon = 'icon_emblem_etc';
        } elseif ($ui_type == 'NoneButRotate') {
            $itemicon = 'icon_emblem_etc';
        } elseif ($ui_type == 'none') {
            $itemicon = 'icon_emblem_etc';
        }


        $nestedData[] = $row["id"];
        $nestedData[] = '<img class="thumb" src="https://aionpowerbook.com/npc/icon/' . $itemicon . '.png" width="37" height="37" alt="">';
        $nestedData[] = '<a href="https://aionpowerbook.com/powerbook/NPC/' . $row["id"] . '">' . $localization . '</a>';
        $nestedData[] = $row["level"];
        $nestedData[] = number_format($row["hp"]);
        $nestedData[] = number_format($row["magical_skill_boost_resist"]);

    }
    // Type 1, Items
    else {


        $nestedData[] = $row["id"];
        $nestedData[] = $row["icon_name"];
        $nestedData[] = '<a class="tooltipzy col_' . strtolower($row["quality"]) . ' bold" href="https://aionpowerbook.com/powerbook/Item/' . $row["id"] . '" tooltipID="' . $row["id"] . '" tooltiplang="' . $toollang . '" classic="' . $classic . '" >' . $localization . '</a>';
        $nestedData[] = $row["level"];
    }


    $data[] = $nestedData;
}

	$json_data = array(
		"draw" => intval($requestData['draw']),   // for every request/draw by clientside , they send a number as a parameter, when they recieve a response/data they first check the draw number, so we are sending same number in draw.
		"recordsTotal" => intval($totalData),  // total number of records
		"recordsFiltered" => intval($totalFiltered), // total number of records after searching, if there is no searching then totalFiltered = totalData
		"data" => $data   // total data array
	);

	echo json_encode($json_data);  // send data as json format
