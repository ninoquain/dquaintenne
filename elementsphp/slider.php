<script src="https://kit.fontawesome.com/2c7fc28a2f.js"></script>
<script src="js/slider.js"></script>
<div class="slider" id="slider">
    <div id="toggleContainer" class="slider__toogleContainer">
        <label class="slider__toogleContainer__label">Carrousel</label>
        <div id="toggle" class="slider__toogleContainer__toggle">
            <div id="outer3" class="slider__toogleContainer__toggle__outer3">
                <div id="slider3" class="slider__toogleContainer__toggle__outer3__slider3"></div>
            </div>
            <label class="slider__toogleContainer__label">Galerie</label>
        </div>
    </div>
    <div id="galleryView" class="slider__galleryView">
        <div id="galleryContainer" class="slider__galleryView__galleryContainer">
            <div id="leftView" class="slider__galleryView__galleryContainer__leftView"></div>
            <button id="navLeft" class="slider__galleryView__galleryContainer__navBtns"><img src="assets/icones/fleche-gauche.png" alt="fleche de gauche" id="flecheGauche" class="slider__galleryView__galleryContainer__navBtns__flecheGauche"></button>
            <a id="linkTag" class="slider__galleryView__galleryContainer__linkTag">
                <div id="mainView" class="slider__galleryView__galleryContainer__linkTag__mainView"></div>
            </a>
            <div id="rightView" class="slider__galleryView__galleryContainer__rightView"></div>
            <button id="navRight" class="slider__galleryView__galleryContainer__navBtns"><img src="assets/icones/fleche-droite.png" alt="fleche de droite" id="flecheDroite" class="slider__galleryView__galleryContainer__navBtns__flecheDroite"></button>
        </div>
    </div>
    <div id="tilesView" class="slider__tilesView">
        <div id="tilesContainer" class="slider__tilesView__tilesContainer"></div>
    </div>  
</div>
<script type="text/javascript">
    listenEvent1();
    listenEvent2();
    loadGallery();
</script>
