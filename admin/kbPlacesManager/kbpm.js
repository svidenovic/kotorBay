
$(document).ready(function(){

    pmOnLoad();
    $("#pmocg").click(function(){ openCloseGallery( 500, 500 ); });
    $("#pmAJAXsave").click(function(){ pmSaving(); });
    $("#loadType").change(function(){ ajax_get_pNs(); });
    $("#loadLang").change(function(){ ajax_get_pNs(); });

});


var galleryOpen;
var selectedimgs;

function pmOnLoad()
{
    galleryOpen = true;
    selectedimgs = new Array();
    openCloseGallery( 1, 1 );
    ajax_get_pNs();
    ajax_get_towns();
}

function openCloseGallery( speedUp, speedDwn )
{
    if( galleryOpen == true )
    {
        $("#pmgalleryHolder").slideUp( speedUp, function(){
            galleryOpen = false;
            $("#pmgalleryHolder").html("");
        });
    }
    else if( galleryOpen == false )
    {
        $("#pmgalleryHolder").slideDown( speedDwn, function(){
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
        $("#pmgalleryHolder").html("");
    for( a in arr )
    {
        tmp = arr[a].replace( "images/", "images/thumb/thumb_" );
        img = document.createElement("img");
        img.setAttribute( "class", "smallimgs" );
        img.setAttribute( "src", tmp );
        img.setAttribute( "onclick", "add2imgselection('"+tmp+"');" );
        $("#pmgalleryHolder").append( img );
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
        $("#pmimgselection").html("");
    for( a in arr )
    {
        tmp = arr[a];
        img = document.createElement("img");
        img.setAttribute( "class", "smallimgs" );
        img.setAttribute( "src", tmp );
        img.setAttribute( "onclick", "setMainOrRemove("+a+");" );
        $("#pmimgselection").append( img );
    }
}

function setMainOrRemove( n )
{
    var mainimgid = "#pmMainImg";
    
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

function pmSaving()
{
    var pmtype = $("#pmtype option:selected").text();
    var pmlang = $("#pmlang option:selected").text();
    var pmtown = $("#pmtown option:selected").text();
    var pmstars = $("#pmstars option:selected").text();
    var link2s  = $("#pmlink2site").val();
    var pmvisits = $("#numOFvisits").val();
    var pmname = $("#pmname").val();
    var pmMainImg = $("#pmMainImg").attr("src");
    var pmtext = $("#pmtext").val();
    var pmimages = (selectedimgs.length==0)?
    pmimages="" : pmimages=vida.vConcatStrs("|--|x|--|",selectedimgs);
    
    if(( pmname!=""&&pmname!=" " )&&
       ( pmMainImg.match("noimg.png")!="noimg.png" )&&
       ( pmtext!=""&&pmtext!=" " )&&
       ( pmimages.length>=1 ))
    {
        pmtype = encodeURIComponent( pmtype );
        pmlang = encodeURIComponent( pmlang );
        pmstars= encodeURIComponent( pmstars );
        link2s = encodeURIComponent( link2s );
        pmtown = encodeURIComponent( pmtown );
        pmname = encodeURIComponent( pmname );
        pmMainImg = encodeURIComponent( pmMainImg );
        pmtext = encodeURIComponent( pmtext );
        pmimages = encodeURIComponent( pmimages );
        
        var purl = "kbplacesNservices_save.php";
        var data = { pmtype:pmtype, pmlang:pmlang, pmname:pmname, pmMainImg:pmMainImg, pmtext:pmtext, pmimages:pmimages, pmtown:pmtown, pmstars:pmstars, link2s:link2s, pmvisits:pmvisits };
        $.post( purl, data, function(ree){
            alert( ree );
            ajax_get_pNs();
        });
    }
    else{ alert("Fill in all the fields"); }
}

function ajax_get_pNs()
{
    var loadType = $("#loadType option:selected").text();
        loadType = encodeURIComponent( loadType );
    var loadLang = $("#loadLang option:selected").text();
        loadLang = encodeURIComponent( loadLang );
    var url = "kbplacesNservices_get.php";
    var data = { loadType:loadType, loadLang:loadLang };
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
        $.post( "kbplacesNservices_open.php", {pname:pname,plang:plang}, function(stuff){
            var pmarr = new Array();
                pmarr = vida.vStrTrans2arr( stuff, ".:|x|:." );
            var pmtype    = decodeURIComponent(pmarr[0]);
            var pmMainImg = decodeURIComponent(pmarr[1]);
            var pmtext    = decodeURIComponent(pmarr[2]);
            var pmimages  = decodeURIComponent(pmarr[3]);
            var pmtown    = decodeURIComponent(pmarr[4]);
            var pmStars   = decodeURIComponent(pmarr[5]);
            var pml2s     = decodeURIComponent(pmarr[6]);
            var pmvisits  = pmarr[7];
            var pmimgarr  = vida.vStrTrans2arr( pmimages, "|--|x|--|" );
            var pmname    = decodeURIComponent(pname);
            var pmlang    = plang;
            fillInInfo( pmtype, pmlang, pmname, pmMainImg, pmtext, pmimgarr, pmtown, pmStars, pml2s, pmvisits );
        });
    }
    else if( todo=="d"||todo=="D" )
    {
        $.post( "kbplacesNservices_delete.php", {pname:pname,plang:plang}, function(stuff){
            alert( stuff );
            ajax_get_pNs();
            if( decodeURIComponent(pname) == $("#pmname").val() )
            { fillInInfo( "catering facilities", "english", "", "../../dependences/noimg.png", "", (new Array()), "", "none", "none", "0" ); }
        });
    }
}

function fillInInfo( itype, ilang, iname, iMimg, itext, iimgarr, itown, istars, ilink2site, ivisits )
{
    $("#pmtype").val( itype );
    $("#pmlang").val( ilang );
    (itown=="")?
        $("#pmtown").val( $("#pmtown option:first").val() ):
        $("#pmtown").val( itown );
    $("#pmstars").val( istars );
    $("#pmlink2site").val( ilink2site );
    $("#pmname").val( iname );
    $("#pmMainImg").attr( "src", iMimg );
    $("#pmtext").val( itext );
    $("#numOFvisits").val( parseInt(ivisits) );
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