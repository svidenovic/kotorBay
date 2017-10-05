<?php

    require( "../../dependences/mySQLvalues.php" );
    require( "../../dependences/vjswebtools.php" );
    $host = vhost();
    $user = vuser();
    $pass = vpass();
    $dbnm = vdbname();
    $vida = new vida();
    $respond = "";
    
    $tmname = $_POST["tmname"];
    $tmMainImg = $_POST["tmMainImg"];
    
    $con = mysql_connect( $host, $user, $pass );
    if( $con )
    {
        mysql_select_db( $dbnm, $con );
        
        $table = "town";
        
        $name_exists = false;
        $nor = $vida->vmysqlSelect( "count(tmname)", "SELECT <> FROM ".$table, $con );
        $nor = (int)$nor;
        for( $i=0; $i<$nor; $i++ ){
            $testname = $vida->vmysqlSelect( "tmname", "SELECT <> FROM ".$table." LIMIT ".$i.", 1 ", $con );
            ($testname==$tmname)? $name_exists=true : $name_exists=false;
            if($name_exists){break;}
        }
        if( $name_exists ){
            $tempvar = "tmimage='".$tmMainImg."'";
            $query = "UPDATE ".$table." SET ".$tempvar." WHERE tmname='".$tmname."'";
            mysql_query( $query, $con );
            $respond = "Edited";
        }
        elseif( !$name_exists ){
            $tempvar1 = " (tmname,tmimage) ";
            $tempvar2 = " ('".$tmname."','".$tmMainImg."') ";
            $query = "INSERT INTO ".$table.$tempvar1."VALUES".$tempvar2;
            mysql_query( $query, $con );
            $respond = "Saved";
        }
        
        mysql_close( $con );
        echo $respond;
    }

?>