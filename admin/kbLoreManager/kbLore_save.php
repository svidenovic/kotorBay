<?php

    require( "../../dependences/mySQLvalues.php" );
    require( "../../dependences/vjswebtools.php" );
    $host = vhost();
    $user = vuser();
    $pass = vpass();
    $dbnm = vdbname();
    $vida = new vida();
    $respond = "";
    
    $lmlang = $_POST["lmlang"];
    $lmtown = $_POST["lmtown"];
    $lmname = $_POST["lmname"];
    $lmtext = $_POST["lmtext"];
    $lmimages = $_POST["lmimages"];
    
    $lang = "";
    switch( $lmlang ){
        case "english": $lang="eng"; break;
        case "russian": $lang="rus"; break;
        case "yugoslovenian": $lang="yug"; break;
        default: break;
    }
    
    $con = mysql_connect( $host, $user, $pass );
    if( $con )
    {
        mysql_select_db( $dbnm, $con );
        
        $table = "lore_".$lang;
        
        $name_exists = false;
        $nor = $vida->vmysqlSelect( "count(lmname)", "SELECT <> FROM ".$table, $con );
        $nor = (int)$nor;
        for( $i=0; $i<$nor; $i++ ){
            $testname = $vida->vmysqlSelect( "lmname", "SELECT <> FROM ".$table." LIMIT ".$i.", 1 ", $con );
            ($testname==$lmname)? $name_exists=true : $name_exists=false;
            if($name_exists){break;}
        }
        if( $name_exists ){
            $tempvar = "lmlang='".$lang."', lmtown='".$lmtown."', lmtext='".$lmtext."', lmimages='".$lmimages."'";
            $query = "UPDATE ".$table." SET ".$tempvar." WHERE lmname='".$lmname."'";
            mysql_query( $query, $con );
            $respond = "Edited";
        }
        elseif( !$name_exists ){
            $tempvar1 = " (lmlang,lmtown,lmname,lmtext,lmimages) ";
            $tempvar2 = " ('".$lang."','".$lmtown."','".$lmname."','".$lmtext."','".$lmimages."') ";
            $query = "INSERT INTO ".$table.$tempvar1."VALUES".$tempvar2;
            mysql_query( $query, $con );
            $respond = "Saved";
        }
        
        mysql_close( $con );
        echo $respond;
    }

?>