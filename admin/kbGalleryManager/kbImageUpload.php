<?php

    $style =  "style='background-color:#e8e8e8; color:#7f7f7f; font-family:sans-serif; font-size:15px; width:1000px; height: 25px; margin:0; padding:5px; float:left;'";    
    $style2 = "style='background-color:#ffffff; color:#7f7f7f; font-family:sans-serif; font-size:16px; width:200px; height: 25px; margin:0; padding:5px; float:left;'";
    $style3 = "style='background-color:#ffffff; color:#7f7f7f; font-family:sans-serif; font-size:20px; width:200px; height: 30px; margin:0; padding:5px; float:left; text-decoration:none;'"; 

    require( "../../dependences/mySQLvalues.php" );
    require( "../../dependences/vjswebtools.php" );
    require( "../../dependences/SimpleImage.php" );
    $host = vhost();
    $user = vuser();
    $pass = vpass();
    $dbnm = vdbname();
    $vida = new vida();
    
    $names=array(); $types=array(); $sizes=array(); $tmpns=array(); $erors=array();
    $u=0; $i=0; $maxFsize = 1500000; // 1.5 MB

    $names = $vida->getMultInput( "kbimgs", "name" );
    $types = $vida->getMultInput( "kbimgs", "type" );
    $sizes = $vida->getMultInput( "kbimgs", "size" );
    $tmpns = $vida->getMultInput( "kbimgs", "tmp_name" );
    $erors = $vida->getMultInput( "kbimgs", "error" );
    $u = sizeof($names);
    
    echo "<a ".$style3." href='kbgm.html'> < BACK </a><br/>";
    
    $con = mysql_connect( $host, $user, $pass );
    if( $con )
    {
        mysql_select_db( $dbnm, $con );
        
        for( $i=0; $i<$u; $i++ )
        {
            if(( $names[$i] == "" )||( $names[$i] == null ))
            {
                echo "<p ".$style." >"." - No file selected </p><br/>";
                echo "<p ".$style2."></p>";
            }
            elseif(( $names[$i] != "" )&&( $names[$i] != null ))
            {
                echo "<p ".$style." >"." ".$names[$i]." </p><br/>";
                
                if( $erors[$i] > 0 ) {
                    echo "<p ".$style2."> Error: ".$erors[$i].". </p>";
                }
                if( file_exists( "../../images/".$names[$i] ) ) {
                    echo "<p ".$style2."> File already exists. </p>";
                }
                if(( $types[$i] != "image/jpeg" )&&
                   ( $types[$i] != "image/pjpeg" )&&
                   ( $types[$i] != "image/png" )) {
                    echo "<p ".$style2."> Wrong file type. </p>";
                }
                if( $sizes[$i] > $maxFsize ) {
                    echo "<p ".$style2."> File over ".($maxFsize/1000000)." MB </p>";
                }
                if((!(file_exists( "../../images/".$names[$i] )))&&
                    (($types[$i] == "image/jpeg")||
                     ($types[$i] == "image/pjpeg")||
                     ($types[$i] == "image/png"))&&
                    ($sizes[$i] <= $maxFsize)&&
                    ($erors[$i] == 0))
                {
                    move_uploaded_file( $tmpns[$i], "../../images/".$names[$i] );
                    
                    $thumb = new SimpleImage();
                    $thumb->load( "../../images/".$names[$i] );
                    $thumb->resizeToWidth(200);
                    $thumb->save( "../../images/thumb/thumb_".$names[$i] );
                    
                    mysql_query( "INSERT INTO kbimages ( imglink ) VALUES ( '"."../../images/".$names[$i]."' )", $con );
                    
                    echo "<p ".$style2."> Upload successful. </p>";
                }
            }
            echo "<br/>";
        }
        
        mysql_close( $con );
    }

?>