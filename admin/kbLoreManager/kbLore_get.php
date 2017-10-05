<?php

    require( "../../dependences/mySQLvalues.php" );
    require( "../../dependences/vjswebtools.php" );
    $host = vhost();
    $user = vuser();
    $pass = vpass();
    $dbnm = vdbname();
    $vida = new vida();
    $respond = "";
    
    $loadType = $_POST["loadType"];
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
        
        $table = "lore_".$lang;
        
        $nor = $vida->vmysqlSelect( "count(lmname)", "SELECT <> FROM ".$table, $con );
        $nor = (int)$nor;
        
        $lmname = array();
        for( $x=0; $x<$nor; $x++ ){
            $tmpname = $vida->vmysqlSelect( "lmname", "SELECT <> FROM ".$table." LIMIT ".$x.", 1 ", $con );
            $lmname[] = $tmpname;
        }
        $lmname = array_reverse( $lmname );
        $respond = $vida->vConcatStrs( "<-|x|->", $lmname );
        
        mysql_close( $con );
        echo $respond;
    }

?>