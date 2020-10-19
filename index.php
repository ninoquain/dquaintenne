<?php 
  $url = '';
    if (isset($_GET['url'])) {
        $url = explode('/',$_GET['url']);
    }

    if ($url == '') {
        require 'homes.php';
    } elseif ($url[0] == 'accueil' || $url[0] == 'home') {
        require 'homes.php';
    } elseif ($url[0] == 'développement-web' || $url[0] == 'developpement-web' || $url[0] == 'developpement web' || $url[0] == 'développement web'|| $url[0] == 'developpementweb' || $url[0] == 'développementweb') {
        require 'devlweb.php';
    } elseif ($url[0] == 'webdesign' || $url[0] == 'web-design' || $url[0] == 'web design') {
        require 'webdes.php';
    } elseif ($url[0] == 'optimisationseo' || $url[0] == 'optimisation-seo' || $url[0] == 'optimisation seo') {
        require 'optiseo.php';
    } elseif ($url[0] == 'passions' || $url[0] == 'passion') {
        require 'passio.php';
    } elseif ($url[0] == 'mentionslégales' || $url[0] == 'mentionslegales' || $url[0] == 'mentions légales' || $url[0] == 'mentions legales' || $url[0] == 'mentions-légales' || $url[0] == 'mentions-legales') {
        require 'mentionlegal.php';
    } else {
        require 'four-oh-four.php';
    }
?>
