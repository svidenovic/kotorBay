<?php

    require( "../../dependences/mySQLvalues.php" );
    require( "../../dependences/vjswebtools.php" );
    $host = vhost();
    $user = vuser();
    $pass = vpass();
    $dbnm = vdbname();
    $vida = new vida();
    $respond = "";
    
    $nmslang  = $_POST["nmslang"];
    $nmsmain  = $_POST["nmsmain"];
    $nmslink2 = $_POST["nmslink2"];
    $nmsname  = $_POST["nmsname"];
    $nmstitle = $_POST["nmstitle"];
    $nmstext  = $_POST["nmstext"];
    $nmsvideo = $_POST["nmsvideo"];
    $nmsimage = $_POST["nmsimage"];
    
    $lang = "";
    switch( $nmslang ){
        case "english": $lang="eng"; break;
        case "russian": $lang="rus"; break;
        case "yugoslovenian": $lang="yug"; break;
        default: break;
    }
    
    $con = mysql_connect( $host, $user, $pass );
    if( $con )
    {
        mysql_select_db( $dbnm, $con );
        
        $table = "news_".$lang;
        $news_exists = false;
        $nor = $vida->vmysqlSelect( "count(nmtitle)", "SELECT <> FROM ".$table, $con );
        $nor = (int)$nor;
        for( $n=0; $n<$nor; $n++ )
        {
            $dtitle = $vida->vmysqlSelect( "nmtitle", "SELECT <> FROM ".$table." LIMIT ".$n.", 1", $con );
            if( $dtitle == $nmstitle ){ $news_exists=true; break; }
            else{ $news_exists=false; }
        }
        if( $news_exists )
        {
            $tmpquery = "nmlang='".$lang."',nmmain='".$nmsmain."',nmlink2='".$nmslink2."',nmname='".$nmsname."',nmtext='".$nmstext."',nmvideo='".$nmsvideo."',nmimage='".$nmsimage."'";
            mysql_query( "UPDATE ".$table." SET ".$tmpquery." WHERE nmtitle='".$nmstitle."' ", $con );
            $respond = "Edited";
        }
        elseif( !$news_exists )
        {
            $tmpquery1 = "(nmlang,nmmain,nmlink2,nmname,nmtitle,nmtext,nmvideo,nmimage)";
            $tmpquery2 = "('".$lang."','".$nmsmain."','".$nmslink2."','".$nmsname."','".$nmstitle."','".$nmstext."','".$nmsvideo."','".$nmsimage."')";
            mysql_query( "INSERT INTO ".$table." ".$tmpquery1." VALUES ".$tmpquery2, $con );
            $respond = "Saved";
        }
        
        mysql_close( $con );
        echo $respond;
    }

?>