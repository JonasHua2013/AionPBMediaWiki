<?php

function iconFix ($icon_name) {

    $icon_name = strtr(strtolower($icon_name), array(
        ".dds" => '',
    ));

    return $icon_name;
}

function itemIconBuilder ($icon_name) {

    return '<img class="thumb" src="https://aionpowerbook.com/item/icon/' . iconFix($icon_name) . '.png" width="37" height="37" alt="">';

}