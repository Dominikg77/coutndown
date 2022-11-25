var ReleaseDate = new Date("Nov 26, 2022 13:00:00").getTime();
var TimerFunction = setInterval(function() {
    var DatumHeute = new Date().getTime();
    var Differenz = ReleaseDate - DatumHeute;

    var d = Math.floor(Differenz / (1000 * 60 * 60 * 24));
    var h = Math.floor((Differenz % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((Differenz % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((Differenz % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
        "<span>" +
        d +
        "<br><i>Tage</i></span><span>" +
        h +
        "<br><i>Stunden</i></span><span>" +
        m +
        "<br><i>Minuten</i></span><span>" +
        s +
        "<br><i>Sekunden</i></span>";

    if (Differenz < 0) {
        clearInterval(TimerFunction);
        document.getElementById("timer").innerHTML = "Abgelaufen";
    }
}, 1000);
