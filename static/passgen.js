function passGen() {
    var sizePass = document.passgen.sizepass.value;
    var passVer = document.passgen.version.value;
    if (sizePass == "") { sizePass = 64; }
    if (passVer == "") { passVer = "1"; }
    var generatedPass = convert(Sha256.hash(document.passgen.sword.value + document.passgen.site.value + passVer)).substring(0,sizePass);
    document.getElementById('generatedpass').innerHTML = generatedPass;
    return false;
}
