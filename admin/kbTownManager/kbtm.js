
$(document).ready(function(){

    tmOnLoad();
    $("#tmocg").click(function(){ openCloseGallery( 500, 500 ); });
    $("#tmAJAXsave").click(function(){ tmSaving(); });
    $("#tmMainImg").dblclick(function(){ $("#tmMainImg").attr("src","../../dependences/noimg.png"); });

});


var galleryOpen;

function tmOnLoad()
{
    galleryOpen = true;
    openCloseGallery( 1, 1 );
    ajax_get_towns();
}

function openCloseGallery( speedUp, speedDwn )
{
    if( galleryOpen == true )
    {
        $("#tmgalleryHolder").slideUp( speedUp, function(){
            galleryOpen = false;
            $("#tmgalleryHolder").html("");
        });
    }
    else if( galleryOpen == false )
    {
        $("#tmgalleryHolder").slideDown( speedDwn, function(){
            galleryOpen = true;
            ajax_get_images();
        });
    }
}

function ajax_get_images()
{
    $.post( "../kbGalleryManager/kbGetImages.php", function(res){
        var varr = vida.vStrTrans2arr( res, "|<-x->|" );
        manifestImages( varr );
    });
}
function manifestImages( vArr )
{
    // the gray div area expandable one
    var arr = vArr;
    var tmp = "";
    var img = undefined;
        $("#tmgalleryHolder").html("");
    for( a in arr )
    {
        tmp = arr[a].replace( "images/", "images/thumb/thumb_" );
        img = document.createElement("img");
        img.setAttribute( "class", "smallimgs" );
        img.setAttribute( "src", tmp );
        img.setAttribute( "onclick", "setMain('"+tmp+"');" );
        $("#tmgalleryHolder").append( img );
    }
}

function setMain( src )
{
    $("#tmMainImg").attr( "src", src );
}

function tmSaving()
{
    var tmname = $("#tmname").val();
    var tmMainImg = $("#tmMainImg").attr("src");
    
    if(( tmname!=""&&tmname!=" " )&&
       ( tmMainImg.match("noimg.png")!="noimg.png" ))
    {
        tmname = encodeURIComponent( tmname );
        tmMainImg = encodeURIComponent( tmMainImg );
        
        var purl = "kbtown_save.php";
        var data = { tmname:tmname, tmMainImg:tmMainImg };
        $.post( purl, data, function(ree){
            alert( ree );
            ajax_get_towns();
        });
    }
    else{ alert("Fill in all the fields"); }
}

function ajax_get_towns()
{
    var url = "kbtown_get.php";
    $.post( url, function(respond){
        var namesarr = vida.vStrTrans2arr( respond, "<-|x|->" );
        manifestList( namesarr );
    });
}

function manifestList( listarr )
{
    $("#loadContentHereDiv").html("");
    var pnsp = undefined;
    var listarrtmp = "";
    for( l in listarr )
    {
        listarrtmp = decodeURIComponent( listarr[l] );
        pnsp = document.createElement("p");
        pnsp.setAttribute( "class", "pNmopenPar" );
        pnsp.setAttribute( "onclick", "openORdelete( '"+listarr[l]+"' );" );
        pnsp.appendChild(document.createTextNode( listarrtmp ));
        $("#loadContentHereDiv").append( pnsp );
    }
}

function openORdelete( pname, plang )
{
    var todo = prompt( "| O - open \n| D - delete \n Enter command: ", "O" );
    if( todo=="o"||todo=="O" )
    {
        $.post( "kbtown_open.php", {pname:pname}, function(stuff){
            var tmname = decodeURIComponent(pname);
            var tmimage = decodeURIComponent(stuff);
            fillInInfo( tmname, tmimage );
        });
    }
    else if( todo=="d"||todo=="D" )
    {
        $.post( "kbtown_delete.php", {pname:pname,plang:plang}, function(stuff){
            alert( stuff );
            ajax_get_towns();
            if( decodeURIComponent(pname) == $("#tmname").val() )
            { fillInInfo( "", "../../dependences/noimg.png" ); }
        });
    }
}

function fillInInfo( iname, iMimg )
{
    $("#tmname").val( iname );
    $("#tmMainImg").attr( "src", iMimg );
}
