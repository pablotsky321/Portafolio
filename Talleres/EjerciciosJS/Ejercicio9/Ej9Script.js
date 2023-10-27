function analizarPalabra() {
    var palabra = document.getElementById("palabra").value.toLowerCase();
    var longitud = palabra.length;
    var vocales = 0;
    var consonantes = 0;

    for (var i = 0; i < longitud; i++) {
        var letra = palabra[i];
        if (letra.match(/[aeiouáéíóú]/)) {
            vocales++;
        } else if (letra.match(/[bcdfghjklmnpqrstvwxyz]/)) {
            consonantes++;
        }
    }

    console.log("Longitud de la palabra: " + longitud);
    console.log("Número de vocales: " + vocales);
    console.log("Número de consonantes: " + consonantes);
}