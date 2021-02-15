<?php

// start up the app
use PowerBook\ItemRepository;

require_once 'autoload.php';
require_once '../DB/db_config.php';


$services = array();




function __init_services(&$services, $aionDB)
{

    $services = array(
        'app.repository.item_model' => new ItemRepository($aionDB),
    );
};

__init_services($services, $aionDB);
