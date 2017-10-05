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
        
        $table = "bkbadds";
        
        $nor = $vida->vmysqlSelect( "count(amname)", "SELECT <> FROM ".$table, $con );
        $nor = (int)$nor;
        
        $amname = array();
        for( $x=0; $x<$nor; $x++ ){
            $tmpname = $vida->vmysqlSelect( "amname", "SELECT <> FROM ".$table." LIMIT ".$x.", 1 ", $con );
            $amname[] = $tmpname;
        }
        $amname = array_reverse( $amname );
        $respond = $vida->vConcatStrs( "<-|x|->", $amname );
        
        mysql_close( $con );
        echo $respond;
    }

?>