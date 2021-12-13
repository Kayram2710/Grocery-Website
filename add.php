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
    
    foreach($xml->children() as $user) {
        if(strcmp($user->uname,$uname) == 0){
            $user->$user.nodeValue("uname",$uname);
            $user->$user.nodeValue("pass",$pass);
            $user->$user.nodeValue("role",$role);
            $user->$user.nodeValue("email",$email);
            $xml->asXML("users.xml");
            echo "Profile Updated.";
            break;
        }
    } else(){
        $user = $xml->addChild('user');
        $user->addChild("uname",$uname);
        $user->addChild("pass",$pass);
        $user->addChild("role",$role);
        $user->addChild("email",$email);
        $xml->asXML("users.xml");
        echo "Profile Added.";
    }

}



?>


</body>
</html>





