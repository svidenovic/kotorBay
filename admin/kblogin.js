
$(document).ready(function()
{    
    var vid="keyinput", vphp="vlogIn.php", vhtml="kbadmin.html";
    
    $("#submitkey").click(function(){
        vida.vLogIn( vid, vphp, vhtml );
    });
    
    $("#keyinput").keypress(function(event){
        if( event.keyCode == 13 ){
            vida.vLogIn( vid, vphp, vhtml );
        }
    });
    
    $("#logoutbutton").click(function(){
        vida.vLogOut( "vlogOut.php", "kblogin.html" );
    });

});