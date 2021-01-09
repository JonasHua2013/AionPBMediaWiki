<?php

function craftItemIcon ($name, $language) {

    $row = aionDB()->query("SELECT id, icon_name FROM  client_items where name = ? ", $name)->fetchArray();

    $html = "craftItemIcon_error";

    if ($row != NULL) {
        $html = '<a 
            href="https://aionpowerbook.com/powerbook/Item/' . $row['id'] . '" 
            class="tooltipzy" 
            tooltipID="' . $row["id"] . '" 
            tooltiplang="'.$language.'" 
            classic="' . isClassic() . '">' . itemIconBuilder($row["icon_name"]) . '</a>';

    }

    return $html;

}