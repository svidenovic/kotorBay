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
        
        $table = "lore_".$lang;
        $lmarr = array();
        $lmarr[] = $vida->vmysqlSelect( "lmtext", "SELECT <> FROM ".$table." WHERE lmname='".$pname."'", $con );
        $lmarr[] = $vida->vmysqlSelect( "lmimages", "SELECT <> FROM ".$table." WHERE lmname='".$pname."'", $con );
        $lmarr[] = $vida->vmysqlSelect( "lmtown", "SELECT <> FROM ".$table." WHERE lmname='".$pname."'", $con );
        $respond = $vida->vConcatStrs( ".:|x|:.", $lmarr );
        
        mysql_close( $con );
        echo $respond;
    }

?>