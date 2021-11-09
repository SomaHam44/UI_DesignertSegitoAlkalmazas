function mintaszovegbeBeir()  {
    let szoveg = document.getElementById("szoveg").value;
    if (szoveg === "" || szoveg === " ") {
        document.getElementById("hibauzenet").innerHTML = "A mintaszöveg nem lehet üres!";
        document.getElementById("hibauzenet").style.color = "red";

    }
    else {
        document.getElementById("hibauzenet").innerHTML = "";
        document.getElementById("hibauzenet").style.color = "black";

    }
    document.getElementById("megjelenites").innerHTML = szoveg +  "<br>";


}


function gombraKattintva() {
    let szoveg = document.getElementById("szoveg").value;
    document.getElementById("megjelenites").innerHTML = szoveg +  "<br>";
    document.getElementById("megjelenites").style.fontSize = 12;
    document.getElementById("megjelenites").style.color = "black";
    document.getElementById("megjelenites").style.backgroundColor = "white";
}

function betumeretValtozasa() {
    let betumeret = document.getElementById("betumerete").value;
    document.getElementById("megjelenites").style.fontSize = betumeret + "pt";

}

function szovegSzinmegvaltoztat() {
    let betuszin = document.getElementById("szovegszine").value;
    document.getElementById("megjelenites").style.color = betuszin;

}

function hatterszinmegvaltoztat() {
    let hatter = document.getElementById("hatterszine").value;
    document.getElementById("megjelenites").style.backgroundColor = hatter;

}


function init() {
    document.getElementById("szoveg").addEventListener("input", mintaszovegbeBeir);
    document.getElementById("betumerete").addEventListener("input", betumeretValtozasa);
    document.getElementById("szovegszine").addEventListener("input", szovegSzinmegvaltoztat);
    document.getElementById("hatterszine").addEventListener("input", hatterszinmegvaltoztat);
    document.getElementById("gomb").addEventListener("click", gombraKattintva);
}



document.addEventListener("DOMContentLoaded", init);