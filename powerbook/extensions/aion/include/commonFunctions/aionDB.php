<?php

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



    $server = new aiondb($dbhost, $dbuser, $dbpass, $dbname);

    return $server;

}