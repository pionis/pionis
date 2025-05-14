<?php
// Fichier : mail/send_mail.php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);

    $to = "contact@pionis.org"; // Remplacer par adresse réelle
    $subject = "Message depuis le site web";
    $body = "Nom: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email";

    if (mail($to, $subject, $body, $headers)) {
        header("Location: ../contact.php?success=1");
        exit();
    } else {
        echo "Erreur lors de l'envoi. Veuillez réessayer.";
    }
} else {
    header("Location: ../contact.php");
    exit();
}
?>
