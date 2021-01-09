<?php

function isClassic() {
    global $wgRequest;

    $classic = $wgRequest->getCookie( 'AionClassicCookie' );

    if(isset($_GET['aionclassic'])) {
        $classic = $_GET['aionclassic'];
    }

    return $classic;

}