<?php

    require( "../../dependences/mySQLvalues.php" );
    require( "../../dependences/vjswebtools.php" );
    $host = vhost();
    $user = vuser();
    $pass = vpass();
    $dbnm = vdbname();
    $vida = new vida();
    $respond = "";
    
    $emlang = $_POST["emlang"];
    $emname = $_POST["emname"];
    $emMainImg = $_POST["emMainImg"];
    $emtext = $_POST["emtext"];
    $emimages = $_POST["emimages"];
    $emvideos = $_POST["emvideos"];
    
    $lang = "";
    switch( $emlang ){
        case "english": $lang="eng"; break;
        case "russian": $lang="rus"; break;
        case "yugoslovenian": $lang="yug"; break;
        default: break;
    }
    
    $con = mysql_connect( $host, $user, $pass );
    if( $con )
    {
        mysql_select_db( $dbnm, $con );
        
        $table = "events_".$lang;
        
        $name_exists = false;
        $nor = $vida->vmysqlSelect( "count(emname)", "SELECT <> FROM ".$table, $con );
        $nor = (int)$nor;
        for( $i=0; $i<$nor; $i++ ){
            $testname = $vida->vmysqlSelect( "emname", "SELECT <> FROM ".$table." LIMIT ".$i.", 1 ", $con );
            ($testname==$emname)? $name_exists=true : $name_exists=false;
            if($name_exists){break;}
        }
        if( $name_exists ){
            $tempvar = "emlang='".$lang."', emMainImg='".$emMainImg."', emtext='".$emtext."', emimages='".$emimages."', emvideolinx='".$emvideos."'";
            $query = "UPDATE ".$table." SET ".$tempvar." WHERE emname='".$emname."'";
            mysql_query( $query, $con );
            $respond = "Edited";
        }
        elseif( !$name_exists ){
            $tempvar1 = " (emlang,emname,emMainImg,emtext,emimages,emvideolinx) ";
            $tempvar2 = " ('".$lang."','".$emname."','".$emMainImg."','".$emtext."','".$emimages."','".$emvideos."') ";
            $query = "INSERT INTO ".$table.$tempvar1."VALUES".$tempvar2;
            mysql_query( $query, $con );
            $respond = "Saved";
        }
        
        mysql_close( $con );
        echo $respond;
    }

?>