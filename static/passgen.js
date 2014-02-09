function passGen() {
    var sizePass = $('#sizepass').val();
    var passVer = $('#version').val();
    var alphabet = $('#alphabet').val();

    if (sizePass == "") { sizePass = 15; }
    if (passVer == "") { passVer = "1"; }
    if (alphabet == "") { alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; }

    var generatedPass = convert(Sha256.hash($('#sword').val() + $('#site').val() + passVer + $('#username').val()), alphabet).substring(0,sizePass);

    $('#generatedpass').html(generatedPass);

    return false;
}
