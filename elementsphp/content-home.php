<div class="contentHome">
    <section class="contentHome__firstSection">
        <div class="contentHome__firstSection__presentation">
            <div class="contentHome__firstSection__presentation__containerArticle">
                <article class="contentHome__firstSection__presentation__containerArticle__article">
                    <h2 class="contentHome__firstSection__presentation__containerArticle__article__h2"></h2>
                    <p id="paragraphe1_presentation" class="contentHome__firstSection__presentation__containerArticle__article__p"></p>
                    <p class="contentHome__firstSection__presentation__containerArticle__article__p"></p>
                    <p class="contentHome__firstSection__presentation__containerArticle__article__p"></p>
                </article>
            </div>
            <div class="contentHome__firstSection__presentation__containerPicture"></div>
        </div>
        <div class="contentHome__firstSection__callToAction">

            <div class="contentHome__firstSection__callToAction__containerCallToAction"></div>
        </div>
    </section>
    <section class="contentHome__secondeSection">
        <div class="contentHome__secondeSection__messages">
            <p class="contentHome__secondeSection__callToAction__messages__p" id="alertMessage"></p>
        </div>
    </section>
    <section class="contentHome__thirdSection">
        <div class="contentHome__thirdSection__appelInfo">
            <div class="contentHome__thirdSection__appelInfo__icone"></div>
        </div>
        <div class="contentHome__thirdSection__messageInfo">
            <p class="contentHome__thirdSection__messageInfo__p" id="messageInfo"></p>
        </div>
    </section>
    <section class="contentHome__fourthSection">
        <div class="contentHome__fourthSection__presentation">
            <div class="contentHome__fourthSection__presentation__containerPicture"></div>
            <div class="contentHome__fourthSection__presentation__containerArticle">
                <article class="contentHome__fourthSection__presentation__containerArticle__article">
                    <h2 class="contentHome__fourthSection__presentation__containerArticle__article__h2"></h2>
                    <p id="paragraphe1_personality" class="contentHome__fourthSection__presentation__containerArticle__article__p"></p>
                    <p id="paragraphe2_personality" class="contentHome__fourthSection__presentation__containerArticle__article__p"></p>
                    <p id="paragraphe3_personality" class="contentHome__fourthSection__presentation__containerArticle__article__p"></p>
                    <h3 class='contentHome__fourthSection__presentation__containerArticle__article__h2'></h3>
                    <p id="paragraphe4_personality" class="contentHome__fourthSection__presentation__containerArticle__article__p"></p>
                    <p>Mon site est hébergé chez <a href="https://www.infomaniak.com/fr/hebergement" target="_blank">Infomaniak hébergeur eco responsable</a>.</p>
                </article>
            </div>   
        </div>
    </section>
    <section>
        <!--<div>
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDquaintenne%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        pour intégrer des pages facebooks ouvrir ce lien https://developers.facebook.com/docs/plugins/page-plugin/
        </div>-->
        
    </section>
    <?php 
        require_once('slider.php'); 
        require_once('elemsphp/contact.php');
    ?>
    <script type="text/javascript">
        createContentPresentationHome();
        createContentCallToActionHome();
        createElementAlertMessageHome();
        createElementsMessageInfoHome();
        createElementsPersonalityHome();
    </script>
</div>
