const $body = document.querySelector(`body`);
const $botonAñadir = document.querySelector(`#añadir`);
const $botonRemover = document.querySelector(`#remover`);
const $botonCalcularSalario = document.querySelector(`#calcular-salario`);
const $salarios = document.querySelector(`#salarios`);
const $formulario = document.querySelector(`#formulario`);
const $resultados = document.querySelector(`#resultados`);

const $formularioTitulo = document.createElement(`h3`);
$formularioTitulo.classList.add = "formulario-titulo";
$formularioTitulo.innerText =
  "Ingresar el salario anual de cada miembro de la familia";
$salarios.insertBefore($formularioTitulo, $formulario);

$botonAñadir.onclick = function () {
  const $salarioLabel = crearLabel("Salario Anual :", "salario-label");
  const $salarioInput = crearInput("salario-input");

  $formulario.insertBefore($salarioLabel, $botonCalcularSalario);
  $formulario.insertBefore($salarioInput, $botonCalcularSalario);
  return false;
};

$botonRemover.onclick = function () {
  const $label = document.querySelectorAll(`.salario-label`);
  const $input = document.querySelectorAll(`.salario-input`);

  $label[$label.length - 1].remove();
  $input[$input.length - 1].remove();
  $resultados.style.display = "none";
  limpiarInput($input);
  return false;
};

$botonCalcularSalario.onclick = function () {
  const salariosHTML = document.querySelectorAll(`.salario-input`);
  const salarios = conseguirNumeros(salariosHTML);

  const salarioMayor = conseguirMayor(salarios);
  const salarioMenor = conseguirMenor(salarios);
  const salarioPromedio = conseguirPromedio(salarios);
  const salarioPromedioMensual = conseguirPromedioMensual(salarioPromedio);

  const $salarioMayor = document.querySelector(`#mayor-salario`);
  const $salarioMenor = document.querySelector(`#menor-salario`);
  const $salarioPromedio = document.querySelector(`#salario-promedio`);
  const $salarioPromedioMensual = document.querySelector(
    `#salario-promedio-mensual`
  );
  $salarioMayor.innerText = `El mayor salario anual es de: ${salarioMayor}`;
  $salarioMenor.innerText = `El menor salario anual es de: ${salarioMenor}`;
  $salarioPromedio.innerText = `El salario promedio anual es de ${salarioPromedio}`;
  $salarioPromedioMensual.innerText = `El salario promedio mensual es de ${salarioPromedioMensual}`;
  return false;
};

function crearLabel(message, id) {
  const $label = document.createElement(`label`);
  $label.htmlFor = id;
  $label.id = id;
  $label.classList.add(id);
  $label.innerText = message;
  return $label;
}

function crearInput(id) {
  const $input = document.createElement(`input`);
  $input.type = "number";
  $input.id = id;
  $input.classList.add(id);
  return $input;
}

function conseguirNumeros(numbers) {
  let numerosTotales = [];
  for (i = 0; i < numbers.length; i = i + 1) {
    numerosTotales.push(Number(numbers[i].value));
  }

  return numerosTotales;
}

function conseguirMayor(numbers) {
  let mayorNumero = numbers[0];
  for (i = 1; i < numbers.length; i = i + 1) {
    if (numbers[i] > mayorNumero) {
      mayorNumero = numbers[i];
    }
  }
  return mayorNumero;
}

function conseguirMenor(numbers) {
  let menorNumero = numbers[0];
  for (i = 1; i < numbers.length; i = i + 1) {
    if (numbers[i] < menorNumero) {
      menorNumero = numbers[0];
    }
  }
  return menorNumero;
}

function conseguirPromedio(numbers) {
  let promedio = 0;
  for (i = 0; i < numbers.length; i = i + 1) {
    promedio = promedio + numbers[i];
  }
  return promedio / numbers.length;
}

function conseguirPromedioMensual(salarioAnual) {
  const MesesEnUnAnio = 12;
  return salarioAnual / MesesEnUnAnio;
}

function limpiarInput(numbers) {
  for (i = 0; i < numbers.length; i = i + 1) {
    numbers[i].value = "";
  }
}
