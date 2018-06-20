var otsikot = document.getElementsByTagName("h2");
for (var i = 0 ; i < otsikot.length ; i++) {
    var nykyinenh2 = otsikot[i];
    nykyinenh2.onclick = piilota;
}

function piilota() {
    console.log("Kutsu tuli perille.");
    var nh2 = event.target;
    console.dir(nh2);
    var piilotettavaDivi = nh2.nextElementSibling;

    if(piilotettavaDivi.style.display === "none") {
        piilotettavaDivi.style.display = "block";
    }

    else {
        piilotettavaDivi.style.display = "none";
    }

}