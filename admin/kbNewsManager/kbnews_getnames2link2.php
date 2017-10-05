<?php

    require( "../../dependences/mySQLvalues.php" );
    require( "../../dependences/vjswebtools.php" );
    $host = vhost();
    $user = vuser();
    $pass = vpass();
    $dbnm = vdbname();
    $vida = new vida();
    $respond = "";
    
    $llang = $_POST["llang"];
    $link2 = $_POST["link2"];
    
    $lang = "";
    switch( $llang ){
        case "english": $lang="eng"; break;
        case "russian": $lang="rus"; break;
        case "yugoslovenian": $lang="yug"; break;
        default: break;
    }
    
    $con = mysql_connect( $host, $user, $pass );
    if( $con )
    {
        mysql_select_db( $dbnm, $con );
        
        $names = array();
        $table = "";
        if( $link2=="catering%20facilities"||$link2=="venues"||$link2=="services" )
        {
            $table = "placesnservices_".$lang;
            $nor = $vida->vmysqlSelect( "count(pmname)", "SELECT <> FROM ".$table." WHERE pmtype='".$link2."'", $con );
            $nor = (int)$nor;
            for( $n=0; $n<$nor; $n++ ){
                // "SELECT <> FROM ".$table." WHERE pmtype='".$link2."' ORDER BY pmtype DESC LIMIT ".$n.", 1 "
                $names[] = $vida->vmysqlSelect( "pmname", "SELECT <> FROM ".$table." WHERE pmtype='".$link2."' ORDER BY pmtype DESC LIMIT ".$n.", 1 ", $con );
            }
        }
        elseif( $link2=="events" )
        {
            $table = "events_".$lang;
            $enor = $vida->vmysqlSelect( "count(emname)", "SELECT <> FROM ".$table, $con );
            $enor = (int)$enor;
            for( $e=0; $e<$enor; $e++ ){
                $names[] = $vida->vmysqlSelect( "emname", "SELECT <> FROM ".$table." LIMIT ".$e.", 1 ", $con );
            }
        }
        if( sizeof($names) >= 1 )
        { $respond = $vida->vConcatStrs( "|-|x|-|", $names ); }
        else{ $respond = "nothing"; }
        
        mysql_close( $con );
        echo $respond;
    }

?>