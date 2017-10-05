<?php

    require( "../../dependences/mySQLvalues.php" );
    require( "../../dependences/vjswebtools.php" );
    $host = vhost();
    $user = vuser();
    $pass = vpass();
    $dbnm = vdbname();
    $vida = new vida();
    $respond = "";
    
    $pname = $_POST["pname"];
    
    $con = mysql_connect( $host, $user, $pass );
    if( $con )
    {
        mysql_select_db( $dbnm, $con );
        
        $table = "bkbadds";
        $amarr = array();
        $amarr[] = $vida->vmysqlSelect( "amimages", "SELECT <> FROM ".$table." WHERE amname='".$pname."'", $con );
        $amarr[] = $vida->vmysqlSelect( "amlink2", "SELECT <> FROM ".$table." WHERE amname='".$pname."'", $con );
        $amarr[] = $vida->vmysqlSelect( "amownbaner", "SELECT <> FROM ".$table." WHERE amname='".$pname."'", $con );
        $amarr[] = $vida->vmysqlSelect( "amheight", "SELECT <> FROM ".$table." WHERE amname='".$pname."'", $con );
        $respond = $vida->vConcatStrs( ".:|x|:.", $amarr );
        
        mysql_close( $con );
        echo $respond;
    }

?>