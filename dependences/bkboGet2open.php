<?php

    require("mySQLvalues.php");
    require("vjswebtools.php");
    $host = vhost();
    $user = vuser();
    $pass = vpass();
    $dbnm = vdbname();
    $vida = new vida();
    $respond = "";
    
    $otype = $_POST["otype"];
    $oname = $_POST["oname"];
    $olang = $_POST["olang"];
    
    $table = "";
    $vals = array();
    
    $con = mysql_connect( $host, $user, $pass );
    if( $con )
    {
        mysql_select_db( $dbnm, $con );
        
        switch($otype){
            case "catering%20facilities":
                $table="placesnservices_".$olang;
                $vals[0]=$vida->vmysqlSelect("pmMainImg","SELECT <> FROM ".$table." WHERE pmname='".$oname."' AND pmtype='".$otype."' ",$con);
                $vals[1]=$vida->vmysqlSelect("pmtext","SELECT <> FROM ".$table." WHERE pmname='".$oname."' AND pmtype='".$otype."' ",$con);
                $vals[2]=$vida->vmysqlSelect("pmimages","SELECT <> FROM ".$table." WHERE pmname='".$oname."' AND pmtype='".$otype."' ",$con);
                $vals[3]=$vida->vmysqlSelect("pmtown","SELECT <> FROM ".$table." WHERE pmname='".$oname."' AND pmtype='".$otype."' ",$con);
                $vals[4]=$vida->vmysqlSelect("pmstars","SELECT <> FROM ".$table." WHERE pmname='".$oname."' AND pmtype='".$otype."' ",$con);
                $vals[5]=$vida->vmysqlSelect("link2site","SELECT <> FROM ".$table." WHERE pmname='".$oname."' AND pmtype='".$otype."' ",$con);
                break;
            case "venues":
                $table="placesnservices_".$olang;
                $vals[0]=$vida->vmysqlSelect("pmMainImg","SELECT <> FROM ".$table." WHERE pmname='".$oname."' AND pmtype='".$otype."' ",$con);
                $vals[1]=$vida->vmysqlSelect("pmtext","SELECT <> FROM ".$table." WHERE pmname='".$oname."' AND pmtype='".$otype."' ",$con);
                $vals[2]=$vida->vmysqlSelect("pmimages","SELECT <> FROM ".$table." WHERE pmname='".$oname."' AND pmtype='".$otype."' ",$con);
                $vals[3]=$vida->vmysqlSelect("pmtown","SELECT <> FROM ".$table." WHERE pmname='".$oname."' AND pmtype='".$otype."' ",$con);
                $vals[4]=$vida->vmysqlSelect("pmstars","SELECT <> FROM ".$table." WHERE pmname='".$oname."' AND pmtype='".$otype."' ",$con);
                $vals[5]=$vida->vmysqlSelect("link2site","SELECT <> FROM ".$table." WHERE pmname='".$oname."' AND pmtype='".$otype."' ",$con);
                break;
            case "services":
                $table="placesnservices_".$olang;
                $vals[0]=$vida->vmysqlSelect("pmMainImg","SELECT <> FROM ".$table." WHERE pmname='".$oname."' AND pmtype='".$otype."' ",$con);
                $vals[1]=$vida->vmysqlSelect("pmtext","SELECT <> FROM ".$table." WHERE pmname='".$oname."' AND pmtype='".$otype."' ",$con);
                $vals[2]=$vida->vmysqlSelect("pmimages","SELECT <> FROM ".$table." WHERE pmname='".$oname."' AND pmtype='".$otype."' ",$con);
                $vals[3]=$vida->vmysqlSelect("pmtown","SELECT <> FROM ".$table." WHERE pmname='".$oname."' AND pmtype='".$otype."' ",$con);
                $vals[4]=$vida->vmysqlSelect("pmstars","SELECT <> FROM ".$table." WHERE pmname='".$oname."' AND pmtype='".$otype."' ",$con);
                $vals[5]=$vida->vmysqlSelect("link2site","SELECT <> FROM ".$table." WHERE pmname='".$oname."' AND pmtype='".$otype."' ",$con);
                break;
            case "events":
                $table="events_".$olang;
                $vals[0]=$vida->vmysqlSelect("emMainImg","SELECT <> FROM ".$table." WHERE emname='".$oname."' ",$con);
                $vals[1]=$vida->vmysqlSelect("emtext","SELECT <> FROM ".$table." WHERE emname='".$oname."' ",$con);
                $vals[2]=$vida->vmysqlSelect("emimages","SELECT <> FROM ".$table." WHERE emname='".$oname."' ",$con);
                $vals[3]=$vida->vmysqlSelect("emvideolinx","SELECT <> FROM ".$table." WHERE emname='".$oname."' ",$con);
                break;
            case "lore":
                $table="lore_".$olang;
                $vals[0]=$vida->vmysqlSelect("lmtext","SELECT <> FROM ".$table." WHERE lmname='".$oname."' ",$con);
                $vals[1]=$vida->vmysqlSelect("lmimages","SELECT <> FROM ".$table." WHERE lmname='".$oname."' ",$con);
                break;
            default: break;
        }    
        $respond = $vida->vConcatStrs("|<.:x:.>|",$vals);
        
        mysql_close( $con );
        echo $respond;
    }

?>