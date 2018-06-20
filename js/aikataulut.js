var req = new XMLHttpRequest();

req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
        var taulu = JSON.parse(req.responseText);
        console.dir(taulu);
        var lista = document.getElementById("lista");

        for (var i = 0; i < taulu.length; i++) {
            var juna = taulu[i];
            var junanNumero = juna.trainNumber;
            var lahtoaika = juna.timeTableRows[0].scheduledTime.substring(11,19);
            var asema = juna.timeTableRows[0].stationShortCode;


            var junaListalla = document.createElement("li");
            var junaTeksti = document.createTextNode("Juna " + junanNumero + " lähtee asemalta " + asema
                + " klo " + lahtoaika);
            junaListalla.appendChild(junaTeksti);
            lista.appendChild(junaListalla);

        }
    }
};


function haedata() {
    req.open("GET", "https://rata.digitraffic.fi/api/v1/live-trains/station/HKI/LH" , true);
    req.send(null);
}

