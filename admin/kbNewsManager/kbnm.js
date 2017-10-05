
$(document).ready(function(){

    nmOnLoad();
    $("#resetpmv").click(function(){ $("#videosIF").attr("src",""); });
    $("#nmlang").change(function(){ ajax_get_selectlinx(); });
    $("#nmlinkto").change(function(){ ajax_get_selectlinx(); });
    $("#nmlinknameselect").change(function(){ ajax_get_link2info(); });
    $("#nmlinkto").change(function(){ ajax_get_link2info(); });
    $("#nmlang").change(function(){ ajax_get_link2info(); });
    $("#nmAJAXsave").click(function(){
        if( $("#nmlinkto option:selected").text()=="neutral" ){
            neutralSaving();
        } else{ nmSave(); }
    });
    $("#loadLang").change(function(){ ajax_get_news(); });
    
});

function nmOnLoad()
{
    ajax_get_selectlinx();
    ajax_get_news();
}

function neutralSaving()
{
    var nmslang  = $("#nmlang option:selected").text();
    var nmslink2 = $("#nmlinkto option:selected").text();
    var nmstitle = $("#nmname").val();
    var nmstext  = $("#nmtext").val();
    var nmsimg   = "../../dependences/newsLogo.png";
    if( nmstitle!=""&&nmstext!="" )
    {
        if( nmslink2=="neutral" )
        {
            nmslink2 = encodeURIComponent( nmslink2 );
            nmstitle = encodeURIComponent( nmstitle );
            nmstext  = encodeURIComponent( nmstext );
            nmsimg   = encodeURIComponent( nmsimg );
        }
        var url = "kbnewsN_savenews.php";
        var data = { nmslang:nmslang, nmslink2:nmslink2, 
                     nmstitle:nmstitle, nmstext:nmstext, nmsimg:nmsimg };
        $.post( url, data, function(ree){
            alert(ree);
            ajax_get_news();
        });
    }
    else{ alert("Fill in all the fields"); }
}

function ajax_get_selectlinx()
{
    var llang  = $("#nmlang option:selected").text();
    var link2 = $("#nmlinkto option:selected").text();
        link2 = encodeURIComponent(link2);
    var url = "kbnews_getnames2link2.php";
    var data = { llang:llang, link2:link2 };
    $.post( url, data, function(resp){
        if( resp=="nothing" ){
            $("#nmlinknameselect").html("");
            $("#nmname").val("");
            $("#nmtext").val("");
            $("#videosIF").attr("src","");
            $("#nmMainImg").attr("src","../../dependences/noimg.png");
            $("#videosHolderDiv").html("");
        }
        else if( resp!="nothing" ){
            manifestOptionsforlink2( vida.vStrTrans2arr( resp, "|-|x|-|" ) );
        }
    });
}

function manifestOptionsforlink2( optarr )
{
    $("#nmlinknameselect").html("");
    var opt = undefined;
    var otemp = "";
    for( o in optarr )
    {
        otemp = decodeURIComponent( optarr[o] );
        opt = document.createElement("option");
        opt.appendChild(document.createTextNode( otemp ));
        $("#nmlinknameselect").append( opt );
    }
    ajax_get_link2info()
}

function ajax_get_link2info()
{
    var ilang = $("#nmlang option:selected").text();
    var ilink2 = $("#nmlinkto option:selected").text();
        ilink2 = encodeURIComponent(ilink2);
    var iname = $("#nmlinknameselect option:selected").text();
        iname = encodeURIComponent(iname);
    var itext = "";
    var ivids = "";
    var iMimg = "";
    var nmmain = $("#nmmain option:selected").text();
    var url = "kbnews_getlink2info.php";
    var data = { ilang:ilang, ilink2:ilink2, iname:iname };
    $.post( url, data, function(ree){
        itext = vida.vStrSection( 1, ree, ".:|x|:." );
        ivids = vida.vStrSection( 2, ree, ".:|x|:." );
        iMimg = vida.vStrSection( 3, ree, ".:|x|:." );
        ilink2 = decodeURIComponent(ilink2);
        iname = decodeURIComponent(iname);
        itext = decodeURIComponent(itext);
        ivids = decodeURIComponent(ivids);
        iMimg = decodeURIComponent(iMimg);
        manifestNewsInfo( ilang, ilink2, iname, itext, ivids, iMimg, nmmain );
    });
}

function manifestNewsInfo( mlang, mlink2, mname, mtext, mvids, mMimg, mMain )
{
    if( $("#nmlinknameselect").html() != "" )
    {
        $("#nmlang").val(mlang);
        $("#nmmain").val(mMain);
        $("#nmlinkto").val(mlink2);
        $("#nmlinknameselect").val(mname);
        $("#nmname").val(mname);
        $("#nmtext").val(mtext);
        $("#nmMainImg").attr("src",mMimg);
        
        if(( mlink2=="events" )&&( mvids!="none"&&mvids!="" )){
            $("#mainVideoHolder").show(1);
            $("#videosHolderDiv").show(1);
            $("#click2setmainvid").show(1);
        }
        else{
            $("#videosIF").attr("src","");
            $("#mainVideoHolder").hide(1);
            $("#videosHolderDiv").html("");
            $("#videosHolderDiv").hide(1);
            $("#click2setmainvid").hide(1);
        }
        
        if( mvids!="none"&&mvids!="" )
        {
            var vidsarr = vida.vStrTrans2arr( mvids, "|--|x|--|" );
            var vpar = undefined;
            for( v in vidsarr )
            {
                vpar = document.createElement("p");
                vpar.setAttribute( "class", "srcspars" );
                vpar.setAttribute( "onclick", "setasMainVideo('"+vidsarr[v]+"');" );
                vpar.appendChild(document.createTextNode( vidsarr[v] ));
                $("#videosHolderDiv").append( vpar );
            }
        }
    }
}
function setasMainVideo( videosrc )
{
    $("#videosIF").attr("src",videosrc);
}

