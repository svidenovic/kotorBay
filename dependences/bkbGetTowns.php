<?php

    require("mySQLvalues.php");
    require("vjswebtools.php");
    $host = vhost();
    $user = vuser();
    $pass = vpass();
    $dbnm = vdbname();
    $vida = new vida();
    $respond = "";
    
    $con = mysql_connect( $host, $user, $pass );
    if( $con )
    {
        mysql_select_db( $dbnm, $con );
        
        $tmparr = array();
        $ttmp = array();
        $tmp = "";
        $tnor = $vida->vmysqlSelect( "count(tmname)", "SELECT <> FROM town", $con );
        $tnor = (int)$tnor;
        for( $t=0; $t<$tnor; $t++ )
        {
            $ttmp[0] = $vida->vmysqlSelect( "tmname", "SELECT <> FROM town LIMIT ".$t.", 1", $con );
            $ttmp[1] = $vida->vmysqlSelect( "tmimage", "SELECT <> FROM town LIMIT ".$t.", 1", $con );
            $tmp = $vida->vConcatStrs( "<:x:>", $ttmp );
            $tmparr[] = $tmp;
        }
        $respond = $vida->vConcatStrs( "|-(x)-|", $tmparr );
        
        mysql_close( $con );
        echo $respond;
    }

?>