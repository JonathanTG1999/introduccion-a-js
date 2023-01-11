const $botonAgregarMiembros = document.querySelector("#agregar-miembro");
const $botonCalcularEdad = document.querySelector("#calcular-edad");
const $botonRemover = document.querySelector("#remover");

$botonAgregarMiembros.onclick = function () {
  const miembros = Number(document.querySelector("#miembros-familia").value);
  if (miembros > 0) {
    agregar(miembros);
  } else {
    alert("El valor 0 no es valido.");
  }

  return false;
};

function agregar(miembros) {
  const $formulario = document.querySelector("#formulario");
  for (let i = 1; i <= miembros; i = i + 1) {
    const label = document.createElement("label");
    label.textContent = "Edad";
    $formulario.appendChild(label);
    const input = document.createElement("input");
    input.type = "number";
    input.id = "edad-integrante";
    $formulario.appendChild(input);
  }
}

function borrar(miembros) {
  for (let i = 0; i < miembros.length; i = i + 1) {
    miembros[i].value = "";
  }
}

$botonRemover.onclick = function () {
  const $label = document.querySelectorAll("#formulario");
  const $input = document.querySelectorAll("#edad-integrante");
  $label[$label.length - 1].remove();
  $input[$input.length - 1].remove();
  borrar($input);
  return false;
};

$botonCalcularEdad.onclick = obtenerEdades;

function obtenerEdades() {
  const $edades = document.querySelectorAll("#edad-integrante");
  let edadIntegrante = [];
  for (let i = 0; i < $edades.length; i = i + 1) {
    const edades = Number($edades[i].value);
    edadIntegrante.push(edades);
  }
  const $mayorEdad = document.querySelector("#mayor-edad");
  $mayorEdad.textContent = `${calcularEdadMayor(edadIntegrante)}`;
  const $menorEdad = document.querySelector("#menor-edad");
  $menorEdad.textContent = `${calcularEdadMenor(edadIntegrante)}`;
  const $promedioEdad = document.querySelector("#promedio-edad");
  $promedioEdad.textContent = `${calcularEdadPromedio(edadIntegrante)}`;
}

function calcularEdadPromedio(edadIntegrante) {
  let resultado = 0;
  for (let i = 0; i < edadIntegrante.length; i = i + 1) {
    resultado = resultado + edadIntegrante[i];
  }
  return resultado / edadIntegrante.length;
}

function calcularEdadMayor(edadIntegrante) {
  let resultadoMayor = edadIntegrante[0];
  for (let i = 0; i < edadIntegrante.length; i = i + 1) {
    if (edadIntegrante[i] > resultadoMayor) {
      resultadoMayor = edadIntegrante[i];
    }
  }
  return resultadoMayor;
}

function calcularEdadMenor(edadIntegrante) {
  let resultadoMenor = edadIntegrante[0];
  for (let i = 0; i < edadIntegrante.length; i = i + 1) {
    if (edadIntegrante[i] < resultadoMenor) {
      resultadoMenor = edadIntegrante[i];
    }
  }
  return resultadoMenor;
}
