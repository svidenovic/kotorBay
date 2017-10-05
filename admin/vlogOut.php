<?php

    require( "../dependences/mySQLvalues.php" );
    require( "../dependences/vjswebtools.php" );
    $host = vhost();
    $user = vuser();
    $pass = vpass();
    $dbnm = vdbname();
    
    $con = mysql_connect( $host, $user, $pass );
    if( $con )
    {
        mysql_select_db( $dbnm, $con );
        
        mysql_query( "UPDATE kblog SET status=0", $con );
        
        mysql_close( $con );
        echo "lo";
    }

?>