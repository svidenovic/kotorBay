
var mainbaner = ["s/s1.jpg","s/s2.jpg","s/s3.jpg","s/s4.jpg","s/s5.jpg","s/s6.jpg","s/s7.jpg"];
var activeLang = "";
var infos = {};
var MapSiteAbout = "";
var outDivImpanded = false;
var MainDiv = "";
var br = 0;
var im = 0;
var pPerS = 7; // number of posts per slide

function setInfos()
{
    var inf = {};
    switch( activeLang ){
        case "eng":  inf=infosEng;  break;
        case "rus": inf=infosRuss; break;
        case "yug":  inf=infosYug;  break;
        default:     inf=infosEng;  break;
    }
    return inf;
}

$(document).ready(function()
{
    bkbOnload(2000);
    
    $("#bkbMap").click(function(){
        MapSiteAbout = "map";
        openMap();
    });
    $("#bkbSite").click(function(){
        MapSiteAbout = "site";
        openSite(1000,1000,1000);
    });
    $("#bkbAbout").click(function(){
        MapSiteAbout = "about";
        openAbout();
    });
    
    $("#englanguageswitch").click(function(){
        // english
        activeLang = "eng";
        infos = setInfos();
        refreshInfos( infos );
        switch( MapSiteAbout ){
            case "map": openMap(); break;
            case "site": openSite(1000,1000,1000); break;
            case "about": openAbout(); break;
            default: break; }
    });
    //$("#russlanguageswitch").click(function(){
    //    // russian
    //    activeLang = "rus";
    //    infos = setInfos();
    //    refreshInfos( infos );
    //    switch( MapSiteAbout ){
    //        case "map": openMap(); break;
    //        case "site": openSite(1000,1000,1000); break;
    //        case "about": openAbout(); break;
    //        default: break; }
    //});
    $("#yuglanguageswitch").click(function(){
        // yugoslovenian
        activeLang = "yug";
        infos = setInfos();
        refreshInfos( infos );
        switch( MapSiteAbout ){
            case "map": openMap(); break;
            case "site": openSite(1000,1000,1000); break;
            case "about": openAbout(); break;
            default: break; }
    });
    
});

function bkbOnload( animTime )
{
    MapSiteAbout = "";
    activeLang = "eng";
    infos = setInfos();
    refreshInfos( infos );
    outDivImpanded = false;
    MainDiv = "mainDiv";
    $("#d3buttonsHolder").delay(2000).animate( { margin:'400px 0 10px 220px', opacity:1 }, animTime );
}

function refreshInfos( iobj )
{
    $("#bkbMap").text( iobj.bkbMap );
    $("#bkbSite").text( iobj.bkbSite );
    $("#bkbAbout").text( iobj.bkbAbout );
    $("#langpar").text( iobj.langpar )
}

function impandOutDiv( onFinishFunc, mTime, hTime )
{
    if( !outDivImpanded ){
    $("#outmostDivHolder").css( "background-image", "url('dependences/beautifulKotorbayBGimg2.png')" );
    $("#d3buttonsHolder").animate( { margin:'0 0 10px 220px' }, mTime );
    $("#outmostDivHolder").animate({ height:'120px' },hTime,function(){
        outDivImpanded = true;
        onFinishFunc();
    }); }
}

function openMap()
{
    infos = setInfos();
    if( !outDivImpanded )
    { impandOutDiv( function(){createMainMap(infos,1000);}, 1000, 1000 ); }
    else{ createMainMap(infos,1000); }
}
function openSite( mTime, hTime, oTime )
{
    infos = setInfos();
    br = 0; im = 0;
    if( !outDivImpanded )
    { impandOutDiv( function(){
        createMainSite(infos,oTime);
        ajax_get_adds();
        do_newsevents(infos,br);
    }, mTime, hTime ); }
    else{
        createMainSite(infos,oTime);
        ajax_get_adds();
        do_newsevents(infos,br);
    }
}
function openAbout()
{
    infos = setInfos();
    if( !outDivImpanded )
    { impandOutDiv( function(){createMainAbout(infos,1000);}, 1000, 1000 ); }
    else{ createMainAbout(infos,1000); }
}

