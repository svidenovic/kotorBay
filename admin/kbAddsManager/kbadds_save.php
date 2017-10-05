<?php

    require( "../../dependences/mySQLvalues.php" );
    require( "../../dependences/vjswebtools.php" );
    $host = vhost();
    $user = vuser();
    $pass = vpass();
    $dbnm = vdbname();
    $vida = new vida();
    $respond = "";

    $amname   = $_POST["amname"];
    $amimages = $_POST["amimages"];
    $amlink2s = $_POST["amlink2s"];
    $amownb   = $_POST["amownb"];
    $amheight = $_POST["amheight"];
    
    $con = mysql_connect( $host, $user, $pass );
    if( $con )
    {
        mysql_select_db( $dbnm, $con );
        
        $table = "bkbadds";
        
        $name_exists = false;
        $nor = $vida->vmysqlSelect( "count(amname)", "SELECT <> FROM ".$table, $con );
        $nor = (int)$nor;
        for( $i=0; $i<$nor; $i++ ){
            $testname = $vida->vmysqlSelect( "amname", "SELECT <> FROM ".$table." LIMIT ".$i.", 1 ", $con );
            ($testname==$amname)? $name_exists=true : $name_exists=false;
            if($name_exists){break;}
        }
        if( $name_exists ){
            $tempvar = "amimages='".$amimages."', amlink2='".$amlink2s."', amownbaner='".$amownb."', amheight=".$amheight." ";
            $query = "UPDATE ".$table." SET ".$tempvar." WHERE amname='".$amname."'";
            mysql_query( $query, $con );
            $respond = "Edited";
        }
        elseif( !$name_exists ){
            $tempvar1 = " (amname,amimages,amlink2,amownbaner,amheight) ";
            $tempvar2 = " ('".$amname."','".$amimages."','".$amlink2s."','".$amownb."',".$amheight.") ";
            $query = "INSERT INTO ".$table.$tempvar1."VALUES".$tempvar2;
            mysql_query( $query, $con );
            $respond = "Saved";
        }
        
        mysql_close( $con );
        echo $respond;
    }

?>