function nmSave()
{
    var nmslang  = $("#nmlang option:selected").text();
    var nmsmain  = $("#nmmain option:selected").text();
    var nmslink2 = $("#nmlinkto option:selected").text();
    var nmsname  = $("#nmlinknameselect option:selected").text();
    var nmstitle = $("#nmname").val();
    var nmstext  = $("#nmtext").val();
    var nmsvideo = $("#videosIF").attr("src");
    var nmsimage = $("#nmMainImg").attr("src");
    
    if( nmstitle!=""&&nmstext!="" )
    {
        if( nmslink2=="catering facilities"||
            nmslink2=="venues"||
            nmslink2=="services" )
        {
            nmsmain  = "image";
            nmslink2 = encodeURIComponent( nmslink2 );
            nmsname  = encodeURIComponent( nmsname );
            nmstitle = encodeURIComponent( nmstitle );
            nmstext  = encodeURIComponent( nmstext );
            nmsvideo = "";
            nmsimage = encodeURIComponent( nmsimage );
        }
        else if( nmslink2=="events" )
        {
            nmslink2 = encodeURIComponent( nmslink2 );
            nmsname  = encodeURIComponent( nmsname );
            nmstitle = encodeURIComponent( nmstitle );
            nmstext  = encodeURIComponent( nmstext );
            nmsvideo = encodeURIComponent( nmsvideo );
            nmsimage = encodeURIComponent( nmsimage );
        }
        var url = "kbnews_savenews.php";
        var data = { nmslang:nmslang, nmsmain:nmsmain,
                     nmslink2:nmslink2, nmsname:nmsname,
                     nmstitle:nmstitle, nmstext:nmstext,
                     nmsvideo:nmsvideo, nmsimage:nmsimage };
        $.post( url, data, function(ree){
            alert(ree);
            ajax_get_news();
        });
    }
    else{ alert("Fill in all the fields"); }
}

function ajax_get_news()
{
    var loadLang = $("#loadLang option:selected").text();
    $.post( "kbnews_getNews.php", {loadLang:loadLang}, function(narr){
        var arr = vida.vStrTrans2arr( narr, "|=|x|=|" );
        listNews( arr );
    });
}

function listNews( newsarr )
{
    $("#loadContentHereDiv").html("");
    var tempval = "";
    var tmplang =  $("#loadLang option:selected").text();
    var par = undefined;
    for( x in newsarr )
    {
        tempval = decodeURIComponent( newsarr[x] );
        par = document.createElement("p");
        par.setAttribute( "class", "nmopenPar" );
        par.setAttribute( "onclick", "ajax_get_newsInfo( '"+tmplang+"', '"+newsarr[x]+"' );" );
        par.appendChild(document.createTextNode( tempval ));
        $("#loadContentHereDiv").append( par );
    }
}

function ajax_get_newsInfo( slang, stitle )
{
    $.post( "kbnews_getNewsInfo.php", {slang:slang,stitle:stitle}, function(info){
        var arr = vida.vStrTrans2arr( info, ".:|x|:." );
        var com = prompt( "| O - open \n| D - delete \n Enter command:", "O" );
        if( com=="O"||com=="o" ){
            displayNewsInfo( slang, arr[0], arr[1], arr[2], stitle, arr[3], arr[4], arr[5] );
        }
        else if( com=="D"||com=="d" ) {
            ajax_delete_news( slang, stitle );
        }
        
    });
}

function displayNewsInfo( lang, main, alink2, name, title, text, video, image )
{
    alink2 = decodeURIComponent( alink2 );
    name = decodeURIComponent( name );
    title = decodeURIComponent( title );
    text = decodeURIComponent( text );
    video = decodeURIComponent( video );
    image = decodeURIComponent( image );
    
    $("#nmlang").val(lang);
    $("#nmmain").val(main);
    $("#nmlinkto").val(alink2);
    
    var llang  = $("#nmlang option:selected").text();
    var link2 = $("#nmlinkto option:selected").text();
        link2 = encodeURIComponent(link2);
    var url = "kbnews_getnames2link2.php";
    var data = { llang:llang, link2:link2 };
    $.post( url, data, function(resp){
        if( resp!="nothing" ){
            var optarr = vida.vStrTrans2arr( resp, "|-|x|-|" );
            $("#nmlinknameselect").html("");
            var opt = undefined;
            var otemp = "";
            for( o in optarr )
            {
                otemp = decodeURIComponent( optarr[o] );
                opt = document.createElement("option");
                opt.appendChild(document.createTextNode( otemp ));
                $("#nmlinknameselect").append( opt );
            }
            $("#nmlinknameselect").val(name);
        }
    });
    
    $("#nmname").val(title);
    $("#nmtext").val(text);
    $("#nmMainImg").attr("src",image);
    if( alink2=="events"&&video!="none"&&video!="" ){
        $("#mainVideoHolder").show(1);
        $("#videosIF").attr("src",video);
    } else{
        $("#videosIF").attr("src","");
        $("#mainVideoHolder").hide(1);
    }
}

function ajax_delete_news( dlang, dtitle )
{
    $.post( "kbnews_deleteNews.php", {dlang:dlang,dtitle:dtitle}, function(ree){
        alert(ree);
        ajax_get_news();
    });
}