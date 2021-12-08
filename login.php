<!DOCTYPE html>

<html>
<body>

<?php
$uname = $_POST["uname"];
$pass = $_POST["pass"];
$newline = "\n";

if(!file_exists("users.xml")){

    $file = fopen("users.xml", "w");
    fclose($file);

    $data=<<<XML
    <users>
        <user>
            <uname>$uname</uname>
            <pass>$pass</pass>  
        </user>
    </users>
    XML;

    $xml=new SimpleXMLElement($data);
    echo $xml->asXML("users.xml");

}else{

    $xml=simplexml_load_file("users.xml");
    
    $exists = false;
    foreach($xml->children() as $user) {
        if(strcmp($user->uname,$uname) == 0){
            if(strcmp($user->pass,$pass) == 0){
                
                
               
                if(strcmp($user->role,"admin") == 0){

                    header('Location: p7.html');
                    exit;

                }else{
                    header('Location: index.html');
                    exit;
                }



            }else{

                echo "Wrong password." ;

            }

            $exists = true;
            break;
        }
    }
    if($exists == false){     
       echo "Login attempt unsuccessful. User does not exist." ;
    }

}



?>


</body>
</html>





