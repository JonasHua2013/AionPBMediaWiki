<?php
include 'db.php';
include '../functions/SelectDB.php';

$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = SelectDB();


$aionDB = new aiondb($dbhost, $dbuser, $dbpass, $dbname);
