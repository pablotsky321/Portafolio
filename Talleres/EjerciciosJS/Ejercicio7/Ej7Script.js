function realizarOperaciones() {
    var numeros = [3, 5, 7, 2, 8];
    var pares = [];
    var impares = [];

    for (var i = 0; i < numeros.length; i++) {
        var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
        var resultado = numeros[i] * numeroAleatorio;

        console.log(numeros[i] + " x " + numeroAleatorio + " = " + resultado);

        if (resultado % 2 === 0) {
            pares.push(resultado);
        } else {
            impares.push(resultado);
        }
    }

    console.log("Array de números pares: " + pares);
    console.log("Array de números impares: " + impares);
}