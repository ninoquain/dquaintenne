<?php

    if (!empty($_POST["send"])) {
        $name = $_POST["name"];
        $surname = $_POST["surname"];
        $email = $_POST["email"];
        $subject = $_POST["subject"];
        $message = $_POST["message"];

        $toEmail = "dominique.quaintenne@gmail.com";
        $mailHeaders = "From: " . $surname . " " . $name . "<" . $email . ">\r\n";
        if (mail($toEmail, $subject, $message, $mailHeaders)) {
            $mail_msg = "Vos informations de contact ont été reçues avec succès.";
            $type_mail_msg = "success";

            header('Location:homes.php');

        } else {
            $mail_msg = "Erreur lors de l'envoi de l'e-mail.";
            $type_mail_msg = "error";

            header('Location:homes.php');
        }
    }
?>