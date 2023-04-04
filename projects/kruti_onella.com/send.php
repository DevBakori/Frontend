<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'php_mailer/src/Exception.php';
require 'php_mailer/src/PHPMailer.php';
require 'php_mailer/src/SMTP.php';

if(isset($_POST["send"])){
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'
    $mail->SMTPAuth = true;
    $mail->Username = 'divyeshkalariya26@gmail.com';           //your gmail
    $mail->Password = 'vlzwsujkiaywotzw';           //your password
    $mail->SMTPSecure = 'ssl' ;
    $mail->Post = 465 ;

    $mail->setFrom('divyeshkalariya26@gmail.com');        //your gmail

    $mail->addAddress($_POST["email"]);

    $mail->isHTML(true);

    $mail->Username = $_POST["Username"];
    $mail->Email = $_POST["Email"];
    $mail->Contact_No. = $_POST["Contact"];        .

    echo
    "
    <script>
    alert('Message Sent Successfully');
    document.location.href = 'index.html';
    </script>
    ";

}

?>