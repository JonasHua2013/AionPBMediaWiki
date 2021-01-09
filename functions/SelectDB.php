<?php
function SelectDB () {
    $db = $_GET['db'];

    if ($db == 1) {
        $dbname = "aion_c";
    } elseif ($db == 2) {
        $dbname = "aion_eu";
    } else {
        $dbname = "26158902_db";
    }

    return $dbname;
}