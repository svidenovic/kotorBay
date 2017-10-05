<?php

    require( "../../dependences/mySQLvalues.php" );
    require( "../../dependences/vjswebtools.php" );
    $host = vhost();
    $user = vuser();
    $pass = vpass();
    $dbnm = vdbname();
    $vida = new vida();
    $respond = "";
    
    $pmtype = $_POST["pmtype"];
    $pmlang = $_POST["pmlang"];
    $pmtown = $_POST["pmtown"];
    $pmstars = $_POST["pmstars"];
    $link2s = $_POST["link2s"];
    $pmvisits = $_POST["pmvisits"];
    $pmname = $_POST["pmname"];
    $pmMainImg = $_POST["pmMainImg"];
    $pmtext = $_POST["pmtext"];
    $pmimages = $_POST["pmimages"];
    
    $lang = "";
    switch( $pmlang ){
        case "english": $lang="eng"; break;
        case "russian": $lang="rus"; break;
        case "yugoslovenian": $lang="yug"; break;
        default: break;
    }
    
    $con = mysql_connect( $host, $user, $pass );
    if( $con )
    {
        mysql_select_db( $dbnm, $con );
        
        $table = "placesnservices_".$lang;
        
        $name_exists = false;
        $nor = $vida->vmysqlSelect( "count(pmname)", "SELECT <> FROM ".$table, $con );
        $nor = (int)$nor;
        for( $i=0; $i<$nor; $i++ ){
            $testname = $vida->vmysqlSelect( "pmname", "SELECT <> FROM ".$table." LIMIT ".$i.", 1 ", $con );
            ($testname==$pmname)? $name_exists=true : $name_exists=false;
            if($name_exists){break;}
        }
        if( $name_exists ){
            $tempvar = "pmtype='".$pmtype."', pmlang='".$lang."', pmMainImg='".$pmMainImg."', pmtext='".$pmtext."', pmimages='".$pmimages."', pmtown='".$pmtown."', pmstars='".$pmstars."', link2site='".$link2s."', pmvisits='".$pmvisits."' ";
            $query = "UPDATE ".$table." SET ".$tempvar." WHERE pmname='".$pmname."'";
            mysql_query( $query, $con );
            $respond = "Edited";
        }
        elseif( !$name_exists ){
            $tempvar1 = " (pmtype,pmlang,pmname,pmMainImg,pmtext,pmimages,pmtown,pmstars,link2site,pmvisits) ";
            $tempvar2 = " ('".$pmtype."','".$lang."','".$pmname."','".$pmMainImg."','".$pmtext."','".$pmimages."','".$pmtown."','".$pmstars."','".$link2s."','".$pmvisits."') ";
            $query = "INSERT INTO ".$table.$tempvar1."VALUES".$tempvar2;
            mysql_query( $query, $con );
            $respond = "Saved";
        }
        
        mysql_close( $con );
        echo $respond;
    }

?>