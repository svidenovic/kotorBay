<?php

    require( "../../dependences/mySQLvalues.php" );
    require( "../../dependences/vjswebtools.php" );
    $host = vhost();
    $user = vuser();
    $pass = vpass();
    $dbnm = vdbname();
    $vida = new vida();
    $imglink = $_POST["imglink"];
    $respond = "";
    
    $con = mysql_connect( $host, $user, $pass );
    if( $con )
    {
        mysql_select_db( $dbnm, $con );
        
        unlink( $imglink );
        unlink( str_replace("images/","images/thumb/thumb_",$imglink) );
        mysql_query( "DELETE FROM kbimages WHERE imglink='".$imglink."' ", $con );
        $respond = "Image deleted.";
        
        mysql_close( $con );
        echo $respond;
    }

?>