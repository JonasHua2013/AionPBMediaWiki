<?php

function translate ($name, $language) {

    $row = aionDB()->query("SELECT 
		    body    ko,
			LAN_EN  en,
			LAN_DE  de,
			LAN_FR  fr,
			LAN_ES  es,
			LAN_IT  it,
			LAN_PL  pl,
			LAN_US  us,
			LAN_KO krl
           FROM  translation
           WHERE name = ? ", $name)->fetchArray();

    return !empty($row[$language]) ? $row[$language] : $row['ko'];

}