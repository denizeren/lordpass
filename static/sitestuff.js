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
