const $numerosDelHTML = document.querySelectorAll(`li`);
const numeros = conseguirNumeros();

const numeroPromedio = conseguirPromedio(numeros);
const numeroMenor = conseguirNumeroMenor(numeros);
const numeroMayor = conseguirNumeroMayor(numeros);
const numeroMasRepetido = conseguirNumeroMasRepetido(numeros);

const $numeropromedio = document.querySelector("#numero-promedio");
const $numeroMenor = document.querySelector("#numero-menor");
const $numeroMayor = document.querySelector("#numero-mayor");
const $numeroMasRepetido = document.querySelector("#numero-mas-repetido");

$numeroMenor.innertext = conseguirNumeroMenor;
$numeroMayor.innertext = conseguirNumeroMayor;
$numeroMasRepetido.innertext = conseguirNumeroMasRepetido;

function conseguirNumeros() {
  const numerosTotales = [];
  for (i = 0; i < $numerosDelHTML.length; i = i + 1) {
    numerosTotales.push(Number($numerosDelHTML[i].innerText));
  }

  return numerosTotales;
}

function conseguirPromedio(numeros) {
  let suma = 0;
  for (i = 0; i < numeros.length; i = i + 1) {
    suma = suma + numeros[i];
  }

  return suma / numeros.length;
}

function conseguirNumeroMenor(numeros) {
  let numeroMenor = numeros[0];
  for (i = 0; i < numeros.length; i = i + 1) {
    if (numeros[i] < numeroMenor) {
      numeroMenor = numeros[i];
    }
  }

  return numeroMenor;
}

function conseguirNumeroMayor(numeros) {
  let numeroMayor = numeros[0];
  for (i = 0; i < numeros.length; i = i + 1) {
    if (numeros[i] > numeroMayor) {
      numeroMayor = numeros[i];
    }
  }
  return numeroMayor;
}

function conseguirNumeroMasRepetido(numeros) {
  let numeroMasRepetido;
  for (i = 0; i < numeros.length; i = i + 1) {
    for (j = i + 1; j < numeros.length; j = j + 1) {
      if (numeros[i] === numeros[j]) {
        numeroMasRepetido = numeros[j];
      }
    }
  }
  return numeroMasRepetido;
}
