document.addEventListener("DOMContentLoaded", function () {
    const calcularButton = document.getElementById("calcular");

    calcularButton.addEventListener("click", function () {
        const nombre = prompt("Por favor, ingrese su nombre:");
        const edad = prompt("Por favor, ingrese su edad:");

        if (nombre && edad) {
            const edadActual = parseInt(edad);
            const edadProxima = edadActual + 1;

            const mensaje = `Hola ${nombre}, tienes ${edadActual} años y el año que viene tendrás ${edadProxima} años`;

            console.log(mensaje);
        } else {
            console.log("Por favor, ingrese un nombre y una edad válida.");
        }
    });
});