function createMainMap( langobj, opacTime )
{
    var MainDiv_exists=(document.getElementById(MainDiv)!=null)?true:false;
    if(MainDiv_exists){
        document.body.removeChild(document.getElementById(MainDiv));
    }
    var divholder = document.createElement("div");
        divholder.setAttribute("id",MainDiv);
        divholder.setAttribute("class","siteMainDivHolder");
        
    var banner = document.createElement("div");
        banner.setAttribute("class","bannercls");
    var bannerDock = document.createElement("div");
        bannerDock.setAttribute("class","bannerDockcls");
    var slidesDiv = document.createElement("div");
        slidesDiv.setAttribute("class","slidesDivcls");
        slidesDiv.setAttribute("id","bkbJQslideshow");
    var imgs = undefined;
    var imgarr = mainbaner;
    for( var i=0; i<imgarr.length; i++ )
    {
        imgs = document.createElement("img");
        imgs.setAttribute("class","imgslides");
        imgs.setAttribute("src","dependences/"+imgarr[i]);
        $(slidesDiv).append(imgs);
    }
    var shadow = document.createElement("div");
        shadow.setAttribute("class","slidesshadowcls");
    var shade = document.createElement("div");
        shade.setAttribute("class","slidesShadecls");
    var logodiv = document.createElement("div");
        logodiv.setAttribute("class","logoDivcls");
    $(banner).append(bannerDock);
    $(bannerDock).append(slidesDiv);
    $(bannerDock).append(shadow);
    $(bannerDock).append(shade);
    $(bannerDock).append(logodiv);
    
    var separator = document.createElement("div");
        separator.setAttribute("class","separatorCls");
        
    var siteContainer = document.createElement("div");
        siteContainer.setAttribute("class","mapContainerDiv");
        
    $(siteContainer).html("<iframe id='ifmapbkb' src='http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=42.430552,18.639679&amp;spn=0.206778,0.441513&amp;t=m&amp;z=11&amp;output=embed'></iframe>");
        
    var creditsDiv = document.createElement("div");
        creditsDiv.setAttribute("class","creditsDivcls");
        
    $(divholder).append(banner);
    $(divholder).append(separator);
    $(divholder).append(siteContainer);
    $(divholder).append(creditsDiv);
    $(divholder).css("opacity",0);
    $("body").append(divholder);
    $(divholder).animate( {opacity:1},opacTime );
    
    $("#bkbJQslideshow").cycle({ fx:"fade",speed:2000,timeout:3000 });
}
function createMainSite( langobj, opacTime )
{
    var MainDiv_exists=(document.getElementById(MainDiv)!=null)?true:false;
    if(MainDiv_exists){
        document.body.removeChild(document.getElementById(MainDiv));
    }
    var divholder = document.createElement("div");
        divholder.setAttribute("id",MainDiv);
        divholder.setAttribute("class","siteMainDivHolder");
        
    var banner = document.createElement("div");
        banner.setAttribute("class","bannercls");
    var bannerDock = document.createElement("div");
        bannerDock.setAttribute("class","bannerDockcls");
    var slidesDiv = document.createElement("div");
        slidesDiv.setAttribute("class","slidesDivcls");
        slidesDiv.setAttribute("id","bkbJQslideshow");
    var imgs = undefined;
    var imgarr = mainbaner;
    for( var i=0; i<imgarr.length; i++ )
    {
        imgs = document.createElement("img");
        imgs.setAttribute("class","imgslides");
        imgs.setAttribute("src","dependences/"+imgarr[i]);
        $(slidesDiv).append(imgs);
    }
    var shadow = document.createElement("div");
        shadow.setAttribute("class","slidesshadowcls");
    var shade = document.createElement("div");
        shade.setAttribute("class","slidesShadecls");
    var logodiv = document.createElement("div");
        logodiv.setAttribute("class","logoDivcls");
    $(banner).append(bannerDock);
    $(bannerDock).append(slidesDiv);
    $(bannerDock).append(shadow);
    $(bannerDock).append(shade);
    $(bannerDock).append(logodiv);
    
    var separator = document.createElement("div");
        separator.setAttribute("class","separatorCls");
        
    var siteContainer = document.createElement("div");
        siteContainer.setAttribute("class","siteContainerDiv");
        
    var leftdivarea = document.createElement("div");
        leftdivarea.setAttribute("class","leftdivarea");
    var centerdivarea = document.createElement("div");
        centerdivarea.setAttribute("class","centerdivarea");
    var rightdivarea = document.createElement("div");
        rightdivarea.setAttribute("class","rightdivarea");
        
    var menuheaderpage = document.createElement("p");
        menuheaderpage.setAttribute("class","menuheaderpage");
        menuheaderpage.setAttribute("id","pageHeader");
        menuheaderpage.appendChild(document.createTextNode(""));
    $(centerdivarea).append(menuheaderpage);
    
    var headerimage = document.createElement("div");
        headerimage.setAttribute("class","cvsLogoHeader");
    var hpar = document.createElement("p");
        hpar.setAttribute("class","cvsLogoHeaderTEXT");
        hpar.setAttribute("id","pageHtxt");
        $(hpar).text("");
        $(headerimage).append(hpar);
    $(centerdivarea).append(headerimage);
    
    var loadContentHere = document.createElement("div");
        loadContentHere.setAttribute("class","loadContentHere");
        loadContentHere.setAttribute("id","ContentHolder");
    $(centerdivarea).append(loadContentHere);
        
    var bkbmenu = document.createElement("div");
        bkbmenu.setAttribute("class","bkbmenucls");
    var btn = undefined;
    for( var u=0; u<langobj.bkbm_button.length; u++ )
    {
        btn = document.createElement("button");
        btn.setAttribute("class","bkbmenubuttons");
        $(btn).text(langobj.bkbm_button[u]);
        $(bkbmenu).append(btn);
        function tmpfunc(langobj){};
        switch(u){
            case 0: $(btn).click( function(){ do_newsevents(langobj,0);  }); break;
            case 1: $(btn).click( function(){ do_cateringfac(langobj); }); break;
            case 2: $(btn).click( function(){ do_venues(langobj);      }); break;
            case 3: $(btn).click( function(){ do_services(langobj);    }); break;
            case 4: $(btn).click( function(){ do_events(langobj);      }); break;
            case 5: $(btn).click( function(){ do_lore(langobj);        }); break;
            default: break;
        }
    }
    var suggestp = document.createElement("p");
        suggestp.setAttribute("class","suggestpcls");
        suggestp.appendChild(document.createTextNode( langobj.suggestp ));
    var comer1 = document.createElement("div");
        comer1.setAttribute("class","comers");
        comer1.setAttribute("id","add_1");
    var comer2 = document.createElement("div");
        comer2.setAttribute("class","comers");
        comer2.setAttribute("id","add_2");
    var comer3 = document.createElement("div");
        comer3.setAttribute("class","comers");
        comer3.setAttribute("id","add_3");
    
    $(leftdivarea).append(bkbmenu);
    $(leftdivarea).append(suggestp);
    $(leftdivarea).append(comer1);
    $(leftdivarea).append(comer2);
    $(leftdivarea).append(comer3);
    $(siteContainer).append(leftdivarea);
    $(siteContainer).append(centerdivarea);
    $(siteContainer).append(rightdivarea);
    
    var suggestp2 = document.createElement("p");
        suggestp2.setAttribute("class","suggestpcls");
        suggestp2.appendChild(document.createTextNode( langobj.suggestp ));
    var comer4 = document.createElement("div");
        comer4.setAttribute("class","comers");
        comer4.setAttribute("id","add_4");
    var comer5 = document.createElement("div");
        comer5.setAttribute("class","comers");
        comer5.setAttribute("id","add_5");
    var comer6 = document.createElement("div");
        comer6.setAttribute("class","comers");
        comer6.setAttribute("id","add_6");
    var comer7 = document.createElement("div");
        comer7.setAttribute("class","comers");
        comer7.setAttribute("id","add_7");
    
    $(rightdivarea).append(suggestp2);
    $(rightdivarea).append(comer4);
    $(rightdivarea).append(comer5);
    $(rightdivarea).append(comer6);
    $(rightdivarea).append(comer7);
        
    var creditsDiv = document.createElement("div");
        creditsDiv.setAttribute("class","creditsDivcls");
        
    $(divholder).append(banner);
    $(divholder).append(separator);
    $(divholder).append(siteContainer);
    $(divholder).append(creditsDiv);
    $(divholder).css("opacity",0);
    $("body").append(divholder);
    $(divholder).animate( {opacity:1},opacTime );
    
    $("#bkbJQslideshow").cycle({ fx:"fade",speed:2000,timeout:3000 });
}
function createMainAbout( langobj, opacTime )
{
    var MainDiv_exists=(document.getElementById(MainDiv)!=null)?true:false;
    if(MainDiv_exists){
        document.body.removeChild(document.getElementById(MainDiv));
    }
    var divholder = document.createElement("div");
        divholder.setAttribute("id",MainDiv);
        divholder.setAttribute("class","siteMainDivHolder");
        
    var banner = document.createElement("div");
        banner.setAttribute("class","bannercls");
    var bannerDock = document.createElement("div");
        bannerDock.setAttribute("class","bannerDockcls");
    var slidesDiv = document.createElement("div");
        slidesDiv.setAttribute("class","slidesDivcls");
        slidesDiv.setAttribute("id","bkbJQslideshow");
    var imgs = undefined;
    var imgarr = mainbaner;
    for( var i=0; i<imgarr.length; i++ )
    {
        imgs = document.createElement("img");
        imgs.setAttribute("class","imgslides");
        imgs.setAttribute("src","dependences/"+imgarr[i]);
        $(slidesDiv).append(imgs);
    }
    var shadow = document.createElement("div");
        shadow.setAttribute("class","slidesshadowcls");
    var shade = document.createElement("div");
        shade.setAttribute("class","slidesShadecls");
    var logodiv = document.createElement("div");
        logodiv.setAttribute("class","logoDivcls");
    $(banner).append(bannerDock);
    $(bannerDock).append(slidesDiv);
    $(bannerDock).append(shadow);
    $(bannerDock).append(shade);
    $(bannerDock).append(logodiv);
    
    var separator = document.createElement("div");
        separator.setAttribute("class","separatorCls");
        
    var siteContainer = document.createElement("div");
        siteContainer.setAttribute("class","aboutContainerDiv");
        
    var abouttext = document.createElement("textarea");
        abouttext.setAttribute("class","abouttext");
        abouttext.setAttribute("readonly","readonly");
        $(abouttext).val(langobj.contactAbout);
    $(siteContainer).append(abouttext);
        
    var creditsDiv = document.createElement("div");
        creditsDiv.setAttribute("class","creditsDivcls");
        
    $(divholder).append(banner);
    $(divholder).append(separator);
    $(divholder).append(siteContainer);
    $(divholder).append(creditsDiv);
    $(divholder).css("opacity",0);
    $("body").append(divholder);
    $(divholder).animate( {opacity:1},opacTime );
    
    $("#bkbJQslideshow").cycle({ fx:"fade",speed:2000,timeout:3000 });
}

