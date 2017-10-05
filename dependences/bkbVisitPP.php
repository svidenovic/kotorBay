<?php

    require("mySQLvalues.php");
    require("vjswebtools.php");
    $host = vhost();
    $user = vuser();
    $pass = vpass();
    $dbnm = vdbname();
    $vida = new vida();
    $respond = "";
    $table = "";
    
    $otype = $_POST["type"];
    $oname = $_POST["name"];
    $olang = $_POST["lang"];
    
    $con = mysql_connect( $host, $user, $pass );
    if( $con )
    {
        mysql_select_db( $dbnm, $con );
        $table = "placesnservices_".$olang;
        if( $otype=="venues"||$otype=="services"||$otype=="catering%20facilities" ){
            $visits = (int)$vida->vmysqlSelect("pmvisits","SELECT <> FROM ".$table." WHERE pmname='".$oname."'",$con);
            $visits += 1;
            mysql_query("UPDATE ".$table." SET pmvisits=".$visits." WHERE pmname='".$oname."'",$con);
            $respond = $visits;
        }
        
        mysql_close( $con );
        echo $respond;
    }

?>