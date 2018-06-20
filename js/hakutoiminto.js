var req = new XMLHttpRequest();

req.onreadystatechange = function () {
    if (req.readyState === 4) {
        if (req.status === 200) {
// Tehdään jotakin, pyyntö on valmis
            var jsonOlio = JSON.parse(req.responseText);
            var listaelementti = document.getElementById("lista");

            for (var i = 0; i < jsonOlio.length; i++) {
                var olio = jsonOlio[i];
                var lisattavaTeksti = "ID: " + olio.id + ", nimi: " + olio.name + ", email: " + olio.email;
                var uusiListaItem = document.createElement("li");
                var uusiTekstielementti = document.createTextNode(lisattavaTeksti);
                uusiListaItem.appendChild(uusiTekstielementti);
                listaelementti.appendChild(uusiListaItem);
            }

        } else {
            alert("Pyyntö epäonnistui");
        }
    }
};

function hae() {

    req.open('GET', 'http://localhost:3000/api/personnel', true);
    req.send(null);

}