function do_newsevents( langobj, n )
{
    var outterarr = new Array();
    var innerarr = new Array();
    var posts = new Array();
    var header = langobj.pageheader[0];
    $("div.cvsLogoHeader").css("background-image","url('dependences/bkbh_newsANDevents.png')");
    $("#pageHtxt").text(header);
    $("#pageHtxt").css("color","#ffffff");
    $("#pageHtxt").css("margin","10px 0 0 0");
    $("#pageHtxt").css("font-size","36px");
    $("#pageHtxt").css("font-family","customfont1");
    $("#pageHtxt").css("text-align","center");
    $("#pageHtxt").css("text-shadow","2px 2px 0.1em #8d8d8d");
    var url="dependences/bkbGetNews.php";
    var lang = langobj.lang;
    $("p.menuheaderpage").css("background-image","url('dependences/buffer.png')");
    $.post( url, {lang:lang}, function(ree){
        outterarr = vida.vStrTrans2arr( ree, "|.:|x|:.|" );
        for( o in outterarr ){
            for( var d=1; d<=7; d++ )
            { innerarr.push( vida.vStrSection(d,outterarr[o],"<:-x-:>") ); }
            posts.push( innerarr );
            innerarr = new Array();
        }
        manifestPosts( n, posts, langobj );
    });
}
function manifestPosts( int_slide, postarr, langobj )
{
    var lang = langobj.lang;
    $("#ContentHolder").html("");
    var post_slides = vida.vArrseparator( postarr, pPerS, true );
    br = int_slide;
    im = parseInt( post_slides.length )-1;
    // tmp vars:
    var tmpimg = "";
    var tmpvid = "";
    // bkbNEs:
    var bkbNEmain = "";
    var bkbNElink2 = "";
    var bkbNEname = "";
    var bkbNEtitle = "";
    var bkbNEtext = "";
    var bkbNEvideo = "";
    var bkbNEimage = "";
    // objects:
    var neDiv = undefined;
    var neImg = undefined;
    var neVid = undefined;
    var neTit = undefined;
    var neTxt = undefined;
    // upper arrow
    var uparrow = document.createElement("button");
    uparrow.setAttribute("class","NEarrowcls");
    uparrow.setAttribute("id","bkbNEuparrow");
    $(uparrow).text(langobj.uparrow);
    $(uparrow).click(function(){ Post_goForward() });
    $("#ContentHolder").append(uparrow);
    
    // creation loop:
    for( x in post_slides[int_slide] )
    {
        bkbNEmain  = post_slides[int_slide][x][0];
        bkbNElink2 = post_slides[int_slide][x][1];
        bkbNEname  = post_slides[int_slide][x][2];
        bkbNEtitle = post_slides[int_slide][x][3];
        bkbNEtext  = post_slides[int_slide][x][4];
        bkbNEvideo = post_slides[int_slide][x][5];
        bkbNEimage = post_slides[int_slide][x][6];
        var neutral = (bkbNElink2=="neutral")?true:false;
        
        neDiv = document.createElement("div");
        neDiv.setAttribute("class","neDivCls");
        if(!neutral){
            neDiv.setAttribute("onclick","openNEpost( '"+lang+"','"+bkbNElink2+"','"+bkbNEname+"' );");
        }
        if( bkbNEmain=="image" ){
            tmpimg = decodeURIComponent(bkbNEimage);
            tmpimg = tmpimg.replace("../../","");
            neImg = document.createElement("img");
            neImg.setAttribute("class","neImgCls");
            neImg.setAttribute("src",tmpimg);
            $(neDiv).append(neImg);
        }
        else if( bkbNEmain=="video" ){
            tmpvid = decodeURIComponent(bkbNEvideo);
            neVid = document.createElement("iframe");
            neVid.setAttribute("class","neVidCls");
            neVid.setAttribute("src",tmpvid);
            $(neDiv).append(neVid);
        }
        
        neTit = document.createElement("p");
        neTit.setAttribute("class","neTitCls");
        $(neTit).text(decodeURIComponent( bkbNEtitle ));
        $(neDiv).append(neTit);
        
        neTxt = document.createElement("textarea");
        neTxt.setAttribute("class","neTxtCls");
        neTxt.setAttribute("readonly","readonly");
        $(neTxt).val(decodeURIComponent( bkbNEtext ));
        $(neDiv).append(neTxt);
        $("#ContentHolder").append(neDiv);
    }
    var dwnarrow = document.createElement("button");
    dwnarrow.setAttribute("class","NEarrowcls");
    dwnarrow.setAttribute("id","bkbNEdwnarrow");
    $(dwnarrow).text(langobj.dwnarrow);
    $(dwnarrow).click(function(){ Post_goBack(); });
    $("#ContentHolder").append(dwnarrow);
    
         if(br==0){ $("#bkbNEuparrow").hide(1); }
    else if(br >0){ $("#bkbNEuparrow").show(1); }
         if(im >br){ $("#bkbNEdwnarrow").show(1); }
    else if(im==br){ $("#bkbNEdwnarrow").hide(1); }
    
    $("p.menuheaderpage").css("background-image","none");
}
function Post_goBack()
{
    infos = setInfos();
    var url = "dependences/bkbNEgetNoSlides.php";
    var lan = infos.lang;
    var eps = pPerS;
    $.post( url, {lan:lan,eps:eps}, function(nOslides){
        im = parseInt( nOslides )-1;
        if( br < im )
        {
            br += 1;
            do_newsevents( infos, br );
        }
    });
}
function Post_goForward()
{
    infos = setInfos();
    if( br > 0 )
    {
        br -= 1;
        do_newsevents( infos, br );
    }
}
function openNEpost( str_lang, str_link2, str_name )
{
    send2open( str_link2, str_name, str_lang );
}

