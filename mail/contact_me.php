<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No ingresaste ningún dato!";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
   
// Create the email and send the message
$to = 'e@iristech.io'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Formulario de Contacto de Sitio Web:  $name";
$email_body = "Has recibido un nuevo mensaje desde el formulario de contacto de iristech.io.\n\n"."Los detalles son los siguientes:\n\nNombre: $name\n\ne-mail: $email_address\n\nTeléfono: $phone\n\nMensaje:\n$message";
$headers = "From: noreply@iristech.io\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $support@iristech.io";   
mail($to,$email_subject,$email_body,$headers);
return true;         
?>
