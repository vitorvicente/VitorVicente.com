<?php
$name = $_POST['name'];
$email = $_POST['email'];
$sub = $_POST['subject'];
$message = $_POST['message'];
$formcontent=" From: $name \n Subject: $sub \n Message: $message";

$recipient = "vitor@bu.edu";
$subject = "Contact Form - VitorVicente.com";
$mailheader = "From: $email";


mail($recipient, $subject, $formcontent, $mailheader);
header("Location: ../../en-US/contact/")
?>
