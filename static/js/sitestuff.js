$(function() {
    $("#sword").focus();
});

$(document).ready(function(){
    $('#generate').click(function(){
        return passGen();
    });
});

$(document).keypress(function(e){
    if (e.which == 13){
        $("#generate").click();
    }
});

$(document).ready(function(){
    $('#advanced').click(function(){
        $('#advancedOptions').toggle();
    });
});

$(document).ready(function(){
    $(".flip").click(function(){
        if($('#gengroup').css("opacity") == 0) {
            $('#gengroup').css({opacity:1});
        }
        else {
            $('#gengroup').css({opacity:0});
        }
    });
});
