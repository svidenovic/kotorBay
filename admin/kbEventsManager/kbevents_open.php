<?php

    require( "../../dependences/mySQLvalues.php" );
    require( "../../dependences/vjswebtools.php" );
    $host = vhost();
    $user = vuser();
    $pass = vpass();
    $dbnm = vdbname();
    $vida = new vida();
    $respond = "";
    
    $pname = $_POST["pname"];
    $plang = $_POST["plang"];
    
    $lang = "";
    switch( $plang ){
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
        $emarr = array();
        $emarr[] = $vida->vmysqlSelect( "emMainImg", "SELECT <> FROM ".$table." WHERE emname='".$pname."'", $con );
        $emarr[] = $vida->vmysqlSelect( "emtext", "SELECT <> FROM ".$table." WHERE emname='".$pname."'", $con );
        $emarr[] = $vida->vmysqlSelect( "emimages", "SELECT <> FROM ".$table." WHERE emname='".$pname."'", $con );
        $emarr[] = $vida->vmysqlSelect( "emvideolinx", "SELECT <> FROM ".$table." WHERE emname='".$pname."'", $con );
        $respond = $vida->vConcatStrs( ".:|x|:.", $emarr );
        
        mysql_close( $con );
        echo $respond;
    }

?>