function cvsTown( cvstype, cvslangobj )
{
    var lang = cvslangobj.lang;
    var url = "dependences/bkbGetTowns.php";
    var cvsarr = new Array();
    var towns = new Array();
    $("p.menuheaderpage").css("background-image","url('dependences/buffer.png')");
    $.post( url, function(ree){
        cvsarr = vida.vStrTrans2arr(ree,"|-(x)-|");
        for( c in cvsarr ){
            towns[c]=[];
            towns[c][0]=vida.vStrSection(1,(cvsarr[c]),"<:x:>");
            towns[c][1]=vida.vStrSection(2,(cvsarr[c]),"<:x:>");
        }
        $("#ContentHolder").html("");
        
        var twnDiv = undefined;
        var twnImg = undefined;
        var twnPar = undefined;
        var tmpimg = "";
        var tmptxt = "";
        var chooseTown = document.createElement("p");
        chooseTown.setAttribute("class","suggestpcls");
        $(chooseTown).text(cvslangobj.chooseTwn);
        $("#ContentHolder").append(chooseTown);
        for( t in towns )
        {
            twnDiv = document.createElement("div");
            twnDiv.setAttribute("class","twnDivCls");
            
            twnImg = document.createElement("img");
            twnImg.setAttribute("class","twnImgCls");
            tmpimg = (decodeURIComponent(towns[t][1])).replace("../../","");
            twnImg.setAttribute("src",tmpimg);
            
            twnPar = document.createElement("p");
            twnPar.setAttribute("class","twnTitCls");
            tmptxt = towns[t][0];
            $(twnPar).text(decodeURIComponent(tmptxt));
            
            $(twnDiv).append(twnImg);
            $(twnDiv).append(twnPar);
            // run some lore function here
            twnDiv.setAttribute("onclick","getNcreateSVC('"+cvstype+"','"+lang+"','"+tmptxt+"');");
            $("#ContentHolder").append(twnDiv);
        }
        $("p.menuheaderpage").css("background-image","none");
    });
}
function getNcreateSVC( svcType, svcLang, town )
{
    $("p.menuheaderpage").css("background-image","url('dependences/buffer.png')");
    infos = setInfos();
    var outarr = new Array();
    var inarr = new Array();
    var svcArr = new Array();
    var indx = 0;
    switch(svcType){
        case "catering%20facilities": indx=0; break;
        case "venues": indx=1; break;
        case "services": indx=2; break;
        default: break; }
    var url = "dependences/bkbGetSVC.php";
    var params = { svcType:svcType, svcLang:svcLang, town:town };
    $.post( url, params, function(ree){
        if(ree=="nothing"){
            $("p.menuheaderpage").css("background-image","none");
            alert(infos.noSVCalrt[indx]);
        }
        else{
            outarr = vida.vStrTrans2arr( ree, "|]:|x|:[|" );
            for( o in outarr ){
                for( var d=1; d<=4; d++ )
                { inarr.push( vida.vStrSection(d,outarr[o],"<::x::>") ); }
                svcArr.push( inarr );
                inarr = new Array();
            }
            $("#ContentHolder").html("");
            // tmps:
            var tmpsrc = "";
            // svcs:
            var svcName = "";
            var svcMainImg = "";
            var svcText = "";
            var svcImages = "";
            // objects:
            var cvsDiv = undefined;
            var cvsImg = undefined;
            var cvsTit = undefined;
            var cvsTxt = undefined;
            var cvsGallAttr = undefined;
            // town name & backbtn
            var cvsBackbtn = document.createElement("button");
            cvsBackbtn.setAttribute("class","cvsBackBtn");
            $(cvsBackbtn).click(function(){ cvsTown( svcType, infos ); });
            $(cvsBackbtn).text(infos.cvsBackbtn);
            var twnNamelbl = document.createElement("p");
            twnNamelbl.setAttribute("class","twnNameLabel");
            $(twnNamelbl).text(infos.cvsTown_sth+(decodeURIComponent(town)));
            $("#ContentHolder").append(cvsBackbtn);
            $("#ContentHolder").append(twnNamelbl);
            // the loop:
            for( w in svcArr )
            {
                svcName    = svcArr[w][0];
                svcMainImg = svcArr[w][1];
                svcText    = svcArr[w][2];
                svcImages  = svcArr[w][3];
                
                cvsDiv = document.createElement("div");
                cvsDiv.setAttribute("class","svcDivCls");
                //cvsGallAttr = document.createAttribute("cvsgall");
                //cvsDiv.setAttributeNode( cvsGallAttr );
                //cvsDiv.setAttribute("cvsgall",svcImages);
                cvsDiv.setAttribute("onclick","send2open('"+svcType+"','"+svcName+"','"+svcLang+"');");
                
                cvsImg = document.createElement("img");
                cvsImg.setAttribute("class","svcImgCls");
                tmpsrc = (decodeURIComponent(svcMainImg)).replace("../../","");
                cvsImg.setAttribute("src",tmpsrc);
                
                cvsTit = document.createElement("p");
                cvsTit.setAttribute("class","svcTitCls");
                $(cvsTit).text(decodeURIComponent(svcName));
                
                cvsTxt = document.createElement("textarea");
                cvsTxt.setAttribute("class","svcTxtCls");
                cvsTxt.setAttribute("readonly","readonly");
                $(cvsTxt).val(decodeURIComponent(svcText));
                
                $(cvsDiv).append(cvsImg);
                $(cvsDiv).append(cvsTit);
                $(cvsDiv).append(cvsTxt);
                $("#ContentHolder").append(cvsDiv);
            }
            $("p.menuheaderpage").css("background-image","none");
        }
    });
}

