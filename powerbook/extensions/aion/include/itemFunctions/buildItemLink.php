<?php

function buildItemLink($id) {

    $row = aionDB()->query("SELECT id, quality, search_ko, search_" . language() . "  FROM client_items WHERE id = ? ", $id)->fetchArray();

    if ($row == null) {
        $html = "ID doesn't exist.";
    } else {
        $id = $row["id"];
        $quality = strtolower($row["quality"]);
        $localization = !empty($row["search_" . language()]) ? $row["search_" . language()] : $row['search_ko'];

        $html = '<a class="tooltipzy col_' . $quality . '" href="https://aionpowerbook.com/powerbook/Item/' . $id . '" tooltipID="' . $id . '" tooltiplang="' . language() . '" classic="' . isClassic() . '">' . $localization . '</a>';

    }


    return $html;

}