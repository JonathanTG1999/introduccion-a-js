const $primerNombre = document.querySelector("#nombre-usuario").value;
const $segundoNombre = document.querySelector("#nombre-usuario2").value;
const $apellidoUsuario = document.querySelector("#apellido-usuario").value;
const $edadUsuario = document.querySelector("#edad-usuario").value;
const $bontonIngreso = document.querySelector("#ingresar").value;

$bontonIngreso.onclick = function(){
    document.querySelector(`h1`).innerText = `Bienvenido ${$primerNombre} + ${$segundoNombre} + ${$apellidoUsuario} + de ${$edadUsuario} años`
    return false
}