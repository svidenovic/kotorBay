<?php

    require( "../../dependences/mySQLvalues.php" );
    require( "../../dependences/vjswebtools.php" );
    $host = vhost();
    $user = vuser();
    $pass = vpass();
    $dbnm = vdbname();
    $vida = new vida();
    $respond = "";
    
    $pname = $_POST["pname"];
    
    $con = mysql_connect( $host, $user, $pass );
    if( $con )
    {
        mysql_select_db( $dbnm, $con );
        
        $respond = $vida->vmysqlSelect( "tmimage", "SELECT <> FROM town WHERE tmname='".$pname."'", $con );
        
        mysql_close( $con );
        echo $respond;
    }

?>