const $primerNombre = document.querySelector("#nombre-usuario");
const $segundoNombre = document.querySelector("#nombre-usuario2");
const $apellidoUsuario = document.querySelector("#apellido-usuario");
const $edadUsuario = document.querySelector("#edad-usuario");
const $bontonIngreso = document.querySelector("#ingresar");

$bontonIngreso.onclick = function (event) {
  document.querySelector(
    `h1`
  ).innerText = `Bienvenido ${$primerNombre.value} + ${$segundoNombre.value} + ${$apellidoUsuario.value} + de ${$edadUsuario.value} años`;
  event.preventDefault();
};

function validarNombresIngresados(
  $primerNombre,
  $segundoNombre,
  $apellidoUsuario,
  $edadUsuario
) {
  if ($primerNombre === "" || $apellidoUsuario === "" || $edadUsuario === "") {
    return 0;
  } else if ($segundoNombre === "") {
    return 1;
  } else {
    return 2;
  }
}
