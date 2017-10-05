<?php

    require("mySQLvalues.php");
    require("vjswebtools.php");
    $host = vhost();
    $user = vuser();
    $pass = vpass();
    $dbnm = vdbname();
    $vida = new vida();
    $respond = "";
    
    $svcType = $_POST["svcType"];
    $svcLang = $_POST["svcLang"];
    $town = $_POST["town"];
    
    $con = mysql_connect( $host, $user, $pass );
    if( $con )
    {
        mysql_select_db( $dbnm, $con );
        
        $table = "placesnservices_".$svcLang;
        $not = $vida->vmysqlSelect("count(pmname)","SELECT <> FROM ".$table,$con);
        $not = (int)$not;
        $svcarr = array();
        $arry = array();
        for( $n=0; $n<$not; $n++ )
        {
            $pmtype = $vida->vmysqlSelect("pmtype","SELECT <> FROM ".$table." LIMIT ".$n.", 1",$con);
            $pmtown = $vida->vmysqlSelect("pmtown","SELECT <> FROM ".$table." LIMIT ".$n.", 1",$con);
            if( $svcType==$pmtype && $town==$pmtown )
            {
                $arry[0] = $vida->vmysqlSelect("pmname","SELECT <> FROM ".$table." LIMIT ".$n.", 1",$con);
                $arry[1] = $vida->vmysqlSelect("pmMainImg","SELECT <> FROM ".$table." LIMIT ".$n.", 1",$con);
                $arry[2] = $vida->vmysqlSelect("pmtext","SELECT <> FROM ".$table." LIMIT ".$n.", 1",$con);
                $arry[3] = $vida->vmysqlSelect("pmimages","SELECT <> FROM ".$table." LIMIT ".$n.", 1",$con);
                $svcarr[] = $vida->vConcatStrs( "<::x::>", $arry );
                //$respond = $arry[0];
            }
        }
        $svcarr = array_reverse( $svcarr );
        if( sizeof($svcarr) >= 1 ){
        $respond = $vida->vConcatStrs( "|]:|x|:[|", $svcarr ); }
        else{ $respond = "nothing"; }
        
        mysql_close( $con );
        echo $respond;
    }

?>