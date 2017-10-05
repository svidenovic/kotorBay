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
    $town = $_POST["town"];
    
    $con = mysql_connect( $host, $user, $pass );
    if( $con )
    {
        mysql_select_db( $dbnm, $con );
        
        $table = "lore_".$lang;
        $noe = $vida->vmysqlSelect("count(lmname)","SELECT <> FROM ".$table,$con);
        $noe = (int)$noe;
        $earr = array();
        $arry = array();
        for( $n=0; $n<$noe; $n++ )
        {
            $arry[0] = $vida->vmysqlSelect("lmname","SELECT <> FROM ".$table." LIMIT ".$n.", 1",$con);
            $arry[1] = $vida->vmysqlSelect("lmtext","SELECT <> FROM ".$table." LIMIT ".$n.", 1",$con);
            $arry[2] = $vida->vmysqlSelect("lmimages","SELECT <> FROM ".$table." LIMIT ".$n.", 1",$con);
            $testown = $vida->vmysqlSelect("lmtown","SELECT <> FROM ".$table." LIMIT ".$n.", 1",$con);
            if($testown==$town){
                $earr[] = $vida->vConcatStrs( "<::x::>", $arry );
            }
        }
        $earr = array_reverse( $earr );
        if( sizeof($earr) >= 1 ){
        $respond = $vida->vConcatStrs( "|]:|x|:[|", $earr ); }
        else{ $respond = "nothing"; }
        
        mysql_close( $con );
        echo $respond;
    }

?>