
$(document).ready(function(){

    lmOnLoad();
    $("#lmocg").click(function(){ openCloseGallery( 500, 500 ); });
    $("#lmAJAXsave").click(function(){ lmSaving(); });
    $("#loadLang").change(function(){ ajax_get_lores(); });

});


var galleryOpen;
var selectedimgs;

function lmOnLoad()
{
    galleryOpen = true;
    selectedimgs = new Array();
    openCloseGallery( 1, 1 );
    ajax_get_towns();
    ajax_get_lores();
}

function openCloseGallery( speedUp, speedDwn )
{
    if( galleryOpen == true )
    {
        $("#lmgalleryHolder").slideUp( speedUp, function(){
            galleryOpen = false;
            $("#lmgalleryHolder").html("");
        });
    }
    else if( galleryOpen == false )
    {
        $("#lmgalleryHolder").slideDown( speedDwn, function(){
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
        $("#lmgalleryHolder").html("");
    for( a in arr )
    {
        tmp = arr[a].replace( "images/", "images/thumb/thumb_" );
        img = document.createElement("img");
        img.setAttribute( "class", "smallimgs" );
        img.setAttribute( "src", tmp );
        img.setAttribute( "onclick", "add2imgselection('"+tmp+"');" );
        $("#lmgalleryHolder").append( img );
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
        $("#lmimgselection").html("");
    for( a in arr )
    {
        tmp = arr[a];
        img = document.createElement("img");
        img.setAttribute( "class", "smallimgs" );
        img.setAttribute( "src", tmp );
        img.setAttribute( "onclick", "RemoveImg("+a+");" );
        $("#lmimgselection").append( img );
    }
}

function RemoveImg( n )
{
    var conf = confirm("Delete image?");
    if( conf ){
        selectedimgs.splice( n, 1 );
        displayManifestedImgs( selectedimgs );
    }
}

function lmSaving()
{
    var lmlang = $("#lmlang option:selected").text();
    var lmtown = $("#pmtown option:selected").text();
    var lmname = $("#lmname").val();
    var lmtext = $("#lmtext").val();
    var lmimages = (selectedimgs.length==0)?
    lmimages="" : lmimages=vida.vConcatStrs("|--|x|--|",selectedimgs);
    
    if(( lmname!=""&&lmname!=" " )&&
       ( lmtext!=""&&lmtext!=" " ))
    {
        lmlang = encodeURIComponent( lmlang );
        lmtown = encodeURIComponent( lmtown );
        lmname = encodeURIComponent( lmname );
        lmtext = encodeURIComponent( lmtext );
        lmimages = encodeURIComponent( lmimages );
        
        var purl = "kbLore_save.php";
        var data = { lmlang:lmlang, lmtown:lmtown, lmname:lmname, lmtext:lmtext, lmimages:lmimages };
        $.post( purl, data, function(ree){
            alert( ree );
            ajax_get_lores();
        });
    }
    else{ alert("Fill in all the fields"); }
}

function ajax_get_lores()
{
    var loadLang = $("#loadLang option:selected").text();
        loadLang = encodeURIComponent( loadLang );
    var url = "kbLore_get.php";
    var data = { loadLang:loadLang };
    $.post( url, data, function(respond){
        var namesarr = vida.vStrTrans2arr( respond, "<-|x|->" );
        manifestList( namesarr, loadLang );
    });
}

function manifestList( listarr, alang )
{
    $("#loadContentHereDiv").html("");
    var pnsp = undefined;
    var listarrtmp = "";
    for( l in listarr )
    {
        listarrtmp = decodeURIComponent( listarr[l] );
        pnsp = document.createElement("p");
        pnsp.setAttribute( "class", "pNmopenPar" );
        pnsp.setAttribute( "onclick", "openORdelete( '"+listarr[l]+"', '"+alang+"' );" );
        pnsp.appendChild(document.createTextNode( listarrtmp ));
        $("#loadContentHereDiv").append( pnsp );
    }
}

function openORdelete( pname, plang )
{
    var todo = prompt( "| O - open \n| D - delete \n Enter command: ", "O" );
    if( todo=="o"||todo=="O" )
    {
        $.post( "kbLore_open.php", {pname:pname,plang:plang}, function(stuff){
            var lmarr = new Array();
                lmarr = vida.vStrTrans2arr( stuff, ".:|x|:." );
            var lmtext    = decodeURIComponent(lmarr[0]);
            var lmimages  = decodeURIComponent(lmarr[1]);
            var lmtown    = decodeURIComponent(lmarr[2]);
            var lmimgarr  = vida.vStrTrans2arr( lmimages, "|--|x|--|" );
            var lmname    = decodeURIComponent(pname);
            var lmlang    = plang;
            fillInInfo( lmlang, lmtown, lmname, lmtext, lmimgarr );
        });
    }
    else if( todo=="d"||todo=="D" )
    {
        $.post( "kbLore_delete.php", {pname:pname,plang:plang}, function(stuff){
            alert( stuff );
            ajax_get_lores();
            if( decodeURIComponent(pname) == $("#lmname").val() )
            { fillInInfo( "english", "", "", (new Array()) ); }
        });
    }
}

function fillInInfo( ilang, itown, iname, itext, iimgarr )
{
    $("#lmlang").val( ilang );
    $("#pmtown").val( itown );
    $("#lmname").val( iname );
    $("#lmtext").val( itext );
    selectedimgs = iimgarr;
    displayManifestedImgs( selectedimgs );
}

function ajax_get_towns()
{
    var url = "../kbTownManager/kbtown_get.php";
    $.post( url, function(respond){
        var namesarr = vida.vStrTrans2arr( respond, "<-|x|->" );
        manifestTowns( namesarr );
    });
}

function manifestTowns( arr )
{
    $("#pmtown").html("");
    var tmp = "";
    var opt = undefined;
    for( a in arr )
    {
        tmp = decodeURIComponent(arr[a]);
        opt = document.createElement("option");
        opt.appendChild(document.createTextNode( tmp ));
        $("#pmtown").append(opt);
    }
}
