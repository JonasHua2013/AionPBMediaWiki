<?php
/**
 * @author Grzegorz Nowakowski
 */

function aionDB() {

    $dbhost = 'localhost';
    $dbuser = 'root';
    $dbpass = '';

    $db = isClassic();

    if ($db == 1) {
        $dbname = "aion_c";
    } elseif ($db == 2) {
        $dbname = "aion_eu";
    } else {
        $dbname = "aion";
    }


    return new aiondb($dbhost, $dbuser, $dbpass, $dbname);

}