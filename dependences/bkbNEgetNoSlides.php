<?php

    require("mySQLvalues.php");
    require("vjswebtools.php");
    $host = vhost();
    $user = vuser();
    $pass = vpass();
    $dbnm = vdbname();
    $vida = new vida();
    $respond = "";
    
    $lang = $_POST["lan"];
    $eps = $_POST["eps"];
    $table = "news_".$lang;
    
    $con = mysql_connect( $host, $user, $pass );
    if( $con )
    {
        mysql_select_db( $dbnm, $con );
        
        $nor = $vida->vmysqlSelect( "count(nmtitle)", "SELECT <> FROM ".$table, $con );
        $nor = (int)$nor;
        $eps = (int)$eps;
        $spare = $nor%$eps;
        $wholes = ($nor-$spare)/$eps;
        $numberOslides = $wholes+(($spare==0)?0:1);
        $respond = $numberOslides;
        
        mysql_close( $con );
        echo $respond;
    }

?>