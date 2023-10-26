function mostrarParesImpares() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = '';

    for (var i = 1; i <= numero; i++) {
        if (i % 2 === 0) {
            resultado.innerHTML += i + " - es par<br>";
        } else {
            resultado.innerHTML += i + " - es impar<br>";
        }
    }
}