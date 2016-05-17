function converteKmParaMilhas()
{
    var km = document.getElementById('number').value;
    var miles = km / 1.6;
    document.getElementById("resultado").innerHTML = miles.toString() + " miles";
} 