function getNcreateEvents( objLang )
{
    $("p.menuheaderpage").css("background-image","url('dependences/buffer.png')");
    var outarr = new Array();
    var inarr = new Array();
    var eArr = new Array();
    var lang = objLang.lang;
    var url = "dependences/bkbGetEvents.php";
    var params = { lang:lang };
    $.post( url, params, function(ree){
        if(ree=="nothing")
        { $("#ContentHolder").html(""); }
        else{
            outarr = vida.vStrTrans2arr( ree, "|]:|x|:[|" );
            for( o in outarr ){
                for( var d=1; d<=5; d++ )
                { inarr.push( vida.vStrSection(d,outarr[o],"<::x::>") ); }
                eArr.push( inarr );
                inarr = new Array();
            }
            $("#ContentHolder").html("");
            // tmps:
            var tmpsrc = "";
            // es:
            var eName = "";
            var eMainImg = "";
            var eText = "";
            var eImages = "";
            var eVideos = "";
            // objects:
            var eDiv = undefined;
            var eImg = undefined;
            var eTit = undefined;
            var eTxt = undefined;
            var eGallAttr = undefined;
            var eVidsAttr = undefined;
            // the loop:
            for( e in eArr )
            {
                eName    = eArr[e][0];
                eMainImg = eArr[e][1];
                eText    = eArr[e][2];
                eImages  = eArr[e][3];
                eVideos  = eArr[e][4];
                
                eDiv = document.createElement("div");
                eDiv.setAttribute("class","eDivCls");
                
                //eGallAttr = document.createAttribute("egall");
                //eDiv.setAttributeNode( eGallAttr );
                //eDiv.setAttribute("egall",eImages);
                //$(eDiv).click(function(){ alert($(this).attr("egall")); });
                //
                //eVidsAttr = document.createAttribute("eVids");
                //eDiv.setAttributeNode( eVidsAttr );
                //eDiv.setAttribute("eVids",eVideos);
                eDiv.setAttribute("onclick","send2open('events','"+eName+"','"+lang+"');");
                
                eImg = document.createElement("img");
                eImg.setAttribute("class","eImgCls");
                tmpsrc = (decodeURIComponent(eMainImg)).replace("../../","");
                eImg.setAttribute("src",tmpsrc);
                
                eTit = document.createElement("p");
                eTit.setAttribute("class","eTitCls");
                $(eTit).text(decodeURIComponent(eName));
                
                eTxt = document.createElement("textarea");
                eTxt.setAttribute("class","eTxtCls");
                eTxt.setAttribute("readonly","readonly");
                $(eTxt).val(decodeURIComponent(eText));
                
                $(eDiv).append(eImg);
                $(eDiv).append(eTit);
                $(eDiv).append(eTxt);
                $("#ContentHolder").append(eDiv);
            }
        }
        $("p.menuheaderpage").css("background-image","none");
    });
}

function getNcreateLore( town, lang )
{
    $("p.menuheaderpage").css("background-image","url('dependences/buffer.png')");
    
    var url = "dependences/bkbGetLore.php";
    var params = { lang:lang, town:town };
    $.post( url, params, function(ree){
        if(ree=="nothing"){
            $("p.menuheaderpage").css("background-image","none");
            alert(infos.noSVCalrt[3]);
        }
        else{
            var outarr = new Array();
            var inarr = new Array();
            var lArr = new Array();
            outarr = vida.vStrTrans2arr( ree, "|]:|x|:[|" );
            for( o in outarr ){
                for( var d=1; d<=3; d++ )
                { inarr.push( vida.vStrSection(d,outarr[o],"<::x::>") ); }
                lArr.push( inarr );
                inarr = new Array();
            }
            $("#ContentHolder").html("");
            // town name & backbtn
            var cvsBackbtn = document.createElement("button");
            cvsBackbtn.setAttribute("class","cvsBackBtn");
            $(cvsBackbtn).click(function(){ loreTown( infos ); });
            $(cvsBackbtn).text(infos.cvsBackbtn);
            var twnNamelbl = document.createElement("p");
            twnNamelbl.setAttribute("class","twnNameLabel");
            $(twnNamelbl).text(infos.cvsTown_sth+(decodeURIComponent(town)));
            $("#ContentHolder").append(cvsBackbtn);
            $("#ContentHolder").append(twnNamelbl);
            // ls:
            var lName = "";
            var lText = "";
            var lImages = "";
            // objects:
            var lPar = undefined;
            var lTxtAttr = undefined;
            var lGallAttr = undefined;
            // the loop:
            for( l in lArr )
            {
                lName   = lArr[l][0];
                lText   = lArr[l][1];
                lImages = lArr[l][2];
                
                lPar = document.createElement("p");
                lPar.setAttribute("class","LorePar");
                $(lPar).text(decodeURIComponent(lName));
                lPar.setAttribute("onclick","send2open('lore','"+lName+"','"+lang+"');");
                
                $("#ContentHolder").append(lPar);
            }
        }
        $("p.menuheaderpage").css("background-image","none");
    });
}

