function calcularArea() {
    var figura = document.getElementById("figura").value;
    var resultado = document.getElementById("resultado");

    if (figura === "triangulo") {
        var base = parseFloat(document.getElementById("baseTriangulo").value);
        var altura = parseFloat(document.getElementById("alturaTriangulo").value);
        var area = (base * altura) / 2;
        resultado.innerHTML = "El área del triángulo es: " + area;
    } else if (figura === "rectangulo") {
        var base = parseFloat(document.getElementById("baseRectangulo").value);
        var altura = parseFloat(document.getElementById("alturaRectangulo").value);
        var area = base * altura;
        resultado.innerHTML = "El área del rectángulo es: " + area;
    } else if (figura === "circulo") {
        var radio = parseFloat(document.getElementById("radioCirculo").value);
        var area = Math.PI * Math.pow(radio, 2);
        resultado.innerHTML = "El área del círculo es: " + area;
    }
}

document.getElementById("figura").addEventListener("change", function() {
    var figura = document.getElementById("figura").value;
    document.getElementById("triangulo").style.display = figura === "triangulo" ? "block" : "none";
    document.getElementById("rectangulo").style.display = figura === "rectangulo" ? "block" : "none";
    document.getElementById("circulo").style.display = figura === "circulo" ? "block" : "none";
});