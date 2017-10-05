
$(document).ready(function(){

    amOnLoad();
    $("#amocg").click(function(){ openCloseGallery( 500, 500 ); });
    $("#amAJAXsave").click(function(){ amSaving(); });

});


var galleryOpen;
var selectedimgs;

function amOnLoad()
{
    galleryOpen = true;
    selectedimgs = new Array();
    openCloseGallery( 1, 1 );
    ajax_get_adds();
}

function openCloseGallery( speedUp, speedDwn )
{
    if( galleryOpen == true )
    {
        $("#amgalleryHolder").slideUp( speedUp, function(){
            galleryOpen = false;
            $("#amgalleryHolder").html("");
        });
    }
    else if( galleryOpen == false )
    {
        $("#amgalleryHolder").slideDown( speedDwn, function(){
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
        $("#amgalleryHolder").html("");
    for( a in arr )
    {
        tmp = arr[a].replace( "images/", "images/thumb/thumb_" );
        img = document.createElement("img");
        img.setAttribute( "class", "smallimgs" );
        img.setAttribute( "src", tmp );
        img.setAttribute( "onclick", "add2imgselection('"+tmp+"');" );
        $("#amgalleryHolder").append( img );
    }
}

function add2imgselection( thesrc )
{
    var imgexists = false;
    for( s in selectedimgs )
    {
        if( selectedimgs[s] == thesrc )
        { imgexists = true; break; }
        else{ imgexists = false; }
    }
    if( imgexists==false )
    {
        selectedimgs.push( thesrc );
        displayManifestedImgs( selectedimgs );
    }
}

function displayManifestedImgs( imgarray )
{
    // the white div area
    var arr = imgarray;
    var tmp = "";
    var img = undefined;
        $("#amimgselection").html("");
    for( a in arr )
    {
        tmp = arr[a];
        img = document.createElement("img");
        img.setAttribute( "class", "smallimgs" );
        img.setAttribute( "src", tmp );
        img.setAttribute( "onclick", "Remove("+a+");" );
        $("#amimgselection").append( img );
    }
}

function Remove( n )
{
    var command = confirm("Remove this image?");
    if( command ){
        selectedimgs.splice( n, 1 );
        displayManifestedImgs( selectedimgs );
    }
}

function amSaving()
{
    var amname   = $("#amname").val();
    var amlink2s = $("#amlink2s").val();
    var amownb   = $("#amOwnB option:selected").text();
    var amheight = $("#heightInput").val();
    var amimages = (selectedimgs.length==0)?
    amimages="" : amimages=vida.vConcatStrs("|--|x|--|",selectedimgs);
    
    if(( amname!=""&&amname!=" " )&&
       ( amimages.length>=1 )&&
       ( amlink2s.match("http")=="http" )&&
       ( amownb!="none" ))
    {
        amname   = encodeURIComponent( amname );
        amimages = encodeURIComponent( amimages );
        amlink2s = encodeURIComponent( amlink2s );
        amownb   = encodeURIComponent( amownb );
        
        var purl = "kbadds_save.php";
        var data = { amname:amname, amimages:amimages, amlink2s:amlink2s, amownb:amownb, amheight:amheight };
        $.post( purl, data, function(ree){
            alert( ree );
            ajax_get_adds();
        });
    }
    else{ alert("Fill in all the fields"); }
}

function ajax_get_adds()
{
    var url = "kbadds_get.php";
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

function openORdelete( pname )
{
    var todo = prompt( "| O - open \n| D - delete \n Enter command: ", "O" );
    if( todo=="o"||todo=="O" )
    {
        $.post( "kbadds_open.php", {pname:pname}, function(stuff){
            var amarr = new Array();
                amarr = vida.vStrTrans2arr( stuff, ".:|x|:." );
            var amimages  = decodeURIComponent(amarr[0]);
            var amlink2s  = decodeURIComponent(amarr[1]);
            var amownban  = decodeURIComponent(amarr[2]);
            var amheight  = amarr[3];
            var amimgarr  = vida.vStrTrans2arr( amimages, "|--|x|--|" );
            var amname    = decodeURIComponent(pname);
            fillInInfo( amname, amimgarr, amlink2s, amownban, amheight );
        });
    }
    else if( todo=="d"||todo=="D" )
    {
        $.post( "kbadds_delete.php", {pname:pname}, function(stuff){
            alert( stuff );
            ajax_get_adds();
            if( decodeURIComponent(pname) == $("#amname").val() )
            { fillInInfo( "", (new Array()), "", "none", 300 ); }
        });
    }
}

function fillInInfo( iname, iimgarr, ilink2s, iownb, ih )
{
    $("#amname").val( iname );
    $("#amlink2s").val( ilink2s );
    $("#amOwnB").val( iownb );
    $("#heightInput").val( ih );
    selectedimgs = iimgarr;
    displayManifestedImgs( selectedimgs );
}

