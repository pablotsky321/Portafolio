const colores = ["azul", "amarillo", "rojo", "verde", "rosa"];

function verificarColor() {
    var colorUsuario = prompt("Ingresa un color:").toLowerCase();
    var resultado = "";

    if (colores.includes(colorUsuario)) {
        resultado = "El color " + colorUsuario + " se encuentra en el array.";
    } else {
        resultado = "El color " + colorUsuario + " no se encuentra en el array.";
    }

    alert(resultado);
}