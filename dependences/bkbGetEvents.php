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
    
    $con = mysql_connect( $host, $user, $pass );
    if( $con )
    {
        mysql_select_db( $dbnm, $con );
        
        $table = "events_".$lang;
        $noe = $vida->vmysqlSelect("count(emname)","SELECT <> FROM ".$table,$con);
        $noe = (int)$noe;
        $earr = array();
        $arry = array();
        for( $n=0; $n<$noe; $n++ )
        {
            $arry[0] = $vida->vmysqlSelect("emname","SELECT <> FROM ".$table." LIMIT ".$n.", 1",$con);
            $arry[1] = $vida->vmysqlSelect("emMainImg","SELECT <> FROM ".$table." LIMIT ".$n.", 1",$con);
            $arry[2] = $vida->vmysqlSelect("emtext","SELECT <> FROM ".$table." LIMIT ".$n.", 1",$con);
            $arry[3] = $vida->vmysqlSelect("emimages","SELECT <> FROM ".$table." LIMIT ".$n.", 1",$con);
            $arry[4] = $vida->vmysqlSelect("emvideolinx","SELECT <> FROM ".$table." LIMIT ".$n.", 1",$con);
            $earr[] = $vida->vConcatStrs( "<::x::>", $arry );
        }
        $earr = array_reverse( $earr );
        if( sizeof($earr) >= 1 ){
        $respond = $vida->vConcatStrs( "|]:|x|:[|", $earr ); }
        else{ $respond = "nothing"; }
        
        mysql_close( $con );
        echo $respond;
    }

?>