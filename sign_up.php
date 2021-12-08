<!DOCTYPE html>

<html>
<body>

<?php
$uname = $_POST["uname"];
$pass = $_POST["pass"];
$email = $_POST["email"];
$role = $_POST["role"];

if(!file_exists("users.xml")){

    $file = fopen("users.xml", "w");
    fclose($file);

    $data=<<<XML
    <users>
        <user>
            <uname>$uname</uname>
            <pass>$pass</pass>  
            <role>$role</role>
            <email>$email</email>
        </user>
    </users>
    XML;

    $xml=new SimpleXMLElement($data);
    $xml->asXML("users.xml");
    echo "You have successfully signed up.";

}else{

    $xml=simplexml_load_file("users.xml");
    
    $exists = false;
    foreach($xml->children() as $user) {
        if(strcmp($user->uname,$uname) == 0){
            $exists = true;
            echo "Failed to sign up. Username already exists.";
            break;
        }
    }
    if($exists == false){
        $user = $xml->addChild('user');
        $user->addChild("uname",$uname);
        $user->addChild("pass",$pass);
        $user->addChild("role",$role);
        $user->addChild("email",$email);
        $xml->asXML("users.xml");
        echo "You have successfully signed up.";
    }

}



?>


</body>
</html>





