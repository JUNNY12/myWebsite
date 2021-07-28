<?php
$Name = $_POST['Name'];
$PhoneNumber = $_POST['PhoneNumber'];
$Email = $_POST['Email'];
$textarea = $_POST['textarea'];



// Databas connection
$conn = new mysqli('localhost', 'root', '','my website form');
if($conn->connect_error){
  die('Connection Failed : ' .$conn->connect_error )  
}else{
    $stmt = $conn->prepare("insert into contact form(Name, PhoneNumber, Email, textarea)
    values(?,?,?,?)");
    $stmt->bind_param("sssssi", $Name, $PhoneNumber, $Email, $textarea);
    $stmt->execute()   
    echo "Your Message Has Been Received .....";
    $stmt->close();
    $conn->close();
}
?>