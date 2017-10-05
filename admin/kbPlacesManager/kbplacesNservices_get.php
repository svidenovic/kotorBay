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
        
        $table = "placesnservices_".$lang;
        
        $nor = $vida->vmysqlSelect( "count(pmname)", "SELECT <> FROM ".$table, $con );
        $nor = (int)$nor;
        
        $pmname = array();
        for( $x=0; $x<$nor; $x++ ){
            $tmpname = $vida->vmysqlSelect( "pmname", "SELECT <> FROM ".$table." LIMIT ".$x.", 1 ", $con );
            $tmptype = $vida->vmysqlSelect( "pmtype", "SELECT <> FROM ".$table." LIMIT ".$x.", 1 ", $con );
            if( $tmptype==$loadType )
            { $pmname[] = $tmpname; }
        }
        $pmname = array_reverse( $pmname );
        $respond = $vida->vConcatStrs( "<-|x|->", $pmname );
        
        mysql_close( $con );
        echo $respond;
    }

?>