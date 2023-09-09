function alerta(){
let Nombre =document.getElementsByClassName('Nombre')
let Apellido= document.getElementsByClassName('Apellido')
let Genero=document.querySelector('input[name="Genero"]:checked')
if(Genero){
    alert(Nombre.value+" "+Apellido.value+" es de genero "+Genero.value);
}else{
    alert("Seleccione un genero")
}

}