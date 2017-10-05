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
        
        $table = "news_".$lang;
        $nmtitlearray = array();
        $nor = $vida->vmysqlSelect( "count(nmtitle)", "SELECT <> FROM ".$table, $con );
        $nor = (int)$nor;
        for( $n=0; $n<$nor; $n++ ){
            $nmtitlearray[] = $vida->vmysqlSelect( "nmtitle", "SELECT <> FROM ".$table." LIMIT ".$n.", 1", $con );
        }
        if( sizeof($nmtitlearray) >= 1 )
        { $respond = $vida->vConcatStrs( "|=|x|=|", array_reverse($nmtitlearray) ); }
        else{ $respond = "nothing"; }
        
        mysql_close( $con );
        echo $respond;
    }
    
?>