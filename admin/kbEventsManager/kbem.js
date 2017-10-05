
$(document).ready(function(){

    emOnLoad();
    $("#emocg").click(function(){ openCloseGallery( 500, 500 ); });
    $("#emAJAXsave").click(function(){ emSaving(); });
    $("#loadLang").change(function(){ ajax_get_events(); });
    $("#emAddVideolink").click(function(){ addVideoLink(); });

});


var galleryOpen;
var selectedimgs;
var videolinks;

function emOnLoad()
{
    galleryOpen = true;
    selectedimgs = new Array();
    videolinks = new Array();
    openCloseGallery( 1, 1 );
    ajax_get_events();
}

function openCloseGallery( speedUp, speedDwn )
{
    if( galleryOpen == true )
    {
        $("#emgalleryHolder").slideUp( speedUp, function(){
            galleryOpen = false;
            $("#emgalleryHolder").html("");
        });
    }
    else if( galleryOpen == false )
    {
        $("#emgalleryHolder").slideDown( speedDwn, function(){
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
        $("#emgalleryHolder").html("");
    for( a in arr )
    {
        tmp = arr[a].replace( "images/", "images/thumb/thumb_" );
        img = document.createElement("img");
        img.setAttribute( "class", "smallimgs" );
        img.setAttribute( "src", tmp );
        img.setAttribute( "onclick", "add2imgselection('"+tmp+"');" );
        $("#emgalleryHolder").append( img );
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
        $("#emimgselection").html("");
    for( a in arr )
    {
        tmp = arr[a];
        img = document.createElement("img");
        img.setAttribute( "class", "smallimgs" );
        img.setAttribute( "src", tmp );
        img.setAttribute( "onclick", "setMainOrRemove("+a+");" );
        $("#emimgselection").append( img );
    }
}

function setMainOrRemove( n )
{
    var mainimgid = "#emMainImg";
    
    var command = prompt("| S - set as Main Image \n| R - remove image from the list \n Enter command: ", "s");
    if( command == "S" || command == "s" )
    {
        $(mainimgid).attr( "src", selectedimgs[n] );
    }
    else if( command == "R" || command == "r" )
    {
        var mimg = $(mainimgid).attr("src");
        if( mimg.match(selectedimgs[n])==selectedimgs[n] )
        { $(mainimgid).attr( "src", "../../dependences/noimg.png" ); }
        selectedimgs.splice( n, 1 );
        displayManifestedImgs( selectedimgs );
    }
}

function emSaving()
{
    var emlang = $("#emlang option:selected").text();
    var emname = $("#emname").val();
    var emMainImg = $("#emMainImg").attr("src");
    var emtext = $("#emtext").val();
    var emimages = (selectedimgs.length==0)?
    emimages="" : emimages=vida.vConcatStrs("|--|x|--|",selectedimgs);
    var emvideos = (videolinks.length==0)?
    emvideos="" : emvideos=vida.vConcatStrs("|--|x|--|",videolinks);
    
    if(( emname!=""&&emname!=" " )&&
       ( emMainImg.match("noimg.png")!="noimg.png" )&&
       ( emtext!=""&&emtext!=" " )&&
       ( emimages.length>=1 ))
    {
        emlang = encodeURIComponent( emlang );
        emname = encodeURIComponent( emname );
        emMainImg = encodeURIComponent( emMainImg );
        emtext = encodeURIComponent( emtext );
        emimages = encodeURIComponent( emimages );
        emvideos = encodeURIComponent( emvideos );
        
        var purl = "kbevents_save.php";
        var data = { emlang:emlang, emname:emname, emMainImg:emMainImg, emtext:emtext, emimages:emimages, emvideos:emvideos };
        $.post( purl, data, function(ree){
            alert( ree );
            ajax_get_events();
        });
    }
    else{ alert("Fill in all the fields"); }
}

function ajax_get_events()
{
    var loadLang = $("#loadLang option:selected").text();
        loadLang = encodeURIComponent( loadLang );
    var url = "kbevents_get.php";
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
        $.post( "kbevents_open.php", {pname:pname,plang:plang}, function(stuff){
            var emarr = new Array();
                emarr = vida.vStrTrans2arr( stuff, ".:|x|:." );
            var emMainImg = decodeURIComponent(emarr[0]);
            var emtext    = decodeURIComponent(emarr[1]);
            var emimages  = decodeURIComponent(emarr[2]);
            var emvideos  = decodeURIComponent(emarr[3]);
            var emimgarr  = vida.vStrTrans2arr( emimages, "|--|x|--|" );
            var emvidsarr = vida.vStrTrans2arr( emvideos, "|--|x|--|" );
            var emname    = decodeURIComponent(pname);
            var emlang    = plang;
            fillInInfo( emlang, emname, emMainImg, emtext, emimgarr, emvidsarr );
        });
    }
    else if( todo=="d"||todo=="D" )
    {
        $.post( "kbevents_delete.php", {pname:pname,plang:plang}, function(stuff){
            alert( stuff );
            ajax_get_events();
            if( decodeURIComponent(pname) == $("#emname").val() )
            { fillInInfo( "english", "", "../../dependences/noimg.png", "", (new Array()), (new Array()) ); }
        });
    }
}

function fillInInfo( ilang, iname, iMimg, itext, iimgarr, ividsarr )
{
    $("#emlang").val( ilang );
    $("#emname").val( iname );
    $("#emMainImg").attr( "src", iMimg );
    $("#emtext").val( itext );
    selectedimgs = iimgarr;
    videolinks = ividsarr;
    displayManifestedImgs( selectedimgs );
    createEmbedVideolink( videolinks );
}

function addVideoLink()
{
    var viframe = prompt( "Enter source:", "" );
    if( viframe[0]=="h"&&viframe[1]=="t"&&viframe[2]=="t"&&viframe[3]=="p" )
    { videosrc = viframe; }
    else{
        var videosrc = "";
        var b = viframe.indexOf("src=")+5;
        var e = viframe.indexOf( "\"", b );
        videosrc = viframe.slice( b, e );
    }
    var link_exists = false;
    for( v in videolinks ){
        (videolinks[v]==videosrc)? link_exists=true : link_exists=false;
        if(link_exists){break;}
    }
    if( !link_exists ){
        videolinks.push( videosrc );
        createEmbedVideolink( videolinks );
    }
}

function createEmbedVideolink( varrl )
{
    $("#emvideolinks").html("");
    var vpar = undefined;
    if( varrl.length == 0 )
    { $("#videosIF").attr("src",""); }
    else if( varrl.length >= 1 )
    {
        for( v in varrl )
        {
            vpar = document.createElement("p");
            vpar.setAttribute( "class", "srcspars" );
            vpar.setAttribute( "onclick", "preview_delete_video("+v+");" );
            vpar.appendChild(document.createTextNode( varrl[v] ));
            $("#emvideolinks").append( vpar );
        }
    }
}

function preview_delete_video( n )
{
    var vidsrc = videolinks[n];
    var dothis = prompt("| P - preview this video \n| R - remove this video \n Enter command: ", "p");
    if( dothis=="P"||dothis=="p" )
    {
        $("#videosIF").attr( "src", vidsrc );
    }
    else if( dothis=="R"||dothis=="r" )
    {
        var vif = $("#videosIF").attr("src");
        if( vif == vidsrc )
        { $("#videosIF").attr( "src", "" ); }
        videolinks.splice( n, 1 );
        createEmbedVideolink( videolinks );        
    }
}
