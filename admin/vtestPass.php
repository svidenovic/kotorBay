<?php

    require( "../dependences/mySQLvalues.php" );
    require( "../dependences/vjswebtools.php" );
    $host = vhost();
    $user = vuser();
    $pass = vpass();
    $dbnm = vdbname();
    $vida = new vida();
    
    $passallowed = "false";
    
    $con = mysql_connect( $host, $user, $pass );
    if( $con )
    {
        mysql_select_db( $dbnm, $con );
        
        $sta2s = $vida->vmysqlSelect( "status", "SELECT <> FROM kblog", $con );
        $sta2s = (int)$sta2s;
        
        if( $sta2s == 0 ) { $passallowed = "false"; }
        elseif( $sta2s == 1 ) { $passallowed = "true"; }
        else { $passallowed = "false"; }
        
        mysql_close( $con );
        echo $passallowed;
    }

?>