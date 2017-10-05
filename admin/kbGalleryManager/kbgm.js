
$(document).ready(function(){
    
    ajax_get_images();
    
});

function ajax_get_images()
{
    $.post( "kbGetImages.php", function(res){ manifestImages( res ); });
}

function manifestImages( vstrArr )
{
    var arr = new Array();
    arr = vida.vStrTrans2arr( vstrArr, "|<-x->|" );
    var tmp = "";
    var img = undefined;
        $("#browseDiv").html("");
    for( a in arr )
    {
        tmp = arr[a].replace( "images/", "images/thumb/thumb_" );
        img = document.createElement("img");
        img.setAttribute( "class", "imgcss" );
        img.setAttribute( "src", tmp );
        img.setAttribute( "onclick", "dirOD('"+arr[a]+"');" );
        $("#browseDiv").append( img );
    }
}

function dirOD( imglink )
{
    var tmp = new Array( imglink );
    var od = prompt( "| O - open image \n| D - delete image \n| Enter command: ", "o" );
    if(( od=="o" )||( od=="O" ))
    {
        vida.vopenImg( 0, tmp, "../../dependences/", "<|x|>" );
    }
    else if(( od=="d" )||( od=="D" ))
    {
        var urld = "kbDeleteImage.php";
        $.post( urld, {imglink:imglink}, function(ree){
            alert( ree );
            ajax_get_images();
        });
    }
}