function do_cateringfac( langobj )
{
    var header = langobj.pageheader[1];
    $("div.cvsLogoHeader").css("background-image","url('dependences/bkbh_cateringfacilities.png')");
    $("#pageHtxt").text(header);
    $("#pageHtxt").css("color","#e6c076");
    $("#pageHtxt").css("margin","10px 0 0 0");
    $("#pageHtxt").css("font-size","26px");
    $("#pageHtxt").css("font-family","customfont2");
    $("#pageHtxt").css("text-align","center");
    $("#pageHtxt").css("text-shadow","1px 1px 0.1em #000000");
    cvsTown( "catering%20facilities", langobj );
}
function do_venues( langobj )
{
    var header = langobj.pageheader[2];
    $("div.cvsLogoHeader").css("background-image","url('dependences/bkbh_venues.png')");
    $("#pageHtxt").text(header);
    $("#pageHtxt").css("color","#b40a19");
    $("#pageHtxt").css("margin","0 0 0 13px");
    $("#pageHtxt").css("font-size","26px");
    $("#pageHtxt").css("font-family","customfont3");
    $("#pageHtxt").css("text-align","center");
    $("#pageHtxt").css("text-shadow","1px 1px 0.1em #db0000");
    cvsTown( "venues", langobj );
}
function do_services( langobj )
{
    var header = langobj.pageheader[3];
    $("div.cvsLogoHeader").css("background-image","url('dependences/bkbh_services.png')");
    $("#pageHtxt").text(header);
    $("#pageHtxt").css("color","#000000");
    $("#pageHtxt").css("margin","0 0 0 10px");
    $("#pageHtxt").css("font-size","28px");
    $("#pageHtxt").css("font-family","customfont4");
    $("#pageHtxt").css("text-align","right");
    $("#pageHtxt").css("text-shadow","1px 1px 0.1em #000000");
    cvsTown( "services", langobj );
}
function do_events( langobj )
{
    var header = langobj.pageheader[4];
    $("div.cvsLogoHeader").css("background-image","url('dependences/bkbh_events.png')");
    $("#pageHtxt").text(header);
    $("#pageHtxt").css("color","#c9a47f");
    $("#pageHtxt").css("margin","10px 0 0 0");
    $("#pageHtxt").css("font-size","36px");
    $("#pageHtxt").css("font-family","customfont5");
    $("#pageHtxt").css("text-align","right");
    $("#pageHtxt").css("text-shadow","1px 1px 0.1em #000000");
    getNcreateEvents(langobj);
}
function do_lore( langobj )
{
    var header = langobj.pageheader[5];
    $("div.cvsLogoHeader").css("background-image","url('dependences/bkbh_lore.png')");
    $("#pageHtxt").text(header);
    $("#pageHtxt").css("color","#dfdfdf");
    $("#pageHtxt").css("margin","25px 0 0 0");
    $("#pageHtxt").css("font-size","46px");
    $("#pageHtxt").css("font-family","customfont6");
    $("#pageHtxt").css("text-align","right");
    $("#pageHtxt").css("text-shadow","1px 1px 0.1em #000000");
    loreTown( langobj );
}

function loreTown( cvslangobj )
{
    var lang = cvslangobj.lang;
    var url = "dependences/bkbGetTowns.php";
    var cvsarr = new Array();
    var towns = new Array();
    $("p.menuheaderpage").css("background-image","url('dependences/buffer.png')");
    $.post( url, function(ree){
        cvsarr = vida.vStrTrans2arr(ree,"|-(x)-|");
        for( c in cvsarr ){
            towns[c]=[];
            towns[c][0]=vida.vStrSection(1,(cvsarr[c]),"<:x:>");
            towns[c][1]=vida.vStrSection(2,(cvsarr[c]),"<:x:>");
        }
        $("#ContentHolder").html("");
        
        var twnDiv = undefined;
        var twnImg = undefined;
        var twnPar = undefined;
        var tmpimg = "";
        var tmptxt = "";
        var chooseTown = document.createElement("p");
        chooseTown.setAttribute("class","suggestpcls");
        $(chooseTown).text(cvslangobj.chooseTwn);
        $("#ContentHolder").append(chooseTown);
        for( t in towns )
        {
            twnDiv = document.createElement("div");
            twnDiv.setAttribute("class","twnDivCls");
            
            twnImg = document.createElement("img");
            twnImg.setAttribute("class","twnImgCls");
            tmpimg = (decodeURIComponent(towns[t][1])).replace("../../","");
            twnImg.setAttribute("src",tmpimg);
            
            twnPar = document.createElement("p");
            twnPar.setAttribute("class","twnTitCls");
            tmptxt = towns[t][0];
            $(twnPar).text(decodeURIComponent(tmptxt));
            
            $(twnDiv).append(twnImg);
            $(twnDiv).append(twnPar);
            // run some lore function here
            twnDiv.setAttribute("onclick","getNcreateLore('"+tmptxt+"','"+lang+"');");
            
            $("#ContentHolder").append(twnDiv);
        }
        $("p.menuheaderpage").css("background-image","none");
    });
}

function ajax_get_adds()
{
    var adds = new Array();
    var tarr = new Array();
    var tar2 = new Array();
    var url = "dependences/bkbGetAdds.php";
    $.post( url, function(ree){
        tarr = vida.vStrTrans2arr(ree,"[[[x]]]");
        for( t in tarr ){
            adds[t] = new Array();
            tar2 = vida.vStrTrans2arr(tarr[t],"(:x:)");
            adds[t][0] = tar2[0]; // name
            adds[t][1] = tar2[1]; // images
            adds[t][2] = tar2[2]; // link2site
            adds[t][3] = tar2[3]; // ownbaner
            adds[t][4] = tar2[4]; // height
        }
        do_adds(adds);
    });
}

function do_adds( addsarr )
{
    var baners = [[],[],[],[],[],[],[]];
    var bpos = 0;
    for( x in addsarr ){
        bpos = addsarr[x][3]-1;
        baners[bpos] = new Array();
        baners[bpos] = addsarr[x];
    }
    var aslide = undefined;
    var linkattr = undefined;
    var images = new Array();
    var tmpsrc = "";
    var addsobjs= [$("#add_1"),
                   $("#add_2"),
                   $("#add_3"),
                   $("#add_4"),
                   $("#add_5"),
                   $("#add_6"),
                   $("#add_7")];
    for( b in baners ){
        $("#add_"+(b+1)).html();
        images = new Array();
        images = vida.vStrTrans2arr( (decodeURIComponent(baners[b][1])), "|--|x|--|" );
        if(images.length>=1){
            for( i in images ){
                //tmpsrc = images[i].replace("../../images/thumb/thumb_","images/");
                tmpsrc = images[i].replace("../../","");
                aslide = document.createElement("img");
                linkattr = document.createAttribute("addlink2");
                aslide.setAttributeNode(linkattr);
                aslide.setAttribute("addlink2",decodeURIComponent(baners[b][2]));
                aslide.setAttribute("class","addImage");
                aslide.setAttribute("src",tmpsrc);
                $(aslide).click(function(){ add_go2link( $(this).attr("addlink2") ); });
                addsobjs[b].append(aslide);
                addsobjs[b].css("height",baners[b][4]);
            }
            if( baners[b].length>=2 ){
                addsobjs[b].cycle({
                    fx:"fade",
                    speed:2000,
                    timeout:3000 });
            }
        }
    }
}
function add_go2link( go2link )
{ window.open(go2link); }

