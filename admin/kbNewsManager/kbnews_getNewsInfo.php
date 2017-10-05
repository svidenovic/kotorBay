<?php

    require( "../../dependences/mySQLvalues.php" );
    require( "../../dependences/vjswebtools.php" );
    $host = vhost();
    $user = vuser();
    $pass = vpass();
    $dbnm = vdbname();
    $vida = new vida();
    $respond = "";
    
    $slang  = $_POST["slang"];
    $stitle = $_POST["stitle"];
    
    $lang = "";
    switch( $slang ){
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
        $nmarray = array();
        $nor = $vida->vmysqlSelect( "count(nmtitle)", "SELECT <> FROM ".$table, $con );
        $nor = (int)$nor;
        for( $n=0; $n<$nor; $n++ ){
            $nmarray[0] = $vida->vmysqlSelect( "nmmain", "SELECT <> FROM ".$table." WHERE nmtitle='".$stitle."'", $con );
            $nmarray[1] = $vida->vmysqlSelect( "nmlink2", "SELECT <> FROM ".$table." WHERE nmtitle='".$stitle."'", $con );
            $nmarray[2] = $vida->vmysqlSelect( "nmname", "SELECT <> FROM ".$table." WHERE nmtitle='".$stitle."'", $con );
            $nmarray[3] = $vida->vmysqlSelect( "nmtext", "SELECT <> FROM ".$table." WHERE nmtitle='".$stitle."'", $con );
            $nmarray[4] = $vida->vmysqlSelect( "nmvideo", "SELECT <> FROM ".$table." WHERE nmtitle='".$stitle."'", $con );
            if( $nmarray[4]==""||$nmarray[4]==null ){ $nmarray[4] = "none"; }
            $nmarray[5] = $vida->vmysqlSelect( "nmimage", "SELECT <> FROM ".$table." WHERE nmtitle='".$stitle."'", $con );
        }
        $respond = $vida->vConcatStrs( ".:|x|:.", $nmarray );
        
        mysql_close( $con );
        echo $respond;
    }

?>