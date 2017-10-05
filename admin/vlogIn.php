<?php

    require( "../dependences/mySQLvalues.php" );
    require( "../dependences/vjswebtools.php" );
    $host = vhost();
    $user = vuser();
    $pass = vpass();
    $dbnm = vdbname();
    $vida = new vida();
    
    $passval = $_POST["passval"];
    $respond = "";
    $truepass = "";
    
    $con = mysql_connect( $host, $user, $pass );
    if( $con )
    {
        mysql_select_db( $dbnm, $con );
        
        $truepass = $vida->vmysqlSelect( "keycode", "SELECT <> FROM kblog", $con );
        
        if( $passval == $truepass )
        {
            $respond = "true";
            mysql_query( "UPDATE kblog SET status=1", $con );
        }
        elseif( $passval != $truepass )
        {
            $respond = "false";
            mysql_query( "UPDATE kblog SET status=0", $con );
        }
        
        mysql_close( $con );
        echo $respond;
    }

?>