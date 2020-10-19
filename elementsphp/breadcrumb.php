<?php


$url= '';

if (isset($_GET['url'])) {
	$url = explode('/',$_GET['url']);
}

if ($url[0] == 'accueil' || $url[0] == 'home') {
	echo('<span class="breadcrumbSeparator"> </span>');
	echo('<span class="road"></span>');	
} else if ($url[0] == 'accueil' || $url[0] == 'home'|| $url[0] == 'développement-web' || $url[0] == 'developpement-web' || $url[0] == 'developpement web' || $url[0] == 'développement web'|| $url[0] == 'developpementweb' || $url[0] == 'développementweb' || $url[0] == 'webdesign' || $url[0] == 'web-design' || $url[0] == 'web design' || $url[0] == 'optimisationseo' || $url[0] == 'optimisation-seo' || $url[0] == 'optimisation seo'|| $url[0] == 'passions' || $url[0] == 'passion'|| $url[0] == 'mentionslégales' || $url[0] == 'mentionslegales' || $url[0] == 'mentions légales' || $url[0] == 'mentions legales' || $url[0] == 'mentions-légales' || $url[0] == 'mentions-legales') {

	echo('<span class="breadcrumbSeparator"> > </span>');
	echo('<span class="road"> ' . $url[0] .'</span>');
	
} else {
	echo('<span class="breadcrumbSeparator"> </span>');
	echo('<span class="road"></span>');	
}


/*$def = "index";
$dPath = $_SERVER['PHP_SELF'];
if($dPath == "/dominique-quaintenne/home.php") {
	$dPath = "/dominique-quaintenne/Accueil.php";
} elseif($dPath == "/dominique-quaintenne/devlweb.php") {
 	$dPath = "/dominique-quaintenne/Développement-Web.php";
}

$dChunks = explode("/", $url);

echo('<span class="breadcrumbSeparator"> > </span>');
for($i=1; $i<count($dChunks); $i++ ){
	echo('<a class="breadcrumbA" href="/');
	for($j=1; $j<=$i; $j++ ){
		echo($dChunks[$j]);
		if($j!=count($dChunks)-1){ echo("/");}
	}
	
	if($i==count($dChunks)-1){
		$prChunks = explode(".", $dChunks[$i]);
		if ($prChunks[0] == $def) $prChunks[0] = "";
		$prChunks[0] = $prChunks[0] . "</a>";
	}
	else $prChunks[0]=$dChunks[$i] . '</a><span class="breadcrumbSeparator"> > </span>';
	echo('">');
	echo(str_replace("_" , " " , $prChunks[0]));
} */


?>
<script>setStyleBreadCrumbNight();</script>