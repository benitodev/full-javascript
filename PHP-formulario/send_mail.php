<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './Exception.php';
require './PHPMailer.php';
require './SMTP.php';


if(isset($_POST)){
    error_reporting(0);
    $name = $_POST["name"];
    $email = $_POST["e-mail"];
    $subject = $_POST["subject"];
    $comments = $_POST["comments"];
    $domain = $_SERVER["HTTP_HOST"];
        

    $message = "
    <p>
    Datos enviados desde el formulario del sitio <b>$domain</b>
    </p>
    <ul>

    <li> Hola $name</li>

    <li>Email de: benideveloperr@gmail.com</li>

    <li>Te hablamos del asunto: $subject de la pagina $domain</li>

    <li>Comentarios: $comments</li>

    </ul>
    ";






    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->SMTPDebug = 0;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'benideveloperr@gmail.com';                     //SMTP username
        $mail->Password   = 'shingekinokyojin789123';                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
    
        //Recipients
        $mail->setFrom('benideveloperr@gmail.com', 'benitoka');
        $mail->addAddress($email, $name);     //Add a recipient
       
    
        //Attachments / ENVIAR ARCHIVOS, IMAGENES, ETC
        // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
        // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name
    
        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = $subject;
        $mail->Body    = $message;
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
        $mail->CharSet = 'UTF-8';
    
        $mail->send();
        $res = [
            "err" => false,
            "message" => "Se han enviado tus datos"
        ];
    } catch (Exception $e) {
        $res = [
            "err" => true,
            "message" => "No se han podido mandar los datos error"
        ];
    }





    // if($send_mail){
    //     $res = [
    //         "err" => false,
    //         "message" => "Se han enviado tus datos"
    //     ];
    // } else{

    //     $res = [
    //         "err" => true,
    //         "message" => "No se han podido mandar los datos error"
    //     ];
    // }

    header('Content-type: application/json');

    echo json_encode($res);
    exit;
}

?>