function verificarPrimo() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultado = document.getElementById("resultado");

    if (numero <= 1) {
        resultado.innerHTML = "Ingresa un número entero mayor que 1.";
    } else {
        var esPrimo = true;
        for (var i = 2; i < numero; i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) {
            resultado.innerHTML = numero + " es un número primo.";
        } else {
            resultado.innerHTML = numero + " no es un número primo.";
        }
    }
}