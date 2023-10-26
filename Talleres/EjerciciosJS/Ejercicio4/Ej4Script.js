function calcularFactorial() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultado = document.getElementById("resultado");
    
    if (numero > 0) {
        var factorial = 1;
        for (var i = 1; i <= numero; i++) {
            factorial *= i;
        }
        resultado.innerHTML = "El factorial de " + numero + " es " + factorial;
    } else {
        resultado.innerHTML = "Por favor, ingresa un número entero mayor que cero.";
    }
}