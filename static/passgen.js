function passGen() {
    document.getElementById('generatedpass').innerHTML = Sha256.hash(document.passgen.sword.value + document.passgen.site.value).substring(0,19);
    return false;
}
