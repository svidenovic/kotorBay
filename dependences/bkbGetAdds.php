<?php

    require("mySQLvalues.php");
    require("vjswebtools.php");
    $host = vhost();
    $user = vuser();
    $pass = vpass();
    $dbnm = vdbname();
    $vida = new vida();
    $respond = "";
    $addsarr = array();
    $tmparr = array();
    
    $con = mysql_connect( $host, $user, $pass );
    if( $con )
    {
        mysql_select_db( $dbnm, $con );
        
        $noa = (int)($vida->vmysqlSelect("count(amname)","SELECT <> FROM bkbadds",$con));
        for( $a=0; $a<$noa; $a++ )
        {
            $tmparr[0]=$vida->vmysqlSelect("amname","SELECT <> FROM bkbadds LIMIT ".$a.", 1 ",$con);
            $tmparr[1]=$vida->vmysqlSelect("amimages","SELECT <> FROM bkbadds LIMIT ".$a.", 1 ",$con);
            $tmparr[2]=$vida->vmysqlSelect("amlink2","SELECT <> FROM bkbadds LIMIT ".$a.", 1 ",$con);
            $tmparr[3]=$vida->vmysqlSelect("amownbaner","SELECT <> FROM bkbadds LIMIT ".$a.", 1 ",$con);
            $tmparr[4]=$vida->vmysqlSelect("amheight","SELECT <> FROM bkbadds LIMIT ".$a.", 1 ",$con);
            $addsarr[] = $vida->vConcatStrs("(:x:)",$tmparr);
        }
        $respond = $vida->vConcatStrs("[[[x]]]",$addsarr);
        
        mysql_close( $con );
        echo $respond;
    }

?>