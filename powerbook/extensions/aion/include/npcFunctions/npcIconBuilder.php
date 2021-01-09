<?php

function npcIconBuilder ($disk_type, $hpgauge_level, $ui_type, $stare_distance) {

    if ($stare_distance > 0) {
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



    return '<img class="thumb" src="https://aionpowerbook.com/npc/icon/' . $itemicon . '.png" width="37" height="37" alt="">';
}




