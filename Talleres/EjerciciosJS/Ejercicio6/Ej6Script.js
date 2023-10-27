var suma = 0;
var contador = 0;

function sumarNumeros() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultado = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultado.innerHTML = "Ingresa un número válido.";
    } else {
        suma += numero;
        contador++;
    if (suma <= 50) {
        resultado.innerHTML = "Suma acumulada: " + suma + "<br>Números introducidos: " + contador;
    }   else {
        resultado.innerHTML = "La suma superó 50<br>Suma total: " + suma + "<br>Números introducidos: " + contador;
    }
    }
}