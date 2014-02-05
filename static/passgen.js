function passGen() {
    document.getElementById('generatedpass').innerHTML = Sha256.hash(document.passgen.sword + document.passgen.site).substring(0,19);
    return false;
}
