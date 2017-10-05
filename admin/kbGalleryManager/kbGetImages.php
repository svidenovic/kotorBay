<?php

    require( "../../dependences/mySQLvalues.php" );
    require( "../../dependences/vjswebtools.php" );
    $host = vhost();
    $user = vuser();
    $pass = vpass();
    $dbnm = vdbname();
    $vida = new vida();
    $respond = "";
    
    $con = mysql_connect( $host, $user, $pass );
    if( $con )
    {
        mysql_select_db( $dbnm, $con );
        
        $arr = array();
        $noi = $vida->vmysqlSelect( "count(imglink)", "SELECT <> FROM kbimages", $con );
        $noi = (int)$noi;
        for( $i=0; $i<$noi; $i++ )
        {
            $arr[] = $vida->vmysqlSelect( "imglink", "SELECT <> FROM kbimages LIMIT ".$i.", 1", $con );
        }
        $respond = $vida->vConcatStrs( "|<-x->|", $arr );
        
        mysql_close( $con );
        echo $respond;
    }

?>