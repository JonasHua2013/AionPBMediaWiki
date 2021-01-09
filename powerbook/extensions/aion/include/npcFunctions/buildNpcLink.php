<?php
/**
 * @author Grzegorz Nowakowski
 */

function buildNpcLink ($id) {

    $row = aionDB()->query("SELECT id, search_ko, search_" . language() . "  FROM npc_clients WHERE id = ? ", $id)->fetchArray();

    if ($row == null) {
        $html = "ID doesn't exist.";
    } else {
        $localization = !empty($row["search_" . language()]) ? $row["search_" . language()] : $row['search_ko'];

        $html = '<a href="https://aionpowerbook.com/powerbook/NPC/' . $row["id"] . '">' . $localization . '</a>';
    }


    return $html;

}