const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function calcularLetraDNI() {
    var dni = parseInt(document.getElementById("dni").value);
    var resultado = document.getElementById("resultado");

    if (isNaN(dni) || dni < 0 || dni > 99999999) {
        resultado.innerHTML = "El número de DNI no es válido.";
    } else {
        var posicionLetra = dni % 23;
        var letra = letras[posicionLetra];
        resultado.innerHTML = "La letra correspondiente al DNI " + dni + " es: " + letra;
    }
}