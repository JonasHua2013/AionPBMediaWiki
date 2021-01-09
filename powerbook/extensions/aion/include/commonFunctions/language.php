<?php

function language() {
    global $wgLang;             // $wgLang - global language variable
    $code = $wgLang->getCode();	// get language code, based on preferences

    $language = strtolower($code);
    // EN = US, EN-GB = EN
    if ('en' === $language) {
        $language = 'us';
    }

    if (!in_array($language, ['en', 'us', 'de', 'fr', 'es', 'it', 'pl', 'ko'])) {
        $language = 'en';
    }

    return $language;
}