<?php

    require( "../../dependences/mySQLvalues.php" );
    require( "../../dependences/vjswebtools.php" );
    $host = vhost();
    $user = vuser();
    $pass = vpass();
    $dbnm = vdbname();
    $vida = new vida();
    $respond = "";
    
    $dlang  = $_POST["dlang"];
    $dtitle = $_POST["dtitle"];
    
    $lang = "";
    switch( $dlang ){
        case "english": $lang="eng"; break;
        case "russian": $lang="rus"; break;
        case "yugoslovenian": $lang="yug"; break;
        default: break;
    }
    
    $con = mysql_connect( $host, $user, $pass );
    if( $con )
    {
        mysql_select_db( $dbnm, $con );
        
        $table = "news_".$lang;
        mysql_query( "DELETE FROM ".$table." WHERE nmtitle='".$dtitle."'", $con );
        $respond = "Deleted";
        
        mysql_close( $con );
        echo $respond;
    }

?>