<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Dominique Quaintenne développeur front end, développeur Wordpress et web designer lavallois, j'accompagne votre entreprise en CDI, CDD, freelance ou votre projet professionnel TPE, PME au travers de mon expertise en site vitrine. Je m'ouvre également au site e-commerce et application web.">
    <!-- Open Graph data -->
    <meta property="og:title" content="Title Here"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="http://www.example.com/"/>
    <meta property="og:image" content="http://example.com/image.jpg"/>
    <meta property="og:description" content="Description Here"/>
    <!-- Twitter Card data -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@publisher_handle">
    <meta name="twitter:title" content="Page Title">
    <meta name="twitter:description" content="Page description less than 200 characters">
    <meta name="twitter:creator" content="@author_handle">
    <!-- Twitter Summary card images must be at least 200x200px -->
    <meta name="twitter:image" content="http://www.example.com/image.jpg">
    <title>Dominique Quaintenne développeur front end, Wordpress, web designer</title>
    <link rel="stylesheet" href="scss\main.css">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="theme-color" content="#ffffff">
    <script>src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"</script>
    <script src="js/content.js"></script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-1H849T4PD1"></script>
	<script>
  		window.dataLayer = window.dataLayer || [];
  		function gtag(){dataLayer.push(arguments);}
  		gtag('js', new Date());

  		gtag('config', 'G-1H849T4PD1');
	</script>
</head>
<body>
<div class="container">
            <div><?php require_once('elemsphp/header.php'); ?></div>
            <div>
                <?php 
                    require_once('elemsphp/content-home.php');
                    require_once('elemsphp/footer.php');
                ?>
            </div>
            
        </div>
        <script>
            getStyleBodyAndContainer();
        </script>
</body>
</html>