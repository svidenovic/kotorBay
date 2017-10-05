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
        
        $nor = $vida->vmysqlSelect( "count(tmname)", "SELECT <> FROM town", $con );
        $nor = (int)$nor;
        
        $tmname = array();
        for( $x=0; $x<$nor; $x++ ){
            $tmpname = $vida->vmysqlSelect( "tmname", "SELECT <> FROM town LIMIT ".$x.", 1 ", $con );
            $tmname[] = $tmpname;
        }
        $tmname = array_reverse( $tmname );
        $respond = $vida->vConcatStrs( "<-|x|->", $tmname );
        
        mysql_close( $con );
        echo $respond;
    }

?>