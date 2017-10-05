<?php

    require( "../../dependences/mySQLvalues.php" );
    require( "../../dependences/vjswebtools.php" );
    $host = vhost();
    $user = vuser();
    $pass = vpass();
    $dbnm = vdbname();
    $vida = new vida();
    $respond = "";
    
    $ilang  = $_POST["ilang"];
    $ilink2 = $_POST["ilink2"];
    $iname  = $_POST["iname"];
    
    $lang = "";
    switch( $ilang ){
        case "english": $lang="eng"; break;
        case "russian": $lang="rus"; break;
        case "yugoslovenian": $lang="yug"; break;
        default: break;
    }
    
    $con = mysql_connect( $host, $user, $pass );
    if( $con )
    {
        mysql_select_db( $dbnm, $con );
        
        $ninfo = array();
        $table = "";
        if( $ilink2=="catering%20facilities"||$ilink2=="venues"||$ilink2=="services" )
        {
            $table = "placesnservices_".$lang;
            $ninfo[0] = $vida->vmysqlSelect( "pmtext", "SELECT <> FROM ".$table." WHERE pmtype='".$ilink2."' AND pmname='".$iname."'", $con );
            $ninfo[1] = "none";
            $ninfo[2] = $vida->vmysqlSelect( "pmMainImg", "SELECT <> FROM ".$table." WHERE pmtype='".$ilink2."' AND pmname='".$iname."'", $con );
        }
        elseif( $ilink2=="events" )
        {
            $table = "events_".$lang;
            $ninfo[0] = $vida->vmysqlSelect( "emtext", "SELECT <> FROM ".$table." WHERE emname='".$iname."'", $con );
            $ninfo[1] = $vida->vmysqlSelect( "emvideolinx", "SELECT <> FROM ".$table." WHERE emname='".$iname."'", $con );
            $ninfo[2] = $vida->vmysqlSelect( "emMainImg", "SELECT <> FROM ".$table." WHERE emname='".$iname."'", $con );
        }
        $respond = $vida->vConcatStrs( ".:|x|:.", $ninfo );
        
        mysql_close( $con );
        echo $respond;
    }

?>