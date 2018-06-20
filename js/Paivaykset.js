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

///////////////////////////////////////////////////

var kk = {"tammi":31, "helmi":28, "maalis":31, "huhti":30, "touko":31, "kesa":30, "heina":31, "elo":31, "syys":30, "loka":31, "marras":30, "joulu":31};
var vko = ["ma","ti","ke","to","pe","la","su"];
var vuodenpaiva = 0;

var kalenterielementti = document.getElementById("kalenterielementti");

for (var avain in kk) {
    var kuukausielementti = document.createElement("div");
    kalenterielementti.appendChild(kuukausielementti);
    var paivat = kk[avain];

    var kuukausiotsikko = document.createElement("h3");
    var kuukaudenNimi = document.createTextNode(avain + "kuu");
    kuukausiotsikko.appendChild(kuukaudenNimi);
    kuukausielementti.appendChild(kuukausiotsikko);

    for (var i = 0 ; i < paivat ; i++) {
        var paivaelementti = document.createElement("div");
        var paivanTekstisisalto = document.createTextNode((i+1) + ". " + vko[vuodenpaiva++ % 7]);
        paivaelementti.appendChild(paivanTekstisisalto);
        kuukausielementti.appendChild(paivaelementti);
    }
}