var div2 = document.getElementById("div2");
div2.innerHTML = "Hello div KAKSI";

var ulos = document.getElementById("pvm");
var pvm = new Date();
ulos.innerHTML = "<p>" + pvm;
ulos.innerHTML += "<p>" + pvm.toLocaleDateString();

var tunnit = pvm.getHours();
var minuutit = pvm.getMinutes();
var sekunnit = pvm.getSeconds();

if (tunnit <10) {
    tunnit = "0" + tunnit;
}

if (minuutit <10) {
    minuutit = "0" + minuutit;
}

if (sekunnit<10) {
    sekunnit = "0" + sekunnit;
}

ulos.innerHTML += "<p>" + pvm.toLocaleDateString() + "\t" + tunnit + ":" + minuutit + ":" + sekunnit;

