function result(hash){
    var shaObj = new jsSHA(hash, "TEXT");
    var genSha = shaObj.getHash("SHA-512", "HEX");
    var alphabet = $('#alphabet').val();
    var sizePass = $('#sizepass').val();

    if (alphabet == "") { alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; }
    if (sizePass == "") { sizePass = 15; }

    var generatedPass = convert(genSha, alphabet).substring(0,sizePass);

    $('#generatedpass').val(generatedPass);
    $('#passalert').show();
    $('#generatedpass').focus();
    $('#generatedpass').select();
}

function crypt(sword, site, passVer, uname){
    var bcrypt = new bCrypt();
    var salt = site + passVer + uname;
    var shaObj = new jsSHA(salt, "TEXT");

    salt = "$2a$05$" + shaObj.getHash("SHA-512", "HEX").substring(0, 22)

    try{
        bcrypt.hashpw(sword, salt, result);
    }catch(err){
        alert(err);
        return;
    }
}


function passGen() {
    var passVer = $('#version').val();

    if (passVer == "") { passVer = "1"; }

    crypt($('#sword').val(), $('#site').val(), passVer, $('#username').val());

    return false;
}
