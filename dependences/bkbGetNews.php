<?php

    require("mySQLvalues.php");
    require("vjswebtools.php");
    $host = vhost();
    $user = vuser();
    $pass = vpass();
    $dbnm = vdbname();
    $vida = new vida();
    $respond = "";
    
    $lang = $_POST["lang"];
    $table = "news_".$lang;
    $news = array();
    
    $con = mysql_connect( $host, $user, $pass );
    if( $con )
    {
        mysql_select_db( $dbnm, $con );
        
        $nor = $vida->vmysqlSelect( "count(nmtitle)", "SELECT <> FROM ".$table, $con );
        $nor = (int)$nor;
        for( $i=0; $i<$nor; $i++ )
        {
            $news[$i][0]  = $vida->vmysqlSelect( "nmmain", "SELECT <> FROM ".$table." LIMIT ".$i.", 1 ", $con );
            $news[$i][1] = $vida->vmysqlSelect( "nmlink2", "SELECT <> FROM ".$table." LIMIT ".$i.", 1 ", $con );
            $news[$i][2]  = $vida->vmysqlSelect( "nmname", "SELECT <> FROM ".$table." LIMIT ".$i.", 1 ", $con );
            $news[$i][3] = $vida->vmysqlSelect( "nmtitle", "SELECT <> FROM ".$table." LIMIT ".$i.", 1 ", $con );
            $news[$i][4]  = $vida->vmysqlSelect( "nmtext", "SELECT <> FROM ".$table." LIMIT ".$i.", 1 ", $con );
            $news[$i][5] = $vida->vmysqlSelect( "nmvideo", "SELECT <> FROM ".$table." LIMIT ".$i.", 1 ", $con );
            $news[$i][6] = $vida->vmysqlSelect( "nmimage", "SELECT <> FROM ".$table." LIMIT ".$i.", 1 ", $con );
        }
        $news = array_reverse($news);
        $tmp = ""; $tmparr = array();
        for( $o=0; $o<$nor; $o++ ){
            $tmp = $vida->vConcatStrs( "<:-x-:>", $news[$o] );
            $tmparr[] = $tmp;
        } $respond = $vida->vConcatStrs( "|.:|x|:.|", $tmparr );
        
        mysql_close( $con );
        echo $respond;
    }

?>