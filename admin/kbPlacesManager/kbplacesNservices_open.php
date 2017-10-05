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
        
        $table = "placesnservices_".$lang;
        $pmarr = array();
        $pmarr[] = $vida->vmysqlSelect( "pmtype", "SELECT <> FROM ".$table." WHERE pmname='".$pname."'", $con );
        $pmarr[] = $vida->vmysqlSelect( "pmMainImg", "SELECT <> FROM ".$table." WHERE pmname='".$pname."'", $con );
        $pmarr[] = $vida->vmysqlSelect( "pmtext", "SELECT <> FROM ".$table." WHERE pmname='".$pname."'", $con );
        $pmarr[] = $vida->vmysqlSelect( "pmimages", "SELECT <> FROM ".$table." WHERE pmname='".$pname."'", $con );
        $pmarr[] = $vida->vmysqlSelect( "pmtown", "SELECT <> FROM ".$table." WHERE pmname='".$pname."'", $con );
        $pmarr[] = $vida->vmysqlSelect( "pmstars", "SELECT <> FROM ".$table." WHERE pmname='".$pname."'", $con );
        $pmarr[] = $vida->vmysqlSelect( "link2site", "SELECT <> FROM ".$table." WHERE pmname='".$pname."'", $con );
        $pmarr[] = (int)$vida->vmysqlSelect( "pmvisits", "SELECT <> FROM ".$table." WHERE pmname='".$pname."'", $con );
        $respond = $vida->vConcatStrs( ".:|x|:.", $pmarr );
        
        mysql_close( $con );
        echo $respond;
    }

?>