/* ------------ OPENNER PAGE ------------ */

function send2open( stype, sname, slang )
{
    var url = "bkbOpen.html";
    var params = "?type="+stype+"&name="+sname+"&lang="+slang;
    window.open( url+params );
}

function ajax_visitPP( type, name, lang, objlang )
{
    if( type=="venues"||type=="services"||type=="catering%20facilities" )
    {
        var url = "dependences/bkbVisitPP.php";
        var par = { type:type, name:name, lang:lang };
        $.post(url,par,function(ree){
            var visits = parseInt(ree);
            var visitP = document.createElement("p");
            visitP.setAttribute("class","visitsPar");
            $(visitP).text( visits + objlang.visitText );
            $("#bkboMainDivid").append(visitP);
        });
    }
}

function bkboOnLoad()
{
    var otype = vida.getUrlVars()["type"];
    var oname = vida.getUrlVars()["name"];
    var olang = vida.getUrlVars()["lang"];
    if( otype!=undefined && oname!=undefined && olang!=undefined )
    {
        var stuff = new Array();
        var url = "dependences/bkboGet2open.php";
        var parms = { otype:otype,oname:oname,olang:olang };
        $.post(url,parms,function(ree){
            stuff = vida.vStrTrans2arr(ree,"|<.:x:.>|");
            
            $("#bkboMainDivid").html("");
            // close button:
            var clsbtn = document.createElement("button");
            clsbtn.setAttribute("class","bkboClose");
            activeLang = olang;
            infos = setInfos();
            $(clsbtn).text(infos.bkbOclosebtn);
            $(clsbtn).click(function(){ window.close(); });
            $("#bkboMainDivid").append(clsbtn);
            // vars:
            var osvcName    = decodeURIComponent(oname);
            var osvcMainImg = "";
            var osvcText    = "";
            var osvcImages  = "";
            var osvcTown    = "";
            var osvcStars   = "";
            var osvcLink2s  = "";
            var osvcVideos  = "";
            var imgsarr = new Array();
            var vidsarr = new Array();
            var otmpsrc = "";
            var cnt = 0;
            var fullresimgarr = new Array();
            var arrPosNum = undefined;
            // the rest:
            if(otype=="services"||otype=="venues"||otype=="catering%20facilities"){
                osvcMainImg = decodeURIComponent(stuff[0]);
                osvcText    = decodeURIComponent(stuff[1]);
                osvcImages  = decodeURIComponent(stuff[2]); imgsarr=vida.vStrTrans2arr(osvcImages,"|--|x|--|");
                osvcTown    = decodeURIComponent(stuff[3]);
                osvcStars   = decodeURIComponent(stuff[4]);
                osvcLink2s  = decodeURIComponent(stuff[5]);
                if(osvcStars!="none"){
                    var starn = parseInt(osvcStars);
                    var starpos = "0 150px";
                    var stardiv = document.createElement("div");
                    stardiv.setAttribute("class","starDivind");
                    switch(starn){
                        case 1: starpos="0 150px"; break;
                        case 2: starpos="0 120px"; break;
                        case 3: starpos="0 90px"; break;
                        case 4: starpos="0 60px"; break;
                        case 5: starpos="0 30px"; break;
                        default: break;
                    }
                    $("#bkboMainDivid").append(stardiv);
                    $(stardiv).css("background-position",starpos);
                }
                if(osvcMainImg!=""){
                    var spawnMainImgDiv = document.createElement("div");
                    spawnMainImgDiv.setAttribute("class","bkboimgholder");
                    var spawnMainImg = document.createElement("img");
                    spawnMainImg.setAttribute("class","bkboImg");
                    otmpsrc = osvcMainImg.replace("../../images/thumb/thumb_","images/");
                    spawnMainImg.setAttribute("src",otmpsrc);
                    spawnMainImgDiv.appendChild(spawnMainImg);
                    $("#bkboMainDivid").append(spawnMainImgDiv);
                }
                if(osvcName!=""){
                    var spawnName = document.createElement("p");
                    spawnName.setAttribute("class","bkboPname");
                    $(spawnName).text(osvcName);
                    $("#bkboMainDivid").append(spawnName);
                }
                if(osvcTown!=""){
                    var spawnTown = document.createElement("p");
                    spawnTown.setAttribute("class","bkboPtown");
                    $(spawnTown).text(infos.cvsTown_sth+osvcTown);
                    $("#bkboMainDivid").append(spawnTown);
                }
                if( osvcLink2s.match("http")=="http" ){
                    var bkboanc = document.createElement("a");
                    bkboanc.setAttribute("class","bkboPnameLink");
                    bkboanc.setAttribute("href",osvcLink2s);
                    $(bkboanc).text(infos.visitPage);
                    $("#bkboMainDivid").append(bkboanc);
                }
                var spawnhr = document.createElement("div");
                spawnhr.setAttribute("class","bkbohr");
                $("#bkboMainDivid").append(spawnhr);
                    
                if(osvcText!=""){
                    var spawnText = document.createElement("textarea");
                    spawnText.setAttribute("class","bkbotxt");
                    spawnText.setAttribute("readonly","readonly");
                    $(spawnText).val(osvcText);
                    $("#bkboMainDivid").append(spawnText);
                    // height set
                    if( osvcText.match('\n')=='\n' ){
                    cnt = osvcText.match(/\n/g).length; }
                    else{ cnt = 0; }
                    if( cnt >= 3 ){
                    $(spawnText).css("height",(30*cnt)); }
                }
                if(imgsarr.length>=1){
                    var spawnImgsHolder = document.createElement("div");
                    spawnImgsHolder.setAttribute("class","bkboImgsHolder");
                    var spawnimg = undefined;
                    fullresimgarr = new Array();
                    arrPosNum = undefined;
                    for( u in imgsarr ){ fullresimgarr[u]=imgsarr[u].replace("thumb/thumb_",""); }
                    for( i in imgsarr ){
                        spawnimg = document.createElement("img");
                        spawnimg.setAttribute("class","bkbooneOfimgs");
                        arrPosNum = document.createAttribute("arrPosNum");
                        spawnimg.setAttributeNode(arrPosNum);
                        spawnimg.setAttribute("arrPosNum",i);
                        otmpsrc = imgsarr[i].replace("../../","");
                        $(spawnimg).click(function(){ var s=parseInt($(this).attr("arrPosNum")); vida.vopenImg(s,fullresimgarr,"dependences/","|[]x[]|"); });
                        spawnimg.setAttribute("src",otmpsrc);
                        spawnImgsHolder.appendChild(spawnimg);
                    }
                    $("#bkboMainDivid").append(spawnImgsHolder);
                }
                ajax_visitPP( otype, oname, olang, infos );
            }
            else if(otype=="events"){
                osvcMainImg = decodeURIComponent(stuff[0]);
                osvcText    = decodeURIComponent(stuff[1]);
                osvcImages  = decodeURIComponent(stuff[2]); imgsarr=vida.vStrTrans2arr(osvcImages,"|--|x|--|");
                osvcVideos  = decodeURIComponent(stuff[3]); vidsarr=vida.vStrTrans2arr(osvcVideos,"|--|x|--|");
                
                if(osvcMainImg!=""){
                    var spawnMainImgDiv = document.createElement("div");
                    spawnMainImgDiv.setAttribute("class","bkboimgholder");
                    var spawnMainImg = document.createElement("img");
                    spawnMainImg.setAttribute("class","bkboImg");
                    otmpsrc = osvcMainImg.replace("../../images/thumb/thumb_","images/");
                    spawnMainImg.setAttribute("src",otmpsrc);
                    spawnMainImgDiv.appendChild(spawnMainImg);
                    $("#bkboMainDivid").append(spawnMainImgDiv);
                }
                if(osvcName!=""){
                    var spawnName = document.createElement("p");
                    spawnName.setAttribute("class","bkboPname");
                    $(spawnName).text(osvcName);
                    $("#bkboMainDivid").append(spawnName);
                }
                var spawnhr = document.createElement("div");
                spawnhr.setAttribute("class","bkbohr");
                $("#bkboMainDivid").append(spawnhr);
                    
                if(osvcText!=""){
                    var spawnText = document.createElement("textarea");
                    spawnText.setAttribute("class","bkbotxt");
                    spawnText.setAttribute("readonly","readonly");
                    $(spawnText).val(osvcText);
                    $("#bkboMainDivid").append(spawnText);
                    // height set
                    if( osvcText.match('\n')=='\n' ){
                    cnt = osvcText.match(/\n/g).length; }
                    else{ cnt = 0; }
                    if( cnt >= 3 ){
                    $(spawnText).css("height",(30*cnt)); }
                }
                if(vidsarr.length>=1){
                    var spawnVidsHolder = document.createElement("div");
                    spawnVidsHolder.setAttribute("class","bkboVidsHolder");
                    var spawnVideo = undefined;
                    for( v in vidsarr ){
                        spawnVideo = document.createElement("iframe");
                        spawnVideo.setAttribute("class","bkboVideos");
                        spawnVideo.setAttribute("src",vidsarr[v]);
                        spawnVidsHolder.appendChild(spawnVideo);
                    }
                    $("#bkboMainDivid").append(spawnVidsHolder);
                }
                if(imgsarr.length>=1){
                    var spawnImgsHolder = document.createElement("div");
                    spawnImgsHolder.setAttribute("class","bkboImgsHolder");
                    var spawnimg = undefined;
                    fullresimgarr = new Array();
                    arrPosNum = undefined;
                    for( u in imgsarr ){ fullresimgarr[u]=imgsarr[u].replace("thumb/thumb_",""); }
                    for( i in imgsarr ){
                        spawnimg = document.createElement("img");
                        spawnimg.setAttribute("class","bkbooneOfimgs");
                        arrPosNum = document.createAttribute("arrPosNum");
                        spawnimg.setAttributeNode(arrPosNum);
                        spawnimg.setAttribute("arrPosNum",i);
                        $(spawnimg).click(function(){ var s=parseInt($(this).attr("arrPosNum")); vida.vopenImg(s,fullresimgarr,"dependences/","|[]x[]|"); });
                        otmpsrc = imgsarr[i].replace("../../","");
                        spawnimg.setAttribute("src",otmpsrc);
                        spawnImgsHolder.appendChild(spawnimg);
                    }
                    $("#bkboMainDivid").append(spawnImgsHolder);
                }
            }
            else if(otype=="lore"){
                osvcText    = decodeURIComponent(stuff[0]);
                osvcImages  = decodeURIComponent(stuff[1]); imgsarr=vida.vStrTrans2arr(osvcImages,"|--|x|--|");
                
                if(osvcName!=""){
                    var spawnName = document.createElement("p");
                    spawnName.setAttribute("class","bkboPname");
                    $(spawnName).text(osvcName);
                    $("#bkboMainDivid").append(spawnName);
                }
                var spawnhr = document.createElement("div");
                spawnhr.setAttribute("class","bkbohr");
                $("#bkboMainDivid").append(spawnhr);
                    
                if(osvcText!=""){
                    var spawnText = document.createElement("textarea");
                    spawnText.setAttribute("class","bkbotxt");
                    spawnText.setAttribute("readonly","readonly");
                    $(spawnText).val(osvcText);
                    $("#bkboMainDivid").append(spawnText);
                    // height set
                    if( osvcText.match('\n')=='\n' ){
                    cnt = osvcText.match(/\n/g).length; }
                    else{ cnt = 0; }
                    if( cnt >= 3 ){
                    $(spawnText).css("height",(30*cnt)); }
                }
                if(imgsarr.length>=1){
                    var spawnImgsHolder = document.createElement("div");
                    spawnImgsHolder.setAttribute("class","bkboImgsHolder");
                    var spawnimg = undefined;
                    var fullresimgarr = new Array();
                    var arrPosNum = undefined;
                    for( u in imgsarr ){ fullresimgarr[u]=imgsarr[u].replace("thumb/thumb_",""); }
                    for( i in imgsarr ){
                        spawnimg = document.createElement("img");
                        spawnimg.setAttribute("class","bkbooneOfimgs");
                        arrPosNum = document.createAttribute("arrPosNum");
                        spawnimg.setAttributeNode(arrPosNum);
                        spawnimg.setAttribute("arrPosNum",i);
                        $(spawnimg).click(function(){ var s=parseInt($(this).attr("arrPosNum")); vida.vopenImg(s,fullresimgarr,"dependences/","|[]x[]|"); });
                        otmpsrc = imgsarr[i].replace("../../","");
                        spawnimg.setAttribute("src",otmpsrc);
                        spawnImgsHolder.appendChild(spawnimg);
                    }
                    $("#bkboMainDivid").append(spawnImgsHolder);
                }
            }
        });
    }
    ajax_get_adds();
}