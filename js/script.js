// Funkcija za sabiranje dva inputa
function Saberi() {

    var y = document.getElementById("prviBroj").value;
    var z = document.getElementById("drugiBroj").value;

    alert(+y + +z);
}


// Funkcija za prikaz datuma
function PokaziDatum() {

    var date = new Date();
    document.getElementById("datumText").innerHTML = date;
}

// Funkcija za animaciju kocke
function Animiraj() {

    var elem = document.getElementById("myAnimation");
    var pos = 0;
    var id = setInterval(Ponavljaj, 10);
 
    function Ponavljaj() {

        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}