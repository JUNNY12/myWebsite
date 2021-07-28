<?php
var_dump($_POST);
exit;
$Name = $_POST['Name'];
$PhoneNumber= $_POST['PhoneNumber'];
$Email= $_POST['Email'];
$textarea = $_POST['textarea'];
$to = "juwon_e@yahoo.com";
$subject = "Mail From My Website";
$txt ="Name = ". $Name . "\r\n  PhoneNumber = " . $PhoneNumber . "\r\n Email =" . $Email . "\r\ntextarea = " . $textarea;
$headers = "From: noreply@https://junny12.github.io/myWebsite/" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
// header("Location:thankyou.html");