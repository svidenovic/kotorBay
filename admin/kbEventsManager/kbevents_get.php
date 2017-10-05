<?php

    require( "../../dependences/mySQLvalues.php" );
    require( "../../dependences/vjswebtools.php" );
    $host = vhost();
    $user = vuser();
    $pass = vpass();
    $dbnm = vdbname();
    $vida = new vida();
    $respond = "";
    
    $loadLang = $_POST["loadLang"];
    
    $lang = "";
    switch( $loadLang ){
        case "english": $lang="eng"; break;
        case "russian": $lang="rus"; break;
        case "yugoslovenian": $lang="yug"; break;
        default: break;
    }
    
    $con = mysql_connect( $host, $user, $pass );
    if( $con )
    {
        mysql_select_db( $dbnm, $con );
        
        $table = "events_".$lang;
        
        $nor = $vida->vmysqlSelect( "count(emname)", "SELECT <> FROM ".$table, $con );
        $nor = (int)$nor;
        
        $emname = array();
        for( $x=0; $x<$nor; $x++ ){
            $tmpname = $vida->vmysqlSelect( "emname", "SELECT <> FROM ".$table." LIMIT ".$x.", 1 ", $con );
            $emname[] = $tmpname;
        }
        $emname = array_reverse( $emname );
        $respond = $vida->vConcatStrs( "<-|x|->", $emname );
        
        mysql_close( $con );
        echo $respond;
    }

?>