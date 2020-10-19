<script type="text/javascript" src="js/contact.js"></script>
<div id="box" class="blocFormulaire">
    <form action="traitement.php" id="form" enctype="multipart/form-data" onsubmit="return validate()" method="post" class="blocFormulaire__formulaire">
        <h3 class="blocFormulaire__formulaire__h3">Formulaire de contact</h3>
        <label for="name" class="blocFormulaire__formulaire__label">Nom: <span class="blocFormulaire__formulaire__label__span">*</span></label>
        <input type="text" name="name" id="name" class="blocFormulaire__formulaire__input" placeholder="Nom">
        <label for="surname" class="blocFormulaire__formulaire__label">Prénom: <span class="blocFormulaire__formulaire__label__span">*</span></label>
        <input type="text" name="surname" id="surname" class="blocFormulaire__formulaire__input" placeholder="Prénom">
        <label for="email" class="blocFormulaire__formulaire__label">Email: <span class="blocFormulaire__formulaire__label__span">*</span></label><span id="info" class="blocFormulaire__formulaire__info"></span>
        <input type="text" name="email" id="email" class="blocFormulaire__formulaire__input" placeholder="Email">
        <label for="subject" class="blocFormulaire__formulaire__label">Sujet: <span class="blocFormulaire__formulaire__label__span" >*</span></label>
        <input type="text" name="subject" id="subject" class="blocFormulaire__formulaire__input" placeholder="Proposition d'emploi web designer">
        <label for="message" class="blocFormulaire__formulaire__label">Message:</label>
        <textarea name="message" id="message" cols="30" rows="40" class="blocFormulaire__formulaire__textarea" placeholder="Message..."></textarea>
        <input type="submit" name="send" value="Envoyer le message" class="blocFormulaire__formulaire__submit">
        <div id="statusMessage" class="blocFormulaire__formulaire__statusMessage">
            <?php if (! empty($db_msg)) {?>
                <p class="<?php echo $type_db_msg; ?> blocFormulaire__formulaire__statusMessage__p Message"><?php echo $db_msg;?></p>
            <?php }?>
            <?php if (! empty($mail_msg)) {?>
                <p class="<?php echo $type_mail_msg; ?> blocFormulaire__formulaire__statusMessage__p Message"><?php echo $mail_msg;?></p>
            <?php }?>
        </div>
    </form>
</div>

