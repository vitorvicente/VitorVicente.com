<?php
$name = $_POST['name'];
$email = $_POST['email'];
$sub = $_POST['subject'];
$message = $_POST['message'];
$formcontent=" From: $name \n Subject: $sub \n Message: $message";
$recipient = "vitor@bu.edu";
$subject = "Contact Form - VitorVicente.com";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" . " -" . "<a href='form.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
?>
