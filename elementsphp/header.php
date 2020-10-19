<header class="header">
    <div class="header__nav">
        <?php require_once('nav.php'); ?>
    </div>
    <div class="header__banner">
        <div class="header__banner__logo">
        </div>
        <div class="header__banner__title">
            <h1 class="header__banner__title__h1"></h1>
        </div>
    </div>
    <div class="header__ariane">
        <div class="header__ariane__columnLeft"><a class="header__ariane__columnLeft__a" href="http://localhost/dominique-quaintenne/accueil"><img src="assets/icones/home-icone.png" alt="icone du retour à l\'accueil" class="header__ariane__columnLeft__a__picture"></a></div><div class="header__ariane__columnCenter"><?php require_once('breadcrumb.php');?></div><div class="header__ariane__columnRight"></div>
    </div>
    <script type="text/javascript">createHeader();</script>
</header>
